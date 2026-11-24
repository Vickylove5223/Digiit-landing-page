import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { IS_STATIC_PREVIEW } from '@/lib/paths'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  if (IS_STATIC_PREVIEW) return { rules: [{ userAgent: '*', disallow: '/' }] }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
