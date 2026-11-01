// One source of truth for the business. Name, phone and area wording must match on every page.
export const SITE = {
  name: 'Shore Leave',
  url: import.meta.env.SITE as string,
  owners: 'Zak & Bozzy',
  phoneDisplay: '022 305 3853',
  phoneTel: '+64223053853',
  email: 'zak@tallynz.co',
  tagline: "Get off the boat. We’ll reset it.",
  summary:
    'Shore Leave is a post-trip reset and restock service for boat owners in Auckland. We clean the boat, make the beds and stock the fridge, so it is ready for the next trip.',
  area: 'Berths on the North Shore and at Pine Harbour Marina, plus trailer-boat callouts on the North Shore and in Whangaparāoa, Beachlands and Maraetai',
  // Flip to true only once cover is in place. Nothing on the site says "insured" until then.
  INSURED: false,
};

export const GA4_ID = import.meta.env.PUBLIC_GA4_ID || 'G-4ZPN9NLNF0';

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
  { href: '/boat-bed-making', label: 'Fresh Beds' },
  { href: '/boat-cleaning-north-shore', label: 'North Shore' },
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
  'Fridge cleared',
  'Beds remade, if you add Fresh Beds',
];

export const BEFORE_TRIP = [
  'Fridge and pantry stocked to your list',
  'Drinks, ice and snacks aboard',
  'Groceries put away',
  'Beds made with Fresh Beds',
  'Boat ready to go',
];

// Set priceDisplay to 'show' and every page, answer and schema block switches to the per-bed price.
export const FRESH_BEDS = {
  name: 'Fresh Beds',
  priceDisplay: 'quote' as 'quote' | 'show',
  perBed: 15,
  min: 30,
};
export const BEDS_PRICE =
  FRESH_BEDS.priceDisplay === 'show'
    ? `$${FRESH_BEDS.perBed} per bed, $${FRESH_BEDS.min} minimum`
    : 'Priced per bed and included in your quote';

export const BEDS_FACTS = [
  'Add it to a post-trip reset or a restock',
  'We use the clean linen on board. We don’t supply it, take it away or wash it.',
  'Used linen is bagged and left aboard in a spot we agree, ready to take home',
  'No clean set aboard? We strip the beds, bag the linen and leave the berths tidy, then tell you so you can leave a spare set next time',
  'V-berths, double cabins, quarter berths and saloon conversions',
  BEDS_PRICE,
];

export const DONT_DO = [
  'Hull cleaning, antifouling or anything below the waterline',
  'Cut and polish, gelcoat restoration or teak restoration (not yet)',
  'Engines, outboards, electrics, plumbing or repairs',
  'Bilges, holding tanks or sewage pump-outs',
  'Pressure washing on the berth (marina rules)',
  'Supplying linen, or taking linen away to wash',
  'Moving, driving, launching or towing the boat',
  'Refuelling',
];

export const DONT_DO_SHORT = [
  'Hull cleaning or antifouling',
  'Cut and polish or teak',
  'Engines, electrics or repairs',
  'Moving or towing the boat',
];
