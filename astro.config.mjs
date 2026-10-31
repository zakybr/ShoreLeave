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
  integrations: [sitemap({ filter: (page) => !page.includes('/book/thanks') })],
  vite: { plugins: [tailwindcss()] },
});
