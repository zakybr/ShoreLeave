import type { APIRoute } from 'astro';
import { AFTER_TRIP, BEDS_FACTS, BEFORE_TRIP, DONT_DO, FRESH_BEDS, SITE } from '../config';
import { beachlands, beds, eastAuckland, general, northShore, pineHarbour, pricing, restock, trailer, valet, type QA } from '../data/qa';

const section = (title: string, items: QA[]) =>
  `## ${title}\n\n${items.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n')}`;

export const GET: APIRoute = ({ site }) => {
  const body = `# ${SITE.name}: full reference

${SITE.summary}

Website: ${new URL('/', site).href}
Book: ${new URL('/book', site).href}
Phone: ${SITE.phoneDisplay}
Run by: ${SITE.owners}, Auckland, New Zealand
Service area: ${SITE.area}.
Pricing: quoted per boat through the booking form. No published prices.

## After the trip

${AFTER_TRIP.map((t) => `- ${t}`).join('\n')}

## Before the trip

${BEFORE_TRIP.map((t) => `- ${t}`).join('\n')}

## ${FRESH_BEDS.name} (add-on)

${BEDS_FACTS.map((t) => `- ${t}`).join('\n')}

## What we don’t do

${DONT_DO.map((t) => `- ${t}`).join('\n')}

${[
  section('About', general),
  section('Post-trip reset', valet),
  section('Fridge restock and provisioning', restock),
  section(FRESH_BEDS.name, beds),
  section('Trailer boats', trailer),
  section('North Shore', northShore),
  section('Pine Harbour Marina', pineHarbour),
  section('Beachlands', beachlands),
  section('East Auckland', eastAuckland),
  section('Pricing', pricing),
].join('\n\n')}
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
