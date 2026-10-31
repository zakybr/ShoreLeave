# Shore Leave: build plan

A post-trip reset and restock service for Auckland boat owners. Hospitality, not cleaning.

## Decisions where the brief conflicted

Your opening line overrides everything: Vercel only, and "do NOT show" prices wins over anything that says show them.

| Brief said | Built as | Why |
|---|---|---|
| Cloudflare Pages + Pages Function | Vercel + Astro on-demand route at `/api/book` | Vercel only |
| Cloudflare Web Analytics | Vercel Web Analytics (cookieless) | Vercel only |
| Cloudflare Turnstile | Honeypot, minimum fill time, origin check, per-IP rate limit | Turnstile is Cloudflare |
| "From" prices, Offer prices, pricing table | No dollar figures anywhere. `/pricing` explains how a quote works | CONFIG: do not show, fill out the form |
| `BRAND.pages.dev` | `*.vercel.app` until a domain exists | Vercel only |
| `INSURED` flag | Defaults to `false`, so "insured" never appears | Not in CONFIG, and it is an honesty rule |

## Positioning line

1. **Get off the boat. We'll reset it.** (chosen: it tells them what to do and what we do, in six words)
2. Leave the boat. Come back to it ready.
3. You had the weekend. We'll take Sunday night.

## Sitemap

| URL | Search intent |
|---|---|
| `/` | Positioning, both moments, how it works, service area, FAQ, book |
| `/boat-valet-auckland` | Post-trip valet, wash-down, interior clean |
| `/boat-fridge-restock` | Provisioning, groceries, drinks, ice to the boat |
| `/trailer-boat-cleaning` | Callout to your home after the trip |
| `/pine-harbour-boat-cleaning` | Berth service, Pine Harbour Marina |
| `/boat-cleaning-beachlands` | Beachlands: Sunkist Bay ramps, local trips |
| `/boat-cleaning-east-auckland` | Beachlands, Maraetai, Pōhutukawa Coast and beyond |
| `/pricing` | How quotes work (no figures) |
| `/how-it-works` | Key handover, what we need, what's not included |
| `/faq` | All questions, FAQPage schema |
| `/book`, `/book/thanks` | Booking form and conversion |
| `/about` | Zak, Bozzy and why this exists |
| `/privacy`, `/terms` | Privacy Act 2020, key holding, damage, cancellation, weather |
| `/404` | Custom not-found page |

Plus `sitemap-index.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`.

## Design direction

- **Tone:** boutique coastal hotel, editorial, warm. Sand base, deep navy text, brass accent.
- **Type:** Fraunces for display, Inter Tight for text.
- **Memorable detail:** the mark is a signal flag. The International Code flag for R is a cross on a square field: R for Reset. The cross is the logo, the favicon, and the window in the loading screen.

## Loading screen (Tracta reference)

Tracta: a plus-shaped window on a solid field, media cycling inside, then the window grows until only four corner blocks remain and they slide off to reveal the hero.

Ours keeps that choreography with our own mark:

- Navy field, cross-shaped window, marine crops from `tallyweb` cycling inside.
- Below it, a brass loading bar with a counter and service words: Wash down, Wipe down, Reset, Ready.
- The window grows and the corners slide off to reveal the real hero.
- Built with transforms on eight solid blocks, not an animated mask, so it stays crisp and smooth on phones.

Rules so it never costs a booking or a ranking:

- Home page only, once per session, under 2.5 seconds, tap to skip.
- Skipped for reduced motion and Save-Data, and never shown without JavaScript.
- Hero is painted underneath, so LCP is not held back.
- Maker's logos are cropped out of every frame.

## Media

- `tallyweb` real footage: Saxdor at anchor, helm, cockpit, deck. Used for the loader.
- `tallyweb` trawler and fishing images: **not used.** The tallyweb README says they are AI-generated, and showing them here would break the honesty rules.
- Site photography: licensed Unsplash/Pexels, logged in `docs/image-credits.md`, with `REPLACE WITH OWN PHOTO` slots for real jobs.

## Build stages

1. Scaffold Astro + Tailwind, site config as the single source of truth
2. Design system and loading screen
3. All pages and copy
4. Booking form, `/api/book`, Resend emails
5. SEO, schema, llms files, robots, OG images, analytics, consent
6. QA: Lighthouse, schema validation, 375/768/1440 on every page
7. Deploy to Vercel, write `docs/LAUNCH-CHECKLIST.md`
