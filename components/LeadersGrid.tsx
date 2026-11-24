'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

type Leader = {
  name: string
  role: string
  photo: string
  credentials?: string
  bio: string[]
  lists?: { title: string; items: string[] }[]
}

// Bios from the FUNDiT Finance team page (fundit.com.ng/teams).
const LEADERS: Leader[] = [
  {
    name: 'Olaleye Adebiyi',
    role: 'Chairman',
    photo: '/images/leader-chairman.webp',
    bio: [
      'He is the Country Managing Partner, ANDERSEN TAX LP, Lagos, Nigeria. He obtained an Honours Degree in Law (LLB) from the University of Ife, Ile-Ife, Nigeria in 1987, attended the Nigerian Law School in 1988, and obtained a Master’s Degree in Law (LL.M) from Obafemi Awolowo University, Ile-Ife, Nigeria in 1990.',
      'He brings a wide range of experience in tax advisory, corporate/commercial transactions in the oil and gas and telecom sectors, foreign investment and privatization.',
    ],
  },
  {
    name: 'Wole Ajomale',
    role: 'Managing Director',
    photo: '/images/leader-md.webp',
    bio: [
      'Wole is a seasoned finance expert with over 35 years of experience in investment management, strategic financial planning, and corporate finance. He holds a Bachelor’s degree in International Relations from the Obafemi Awolowo University, Ile-Ife, Nigeria.',
      'He leads a diverse team of financial professionals in developing innovative investment strategies and providing tailored financial solutions to clients. His visionary leadership has been instrumental in driving the company’s growth, enhancing its market position, and expanding its service offerings.',
      'Wole has successfully managed large-scale portfolios, guided mergers and acquisitions, and implemented risk management frameworks that protect client assets while optimizing returns.',
      'His strong analytical skills and commitment to client service have earned him a reputation as a trusted advisor in the finance industry. He is a Chartered Accountant and a member of the Institute of Chartered Accountants of Nigeria.',
    ],
  },
  {
    name: 'Bolaji Shenjobi',
    role: 'Executive Director',
    photo: '/images/leader-ed.webp',
    bio: [
      'Bolaji is a highly accomplished accountant with over 35 years of experience in financial services, specializing in liquidity management, strategic investment management and corporate finance. He holds a B.A. Accounting degree from St. Ambrose University, Iowa, USA.',
      'He is responsible for steering the firm’s strategic initiatives, overseeing investment portfolios, and fostering relationships with key stakeholders. His leadership has been pivotal in driving growth, enhancing operational efficiency, and positioning the company as a leader in the competitive financial landscape.',
      'Bolaji has a proven track record in managing complex financial projects, developing innovative investment strategies, and implementing risk management frameworks. His ability to analyze market trends and adapt strategies accordingly has consistently delivered strong results for clients and the organization alike. He is a Chartered Accountant and a member of the Institute of Chartered Accountants of Nigeria.',
    ],
  },
  {
    name: 'Umma Yusuf Aboki',
    role: 'Independent Non-Executive Director (INED)',
    photo: '/images/leader-umma.webp',
    credentials: 'MSc | MBA | CP3P Certified PPP Professional',
    bio: [
      'Umma Yusuf Aboki is an accomplished leader with over 25 years of diverse experience across the public and private sectors, specializing in banking, investment promotion, and public-private partnerships (PPP). She has a proven track record of driving economic growth, fostering strategic partnerships, and managing high-value client portfolios.',
      'Her extensive banking experience includes roles at Guaranty Trust Bank, Sterling Bank, and Habib Nigeria Bank, where she consistently exceeded revenue targets and built strong relationships with corporate and institutional clients. Umma played a pivotal role in securing significant loans, including signing Kaduna State as a client at Guaranty Trust Bank and leading her team to become the most profitable within two years. She possesses expertise in financial management, risk assessment, regulatory compliance, and delivering tailored banking solutions that drive profitability and enhance client satisfaction.',
      'As Commissioner for Planning and Budgeting in Kaduna State (April 2022 to May 2023), Umma spearheaded strategic planning initiatives aimed at driving economic growth and development. She ensured budgets were passed before the end of the fiscal year, enabling timely implementation. Umma also chaired the State’s economic planning board, aligning local government policies with the state’s broader development objectives. Her leadership in creating a project support office streamlined budget and procurement processes, ensuring better management and transparency of public resources.',
      'In her role as Executive Secretary/CEO at the Kaduna Investment Promotion Agency (KADIPA), she successfully grew the investment portfolio from $500 million to over $2.5 billion, creating over 100,000 jobs. She led efforts to attract foreign and domestic investments, navigated complex regulatory environments, and developed Kaduna’s first PPP policy and manual.',
      'Umma’s vast experience in banking and public sector leadership, combined with her expertise in financial management and strategic development, positions her as a key driver of innovation and sustainable growth in both corporate and governmental roles.',
    ],
    lists: [
      {
        title: 'Key expertise',
        items: [
          'Strategic Planning & Budgeting',
          'Commercial and Institutional Banking',
          'Investment Promotion & PPP',
          'Financial Management & Analysis',
          'Client Relationship Management',
          'Regulatory Compliance & Risk Management',
          'Leadership & Stakeholder Engagement',
        ],
      },
      {
        title: 'Certifications',
        items: [
          'CP3P Certified PPP Professional',
          'MSc in Finance & Control',
          'MBA in Business Administration (Public-Private Partnership)',
        ],
      },
    ],
  },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z" />
  </svg>
)

function LeaderModal({ leader, onClose }: { leader: Leader; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="ldr-overlay" onClick={onClose}>
      <div
        className="ldr-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ldr-modal-name"
        onClick={e => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="ldr-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="ldr-photo">
          <img src={leader.photo} alt={leader.name} loading="lazy" decoding="async" />
        </div>

        <div className="ldr-body">
          <h3 id="ldr-modal-name">{leader.name}</h3>
          <p className="ldr-role">{leader.role}</p>
          {leader.credentials && <p className="ldr-cred">{leader.credentials}</p>}
          <div className="ldr-text">
            {leader.bio.map((p, i) => <p key={i}>{p}</p>)}
            {leader.lists?.map(l => (
              <div key={l.title} className="ldr-list">
                <h4>{l.title}</h4>
                <ul>{l.items.map(it => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LeadersGrid() {
  const [open, setOpen] = useState<number | null>(null)
  const lastBtn = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setOpen(null)
    lastBtn.current?.focus()
  }, [])

  return (
    <>
      <div className="fdt-leaders-grid">
        {LEADERS.map((l, i) => (
          <div key={l.name} className="fdt-leader-card">
            <div className="fdt-leader-photo-box">
              <img src={l.photo} alt={l.name} className="fdt-leader-photo" loading="lazy" decoding="async" />
            </div>
            <div className="fdt-leader-meta">
              <div>
                <h3 className="fdt-leader-name">{l.name}</h3>
                <p className="fdt-leader-role">{l.role}</p>
              </div>
              <button
                type="button"
                className="fdt-leader-circle-btn"
                aria-label={`View details for ${l.name}`}
                aria-haspopup="dialog"
                onClick={e => { lastBtn.current = e.currentTarget; setOpen(i) }}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      {open !== null && <LeaderModal leader={LEADERS[open]} onClose={close} />}
    </>
  )
}
