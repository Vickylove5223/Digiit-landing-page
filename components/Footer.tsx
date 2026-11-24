import { withBase } from '@/lib/paths'
import { LOGO_SRC } from '@/lib/logo'
import PromoBanner from '@/components/PromoBanner'

export default function Footer() {
  return (
    <footer className="footer-harmony">
      {/* CTA banner is part of the footer so every page gets the same block */}
      <PromoBanner />
      <div className="wrap foot-wrap">
        <div className="foot-grid">
          {/* Column 1: Headline, Logo, Socials */}
          <div className="foot-brand">
            <h2 className="foot-headline">
              Loans That Work As Hard As Employees Do.
            </h2>
            <a className="foot-logo" href={withBase('/')} aria-label="Digiit by FundiT, back to home">
              <img src={withBase(LOGO_SRC)} alt="Digiit by FundiT" width={115} height={50} style={{ objectFit: 'contain' }} />
            </a>
            <div className="foot-socials">
              <a href="https://instagram.com/digiitng" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://x.com/digiitng" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                </svg>
              </a>
              <a href="https://facebook.com/digiitng" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/digiitng" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="foot-col">
            <h3 className="foot-title">Company</h3>
            <ul className="foot-links">
              <li><a href={withBase('/about')}>About Us</a></li>
              <li><a href={withBase('/blog')}>Our Blog</a></li>
              <li><a href={withBase('/apply')}>Apply Now</a></li>
              <li><a href={withBase('/contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory */}
          <div className="foot-col">
            <h3 className="foot-title">Legal</h3>
            <ul className="foot-links">
              <li><a href={withBase('/privacy')}>Privacy Policy</a></li>
              <li><a href={withBase('/cookies')}>Cookie Policy</a></li>
              <li><a href={withBase('/data-protection')}>Data Protection</a></li>
              <li><a href={withBase('/complaints')}>Complaints Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div className="foot-col">
            <h3 className="foot-title">Address</h3>
            <div className="foot-addr-block">
              <p className="foot-addr-text">
                6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos, Nigeria
              </p>
              <div className="foot-schedule">
                <p>We open Mon–Fri: 08:00 am – 05:00 pm</p>
                <p>Sat–Sun: Closed</p>
              </div>
              <div className="foot-reach">
                <p>
                  <a href="tel:07086429380">07086429380</a>
                  {' · '}
                  <a
                    href="https://wa.me/2347086429380?text=Hello%20Digiit%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25D366', fontWeight: 600 }}
                  >
                    WhatsApp
                  </a>
                </p>
                <p><a href="mailto:support@digiit.ng">support@digiit.ng</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Centered Copyright & Regulatory Info */}
        <div className="foot-bottom">
          <p className="foot-copy">
            Copyright © 2026 Digiit by FundiT Finance Limited. All rights reserved.
          </p>
          <p className="foot-disclaimer">
            FundiT is a financial solutions provider located at 6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos. FundiT partners with licensed financial institutions to offer responsible salary-backed loan products to employees across Nigeria. For certain loan products, FundiT may act either as a direct lender or as a facilitator on behalf of its financial partners. The &quot;Advance&quot; product offered by FundiT is not a regulated lending product. All services provided by FundiT comply with applicable financial regulations, and all payment and data processes adhere strictly to the Nigeria Data Protection Regulation (NDPR).
          </p>
        </div>
      </div>
    </footer>
  )
}
