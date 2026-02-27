import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'

export const metadata = {
  title: 'Technical Due Diligence Consultant Karnataka | Property Risk Assessment',
  description: 'Professional technical due diligence consultant in Karnataka. Structural review, risk assessment, and project viability evaluation for banks and investors. Chartered Engineer expertise.',
  keywords: [
    'Technical Due Diligence Consultant Karnataka',
    'Property Risk Assessment',
    'Structural Review Consultant',
    'Project Viability Evaluation',
    'Technical Due Diligence for Banks',
  ],
}

export default function TechnicalDueDiligencePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Technical Due Diligence',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ASB Valuers & Engineers',
    },
    areaServed: {
      '@type': 'State',
      name: 'Karnataka',
    },
    description: 'Technical due diligence services in Karnataka including structural review, risk assessment, and project viability evaluation.',
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
            Technical Due Diligence Consultant in Karnataka | Property Risk Assessment
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Reduce Financial Risk with Comprehensive Technical Due Diligence
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional technical due diligence services in
              Karnataka, helping banks, investors, and developers assess property risks and make
              informed decisions. Our Chartered Engineer expertise ensures thorough structural and
              compliance evaluation.
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
                What is Technical Due Diligence?
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Technical due diligence is a comprehensive assessment of a property's physical
                condition, structural integrity, compliance with building codes, and potential
                risks. For banks and financial institutions, technical due diligence provides
                critical insights that help mitigate financial risk and make informed lending
                decisions.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Our Technical Due Diligence Services
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <strong>Structural Review:</strong> Comprehensive assessment of building
                    structure, foundation, and construction quality by Chartered Engineers
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <strong>Legal-Technical Risk Assessment:</strong> Evaluation of compliance
                    with building codes, regulations, and potential legal issues
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <strong>Project Viability Evaluation:</strong> Assessment of project
                    feasibility, development potential, and investment returns
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <strong>Construction Quality Analysis:</strong> Detailed review of materials,
                    workmanship, and adherence to specifications
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    <strong>Compliance Verification:</strong> Verification of approvals, permits,
                    and regulatory compliance
                  </Typography>
                </li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Why Technical Due Diligence Matters for Banks
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Technical due diligence helps banks identify potential risks before loan approval,
                assess property condition and value accurately, ensure regulatory compliance, and
                protect financial interests. Our comprehensive reports provide banks with the
                detailed analysis needed for informed lending decisions.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Our Expertise
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Chartered Engineer (IEI) certification
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    IBBI Registered Valuer credentials
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    9+ years of technical due diligence experience
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
                    Trusted by 25+ banks and financial institutions
                  </Typography>
                </li>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Request Technical Due Diligence
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
                  Serving banks, investors, and developers across Karnataka with comprehensive
                  technical due diligence services.
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
