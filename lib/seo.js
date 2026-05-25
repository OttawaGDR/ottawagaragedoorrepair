import { PHONE, BUSINESS_NAME } from './data';

export const SITE_URL = 'https://www.ottawagaragedoorrepair.ca';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Primary title pattern — distinct from GDS “Same-Day Services | GDS Ottawa” */
export const META_TITLE_HOME = `${BUSINESS_NAME} | Springs & Openers | Same-Day`;
export const META_TITLE_TEMPLATE = `%s | ${BUSINESS_NAME}`;
export const SITE_BRAND = BUSINESS_NAME;

/** No dollar amounts or review/rating claims — used in search snippets and social previews. */
export const META_CTA = `Same-day service. Licensed & insured. Call ${PHONE}.`;

export const META_DESCRIPTION_HOME = `Garage door repair in Ottawa — springs, openers, cables, and new door installation. ${META_CTA}`;

export const OG_SITE_NAME = SITE_BRAND;

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
