// Reads each page's own crumb and description, so the llms files list every page and can't drift from it.
const sources = import.meta.glob('../pages/**/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const prop = (source: string, name: string) => source.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1];

export const PAGES = Object.entries(sources).flatMap(([file, source]) => {
  const label = prop(source, 'crumb');
  const description = prop(source, 'description');
  return label && description ? [{ path: file.replace('../pages', '').replace(/(\/index)?\.astro$/, ''), label, description }] : [];
});

const DETAILS = ['/book', '/how-it-works', '/pricing', '/faq', '/about', '/privacy', '/terms'];

export const SERVICE_PAGES = PAGES.filter((p) => !DETAILS.includes(p.path));
export const DETAIL_PAGES = PAGES.filter((p) => DETAILS.includes(p.path));
