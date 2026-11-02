export type QA = { q: string; a: string };

// Each answer stands alone in 40 to 60 words, so search and AI engines can lift it as written.
export const reset: QA[] = [
  {
    q: 'What’s included in an Essential Reset?',
    a: "An Essential Reset is the basic wash-up after a trip. We wash the boat down, do the dishes, take the rubbish off, wipe the galley benches and clear the fridge of anything that won’t last. It’s the quick one. You walk off the boat, and it’s tidy when you come back.",
  },
  {
    q: 'Can someone clean my boat after the weekend?',
    a: "Yes. That’s the job. Book through the form or call 022 305 3853, tell us where the boat is, and we’ll arrange access. You can leave straight from the pontoon or the driveway. We handle the wash-down, the dishes and the rubbish, so the boat doesn’t sit dirty until next time.",
  },
  {
    q: 'What’s the difference between the Essential Reset and the Valet?',
    a: "The Essential Reset covers the wash-up and the rubbish. The Valet includes all of that, then adds a full interior clean, made beds and more attention to the detail. Pick the reset after a day trip, and the Valet after a big weekend away or when the boat needs a proper going-over.",
  },
];

export const valet: QA[] = [
  {
    q: 'What’s included in a boat valet?',
    a: "A Shore Leave valet covers everything in the Essential Reset, then a full interior clean, cabin by cabin. Every surface, locker front and window gets wiped, the head and shower get cleaned, the galley and fridge are cleaned out, and the beds are remade. It’s on deck and inside only.",
  },
  {
    q: 'How much does a boat valet cost in Auckland?',
    a: "It depends on the boat’s length, its layout, how it’s been left and where it’s kept, so we quote each job instead of publishing a rate card. Fill in the booking form with your boat and what you need, and we’ll come back with a price before anything starts.",
  },
  {
    q: 'Do you make beds on a boat?',
    a: "Yes. Beds are part of the Valet and Charter Ready. We strip them and remake them with the clean linen on board, covering V-berths, double cabins, quarter berths and saloon conversions. Used linen gets bagged and left aboard for you to take home. Tell us on the booking form how many beds you have.",
  },
  {
    q: 'Do you supply or wash the linen?',
    a: "No. We use the clean linen that’s already on board, and we don’t supply, wash or take away linen. Your used set goes in a bag, left aboard in a spot we’ve agreed, ready for you to take home. Keep a clean spare set on the boat and you’re sorted.",
  },
  {
    q: 'What if there’s no clean linen on the boat?',
    a: "We’ll strip the beds, bag the used linen and leave the berths tidy, so nothing’s left in a mess. Then we’ll let you know the beds couldn’t be made up, so you can leave a spare set aboard next time. We don’t supply linen ourselves.",
  },
];

export const provisioning: QA[] = [
  {
    q: 'Can someone clean my boat and stock it before my trip?',
    a: "Yes. Book a reset or Valet alongside Provisioning. Send us your list of food, drinks, bait and ice, and we’ll shop it, load the fridge and pantry and leave the boat ready. You turn up with your bag and go.",
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
    q: 'What can I put on my provisioning list?',
    a: "Anything you’d normally pack for the trip: food, drinks, bait, ice, snacks, sunscreen, the good coffee. Be as specific as you like, brand and all. If you’ve got a regular order, tell us and we’ll keep it on file, so the next one is a one-line text.",
  },
];

