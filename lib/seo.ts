import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.digiit.com.ng'
export const SITE_NAME = 'Digiit'
export const TWITTER_HANDLE = '@digiitng'
export const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Digiit: Empower Your People. Power Your Business.',
}

interface PageMetaInput {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  image?: { url: string; alt?: string; width?: number; height?: number }
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
}

/**
 * Builds complete metadata for a page. Next.js replaces (not merges) a parent's
 * openGraph/twitter objects, so every page must supply the full set.
 */
export function pageMeta({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  publishedTime,
  authors,
}: PageMetaInput): Metadata {
  const socialTitle = ogTitle ?? `${title} | ${SITE_NAME}`
  const socialDescription = ogDescription ?? description
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_NG',
      title: socialTitle,
      description: socialDescription,
      images: [image],
      ...(type === 'article' ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: socialTitle,
      description: socialDescription,
      images: [image.url],
    },
  }
}
