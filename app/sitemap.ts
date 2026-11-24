import type { MetadataRoute } from 'next'
import { getAllPosts, toIsoDate } from '@/lib/blog'
import { SITE_URL } from '@/lib/seo'

// Bump when the content of the static pages changes meaningfully.
const PAGES_UPDATED = '2026-11-24'

const STATIC_PAGES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/apply', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/data-protection', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/complaints', priority: 0.4, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = STATIC_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: PAGES_UPDATED,
    changeFrequency,
    priority,
  }))

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: toIsoDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...pages, ...posts]
}
