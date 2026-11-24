import { pageMeta } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata = pageMeta({
  title: 'Cookie Policy: How Digiit Uses Cookies & Session Technologies',
  description:
    'Learn how Digiit by FundiT Finance Limited uses essential session cookies, security tokens, and analytics to deliver a secure and smooth workplace loan portal.',
  path: '/cookies',
  ogTitle: 'Cookie Policy | Digiit by FundiT',
  ogDescription:
    'Our cookie practices: essential authentication, zero invasive ad tracking, and complete user control.',
})

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main id="top" className="legal-page-main">
        {/* Header Banner */}
        <section className="legal-header">
          <div className="wrap">
            <div className="legal-header-inner">
              <h1 className="legal-title">Cookie Policy</h1>
              <p className="legal-lead">
                This Cookie Policy explains how Digiit by FundiT Finance Limited uses cookies and similar tracking
                technologies when you visit our website, client portals, and employee dashboard applications.
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="legal-body">
          <div className="wrap legal-layout">

            <article className="legal-content">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small data files placed on your computer, smartphone, or tablet when you visit a website.
                They are widely utilized across the internet to ensure websites function efficiently, remember your
                preferences, and provide secure, encrypted session authentication.
              </p>
              <p>
                Similar technologies include web beacons, local storage tokens (HTML5), and session identifiers. In this
                policy, we refer to all such technologies collectively as &ldquo;Cookies.&rdquo;
              </p>

              <div className="legal-callout">
                <div className="legal-callout-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  Zero Invasive Third-Party Advertising Trackers
                </div>
                <p>
                  Digiit is a financial service platform, not an advertising network. <strong>We do not use tracking cookies to sell behavioral ads, cross-site profiles, or build marketing dossiers about you.</strong> Our cookies exist primarily to secure your login session, prevent cross-site request forgery (CSRF), and keep your financial data safe.
                </p>
              </div>

              <h2>2. Categories of Cookies We Deploy</h2>
              <p>
                We classify the cookies utilized on our web properties into the following functional categories:
              </p>

              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie Type</th>
                      <th>Purpose &amp; Function</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Strictly Necessary Cookies</strong></td>
                      <td>Essential for account authentication, role-based access for HR managers, CSRF token security, and transaction verification. Without these, the loan portal cannot operate safely.</td>
                      <td>Session / Up to 30 days</td>
                    </tr>
                    <tr>
                      <td><strong>Security &amp; Anti-Fraud Cookies</strong></td>
                      <td>Detects suspicious repeated logins, brute-force attacks, and prevents unauthorized session hijacking of employee accounts.</td>
                      <td>Session / Up to 90 days</td>
                    </tr>
                    <tr>
                      <td><strong>Functionality Cookies</strong></td>
                      <td>Remembers user interface preferences (such as selected role views, device screen optimizations, and closed informational banners).</td>
                      <td>Persistent (Up to 1 year)</td>
                    </tr>
                    <tr>
                      <td><strong>Performance &amp; Diagnostics</strong></td>
                      <td>Collects aggregated, strictly anonymized operational metrics (e.g., page load speeds, error rates, server response times) to maintain 99.98% platform reliability.</td>
                      <td>Persistent (Up to 180 days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>3. First-Party vs. Third-Party Technologies</h2>
              <p>
                Cookies on Digiit are categorized as either first-party or third-party:
              </p>
              <ul>
                <li><strong>First-Party Cookies:</strong> Set directly by Digiit domain infrastructure (<code>digiit.com.ng</code>) to manage your active session and display your relevant loan dashboard.</li>
                <li><strong>Third-Party Infrastructure Partners:</strong> We utilize selected enterprise infrastructure partners strictly for security hosting, DNS routing, and payment gateway facilitation (e.g., licensed Nigerian payment switch APIs). These providers are contractually bound under strict confidentiality and NDPR processing agreements.</li>
              </ul>

              <h2>4. How to Control and Manage Cookies</h2>
              <p>
                You have the complete legal right to decide whether to accept or reject cookies. Most web browsers allow you to modify your cookie settings at any time:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies.</li>
                <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
                <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data.</li>
                <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and Site Permissions &gt; Manage and delete cookies.</li>
              </ul>
              <p>
                <em>Please note:</em> If you choose to block or disable <strong>Strictly Necessary Cookies</strong>, you will not be able to log in to your employee loan portal, submit a loan application, or authorize payroll deduction requests, as these actions require authenticated cryptographic tokens.
              </p>

              <h2>5. Updates to this Cookie Policy</h2>
              <p>
                We may update this policy periodically to reflect operational, legal, or regulatory enhancements. Any changes will be published directly on this page with an updated &ldquo;Effective Date.&rdquo; We encourage you to review this policy periodically.
              </p>

              <h2>6. Contact Us</h2>
              <p>
                If you have any questions or require assistance regarding our use of cookies, please reach our technical compliance desk:
              </p>
              <div className="legal-callout">
                <p>
                  <strong>FundiT Finance Limited, Digiit Platform</strong><br />
                  6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos, Nigeria.<br />
                  <strong>Email:</strong> <a href="mailto:support@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>support@digiit.ng</a> &amp; <a href="mailto:dpo@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>dpo@digiit.ng</a><br />
                  <strong>Phone:</strong> 07086429380
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
