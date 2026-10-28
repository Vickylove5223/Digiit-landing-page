import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
export const metadata: Metadata = {
  title: 'Privacy Policy — How Digiit Protects Your Personal & Financial Data',
  description:
    'Read the Digiit Privacy Policy. Learn how FundiT Finance Limited collects, uses, and safeguards employee and corporate data under the Nigeria Data Protection Act (NDPA) and NDPR.',
  openGraph: {
    title: 'Privacy Policy | Digiit by FundiT',
    description: 'Our commitment to employee privacy, zero contact-scraping, and strict NDPR data compliance.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="top" className="legal-page-main">
        {/* Header Banner */}
        <section className="legal-header">
          <div className="wrap">
            <div className="legal-header-inner">
              <h1 className="legal-title">Privacy Policy</h1>
              <p className="legal-lead">
                At Digiit, safeguarding your personal dignity and financial confidentiality is the cornerstone of our service.
                This Privacy Policy explains how FundiT Finance Limited processes and protects your data.
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="legal-body">
          <div className="wrap legal-layout">

            <article className="legal-content">
              <h2>1. Introduction &amp; Corporate Identity</h2>
              <p>
                Digiit is a proprietary technology and financial wellness platform operated by <strong>FundiT Finance Limited</strong> (&ldquo;FundiT&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a private limited liability company incorporated under the laws of the Federal Republic of Nigeria, having its principal operational headquarters at <strong>6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos, Nigeria</strong>.
              </p>
              <p>
                FundiT acts as a financial solutions facilitator partnering with licensed financial institutions, microfinance banks, and Central Bank of Nigeria (CBN)-licensed lenders to deliver ethical, salary-backed loans and employee credit solutions across Nigeria.
              </p>
              <p>
                This Privacy Policy applies to all users of our digital platforms, including corporate HR administrators, employees who apply for or access salary advances, visitors to our websites (including <code>digiit.com.ng</code> and <code>digiit.ng</code>), and users of our mobile-responsive portals.
              </p>

              <div className="legal-callout red">
                <div className="legal-callout-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef3932" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Our Unconditional Anti-Harassment &amp; Anti-Shaming Pledge
                </div>
                <p>
                  <strong>Digiit will NEVER harvest your smartphone contacts, access your private photo gallery, contact your relatives, or broadcast your loan status to anyone.</strong> We despise predatory lending practices. Your loan with Digiit is strictly confidential between you, your verified payroll department, and our regulated lending partners.
                </p>
              </div>

              <h2>2. Categories of Information We Collect</h2>
              <p>
                To provide responsible, credit-worthy salary-backed loans, we collect only data that is strictly necessary for legal compliance, identity verification, fraud prevention, and credit underwriting:
              </p>

              <h3>A. Employee / Borrower Information</h3>
              <ul>
                <li><strong>Identity Data:</strong> Full legal name, date of birth, gender, government-issued identification number (NIN, Driver&apos;s License, or International Passport), and Bank Verification Number (BVN) strictly used for identity tokenization and fraud mitigation.</li>
                <li><strong>Contact Information:</strong> Official work email address, personal email address, registered mobile phone number, and residential address.</li>
                <li><strong>Employment &amp; Payroll Data:</strong> Employer name, employee identification number, job title, department, date of hire, net monthly salary, bank account details for loan disbursement, and monthly payroll deduction records.</li>
                <li><strong>Loan &amp; Transaction History:</strong> Loan amount requested, approved credit limit, repayment schedules, outstanding balance, and transaction timestamps.</li>
              </ul>

              <h3>B. Corporate Employer &amp; HR Administrator Information</h3>
              <ul>
                <li>Corporate registration documents (CAC status, Certificate of Incorporation).</li>
                <li>Authorized signatory credentials, HR manager contact name, official email, and corporate phone numbers.</li>
                <li>Verified employee roster files containing active employment status for salary-deduction matching.</li>
              </ul>

              <h3>C. Technical &amp; Device Data</h3>
              <ul>
                <li>Internet Protocol (IP) address, browser type and version, operating system, and session security cookies used solely to secure active account logins.</li>
              </ul>

              <h2>3. Legal Bases for Data Processing</h2>
              <p>
                Under the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the <strong>Nigeria Data Protection Regulation (NDPR)</strong>, we process your personal data under the following recognized legal grounds:
              </p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Processing Purpose</th>
                      <th>Legal Basis (NDPA / NDPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Verifying identity, creditworthiness, and disbursing salary loans</td>
                      <td><strong>Performance of Contract</strong> (Loan Agreement)</td>
                    </tr>
                    <tr>
                      <td>Anti-Money Laundering (AML/CFT) checks &amp; BVN verification</td>
                      <td><strong>Compliance with Legal Obligation</strong> (CBN &amp; NFIU Regulations)</td>
                    </tr>
                    <tr>
                      <td>Automating monthly salary repayments with employer payroll</td>
                      <td><strong>Contractual Agreement</strong> with Partner Organization</td>
                    </tr>
                    <tr>
                      <td>Platform fraud monitoring, system uptime, and cybersecurity</td>
                      <td><strong>Legitimate Interest</strong> in securing financial infrastructure</td>
                    </tr>
                    <tr>
                      <td>Sending educational financial wellness newsletters or optional updates</td>
                      <td><strong>Explicit Consent</strong> (which you may withdraw at any time)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>4. How We Use and Disclose Information</h2>
              <p>
                We do not sell, rent, or trade your personal data to third-party advertisers or data brokers under any circumstances. We only share information with authorized parties on a strict need-to-know basis:
              </p>
              <ol>
                <li><strong>Licensed Lending Partners:</strong> We share necessary credit and disbursement information with CBN-regulated financial institutions who underwrite and supply the loan capital.</li>
                <li><strong>Your Employer&apos;s Payroll Department:</strong> We communicate monthly consolidated deduction schedules so your employer can deduct the agreed repayment from your salary. <em>Your employer is never given details regarding what you spent your loan on.</em></li>
                <li><strong>Credit Reference Bureaus:</strong> As mandated by Central Bank of Nigeria regulations, timely repayments and delinquent defaults may be reported to licensed Nigerian Credit Bureaus (e.g., CRC Credit Bureau, FirstCentral).</li>
                <li><strong>Statutory Regulators &amp; Law Enforcement:</strong> We may disclose information if formally compelled by a valid court order or statutory demand from the Central Bank of Nigeria, the EFCC, or the Nigeria Data Protection Commission (NDPC).</li>
              </ol>

              <h2>5. Data Security &amp; Encryption Standards</h2>
              <p>
                FundiT implements comprehensive technical, organizational, and physical security measures designed to shield your personal data from unauthorized access, alteration, loss, or disclosure:
              </p>
              <ul>
                <li><strong>256-bit AES Encryption:</strong> All sensitive databases, personal identifiers, and BVN records are stored encrypted at rest.</li>
                <li><strong>Transport Layer Security (TLS 1.3):</strong> All transmissions between your browser and our servers are encrypted using high-grade SSL certificates.</li>
                <li><strong>Strict Access Controls:</strong> Access to customer records is restricted to authenticated support and risk personnel using multi-factor authentication (MFA) and immutable audit logs.</li>
                <li><strong>Continuous Vulnerability Scanning:</strong> Our systems undergo periodic penetration testing by certified third-party cybersecurity evaluators.</li>
              </ul>

              <h2>6. Data Retention Policy</h2>
              <p>
                We retain your personal and transaction data for as long as your account remains active or as required to administer your ongoing loan agreement. Following complete loan settlement and termination of your profile, we maintain financial and audit records for a mandatory statutory period of <strong>five (5) to seven (7) years</strong> to comply with Nigerian anti-money laundering and tax documentation laws, after which data is safely purged or irreversibly anonymized.
              </p>

              <h2>7. Your Data Subject Rights</h2>
              <p>
                Subject to applicable statutory exceptions under Nigerian data protection laws, you possess the following rights regarding your personal information:
              </p>
              <ul>
                <li><strong>Right of Access:</strong> Request a comprehensive copy of the personal information we hold concerning you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate, outdated, or incomplete records.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data when it is no longer legally necessary for us to retain it.</li>
                <li><strong>Right to Restrict or Object to Processing:</strong> Object to specific processing activities, such as direct marketing notifications.</li>
                <li><strong>Right to Data Portability:</strong> Obtain your digital profile data in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Right to Lodge a Complaint:</strong> File a regulatory grievance with the <strong>Nigeria Data Protection Commission (NDPC)</strong> if you believe your rights have been violated.</li>
              </ul>

              <h2>8. Contact Our Data Protection Officer (DPO)</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or wish to exercise any of your statutory rights, please contact our designated compliance unit:
              </p>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Office of the Data Protection Officer &mdash; FundiT Finance Limited
                </div>
                <p>
                  <strong>Address:</strong> 6, Babatunde Jose Street, Off Ademola Adetokunbo, Victoria Island, Lagos, Nigeria.<br />
                  <strong>DPO Direct Email:</strong> <a href="mailto:dpo@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>dpo@digiit.ng</a><br />
                  <strong>Compliance Desk:</strong> <a href="mailto:compliance@digiit.ng" style={{ color: 'var(--indigo)', fontWeight: 600 }}>compliance@digiit.ng</a><br />
                  <strong>Telephone:</strong> 07086429380
                </p>
              </div>
            </article>
          </div>
        </section>
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
