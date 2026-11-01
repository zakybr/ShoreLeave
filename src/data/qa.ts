export type QA = { q: string; a: string };

// Each answer stands alone in 40 to 60 words, so search and AI engines can lift it as written.
export const valet: QA[] = [
  {
    q: "What’s included in a post-trip boat reset?",
    a: "A post-trip reset covers the deck wash-down and brush, rubbish off the boat, every bench and surface wiped, the interior vacuumed, beds stripped and remade, and the fridge cleared. It’s topside and interior only. You walk off the boat, and it’s ready when you come back.",
  },
  {
    q: 'How much does a boat valet cost in Auckland?',
    a: "It depends on the boat’s length, its layout, how it’s been left and where it’s kept, so we quote each job instead of publishing a rate card. Fill in the booking form with your boat and what you need, and we’ll come back with a price before anything starts.",
  },
  {
    q: 'Can someone clean my boat after the weekend?',
    a: "Yes. That’s the job. Book through the form or call 022 305 3853, tell us where the boat is, and we’ll arrange access. You can leave straight from the pontoon or the driveway. We handle the wash-down, the rubbish, the interior and the beds.",
  },
  {
    q: 'Do you make beds on a boat?',
    a: "Yes. Beds are part of every reset. We strip them and remake them with clean linen, so the cabin is ready for the next trip. Tell us on the booking form where your spare linen lives, and how many berths you sleep, and we’ll sort out the rest with you.",
  },
];

export const restock: QA[] = [
  {
    q: 'Can someone clean my boat and stock the fridge before my trip?',
    a: "Yes. Book a post-trip reset, a restock, or both. Send us your list of drinks, ice, snacks and groceries, and we’ll shop it, load the fridge and pantry, make the beds and leave the boat ready. You turn up with your bag and go.",
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

export const trailer: QA[] = [
  {
    q: 'Do you clean trailer boats at home?',
    a: "Yes. We come to your driveway after the trip and do the wash-down, rubbish, surfaces and interior while the boat sits on the trailer. Callouts cover Beachlands, Maraetai, the North Shore and Whangaparāoa. If you’re elsewhere in Auckland, ask anyway and we’ll tell you straight.",
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
    a: "Yes. Pine Harbour Marina in Beachlands is where we work most. We reset boats on their berths: deck wash-down, rubbish, surfaces, interior, beds and fridge. Book through the form with your pier and berth, and we’ll arrange how we get aboard before the job starts.",
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
    a: "Yes. Shore Leave resets boats in Beachlands, on the berth at Pine Harbour Marina and on the trailer at your home. We wash the deck, clear the rubbish, wipe the surfaces, vacuum the interior, remake the beds and clear the fridge. Call 022 305 3853 or book online.",
  },
  {
    q: 'I launch at Sunkist Bay. Can you clean the boat when I get home?',
    a: "Yes. Tow home from Sunkist Bay Reserve as usual, tell us when you’re back, and we’ll come to your driveway in Beachlands. Salt is easier to shift the same day or the next, so the sooner you tell us the better. The booking form takes under two minutes.",
  },
];

export const eastAuckland: QA[] = [
  {
    q: 'Who cleans boats in East Auckland?',
    a: "Shore Leave covers the eastern end of the coast: Pine Harbour Marina berths, and trailer boats at home in Beachlands and Maraetai. We do the post-trip reset, the beds and the fridge restock. If you’re closer to Howick or Half Moon Bay, send your address and we’ll let you know.",
  },
  {
    q: 'Do you come to Maraetai?',
    a: "Yes. We do trailer-boat callouts in Maraetai, whether you launch at the Maraetai Park ramp or the Omana Esplanade ramp. Tow home, tell us you’re back, and we’ll reset the boat on the trailer. Your restock can be done the same way before the next trip.",
  },
  {
    q: 'How far do you travel for a boat clean?',
    a: "We work Pine Harbour Marina, Beachlands, Maraetai, the North Shore and Whangaparāoa. Past that, it depends on the job and the week. Put your suburb in the booking form. If we can’t get there and do it properly, we’ll say so instead of stretching the schedule.",
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
    a: 'Pine Harbour Marina berths, plus trailer-boat callouts in Beachlands, Maraetai, the North Shore and Whangaparāoa. If you keep your boat somewhere else in Auckland, put the location in the booking form and we will tell you straight whether we can do it well.',
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
