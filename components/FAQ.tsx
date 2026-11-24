'use client'
import { withBase } from '@/lib/paths'
import { useState } from 'react'
import { faqItems } from '@/lib/faq'


export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq-layout">
          {/* Left Column: Image */}
          <div className="faq-col-left">
            <div className="faq-image-card">
              <img
                src={withBase('/images/faq-support.webp')}
                width={574}
                height={856}
                loading="lazy"
                decoding="async"
                alt="Digiit support and smiling professionals"
                className="faq-image"
              />
            </div>
          </div>

          {/* Right Column: Heading + Accordion Questions */}
          <div className="faq-col-right">
            <div className="faq-title-wrap">
              <h2 className="faq-title">Your questions,<br />answered</h2>
              <p className="faq-subtitle">
                Everything you need to know about Digiit&apos;s zero-risk employee financial wellness platform.
              </p>
            </div>
            <div className="faq-list">
              {faqItems.map((item, i) => (
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
