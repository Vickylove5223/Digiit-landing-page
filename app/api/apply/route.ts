import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { mode } = body

    if (!mode || (mode !== 'employer' && mode !== 'employee')) {
      return NextResponse.json(
        { error: 'Invalid application mode selected.' },
        { status: 400 }
      )
    }

    if (mode === 'employer') {
      const { company, name, email, phone, staff, location, timeline, notes } = body

      if (!company || !name || !email || !phone) {
        return NextResponse.json(
          { error: 'Company name, contact name, work email, and phone number are required.' },
          { status: 400 }
        )
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Please provide a valid work email address.' },
          { status: 400 }
        )
      }

      console.log('[Corporate Application Received]', {
        type: 'employer',
        company,
        contactName: name,
        email,
        phone,
        staffCount: staff || '50–199',
        location: location || 'Lagos',
        timeline: timeline || 'Immediately (Within 48 hours)',
        notes: notes || 'None',
        receivedAt: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Your corporate partnership application has been received successfully.',
        data: {
          mode: 'employer',
          company,
          name,
          email,
        },
      })
    } else {
      const {
        name,
        email,
        phone,
        employer,
        salaryRange,
        loanAmount,
        tenor,
        purpose,
        partnerStatus,
      } = body

      if (!name || !email || !phone || !employer) {
        return NextResponse.json(
          { error: 'Full legal name, email, phone number, and employer name are required.' },
          { status: 400 }
        )
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Please provide a valid email address.' },
          { status: 400 }
        )
      }

      console.log('[Employee Loan Application Received]', {
        type: 'employee',
        fullName: name,
        email,
        phone,
        employer,
        salaryRange: salaryRange || '₦150,000 – ₦400,000',
        loanAmount: loanAmount || 350000,
        tenor: tenor || 6,
        purpose: purpose || 'School Fees',
        partnerStatus: partnerStatus || 'Yes, my company is already registered',
        receivedAt: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Your salary loan request has been received successfully.',
        data: {
          mode: 'employee',
          name,
          email,
          employer,
          loanAmount: loanAmount || 350000,
          tenor: tenor || 6,
        },
      })
    }
  } catch (error) {
    console.error('[Application Form Error]', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your application. Please try again.' },
      { status: 500 }
    )
  }
}
