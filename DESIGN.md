---
name: Shore Leave
description: "Get off the boat. We'll reset it. A boat hotel turndown for Auckland owners."
colors:
  navy: "#0e2233"
  navy-2: "#16324a"
  sand: "#f2ebdd"
  sand-2: "#e6dac4"
  brass: "#c8963e"
  slate: "#44555f"
  mist: "#b9c6cf"
  field-paper: "#fbf7ef"
typography:
  display:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(2.75rem, 8.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 144"
  display-service:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 144"
  headline:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 144"
  headline-question:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 144"
  title:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-compact:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.33
  numeral:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "3.75rem"
    fontWeight: 400
    lineHeight: 1
  lede:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
  body-large:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.56
  body:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  band: "clamp(4rem, 10vw, 8.5rem)"
  container: "88rem"
  column-gap: "3rem"
  group-gap: "2.5rem"
  copy-gap: "1.5rem"
  rule-pad: "1.25rem"
components:
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.sand}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.6rem"
    height: "3.25rem"
  button-navy-hover:
    backgroundColor: "{colors.navy-2}"
    textColor: "{colors.sand}"
  button-brass:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.6rem"
    height: "3.25rem"
  button-brass-hover:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.navy}"
  input-field:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.85rem"
    height: "3.1rem"
  panel-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.sand}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  field-brass:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.navy}"
    padding: "{spacing.band}"
---

# Design System: Shore Leave

## Overview

**Creative North Star: "The Boat Hotel Turndown"**

Shore Leave looks the way a boat feels when someone has already been through it: squared away, calm, nothing left out. The page is a sequence of full-width colour fields in sand and navy, set with large, quiet Fraunces headlines and plain Inter Tight text. Hospitality comes from restraint and generous space, not from decoration. The direction rejects the blue-gradient trades template outright: this is a turndown service, not a cleaning company.

The density is low and the pacing is slow. A section usually carries one heading, one short block of copy and sometimes one photograph, with deep vertical bands between them. Structure comes from hairline rules and an offset twelve-column grid, so repeated items read like a ruled ledger rather than a row of cards. Everything is flat and square-cornered, and the only ornament is one borrowed from the water: the R signal flag, reduced to its cross and standing for Reset.

Motion is a slow settle, not a performance. Everything eases on the same long tide curve (`cubic-bezier(0.22, 1, 0.36, 1)`), hero copy rises 1.5rem into place as the loader clears, and reduced-motion preferences flatten all of it.

**Key Characteristics:**
- Full-width sand and navy fields, with brass held back for a single field and for actions on navy
- Fraunces at its display optical cut for headings, Inter Tight for everything read or tapped
- Zero radius, zero shadow, depth by colour change alone
- Hairline rules in place of cards
- The R flag cross as mark, list bullet and loader window
- Large, full-bleed, unframed photography

## Colors

A restrained marine palette: warm paper neutrals against one deep navy, with a single aged-metal accent.

