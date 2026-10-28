import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features, { FeaturesEmployee, FeaturesHR } from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import SecurityCards from '@/components/SecurityCards'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PromoBanner from '@/components/PromoBanner'
import Mission from '@/components/Mission'
import Footer from '@/components/Footer'

export default function Home2() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <FeaturesEmployee />
        <Problem showCompare hideSlider />
        <FeaturesHR />
        <SecurityCards />
        <HowItWorks />
        <Mission />
        <Testimonials />
        <FAQ />
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
