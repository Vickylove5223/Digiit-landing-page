import { NextResponse } from 'next/server'

const MAX_BODY_BYTES = 10_000
const RATE_LIMIT = 5 // submissions
const RATE_WINDOW_MS = 10 * 60 * 1000 // per 10 minutes per IP

const hits = new Map<string, number[]>()

/**
 * Best-effort per-instance rate limit. On serverless hosting each instance keeps
 * its own memory, so pair this with a platform firewall rule (e.g. Vercel WAF
 * rate limiting on /api/*) for a hard guarantee.
 */
function isRateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) {
    hits.forEach((v, k) => {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k)
    })
  }
  return recent.length > RATE_LIMIT
}

function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for')
  return (fwd?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim()
}

function fail(error: string, status: number) {
  return NextResponse.json({ error }, { status, headers: { 'Cache-Control': 'no-store' } })
}

/**
 * Shared guard for form endpoints: same-origin check, JSON content type,
 * body size cap, rate limit and honeypot. Returns the parsed body or a response.
 */
export async function guardFormRequest(
  request: Request,
  scope: string,
): Promise<{ body: Record<string, unknown> } | { response: NextResponse }> {
  const origin = request.headers.get('origin')
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  if (!origin || !host || new URL(origin).host !== host) {
    return { response: fail('Forbidden.', 403) }
  }

  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return { response: fail('Unsupported content type.', 415) }
  }

  if (isRateLimited(`${scope}:${clientIp(request)}`)) {
    return { response: fail('Too many submissions. Please wait a few minutes and try again.', 429) }
  }

  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return { response: fail('Submission is too large.', 413) }
  }

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return { response: fail('Invalid request.', 400) }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { response: fail('Invalid request.', 400) }
  }

  // Honeypot: real users never see or fill this field.
  if (typeof (body as Record<string, unknown>).website === 'string' && (body as Record<string, string>).website !== '') {
    return { response: NextResponse.json({ success: true }) }
  }

  return { body: body as Record<string, unknown> }
}

/** Coerce to a trimmed string, strip control characters, cap length. */
export function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength)
}

export function cleanNumber(value: unknown, min: number, max: number): number | null {
  const n = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(n) || n < min || n > max) return null
  return n
}

export function oneOf<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value) ? (value as T) : null
}

export const EMAIL_RE = /^[^\s@<>()[\]\,;:"]{1,64}@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/
export const PHONE_RE = /^\+?[0-9\s()-]{7,20}$/

/** Mask personal data before it reaches logs. */
export function maskEmail(email: string): string {
  const [user, domain] = email.split('@')
  return `${user.slice(0, 2)}***@${domain ?? ''}`
}

export function badRequest(error: string) {
  return fail(error, 400)
}
