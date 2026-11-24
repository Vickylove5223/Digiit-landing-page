import { NextResponse } from 'next/server'
import { guardFormRequest, cleanText, EMAIL_RE, PHONE_RE, maskEmail, badRequest } from '@/lib/security'

export async function POST(request: Request) {
  try {
    const guarded = await guardFormRequest(request, 'contact')
    if ('response' in guarded) return guarded.response
    const { body } = guarded

    const firstName = cleanText(body.firstName, 80)
    const lastName = cleanText(body.lastName, 80)
    const email = cleanText(body.email, 254)
    const phone = cleanText(body.phone, 20)
    const company = cleanText(body.company, 120)
    const message = cleanText(body.message, 3000)

    if (!firstName || !email || !message) {
      return badRequest('First name, email address, and message are required.')
    }
    if (!EMAIL_RE.test(email)) return badRequest('Please enter a valid email address.')
    if (phone && !PHONE_RE.test(phone)) return badRequest('Please enter a valid phone number.')

    // TODO: deliver to CRM / email inbox. Until then, log without personal data.
    console.log('[Contact Form Submission Received]', {
      email: maskEmail(email),
      hasPhone: Boolean(phone),
      hasCompany: Boolean(company),
      messageLength: message.length,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: 'Your message has been received successfully.' })
  } catch (error) {
    console.error('[Contact Form Error]', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } })
}
