import { PHONE, BUSINESS_NAME } from './data';

export const SITE_URL = 'https://www.ottawagaragedoorrepair.ca';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Preferred site / business name for Google site names, schema, and branding.
 * Matches the logo (Ottawa + GARAGE DOOR REPAIR). Keep in sync with visible homepage branding.
 */
export const SITE_NAME = 'Ottawa Garage Door Repair';

/** Keyword-rich title variant — used in page titles and alternateName. */
export const SITE_NAME_ALT = BUSINESS_NAME;

/** Primary title pattern — distinct from GDS “Same-Day Services | GDS Ottawa” */
export const META_TITLE_HOME = `${SITE_NAME} | Garage Door Repair | Same-Day`;
export const META_TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const SITE_BRAND = SITE_NAME;

/** No dollar amounts or review/rating claims — used in search snippets and social previews. */
export const META_CTA = `Same-day service. Licensed & insured. Call ${PHONE}.`;

export const META_DESCRIPTION_HOME = `${SITE_NAME} — springs, openers, cables, and new door installation in Ottawa. ${META_CTA}`;

export const OG_SITE_NAME = SITE_NAME;

/** Names Google may use for site name / organization (WebSite + LocalBusiness). */
export const SITE_ALTERNATE_NAMES = [
  SITE_NAME,
  SITE_NAME_ALT,
  'ottawagaragedoorrepair.ca',
  'Ottawa garage door repair',
];

/** Brand mark — navy tile, orange house (matches LogoMark / app/icon.svg). */
export const SITE_LOGO_SVG = `${SITE_URL}/icon.svg`;
export const SITE_LOGO_192 = `${SITE_URL}/logo-192.png`;
export const SITE_LOGO_512 = `${SITE_URL}/logo-512.png`;
export const SITE_LOGO = SITE_LOGO_512;

export const siteIcons = {
  icon: [
    { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    { url: '/icon.svg', type: 'image/svg+xml' },
    { url: '/favicon.ico', sizes: '48x48' },
    { url: '/logo-48.png', sizes: '48x48', type: 'image/png' },
    { url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  shortcut: '/favicon-32.png',
};

export const siteLogoImageObject = {
  '@type': 'ImageObject',
  url: SITE_LOGO_512,
  width: 512,
  height: 512,
  caption: SITE_BRAND,
};

export const siteOgImage = {
  url: SITE_LOGO_512,
  width: 512,
  height: 512,
  alt: SITE_BRAND,
};

/** Trim meta descriptions for Google SERP (~155–160 chars). */
export function truncateMeta(text, maxLen = 158) {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

/** Remove dollar amounts from meta/snippet text (page body can still mention prices). */
export function stripPriceMentions(text) {
  return (text || '')
    .replace(/\$[\d,]+(?:\s*[-–]\s*\$?[\d,]+)?/g, '')
    .replace(/\bfrom \$\d+/gi, '')
    .replace(/\bstarting at \$\d+/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,])/g, '$1')
    .trim();
}

export function pageTitle(segment) {
  return `${segment} | ${SITE_BRAND}`;
}

export function openGraphPage({ title, description, url }) {
  return {
    title,
    description,
    url,
    siteName: OG_SITE_NAME,
    locale: 'en_CA',
    type: 'website',
    images: [siteOgImage],
  };
}

/**
 * Shared metadata: canonical, Open Graph, Twitter — no prices in description.
 * @param {{ title?: string, description: string, path?: string, keywords?: string[], titleAbsolute?: boolean }} opts
 */
export function buildPageMetadata({ title, description, path = '', keywords, titleAbsolute = false }) {
  const url = path
    ? `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
    : SITE_URL;
  const desc = truncateMeta(stripPriceMentions(description));
  const ogTitle = titleAbsolute ? title : title ? pageTitle(title) : META_TITLE_HOME;

  const meta = {
    description: desc,
    alternates: { canonical: url },
    openGraph: openGraphPage({ title: ogTitle, description: desc, url }),
    twitter: {
      card: 'summary',
      title: ogTitle,
      description: desc,
    },
  };

  if (keywords?.length) meta.keywords = keywords;
  if (titleAbsolute) meta.title = { absolute: title };
  else if (title) meta.title = title;

  return meta;
}

export function serviceMetaDescription(service) {
  const lead = stripPriceMentions(service.metaDescription || service.shortDesc);
  return truncateMeta(`${lead} Same-day ${service.title.toLowerCase()} in Ottawa. Licensed & insured. Call ${PHONE}.`);
}

export function areaMetaDescription(areaName, introFragment) {
  const lead = introFragment
    ? truncateMeta(introFragment, 95)
    : `Same-day garage door repair in ${areaName}, Ottawa.`;
  return truncateMeta(`${lead} Springs, openers, and cables. ${META_CTA}`);
}

export function blogMetaDescription(post) {
  if (post.metaDescription) return truncateMeta(stripPriceMentions(post.metaDescription));
  const intro = stripPriceMentions(post.intro || '');
  return truncateMeta(intro || `Garage door tips for Ottawa homeowners. ${post.title}`);
}
