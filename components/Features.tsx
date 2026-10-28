'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import LoanSheet from './LoanSheet'

const DESIGN_W = 1360

function Icon({ children, size = 18 }: { children: ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const icons = {
  grid: <Icon><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></Icon>,
  doc: <Icon><path d="M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" /><path d="M9 12h6M9 16h6M9 8h3" /></Icon>,
  users: <Icon><circle cx="9" cy="8" r="3.5" /><path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5" /><path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.8c1.6.8 2.7 2.6 3 5.2" /></Icon>,
  history: <Icon><path d="M4 12a8 8 0 108-8 8.2 8.2 0 00-6 2.7L4 9" /><path d="M4 4v5h5" /><path d="M12 8v4l3 2" /></Icon>,
  list: <Icon><path d="M4 6h3M4 12h3M4 18h3M10 6h10M10 12h10M10 18h10" /></Icon>,
  help: <Icon size={24}><circle cx="12" cy="12" r="9.5" /><path d="M9.5 9.5a2.5 2.5 0 014.9.7c0 1.7-2.4 2.2-2.4 3.8" /><circle cx="12" cy="17" r=".6" fill="currentColor" /></Icon>,
  gear: <Icon size={24}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" /></Icon>,
  bell: <Icon size={24}><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 01-3.4 0" /></Icon>,
  chevDown: <Icon size={16}><path d="M6 9l6 6 6-6" /></Icon>,
  chevRight: <Icon size={18}><path d="M9 6l6 6-6 6" /></Icon>,
  calendar: <Icon size={20}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></Icon>,
  search: <Icon size={20}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></Icon>,
  info: <Icon size={15}><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="8" r=".6" fill="currentColor" /></Icon>,
}

const MENU: [string, ReactNode][] = [
  ['Dashboard', icons.grid],
  ['Loans', icons.doc],
  ['Staffs', icons.users],
  ['Repayments', icons.history],
  ['Activity Log', icons.list],
]
const COLS = ['Full Name', 'Amount Taken', 'Loan Type', 'Tenor (Month)', 'Total Repayment', 'Amount Paid', 'Due Amount & Date', 'Outstanding Loan', 'Status', '']
const AMT = '₦7,234,456.00'

const LOANS = [
  {
    name: 'Adewale Johnson',
    role: 'Software Engineer',
    amount: '₦3,500,000.00',
    date: 'Aug 04, 2025',
    type: 'New Loan',
    id: '234567',
    tenor: '6 Months',
    total: '₦3,850,000.00',
    paid: '₦1,925,000.00',
    due: '₦641,666.00',
    dueDate: 'Nov 04, 2025',
    outstanding: '₦1,925,000.00',
  },
  {
    name: 'Chioma Okonkwo',
    role: 'Product Designer',
    amount: '₦1,800,000.00',
    date: 'Jul 15, 2025',
    type: 'Topup',
    id: '234588',
    tenor: '4 Months',
    total: '₦1,980,000.00',
    paid: '₦990,000.00',
    due: '₦495,000.00',
    dueDate: 'Nov 15, 2025',
    outstanding: '₦990,000.00',
  },
  {
    name: 'Babajide Adeleke',
    role: 'Operations Lead',
    amount: '₦7,200,000.00',
    date: 'May 20, 2025',
    type: 'New Loan',
    id: '234602',
    tenor: '12 Months',
    total: '₦8,064,000.00',
    paid: '₦4,032,000.00',
    due: '₦672,000.00',
    dueDate: 'Nov 20, 2025',
    outstanding: '₦4,032,000.00',
  },
  {
    name: 'Amina Bello',
    role: 'Financial Analyst',
    amount: '₦2,500,000.00',
    date: 'Jun 10, 2025',
    type: 'Topup',
    id: '234619',
    tenor: '6 Months',
    total: '₦2,750,000.00',
    paid: '₦1,833,333.00',
    due: '₦458,333.00',
    dueDate: 'Nov 10, 2025',
    outstanding: '₦916,667.00',
  },
  {
    name: 'Emeka Nwosu',
    role: 'HR Specialist',
    amount: '₦1,200,000.00',
    date: 'Aug 18, 2025',
    type: 'New Loan',
    id: '234633',
    tenor: '3 Months',
    total: '₦1,296,000.00',
    paid: '₦432,000.00',
    due: '₦432,000.00',
    dueDate: 'Nov 18, 2025',
    outstanding: '₦864,000.00',
  },
  {
    name: 'Folake Adeyemi',
    role: 'Marketing Manager',
    amount: '₦4,800,000.00',
    date: 'Apr 02, 2025',
    type: 'Topup',
    id: '234651',
    tenor: '8 Months',
    total: '₦5,376,000.00',
    paid: '₦4,032,000.00',
    due: '₦672,000.00',
    dueDate: 'Nov 02, 2025',
    outstanding: '₦1,344,000.00',
  },
  {
    name: 'Tunde Bakare',
    role: 'DevOps Engineer',
    amount: '₦5,000,000.00',
    date: 'Sep 01, 2025',
    type: 'New Loan',
    id: '234674',
    tenor: '6 Months',
    total: '₦5,500,000.00',
    paid: '₦916,666.00',
    due: '₦916,666.00',
    dueDate: 'Nov 01, 2025',
    outstanding: '₦4,583,334.00',
  },
  {
    name: 'Ngozi Eze',
    role: 'Sales Executive',
    amount: '₦2,000,000.00',
    date: 'Jul 28, 2025',
    type: 'Topup',
    id: '234690',
    tenor: '5 Months',
    total: '₦2,200,000.00',
    paid: '₦1,320,000.00',
    due: '₦440,000.00',
    dueDate: 'Nov 28, 2025',
    outstanding: '₦880,000.00',
  },
  {
    name: 'Ibrahim Musa',
    role: 'QA Lead',
    amount: '₦3,000,000.00',
    date: 'Jun 22, 2025',
    type: 'New Loan',
    id: '234712',
    tenor: '6 Months',
    total: '₦3,300,000.00',
    paid: '₦2,200,000.00',
    due: '₦550,000.00',
    dueDate: 'Nov 22, 2025',
    outstanding: '₦1,100,000.00',
  },
  {
    name: 'Zainab Abubakar',
    role: 'Customer Success',
    amount: '₦1,500,000.00',
    date: 'Aug 12, 2025',
    type: 'Topup',
    id: '234735',
    tenor: '3 Months',
    total: '₦1,620,000.00',
    paid: '₦540,000.00',
    due: '₦540,000.00',
    dueDate: 'Nov 12, 2025',
    outstanding: '₦1,080,000.00',
  },
]

function Dashboard() {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [fit, setFit] = useState<{ s: number; h: number }>({ s: 0.76, h: 1200 })

  useEffect(() => {
    const o = outer.current
    const i = inner.current
    if (!o || !i) return

    const update = () => {
      const clientW = o.clientWidth || 1040
      const s = Math.min(1, clientW / DESIGN_W)
      const h = (i.scrollHeight || 1550) * s
      setFit({ s, h })
    }

    update()
    window.addEventListener('resize', update)
    const ro = new ResizeObserver(() => update())
    ro.observe(o)

    return () => {
      window.removeEventListener('resize', update)
      ro.disconnect()
    }
  }, [])

  return (
    <div
      className="dash2"
      ref={outer}
      style={{
        height: fit.h,
        width: '100%',
        maxWidth: 1040,
        position: 'relative',
        overflow: 'hidden',
        background: '#fff',
        borderRadius: '1.25rem',
      }}
    >
      <div
        className="dz"
        ref={inner}
        style={{
          width: DESIGN_W,
          transform: `scale(${fit.s})`,
          transformOrigin: 'top left',
        }}
      >
        <div className="dz-nav">
          <div className="dz-brand">
            <span className="dz-logo"><span>smart</span><span>cash</span></span>
            <span className="dz-brand-name">Your logo</span>
            <span className="dz-brand-sep" />
            <span className="dz-brand-digiit">Digiit</span>
          </div>
          <div className="dz-menu">
            {MENU.map(([label, icon]) => (
              <span key={label} className={label === 'Loans' ? 'on' : undefined}>{icon}{label}</span>
            ))}
          </div>
          <div className="dz-tools">
            {icons.help}
            {icons.gear}
            <span className="dz-bell">{icons.bell}<i>2</i></span>
            <span className="dz-avatar">
              <span>
                <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" fill="#f1d9c8" /><circle cx="19" cy="15" r="7" fill="#8a5a3c" /><path d="M6 38c1.5-8 6.5-12 13-12s11.5 4 13 12" fill="#c0392b" /></svg>
              </span>
              {icons.chevDown}
            </span>
          </div>
        </div>

        <div className="dz-title">
          <h4>Staffs Loans</h4>
          <p>Track every staff loan, repayment and salary deduction in one place.</p>
        </div>

        <div className="dz-kpi">
          <div className="dz-kpi-left">
            <p className="dz-lbl">Total Loan Due This Month End {icons.info}</p>
            <p className="dz-big">{AMT}</p>
            <p className="dz-muted">Last updated Aug, 15th 2025</p>
            <div className="dz-split">
              <p>Paid<b>N124,000.00</b></p>
              <p style={{ textAlign: 'right' }}>Remaining<b>N22,000.00</b></p>
            </div>
            <div className="dz-progress"><i /></div>
            <p className="dz-credit">Your Company Credit Score is <b>85% Great</b> {icons.info}</p>
          </div>
          <div className="dz-kpi-right">
            <div className="dz-row3">
              <div className="dz-cell">
                <p className="dz-lbl red">Total Outstanding Loans {icons.info}</p>
                <p className="dz-big">₦20,456.00</p>
                <p className="dz-since">Since <b>Aug, 15th 2025</b></p>
              </div>
              <div className="dz-cell">
                <p className="dz-lbl">Total Loans Taken {icons.info}</p>
                <p className="dz-big">₦934,456.00</p>
                <p className="dz-since">Since <b>Aug, 15th 2025</b></p>
              </div>
              <div className="dz-cell def">
                <p className="dz-lbl">Default Repayments {icons.info}</p>
                <p className="dz-big">₦204,026.00</p>
                <p className="dz-since">First default was <b>Nov, 15th 2025</b></p>
              </div>
            </div>
            <div className="dz-row4">
              {[['Active staffs', '24/43'], ['Active Loans', '09'], ['Staff Loan Liquidated', '03'], ['Current Interest Rate', '4%']].map(([k, v]) => (
                <div key={k}><p>{k}</p><b>{v}</b></div>
              ))}
            </div>
            <div className="dz-alert">
              <span className="dz-q">?</span>
              Upcoming repayment for your staff loan payment due in 7 days
              <a>Review here</a>
            </div>
          </div>
        </div>


        <div className="dz-toolbar">
          <div className="dz-toolbar-title">
            <h4>All Loans</h4>
          </div>
          <span className="dz-search">{icons.search}Search by name, or id</span>
          <span className="dz-date">{icons.calendar}10th Jan - 28th May, 2025{icons.chevDown}</span>
        </div>

        <div className="dz-table">
          <table>
            <thead>
              <tr>{COLS.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {LOANS.map((loan, i) => (
                <tr key={i} className={i === 2 ? 'on' : undefined}>
                  <td><span className="dz-name">{loan.name}</span><small>{loan.role}</small></td>
                  <td><span className="dz-blue">{loan.amount}</span><small>{loan.date}</small></td>
                  <td>{loan.type}<small>ID: {loan.id}</small></td>
                  <td>{loan.tenor}</td>
                  <td className="dz-num">{loan.total}</td>
                  <td className="dz-num">{loan.paid}</td>
                  <td><span className="dz-num">{loan.due}</span><small>{loan.dueDate}</small></td>
                  <td className="dz-red">{loan.outstanding}</td>
                  <td><span className="dz-run">Running</span></td>
                  <td className="dz-chev">{icons.chevRight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

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

export function FeaturesHR() {
  return (
    <div className="feature-hr-band">
      <div className="wrap feature rev">
        <div className="panel indigo">
          <Dashboard />
        </div>
        <div>
          <h2>For HR &amp; leadership,<br />Managing staff loans can be a Mess.</h2>
          <p className="sub">Digiit allow you offer the benefit, &amp; skip the mess to give your staffs safety net without touching your cash, &amp; taking on risk.</p>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <>
      <FeaturesEmployee />
      <FeaturesHR />
    </>
  )
}
