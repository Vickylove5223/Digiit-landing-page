import { pageMeta } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata = pageMeta({
  title: 'Complaints Policy: Consumer Protection & Dispute Resolution',
  description:
    'Read the Digiit Complaints Handling and Dispute Resolution Policy. Learn our transparent 3-stage process for resolving employee and employer inquiries fairly and rapidly.',
  path: '/complaints',
  ogTitle: 'Complaints Policy | Digiit by FundiT',
  ogDescription:
    'Our dispute resolution framework: 24-hour response pledge, fair hearings, and transparent escalation tiers.',
})

export default function ComplaintsPolicyPage() {
  return (
    <>
      <Header />
      <main id="top" className="legal-page-main">
        {/* Header Banner */}
        <section className="legal-header">
          <div className="wrap">
            <div className="legal-header-inner">
              <h1 className="legal-title">Complaints Handling Policy</h1>
              <p className="legal-lead">
                We are committed to delivering dignified, error-free financial services. When things do not go as planned,
                our structured dispute resolution process ensures your concerns are resolved promptly, fairly, and transparently.
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="legal-body">
          <div className="wrap legal-layout">

            <article className="legal-content">
              <h2>1. Purpose &amp; Consumer Protection Pledge</h2>
              <p>
                <strong>FundiT Finance Limited</strong> (&ldquo;Digiit&rdquo;) operates in accordance with the <strong>Central Bank of Nigeria (CBN) Consumer Protection Framework</strong> and the guidelines of the <strong>Federal Competition and Consumer Protection Commission (FCCPC)</strong>.
              </p>
              <p>
                We believe that every employee and corporate partner deserves a clear, accessible, and responsive avenue to voice dissatisfaction, report discrepancies, and receive equitable resolution without penalty or delay.
              </p>

              <div className="legal-callout">
                <div className="legal-callout-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Our 24-Hour Acknowledgment Guarantee
                </div>
                <p>
                  Every formal complaint received through our dedicated channels is assigned a unique tracking ticket and acknowledged in writing within <strong>24 business hours</strong>. You will always know who is handling your case and the expected timeline for resolution.
                </p>
              </div>

              <h2>2. What Constitutes a Complaint?</h2>
              <p>
                A complaint is any expression of dissatisfaction by an employee, HR administrator, or partner organization concerning:
              </p>
              <ul>
                <li>Discrepancies in loan disbursement amounts, interest calculations, or repayment schedules.</li>
                <li>Payroll deduction timing, over-deductions, or delayed clearance notices.</li>
                <li>Customer service delays, technical application bugs, or portal downtime.</li>
                <li>Data protection, privacy inquiries, or unauthorized communication concerns.</li>
              </ul>

              <h2>3. How to Submit a Formal Complaint</h2>
              <p>
                You may lodge a complaint through any of the following official channels:
              </p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Channel</th>
                      <th>Contact Details</th>
                      <th>Operating Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Dedicated Complaints Email</strong></td>
                      <td><a href="mailto:complaints@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>complaints@digiit.ng</a></td>
                      <td>Monitored 24/7 (24h response SLA)</td>
                    </tr>
                    <tr>
                      <td><strong>Direct Telephone &amp; WhatsApp</strong></td>
                      <td>
                        <a href="tel:07086429380" style={{ color: 'var(--indigo)', fontWeight: 600 }}>07086429380</a>
                        {' · '}
                        <a
                          href="https://wa.me/2347086429380?text=Hello%20Digiit%2C%20I%20would%20like%20support%20assistance."
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#128C7E', fontWeight: 600 }}
                        >
                          Chat WhatsApp
                        </a>
                      </td>
                      <td>Mon &ndash; Fri: 8:00 AM &ndash; 5:00 PM WAT</td>
                    </tr>
                    <tr>
                      <td><strong>Physical / Written Letter</strong></td>
                      <td>
                        <strong>Dispute Resolution Unit</strong><br />
                        FundiT Finance Limited<br />
                        6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos.
                      </td>
                      <td>Mon &ndash; Fri: 8:00 AM &ndash; 5:00 PM WAT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <em>Helpful Tip:</em> To expedite resolution, please include your full name, registered mobile phone number, employer name, loan reference identifier (if applicable), and a concise description of the issue along with supporting screenshots or payment receipts.
              </p>

              <h2>4. Our 3-Stage Escalation &amp; Resolution Process</h2>

              <h3>Stage 1: Frontline Resolution (Target: 24 &ndash; 48 Hours)</h3>
              <p>
                Upon receipt, your complaint is routed to our Customer Operations Desk in Victoria Island. The assigned officer investigates the transaction log, liaises with technical or credit teams, and provides a formal response or resolution within <strong>48 hours</strong>.
              </p>

              <h3>Stage 2: Senior Management Review (Target: 3 &ndash; 5 Business Days)</h3>
              <p>
                If the matter is complex or you are unsatisfied with the Stage 1 outcome, your ticket is escalated to the <strong>Head of Customer Operations and Head of Credit Risk</strong>. They conduct an independent review of all records, verify banking logs, and deliver an escalated finding within <strong>five (5) business days</strong>.
              </p>

              <h3>Stage 3: Executive Directorate &amp; Legal Review (Target: 7 &ndash; 10 Business Days)</h3>
              <p>
                Matters remaining unresolved after Stage 2 are escalated directly to the <strong>Managing Director (Wole Ajomale)</strong> and the Legal Directorate. The executive team will issue a comprehensive written final determination within <strong>ten (10) business days</strong>.
              </p>

              <h2>5. Fast-Track Protocol for Payroll Deduction Discrepancies</h2>
              <p>
                We recognize that employee salaries are critical to personal livelihood. In cases where an incorrect deduction occurs due to employer payroll cutoff timing or banking transmission error:
              </p>
              <ul>
                <li>Our reconciliation team verifies the discrepancy with the employer&apos;s payroll department within <strong>12 business hours</strong>.</li>
                <li>Any verified excess deduction is refunded directly to the employee&apos;s designated bank account within <strong>24 to 48 business hours</strong> with zero deduction fees.</li>
              </ul>

              <h2>6. External Escalation Rights</h2>
              <p>
                If, after exhausting our internal three-stage dispute resolution process, you remain dissatisfied with our final response, you retain the statutory right to escalate your dispute to relevant Nigerian regulatory bodies:
              </p>
              <ul>
                <li>
                  <strong>Central Bank of Nigeria (CBN), Consumer Protection Department:</strong><br />
                  Central Business District, Garki, Abuja, Nigeria.<br />
                  Email: <code>cpd@cbn.gov.ng</code>
                </li>
                <li>
                  <strong>Federal Competition and Consumer Protection Commission (FCCPC):</strong><br />
                  Plot 1965, C.O. Mojekwu Street, Mabushi, Abuja.<br />
                  Email: <code>contact@fccpc.gov.ng</code> | Website: <code>www.fccpc.gov.ng</code>
                </li>
                <li>
                  <strong>Nigeria Data Protection Commission (NDPC)</strong> (for data-specific grievances):<br />
                  Email: <code>info@ndpc.gov.ng</code>
                </li>
              </ul>

              <h2>7. Continuous Improvement &amp; Audit</h2>
              <p>
                Every complaint received is logged anonymously in our quarterly Service Quality Review. Our executive management analyzes dispute root causes to continually refine our software, enhance employee loan calculators, and eliminate administrative friction.
              </p>

              <div className="legal-callout">
                <p>
                  <strong>Need immediate assistance with an existing ticket?</strong><br />
                  Contact our dedicated escalation officer directly at <a href="mailto:complaints@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>complaints@digiit.ng</a> or call <strong>07086429380</strong> during Lagos business hours.
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
