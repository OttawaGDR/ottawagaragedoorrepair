import { PHONE, BUSINESS_NAME } from './data';

export const SITE_URL = 'https://www.ottawagaragedoorrepair.ca';

/** Primary title pattern — distinct from GDS “Same-Day Services | GDS Ottawa” */
export const META_TITLE_HOME = `${BUSINESS_NAME} | Springs & Openers | Same-Day`;
export const META_TITLE_TEMPLATE = `%s | ${BUSINESS_NAME}`;
export const SITE_BRAND = BUSINESS_NAME;

/** No dollar amounts or review/rating claims — used in search snippets and social previews. */
export const META_CTA = `Same-day service. Licensed & insured. Call ${PHONE}.`;

export const META_DESCRIPTION_HOME = `Garage door repair in Ottawa — springs, openers, cables, and new door installation. ${META_CTA}`;

export function serviceMetaDescription(service) {
  const lead = (service.metaDescription || service.shortDesc).replace(/\s+/g, ' ').trim();
  return `${lead} Same-day ${service.title.toLowerCase()} in Ottawa. Licensed & insured. Call ${PHONE}.`;
}

export const OG_SITE_NAME = SITE_BRAND;

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
