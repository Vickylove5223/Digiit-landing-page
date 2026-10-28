'use client'
import { useState } from 'react'
import { LOGO_SRC } from '@/lib/logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)

  const close = () => {
    setOpen(false)
    setLegalOpen(false)
  }

  return (
    <header className="top">
      <div className="wrap nav">
        <a className="logo" href="/" aria-label="Digiit by FundiT, home">
          <img src={LOGO_SRC} alt="Digiit by FundiT" width={50} height={22} />
        </a>
        <ul id="menu" className={open ? 'open' : undefined}>
          <li><a href="/" onClick={close}>Home</a></li>
          <li><a href="/about" onClick={close}>About us</a></li>
          <li><a href="/contact" onClick={close}>Contact us</a></li>
          <li className={`nav-dropdown ${legalOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-btn"
              onClick={() => setLegalOpen((v) => !v)}
              aria-expanded={legalOpen}
              aria-haspopup="true"
            >
              Legal
              <svg className="nav-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 4.5L6 8L9.5 4.5" />
              </svg>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              <a href="/privacy" className="nav-dropdown-link" role="menuitem" onClick={close}>
                Privacy Policy
              </a>
              <a href="/cookies" className="nav-dropdown-link" role="menuitem" onClick={close}>
                Cookie Policy
              </a>
              <a href="/data-protection" className="nav-dropdown-link" role="menuitem" onClick={close}>
                Data Protection
              </a>
              <a href="/complaints" className="nav-dropdown-link" role="menuitem" onClick={close}>
                Complaints Policy
              </a>
            </div>
          </li>
          <li><a href="/blog" onClick={close}>Blog</a></li>
        </ul>
        <a className="btn" href="/apply">Apply now</a>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h16M3 11h16M3 16h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
