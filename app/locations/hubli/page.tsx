import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone, LocationOn } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Hubli | IBBI Registered Valuer Hubballi',
  description:
    'Professional property valuation services in Hubli (Hubballi), Karnataka. IBBI Registered Valuer providing bank-approved property valuation reports for residential, commercial & land properties. 40,000+ valuations completed. Reports within 48 hours.',
  keywords: [
    'Property Valuation Hubli',
    'Property Valuation Hubballi',
    'IBBI Registered Valuer Hubli',
    'Bank Approved Valuer Hubli',
    'Property Valuation Services Hubli',
    'Land Valuation Hubli',
    'Real Estate Valuation Hubli',
    'Mortgage Valuation Hubli',
    'Property Appraiser Hubli',
    'Government Approved Valuer Hubli',
  ],
  alternates: {
    canonical: 'https://asbvaluers.com/locations/hubli',
  },
}

export default function HubliPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers - Hubli',
    description:
      'Professional property valuation services in Hubli (Hubballi), Karnataka by IBBI Registered Valuers.',
    url: 'https://asbvaluers.com/locations/hubli',
    telephone: ['+918880519265', '+919743307500'],
    email: 'asbvaluers@gmail.com',
    areaServed: {
      '@type': 'City',
      name: 'Hubli',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'ASB Valuers & Engineers',
      url: 'https://asbvaluers.com',
    },
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://asbvaluers.com/locations/karnataka',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Hubli',
        item: 'https://asbvaluers.com/locations/hubli',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best property valuer in Hubli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ASB Valuers & Engineers is a leading IBBI Registered Valuer serving Hubli with 40,000+ valuations completed. Our bank-approved reports are accepted by 30+ banks and financial institutions across Karnataka.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does property valuation cost in Hubli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property valuation fees in Hubli depend on the property type, size, and purpose of valuation. Contact ASB Valuers & Engineers at +91 8880519265 for a personalized quote. We offer competitive rates with bank-compliant reports delivered within 48 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide bank-approved property valuation in Hubli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ASB Valuers & Engineers provides bank-approved property valuation in Hubli. Our reports are accepted by SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and 30+ other banks and NBFCs.',
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations/karnataka' },
              { label: 'Hubli' },
            ]}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            Property Valuation Services in Hubli (Hubballi) | IBBI Registered Valuer
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              IBBI Registered Valuer Serving Hubli – Trusted by 30+ Banks
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional property valuation services in Hubli
              (Hubballi), Karnataka. Our IBBI Registered Valuer team delivers bank-compliant
              reports within 48 hours for residential, commercial, industrial, and land properties.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Phone />}
              href="tel:+918880519265"
              sx={{ mt: 2 }}
            >
              Call Now: +91 8880519265
            </Button>
          </Paper>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Professional Property Valuation in Hubli (Hubballi)
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Hubli (officially Hubballi) is one of the fastest-growing cities in North Karnataka,
                forming the twin-city of Hubballi-Dharwad. With rapid urbanization, expanding IT
                corridors, and significant industrial development, Hubli&apos;s real estate market
                has witnessed tremendous growth. Whether you need{' '}
                <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                  property valuation for loan approval
                </Link>
                , mortgage security assessment, or investment analysis, ASB Valuers & Engineers
                provides comprehensive{' '}
                <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                  land valuation
                </Link>{' '}
                and property appraisal services in Hubli.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Property Valuation Services We Offer in Hubli
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                      Residential property valuation
                    </Link>{' '}
                    – Apartments, villas, independent houses, row houses
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                      Commercial property valuation
                    </Link>{' '}
                    – Offices, retail spaces, shopping complexes, hotels
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                      Bank-approved loan security valuation
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                      Land rate and site rate evaluation
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                      Technical due diligence
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Industrial property and plant & machinery valuation
                  </Typography>
                </li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Why Hubli Property Owners Trust ASB Valuers
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                As an{' '}
                <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                  IBBI Registered Valuer
                </Link>{' '}
                with a strong presence in North Karnataka, we understand the Hubli real estate
                market intimately. Key areas we serve in Hubli include Vidyanagar, Keshwapur,
                Navanagar, Gokul Road, Unkal, Old Hubli, Deshpande Nagar, and surrounding
                areas. Our team combines local market knowledge with professional valuation
                standards to deliver accurate, bank-compliant reports.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Hubli Real Estate Market Overview
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Hubli is a major commercial hub in North Karnataka with diverse real estate
                development including residential apartments, commercial complexes, industrial
                zones, and IT parks. The city&apos;s strategic location on NH-4, growing infrastructure,
                and connectivity through Hubli Airport make it an attractive real estate destination.
                Property values in Hubli have seen steady appreciation, making accurate property
                valuation critical for buyers, sellers, and financial institutions.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Banks We Serve in Hubli
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Our{' '}
                <Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                  bank-approved valuation reports
                </Link>{' '}
                are accepted by all major banks operating in Hubli including State Bank of India,
                HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Canara Bank, Karnataka
                Bank, and numerous NBFCs. We maintain strict compliance with RBI guidelines and
                deliver reports within 48 hours.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Get Valuation in Hubli
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<Phone />}
                    href="tel:+918880519265"
                    sx={{ mb: 2 }}
                  >
                    +91 8880519265
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    href="mailto:asbvaluers@gmail.com"
                  >
                    Email Us
                  </Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Serving Hubli areas:</strong>
                  <br />
                  Vidyanagar, Keshwapur, Navanagar, Gokul Road, Unkal, Old Hubli, Deshpande
                  Nagar, and all surrounding areas.
                </Typography>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
                    Also Serving:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Dharwad', 'Belagavi', 'Bangalore', 'Mysore'].map((city) => (
                      <Link
                        key={city}
                        href={`/locations/${city.toLowerCase()}`}
                        style={{
                          fontSize: '0.8rem',
                          color: '#1976d2',
                          textDecoration: 'underline',
                        }}
                      >
                        {city}
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              mt: 6,
              bgcolor: 'secondary.main',
              color: 'white',
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Need Property Valuation in Hubli?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              Contact ASB Valuers & Engineers today for professional IBBI Registered Valuer
              services in Hubli. We deliver bank-compliant property valuation reports within 48
              hours. Call us at +91 8880519265 or email asbvaluers@gmail.com.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/#contact"
              sx={{ mt: 2 }}
            >
              Request Valuation Now
            </Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
