'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface SuccessModalDetail {
  label: string
  value: string | number | React.ReactNode
}

export interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: React.ReactNode
  badgeText?: string
  details?: SuccessModalDetail[]
  notice?: React.ReactNode
  whatsappUrl?: string
  whatsappText?: string
  phoneHref?: string
  phoneText?: string
  secondaryText?: string
  onSecondaryAction?: () => void
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  subtitle,
  badgeText = 'Submission Received',
  details = [],
  notice,
  whatsappUrl,
  whatsappText = 'Chat with Support on WhatsApp',
  phoneHref = 'tel:07086429380',
  phoneText = 'Call 07086429380',
  secondaryText = 'Done',
  onSecondaryAction,
}: SuccessModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock scroll & handle ESC key when open
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !mounted) return null

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  function handleSecondaryClick() {
    if (onSecondaryAction) {
      onSecondaryAction()
    } else {
      onClose()
    }
  }

  return createPortal(
    <div
      className="success-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="success-modal-backdrop" aria-hidden="true" />

      <div className="success-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top-Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="success-modal-close-btn"
          aria-label="Close success dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Success Icon */}
        <div className="success-modal-icon-wrap" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Status Badge */}
        {badgeText && (
          <div className="success-modal-badge">
            <span className="success-modal-badge-dot" />
            <span>{badgeText}</span>
          </div>
        )}

        {/* Modal Title */}
        <h3 id="success-modal-title" className="success-modal-title">
          {title}
        </h3>

        {/* Subtitle / Descriptive Text */}
        {subtitle && <p className="success-modal-sub">{subtitle}</p>}

        {/* Submitted Data Summary Card */}
        {details.length > 0 && (
          <div className="success-modal-details-card">
            {details.map((item, idx) => (
              <div key={idx} className="success-modal-detail-row">
                <span className="success-modal-detail-label">{item.label}</span>
                <span className="success-modal-detail-value">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Reassurance Notice */}
        {notice ? (
          <div className="success-modal-note">{notice}</div>
        ) : (
          <div className="success-modal-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              Your information is securely encrypted. Our operations desk in Victoria Island, Lagos reviews requests promptly during office hours (Mon–Fri, 8am–5pm).
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="success-modal-actions">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="success-modal-btn-wa"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.34 7.35 9.04 7.42 8.78 7.7C8.52 7.97 7.79 8.66 7.79 10.05C7.79 11.45 8.81 12.79 8.95 12.98C9.09 13.17 11.08 16.24 14.13 17.56C14.86 17.87 15.42 18.06 15.87 18.2C16.6 18.43 17.26 18.4 17.78 18.32C18.37 18.23 19.57 17.59 19.82 16.88C20.08 16.18 20.08 15.58 20 15.45C19.93 15.33 19.74 15.26 19.46 15.12C19.18 14.98 17.82 14.31 17.57 14.22C17.31 14.13 17.13 14.08 16.94 14.36C16.76 14.64 16.23 15.26 16.07 15.45C15.91 15.63 15.75 15.66 15.47 15.52C15.19 15.38 14.29 15.08 13.22 14.13C12.39 13.39 11.83 12.47 11.69 12.23C11.55 11.99 11.67 11.85 11.81 11.71C11.94 11.58 12.1 11.37 12.24 11.21C12.38 11.05 12.43 10.93 12.52 10.75C12.61 10.56 12.57 10.4 12.5 10.26C12.43 10.12 11.88 8.76 11.65 8.21C11.42 7.68 11.2 7.75 11.03 7.74C10.88 7.74 10.7 7.73 10.51 7.73C10.33 7.73 10.03 7.8 9.77 8.08C9.53 8.35 9.53 7.35 9.53 7.35Z" />
              </svg>
              <span>{whatsappText}</span>
            </a>
          )}

          <div className="success-modal-btn-row">
            {phoneHref && (
              <a href={phoneHref} className="success-modal-btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{phoneText}</span>
              </a>
            )}

            <button
              type="button"
              onClick={handleSecondaryClick}
              className="success-modal-btn-secondary"
              style={{ background: '#12163a', color: '#ffffff', borderColor: '#12163a' }}
            >
              <span>{secondaryText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
