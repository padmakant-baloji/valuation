import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustSection from '@/components/TrustSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import PresenceSection from '@/components/PresenceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <PresenceSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
