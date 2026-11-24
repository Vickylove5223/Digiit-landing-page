import { pageMeta } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadersGrid from '@/components/LeadersGrid'

export const metadata = pageMeta({
  title: 'About Us: Reimagining Employee Financial Dignity',
  description:
    'We are a digital-led finance company, changing the way people and businesses access credit. Powered by Digiit.',
  path: '/about',
  ogTitle: 'About Us | Digiit',
  ogDescription:
    'We are a digital-led finance company, changing the way people and businesses access credit across Nigeria.',
})

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top" className="fdt-about-page">
        {/* ================================================================
            SECTION 1: HERO
            ================================================================ */}
        <section className="fdt-section fdt-hero-section">
          <div className="fdt-container">
            <header className="fdt-hero-header">
              <div className="fdt-hero-title-col">
                <h1 className="fdt-hero-h1">
                  Working together for better financial futures
                </h1>
                <p className="fdt-hero-sub">
                  We are a digital-led finance company, changing the way people and businesses access credit.
                </p>
              </div>
            </header>

            <div className="fdt-hero-img-box" style={{ boxShadow: 'none' }}>
              <img
                src="/images/about-hero.webp"
                alt="Our team at Digiit"
                width={1400}
                height={1050}
                fetchPriority="high"
                className="fdt-hero-img"
              />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2: PURPOSE (MISSION, VISION & CORE VALUES)
            ================================================================ */}
        <section className="fdt-section ab-purpose" aria-labelledby="ab-purpose-title">
          <div className="fdt-container">
            <header className="ab-head">
              <h2 id="ab-purpose-title">What drives everything we do</h2>
              <p>Our mission, vision and values guide how we serve every employee and every company we partner with.</p>
            </header>

            <div className="ab-mv">
              <article className="ab-mv-card ab-mv-card--mission">
                <span className="ab-mv-ico" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
                </span>
                <h3>Our mission</h3>
                <p>To provide innovative and customer-focused financial solutions, leveraging technology and exceptional service delivery.</p>
              </article>
              <article className="ab-mv-card ab-mv-card--vision">
                <span className="ab-mv-ico" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
                </span>
                <h3>Our vision</h3>
                <p>To be the non-bank lending provider of choice for every Nigerian.</p>
              </article>
            </div>

            <div className="ab-values">
              <h3 className="ab-values-title">What we stand for</h3>
              <ul className="ab-values-grid">
                {[
                  ['peopleFirst.svg', 'People First', 'We prioritize the needs, goals, and trust of our customers in every decision we make.'],
                  ['trust.svg', 'Integrity', 'We operate with honesty and transparency. No hidden fees, no false promises.'],
                  ['reputation.svg', 'Excellence', 'We strive to exceed expectations with world-class service and performance.'],
                  ['disruption.svg', 'Innovation', 'We embrace technology and fresh thinking to deliver smarter financial solutions.'],
                  ['target.svg', 'Customer Centric', 'We design every service around your needs, goals, and experience.'],
                  ['professional-success.svg', 'Professionalism', 'We deliver with quality, clarity, and consistent standards.'],
                ].map(([icon, title, text]) => (
                  <li key={title} className="ab-value">
                    <span className="ab-value-ico"><img src={`/images/values/${icon}`} alt="" width={40} height={40} loading="lazy" /></span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4: OUR LEADERSHIP
            ================================================================ */}
        <section className="fdt-section fdt-leadership-section">
          <div className="fdt-container">
            <header className="fdt-lead-header">
              <div className="fdt-lead-title-col">
                <h2 className="fdt-lead-h2">
                  Discover great people behind Digiit
                </h2>
              </div>
              <div className="fdt-lead-desc-col">
                <p>We are proud to have a team of experienced and dedicated leaders who are committed to exceptional service</p>
              </div>
            </header>

            <LeadersGrid />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
