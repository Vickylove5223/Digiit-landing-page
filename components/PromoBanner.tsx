import { TALK_TO_SALES_WHATSAPP_URL } from '@/lib/whatsapp'

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="wrap promo-inner">
        <div className="promo-text">
          <h2>Ready to offer a benefit your employees will actually use?</h2>
          <p>Join forward-thinking companies giving their teams financial peace of mind — at zero cost to the business.</p>
        </div>
        <div className="promo-ctas">
          <a href="/apply" className="promo-btn-primary">Book a demo</a>
          <a
            href={TALK_TO_SALES_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn-ghost"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  )
}
