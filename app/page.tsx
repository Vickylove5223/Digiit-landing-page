import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import { FeaturesEmployee } from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CompanyBenefits from '@/components/CompanyBenefits'
import StaffLoanApp from '@/components/StaffLoanApp'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { faqItems } from '@/lib/faq'

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd} />
      <Header />
      <main id="top">
        <Hero variant="split" />
        <FeaturesEmployee hidePanel />
        <Problem showCompare hideSlider />
        <StaffLoanApp />
        <CompanyBenefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
