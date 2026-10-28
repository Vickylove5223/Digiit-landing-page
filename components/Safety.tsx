export default function Safety() {
  return (
    <section className="safe">
      <div className="wrap">
        <span className="label">Trust &amp; security</span>
        <h2>How we keep your people&apos;s data and money safe.</h2>
        <div className="safe-grid">
          <div className="safe-card">
            <div className="ico">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3l10 4v7c0 6.5-4.2 11-10 13C9.2 25 5 20.5 5 14V7l10-4z" />
                <path d="M10.5 14.5l3 3 6-6.5" />
              </svg>
            </div>
            <h3>Regulated and licensed</h3>
            <p>A CBN-partnered portal. We fund 100% of loans via licensed partners and CBN-licensed lenders.</p>
          </div>
          <div className="safe-card">
            <div className="ico">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="13" width="20" height="14" rx="3" />
                <path d="M10 13V9a5 5 0 0110 0v4" />
                <circle cx="15" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3>Your data stays private</h3>
            <p>NDPR compliant with bank-grade encryption. Staff data never leaves our vault.</p>
          </div>
          <div className="safe-card">
            <div className="ico">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="15" cy="15" r="11" />
                <path d="M15 9v6l4 2.5" />
              </svg>
            </div>
            <h3>No hidden fees. No surprises.</h3>
            <p>Clear, honest rates and a fully transparent loan process, from the first request to the last deduction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
