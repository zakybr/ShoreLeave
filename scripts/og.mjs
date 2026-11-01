// Builds the 1200x630 share images into public/og. Run once, and again if the wording changes.
import { mkdirSync, readFileSync } from 'node:fs';
import sharp from 'sharp';

const LOGO = readFileSync('public/logo.svg', 'utf8').match(/ d="([^"]+)"/)[1];

const CARDS = [
  ['home', 'deck-sunpad', ['Get off the boat.', "We'll reset it."]],
  ['valet', 'cockpit', ['Boat valet,', 'Auckland.']],
  ['restock', 'iced-drink', ['Stock my', 'boat fridge.']],
  ['beds', 'cabin', ['Come back to', 'made beds.']],
  ['trailer', 'trailer-home', ['Trailer boats,', 'at your place.']],
  ['north-shore', 'deck-sunpad', ['North Shore,', 'berth or driveway.']],
  ['pine-harbour', 'marina-walkway', ['Pine Harbour,', 'on your berth.']],
  ['beachlands', 'pontoon', ['Boat cleaning', 'in Beachlands.']],
  ['east-auckland', 'ropes', ['Boat cleaning,', 'East Auckland.']],
  ['book', 'cabin', ['Book a reset.', '022 305 3853']],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/'/g, '&#39;');
const panel = (lines) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="760" height="630" fill="#2b2a28"/>
  <svg x="64" y="60" width="100" height="57" viewBox="0 0 1234 704"><path fill="#d6c8b0" d="${LOGO}"/></svg>
  <text x="182" y="104" font-family="Impact, sans-serif" font-size="34" letter-spacing="1" fill="#faf8f3">SHORE LEAVE</text>
  ${lines.map((l, i) => `<text x="64" y="${370 + i * 92}" font-family="Impact, sans-serif" font-size="80" fill="${i ? '#d6c8b0' : '#faf8f3'}">${esc(l.toUpperCase())}</text>`).join('')}
</svg>`;

mkdirSync('public/og', { recursive: true });
for (const [name, photo, lines] of CARDS) {
  const img = await sharp(`src/assets/photos/${photo}.jpg`).resize(440, 630, { fit: 'cover' }).toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#2b2a28' } })
    .composite([
      { input: Buffer.from(panel(lines)), left: 0, top: 0 },
      { input: img, left: 760, top: 0 },
    ])
    .jpeg({ quality: 82 })
    .toFile(`public/og/${name}.jpg`);
}

await sharp(readFileSync('public/favicon.svg'))
  .resize(512, 512)
  .png()
  .toFile('public/og/logo.png');
console.log('OG images written');
