'use client'
import { useState, FormEvent } from 'react'
import SuccessModal from '@/components/SuccessModal'

export default function Apply() {
  const [msg, setMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<{
    company?: string
    name?: string
    email?: string
    phone?: string
    staff?: string
  } | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    const data = new FormData(e.currentTarget)
    const company = (data.get('company') as string)?.trim() || ''
    const name = (data.get('name') as string)?.trim() || ''
    const email = (data.get('email') as string)?.trim() || ''
    const phone = (data.get('phone') as string)?.trim() || ''
    const staff = (data.get('staff') as string) || ''

    setFormData({ company, name, email, phone, staff })
    setShowModal(true)

    const body = [
      `Company: ${company}`,
      `Contact: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Number of staff: ${staff}`,
    ].join('\n')
    const url =
      'mailto:wole@digiit.ng?subject=' +
      encodeURIComponent('Apply now: ' + company) +
      '&body=' +
      encodeURIComponent(body)
    setMsg('Application submitted. You may also send your details directly via email.')
    
    // Optional fallback email trigger
    try {
      window.location.href = url
    } catch {}
  }

  const whatsappInquiryUrl = `https://wa.me/2347086429380?text=${encodeURIComponent(
    formData
      ? `Hello Digiit, I just submitted a partnership application for ${formData.company} (${formData.name}, ${formData.email}).`
      : 'Hello Digiit, I would like assistance with corporate partnership onboarding.'
  )}`

  return (
    <section className="apply" id="apply">
      <div className="wrap apply-grid">
        <div id="contact">
          <h2>Partner your organization with Digiit</h2>
          <p className="sub">Join 40+ corporates giving their teams financial freedom without lifting a finger.</p>
          <div className="contact">
            <a href="mailto:wole@digiit.ng">wole@digiit.ng</a>
            <a href="tel:+2348012345678">+234 801 234 5678</a>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
        <form className="card" action="#" method="POST" onSubmit={handleSubmit}>
          <h3>Apply now</h3>
          <div className="two">
            <label>
              Company name
              <input name="company" required autoComplete="organization" />
            </label>
            <label>
              Your name
              <input name="name" required autoComplete="name" />
            </label>
          </div>
          <div className="two">
            <label>
              Work email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" required autoComplete="tel" />
            </label>
          </div>
          <label>
            Number of staff
            <select name="staff" required>
              <option value="">Select</option>
              <option>10–49</option>
              <option>50–199</option>
              <option>200–499</option>
              <option>500+</option>
            </select>
          </label>
          <button className="btn btn-red" type="submit">Apply now</button>
          <p className="note">Open to businesses in Nigeria with at least 10 staff.</p>
          {msg && <p className="form-msg" role="status">{msg}</p>}
        </form>
      </div>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Application Received Successfully!"
        badgeText="Corporate Partnership Application"
        subtitle={
          <span>
            Thank you{formData?.name ? `, ${formData.name}` : ''}. We have received your application for <strong>{formData?.company}</strong>.
          </span>
        }
        details={[
          ...(formData?.company ? [{ label: 'Company', value: formData.company }] : []),
          ...(formData?.name ? [{ label: 'Contact Name', value: formData.name }] : []),
          ...(formData?.email ? [{ label: 'Work Email', value: formData.email }] : []),
          ...(formData?.staff ? [{ label: 'Staff Count', value: `${formData.staff} staff` }] : []),
          { label: 'Status', value: 'Received & Logged' },
        ]}
        whatsappUrl={whatsappInquiryUrl}
        whatsappText="Chat with Onboarding on WhatsApp"
        secondaryText="Done"
        onSecondaryAction={() => setShowModal(false)}
      />
    </section>
  )
}
