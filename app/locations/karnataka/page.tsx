import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'

export const metadata = {
  title: 'Property Valuation Services Across Karnataka | IBBI Registered Valuer',
  description: 'Professional property valuation services across Karnataka. IBBI Registered Valuer serving Belagavi, Bangalore, Hubli, Mysore, Mangalore, and all major cities. Bank-approved reports.',
  keywords: [
    'Property Valuation Karnataka',
    'IBBI Registered Valuer Karnataka',
    'Bank Approved Valuer Karnataka',
    'Property Valuation Services Karnataka',
    'Real Estate Valuation Karnataka',
  ],
}

export default function KarnatakaPage() {
  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers',
    serviceArea: {
      '@type': 'State',
      name: 'Karnataka',
    },
    areaServed: [
      { '@type': 'City', name: 'Belagavi' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Hubli' },
      { '@type': 'City', name: 'Dharwad' },
      { '@type': 'City', name: 'Mysore' },
      { '@type': 'City', name: 'Mangalore' },
    ],
  }

  return (
    <>
      <Script
        id="service-area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
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
            Property Valuation Services Across Karnataka | IBBI Registered Valuer
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Serving All Major Cities in Karnataka
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional property valuation and engineering
              consultancy services across Karnataka. With offices in Belagavi and Kudachi, we serve
              clients in Bangalore, Hubli, Dharwad, Mysore, Mangalore, and throughout the state.
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
                Property Valuation Services Across Karnataka
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Karnataka is one of India's fastest-growing states with significant real estate
                development across major cities. ASB Valuers & Engineers provides comprehensive
                property valuation services throughout Karnataka, helping banks, NBFCs, builders,
                and property owners with accurate, bank-compliant valuation reports.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Cities We Serve in Karnataka
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  'Belagavi (Belgaum)',
                  'Bangalore',
                  'Hubli',
                  'Dharwad',
                  'Mysore',
                  'Mangalore',
                  'Davangere',
                  'Gulbarga',
                  'Shimoga',
                  'Tumkur',
                ].map((city) => (
                  <Grid item xs={12} sm={6} key={city}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {city}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Our Services Across Karnataka
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Property valuation for loan approval
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Bank-approved mortgage valuation
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
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Residual land valuation
                  </Typography>
                </li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Why Choose ASB Valuers & Engineers in Karnataka?
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    IBBI Registered Valuer credentials
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Extensive experience across Karnataka
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Reports accepted by 25+ banks
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
                  Request Valuation Across Karnataka
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
                  Serving clients across all major cities in Karnataka with professional property
                  valuation services.
                </Typography>
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
