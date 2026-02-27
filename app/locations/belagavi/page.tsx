import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone, LocationOn } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation Services in Belagavi | IBBI Registered Valuer Belgaum',
  description: 'Professional property valuation services in Belagavi (Belgaum), Karnataka. IBBI Registered Valuer. Bank-approved reports. Serving Belagavi with 12,000+ valuations completed.',
  keywords: [
    'Property Valuation Belagavi',
    'Property Valuation Belgaum',
    'IBBI Registered Valuer Belagavi',
    'Bank Approved Valuer Belagavi',
    'Property Valuation Services Belagavi',
  ],
}

export default function BelagaviPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers - Belagavi Office',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One City Home Gardens Apartment, Flat No. B-504, 5th Floor, Good Shed Road, Shastri Nagar',
      addressLocality: 'Belagavi',
      addressRegion: 'Karnataka',
      postalCode: '590001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.8497',
      longitude: '74.4977',
    },
    telephone: ['+918880519265', '+919743307500'],
    email: 'asbvaluers@gmail.com',
    url: 'https://asbvaluers.com/locations/belagavi',
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
            Property Valuation Services in Belagavi (Belgaum), Karnataka
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              IBBI Registered Valuer in Belagavi - Trusted by 25+ Banks
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional property valuation services in Belagavi
              (Belgaum), Karnataka. Our IBBI Registered Valuer team delivers bank-compliant
              reports within 48 hours, serving banks, NBFCs, builders, and property owners across
              Belagavi.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Phone />}
              href="tel:+918880519265"
              sx={{ mt: 2 }}
            >
              Call Belagavi Office: +91 8880519265
            </Button>
          </Paper>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Professional Property Valuation in Belagavi
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Belagavi (also known as Belgaum) is a major city in Karnataka with growing real
                estate development. Whether you need property valuation for loan approval, mortgage
                security, or investment assessment, ASB Valuers & Engineers provides
                comprehensive valuation services in Belagavi.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Our Belagavi Office Location
              </Typography>
              <Box sx={{ mb: 3, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  <LocationOn sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                  <strong>One City Home Gardens Apartment</strong>
                  <br />
                  Flat No. B-504, 5th Floor
                  <br />
                  Good Shed Road, Shastri Nagar
                  <br />
                  Belagavi – 590001, Karnataka, India
                </Typography>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Property Valuation Services in Belagavi
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Residential property valuation
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Commercial building valuation
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Bank-approved loan security valuation
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Technical due diligence
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Project feasibility studies
                  </Typography>
                </li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Why Choose ASB Valuers & Engineers in Belagavi?
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Local presence in Belagavi with easy accessibility
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    IBBI Registered Valuer credentials
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Reports accepted by all major banks
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Fast turnaround - reports within 48 hours
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    12,000+ valuations completed
                  </Typography>
                </li>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Contact Belagavi Office
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
                <Box
                  sx={{
                    width: '100%',
                    height: 250,
                    borderRadius: 2,
                    overflow: 'hidden',
                    mt: 2,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1234567890!2d74.4977!3d15.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzU5LjAiTiA3NMKwMjknNTEuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ASB Valuers & Engineers Belagavi Office"
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
