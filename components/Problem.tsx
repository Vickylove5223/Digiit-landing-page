'use client'
import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    label: 'School Fees',
    desc: "Fund your children's education without waiting for next payday.",
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'House Rent',
    desc: 'Cover rent before landlord pressure builds up.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Medical Bills',
    desc: 'Handle health emergencies without financial stress.',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Family Needs',
    desc: 'Take care of everyday family expenses when they pile up.',
    img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Emergency Repairs',
    desc: 'Fix your car or home before it disrupts your work.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&auto=format&fit=crop&q=80',
  },
]

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="currentColor" />
    <path d="M7.5 7.5l7 7M14.5 7.5l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="#EF3932" />
    <path d="M6.5 11.3l3 3 6-6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Problem({ showCompare, hideSlider }: { showCompare?: boolean; hideSlider?: boolean }) {
  const [active, setActive] = useState(0)
  const [maxSlide, setMaxSlide] = useState(slides.length - 3)
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measure = () => {
      if (!outerRef.current) return
      const style = getComputedStyle(outerRef.current)
      const paddingLeft = parseFloat(style.paddingLeft) || 0
      const usableW = outerRef.current.offsetWidth - paddingLeft
      const cardW = Math.min(280, Math.max(200, window.innerWidth * 0.22))
      const gap = 24
      const numVisible = Math.floor((usableW + gap) / (cardW + gap))
      setMaxSlide(Math.max(0, slides.length - numVisible))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1 > maxSlide ? 0 : prev + 1))
    }, 4500)
    return () => clearInterval(timer)
  }, [maxSlide])

  const prev = () => setActive(a => Math.max(0, a - 1))
  const next = () => setActive(a => Math.min(maxSlide, a + 1))

  const trackSlide = Math.min(active, maxSlide)

  return (
    <section className="manifesto">
      <div className="wrap">
        {showCompare ? (
          <div className="cmp-note">
            <svg className="cmp-note-pin" width="60" height="78" viewBox="0 0 46 60" aria-hidden="true">
              <ellipse cx="28" cy="55" rx="7" ry="2.4" fill="rgba(60, 45, 10, 0.22)" />
              <path d="M23 34 L26 54" stroke="#9aa0ad" strokeWidth="2.4" strokeLinecap="round" />
              <ellipse cx="23" cy="32" rx="13" ry="4.5" fill="#b4231d" />
              <path d="M14 31 C14 24 17 19.5 19 17 L27 17 C29 19.5 32 24 32 31 Z" fill="#d92d27" />
              <ellipse cx="23" cy="14.5" rx="12.5" ry="9" fill="#ef3932" />
              <ellipse cx="18" cy="11" rx="4.5" ry="2.6" fill="#fff" opacity="0.55" />
            </svg>
            <h2>Note, your people are borrowing, <br />why not make it safe &amp; cheaper for them.</h2>
            <p className="sub">
              When money runs out before the month does, staff turn to loan apps or ask HR for an
              advance. Both cost your business: <mark>in focus, in time and in trust.</mark>
            </p>
            <div className="cmp">
              <div className="without">
                <span className="cmp-tag">Without Digiit</span>
                <p className="cmp-stat">15%+ <span style={{fontSize:'0.5em', fontWeight:600}}>monthly</span></p>
                <p className="cmp-stat-sub">interest from other loan apps</p>
                <ul>
                  <li><XIcon />Loan apps charging 15%+ every month</li>
                  <li><XIcon />HR buried in advance requests</li>
                  <li><XIcon />Loans stuck on your balance sheet</li>
                  <li><XIcon />Shaming debt-recovery calls to staff</li>
                  <li><XIcon />Stressed, distracted teams</li>
                  <li><XIcon />Top talent leaves for better perks</li>
                </ul>
              </div>
              <div className="with">
                <span className="cmp-tag">With Digiit</span>
                <p className="cmp-stat">&lt;4% <span style={{fontSize:'0.5em', fontWeight:600}}>monthly</span></p>
                <p className="cmp-stat-sub">interest on loan</p>
                <ul>
                  <li><CheckIcon />Fair rates, under 4% a month</li>
                  <li><CheckIcon />Zero HR work, staff self-serve</li>
                  <li><CheckIcon />We fund 100%, zero balance sheet risk</li>
                  <li><CheckIcon />Private, dignified, no shaming</li>
                  <li><CheckIcon />Calm, focused, happier people</li>
                  <li><CheckIcon />A benefit that keeps your best staff</li>
                </ul>
              </div>
              <span className="cmp-vs" aria-hidden="true">VS</span>
            </div>
          </div>
        ) : (
          <>
            <h2>Your people are borrowing. Make it safe &amp; cheaper.</h2>
            <p className="sub">
              When money runs out before the month does, staff turn to loan apps or ask HR for an
              advance. Both cost your business: in focus, in time and in trust.
            </p>
          </>
        )}
      </div>

      {!hideSlider && <>
        <div className="loan-outer" ref={outerRef}>
          <div
            className="loan-track"
            style={{ '--slide': trackSlide } as React.CSSProperties}
          >
            {slides.map((slide, i) => (
              <article
                key={i}
                className={`loan-card${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <img src={slide.img} alt={slide.label} />
                <div className="loan-footer">
                  <span className="loan-tag">{slide.label}</span>
                  <p>{slide.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="loan-nav">
          <div className="loan-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === active ? 'active' : ''}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </>}
    </section>
  )
}