export const charter: QA[] = [
  {
    q: 'What is Charter Ready?',
    a: "Charter Ready is our full boat detail. It includes everything in the Valet, then an interior rejuvenation and a superstructure detail: seats and upholstery brought back by hand, vinyl and leather conditioned, the superstructure hand washed, and glass and stainless brought up to a shine. It’s the one to book for guests.",
  },
  {
    q: 'Do you detail boat seats and upholstery?',
    a: "Yes. That’s the heart of Charter Ready. We deep clean the seats and upholstery by hand, then clean and condition the vinyl and leather so they look looked after again. Tell us what the boat has and what condition it’s in on the booking form, and we’ll quote it properly.",
  },
  {
    q: 'Does Charter Ready include cut and polish?',
    a: "No. Charter Ready is a hand detail of the interior and superstructure. We don’t do cut and polish, gelcoat restoration or teak restoration yet, and nothing below the waterline. If the boat needs that work, we’ll tell you, and it’s best left with a specialist.",
  },
  {
    q: 'When should I book a boat detail?',
    a: "Most owners book before a charter, before listing the boat for sale, ahead of a big occasion, or at the start of the season. It takes longer than a Valet, so give us as much notice as you can. Put your date on the booking form and we’ll work to it.",
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
    a: "Yes. Pine Harbour Marina in Beachlands is where we work most. We look after boats on their berths, from a quick Essential Reset to a full Valet with the beds made. Book through the form with your pier and berth, and we’ll arrange how we get aboard before the job starts.",
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
    a: "Yes. Shore Leave looks after boats in Beachlands, on the berth at Pine Harbour Marina and on the trailer at your home. Pick an Essential Reset for the wash-up and rubbish, or a Valet for a full interior clean and made beds. Call 022 305 3853 or book online.",
  },
  {
    q: 'I launch at Sunkist Bay. Can you clean the boat when I get home?',
    a: "Yes. Tow home from Sunkist Bay Reserve as usual, tell us when you’re back, and we’ll come to your driveway in Beachlands. Salt is easier to shift the same day or the next, so the sooner you tell us the better. The booking form takes under two minutes.",
  },
];

export const eastAuckland: QA[] = [
  {
    q: 'Who cleans boats in East Auckland?',
    a: "Shore Leave covers the eastern end of the coast: Pine Harbour Marina berths, and trailer boats at home in Beachlands and Maraetai. We do the Essential Reset, Valet, Provisioning and Charter Ready. If you’re closer to Howick or Half Moon Bay, send your address and we’ll let you know.",
  },
  {
    q: 'Do you come to Maraetai?',
    a: "Yes. We do trailer-boat callouts in Maraetai, whether you launch at the Maraetai Park ramp or the Omana Esplanade ramp. Tow home, tell us you’re back, and we’ll reset the boat on the trailer. Your provisioning can be done the same way before the next trip.",
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
    q: 'Can you provision a boat on a North Shore berth?',
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
    a: "Yes. Your first Essential Reset is 50% off our time, one per boat. Groceries aren’t discounted. We take it off your quote, so you’ll see it before you say yes.",
  },
];

export const general: QA[] = [
  {
    q: 'What is Shore Leave?',
    a: "Shore Leave looks after boats for their owners in Auckland. We offer four services: Essential Reset, Valet, Provisioning and Charter Ready. We clean the boat after a trip and stock it before the next one. It’s run by Zak and Bozzy, and it’s hospitality for boat owners.",
  },
  {
    q: 'What areas do you cover?',
    a: 'Berths on the North Shore and at Pine Harbour Marina, plus trailer-boat callouts on the North Shore and in Whangaparāoa, Beachlands and Maraetai. If you keep your boat somewhere else in Auckland, put the location in the booking form and we will tell you straight whether we can do it well.',
  },
  {
    q: 'What don’t you do?',
    a: "We stick to the deck, the superstructure and the interior. We don’t do hull cleaning, antifouling, cut and polish, gelcoat or teak restoration, engines, electrics, plumbing, repairs, bilges, holding tanks, on-berth pressure washing, linen supply or laundry, moving the boat or refuelling. If something needs a specialist, we’ll tell you.",
  },
  {
    q: 'What happens if the weather turns?',
    a: "Safety comes first. If it isn’t safe to work on the boat or the pontoon, we’ll tell you as soon as we can and move the job to the next time that suits you. A rescheduled job costs you nothing extra. Provisioning can usually go ahead regardless.",
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
