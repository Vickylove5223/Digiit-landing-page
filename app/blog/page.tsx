import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogListing from '@/components/BlogListing'
import PromoBanner from '@/components/PromoBanner'

export const metadata: Metadata = {
  title: 'Blog & Workplace Insights — Employee Financial Health & HR Trends',
  description:
    'Expert articles, guides, and thought leadership from Digiit. Discover strategies for reducing staff turnover, promoting financial wellness, and navigating NDPR compliance.',
  openGraph: {
    title: 'Blog & Insights | Digiit',
    description: 'Expert thought leadership on workplace financial wellness and corporate lending in Nigeria.',
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="top" className="blog-page-main">
        {/* Blog Hero Header */}
        <section className="blog-hero-section">
          <div className="wrap">
            <div className="blog-hero-content">

              <h1 className="blog-hero-title">
                Workplace Financial Health, Insights &amp; Guides
              </h1>

              <p className="blog-hero-lead">
                Actionable perspectives from veteran bankers, HR directors, and risk analysts on building resilient,
                financially secure workforces across Nigerian enterprises.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts & Interactive Categories */}
        <section style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 0 clamp(4rem, 6vw, 6rem)' }}>
          <div className="wrap">
            <BlogListing />
          </div>
        </section>

        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
