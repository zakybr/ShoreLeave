import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const body = `# ${SITE.name}

> ${SITE.summary}

${SITE.name} is a post-trip reset and restock service: hospitality for boat owners. It is run by ${SITE.owners} in Auckland, New Zealand.

- Service area: ${SITE.area}.
- Phone: ${SITE.phoneDisplay}
- Pricing: quoted per boat through the booking form. No published prices.
- Scope: on deck and inside the boat only.

## Services

- [Boat valet Auckland](${u('/boat-valet-auckland')}): post-trip reset. Deck wash-down and brush, rubbish removed, surfaces wiped, interior vacuumed, beds remade, fridge cleared.
- [Boat fridge restock](${u('/boat-fridge-restock')}): boat provisioning. Fridge and pantry stocked to the owner’s list with drinks, ice, snacks and groceries.
- [Trailer boat cleaning](${u('/trailer-boat-cleaning')}): callout to the owner’s home.
- [Pine Harbour boat cleaning](${u('/pine-harbour-boat-cleaning')}): service on the berth at Pine Harbour Marina, Beachlands.

## Areas

- [Boat cleaning Beachlands](${u('/boat-cleaning-beachlands')})
- [Boat cleaning East Auckland](${u('/boat-cleaning-east-auckland')})

## Booking and details

- [Book a reset](${u('/book')})
- [How it works](${u('/how-it-works')})
- [Pricing](${u('/pricing')})
- [FAQ](${u('/faq')})
- [About](${u('/about')})
- [Full text for AI systems](${u('/llms-full.txt')})
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
