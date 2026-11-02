import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Change this one value (or set PUBLIC_SITE_URL in Vercel) when the real domain goes live.
const site = process.env.PUBLIC_SITE_URL ?? 'https://shore-leave.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // Links load on hover or touch, so the next page is usually there before the tap lands
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Old addresses keep their search value and any links out there
  redirects: {
    '/how-it-works': '/about#how-we-work',
    '/boat-fridge-restock': '/boat-provisioning-auckland',
    '/boat-bed-making': '/boat-valet-auckland',
    '/trailer-boat-cleaning': '/about#where-we-work',
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/book/thanks') })],
  vite: { plugins: [tailwindcss()] },
});
