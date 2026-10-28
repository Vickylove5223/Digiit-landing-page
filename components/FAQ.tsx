'use client'
import { useState } from 'react'

const items = [
  {
    q: 'Who is eligible for a Digiit loan?',
    a: 'Any employee of a registered company that has signed up with Digiit. You must have a verified salary and at least 3 months of employment with your current employer.',
  },
  {
    q: 'How much can I borrow?',
    a: "Your loan limit is based on your verified monthly salary. You can borrow up to a multiple of your net monthly pay, subject to Digiit's credit policy and your employer's terms.",
  },
  {
    q: 'How quickly are loans disbursed?',
    a: 'Approved loans are credited to your bank account within minutes. Verification typically takes less than 24 hours for first-time applicants.',
  },
  {
    q: 'Does my employer see my loan details?',
    a: 'Your employer only sees the deduction amount on payroll — your loan purpose and amount are kept confidential between you and Digiit.',
  },
  {
    q: 'What does it cost my company to offer this benefit?',
    a: 'Nothing. Digiit funds 100% of every loan through licensed lending partners. There is no cost, no balance-sheet impact, and no administrative burden for your company.',
  },
  {
    q: 'How does repayment work?',
    a: "Repayments are automatically deducted from your salary each month by your employer's payroll, so you never miss a payment or deal with bank transfers.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq-layout">
          {/* Left Column: Heading + Image */}
          <div className="faq-col-left">
            <div className="faq-title-wrap">
              <h2 className="faq-title">Your questions,<br />answered</h2>
              <p className="faq-subtitle">
                Everything you need to know about Digiit&apos;s zero-risk employee financial wellness platform.
              </p>
            </div>
            <div className="faq-image-card">
              <img
                src="https://fundit.com.ng/_next/image?url=%2Fsupport.png&w=1200&q=75"
                alt="Digiit support and smiling professionals"
                className="faq-image"
              />
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="faq-col-right">
            <div className="faq-list">
              {items.map((item, i) => (
                <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                  <button 
                    className="faq-q" 
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span>{item.q}</span>
                    <svg 
                      className="faq-chevron" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  {open === i && (
                    <div className="faq-a-wrap">
                      <p className="faq-a">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
