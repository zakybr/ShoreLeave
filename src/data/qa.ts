import { FRESH_BEDS } from '../config';

export type QA = { q: string; a: string };

// Each answer stands alone in 40 to 60 words, so search and AI engines can lift it as written.
export const valet: QA[] = [
  {
    q: "What’s included in a post-trip boat reset?",
    a: "A post-trip reset covers the deck wash-down and brush, rubbish off the boat, every bench and surface wiped, the interior vacuumed and the fridge cleared. Add Fresh Beds and we’ll remake the beds too. It’s topside and interior only. You walk off the boat, and it’s ready when you come back.",
  },
  {
    q: 'How much does a boat valet cost in Auckland?',
    a: "It depends on the boat’s length, its layout, how it’s been left and where it’s kept, so we quote each job instead of publishing a rate card. Fill in the booking form with your boat and what you need, and we’ll come back with a price before anything starts.",
  },
  {
    q: 'Can someone clean my boat after the weekend?',
    a: "Yes. That’s the job. Book through the form or call 022 305 3853, tell us where the boat is, and we’ll arrange access. You can leave straight from the pontoon or the driveway. We handle the wash-down, the rubbish and the interior, plus the beds if you add Fresh Beds.",
  },
  {
    q: 'Do you make beds on a boat?',
    a: "Yes. Add Fresh Beds to your post-trip reset or restock and we’ll strip the beds and remake them with the clean linen on board. Used linen gets bagged and left aboard for you to take home. We don’t supply linen. Tell us on the booking form how many beds you have.",
  },
];

export const restock: QA[] = [
  {
    q: 'Can someone clean my boat and stock the fridge before my trip?',
    a: "Yes. Book a post-trip reset, a restock, or both. Send us your list of drinks, ice, snacks and groceries, and we’ll shop it, load the fridge and pantry and leave the boat ready. Add Fresh Beds and the beds are made too. You turn up with your bag and go.",
  },
  {
    q: 'How does boat provisioning work in Auckland?',
    a: "You send us a list through the booking form, along with your departure date and where the boat is. We confirm the job and the quote, do the shopping, carry it aboard and put it away. The fridge is cold and stocked before you arrive at the boat.",
  },
  {
    q: 'Can you deliver groceries to my boat at Pine Harbour?',
    a: "Yes. Pine Harbour Marina is our home berth area. We bring the groceries down the pontoon, stow them in the fridge and pantry, and leave the boat ready. Tell us your berth and pier on the booking form, and we’ll arrange access with you before the job.",
  },
  {
    q: 'What can I put on my restock list?',
    a: "Anything you’d normally pack for the trip: drinks, ice, snacks, breakfast, dinner, sunscreen, the good coffee. Be as specific as you like, brand and all. If you’ve got a regular order, tell us and we’ll keep it on file, so the next restock is a one-line text.",
  },
];

export const beds: QA[] = [
  {
    q: 'Can someone make the beds on my boat after a trip?',
    a: "Yes. Add Fresh Beds to a post-trip reset or restock and we’ll strip the beds, remake them with the clean linen on board and bag the used set. It covers V-berths, double cabins, quarter berths and saloon conversions. You come back to made beds.",
  },
  {
    q: 'Do you supply or wash the linen?',
    a: "No. We use the clean linen that’s already on board, and we don’t supply, wash or take away linen. Your used set goes in a bag, left aboard in a spot we’ve agreed, ready for you to take home. Keep a clean spare set on the boat and you’re sorted.",
  },
  {
    q: 'What if there’s no clean linen on the boat?',
    a: "We’ll strip the beds, bag the used linen and leave the berths tidy, so nothing’s left in a mess. Then we’ll let you know the beds couldn’t be made up, so you can leave a spare set aboard next time. We don’t supply linen ourselves.",
  },
  {
    q: 'How much does it cost to have my boat beds made?',
    a:
      FRESH_BEDS.priceDisplay === 'show'
        ? `Fresh Beds is $${FRESH_BEDS.perBed} per bed, with a $${FRESH_BEDS.min} minimum. It’s an add-on to a post-trip reset or restock, not a standalone job, and it shows as its own line on your quote. Tell us how many beds you have on the booking form and we’ll add it in.`
        : "Fresh Beds is priced per bed and included in your quote, so you’ll see the full price before anything starts. It’s an add-on to a post-trip reset or restock, not a standalone job. Tell us how many beds you have on the booking form and we’ll price it in.",
  },
];

