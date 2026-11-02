import type { APIRoute } from 'astro';
import { DONT_DO, SERVICES, SITE } from '../config';
import { DETAIL_PAGES, SERVICE_PAGES } from '../lib/pages';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const list = (pages: typeof SERVICE_PAGES) => pages.map((p) => `- [${p.label}](${u(p.path)}): ${p.description}`).join('\n');
  const body = `# ${SITE.name}

> ${SITE.summary}

${SITE.name} is hospitality for boat owners. It is run by ${SITE.owners} in Auckland, New Zealand.

- Service area: ${SITE.area}.
- Phone: ${SITE.phoneDisplay}
- Pricing: quoted per boat through the booking form. No published prices.
- Scope: the deck, the superstructure and inside the boat only.
${SERVICES.map((s) => `- ${s.label}: ${s.schema}`).join('\n')}
- What we don’t do: ${DONT_DO.join('; ')}.

## Services and areas

${list(SERVICE_PAGES)}

## Booking and details

${list(DETAIL_PAGES)}
- [Full text for AI systems](${u('/llms-full.txt')})
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
