'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Testimonial {
  quote: string
  name: string
  role: string
  source?: string
  avatar: string
}

const face = (id: string) => `https://images.unsplash.com/${id}?w=96&h=96&fit=crop&crop=faces&auto=format&q=70`

const testimonials: Testimonial[] = [
  {
    quote:
      '“Before Digiit, I was fielding 20+ salary advance requests every month. Now it is zero. Our staff handle it themselves seamlessly, and HR can focus on actual strategic work.”',
    name: 'Mrs. Ngozi A.',
    avatar: face('photo-1573497019940-1c28c88b4f3e'),
    role: 'Head of HR',
    source: 'from Verified Partner',
  },
  {
    quote:
      '“It gives me the ability to be in charge of my finances. The constant update of what I have earned has given me the opportunity to finally gain control of my money without high-interest loan apps.”',
    name: 'Denise N.',
    avatar: face('photo-1531123897727-8f129e1688ce'),
    role: 'Digiit member',
    source: 'from Trustpilot',
  },
  {
    quote:
      '“What a fantastic invention! I can access emergency funds easily whenever urgent expenses come up before payday. Sudden expenses are no longer a drama. Transfers take a millisecond! Blooming Brilliant!”',
    name: 'Charlotte A.',
    avatar: face('photo-1611432579699-484f7990b127'),
    role: 'Digiit member',
    source: 'from Trustpilot',
  },
  {
    quote:
      '“I have been able to save, make withdrawals and borrow safely. Thank you so much for this initiative. I needed ₦300,000 for school fees and received it without delay.”',
    name: 'Emmzy K.',
    avatar: face('photo-1522529599102-193c0d76b5b6'),
    role: 'Digiit member',
    source: 'from Trustpilot',
  },
  {
    quote:
      '“It has helped me so much. I know exactly what I am entitled to and can borrow from my own earned salary rather than having to ask someone else or borrow from loan sharks.”',
    name: 'Mr. Emeka O.',
    avatar: face('photo-1531384441138-2736e62e0919'),
    role: 'Senior Project Engineer',
    source: 'from Trustpilot',
  },
  {
    quote:
      '“We rolled it out as an employee benefit and saw engagement and retention improve within the first quarter. It costs our business zero Naira, has zero balance-sheet risk, and means everything to our team.”',
    name: 'Mrs. Amaka U.',
    avatar: face('photo-1523824921871-d6f1a15151f1'),
    role: 'Retail Group CEO',
    source: 'from Verified Partner',
  },
  {
    quote:
      '“Zero IT integration required. We onboarded our entire workforce in under 48 hours. Our employees love having a dignified, private financial safety net they can trust.”',
    name: 'Mr. Babatunde J.',
    avatar: face('photo-1506277886164-e25aa3f4ef7f'),
    role: 'HR & People Lead',
    source: 'from Verified Partner',
  },
]

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = useCallback(() => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const cardWidth = trackRef.current.querySelector('.stream-t-card')?.clientWidth || 380
    const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1)
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  // Auto-scroll loop that pauses on hover/focus
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      if (!trackRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        const cardWidth = trackRef.current.querySelector('.stream-t-card')?.clientWidth || 380
        trackRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
      }
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollButtons()
    el.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [updateScrollButtons])

  return (
    <section
      className="testimonials stream-t-section"
      style={{ background: '#ffffff', backgroundColor: '#ffffff' }}
      aria-label="Customer Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="wrap">
        {/* Section Header with Navigation Arrows */}
        <div className="stream-t-header-wrap">
          <div className="stream-t-header">
            <h2>Trusted by Nigerian businesses</h2>
            <p className="sub">Real stories from companies and employees already on Digiit.</p>
          </div>

          <div className="stream-t-nav" aria-label="Testimonials Navigation">
            <button
              type="button"
              className="stream-t-arrow"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="stream-t-arrow"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stream-Style Full Width Horizontal Carousel Track */}
      <div className="stream-t-carousel-wrap">
        <div className="stream-t-track" ref={trackRef}>
          {testimonials.map((t, idx) => (
            <article key={idx} className="stream-t-card">
              <blockquote className="stream-t-quote">
                {t.quote}
              </blockquote>
              <div className="stream-t-footer">
                <img className="stream-t-avatar" src={t.avatar} alt="" width={44} height={44} loading="lazy" />
                <span className="stream-t-author">
                  <strong>{t.name}</strong> – {t.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
