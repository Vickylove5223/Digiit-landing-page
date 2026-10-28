import Link from 'next/link'

interface LegalNavProps {
  active: 'privacy' | 'cookies' | 'data-protection' | 'complaints'
}

const LEGAL_LINKS = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    href: '/privacy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    href: '/cookies',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: 'data-protection',
    title: 'Data Protection',
    href: '/data-protection',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 'complaints',
    title: 'Complaints Policy',
    href: '/complaints',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

export default function LegalNav({ active }: LegalNavProps) {
  return (
    <aside className="legal-sidebar" aria-label="Legal documents navigation">
      <div className="legal-sidebar-title">Legal Documents</div>
      <ul className="legal-nav-list">
        {LEGAL_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={`legal-nav-link ${active === link.id ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="legal-sidebar-contact">
        <p><strong>Compliance &amp; Inquiries:</strong></p>
        <p style={{ marginTop: '0.2rem' }}>FundiT Finance Limited</p>
        <p style={{ marginTop: '0.1rem', fontSize: '0.75rem', color: '#6b7280' }}>Victoria Island, Lagos</p>
        <a href="mailto:compliance@digiit.ng">compliance@digiit.ng</a>
        <a href="mailto:dpo@digiit.ng">dpo@digiit.ng</a>
      </div>
    </aside>
  )
}
