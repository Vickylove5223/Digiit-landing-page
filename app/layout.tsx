import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from '@/lib/seo'
import { IS_STATIC_PREVIEW } from '@/lib/paths'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

const gravity = localFont({
  src: [
    { path: './fonts/Gravity-Light.woff', weight: '300', style: 'normal' },
    { path: './fonts/Gravity-Book.woff', weight: '350', style: 'normal' },
    { path: './fonts/Gravity-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/Gravity-Bold.woff', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-gravity',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const DEFAULT_TITLE = 'Digiit | Salary-Backed Loans for Nigerian Employees'
const DEFAULT_DESCRIPTION =
  'Digiit gives your employees instant, confidential access to salary-backed loans, at zero cost and zero risk to your organisation. No collateral, no paperwork.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#27398a',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: '%s | Digiit' },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'salary advance Nigeria',
    'employee loans Nigeria',
    'salary-backed loans',
    'staff loans HR benefit',
    'payroll deduction loans',
    'Digiit',
    'financial wellness Nigeria',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: 'FundiT Finance Limited',
  alternates: { canonical: '/' },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description:
      'Instant, confidential salary-backed loans for your staff. Zero cost to your organisation. No collateral, no paperwork.',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: DEFAULT_TITLE,
    description:
      'Instant, confidential salary-backed loans for your staff. Zero cost to your organisation.',
  },
  // The GitHub Pages preview must not compete with the real domain in search results.
  robots: IS_STATIC_PREVIEW
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
      },

}

const organizationLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Digiit by FundiT',
      legalName: 'FundiT Finance Limited',
      url: SITE_URL,
      logo: `${SITE_URL}/digiit-logo.svg`,
      description: DEFAULT_DESCRIPTION,
      email: 'support@digiit.ng',
      telephone: '+2347086429380',
      areaServed: { '@type': 'Country', name: 'Nigeria' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6, Babatunde Jose Street, Off Ademola Adetokunbo',
        addressLocality: 'Victoria Island, Lagos',
        addressCountry: 'NG',
      },
      sameAs: [
        'https://instagram.com/digiitng',
        'https://x.com/digiitng',
        'https://facebook.com/digiitng',
        'https://linkedin.com/company/digiitng',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-NG',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${gravity.variable}`}>
      <body>
        <JsonLd data={organizationLd} />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
