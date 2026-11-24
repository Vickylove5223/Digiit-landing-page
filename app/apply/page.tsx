import { pageMeta } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApplicationForm from '@/components/ApplicationForm'

export const metadata = pageMeta({
  title: 'Apply Now: Workplace Loans for Employees & Employer Partnership',
  description:
    'Apply for a salary-backed loan or register your organization as a corporate partner with Digiit. Fast, confidential, and 100% compliant.',
  path: '/apply',
  ogTitle: 'Apply Now | Digiit',
  ogDescription:
    'Instant salary-backed credit for employees and zero-liability partnership for Nigerian employers.',
})

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main id="top" className="apply-page-main">
        {/* Hero Section */}
        <section className="apply-hero-section">
          <div className="wrap">
            <div className="apply-hero-content">
              <h1 className="apply-hero-title" style={{ color: '#ffffff' }}>
                Start your application.
              </h1>

              <p className="apply-hero-lead">
                Fill in the details below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Dual Mode Form Section */}
        <section style={{ padding: '0 0 clamp(4rem, 6vw, 6rem)', backgroundColor: '#ffffff' }}>
          <div className="wrap">
            <ApplicationForm />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
