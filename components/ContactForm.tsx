'use client'

import { useState, type FormEvent } from 'react'
import { getWhatsAppUrl, WHATSAPP_RAW_PHONE } from '@/lib/whatsapp'

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submittedData, setSubmittedData] = useState<{ firstName: string; email: string } | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = (data.get('firstName') as string)?.trim() || ''
    const lastName = (data.get('lastName') as string)?.trim() || ''
    const email = (data.get('email') as string)?.trim() || ''
    const phone = (data.get('phone') as string)?.trim() || ''
    const company = (data.get('company') as string)?.trim() || ''
    const message = (data.get('message') as string)?.trim() || ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          message,
        }),
      })

      const resData = await res.json()

      if (!res.ok) {
        throw new Error(resData.error || 'Failed to send your message. Please try again.')
      }

      setSubmittedData({ firstName, email })
      setSubmitted(true)
    } catch (err: any) {
      setError(err?.message || 'Something went wrong while sending your message. Please try again or reach out on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setSubmitted(false)
    setError(null)
    setSubmittedData(null)
  }

  const whatsappInquiryUrl = getWhatsAppUrl(
    submittedData
      ? `Hello Digiit, I just submitted an inquiry on your website from ${submittedData.firstName} (${submittedData.email}).`
      : 'Hello Digiit, I would like to make an inquiry regarding your salary-backed loans.'
  )

  return (
    <div className="contact-form-card">
      <h2 className="contact-form-title">Send Us a Message</h2>

      {submitted ? (
        <div className="contact-success-box" role="alert">
          <div className="contact-success-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Message Sent Successfully!</h3>
          <p>
            Thank you{submittedData?.firstName ? `, ${submittedData.firstName}` : ''}. Our team in Victoria Island, Lagos has received your message and will respond to <strong>{submittedData?.email}</strong> within 1 business day.
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
            >
              Chat on WhatsApp Now
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-ghost"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
            >
              Send another message
            </button>
            <a
              href={`tel:${WHATSAPP_RAW_PHONE}`}
              className="btn btn-ghost"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
            >
              Call {WHATSAPP_RAW_PHONE}
            </a>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && (
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#991b1b',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                marginBottom: '1.25rem',
                fontSize: '0.9rem',
                lineHeight: 1.5,
              }}
              role="alert"
            >
              {error}
            </div>
          )}

          {/* Row 1: First Name & Last Name */}
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="c-first-name">
                First Name
              </label>
              <input
                id="c-first-name"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="e.g. Babatunde"
                className="contact-input"
                disabled={submitting}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="c-last-name">
                Last Name
              </label>
              <input
                id="c-last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="e.g. Adeyemi"
                className="contact-input"
                disabled={submitting}
              />
            </div>
          </div>

          {/* Row 2: Email Address */}
          <div className="contact-field">
            <label htmlFor="c-email">
              Email Address
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="e.g. b.adeyemi@company.ng"
              className="contact-input"
              disabled={submitting}
            />
          </div>

          {/* Row 3: Phone Number */}
          <div className="contact-field">
            <label htmlFor="c-phone">
              Phone Number
            </label>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. 0803 123 4567"
              className="contact-input"
              disabled={submitting}
            />
          </div>

          {/* Row 4: Company / Organization Name */}
          <div className="contact-field">
            <label htmlFor="c-company">
              Organization / Company Name
            </label>
            <input
              id="c-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Sterling Logistics Ltd"
              className="contact-input"
              disabled={submitting}
            />
          </div>

          {/* Row 5: Message */}
          <div className="contact-field">
            <label htmlFor="c-message">
              Message
            </label>
            <textarea
              id="c-message"
              name="message"
              required
              rows={4}
              placeholder="How can our team help your organization or staff?"
              className="contact-textarea"
              disabled={submitting}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="contact-submit-btn"
            disabled={submitting}
            style={{ opacity: submitting ? 0.75 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
          >
            {submitting ? (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ animation: 'spin 1s linear infinite' }}
                >
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>

          {/* Privacy Footnote */}
          <p className="contact-form-privacy-note">
            We typically respond within 1 business day. Your privacy is protected.
          </p>
        </form>
      )}
    </div>
  )
}
