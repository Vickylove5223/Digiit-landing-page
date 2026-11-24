import { NextResponse } from 'next/server'
import {
  guardFormRequest,
  cleanText,
  cleanNumber,
  oneOf,
  EMAIL_RE,
  PHONE_RE,
  maskEmail,
  badRequest,
} from '@/lib/security'

const STAFF = ['10–49', '50–199', '200–499', '500+'] as const
const TIMELINE = [
  'Immediately (Within 48 hours)',
  'Within 2 weeks',
  'Next month',
  'Evaluating options for next quarter',
] as const
const SALARY = ['₦70,000 – ₦150,000', '₦150,000 – ₦400,000', '₦400,000 – ₦1,000,000', '₦1,000,000+'] as const
const PURPOSE = [
  'School Fees',
  'House Rent',
  'Medical Expenses',
  'Vehicle / Home Repairs',
  'Family Support',
  'Other Emergency',
] as const
const PARTNER = [
  'Yes, my company is already registered',
  'Not sure, please verify with my HR',
  'No, please help partner my employer with Digiit',
] as const

export async function POST(request: Request) {
  try {
    const guarded = await guardFormRequest(request, 'apply')
    if ('response' in guarded) return guarded.response
    const { body } = guarded

    const mode = oneOf(body.mode, ['employer', 'employee'] as const)
    if (!mode) return badRequest('Invalid application mode selected.')

    const name = cleanText(body.name, 120)
    const email = cleanText(body.email, 254)
    const phone = cleanText(body.phone, 20)

    if (mode === 'employer') {
      const company = cleanText(body.company, 160)
      const location = cleanText(body.location, 120)
      const notes = cleanText(body.notes, 2000)
      const staff = oneOf(body.staff, STAFF) ?? '50–199'
      const timeline = oneOf(body.timeline, TIMELINE) ?? 'Immediately (Within 48 hours)'

      if (!company || !name || !email || !phone) {
        return badRequest('Company name, contact name, work email, and phone number are required.')
      }
      if (!EMAIL_RE.test(email)) return badRequest('Please provide a valid work email address.')
      if (!PHONE_RE.test(phone)) return badRequest('Please provide a valid phone number.')

      // TODO: deliver to CRM / email inbox. Until then, log without personal data.
      console.log('[Corporate Application Received]', {
        email: maskEmail(email),
        staff,
        timeline,
        hasLocation: Boolean(location),
        hasNotes: Boolean(notes),
        receivedAt: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Your corporate partnership application has been received successfully.',
        data: { mode, company, name, email },
      })
    }

    const employer = cleanText(body.employer, 160)
    const salaryRange = oneOf(body.salaryRange, SALARY) ?? '₦150,000 – ₦400,000'
    const purpose = oneOf(body.purpose, PURPOSE) ?? 'Other Emergency'
    const partnerStatus = oneOf(body.partnerStatus, PARTNER) ?? 'Not sure, please verify with my HR'
    const loanAmount = cleanNumber(body.loanAmount, 10_000, 10_000_000)
    const tenor = cleanNumber(body.tenor, 1, 24)

    if (!name || !email || !phone || !employer) {
      return badRequest('Full legal name, email, phone number, and employer name are required.')
    }
    if (!EMAIL_RE.test(email)) return badRequest('Please provide a valid email address.')
    if (!PHONE_RE.test(phone)) return badRequest('Please provide a valid phone number.')
    if (loanAmount === null || tenor === null) return badRequest('Please choose a valid loan amount and tenor.')

    // TODO: deliver to CRM / email inbox. Until then, log without personal data.
    console.log('[Employee Loan Application Received]', {
      email: maskEmail(email),
      salaryRange,
      loanAmount,
      tenor,
      purpose,
      partnerStatus,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Your salary loan request has been received successfully.',
      data: { mode, name, email, employer, loanAmount, tenor },
    })
  } catch (error) {
    console.error('[Application Form Error]', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your application. Please try again.' },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } })
}
