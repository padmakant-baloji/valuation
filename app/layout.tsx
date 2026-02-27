import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://asbvaluers.com'),
  title: {
    default: 'IBBI Registered Valuer Belagavi | Bank Approved Valuer Karnataka',
    template: '%s | ASB Valuers & Engineers',
  },
  description: 'IBBI Registered Valuer in Belagavi & Karnataka. Bank-approved property valuation services. 12,000+ valuations, 25+ banks served. Get bank-compliant reports within 48 hours.',
  keywords: [
    'IBBI Registered Valuer Belagavi',
    'Bank Approved Valuer Karnataka',
    'Property Valuation Belgaum',
    'Government Approved Valuer Karnataka',
    'Technical Due Diligence Consultant Karnataka',
    'Real Estate Valuation Services Karnataka',
    'Mortgage Valuation Services Belagavi',
    'Loan Security Valuation',
    'Project Feasibility Consultant Karnataka',
    'Residual Land Valuation Expert',
    'IBBI Registered Valuer near me',
    'Bank compliant property valuation report',
    'Property valuation for loan approval Belagavi',
  ],
  authors: [{ name: 'ASB Valuers & Engineers' }],
  creator: 'ASB Valuers & Engineers',
  publisher: 'ASB Valuers & Engineers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://asbvaluers.com',
    siteName: 'ASB Valuers & Engineers',
    title: 'IBBI Registered Valuer Belagavi | Bank Approved Valuer Karnataka',
    description: 'Professional IBBI Registered Valuer in Belagavi & Karnataka. Bank-approved property valuation services. Trusted by 25+ Banks & Financial Institutions.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ASB Valuers & Engineers - IBBI Registered Valuer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBBI Registered Valuer Belagavi | Bank Approved Valuer Karnataka',
    description: 'Professional IBBI Registered Valuer in Belagavi & Karnataka. Bank-approved property valuation services.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://asbvaluers.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://asbvaluers.com/#organization',
    name: 'ASB Valuers & Engineers',
    alternateName: 'ASB Valuers',
    description: 'IBBI Registered Valuer and Engineering Consultancy firm providing property valuation, technical due diligence, and engineering services in Belagavi and Karnataka.',
    url: 'https://asbvaluers.com',
    logo: 'https://asbvaluers.com/logo.png',
    image: 'https://asbvaluers.com/logo.png',
    telephone: ['+918880519265', '+919743307500'],
    email: 'asbvaluers@gmail.com',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'One City Home Gardens Apartment, Flat No. B-504, 5th Floor, Good Shed Road, Shastri Nagar',
        addressLocality: 'Belagavi',
        addressRegion: 'Karnataka',
        postalCode: '590001',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Behind Union Bank, Shetji Plots',
        addressLocality: 'Kudachi',
        addressRegion: 'Karnataka',
        postalCode: '591311',
        addressCountry: 'IN',
      },
    ],
    geo: [
      {
        '@type': 'GeoCoordinates',
        latitude: '15.8497',
        longitude: '74.4977',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Belagavi',
      },
      {
        '@type': 'City',
        name: 'Kudachi',
      },
      {
        '@type': 'State',
        name: 'Karnataka',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '15.8497',
        longitude: '74.4977',
      },
      geoRadius: {
        '@type': 'Distance',
        name: 'Karnataka State',
      },
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Amar Bale',
        jobTitle: 'IBBI Registered Valuer',
        description: 'B.E (Civil Engineering), MBA, IBBI Registered Valuer, Chartered Engineer (IEI)',
      },
      {
        '@type': 'Person',
        name: 'Rajani V K',
        jobTitle: 'IOV Approved Valuer',
        description: 'M.Tech (Construction Technology) – VTU Gold Medalist, IOV Approved Valuer',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    sameAs: [],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://asbvaluers.com/#organization',
    name: 'ASB Valuers & Engineers',
    url: 'https://asbvaluers.com',
    logo: 'https://asbvaluers.com/logo.png',
    description: 'IBBI Registered Valuer and Engineering Consultancy firm',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One City Home Gardens Apartment, Flat No. B-504, 5th Floor, Good Shed Road, Shastri Nagar',
      addressLocality: 'Belagavi',
      addressRegion: 'Karnataka',
      postalCode: '590001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+918880519265',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Kannada', 'Hindi'],
    },
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
