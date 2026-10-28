import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
export const metadata: Metadata = {
  title: 'Data Protection Policy — NDPA & NDPR Security Standards | Digiit',
  description:
    'Discover how Digiit by FundiT Finance Limited safeguards employee and corporate data under the Nigeria Data Protection Act 2023, utilizing bank-grade encryption and airtight confidentiality.',
  openGraph: {
    title: 'Data Protection Policy | Digiit by FundiT',
    description: 'Our technical safeguards, NDPR compliance, and workplace privacy architecture.',
  },
}

export default function DataProtectionPage() {
  return (
    <>
      <Header />
      <main id="top" className="legal-page-main">
        {/* Header Banner */}
        <section className="legal-header">
          <div className="wrap">
            <div className="legal-header-inner">
              <h1 className="legal-title">Data Protection Policy</h1>
              <p className="legal-lead">
                Digiit is engineered on a foundation of bank-grade security and total respect for personal privacy.
                This document sets out the comprehensive technical, organizational, and legal safeguards implemented by FundiT Finance Limited.
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="legal-body">
          <div className="wrap legal-layout">

            <article className="legal-content">
              <h2>1. Commitment &amp; Regulatory Framework</h2>
              <p>
                <strong>FundiT Finance Limited</strong> (&ldquo;FundiT&rdquo;, operating the Digiit platform) recognizes that personal data &mdash; especially financial and employment details &mdash; is highly sensitive. We are fully committed to upholding the highest standards of data governance codified under the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the <strong>Nigeria Data Protection Regulation (NDPR)</strong>.
              </p>
              <p>
                Our data protection ethos guarantees that every Nigerian worker accessing salary-backed credit can do so with absolute peace of mind, knowing their sensitive details will never be exposed, shared without legal authority, or utilized for predatory debt collection.
              </p>

              <div className="legal-callout">
                <div className="legal-callout-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  The Digiit Workplace Confidentiality Guarantee
                </div>
                <p>
                  <strong>Your manager, colleagues, and HR team cannot see your loan balances or reasons for borrowing.</strong> When you take a salary loan through Digiit, your employer receives only aggregated monthly deduction schedules required for payroll accounting. We strictly decouple your personal financial reasons from your professional workplace standing.
                </p>
              </div>

              <h2>2. Core Principles of Data Protection</h2>
              <p>
                Every algorithm, database schema, and operational workflow on Digiit adheres to the seven foundational data protection principles:
              </p>
              <ul>
                <li><strong>Lawfulness, Fairness &amp; Transparency:</strong> Data is collected only with clear statutory or contractual justification and processed openly without deception.</li>
                <li><strong>Purpose Limitation:</strong> Collected solely to verify eligibility, disburse funds, and reconcile payroll repayments. Never reused for unrelated secondary objectives.</li>
                <li><strong>Data Minimization:</strong> We collect only what is strictly required to underwrite and disburse the loan. We do not demand invasive phone permissions or personal contact access.</li>
                <li><strong>Accuracy:</strong> Reasonable steps are taken to ensure employee records and repayment balances are accurate and kept up to date in real time.</li>
                <li><strong>Storage Limitation:</strong> Information is preserved only for the duration necessary to satisfy the loan contract and statutory Nigerian anti-money laundering requirements.</li>
                <li><strong>Integrity &amp; Confidentiality:</strong> Data is safeguarded with robust cryptography, access tiers, and perimeter defenses.</li>
                <li><strong>Accountability:</strong> FundiT maintains verifiable audit trails and undergoes annual compliance verification overseen by licensed Data Protection Compliance Organizations (DPCOs).</li>
              </ul>

              <h2>3. Technical &amp; Operational Security Architecture</h2>
              <p>
                Our infrastructure employs enterprise defense-in-depth principles:
              </p>

              <h3>A. Cryptographic Safeguards</h3>
              <ul>
                <li><strong>Encryption at Rest:</strong> All database volumes, backups, and user record vaults are encrypted using <strong>AES-256</strong> (Advanced Encryption Standard).</li>
                <li><strong>Encryption in Transit:</strong> All web traffic, API calls, and administrative sessions are enforced via <strong>TLS 1.3 / HTTPS</strong> with HSTS (HTTP Strict Transport Security) enabled.</li>
                <li><strong>BVN &amp; Tokenization:</strong> Sensitive identifiers such as Bank Verification Numbers (BVN) are cryptographically hashed and tokenized immediately upon verification. Raw BVNs are never stored in plaintext.</li>
              </ul>

              <h3>B. Access Control &amp; Network Defense</h3>
              <ul>
                <li><strong>Role-Based Access Control (RBAC):</strong> Support staff have segmented, least-privilege permissions. No single employee can view unmasked financial records without authorization.</li>
                <li><strong>Multi-Factor Authentication (MFA):</strong> Mandatory for all engineering, risk, and administrative access to internal systems.</li>
                <li><strong>Continuous Audit Logging:</strong> Immutable system logs capture every data query, modification, and administrative action with precise timestamps and operator signatures.</li>
              </ul>

              <h2>4. Employer Data Processing Agreement (DPA)</h2>
              <p>
                When a corporate partner integrates with Digiit, we execute a legally binding Data Processing Agreement establishing:
              </p>
              <ol>
                <li>FundiT acts as a responsible processor/co-controller under NDPA guidelines for employee loan operations.</li>
                <li>The employer provides only verified roster data necessary to validate active employment and salary brackets.</li>
                <li>Digiit will never contact an employee&apos;s personal social circles or disclose their borrowing status outside the payroll reconciliation mandate.</li>
                <li>Both parties maintain strict confidentiality regarding corporate salary schedules and employee personal information.</li>
              </ol>

              <h2>5. Data Breach &amp; Incident Management Protocol</h2>
              <p>
                While our systems are engineered to prevent intrusion, we maintain an active, tested incident response protocol:
              </p>
              <ul>
                <li><strong>Immediate Containment:</strong> Rapid automated network isolation and forensics protocol initiated upon any anomalous telemetry.</li>
                <li><strong>Regulatory Notification:</strong> In compliance with the NDPA, the <strong>Nigeria Data Protection Commission (NDPC)</strong> will be formally notified within <strong>72 hours</strong> of confirmation of any breach likely to result in risk to data subjects.</li>
                <li><strong>User Notification:</strong> Impacted data subjects and partner organizations will be alerted without undue delay, accompanied by actionable recommendations and mitigation support.</li>
              </ul>

              <h2>6. Data Subject Rights &amp; Access Requests (DSAR)</h2>
              <p>
                You hold the legal right to access, rectify, or request deletion of your personal records. To submit a formal Data Subject Access Request:
              </p>
              <div className="legal-callout">
                <p>
                  <strong>Email your formal request to:</strong> <a href="mailto:dpo@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>dpo@digiit.ng</a><br />
                  <strong>Required details:</strong> Full Name, Employer Name, Official Email, and specific nature of your request (Access, Rectification, or Erasure).<br />
                  <strong>Statutory Response Window:</strong> We respond to all verified DSAR submissions within <strong>30 calendar days</strong> at zero cost to the data subject.
                </p>
              </div>

              <h2>7. Regulatory Oversight &amp; Compliance Inquiries</h2>
              <p>
                For further information on our data protection compliance or to review our compliance certification status, contact our legal counsel:
              </p>
              <p>
                <strong>Legal &amp; Compliance Directorate</strong><br />
                FundiT Finance Limited<br />
                6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos, Nigeria.<br />
                <strong>Email:</strong> <a href="mailto:compliance@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>compliance@digiit.ng</a><br />
                <strong>Phone:</strong> 07086429380
              </p>
            </article>
          </div>
        </section>
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
