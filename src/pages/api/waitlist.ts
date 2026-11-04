import type { APIRoute } from 'astro';
import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import { list, put } from '@vercel/blob';

// The pre-launch waitlist. Separate from /api/book on purpose: delete this file and
// src/components/WaitlistCover.astro and the site is back to how it was.
//
// Step 1 (name, mobile, marina) emails LEAD_TO_EMAIL through Resend, like /api/book, and saves a record
// to Vercel Blob at waitlist/<marina>/<id>.json. Step 2 (optional answers) overwrites that same record.
// GET /api/waitlist with "Authorization: Bearer <WAITLIST_ADMIN_TOKEN>" returns signups counted by marina.

export const prerender = false;

const MARINAS = ['Westhaven', 'Bayswater', 'Gulf Harbour', 'Orakei', 'Pine Harbour', 'Another marina'];
const LENGTHS = ['Under 8m', '8–12m', '12–16m', '16m+'];
const SERVICES = ['Essential Reset', 'Valet', 'Provisioning', 'Charter Ready'];
const TIMINGS = ['Before Christmas', 'Over summer', 'Just curious'];

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const MIN_FILL_MS = 2500;
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
const hits = new Map<string, number[]>();

// Best effort: counts per function instance, same as /api/book
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

type Signup = {
  id: string;
  source: 'waitlist';
  createdAt: string;
  updatedAt: string;
  name: string;
  mobile: string;
  marina: string;
  length?: string;
  services?: string[];
  timing?: string;
  step2?: 'saved' | 'skipped';
};

const text = (v: unknown, max = 200) => String(v ?? '').trim().slice(0, max);
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// NZ mobiles: 02x, with or without +64, spaces and dashes allowed
function nzMobile(raw: string) {
  const local = raw.replace(/[\s()-]/g, '').replace(/^\+?64/, '0');
  return /^02\d{7,9}$/.test(local) ? local : '';
}

// Step 1 hands back a signed token holding the record, so step 2 can rewrite it without a database read
// and nobody can edit someone else's signup by guessing an id.
const secret = () => process.env.WAITLIST_SECRET || process.env.RESEND_API_KEY || '';
const sign = (body: string) => createHmac('sha256', secret()).update(body).digest('base64url');
function issue(s: Signup) {
  const body = Buffer.from(JSON.stringify(s)).toString('base64url');
  return `${body}.${sign(body)}`;
}
function verify(token: string): Signup | null {
  const [body, mac] = token.split('.');
  if (!body || !mac || !secret()) return null;
  const want = Buffer.from(sign(body));
  const got = Buffer.from(mac);
  if (want.length !== got.length || !timingSafeEqual(want, got)) return null;
  try {
    const s = JSON.parse(Buffer.from(body, 'base64url').toString()) as Signup;
    return Date.now() - Date.parse(s.createdAt) < TOKEN_TTL_MS ? s : null;
  } catch {
    return null;
  }
}

async function email(subject: string, rows: [string, string][]) {
  const to = process.env.LEAD_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !to) throw new Error('Missing RESEND_API_KEY or LEAD_TO_EMAIL');
  const from = process.env.FROM_EMAIL || 'Shore Leave <onboarding@resend.dev>';
  const table = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><th align="left" style="padding:8px 12px 8px 0;border-top:1px solid #d6c8b0;font-size:14px">${esc(k)}</th><td style="padding:8px 0;border-top:1px solid #d6c8b0;font-size:15px">${esc(v)}</td></tr>`)
    .join('');
  const html = `<!doctype html><html lang="en-NZ"><body style="margin:0;background:#d6c8b0;padding:24px 12px;font-family:Helvetica,Arial,sans-serif;color:#2b2a28"><table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#faf8f3;border-collapse:collapse"><tr><td style="background:#2b2a28;color:#faf8f3;padding:20px 24px;font-size:20px;font-weight:700;letter-spacing:.04em;text-transform:uppercase">Shore Leave</td></tr><tr><td style="padding:24px"><h1 style="margin:0 0 16px;font-weight:400;font-size:26px">${esc(subject)}</h1><table role="presentation" style="width:100%;border-collapse:collapse">${table}</table></td></tr></table></body></html>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from, to, subject: subject.replace(/[\r\n]+/g, ' '), html }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

