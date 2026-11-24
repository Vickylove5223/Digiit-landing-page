import { withBase } from '@/lib/paths'
import AvatarCycle from './AvatarCycle'
import { TALK_TO_SALES_WHATSAPP_URL } from '@/lib/whatsapp'

function HeroText({ split }: { split: boolean }) {
  return (
    <>
      <h1>
        Employee Loans,
        <span style={split ? undefined : { whiteSpace: 'nowrap' }}>Without the Employer Risk</span>
      </h1>
      <p className="lead">
        Digiit gives your employees instant, confidential access to salary-backed loans, at zero cost and zero risk to your organization.
      </p>
      <div className="hero-ctas">
        <a href="#contact" className="hero-cta-primary">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
          </svg>
          Book a demo
        </a>
        <a
          href={TALK_TO_SALES_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-ghost"
        >
          <AvatarCycle />
          Talk to sales
        </a>
      </div>
    </>
  )
}

function LoanPhone() {
  return (
    <div className="hp-phone" aria-hidden="true">
      <div className="hp-screen">
        <div className="hp-top">
          <div className="hp-bar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            <span>Running Loan</span>
            <i />
          </div>
          <p className="hp-amount"><small>₦</small>62,500<small>.00</small></p>
          <p className="hp-left">
            Left to pay
            <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M12 11v6M12 7.5v.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" /></svg>
          </p>
          <div className="hp-progress"><i /></div>
          <div className="hp-meta">
            <span>5 payments left</span>
            <span>₦87,500.00 paid</span>
          </div>
          <div className="hp-actions">
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M3 10h18M7 15h3" /></svg>
              Repay Loan
            </span>
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              TopUp
            </span>
          </div>
        </div>
        <div className="hp-activity">
          <p className="hp-activity-title">Activity</p>
          <div className="hp-item">
            <span className="hp-ico hp-ico--pending">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11a8 8 0 00-14.3-4.9L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0014.3 4.9L20 16" /><path d="M20 20v-4h-4" /></svg>
            </span>
            <div className="hp-item-text">
              <p>Salary repayment</p>
              <small>Upcoming • 1 Nov 2026</small>
            </div>
            <span className="hp-item-amt">+₦12,500</span>
            <svg className="hp-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
          </div>
          <div className="hp-divider" />
          {['1 Oct 2026', '1 Sep 2026'].map(d => (
            <div className="hp-item" key={d}>
              <span className="hp-ico hp-ico--done">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </span>
              <div className="hp-item-text">
                <p>Salary repayment</p>
                <small>{d}</small>
              </div>
              <span className="hp-item-amt hp-item-amt--paid">+₦12,500</span>
              <svg className="hp-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero({ variant = 'center' }: { variant?: 'center' | 'split' }) {
  if (variant === 'split') {
    return (
      <section className="hero hero--split">
        <div className="wrap hero-split">
          <div className="hero-split-text">
            <HeroText split />
          </div>
          <div className="hero-split-visual">
            <LoanPhone />
          </div>
        </div>
        <div className="hero-crowd" aria-hidden="true">
          {[0, 1].map(i => <img key={i} src={withBase('/images/hero-image.webp')} alt="" width={1600} height={781} fetchPriority={i === 0 ? 'high' : 'low'} decoding="async" />)}
        </div>
      </section>
    )
  }

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-solo">
          <HeroText split={false} />
        </div>
      </div>

      <div className="hero-img-wrap">
        <img
          src={withBase('/images/hero-image.webp')}
          alt="Nigerian professionals at work"
          width={1600}
          height={781}
          fetchPriority="high"
          className="hero-img"
        />
        <div className="hero-app-card">
          <div className="hero-app-top">
            <div className="hero-app-avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80" alt="Adebayo Okonkwo" />
            </div>
            <div>
              <p className="hero-app-name">Adebayo Okonkwo</p>
              <p className="hero-app-dept">Finance Department</p>
            </div>
          </div>
          <p className="hero-app-label">Active Loan</p>
          <p className="hero-app-amount">₦150,000</p>
          <div className="hero-app-bar">
            <div className="hero-app-bar-fill" style={{ width: '25%' }} />
          </div>
          <p className="hero-app-meta">₦37,500 repaid &middot; 3 of 12 months</p>
        </div>
        <div className="hero-app-pill">
          <span className="hero-app-dot" />
          Next deduction &nbsp;<strong>₦12,500</strong>&nbsp; Nov 1
        </div>
      </div>
    </section>
  )
}