export const trailer: QA[] = [
  {
    q: 'Do you clean trailer boats at home?',
    a: "Yes. We come to your driveway after the trip and do the wash-down, rubbish, surfaces and interior while the boat sits on the trailer. Callouts cover the North Shore, Whangaparāoa, Beachlands and Maraetai. If you’re elsewhere in Auckland, ask anyway and we’ll tell you straight.",
  },
  {
    q: 'What do you need from me for a trailer boat clean?',
    a: "An outside tap, room to walk around the boat, and a clear run to it. That’s about it. Tell us your suburb, the boat’s length and when you’ll be back from the trip. You don’t need to be home if we can reach the boat and the tap.",
  },
  {
    q: 'Can you clean my trailer boat in East Auckland?',
    a: "Yes, in Beachlands and Maraetai we come to your home. For Howick, Bucklands Beach, Half Moon Bay and nearby suburbs, put your address in the booking form and we’ll tell you honestly whether we can get there. We’d rather say no than turn up late.",
  },
];

export const pineHarbour: QA[] = [
  {
    q: 'Do you clean boats at Pine Harbour Marina?',
    a: "Yes. Pine Harbour Marina in Beachlands is where we work most. We reset boats on their berths: deck wash-down, rubbish, surfaces, interior and fridge, plus Fresh Beds if you want the beds made. Book through the form with your pier and berth, and we’ll arrange how we get aboard before the job starts.",
  },
  {
    q: 'How do you get onto my boat at the marina?',
    a: "You choose. Some owners meet us on the pontoon the first time. Others leave a key in a lockbox aboard or hand one over for regular resets. We agree this before the first job, and it’s written into our terms. Your key is never labelled with your boat or berth.",
  },
  {
    q: 'Can you reset my boat while I am away?',
    a: "Yes, and that’s the point. Most owners leave the boat after the trip and don’t see it again until the next one. We send you a short note and photos when we’re finished, so you know it’s done. If anything needs your attention, you’ll hear it from us.",
  },
];

export const beachlands: QA[] = [
  {
    q: 'Is there a boat cleaning service in Beachlands?',
    a: "Yes. Shore Leave resets boats in Beachlands, on the berth at Pine Harbour Marina and on the trailer at your home. We wash the deck, clear the rubbish, wipe the surfaces, vacuum the interior and clear the fridge. Fresh Beds gets the beds made too. Call 022 305 3853 or book online.",
  },
  {
    q: 'I launch at Sunkist Bay. Can you clean the boat when I get home?',
    a: "Yes. Tow home from Sunkist Bay Reserve as usual, tell us when you’re back, and we’ll come to your driveway in Beachlands. Salt is easier to shift the same day or the next, so the sooner you tell us the better. The booking form takes under two minutes.",
  },
];

export const eastAuckland: QA[] = [
  {
    q: 'Who cleans boats in East Auckland?',
    a: "Shore Leave covers the eastern end of the coast: Pine Harbour Marina berths, and trailer boats at home in Beachlands and Maraetai. We do the post-trip reset, Fresh Beds and the fridge restock. If you’re closer to Howick or Half Moon Bay, send your address and we’ll let you know.",
  },
  {
    q: 'Do you come to Maraetai?',
    a: "Yes. We do trailer-boat callouts in Maraetai, whether you launch at the Maraetai Park ramp or the Omana Esplanade ramp. Tow home, tell us you’re back, and we’ll reset the boat on the trailer. Your restock can be done the same way before the next trip.",
  },
  {
    q: 'How far do you travel for a boat clean?',
    a: "We work the North Shore, Whangaparāoa, Pine Harbour Marina, Beachlands and Maraetai. Past that, it depends on the job and the week. Put your suburb in the booking form. If we can’t get there and do it properly, we’ll say so instead of stretching the schedule.",
  },
];

