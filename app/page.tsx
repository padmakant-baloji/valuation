import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustSection from '@/components/TrustSection'
import ClientsSection from '@/components/ClientsSection'
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
  description: 'Professional property valuation, real estate valuation, land rate assessment, site rate evaluation, and technical reports in Karnataka. IBBI Registered Valuer in Belagavi. Bank-approved property valuation services. 40,000+ valuations, 30+ banks served. Get bank-compliant reports within 48 hours.',
  keywords: [
    'Valuation',
    'Property valuation',
    'Land rate',
    'Real estate valuation',
    'Site rate',
    'Apprises',
    'Technical report',
    'My property value',
    'IBBI Registered Valuer Belagavi',
    'Bank Approved Valuer Karnataka',
    'Property Valuation Belgaum',
    'Government Approved Valuer Karnataka',
    'Technical Due Diligence Consultant Karnataka',
    'Property valuation services Karnataka',
    'Land valuation Belagavi',
    'Site valuation report',
    'Property appraisal services',
    'Real estate appraiser Karnataka',
    'Property value assessment',
    'Land rate assessment Karnataka',
    'Site rate evaluation',
    'Property technical report',
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
          text: 'Our valuation reports are accepted by 30+ major banks and financial institutions including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and numerous NBFCs across Karnataka.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I find out my property value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To determine your property value, we conduct comprehensive property valuation and real estate valuation assessments. Our IBBI Registered Valuers perform on-site inspections, analyze comparable properties, assess land rate and site rate factors, review market trends, and prepare detailed valuation reports.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is land rate and how is it determined?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Land rate refers to the per-square-foot or per-square-meter value of land in a specific location. Our land rate assessment considers factors such as location, accessibility, infrastructure development, zoning regulations, market demand, comparable land sales, and development potential.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a technical report for property valuation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our technical report for property valuation includes structural assessment, building condition evaluation, compliance verification with building codes and regulations, legal-technical risk analysis, construction quality review, and recommendations. Technical reports are essential for banks and financial institutions.',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Property Valuation Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ASB Valuers & Engineers',
      url: 'https://asbvaluers.com',
    },
    areaServed: {
      '@type': 'State',
      name: 'Karnataka',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Valuation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Valuation',
            description: 'Professional property valuation services for residential, commercial, and industrial properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Valuation',
            description: 'Comprehensive real estate valuation and appraisal services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Land Rate Assessment',
            description: 'Accurate land rate assessment and evaluation services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site Rate Evaluation',
            description: 'Professional site rate evaluation and assessment',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Appraisal',
            description: 'Expert property appraisal and valuation services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Report',
            description: 'Comprehensive technical reports for property valuation and due diligence',
          },
        },
      ],
    },
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
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ClientsSection />
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
