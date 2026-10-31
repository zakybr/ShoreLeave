import type { APIRoute } from 'astro';

const BOTS = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Applebot'];

export const GET: APIRoute = ({ site }) => {
  const rules = BOTS.map((b) => `User-agent: ${b}\nAllow: /\nDisallow: /api/`).join('\n\n');
  const body = `${rules}\n\nUser-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
