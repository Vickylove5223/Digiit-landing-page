import { withBase } from '@/lib/paths'
import { TALK_TO_SALES_WHATSAPP_URL } from '@/lib/whatsapp'
import AvatarCycle from '@/components/AvatarCycle'

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="wrap promo-inner">
        <div className="promo-text">
          <h2>Ready to offer a benefit your employees will actually use?</h2>
          <p>Join forward-thinking companies giving their teams financial peace of mind, at zero cost to the business.</p>
        </div>
        <div className="promo-ctas">
          <a href={withBase('/apply')} className="promo-btn-primary">
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
            className="promo-btn-ghost"
          >
            <AvatarCycle />
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  )
}
