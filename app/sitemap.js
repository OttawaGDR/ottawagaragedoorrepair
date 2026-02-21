import { services, areas, blogPosts } from './lib/data';

const BASE = 'https://ottawagaragedoorrepair.ca';

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const areaPages = areas.map((a) => ({
    url: `${BASE}/areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const blogSlugs = [
    ...blogPosts.map((p) => p.slug),
    'garage-door-maintenance-checklist-ottawa',
    'garage-door-off-track-ottawa',
    'replace-vs-repair-garage-door-ottawa',
  ];
  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
