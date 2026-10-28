const IconDoc = () => (
  <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 6h14l12 12v28a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    <path d="M28 6v12h12" />
    <path d="M20 29c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.5-2 4-4 5v2" />
    <circle cx="26" cy="43" r="1.6" fill="currentColor" stroke="none" />
  </svg>
)

const IconClock = () => (
  <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="26" cy="26" r="18" />
    <path d="M26 14v12l7 5" />
    <path d="M8 8l6 6M44 8l-6 6" />
  </svg>
)

const IconSheet = () => (
  <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="8" y="8" width="36" height="36" rx="3" />
    <path d="M8 20h36M8 32h36M22 8v36" />
    <path d="M28 24h8M28 28h6M28 32h8" />
  </svg>
)

export default function Messy() {
  return (
    <section className="messy">
      <div className="wrap">
        <h2 className="messy-h">
          Managing staff loans<br />is a mess.
        </h2>

        <div className="why-list">
          <div>
            <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="26" cy="26" r="18" />
              <path d="M26 16v4M26 32v4M18 26h4M30 26h4" />
              <path d="M20 20l2.8 2.8M29.2 29.2L32 32M20 32l2.8-2.8M29.2 22.8L32 20" />
            </svg>
            <h3>Zero Cost &amp; Zero Risk</h3>
            <p>No fees, no balance sheet impact, no liability. We fund 100% of loans via licensed partners.</p>
          </div>
          <div>
            <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="10" y="10" width="32" height="32" rx="3" />
              <path d="M10 20h32" />
              <path d="M20 20v22" />
              <path d="M25 28h10M25 34h7" />
            </svg>
            <h3>Zero Admin Burden</h3>
            <p>48-hour onboarding. Self-serve dashboard. Automated deductions. HR never touches cash.</p>
          </div>
          <div>
            <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 38l10-12 8 8 10-14 8 6" />
              <circle cx="26" cy="14" r="6" />
              <path d="M20 44h12" />
            </svg>
            <h3>Boost Retention &amp; Productivity</h3>
            <p>Financial wellness is #1 requested benefit in Nigeria. Reduce attrition by up to 23%.</p>
          </div>
          <div>
            <svg className="messy-icon" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M26 6l16 6v12c0 10-7 18-16 22C17 42 10 34 10 24V12Z" />
              <path d="M19 26l5 5 9-10" />
            </svg>
            <h3>Secure &amp; Compliant</h3>
            <p>NDPR compliant, bank-grade encryption, CBN-licensed lenders. Staff data never leaves our vault.</p>
          </div>
        </div>
</div>
    </section>
  )
}
