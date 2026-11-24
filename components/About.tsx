export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-text-col">
          <span className="label">About Digiit</span>
          <h2>Built to empower Nigeria&apos;s workforce with dignified financial access.</h2>
          <p className="sub">
            Digiit by FundiT Finance Limited connects forward-thinking employers and licensed financial partners to provide instant, confidential, salary-backed loans, eliminating predatory interest rates, employer liability, and workplace embarrassment.
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="/about" className="btn btn-primary">
              Read our full story
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/about#team" className="btn btn-ghost">
              Meet our team
            </a>
          </div>
        </div>
        <div className="about-box">
          <div>
            <strong>₦2.5B+</strong>
            <span>Responsible salary loans disbursed across Nigerian organizations</span>
          </div>
          <div>
            <strong>40+</strong>
            <span>Partner organizations actively trusting Digiit for their employees</span>
          </div>
          <div>
            <strong>0%</strong>
            <span>Balance sheet impact, credit risk, or administrative fees for employers</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>NDPR compliant with funds disbursed exclusively through licensed partners</span>
          </div>
        </div>
      </div>
    </section>
  )
}

