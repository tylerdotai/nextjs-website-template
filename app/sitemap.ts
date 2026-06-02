import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { getAllPostSlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = ['', '/services', '/about', '/blog', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));
  const posts = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  return [...staticPages, ...posts];
}
