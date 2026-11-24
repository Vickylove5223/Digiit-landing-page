'use client'
import { useEffect, useRef, useState } from 'react'
import { LOGO_SRC } from '@/lib/logo'

// Fixed design canvas, scaled to whatever width it is given.
const W = 600
const H = 640

function ScaleBox({ children }: { children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null)
  const [s, setS] = useState(1)
  useEffect(() => {
    const o = outer.current
    if (!o) return
    const update = () => setS(Math.min(1.3, (o.clientWidth || W) / W))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(o)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={outer} className="pv-scale" style={{ height: H * s }}>
      <div style={{ width: W, height: H, transform: `scale(${s})`, transformOrigin: 'top left' }}>{children}</div>
    </div>
  )
}

export default function PayrollSpotlight() {
  return (
    <ScaleBox>
      <div className="pv">
        {/* zoomed-in slice of the Digiit HR app, bleeding off the frame */}
        <div className="pv-app">
          <div className="pv-app__top">
            <img className="pv-brand" src={LOGO_SRC} alt="" width={50} height={22} />
            <span className="pv-tab on">Overview</span>
            <span className="pv-tab">Deductions</span>
          </div>

          <h4 className="pv-title">Staff loans</h4>

          <div className="pv-row">
            <div className="pv-due">
              <small>Upcoming deduction</small>
              <b>₦7,234,456</b>
              <span>from 24 staff salaries</span>
            </div>
            <div className="pv-dates">
              <div><small className="pv-dates__hd">REPAYMENT DATE</small><b className="pv-blue">Nov 25</b><span>2025 · on payday</span></div>
            </div>
          </div>

          <div className="pv-cards">
            <div className="pv-card pv-protect">
              {/* decorative pattern: rings + shields */}
              <svg className="pv-protect__art" width="190" height="120" viewBox="0 0 190 120" fill="none" aria-hidden="true">
                <circle cx="140" cy="60" r="34" stroke="#c7d2fe" strokeWidth="1.5" />
                <circle cx="140" cy="60" r="52" stroke="#dbe2fe" strokeWidth="1.5" />
                <circle cx="140" cy="60" r="72" stroke="#e8ecff" strokeWidth="1.5" />
                <path d="M140 42l14 5.5v10c0 8.6-5.9 14.8-14 17.5-8.1-2.7-14-8.9-14-17.5v-10L140 42z" fill="#2a3a8f" />
                <path d="M134 59l4.5 4.5 8-8.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M84 22l5 2v3.6c0 3.1-2.1 5.3-5 6.3-2.9-1-5-3.2-5-6.3V24l5-2z" fill="#c7d2fe" />
                <path d="M182 96l4 1.6v2.9c0 2.5-1.7 4.3-4 5.1-2.3-.8-4-2.6-4-5.1v-2.9l4-1.6z" fill="#c7d2fe" />
                <circle cx="96" cy="92" r="3" fill="#dbe2fe" />
                <circle cx="176" cy="20" r="3" fill="#dbe2fe" />
              </svg>
              <div className="pv-protect__body">
                <b>Repayment protection</b>
                <p>If a staff member leaves or misses payment, Digiit recovers the balance from the employee.</p>
                <a>View cover →</a>
              </div>
            </div>
          </div>

          <div className="pv-check">
            <div>
              <b>November deductions ready</b>
              <p>Review 24 staff deductions before payday. Digiit handles the rest.</p>
            </div>
            <span className="pv-btn">View list</span>
          </div>
        </div>

        {/* confirmation card */}
        <div className="pv-ok">
          <span className="pv-tick" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          </span>
          <b>Deductions approved!</b>
          <small>Total deducted on payday</small>
          <strong>₦7,234,456.00</strong>
        </div>
      </div>
    </ScaleBox>
  )
}
