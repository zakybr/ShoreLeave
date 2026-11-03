import { AREAS, SERVICES, SITE, WINTER } from '../config';
import type { QA } from '../data/qa';

const abs = (path: string) => new URL(path, SITE.url).href.replace(/\/$/, '');
const bizId = () => `${abs('/')}/#business`;

export const business = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': bizId(),
  name: SITE.name,
  description: SITE.summary,
  url: abs('/'),
  telephone: SITE.phoneTel,
  image: abs('/og/home.jpg'),
  priceRange: 'Quote on request',
  founder: [
    { '@type': 'Person', name: 'Zak' },
    { '@type': 'Person', name: 'Bozzy' },
  ],
  areaServed: AREAS,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Boat services',
    itemListElement: [...SERVICES, WINTER].map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.label, description: s.schema, url: abs(s.href) },
    })),
  },
});

export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${abs('/')}/#website`,
  name: SITE.name,
  url: abs('/'),
  inLanguage: 'en-NZ',
  publisher: { '@id': bizId() },
});

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${abs('/')}/#organization`,
  name: SITE.name,
  url: abs('/'),
  logo: abs('/og/logo.png'),
  telephone: SITE.phoneTel,
});

// No price on the Offer: the owner has chosen quote-only pricing.

export const service = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: abs(path),
  serviceType: name,
  provider: { '@id': bizId() },
  areaServed: AREAS,
  offers: {
    '@type': 'Offer',
    url: abs('/book'),
    availability: 'https://schema.org/InStock',
    description: 'Quote on request',
  },
});

export const faqPage = (items: QA[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const breadcrumbs = (trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});
