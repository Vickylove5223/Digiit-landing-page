import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Partner with Digiit or Get Support',
  description:
    'Get in touch with Digiit by FundiT Finance Limited. Speak to our corporate partnerships team, book a 15-minute live demo, or get employee support in Victoria Island, Lagos.',
  openGraph: {
    title: 'Contact Us | Digiit by FundiT',
    description:
      'We are here to help your team thrive. Reach out to our Victoria Island, Lagos office.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="top" className="contact-harmony-page">
        {/* ================================================================
            1. HERO BANNER (Centered, Soft Sky Tinted)
            ================================================================ */}
        <section className="contact-harmony-hero">
          <div className="wrap">
            <h1 className="contact-harmony-title">
              Contact Us
            </h1>
            <p className="contact-harmony-sub">
              Our team is available Monday through Friday to answer your questions.
            </p>
          </div>
        </section>

        {/* ================================================================
            2. 2-COLUMN MAIN CONTENT (Left: Info, Right: Message Form)
            ================================================================ */}
        <section className="contact-harmony-body" style={{ backgroundColor: '#ffffff' }}>
          <div className="wrap">
            <div className="contact-harmony-grid">
              {/* Left Column: Stacked Contact Details */}
              <div className="contact-harmony-info-col">
                {/* 1. Our Location */}
                <div className="contact-info-block">
                  <div className="contact-info-icon contact-icon-location">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Our Location</h3>
                    <p>
                      6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                {/* 2. Phone Number */}
                <div className="contact-info-block">
                  <div className="contact-info-icon contact-icon-phone">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Phone Number</h3>
                    <p>
                      <a href="tel:07086429380">07086429380</a>
                    </p>
                  </div>
                </div>

                {/* 3. Email Address */}
                <div className="contact-info-block">
                  <div className="contact-info-icon contact-icon-email">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Email Address</h3>
                    <p>
                      <a href="mailto:support@digiit.ng">support@digiit.ng</a>
                    </p>
                  </div>
                </div>

                {/* 4. Office Hours */}
                <div className="contact-info-block">
                  <div className="contact-info-icon contact-icon-hours">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Office Hours</h3>
                    <p>
                      Mon &ndash; Fri: 08:00 AM &ndash; 05:00 PM<br />
                      Sat &ndash; Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: "Send Us a Message" Card Form */}
              <div className="contact-harmony-form-col">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            3. MAP SECTION (Centered Title & Embedded Interactive Map)
            ================================================================ */}
        <section className="contact-harmony-map-section" style={{ backgroundColor: '#ffffff' }}>
          <div className="wrap">
            <div className="contact-map-header">
              <h2>Find Us in Victoria Island, Lagos</h2>
              <p>Serving employers and employees across Lagos, Abuja, Port Harcourt, and nationwide.</p>
            </div>

            <div className="contact-map-card">
              <iframe
                title="Digiit Victoria Island Lagos Office Map"
                src="https://maps.google.com/maps?q=6+Babatunde+Jose+Street,+Victoria+Island,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-map-iframe"
              />
            </div>
          </div>
        </section>

        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
