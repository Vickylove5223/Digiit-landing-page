'use client'
import { useState, useMemo, useEffect, type FormEvent } from 'react'
import SuccessModal, { type SuccessModalDetail } from '@/components/SuccessModal'

type AppMode = 'employer' | 'employee'

const MONTHLY_RATE = 0.035 // 3.5% per month

export default function ApplicationForm() {
  const [mode, setMode] = useState<AppMode>('employer')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [initialValues, setInitialValues] = useState<{
    company?: string
    name?: string
    email?: string
    phone?: string
    location?: string
  }>({})

  const [submittedData, setSubmittedData] = useState<{
    name: string
    email: string
    phone?: string
    company?: string
    employer?: string
    mode: AppMode
    staff?: string
    location?: string
    timeline?: string
    loanAmount?: number
    tenor?: number
    monthlyDeduction?: number
    totalRepayment?: number
    purpose?: string
  } | null>(null)

  // Employee interactive loan calculator state
  const [loanAmount, setLoanAmount] = useState(350000)
  const [tenor, setTenor] = useState(6) // months

  // Calculate repayment metrics
  const { monthlyDeduction, totalRepayment } = useMemo(() => {
    const totalInterest = loanAmount * MONTHLY_RATE * tenor
    const total = loanAmount + totalInterest
    const monthly = Math.round(total / tenor)
    return {
      monthlyDeduction: monthly,
      totalRepayment: Math.round(total),
    }
  }, [loanAmount, tenor])

  function formatNaira(val: number) {
    return '₦' + val.toLocaleString('en-NG')
  }

  // Pre-fill from URL parameters if present and clean up URL
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const company = params.get('company') || undefined
    const name = params.get('name') || undefined
    const email = params.get('email') || undefined
    const phone = params.get('phone') || undefined
    const location = params.get('location') || undefined
    const modeParam = params.get('mode')

    if (company || name || email || phone || location) {
      setInitialValues({ company, name, email, phone, location })
    }

    if (modeParam === 'employee' || modeParam === 'employer') {
      setMode(modeParam)
    }

    // Clean up address bar query params to keep clean URL
    if (window.location.search) {
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const payload: Record<string, any> = { mode, website: (data.get('website') as string) || '' }

    if (mode === 'employer') {
      payload.company = (data.get('company') as string)?.trim() || ''
      payload.name = (data.get('name') as string)?.trim() || ''
      payload.email = (data.get('email') as string)?.trim() || ''
      payload.phone = (data.get('phone') as string)?.trim() || ''
      payload.staff = (data.get('staff') as string) || ''
      payload.location = (data.get('location') as string) || ''
      payload.timeline = (data.get('timeline') as string) || ''
      payload.notes = (data.get('notes') as string)?.trim() || ''
    } else {
      payload.name = (data.get('name') as string)?.trim() || ''
      payload.email = (data.get('email') as string)?.trim() || ''
      payload.phone = (data.get('phone') as string)?.trim() || ''
      payload.employer = (data.get('employer') as string)?.trim() || ''
      payload.salaryRange = (data.get('salaryRange') as string) || ''
      payload.purpose = (data.get('purpose') as string) || ''
      payload.partnerStatus = (data.get('partnerStatus') as string) || ''
      payload.loanAmount = loanAmount
      payload.tenor = tenor
      payload.monthlyDeduction = monthlyDeduction
      payload.totalRepayment = totalRepayment
    }

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const resData = await res.json()

      if (!res.ok) {
        throw new Error(resData.error || 'Failed to submit application. Please try again.')
      }

      setSubmittedData({
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        company: payload.company,
        employer: payload.employer,
        mode,
        staff: payload.staff,
        location: payload.location,
        timeline: payload.timeline,
        purpose: payload.purpose,
        loanAmount: payload.loanAmount,
        tenor: payload.tenor,
        monthlyDeduction: payload.monthlyDeduction,
        totalRepayment: payload.totalRepayment,
      })
      setSubmitted(true)
      setShowModal(true)
    } catch (err: any) {
      setError(err?.message || 'Something went wrong while submitting. Please check your network and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setSubmitted(false)
    setShowModal(false)
    setError(null)
    setSubmittedData(null)
  }

  const whatsappInquiryUrl = `https://wa.me/2347086429380?text=${encodeURIComponent(
    submittedData
      ? `Hello Digiit, I just submitted an application on the website for ${submittedData.name} (${submittedData.email}) and would like fast follow-up assistance.`
      : 'Hello Digiit, I would like assistance with my application on the portal.'
  )}`

  const modalDetails: SuccessModalDetail[] = useMemo(() => {
    if (!submittedData) return []
    if (submittedData.mode === 'employer') {
      return [
        { label: 'Application Type', value: 'Employer Corporate Partnership' },
        ...(submittedData.company ? [{ label: 'Company Name', value: submittedData.company }] : []),
        { label: 'Contact Person', value: submittedData.name },
        { label: 'Official Work Email', value: submittedData.email },
        ...(submittedData.phone ? [{ label: 'Phone Number', value: submittedData.phone }] : []),
        ...(submittedData.staff ? [{ label: 'Staff Count', value: `${submittedData.staff} staff` }] : []),
        ...(submittedData.location ? [{ label: 'Headquarters', value: submittedData.location }] : []),
        ...(submittedData.timeline ? [{ label: 'Launch Timeline', value: submittedData.timeline }] : []),
        { label: 'Status', value: 'Received & In Review' },
      ]
    } else {
      return [
        { label: 'Application Type', value: 'Employee Workplace Loan' },
        { label: 'Applicant Name', value: submittedData.name },
        ...(submittedData.employer ? [{ label: 'Employer', value: submittedData.employer }] : []),
        { label: 'Requested Loan', value: formatNaira(submittedData.loanAmount || 350000) },
        {
          label: 'Repayment Tenor',
          value: `${submittedData.tenor || 6} Months (${formatNaira(submittedData.monthlyDeduction || 0)}/mo)`,
        },
        ...(submittedData.purpose ? [{ label: 'Loan Purpose', value: submittedData.purpose }] : []),
        { label: 'Email', value: submittedData.email },
        { label: 'Status', value: 'Received & In Review' },
      ]
    }
  }, [submittedData])

  return (
    <div className="apply-main-layout">
      {/* Form Box */}
      <div className="apply-form-box">
        {submitted ? (
          <div className="contact-success-box" role="alert">
            <div className="contact-success-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Application Received Successfully!</h3>
            <p>
              Thank you{submittedData?.name ? `, ${submittedData.name}` : ''}. We have received your {submittedData?.mode === 'employer' ? 'corporate partnership registration' : 'salary loan application'}. Our operations team in Victoria Island, Lagos will review your submission and contact you at <strong>{submittedData?.email}</strong> within 24 business hours.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn btn-primary"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.3rem' }}
              >
                View Confirmation Modal
              </button>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.3rem', background: '#25D366', color: '#fff', borderColor: '#25D366' }}
              >
                Chat with Onboarding on WhatsApp
              </a>
              <a
                href="tel:07086429380"
                className="btn btn-ghost"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.3rem' }}
              >
                Call desk: 07086429380
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-ghost"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.3rem' }}
              >
                Submit another application
              </button>
            </div>
          </div>
        ) : (
          <form className="contact-form" action="#" method="POST" onSubmit={handleSubmit}>
            {/* Honeypot: hidden from people, filled in by spam bots */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
              <label htmlFor="ap-website">Leave this field empty</label>
              <input id="ap-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            {/* Role Selection Radio Cards */}
            <div className="apply-tabs-wrap" role="radiogroup" aria-label="Select Application Type">
              <div
                role="radio"
                tabIndex={0}
                aria-checked={mode === 'employer'}
                className={`apply-tab-card ${mode === 'employer' ? 'active' : ''}`}
                onClick={() => { setMode('employer'); setError(null) }}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setMode('employer'); setError(null) } }}
              >
                <span className="apply-radio-circle">
                  {mode === 'employer' && <span className="apply-radio-dot" />}
                </span>
                <span className="apply-tab-label">I&apos;m an Employer/HR</span>
              </div>

              <div
                role="radio"
                tabIndex={0}
                aria-checked={mode === 'employee'}
                className={`apply-tab-card ${mode === 'employee' ? 'active' : ''}`}
                onClick={() => { setMode('employee'); setError(null) }}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setMode('employee'); setError(null) } }}
              >
                <span className="apply-radio-circle">
                  {mode === 'employee' && <span className="apply-radio-dot" />}
                </span>
                <span className="apply-tab-label">I am an Employee</span>
              </div>
            </div>

            {/* Subtext below selection cards */}
            <p className="apply-mode-subtext">
              {mode === 'employer'
                ? 'Join 40+ leading companies in Nigeria offering financial peace of mind with zero balance-sheet risk.'
                : 'Borrow against your verified salary. Deducted automatically on payday with no embarrassing calls or collateral.'}
            </p>

            {error && (
              <div
                role="alert"
                style={{
                  marginBottom: '1.5rem',
                  padding: '1rem 1.25rem',
                  background: '#fdf2f2',
                  border: '1px solid #f8b4b4',
                  borderRadius: '14px',
                  color: '#9b1c1c',
                  fontSize: '0.9rem',
                }}
              >
                {error}
              </div>
            )}

            {/* If Employee mode: Live Loan Calculator Box */}
            {mode === 'employee' && (
              <div className="apply-calc-card">
                <div className="apply-calc-top">
                  <span>Desired Loan Amount</span>
                  <div className="apply-calc-amount">{formatNaira(loanAmount)}</div>
                </div>

                <input
                  type="range"
                  min="30000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="apply-calc-slider"
                  aria-label="Loan amount slider"
                />

                <div className="apply-calc-range">
                  <span>₦30,000</span>
                  <span>₦5,000,000</span>
                  <span>₦10,000,000</span>
                </div>

                <span className="apply-tenor-label">Repayment Tenor</span>
                <div className="apply-tenor-chips">
                  {[3, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={`apply-tenor-chip ${tenor === m ? 'active' : ''}`}
                      onClick={() => setTenor(m)}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>

                <div className="apply-calc-summary">
                  <div className="apply-calc-summary-item">
                    <span>Monthly Deduction</span>
                    <strong className="highlight-red">{formatNaira(monthlyDeduction)}</strong>
                  </div>
                  <div className="apply-calc-summary-item">
                    <span>Interest Rate</span>
                    <strong>3.5% / month</strong>
                  </div>
                  <div className="apply-calc-summary-item">
                    <span>Collateral</span>
                    <strong style={{ color: '#0f7a4c' }}>Zero Required</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Form Fields for Employer */}
            {mode === 'employer' && (
              <>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="emp-company">
                      Company Name
                    </label>
                    <input
                      id="emp-company"
                      name="company"
                      type="text"
                      required
                      defaultValue={initialValues.company || ''}
                      autoComplete="organization"
                      placeholder="e.g. Sterling Logistics Ltd"
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="emp-name">
                      Your Full Name &amp; Title
                    </label>
                    <input
                      id="emp-name"
                      name="name"
                      type="text"
                      required
                      defaultValue={initialValues.name || ''}
                      autoComplete="name"
                      placeholder="e.g. Folake Sanusi (HR Director)"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="emp-email">
                      Official Work Email
                    </label>
                    <input
                      id="emp-email"
                      name="email"
                      type="email"
                      required
                      defaultValue={initialValues.email || ''}
                      autoComplete="email"
                      placeholder="e.g. f.sanusi@company.ng"
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="emp-phone">
                      Phone Number
                    </label>
                    <input
                      id="emp-phone"
                      name="phone"
                      type="tel"
                      required
                      defaultValue={initialValues.phone || ''}
                      autoComplete="tel"
                      placeholder="e.g. 0802 345 6789"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="emp-staff">
                      Total Number of Staff
                    </label>
                    <select id="emp-staff" name="staff" required className="contact-select" defaultValue="50–199">
                      <option value="10–49">10 – 49 staff</option>
                      <option value="50–199">50 – 199 staff</option>
                      <option value="200–499">200 – 499 staff</option>
                      <option value="500+">500+ staff</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="emp-location">
                      Headquarters State
                    </label>
                    <input
                      id="emp-location"
                      name="location"
                      type="text"
                      required
                      defaultValue={initialValues.location || ''}
                      placeholder="e.g. Lagos"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="emp-timeline">
                    Target Launch Timeline
                  </label>
                  <select id="emp-timeline" name="timeline" required className="contact-select" defaultValue="Immediately (Within 48 hours)">
                    <option value="Immediately (Within 48 hours)">Immediately (Within 48 hours)</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Next month">Next month</option>
                    <option value="Evaluating options for next quarter">Evaluating options for next quarter</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="emp-notes">Additional Questions or Notes</label>
                  <textarea
                    id="emp-notes"
                    name="notes"
                    rows={3}
                    placeholder="Share any specific requirements, current payroll date, or questions for our onboarding team..."
                    className="contact-textarea"
                  />
                </div>
              </>
            )}

            {/* Form Fields for Employee */}
            {mode === 'employee' && (
              <>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="usr-name">
                      Full Legal Name
                    </label>
                    <input
                      id="usr-name"
                      name="name"
                      type="text"
                      required
                      defaultValue={initialValues.name || ''}
                      autoComplete="name"
                      placeholder="e.g. Babatunde Adeyemi"
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="usr-email">
                      Work / Primary Email
                    </label>
                    <input
                      id="usr-email"
                      name="email"
                      type="email"
                      required
                      defaultValue={initialValues.email || ''}
                      autoComplete="email"
                      placeholder="e.g. b.adeyemi@work.com"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="usr-phone">
                      Mobile Phone Number
                    </label>
                    <input
                      id="usr-phone"
                      name="phone"
                      type="tel"
                      required
                      defaultValue={initialValues.phone || ''}
                      autoComplete="tel"
                      placeholder="e.g. 0803 123 4567"
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="usr-employer">
                      Current Employer Name
                    </label>
                    <input
                      id="usr-employer"
                      name="employer"
                      type="text"
                      required
                      defaultValue={initialValues.company || ''}
                      placeholder="e.g. Sterling Logistics Ltd"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="usr-salary">
                      Net Monthly Take-Home Salary
                    </label>
                    <select id="usr-salary" name="salaryRange" required className="contact-select" defaultValue="₦150,000 – ₦400,000">
                      <option value="₦70,000 – ₦150,000">₦70,000 – ₦150,000</option>
                      <option value="₦150,000 – ₦400,000">₦150,000 – ₦400,000</option>
                      <option value="₦400,000 – ₦1,000,000">₦400,000 – ₦1,000,000</option>
                      <option value="₦1,000,000+">₦1,000,000+</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="usr-purpose">
                      Primary Purpose of Loan
                    </label>
                    <select id="usr-purpose" name="purpose" required className="contact-select" defaultValue="School Fees">
                      <option value="School Fees">School Fees</option>
                      <option value="House Rent">House Rent</option>
                      <option value="Medical Expenses">Medical Expenses</option>
                      <option value="Vehicle / Home Repairs">Vehicle / Home Repairs</option>
                      <option value="Family Support">Family Support</option>
                      <option value="Other Emergency">Other Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="usr-partnerStatus">
                    Is your organization already on Digiit?
                  </label>
                  <select id="usr-partnerStatus" name="partnerStatus" required className="contact-select" defaultValue="Yes, my company is already registered">
                    <option value="Yes, my company is already registered">Yes, my company is already registered</option>
                    <option value="Not sure, please verify with my HR">Not sure, please verify with my HR</option>
                    <option value="No, please help partner my employer with Digiit">No, please help partner my employer with Digiit</option>
                  </select>
                </div>
              </>
            )}

            <button type="submit" disabled={submitting} className="contact-submit-btn">
              {submitting ? 'Submitting Application...' : mode === 'employer' ? 'Submit Corporate Application' : 'Submit Loan Request'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        )}
      </div>

      {/* Reusable Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={submittedData?.mode === 'employer' ? 'Corporate Application Received!' : 'Loan Request Submitted!'}
        badgeText={submittedData?.mode === 'employer' ? 'Corporate Partnership Registration' : 'Salary Advance Application'}
        subtitle={
          <span>
            Thank you{submittedData?.name ? `, ${submittedData.name}` : ''}. We have received your {submittedData?.mode === 'employer' ? 'corporate partnership registration' : 'salary loan application'}.
          </span>
        }
        details={modalDetails}
        notice={
          <span>
            Our operations desk in Victoria Island, Lagos will verify your submission and reach out to <strong>{submittedData?.email}</strong> within 24 business hours.
          </span>
        }
        whatsappUrl={whatsappInquiryUrl}
        whatsappText="Chat with Onboarding on WhatsApp"
        phoneHref="tel:07086429380"
        phoneText="Call Desk: 07086429380"
        secondaryText="Done"
        onSecondaryAction={() => setShowModal(false)}
      />
    </div>
  )
}
