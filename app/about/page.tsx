import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'

export const metadata: Metadata = {
  title: 'About Us — Reimagining Employee Financial Dignity | Digiit',
  description:
    'We are a digital-led finance company, changing the way people and businesses access credit. Powered by Digiit.',
  openGraph: {
    title: 'About Us — Digiit',
    description:
      'We are a digital-led finance company, changing the way people and businesses access credit across Nigeria.',
  },
}

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
                src="/about-hero.png"
                alt="Our team at Digiit"
                className="fdt-hero-img"
              />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2: MISSION & VISION
            ================================================================ */}
        <section className="fdt-section fdt-mission-section">
          <div className="fdt-container">
            <div className="fdt-mission-row">
              <div className="fdt-mission-content">
                <p className="fdt-mission-h2" style={{ marginBottom: '1.75rem' }}>
                  Our mission is to provide innovative and customer focused financial solutions, leveraging on technology and exceptional service delivery.
                </p>
                <p className="fdt-vision-p">
                  And our vision is to be the non-bank lending provider of choice for every Nigerian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3: WHO WE ARE & CORE VALUES
            ================================================================ */}
        <section className="fdt-section fdt-who-section">
          <div className="fdt-container">
            {/* Core Values */}
            <div className="fdt-values-wrap">
              <h3 className="fdt-values-label">Our core values:</h3>
              <div className="fdt-values-grid">
                <div className="fdt-val-item">
                  <img src="https://fundit.com.ng/about/peopleFirst.svg" alt="People First" className="fdt-val-icon" />
                  <div className="fdt-val-text">
                    <h4>People First</h4>
                    <p>We prioritize the needs, goals, and trust of our customers in every decision we make.</p>
                  </div>
                </div>

                <div className="fdt-val-item">
                  <img src="https://fundit.com.ng/about/trust.svg" alt="Integrity" className="fdt-val-icon" />
                  <div className="fdt-val-text">
                    <h4>Integrity</h4>
                    <p>We operate with honesty and transparency &mdash; no hidden fees, no false promises.</p>
                  </div>
                </div>

                <div className="fdt-val-item">
                  <img src="https://fundit.com.ng/about/reputation.svg" alt="Excellence" className="fdt-val-icon" />
                  <div className="fdt-val-text">
                    <h4>Excellence</h4>
                    <p>We strive to exceed expectations with world-class service and performance.</p>
                  </div>
                </div>

                <div className="fdt-val-item">
                  <img src="https://fundit.com.ng/about/disruption.svg" alt="Innovation" className="fdt-val-icon" />
                  <div className="fdt-val-text">
                    <h4>Innovation</h4>
                    <p>We embrace technology and fresh thinking to deliver smarter financial solutions.</p>
                  </div>
                </div>

                <div className="fdt-val-item">
                  <img src="https://fundit.com.ng/about/target.svg" alt="Customer Centric" className="fdt-val-icon" />
                  <div className="fdt-val-text">
                    <h4>Customer Centric</h4>
                    <p>We design every service around your needs, goals, and experience.</p>
                  </div>
                </div>

                <div className="fdt-val-item">
                  <img src="https://fundit.com.ng/about/professional-success.svg" alt="Professionalism" className="fdt-val-icon" />
                  <div className="fdt-val-text">
                    <h4>Professionalism</h4>
                    <p>We deliver with quality, clarity, and consistent standards.</p>
                  </div>
                </div>
              </div>
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

            <div className="fdt-leaders-grid">
              {/* Leader 1 */}
              <div className="fdt-leader-card">
                <div className="fdt-leader-photo-box">
                  <img
                    src="https://fundit.com.ng/_next/image?url=%2Fleadership%2Fchairman.png&w=640&q=75"
                    alt="Olaleye Adebiyi"
                    className="fdt-leader-photo"
                  />
                </div>
                <div className="fdt-leader-meta">
                  <div>
                    <h3 className="fdt-leader-name">Olaleye Adebiyi</h3>
                    <p className="fdt-leader-role">Chairman</p>
                  </div>
                  <button type="button" className="fdt-leader-circle-btn" aria-label="View details for Olaleye Adebiyi">
                    <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Leader 2 */}
              <div className="fdt-leader-card">
                <div className="fdt-leader-photo-box">
                  <img
                    src="https://fundit.com.ng/_next/image?url=%2Fleadership%2Fmd.png&w=640&q=75"
                    alt="Wole Ajomale"
                    className="fdt-leader-photo"
                  />
                </div>
                <div className="fdt-leader-meta">
                  <div>
                    <h3 className="fdt-leader-name">Wole Ajomale</h3>
                    <p className="fdt-leader-role">Managing Director</p>
                  </div>
                  <button type="button" className="fdt-leader-circle-btn" aria-label="View details for Wole Ajomale">
                    <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Leader 3 */}
              <div className="fdt-leader-card">
                <div className="fdt-leader-photo-box">
                  <img
                    src="https://fundit.com.ng/_next/image?url=%2Fleadership%2Fed.png&w=640&q=75"
                    alt="Bolaji Shenjobi"
                    className="fdt-leader-photo"
                  />
                </div>
                <div className="fdt-leader-meta">
                  <div>
                    <h3 className="fdt-leader-name">Bolaji Shenjobi</h3>
                    <p className="fdt-leader-role">Executive Director</p>
                  </div>
                  <button type="button" className="fdt-leader-circle-btn" aria-label="View details for Bolaji Shenjobi">
                    <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Leader 4 */}
              <div className="fdt-leader-card">
                <div className="fdt-leader-photo-box">
                  <img
                    src="https://fundit.com.ng/_next/image?url=%2Fleadership%2Fumma.png&w=640&q=75"
                    alt="Umma Yusuf Aboki"
                    className="fdt-leader-photo"
                  />
                </div>
                <div className="fdt-leader-meta">
                  <div>
                    <h3 className="fdt-leader-name">Umma Yusuf Aboki</h3>
                    <p className="fdt-leader-role">Independent Non-Executive Director (INED)</p>
                  </div>
                  <button type="button" className="fdt-leader-circle-btn" aria-label="View details for Umma Yusuf Aboki">
                    <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
