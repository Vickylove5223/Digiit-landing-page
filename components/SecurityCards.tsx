const GREEN = '#c9d3f2'

function TwoStep() {
  return (
    <div className="sec-art sec-art--grid">
      <div className="sec-phone">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
          <path d="M13 2l9 3.5v7c0 6-3.8 10.2-9 12-5.2-1.8-9-6-9-12v-7L13 2z" />
          <path d="M9 13l3 3 5-5.5" />
        </svg>
        <span className="sec-check">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 5.2l2 2 4-4.4" /></svg>
        </span>
        <span className="sec-pin">&bull;&bull;&bull;&bull;</span>
      </div>
    </div>
  )
}

function Encryption() {
  return (
    <div className="sec-art sec-art--grid">
      <div className="sec-flow">
        <span className="sec-avatar" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="11" r="5" fill="#d9d2c5" /><path d="M5 28c1-6 5-9 10-9s9 3 10 9" fill="#d9d2c5" /></svg>
        </span>
        <span className="sec-dash" />
        <span className="sec-pill">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"><rect x="2" y="5.5" width="8" height="5" rx="1.2" /><path d="M4 5.5V4a2 2 0 014 0v1.5" /></svg>
          *******
        </span>
        <span className="sec-dash" />
        <span className="sec-cloud" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#c9d3f2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14.5a3.5 3.5 0 01-.3-7A5 5 0 0115.2 8 3.3 3.3 0 0114 14.5H6z" /><path d="M10 10v4M8.5 12.5L10 14l1.5-1.5" /></svg>
        </span>
      </div>
    </div>
  )
}

function Fraud() {
  return (
    <div className="sec-art sec-art--grid">
      <div className="sec-orbit">
        <span className="sec-ring sec-ring--lg" />
        <span className="sec-ring sec-ring--md" />
        <span className="sec-core">
          <svg width="20" height="22" viewBox="0 0 26 30" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
            <path d="M13 2l9 3.5v7c0 6-3.8 10.2-9 12-5.2-1.8-9-6-9-12v-7L13 2z" />
            <path d="M9 13l3 3 5-5.5" />
          </svg>
        </span>
        <span className="sec-node" style={{ top: '4%', left: '30%', background: '#f3b27a' }} />
        <span className="sec-node" style={{ top: '22%', right: '2%', background: '#cfd6d0' }}><i style={{ background: '#ef4444' }} /></span>
        <span className="sec-node" style={{ bottom: '22%', left: '8%', background: '#b7c4cc' }}><i style={{ background: '#ef4444' }} /></span>
        <span className="sec-node" style={{ bottom: '0%', right: '24%', background: '#e8c9b0' }}><i style={{ background: GREEN }} /></span>
      </div>
    </div>
  )
}

function Biometric() {
  return (
    <div className="sec-art sec-art--grid">
      <div className="sec-bio">
        <span className="sec-corner sec-corner--tl" />
        <span className="sec-corner sec-corner--tr" />
        <span className="sec-corner sec-corner--bl" />
        <span className="sec-corner sec-corner--br" />
        <svg width="46" height="52" viewBox="0 0 46 52" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round">
          <path d="M9 18c2-8 8-13 14-13s12 5 14 13" />
          <path d="M5 30c0-4 .5-7 1.5-10" />
          <path d="M41 30c0 8-1 14-3 19" />
          <path d="M13 44c1.5-4 2-8 2-13 0-5 3.5-9 8-9s8 4 8 9c0 6 .5 12 2.5 17" />
          <path d="M23 30c0 7-1 13-3 18" />
          <path d="M16 12c-4 3-6 7-7 12" />
        </svg>
        <span className="sec-scan" />
      </div>
    </div>
  )
}

const cards = [
  { title: '2 Step Authentication', text: 'Secure every login and transaction with advanced two step verification.', art: <TwoStep />, cls: 'sec-card--a' },
  { title: 'End-to-End Encryption', text: 'Your payments and personal data stay fully encrypted and protected at all times.', art: <Encryption />, cls: 'sec-card--b' },
  { title: 'Real-Time Fraud Monitoring', text: 'Advanced systems monitor suspicious activity instantly for safer transactions.', art: <Fraud />, cls: 'sec-card--c' },
  { title: 'Biometric Login', text: 'Access your wallet securely using fingerprint or face authentication.', art: <Biometric />, cls: 'sec-card--d' },
]

export default function SecurityCards() {
  return (
    <section className="sec-cards" aria-label="Security features">
      <div className="wrap">
        <div className="sec-head">
          <h2>Built to protect every naira and every record.</h2>
          <p>Bank-grade security sits behind every login, loan and deduction, so HR and staff can trust the process.</p>
        </div>
        <div className="sec-grid">
          {cards.map(c => (
            <div key={c.title} className={`sec-card ${c.cls}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              {c.art}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
