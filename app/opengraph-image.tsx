import { ImageResponse } from 'next/og'

export const alt = 'Digiit: Empower Your People. Power Your Business.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #27398a 0%, #1b2870 60%, #171230 100%)',
          fontFamily: 'sans-serif',
          padding: '64px',
        }}
      >
        {/* logo chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '10px 24px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: 32, height: 32, borderRadius: '50%',
              background: '#ef3932',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          />
          <span style={{ color: '#fff', fontSize: 26, fontWeight: 700, letterSpacing: '-0.5px' }}>
            Digiit
          </span>
        </div>

        <div
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            textAlign: 'center',
            maxWidth: 900,
            marginBottom: '28px',
            letterSpacing: '-1.5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span>Empower Your People.</span>
          <span>Power Your Business.</span>
        </div>

        <div
          style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 28,
            textAlign: 'center',
            maxWidth: 760,
            lineHeight: 1.45,
            marginBottom: '48px',
          }}
        >
          Instant salary-backed loans for your staff. Zero cost, zero risk to your organisation.
        </div>

        {/* pill badges */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['No collateral', 'Credited instantly', 'Zero cost to employer'].map(text => (
            <div
              key={text}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '999px',
                padding: '10px 22px',
                color: '#fff',
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
