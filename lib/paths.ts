/**
 * The site normally runs at the domain root. The GitHub Pages preview build
 * serves it under /<repo-name>, set via NEXT_PUBLIC_BASE_PATH at build time.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** True for the static GitHub Pages preview, which has no API routes. */
export const IS_STATIC_PREVIEW = process.env.NEXT_PUBLIC_STATIC_PREVIEW === 'true'

/** Prefix a root-relative path ("/about", "/images/x.webp") with the base path. */
export function withBase(path: string): string {
  return path.startsWith('/') && !path.startsWith('//') ? `${BASE_PATH}${path}` : path
}

export const STATIC_PREVIEW_FORM_MESSAGE =
  'Online submissions are not available on this preview site. Please reach us on WhatsApp (0708 642 9380) or email support@digiit.ng.'