### Primary
- **Harbour Navy** (#0e2233): The ink and the second ground. All text on sand, every full-width dark field, the primary button on sand, structural rules.

### Secondary
- **Deck Brass** (#c8963e): The accent. The primary button on navy, the mark on navy, the single brass field, text selection, focus rings on navy. Always carries navy text (6.09:1), never sand.

### Neutral
- **Dry Sand** (#f2ebdd): The page ground, and the text colour on navy (13.67:1).
- **Wet Sand** (#e6dac4): The quiet alternate band. Separates a section from its sand neighbours without the weight of navy, and tracks the scrollbar.
- **Deep Water** (#16324a): Navy's one step up. Button hover on navy buttons, the ghost mark inside the closing field, the scrollbar thumb. Only 1.23:1 against navy, so it is for decoration and state, never for meaning.
- **Sea Mist** (#b9c6cf): Secondary text on navy (9.3:1).
- **Weathered Slate** (#44555f): Input borders and breadcrumbs on sand (6.53:1).
- **Field Paper** (#fbf7ef): The surface inside form controls, a shade lighter than the page so empty fields read as fillable. It is a literal in the stylesheet and not yet a named theme token.

### Named Rules
**The Ground Decides Rule.** The action colour follows the ground: navy buttons on sand, brass buttons on navy. There is no brass button on sand, and the first viewport stays brass-free.

**The One Brass Field Rule.** A brass field appears once at most on a page, and today once on the whole site: the founding-boats statement on the home page. Its rarity is what makes it land.

**The Brass Off Sand Rule.** Brass never serves as text, a hairline, a small mark or a focus ring on sand or wet sand, where it falls to 2.24:1 and 1.93:1. Filled areas of brass carrying navy content are fine, which is why a full field and a selection highlight both work.

## Typography

**Display Font:** Fraunces Variable (with Georgia, serif)
**Body Font:** Inter Tight Variable (with ui-sans-serif, system-ui, sans-serif)

**Character:** Fraunces at its largest optical cut brings high contrast and a little old-world warmth, close to a hotel's stationery. Inter Tight stays out of the way and keeps phone-side reading and tapping plain.

The root size is 17px, so every rem in this system is 17px, not 16px. Weight stays at 400 for all Fraunces; emphasis comes from size. Sans text is 400 for reading and 600 for labels, buttons and links.

### Hierarchy
- **Display** (400, clamp(2.75rem, 8.4vw, 6rem), 1.04): The home page h1, and the thanks and 404 pages.
- **Display Service** (400, clamp(2.5rem, 7vw, 5rem), 1.04): The h1 on every service page, a step down so longer place and service names still fit.
- **Headline** (400, clamp(2rem, 5vw, 3.5rem), 1.04): Section headings.
- **Headline Question** (400, clamp(1.6rem, 3vw, 2.25rem), 1.12): Sentence-length headings, used for the question rows in the navy band on service pages.
- **Title** (400, clamp(1.35rem, 2.6vw, 1.75rem), 1.15): Step names and sub-headings, at Fraunces' automatic optical size. Feature pairs step this up to clamp(1.75rem, 3.4vw, 2.5rem), and accordion questions set it at 1.3rem.
- **Title Compact** (400, 1.5rem, 1.33): Fraunces at small scale without tracking: definition terms, the footer wordmark, mobile menu items.
- **Numeral** (400, 3.75rem, 1): Fraunces step numbers on an ordered sequence.
- **Lede** (400, 1.25rem, 1.375): The sentence under an h1, held to 34 to 46ch. The home hero opens it up to 1.4rem at the large breakpoint.
- **Body Large** (400, 1.125rem, 1.56): Standalone paragraphs and cross lists beside a large heading.
- **Body** (400, 17px, 1.55): Default text, capped at 68ch, wrapped with `text-wrap: pretty`.
- **Label** (600, 17px, 1.55): Buttons, text links, field labels, table row heads.

Small print has no settled step: the footer line, breadcrumb and consent copy sit between 0.875rem and 0.95rem.

### Named Rules
**The Display Cut Rule.** h1 and h2 always set `'opsz' 144` with -0.02em tracking. Headings are balanced with `text-wrap: balance`.

**The Long Line Steps Down Rule.** When a heading runs to a full sentence, drop its size and open its leading to 1.12. Keep 1.04 for short promises.

**The Sentence Case Rule.** All type is sentence case. There is no uppercase and no tracked-out label anywhere in the build, and headings stand alone without a small line above them.

## Layout

Content sits in a centred container (88rem) with a fluid gutter (clamp(1.25rem, 4vw, 3.5rem)). Vertical bands use a fluid block padding (clamp(4rem, 10vw, 8.5rem)), which sets the slow pace of the site.

From the large breakpoint up, sections sit on a twelve-column grid with a 3rem gap. The grid is used asymmetrically: a heading in 5 or 6 columns and copy offset to start at column 7 or 8, or a 7 and 5 split with text left and photograph right. Columns are deliberately left empty. Equal columns appear only for genuinely parallel items: three steps and two service areas.

Rhythm inside a section is 1.25rem to 1.5rem from heading to copy, about 2rem down to actions, 2.5rem to 3rem between groups. Below the large breakpoint everything stacks to one column, photographs lead or follow their copy by sequence, and hero and service photographs bleed to the screen edge.

Breakpoints are 40rem, 48rem and 64rem. Media queries read the browser's 16px, so these are 640px, 768px and 1024px despite the 17px root. Below 64rem the body reserves 3.5rem plus the safe area for the fixed action bar.

**The Full-Width Field Rule.** Colour fields run edge to edge; content sits in the container inside them. Sections change ground rather than sit in boxes.

## Elevation & Depth

The system is entirely flat. There is no `box-shadow` anywhere in the build. Depth comes from the change of ground between fields, from hairlines, and from photography. Fixed elements (header, action bar, consent panel) are separated by colour and a hairline alone. The header's only concession is a sand ground at 95% opacity.

**The Flat Fields Rule.** Nothing lifts. Surfaces do not gain shadows on hover, focus or scroll; state is shown by a colour change, a thicker underline or a 1px press.

## Shapes

Every corner is square (0px): buttons, inputs, panels, photographs and fields. Inputs reset the platform radius explicitly; only the native checkbox keeps its platform shape, tinted navy.

Photographs are plain rectangles at 4:5, 5:4 or 1:1, cropped with `object-fit: cover`, with no frame, caption or overlay. Rules are 1px: full navy above step and service-area columns, and navy at 10% to 30% for quiet dividers in header, tables, accordions and related links.

**The One Cross Rule.** The R flag cross is the system's only ornament and appears in a fixed set of forms: the mark (four squares with the cross left as the gap), the solid list bullet, the accordion plus, the loader window. Nothing else is drawn, and no icon set is used.

## Components

### Buttons
Plain, solid and confident, with no chrome.

- **Shape:** Square (0px), 3.25rem minimum height, 600 weight, no underline.
- **Navy:** Navy fill, sand text, on sand grounds. Hover moves to Deep Water.
- **Brass:** Brass fill, navy text, on navy grounds. Hover moves to sand.
- **Compact:** 2.75rem minimum height in the header and consent panel.
- **Bar:** 3.5rem minimum height in the mobile action bar, with Text and Call as unfilled sand labels beside the brass Book button.
- **Press / Transition:** All buttons drop 1px on press and ease colour over 0.25s on the tide curve.

### Text Links
- **Style:** 600 weight, 1px underline offset 0.2em, inheriting the ground's text colour.
- **Hover:** The underline thickens to 2px. Header and footer links invert this: no underline at rest, underline on hover, and the current page stays underlined.
- **Pairing:** In the home hero and the closing field the call link sits beside the primary button at a 1.5rem gap, so phoning is a peer of booking.

### Cards / Containers
Cards are nearly absent. The one contained surface is a **flat navy panel** (square, no border, no shadow, 1.75rem padding) used for the booking aside; the consent notice is the same panel at 1rem padding. Repeated content is ruled, never boxed.

### Inputs / Fields
- **Style:** Field Paper surface, 1px slate border, square, 3.1rem minimum height, 8rem for textareas, 1.05rem text. Labels sit above in Label weight, 0.35rem away.
- **Focus:** 2px navy outline with 1px offset.
- **Checkbox:** 1.3rem native control with navy accent colour.
- **Error:** A single semibold navy line in an alert region above the submit button. The system has no error colour. No disabled style is defined.

### Navigation
- **Desktop:** Sticky sand header, 5rem tall, with the mark and Fraunces wordmark left, body-weight links and a compact navy button right.
- **Mobile:** 4rem tall, with a Menu label and plus that rotates 45 degrees to close. The panel opens full width on sand with Fraunces 1.5rem links split by 10% navy hairlines.
- **Action bar:** Below 64rem a navy bar is fixed to the bottom with Book, Text and Call. On the home page it holds back until the hero button has scrolled away.
- **Footer:** Navy field with the mark in brass, the phone number as a link, two link columns and a mist small-print line.

### Cross List
The everyday list of the system. Items sit on a 0.8rem cross drawn in `currentColor`, 0.85rem from the text, with 0.7rem between items. The cross is navy on sand grounds. The stylesheet defaults to brass for navy grounds, though no live surface uses that yet.

### Ruled Step
An ordered sequence in three equal columns. Each step has a full navy rule, 1.25rem of padding, a Fraunces numeral, then a Title and body. Numerals appear only where the order is real.

### Accordion
Native disclosure rows split by rules at 20% of the current text colour, with 1.25rem block padding. The question is a Title at 1.3rem, the plus is drawn from two 2px bars and rotates 45 degrees to a close mark over 0.3s.

### Closing Field
The navy call to action that ends most pages: a headline capped at 16ch, one line in mist, a brass button and a call link. From the large breakpoint a 340px ghost mark in Deep Water sits at the right gutter. It is decorative and hidden from assistive tech.

### Cross Loader
A first-visit-only reveal on the home page. A navy field opens through a large cross-shaped window, five frames play across a fixed 1.5s beside the service words, then the panels sweep off the screen in 1s (`cubic-bezier(0.76, 0, 0.24, 1)`) over a hero that is already painted. Pointer or key input skips it, and a CSS failsafe removes it at 6s. It is skipped for reduced motion and data-saver users, and never shows on any other page.

## Do's and Don'ts

### Do:
- **Do** build pages as a sequence of full-width fields on sand, navy and wet sand, each with `clamp(4rem, 10vw, 8.5rem)` block padding.
- **Do** match the button to the ground: navy on sand, brass on navy.
- **Do** carry navy text on every brass surface.
- **Do** set h1 and h2 in Fraunces 400 at optical size 144 with -0.02em tracking.
- **Do** split repeated items with 1px rules, using full navy for primary structure and 10% to 30% navy for quiet division.
- **Do** place copy off-centre on the twelve-column grid and leave columns empty.
- **Do** pair the booking button with a phone link in the home hero and the closing field.
- **Do** ease all transitions on the tide curve and honour reduced motion.
- **Do** set a visible focus ring with at least 3:1 against its ground: navy on sand and brass, brass on navy.
- **Do** run photographs large and unframed, showing boats, decks, cabins and water at a calm moment.

### Don't:
- **Don't** use blue gradients or any visible gradient surface. The `linear-gradient(currentColor, currentColor)` that draws the cross is a solid-bar technique, and it stays.
- **Don't** put more than one brass field on a page.
- **Don't** set brass text, hairlines, small marks or focus rings on sand or wet sand.
- **Don't** put a brass button on sand or a sand-text button on brass.
- **Don't** add shadows, hover lifts or rounded corners.
- **Don't** add uppercase labels or a small line above a heading.
- **Don't** add icon sets, emoji or drawn ornament beyond the R flag cross.
- **Don't** box repeated content in card grids.
- **Don't** use step numerals where the order doesn't matter.
- **Don't** use Deep Water on navy for anything that must be read.
- **Don't** bold Fraunces for emphasis; size carries the hierarchy.
