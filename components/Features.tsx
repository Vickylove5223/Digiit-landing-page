'use client'
import LoanSheet from './LoanSheet'

const REASONS: [string, string][][] = [
  [
    ['🏠', 'Rent is due before payday'],
    ['🎓', 'School fees for the new term'],
    ['🏥', 'Hospital bills for my mum'],
    ['🏡', 'Down payment on a property'],
    ['🏞️', 'Buying a plot of land'],
    ['💍', "My sister's wedding contribution"],
    ['👶', 'Getting ready for our new baby'],
    ['🚙', 'Buying my first car'],
    ['🏗️', 'Finishing my building project'],
  ],
  [
    ['✈️', 'Travelling home for the holidays'],
    ['🛋️', 'Furnishing our new home'],
    ['☀️', 'Solar and inverter installation'],
    ['🕊️', 'Burial expenses back home'],
    ['📚', 'Professional exam fees'],
    ['🏪', 'Starting a side business'],
    ['🚚', 'Moving to a new apartment'],
    ['📜', "Master's degree tuition"],
  ],
]

function ReasonsMarquee() {
  return (
    <div className="reasons" aria-label="Reasons employees borrow">
      {REASONS.map((row, r) => (
        <div className={`reasons-row${r === 1 ? ' reverse' : ''}`} key={r}>
          <div className="reasons-track">
            {[0, 1].map(copy => row.map(([icon, text]) => (
              <span className="reason" key={`${copy}-${text}`} aria-hidden={copy === 1 || undefined}>
                <span className="reason-ico">{icon}</span>
                {text}
              </span>
            )))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function FeaturesEmployee({ hidePanel = false }: { hidePanel?: boolean }) {
  return (
    <section className="features" id="solution">
      <div className="wrap">
        <div className="feature feature--stack">
          <div className="feature--stack-text">
            <h2>For employees, They need Money when life happens.</h2>
            <p className="sub">Digiit provide fair, instant loan based on verified staff salary. No collateral, or paperwork needed.</p>
            <ReasonsMarquee />
          </div>
          {!hidePanel && (
            <div className="panel sky feature--stack-panel">
              <LoanSheet />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
