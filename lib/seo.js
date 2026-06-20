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

/** No dollar amounts in SERP snippets — page body can still show prices. */
export const META_CTA = `Same-day service. Licensed & insured. Call ${PHONE}.`;

/** Primary suburbs named for local SEO — used in home/services meta. */
export const META_AREA_LIST = 'Kanata, Barrhaven, Nepean, Orleans, Stittsville, Gloucester';

export const META_DESCRIPTION_HOME = `${SITE_NAME} — same-day spring replacement, opener repair, cables, new doors & emergency service in Ottawa. ${META_AREA_LIST} & more. ${META_CTA}`;

export const META_DESCRIPTION_SERVICES = `Garage door services in Ottawa — spring replacement, opener repair, cables, panels, weather seals & new installs. ${META_AREA_LIST} & all neighbourhoods. ${META_CTA}`;

/** Price-free meta descriptions per service page — areas + services only. */
export const SERVICE_META_DESCRIPTIONS = {
  'spring-replacement': `Garage door spring replacement in Ottawa — ${META_AREA_LIST} & all areas. Same-day torsion & extension springs, both sides replaced. ${META_CTA}`,
  'opener-repair': `Garage door opener repair & installation in Ottawa — LiftMaster, Chamberlain, Genie & all brands. ${META_AREA_LIST}. ${META_CTA}`,
  'opener-gear-replacement': `Opener gear replacement in Ottawa — fix grinding motors & stuck doors. Same-day service across ${META_AREA_LIST} & Ottawa. ${META_CTA}`,
  'emergency-repair': `24/7 emergency garage door repair in Ottawa — stuck, off-track & broken springs. Under 90 min to ${META_AREA_LIST} & every neighbourhood. ${META_CTA}`,
  'new-door-installation': `New garage door installation in Ottawa — insulated steel, carriage-house & custom styles. ${META_AREA_LIST} & all areas. ${META_CTA}`,
  'cable-repair': `Garage door cable repair in Ottawa — snapped or frayed lift cables replaced safely. Same-day across ${META_AREA_LIST} & Ottawa. ${META_CTA}`,
  'panel-repair': `Garage door panel repair in Ottawa — dents, cracks & impact damage fixed. Honest assessment in ${META_AREA_LIST} & all neighbourhoods. ${META_CTA}`,
  weatherstripping: `Garage door weatherstripping in Ottawa — bottom seals, thresholds & insulation for harsh winters. ${META_AREA_LIST} & all areas. ${META_CTA}`,
  'maintenance-tune-up': `Garage door tune-up in Ottawa — 21-point inspection, lubrication & safety check. Annual service in ${META_AREA_LIST} & all neighbourhoods. ${META_CTA}`,
};

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
    .replace(/\$[\d,]+(?:\s*[-–]\s*\$?[\d,]+)?\+?/g, '')
    .replace(/\(\$[^)]*\)/g, '')
    .replace(/\bfrom \$[\d,]+(?:\+)?/gi, '')
    .replace(/\bstarting at \$[\d,]+(?:\+)?/gi, '')
    .replace(/\bstarts? at \$[\d,]+(?:\+)?/gi, '')
    .replace(/\bruns \$[\d,–-]+/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,;:])/g, '$1')
    .replace(/\s+&\s+$/g, '')
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
  const custom = SERVICE_META_DESCRIPTIONS[service.slug];
  if (custom) return truncateMeta(stripPriceMentions(custom));
  const lead = stripPriceMentions(service.shortDesc);
  return truncateMeta(`${lead} Ottawa — ${META_AREA_LIST} & all areas. ${META_CTA}`);
}

export function areaMetaDescription(areaName, introFragment) {
  const cleaned = introFragment ? stripPriceMentions(introFragment.replace(/\s+/g, ' ').trim()) : '';
  const lead = cleaned
    ? truncateMeta(cleaned, 95)
    : `Same-day garage door repair in ${areaName}, Ottawa.`;
  return truncateMeta(`${lead} Springs, openers, cables & new door installs. ${META_CTA}`);
}

export function blogMetaDescription(post) {
  if (post.metaDescription) return truncateMeta(stripPriceMentions(post.metaDescription));
  const intro = stripPriceMentions(post.intro || '');
  return truncateMeta(intro || `Garage door tips for Ottawa homeowners. ${post.title}`);
}
