const StaticConfetti = () => (
  <svg
    viewBox="0 0 340 80"
    width="100%"
    height="80"
    aria-hidden="true"
    style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', borderRadius: 'inherit' }}
  >
    <rect x="18" y="8" width="9" height="14" rx="1" fill="#e63946" transform="rotate(-20 22 15)" opacity="0.9"/>
    <rect x="48" y="4" width="7" height="11" rx="1" fill="#2563eb" transform="rotate(15 51 9)" opacity="0.85"/>
    <rect x="75" y="12" width="8" height="12" rx="1" fill="#f59e0b" transform="rotate(-35 79 18)" opacity="0.9"/>
    <rect x="105" y="3" width="6" height="10" rx="1" fill="#a855f7" transform="rotate(25 108 8)" opacity="0.85"/>
    <rect x="132" y="16" width="10" height="7" rx="1" fill="#22c55e" transform="rotate(-10 137 20)" opacity="0.9"/>
    <rect x="158" y="5" width="8" height="13" rx="1" fill="#e63946" transform="rotate(40 162 11)" opacity="0.8"/>
    <rect x="185" y="10" width="7" height="11" rx="1" fill="#2563eb" transform="rotate(-28 188 15)" opacity="0.9"/>
    <rect x="210" y="2" width="9" height="7" rx="1" fill="#f59e0b" transform="rotate(18 214 5)" opacity="0.85"/>
    <rect x="238" y="14" width="8" height="12" rx="1" fill="#a855f7" transform="rotate(-45 242 20)" opacity="0.8"/>
    <rect x="264" y="6" width="7" height="10" rx="1" fill="#22c55e" transform="rotate(30 267 11)" opacity="0.9"/>
    <rect x="290" y="11" width="10" height="8" rx="1" fill="#e63946" transform="rotate(-15 295 15)" opacity="0.85"/>
    <rect x="315" y="3" width="8" height="13" rx="1" fill="#2563eb" transform="rotate(22 319 9)" opacity="0.8"/>
    <rect x="32" y="30" width="7" height="11" rx="1" fill="#22c55e" transform="rotate(30 35 35)" opacity="0.6"/>
    <rect x="62" y="24" width="8" height="6" rx="1" fill="#f59e0b" transform="rotate(-18 66 27)" opacity="0.55"/>
    <rect x="145" y="28" width="9" height="7" rx="1" fill="#2563eb" transform="rotate(-25 149 31)" opacity="0.55"/>
    <rect x="248" y="26" width="8" height="8" rx="1" fill="#22c55e" transform="rotate(-38 252 30)" opacity="0.55"/>
    <rect x="300" y="32" width="6" height="11" rx="1" fill="#f59e0b" transform="rotate(28 303 37)" opacity="0.6"/>
  </svg>
)

export default function LoanSheet() {
  return (
    <div className="sheet loan-sheet-anim" style={{ position: 'relative', overflow: 'hidden', padding: '20px' }}>
      <StaticConfetti />

      {/* check icon */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.8rem', marginBottom: '0.4rem' }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" fill="#22c55e"/>
            <path d="M6.5 11.3l3 3 6-6.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <p style={{ textAlign: 'center', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', margin: '0 0 0.15rem' }}>
        Money Received
      </p>
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.8rem', margin: '0 0 0.9rem' }}>
        Loan disbursed successfully
      </p>

      {/* amount */}
      <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--indigo)', letterSpacing: '-0.5px', marginBottom: '1rem' }}>
        ₦8,450,000
      </div>

      {/* dashed divider */}
      <div style={{ borderTop: '1.5px dashed #d5e0ec', margin: '0 0 0.85rem' }} />

      {/* receipt rows */}
      {[
        { label: 'Purpose',  value: 'House rent' },
        { label: 'Date',     value: 'Oct 26, 2026' },
        { label: 'Ref',      value: 'DGT-88421' },
        { label: 'Collateral', value: 'None required' },
      ].map(({ label, value }) => (
        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.55rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{label}</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)' }}>{value}</span>
        </div>
      ))}

      {/* dashed divider */}
      <div style={{ borderTop: '1.5px dashed #d5e0ec', margin: '0.85rem 0 0.85rem' }} />

      {/* status badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Status</span>
        <span style={{
          fontSize: '0.78rem', fontWeight: 700, color: '#0f7a4c',
          background: '#e3f5ec', padding: '3px 10px', borderRadius: 999,
        }}>✓ Credited to account</span>
      </div>
    </div>
  )
}