export const northShore: QA[] = [
  {
    q: 'Do you clean boats on the North Shore?',
    a: "Yes. We reset boats on the berth and on the trailer across the North Shore, from Devonport to Long Bay. Tell us your marina and berth, or your home address, and we’ll send a quote.",
  },
  {
    q: 'Can you clean my trailer boat at home on the North Shore?',
    a: "Yes. Tow home and leave it in the driveway. We bring everything to you and reset the boat on the trailer. An outside tap is all we need from you.",
  },
  {
    q: 'Can you restock a boat on a North Shore berth?',
    a: "Yes. Send us a list and tell us when you’re leaving. We shop it, carry it aboard and put it away, so the fridge is cold when you arrive.",
  },
];

export const pricing: QA[] = [
  {
    q: 'Why don’t you publish prices?',
    a: "A trailer boat after a day trip and a launch after a week away are very different jobs. A flat rate would overcharge one and undercharge the other. So we ask a few questions about your boat, then give you a straight quote before any work starts.",
  },
  {
    q: 'How do I get a quote for my boat?',
    a: "Fill in the booking form with your boat type, length, location and what you’d like done. It takes under two minutes. We’ll reply with a price and the next steps. There’s no obligation, and you can also call or text 022 305 3853 if you’d rather talk.",
  },
  {
    q: 'Is there a deal for first-timers?',
    a: "Yes. Your first post-trip reset is 50% off our time, one per boat. Groceries aren’t discounted. We take it off your quote, so you’ll see it before you say yes.",
  },
];

export const general: QA[] = [
  {
    q: 'What is Shore Leave?',
    a: "Shore Leave is a post-trip reset and restock service for boat owners in Auckland. After a trip we clean the boat, make the beds and clear the fridge. Before the next one we stock it to your list. It’s run by Zak and Bozzy, and it’s hospitality for boat owners.",
  },
  {
    q: 'What areas do you cover?',
    a: 'Berths on the North Shore and at Pine Harbour Marina, plus trailer-boat callouts on the North Shore and in Whangaparāoa, Beachlands and Maraetai. If you keep your boat somewhere else in Auckland, put the location in the booking form and we will tell you straight whether we can do it well.',
  },
  {
    q: 'What don’t you do?',
    a: "We stick to the deck and the interior. We don’t do hull cleaning, antifouling, cut and polish, gelcoat or teak restoration, engines, electrics, plumbing, repairs, bilges, holding tanks, on-berth pressure washing, linen supply or laundry, moving the boat or refuelling. If something needs a specialist, we’ll tell you.",
  },
  {
    q: 'What happens if the weather turns?',
    a: "Safety comes first. If it isn’t safe to work on the boat or the pontoon, we’ll tell you as soon as we can and move the job to the next time that suits you. A rescheduled job costs you nothing extra. A restock can usually go ahead regardless.",
  },
  {
    q: 'What if something gets damaged?',
    a: "Tell us, and we’ll tell you. We take photos before and after each job, and if we notice damage or break something, you’ll hear about it the same day with the photos attached. Nothing gets hidden or left for you to find on the next trip.",
  },
  {
    q: 'Are you a new business?',
    a: "Yes, and we won’t pretend otherwise. There are no reviews on this site because we haven’t earned them yet. Our first boats get Zak or Bozzy on the job, a straight quote and a direct line if anything isn’t right. That’s how we plan to earn them.",
  },
];
