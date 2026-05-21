import { PHONE } from './data';

export const SITE_URL = 'https://www.ottawagaragedoorrepair.ca';

/** Primary title pattern — distinct from GDS “Same-Day Services | GDS Ottawa” */
export const META_TITLE_HOME = 'Garage Door Repair Ottawa | Springs & Openers | Same-Day';
export const META_TITLE_TEMPLATE = '%s | Garage Door Repair Ottawa';
export const SITE_BRAND = 'Garage Door Repair Ottawa';

export const META_DESCRIPTION_HOME = `Garage door repair in Ottawa — springs, openers, cables, and new doors. Same-day service, upfront pricing, licensed & insured. Call ${PHONE}.`;

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