// Saved only when a Blob store is connected to the project (that sets BLOB_READ_WRITE_TOKEN)
const stored = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);
async function save(s: Signup) {
  if (!stored()) return console.warn('Waitlist: BLOB_READ_WRITE_TOKEN not set, record not stored', s.id);
  await put(`waitlist/${slug(s.marina)}/${s.id}.json`, JSON.stringify(s), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

const json = (data: object, status = 200) => Response.json(data, { status, headers: { 'cache-control': 'no-store' } });

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: 'Please use the form on our site.' }, 403);

  const ip = (request.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
  if (limited(ip)) return json({ error: 'Too many tries. Text 022 305 3853 and we’ll add you.' }, 429);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'That did not send. Please try again.' }, 400);
  }

  const now = new Date().toISOString();

  // Step 2: optional answers, attached to the step-1 record by its token
  if (body.step === 2) {
    const prev = verify(text(body.token, 4000));
    if (!prev) return json({ ok: true, note: 'token missing or expired' });
    const skipped = body.skip === true;
    const length = skipped ? '' : text(body.length, 20);
    const timing = skipped ? '' : text(body.timing, 30);
    const services = skipped ? [] : (Array.isArray(body.services) ? body.services : []).map((s) => text(s, 30));
    if (length && !LENGTHS.includes(length)) return json({ error: 'Pick a boat length from the list.' }, 400);
    if (timing && !TIMINGS.includes(timing)) return json({ error: 'Pick a time from the list.' }, 400);
    if (services.some((s) => !SERVICES.includes(s))) return json({ error: 'Pick services from the list.' }, 400);
    const next: Signup = { ...prev, updatedAt: now, length, services, timing, step2: skipped ? 'skipped' : 'saved' };
    try {
      await save(next);
      if (!skipped && (length || timing || services.length)) {
        await email(`Waitlist details: ${next.name} – ${next.marina}`, [
          ['Name', next.name],
          ['Mobile', next.mobile],
          ['Marina', next.marina],
          ['Boat length', length],
          ['Would use', services.join(', ')],
          ['First one', timing],
          ['Source', 'waitlist (step 2)'],
          ['Time', now],
        ]);
      }
    } catch (e) {
      // The signup itself already landed in step 1, so a failure here is logged, not shown
      console.error('Waitlist step 2 failed', e);
    }
    return json({ ok: true });
  }

  // Step 1. Bots fill the honeypot or submit instantly: tell them it worked and keep nothing.
  const started = Number(body.t);
  if (text(body.company) || !started || Date.now() - started < MIN_FILL_MS) return json({ ok: true, token: '' });

  const name = text(body.name, 100);
  const mobile = nzMobile(text(body.mobile, 30));
  const marina = text(body.marina, 40);
  if (!name) return json({ error: 'Please add your name.' }, 400);
  if (!mobile) return json({ error: 'That doesn’t look like an NZ mobile. Try 021 123 4567.' }, 400);
  if (!MARINAS.includes(marina)) return json({ error: 'Pick your marina from the list.' }, 400);

  const signup: Signup = { id: randomUUID(), source: 'waitlist', createdAt: now, updatedAt: now, name, mobile, marina };

  // Email is what /api/book relies on, so it has to succeed. Storage is best effort on top.
  try {
    await email(`Waitlist: ${name} – ${marina}`, [
      ['Name', name],
      ['Mobile', mobile],
      ['Marina', marina],
      ['Offer', 'First Essential Reset 50% off'],
      ['Source', 'waitlist'],
      ['Time', now],
    ]);
  } catch (e) {
    console.error('Waitlist email failed', e);
    return json({ error: 'That did not send. Text 022 305 3853 and we’ll add you.' }, 502);
  }
  await save(signup).catch((e) => console.error('Waitlist store failed', e));

  return json({ ok: true, token: secret() ? issue(signup) : '' });
};

// Signup counts by marina, for the owner only
export const GET: APIRoute = async ({ request }) => {
  const admin = process.env.WAITLIST_ADMIN_TOKEN;
  if (!admin || request.headers.get('authorization') !== `Bearer ${admin}`) return json({ error: 'Not found' }, 404);
  if (!stored()) return json({ error: 'No Blob store connected (BLOB_READ_WRITE_TOKEN is not set).' }, 503);

  const counts: Record<string, number> = Object.fromEntries(MARINAS.map((m) => [m, 0]));
  const bySlug = Object.fromEntries(MARINAS.map((m) => [slug(m), m]));
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: 'waitlist/', cursor, limit: 1000 });
    for (const b of page.blobs) {
      const m = bySlug[b.pathname.split('/')[1]];
      if (m) counts[m]++;
    }
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return json({ total, byMarina: counts });
};
