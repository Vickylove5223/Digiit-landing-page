import { withBase } from '@/lib/paths'
import PayrollSpotlight from '@/components/PayrollSpotlight'

const ITEMS = [
  { title: 'Every staff loan in one dashboard', text: 'Track loans, repayments and salary deductions in one place, with no spreadsheets.' },
  { title: 'Zero cash from your company', text: 'Offer staff loans as a benefit without touching your balance sheet. Digiit funds every loan.' },
  { title: 'No default risk on you', text: 'If a loan goes bad, Digiit carries it, not your business.' },
  { title: 'Repayments run themselves', text: 'Deductions sync with payroll every month. Nothing to chase or reconcile by hand.' },
  { title: 'Hours back for HR', text: 'No paper forms or one-off approvals. Digiit handles the whole process.' },
  { title: 'Happier, more loyal staff', text: 'Financially secure employees stay longer and focus better at work.' },
]

const BG = withBase('/images/hr-payroll-bg.webp')

export default function CompanyBenefits() {
  return (
    <section className="bx" id="for-companies" aria-label="Benefits for HR and leadership">
      <div className="wrap">
        <div className="bx-head">
          <h2>For HR &amp; leadership,<br />Managing staff loans can be a Mess.</h2>
          <p>Give your staff a safety net without touching your cash or taking on risk. Digiit runs the whole thing for you.</p>
        </div>

        <div className="bx-grid">
          <ul className="bx-list">
            {ITEMS.map(it => (
              <li key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ul>

          <div className="bx-stage bx-fill" style={{ backgroundImage: `url('${BG}')` }} aria-hidden="true">
            <div className="bx-stage__in"><PayrollSpotlight /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
