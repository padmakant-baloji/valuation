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
import FAQSection from '@/components/FAQSection'
import ContentSection from '@/components/ContentSection'
import GoogleMapSection from '@/components/GoogleMapSection'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IBBI Registered Valuer Belagavi | Bank Approved Valuer Karnataka',
  description: 'IBBI Registered Valuer in Belagavi & Karnataka. Bank-approved property valuation services. 12,000+ valuations, 25+ banks served. Get bank-compliant reports within 48 hours.',
  keywords: [
    'IBBI Registered Valuer Belagavi',
    'Bank Approved Valuer Karnataka',
    'Property Valuation Belgaum',
    'Government Approved Valuer Karnataka',
    'Technical Due Diligence Consultant Karnataka',
  ],
}

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an IBBI Registered Valuer and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An IBBI (Insolvency and Bankruptcy Board of India) Registered Valuer is a professional certified by the IBBI to conduct property valuations. IBBI registration is mandatory for valuations used in insolvency proceedings, mergers, acquisitions, and often required by banks and financial institutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to get a bank-compliant property valuation report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically deliver bank-compliant property valuation reports within 48 hours of property inspection. For urgent requirements, we offer expedited services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which banks and financial institutions accept your valuation reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our valuation reports are accepted by 25+ major banks and financial institutions including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and numerous NBFCs across Karnataka.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://asbvaluers.com',
      },
    ],
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <ContentSection />
        <WhyChooseSection />
        <PresenceSection />
        <TestimonialsSection />
        <FAQSection />
        <GoogleMapSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
