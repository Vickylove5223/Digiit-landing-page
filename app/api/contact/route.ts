import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email address, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    console.log('[Contact Form Submission Received]', {
      name: `${firstName} ${lastName || ''}`.trim(),
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      message,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Your message has been received successfully.',
    })
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
