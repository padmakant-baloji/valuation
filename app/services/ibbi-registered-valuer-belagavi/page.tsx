import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'IBBI Registered Valuer in Belagavi | Bank Approved Property Valuation',
  description: 'Professional IBBI Registered Valuer in Belagavi, Karnataka. Bank-approved property valuation services. 12,000+ valuations completed. Get IBBI compliant reports within 48 hours.',
  keywords: [
    'IBBI Registered Valuer Belagavi',
    'IBBI Registered Valuer Belgaum',
    'Bank Approved Valuer Belagavi',
    'Property Valuation Belagavi',
    'IBBI Registered Valuer near me',
  ],
}

export default function IBBIValuerPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Property Valuation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ASB Valuers & Engineers',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belagavi',
        addressRegion: 'Karnataka',
        postalCode: '590001',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Belagavi',
    },
    description: 'IBBI Registered Valuer services in Belagavi, Karnataka. Professional property valuation for banks, NBFCs, and financial institutions.',
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            IBBI Registered Valuer in Belagavi | Bank Approved Property Valuation
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Get Bank-Compliant Property Valuation Reports Within 48 Hours
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers is an IBBI Registered Valuer firm in Belagavi, Karnataka,
              providing professional property valuation services trusted by 25+ banks and financial
              institutions. Our IBBI registration ensures all reports meet the highest regulatory
              standards.
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
                Why Choose IBBI Registered Valuer Services in Belagavi?
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                IBBI (Insolvency and Bankruptcy Board of India) registration is mandatory for
                property valuations used in insolvency proceedings, mergers, acquisitions, and
                often required by banks and NBFCs. As an IBBI Registered Valuer in Belagavi, ASB
                Valuers & Engineers ensures all valuation reports meet regulatory compliance and
                are accepted by major financial institutions.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Our IBBI Registered Valuer Credentials
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    IBBI Registered Valuer – India (Amar Bale)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Chartered Engineer (IEI) certification
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    9+ years of professional experience
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    12,000+ completed property valuations
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Trusted by 25+ banks and financial institutions
                  </Typography>
                </li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Property Valuation Services in Belagavi
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We provide comprehensive property valuation services for residential properties,
                commercial buildings, retail spaces, hotels, industrial assets, and vacant land.
                Our services are designed to meet bank compliance requirements and expedite loan
                approval processes.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Bank-Approved Valuation Reports
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Our IBBI registered valuation reports are accepted by all major banks including
                State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and
                numerous NBFCs. We maintain strict compliance with RBI guidelines and
                bank-specific requirements.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Quick Contact
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
                  <strong>Belagavi Office:</strong>
                  <br />
                  One City Home Gardens Apartment,
                  <br />
                  Flat No. B-504, 5th Floor,
                  <br />
                  Good Shed Road, Shastri Nagar,
                  <br />
                  Belagavi – 590001
                </Typography>
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
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              Contact ASB Valuers & Engineers today for professional IBBI Registered Valuer
              services in Belagavi. We deliver bank-compliant reports within 48 hours.
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
