import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features, { FeaturesEmployee, FeaturesHR } from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import SecurityCards from '@/components/SecurityCards'
import StaffLoanApp from '@/components/StaffLoanApp'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PromoBanner from '@/components/PromoBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero variant="split" />
        <FeaturesEmployee hidePanel />
        <Problem showCompare hideSlider />
        <StaffLoanApp />
        <FeaturesHR />
        <SecurityCards />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
