// Tells Bing and friends what changed. Run after a deploy: node scripts/indexnow.mjs https://your-domain
// Bing's index feeds ChatGPT and Copilot search, so this is worth doing.
import { readdirSync } from 'node:fs';

const site = (process.argv[2] ?? process.env.PUBLIC_SITE_URL ?? '').replace(/\/$/, '');
if (!site) throw new Error('Pass the site URL: node scripts/indexnow.mjs https://your-domain');

const key = readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f))?.replace('.txt', '');
if (!key) throw new Error('No IndexNow key file found in public/');

const xml = await (await fetch(`${site}/sitemap-0.xml`)).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
