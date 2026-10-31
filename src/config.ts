// One source of truth for the business. Name, phone and area wording must match on every page.
export const SITE = {
  name: 'Shore Leave',
  url: import.meta.env.SITE as string,
  owners: 'Zak & Bozzy',
  phoneDisplay: '022 305 3853',
  phoneTel: '+64223053853',
  email: 'zak@tallynz.co',
  tagline: "Get off the boat. We'll reset it.",
  summary:
    'Shore Leave is a post-trip reset and restock service for boat owners in Auckland. We clean the boat, make the beds and stock the fridge, so it is ready for the next trip.',
  area: 'Pine Harbour Marina berths, plus trailer-boat callouts in Beachlands, Maraetai, the North Shore and Whangaparāoa',
  // Flip to true only once cover is in place. Nothing on the site says "insured" until then.
  INSURED: false,
};

export const AREAS = [
  { '@type': 'Place', name: 'Pine Harbour Marina, Beachlands' },
  { '@type': 'City', name: 'Beachlands, Auckland' },
  { '@type': 'City', name: 'Maraetai, Auckland' },
  { '@type': 'City', name: 'North Shore, Auckland' },
  { '@type': 'City', name: 'Whangaparāoa, Auckland' },
];

export const NAV = [
  { href: '/boat-valet-auckland', label: 'Boat valet' },
  { href: '/boat-fridge-restock', label: 'Fridge restock' },
  { href: '/trailer-boat-cleaning', label: 'Trailer boats' },
  { href: '/pine-harbour-boat-cleaning', label: 'Pine Harbour' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
];

export const AFTER_TRIP = [
  'Deck washed down and brushed',
  'Rubbish taken off the boat',
  'Benches and surfaces wiped',
  'Interior vacuumed',
  'Beds stripped and remade',
  'Fridge cleared',
];

export const BEFORE_TRIP = [
  'Fridge and pantry stocked to your list',
  'Drinks, ice and snacks aboard',
  'Groceries put away',
  'Beds made',
  'Boat ready to go',
];
