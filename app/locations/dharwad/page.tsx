import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone, LocationOn } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Dharwad | IBBI Registered Valuer Dharwad Karnataka',
  description:
    'Professional property valuation services in Dharwad, Karnataka. IBBI Registered Valuer providing bank-approved valuation reports for residential, commercial & land properties. Trusted by 30+ banks. Reports within 48 hours.',
  keywords: [
    'Property Valuation Dharwad',
    'IBBI Registered Valuer Dharwad',
    'Bank Approved Valuer Dharwad',
    'Property Valuation Services Dharwad',
    'Land Valuation Dharwad',
    'Real Estate Valuation Dharwad',
    'Mortgage Valuation Dharwad',
    'Property Appraiser Dharwad',
    'Government Approved Valuer Dharwad',
    'Site Rate Dharwad',
  ],
  alternates: {
    canonical: 'https://asbvaluers.com/locations/dharwad',
  },
}

export default function DharwadPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers - Dharwad',
    description:
      'Professional property valuation services in Dharwad, Karnataka by IBBI Registered Valuers.',
    url: 'https://asbvaluers.com/locations/dharwad',
    telephone: ['+918880519265', '+919743307500'],
    email: 'asbvaluers@gmail.com',
    areaServed: { '@type': 'City', name: 'Dharwad' },
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' },
      { '@type': 'ListItem', position: 3, name: 'Dharwad', item: 'https://asbvaluers.com/locations/dharwad' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best property valuer in Dharwad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ASB Valuers & Engineers is a leading IBBI Registered Valuer serving Dharwad with 40,000+ valuations completed. Our bank-approved reports are accepted by 30+ banks and financial institutions across Karnataka.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does property valuation cost in Dharwad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property valuation fees in Dharwad depend on the property type, size, and purpose of valuation. Contact ASB Valuers & Engineers at +91 8880519265 for a personalized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide bank-approved property valuation in Dharwad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ASB Valuers & Engineers provides bank-approved property valuation in Dharwad. Our reports are accepted by SBI, HDFC Bank, ICICI Bank, Axis Bank, and 30+ other banks and NBFCs.',
        },
      },
    ],
  }

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Dharwad' }]} />

          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Dharwad | IBBI Registered Valuer
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              IBBI Registered Valuer Serving Dharwad – Trusted by 30+ Banks
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional property valuation services in Dharwad, Karnataka. Our IBBI Registered Valuer team delivers bank-compliant reports within 48 hours for all property types.
            </Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>
              Call Now: +91 8880519265
            </Button>
          </Paper>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Professional Property Valuation in Dharwad
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Dharwad is a renowned educational and cultural hub in North Karnataka, forming the twin-city of Hubballi-Dharwad. Home to prestigious institutions like Karnataka University and IIT Dharwad, the city has witnessed significant real estate growth driven by educational infrastructure and IT development. Whether you need{' '}
                <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>property valuation for loan approval</Link>, mortgage security assessment, or investment analysis, ASB Valuers & Engineers provides comprehensive valuation services in Dharwad.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Property Valuation Services in Dharwad
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link> – Houses, apartments, villas, plots</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link> – Offices, shops, commercial complexes</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>Technical due diligence</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Agricultural land valuation</Typography></li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Why Choose ASB Valuers in Dharwad?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                As an <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> with extensive experience in the Hubballi-Dharwad region, we understand the local property market deeply. Key areas we serve in Dharwad include Saptapur, Kalyan Nagar, Vidyagiri, Maratha Colony, Sadankeri, Jubilee Circle, and surrounding areas. Our team provides accurate, bank-compliant valuation reports backed by 40,000+ completed valuations.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Dharwad Real Estate Market
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Dharwad&apos;s real estate market is driven by its educational institutions, healthcare facilities, and growing IT sector. The city offers a mix of traditional residential areas and new developments, with property values varying significantly across neighborhoods. Professional property valuation is essential for accurate market value assessment, loan approvals, and investment decisions in Dharwad.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Get Valuation in Dharwad
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Serving Dharwad areas:</strong><br />
                  Saptapur, Kalyan Nagar, Vidyagiri, Maratha Colony, Sadankeri, Jubilee Circle, and all surrounding areas.
                </Typography>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Also Serving:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Hubli', 'Belagavi', 'Bangalore', 'Mysore'].map((city) => (
                      <Link key={city} href={`/locations/${city.toLowerCase()}`} style={{ fontSize: '0.8rem', color: '#1976d2', textDecoration: 'underline' }}>{city}</Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Dharwad?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              Contact ASB Valuers & Engineers today for professional IBBI Registered Valuer services in Dharwad. We deliver bank-compliant property valuation reports within 48 hours.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
