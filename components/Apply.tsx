'use client'
import { useState, FormEvent } from 'react'

export default function Apply() {
  const [msg, setMsg] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = [
      `Company: ${data.get('company')}`,
      `Contact: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Number of staff: ${data.get('staff')}`,
    ].join('\n')
    const url =
      'mailto:wole@digiit.ng?subject=' +
      encodeURIComponent('Apply now: ' + data.get('company')) +
      '&body=' +
      encodeURIComponent(body)
    setMsg('Opening your email app. Press send to complete your application.')
    window.location.href = url
  }

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
        <form className="card" onSubmit={handleSubmit}>
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
          <p className="note">Open to businesses in Nigeria with at least 10 staff. Submitting opens an email to our team.</p>
          {msg && <p className="form-msg" role="status">{msg}</p>}
        </form>
      </div>
    </section>
  )
}
