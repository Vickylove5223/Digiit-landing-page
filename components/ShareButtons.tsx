'use client'
import { useState } from 'react'

type Props = { title: string; path: string }

const SITE_URL = 'https://www.digiit.com.ng'

export default function ShareButtons({ title, path }: Props) {
  const [copied, setCopied] = useState(false)

  // Use the address the reader is actually on (works on localhost, staging and live).
  const pageUrl = () => (typeof window !== 'undefined' ? window.location.origin + path : SITE_URL + path)

  const openPopup = (href: string) => {
    const w = 600, h = 560
    const left = window.screenX + (window.outerWidth - w) / 2
    const top = window.screenY + (window.outerHeight - h) / 2
    const win = window.open(href, 'share', `width=${w},height=${h},left=${left},top=${top},noopener,noreferrer`)
    if (!win) window.location.href = href // popup blocked: open in the same tab instead
  }

  const share = (network: 'x' | 'linkedin' | 'email') => {
    const url = encodeURIComponent(pageUrl())
    const text = encodeURIComponent(title)
    if (network === 'email') {
      window.location.href = `mailto:?subject=${text}&body=${text}%0A%0A${url}`
      return
    }
    openPopup(
      network === 'x'
        ? `https://twitter.com/intent/tweet?url=${url}&text=${text}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    )
  }

  const copyOrNativeShare = async () => {
    const url = pageUrl()
    // Phones: use the built-in share sheet when available.
    if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      try { await navigator.share({ title, url }); return } catch { /* cancelled: fall through to copy */ }
    }
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const t = document.createElement('textarea')
      t.value = url
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      t.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="art-share" role="group" aria-label="Share this article">
      <button type="button" onClick={() => share('x')} aria-label="Share on X" title="Share on X">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.828l-5.35-6.993L4.6 22H1.34l8.02-9.17L1 2h6.996l4.835 6.393L18.244 2zm-1.197 18h1.86L7.04 3.9H5.04L17.047 20z" /></svg>
      </button>
      <button type="button" onClick={() => share('linkedin')} aria-label="Share on LinkedIn" title="Share on LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-3.95v-11z" /></svg>
      </button>
      <button type="button" onClick={() => share('email')} aria-label="Share by email" title="Share by email">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
      </button>
      <button type="button" onClick={copyOrNativeShare} aria-label={copied ? 'Link copied' : 'Copy link'} title={copied ? 'Link copied' : 'Copy link'} className={copied ? 'is-copied' : undefined}>
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" /><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" /></svg>
        )}
      </button>
      <span className="art-share-status" role="status" aria-live="polite">{copied ? 'Link copied' : ''}</span>
    </div>
  )
}
