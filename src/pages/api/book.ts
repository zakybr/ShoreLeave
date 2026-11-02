import type { APIRoute } from 'astro';
import { confirmationEmail, leadEmail, type Lead } from '../../lib/email';

export const prerender = false;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 2500;
const hits = new Map<string, number[]>();

// Best effort: counts per function instance. Add a Vercel Firewall rate limit for a hard cap.
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function send(payload: object) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function read(request: Request): Promise<Record<string, unknown>> {
  if ((request.headers.get('content-type') ?? '').includes('application/json')) return request.json();
  const form = await request.formData();
  return { ...Object.fromEntries(form), services: form.getAll('services') };
}

const text = (v: unknown, max = 200) => String(v ?? '').trim().slice(0, max);

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const ok = () => (wantsJson ? Response.json({ ok: true }) : redirect('/book/thanks', 303));
  const fail = (status: number, error: string) =>
    wantsJson ? Response.json({ error }, { status }) : new Response(error, { status });

  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return fail(403, 'Please use the form on our site.');

  const ip = (request.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
  if (limited(ip)) return fail(429, 'Too many tries. Call or text 022 305 3853 and we will sort it out.');

  let body: Record<string, unknown>;
  try {
    body = await read(request);
  } catch {
    return fail(400, 'That did not send. Please try again.');
  }

  // Bots fill the honeypot or submit instantly. Tell them it worked and send nothing.
  const started = Number(body.t);
  if (text(body.company) || (started && Date.now() - started < MIN_FILL_MS)) return ok();

  const services = (Array.isArray(body.services) ? body.services : [body.services]).map((s) => text(s, 60)).filter(Boolean);
  const withBeds = services.includes('Valet') || services.includes('Charter Ready');

  const lead: Lead = {
    name: text(body.name, 100),
    mobile: text(body.mobile, 30),
    email: text(body.email, 150),
    boatType: text(body.boat_type, 60),
    boatLength: text(body.boat_length, 6),
    location: text(body.location, 150),
    services,
    beds: withBeds ? text(body.beds, 2) : '',
    linen: withBeds ? text(body.linen, 150) : '',
    date: text(body.date, 10),
    timeWindow: text(body.time_window, 30),
    notes: text(body.notes, 3000),
    heard: text(body.heard, 60),
    offer: text(body.offer, 60),
  };

  // The popup is a short form: name, mobile and where the boat is. The rest comes from the follow-up text.
  const full = !lead.offer;
  if (!lead.name || !lead.mobile || !lead.boatType) return fail(400, 'Please fill in the required fields.');
  if (full && (!lead.location || !lead.date)) return fail(400, 'Please fill in the required fields.');
  if (full && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return fail(400, 'That email address does not look right.');
  if (!/^[+\d][\d\s()-]{6,}$/.test(lead.mobile)) return fail(400, 'That mobile number does not look right.');
  if (full && !lead.services.length) return fail(400, 'Tick at least one service, so we know what to quote.');
  if (full && lead.beds) {
    const beds = Number(lead.beds);
    if (!Number.isInteger(beds) || beds < 0 || beds > 10) return fail(400, 'How many beds? Pick a number from 0 to 10.');
  }
  if (body.consent !== 'yes') return fail(400, 'Please tick the box so we can reply to you.');

  const to = process.env.LEAD_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !to) {
    console.error('Booking form is missing RESEND_API_KEY or LEAD_TO_EMAIL');
    return fail(503, 'That did not send. Call or text 022 305 3853 and we will sort it out.');
  }
  const from = process.env.FROM_EMAIL || 'Shore Leave <onboarding@resend.dev>';

  try {
    await send({ from, to, ...(lead.email && { reply_to: lead.email }), ...leadEmail(lead) });
  } catch (e) {
    console.error('Lead email failed', e);
    return fail(502, 'That did not send. Call or text 022 305 3853 and we will sort it out.');
  }

  // Off until the domain is verified in Resend. The test sender can only reach the account owner.
  if (process.env.CUSTOMER_CONFIRMATION === 'on' && lead.email) {
    await send({ from, to: lead.email, reply_to: to, ...confirmationEmail(lead) }).catch((e) => console.error('Confirmation failed', e));
  }

  return ok();
};
