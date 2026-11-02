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
    'Shore Leave looks after boats for their owners in Auckland. Four services: Essential Reset, Valet, Provisioning and Charter Ready, on the berth or on the trailer.',
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

// The menu, footer, home cards, booking form and schema all read this list, in this order.
export const SERVICES = [
  {
    href: '/boat-cleaning-auckland',
    label: 'Essential Reset',
    line: 'The wash-up and the rubbish',
    text: 'You walk off. We wash the boat down, do the dishes and take the rubbish away.',
    schema: 'Deck washed down, dishes done, rubbish taken off and benches wiped after a trip.',
  },
  {
    href: '/boat-valet-auckland',
    label: 'Valet',
    line: 'Beds made and a full interior clean',
    text: 'The Essential Reset, plus a full interior clean and made beds. Every corner looked at.',
    schema: 'Full interior clean with beds remade, and attention to the detail, on top of the Essential Reset.',
  },
  {
    href: '/boat-provisioning-auckland',
    label: 'Provisioning',
    line: 'Food, drinks, bait and ice',
    text: 'Send us a list. Food, drinks, bait and ice bought, carried aboard and put away.',
    schema: 'Food, drinks, bait and ice bought to your list and stowed aboard before the trip.',
  },
  {
    href: '/boat-detailing-auckland',
    label: 'Charter Ready',
    line: 'Interior and superstructure detail',
    text: 'A proper detail, inside and out. Seats brought back, surfaces shining, ready for guests.',
    schema: 'Interior and superstructure detail by hand, with seats and upholstery rejuvenated.',
  },
];

export const NAV = [{ href: '/about', label: 'About' }, ...SERVICES];

export const PLACES = [
  { href: '/boat-cleaning-north-shore', label: 'North Shore', text: 'Berths and trailer boats, from Devonport up to Long Bay, plus Whangaparāoa.' },
  { href: '/pine-harbour-boat-cleaning', label: 'Pine Harbour Marina', text: 'Tie up and go home. We look after the boat right there on the berth.' },
  { href: '/boat-cleaning-beachlands', label: 'Beachlands', text: 'At Pine Harbour or on the trailer at home, after a launch at Sunkist Bay.' },
  { href: '/boat-cleaning-east-auckland', label: 'East Auckland', text: 'Trailer boats at home in Maraetai and Beachlands. Further west, ask.' },
  { href: '/trailer-boat-cleaning', label: 'Trailer boats at home', text: 'Back from the ramp? We come to your driveway.' },
];

export const bookHref = (service: string) => `/book?service=${encodeURIComponent(service)}`;

export const RESET_LIST = [
  'Boat washed down and brushed',
  'Dishes done',
  'Rubbish taken off the boat',
  'Galley benches wiped',
  'Fridge cleared of anything that won’t last',
];

export const VALET_LIST = [
  'Everything in the Essential Reset',
  'Beds stripped and remade with your linen on board',
  'Full interior clean, cabin by cabin',
  'Every surface, locker front and window wiped down',
  'Head and shower cleaned',
  'Galley and fridge cleaned out',
  'A last walk through for the small things',
];

export const PROVISION_LIST = [
  'Food and groceries bought to your list',
  'Drinks and ice aboard',
  'Bait in the freezer',
  'Fridge and pantry stocked and put away',
  'Boat ready to go',
];

export const CHARTER_LIST = [
  'Everything in the Valet',
  'Seats and upholstery deep cleaned and brought back by hand',
  'Vinyl and leather cleaned and conditioned',
  'Carpets and soft furnishings refreshed',
  'Superstructure hand washed, top to bottom',
  'Glass and stainless brought up to a shine',
  'Interior trim and detail work done by hand',
];

export const BEDS_FACTS = [
  'We use the clean linen on board. We don’t supply it, take it away or wash it.',
  'Used linen is bagged and left aboard in a spot we agree, ready to take home',
  'No clean set aboard? We strip the beds, bag the linen and leave the berths tidy, then tell you so you can leave a spare set next time',
  'V-berths, double cabins, quarter berths and saloon conversions',
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
