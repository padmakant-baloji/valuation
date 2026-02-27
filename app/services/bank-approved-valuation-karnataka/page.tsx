import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'

export const metadata = {
  title: 'Bank Approved Valuer in Karnataka | Loan Security Valuation Services',
  description: 'Bank approved property valuers in Karnataka. Professional loan security valuation services for banks, NBFCs, and financial institutions. 25+ banks served. Get reports within 48 hours.',
  keywords: [
    'Bank Approved Valuer Karnataka',
    'Loan Security Valuation',
    'Mortgage Valuation Services Karnataka',
    'Bank Compliant Property Valuation',
    'Property Valuation for Loan Approval',
  ],
}

export default function BankApprovedValuerPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bank Approved Property Valuation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ASB Valuers & Engineers',
    },
    areaServed: {
      '@type': 'State',
      name: 'Karnataka',
    },
    description: 'Bank approved property valuation services in Karnataka for loan security, mortgage assessments, and financial institution compliance.',
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
            Bank Approved Valuer in Karnataka | Loan Security Valuation Services
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Trusted by 25+ Banks & Financial Institutions Across Karnataka
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers is a bank-approved valuer firm providing professional loan
              security valuation services across Karnataka. Our reports are accepted by all major
              banks, NBFCs, and financial institutions, ensuring seamless loan processing.
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
                Bank-Approved Property Valuation Services in Karnataka
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Banks and financial institutions require property valuations from approved valuers to
                assess loan security and determine Loan-to-Value (LTV) ratios. As a bank-approved
                valuer in Karnataka, ASB Valuers & Engineers provides comprehensive valuation
                services that meet all regulatory requirements and bank-specific standards.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Banks We Serve
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                Our valuation reports are accepted by 25+ major banks and financial institutions
                including:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    State Bank of India (SBI)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    HDFC Bank
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    ICICI Bank
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Axis Bank
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Kotak Mahindra Bank
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    And numerous NBFCs across Karnataka
                  </Typography>
                </li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Loan Security Valuation Process
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Our bank-approved valuation process includes comprehensive property inspection,
                market analysis, comparable property studies, location assessment, and compliance
                verification. We ensure all reports meet RBI guidelines and expedite loan approval
                processes.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Why Choose Our Bank-Approved Valuation Services?
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    IBBI Registered Valuer credentials
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Accepted by 25+ banks and financial institutions
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Reports delivered within 48 hours
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Strict compliance with RBI guidelines
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    12,000+ completed valuations
                  </Typography>
                </li>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Get Bank-Approved Valuation
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
                  Serving all major cities in Karnataka including Belagavi, Bangalore, Hubli,
                  Dharwad, Mysore, and Mangalore.
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
