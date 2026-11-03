import type { APIRoute } from 'astro';
import { BEDS_FACTS, CHARTER_LIST, DONT_DO, PROVISION_LIST, RESET_LIST, SITE, VALET_LIST, WINTER_CHECKS, WINTER_EXTRAS, WINTER_PLANS } from '../config';
import { beachlands, charter, eastAuckland, general, northShore, pineHarbour, pricing, provisioning, reset, valet, winter, type QA } from '../data/qa';

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

## Essential Reset

${RESET_LIST.map((t) => `- ${t}`).join('\n')}

## Valet

${VALET_LIST.map((t) => `- ${t}`).join('\n')}

## Beds, in the Valet and Charter Ready

${BEDS_FACTS.map((t) => `- ${t}`).join('\n')}

## Provisioning

${PROVISION_LIST.map((t) => `- ${t}`).join('\n')}

## Charter Ready

${CHARTER_LIST.map((t) => `- ${t}`).join('\n')}

## Winter Boat Sitting (off-season, roughly May to September)

Each visit:
${WINTER_CHECKS.map((t) => `- ${t}`).join('\n')}

Plans: ${WINTER_PLANS.map((p) => `${p.name} (${p.visits.toLowerCase()})`).join('; ')}. Add-ons: ${WINTER_EXTRAS.join('; ')}. Checks only: no repairs, no hull or mechanical work.

## What we don’t do

${DONT_DO.map((t) => `- ${t}`).join('\n')}

${[
  section('About', general),
  section('Essential Reset', reset),
  section('Valet', valet),
  section('Provisioning', provisioning),
  section('Charter Ready', charter),
  section('Winter Boat Sitting', winter),
  section('North Shore', northShore),
  section('Pine Harbour Marina', pineHarbour),
  section('Beachlands', beachlands),
  section('East Auckland', eastAuckland),
  section('Pricing', pricing),
].join('\n\n')}
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
