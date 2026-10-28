import type { Metadata } from 'next'
import './globals.css'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const BASE_URL = 'https://www.digiit.com.ng'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Digiit — Salary-Backed Loans for Nigerian Employees',
    template: '%s | Digiit',
  },
  description:
    'Digiit gives your employees instant, confidential access to salary-backed loans — at zero cost and zero risk to your organisation. No collateral, no paperwork.',
  keywords: [
    'salary advance Nigeria',
    'employee loans Nigeria',
    'salary-backed loans',
    'staff loans HR benefit',
    'payroll deduction loans',
    'Digiit',
    'financial wellness Nigeria',
  ],
  authors: [{ name: 'Digiit', url: BASE_URL }],
  creator: 'Digiit',
  publisher: 'Digiit',
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Digiit',
    title: 'Digiit — Salary-Backed Loans for Nigerian Employees',
    description:
      'Instant, confidential salary-backed loans for your staff. Zero cost to your organisation. No collateral, no paperwork.',
    locale: 'en_NG',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digiit — Empower Your People. Power Your Business.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@digiit_ng',
    creator: '@digiit_ng',
    title: 'Digiit — Salary-Backed Loans for Nigerian Employees',
    description:
      'Instant, confidential salary-backed loans for your staff. Zero cost to your organisation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/gravity" rel="stylesheet" />
      </head>
      <body>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
