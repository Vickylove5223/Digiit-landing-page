const Tick = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="10" fill="#EF3932" />
    <path d="M6.5 11.3l3 3 6-6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function LoanRequestPhone() {
  return (
    <div className="lr-phone" aria-hidden="true">
      <div className="lr-screen">
        <div className="lr-bar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          <span>Get a Loan</span>
          <i />
        </div>

        <div className="lr-eligible">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
          You can borrow up to <b>₦10,000,000</b>
        </div>

        <p className="lr-label">How much do you need?</p>
        <p className="lr-amount"><small>₦</small>8,150,000</p>
        <div className="lr-slider"><i /><b /></div>
        <div className="lr-range"><span>₦10,000</span><span>₦10,000,000</span></div>

        <p className="lr-label">Repay over</p>
        <div className="lr-chips">
          <span>3 months</span>
          <span className="on">6 months</span>
          <span>12 months</span>
        </div>

        <div className="lr-summary">
          <div><span>Monthly salary deduction</span><b>₦1,684,333</b></div>
          <div><span>Interest</span><b>4% per month</b></div>
          <div><span>Collateral</span><b className="ok">None</b></div>
        </div>

        <span className="lr-cta">Get ₦8,150,000 now</span>
        <p className="lr-foot">Deducted automatically on payday</p>
      </div>
    </div>
  )
}

export default function StaffLoanApp() {
  return (
    <section className="staff-loan">
      <div className="wrap staff-loan-grid">
        <div className="staff-loan-text">
          <h2>Your staff Borrow in minutes,<br />and Repay from salary.</h2>
          <p className="sub">
            With Digiit, your staff can easily take a loan and repay it monthly from their salary.
            No collateral. No unnecessary documents.
          </p>
        </div>
        <div className="staff-loan-visual">
          <LoanRequestPhone />
          <span className="sl-card sl-card--1"><Tick />Just Approved</span>
          <span className="sl-card sl-card--2"><Tick />Repaid automatically on payday</span>
          <span className="sl-card sl-card--3"><Tick />No collateral, no paperwork</span>
        </div>
      </div>
    </section>
  )
}
