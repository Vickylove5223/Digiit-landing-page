const X = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="currentColor" />
    <path d="M7.5 7.5l7 7M14.5 7.5l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const Check = ({ fill = 'currentColor' }: { fill?: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill={fill} />
    <path d="M6.5 11.3l3 3 6-6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Compare() {
  return (
    <section className="compare">
      <div className="wrap">
        <div className="compare-header">
          <h2>Same payday. A very different month.</h2>
          <p className="sub">Two companies, same salary day. One drains hours and trust — the other runs itself.</p>
        </div>
      </div>
    </section>
  )
}
