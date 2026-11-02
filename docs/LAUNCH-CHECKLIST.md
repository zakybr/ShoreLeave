# Launch checklist

## Do these first

### 1. Booking form

Done. Leads go to thezakyrachmadi@gmail.com, because Resend's test sender only delivers to the account's own address. To send them to another address, verify a domain in Resend first, then change `LEAD_TO_EMAIL` in Vercel and redeploy.

### 2. Check marina access

Ask Pine Harbour Marina (190 Jack Lachlan Drive, Beachlands) what contractors need before working on berths. I could not find their rules online. Expect questions about insurance, induction and access.

### 3. Sort your insurance

The site says nothing about insurance today. When cover is in place, set `INSURED: true` in `src/config.ts`, then add the wording you want.

### 4. Check alcohol on restocks

The site says "drinks". Before you buy alcohol for customers and charge them for it, check whether the Sale and Supply of Alcohol Act 2012 applies to what you're doing.

### 5. Read what the site promises

These commitments are in the copy, inferred from the brief. Change any you won't keep:

- Photos before and after every job, and a short note when you're finished
- Damage reported the same day
- Keys never labelled with a name, boat or berth
- Rescheduling for weather at no extra cost
- Groceries shown as their own line on quotes
- Founding boats get Zak or Bozzy on the job
- Fresh Beds: used linen bagged and left aboard, and you tell the owner if there was no clean set
- Regular restock orders kept on file

Have `/terms` and `/privacy` read by someone qualified before you take on customers. They're solid drafts, not legal advice. Add your legal entity name if you form a company.

### 6. Add a hard rate limit

The form already blocks repeat tries in code, but that count is per server instance. In Vercel, open **Project > Firewall > Add Rule**: path equals `/api/book`, method POST, rate limit 10 requests per 10 minutes by IP. I couldn't set this from here.

## Connecting the domain

1. Buy the domain.
2. In Vercel: **Project > Settings > Domains > Add**, and follow the DNS instructions.
3. Set `PUBLIC_SITE_URL=https://yourdomain` in Vercel, then redeploy. Canonicals, sitemap, schema and llms files all update from this one value.

## Verifying the domain in Resend

1. In Resend: **Domains > Add Domain**.
2. Add the DNS records it gives you (SPF, DKIM) at your DNS provider, then click Verify.
3. In Vercel, set `FROM_EMAIL=Shore Leave <hello@yourdomain>` and `CUSTOMER_CONFIRMATION=on`.
4. Redeploy, then test with an email address that isn't yours.

## Search setup

**Google Search Console**

1. Go to search.google.com/search-console and add a URL-prefix property.
2. Choose HTML tag, copy the `content` value, and set `PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel. Redeploy and click Verify.
3. Under **Sitemaps**, submit `sitemap-index.xml`.

**Bing Webmaster Tools**

1. Go to bing.com/webmasters. You can import from Search Console.
2. Or use the meta tag: set `PUBLIC_BING_SITE_VERIFICATION` in Vercel.
3. Submit the sitemap. Bing's index feeds ChatGPT and Copilot.

**IndexNow**

After each deploy that changes content, run:

```bash
node scripts/indexnow.mjs https://yourdomain
```

## Google Business Profile

This is the single biggest lever for "near me" searches.

1. Go to business.google.com and add "Shore Leave".
2. Category: try "Boat cleaning service" first. Use "Boat detailing service" if it's offered.
3. Choose the service-area option, and hide your address.
4. Add the areas around Pine Harbour, Bayswater, Orakei, Westhaven and Gulf Harbour marinas.
5. Use exactly this phone number: 022 305 3853. Same name and number everywhere.
6. Add real photos as soon as you have them.
7. Ask every founding customer for an honest review. That's your first real proof.

## Analytics

- **Vercel Web Analytics:** in Vercel, open the project's **Analytics** tab and click Enable. It's cookieless, so it needs no banner.
- **Microsoft Clarity:** create a project at clarity.microsoft.com and set `PUBLIC_CLARITY_ID`.
- **GA4 (optional):** set `PUBLIC_GA4_ID`.

The consent banner only appears once one of those last two is set. Conversion events: `generate_lead`, `click_call`, `click_sms`, `click_book_cta`. On Vercel's free plan, custom events only appear in GA4.

## Content

- **Photos:** swap stand-ins for real job photos. See `docs/image-credits.md`.
- **Prices:** if you ever want to publish them, tell me and I'll add them to `/pricing`, the schema and the llms files together.
- **Season:** "boat valet auckland" peaks from October to January in NZ search data. Get Search Console and Google Business Profile live now.

## GitHub (optional)

The code is committed locally, and the site deploys through Vercel. To get auto-deploys on push:

```bash
gh auth login
```

```bash
gh repo create shore-leave --private --source=/Users/Zaky_1/MarineBusiness --push
```

Then in Vercel: **Project > Settings > Git > Connect**.

## Previewing the loading screen

It plays once per browser session on the home page, and it's skipped if a device has Reduce Motion on. To force it any time, add `?loader` to the home URL.
