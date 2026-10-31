// Builds the 1200x630 share images into public/og. Run once, and again if the wording changes.
import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const CARDS = [
  ['home', 'deck-sunpad', ['Get off the boat.', "We'll reset it."]],
  ['valet', 'cockpit', ['Boat valet,', 'Auckland.']],
  ['restock', 'iced-drink', ['Stock my', 'boat fridge.']],
  ['trailer', 'trailer-home', ['Trailer boats,', 'at your place.']],
  ['pine-harbour', 'marina-walkway', ['Pine Harbour,', 'on your berth.']],
  ['beachlands', 'pontoon', ['Boat cleaning', 'in Beachlands.']],
  ['east-auckland', 'ropes', ['Boat cleaning,', 'East Auckland.']],
  ['book', 'cabin', ['Book a reset.', '022 305 3853']],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/'/g, '&#39;');
const panel = (lines) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="760" height="630" fill="#0e2233"/>
  <path fill="#c8963e" d="M64 64h22v22H64zM96 64h22v22H96zM64 96h22v22H64zM96 96h22v22H96z"/>
  <text x="134" y="104" font-family="Georgia, serif" font-size="34" fill="#f2ebdd">Shore Leave</text>
  ${lines.map((l, i) => `<text x="64" y="${370 + i * 92}" font-family="Georgia, serif" font-size="78" letter-spacing="-1.5" fill="#f2ebdd">${esc(l)}</text>`).join('')}
</svg>`;

mkdirSync('public/og', { recursive: true });
for (const [name, photo, lines] of CARDS) {
  const img = await sharp(`src/assets/photos/${photo}.jpg`).resize(440, 630, { fit: 'cover' }).toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0e2233' } })
    .composite([
      { input: Buffer.from(panel(lines)), left: 0, top: 0 },
      { input: img, left: 760, top: 0 },
    ])
    .jpeg({ quality: 82 })
    .toFile(`public/og/${name}.jpg`);
}

await sharp(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="512" height="512"><rect width="32" height="32" fill="#c8963e"/><path fill="#0e2233" d="M0 0h13v13H0zM19 0h13v13H19zM0 19h13v13H0zM19 19h13v13H19z"/></svg>'))
  .png()
  .toFile('public/og/logo.png');
console.log('OG images written');
