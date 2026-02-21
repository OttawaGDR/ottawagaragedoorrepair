const BASE = 'https://ottawagaragedoorrepair.ca';

/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: [] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
