import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Shimoga | IBBI Registered Valuer Shivamogga',
  description: 'Professional property valuation services in Shimoga (Shivamogga), Karnataka. IBBI Registered Valuer providing bank-approved valuation reports. Trusted by 30+ banks. Reports within 48 hours.',
  keywords: ['Property Valuation Shimoga', 'Property Valuation Shivamogga', 'IBBI Registered Valuer Shimoga', 'Bank Approved Valuer Shimoga', 'Land Valuation Shimoga', 'Real Estate Valuation Shivamogga'],
  alternates: { canonical: 'https://asbvaluers.com/locations/shimoga' },
}

export default function ShimogaPage() {
  const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers - Shimoga', url: 'https://asbvaluers.com/locations/shimoga', telephone: ['+918880519265', '+919743307500'], email: 'asbvaluers@gmail.com', areaServed: { '@type': 'City', name: 'Shimoga' }, parentOrganization: { '@type': 'Organization', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' } }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' }, { '@type': 'ListItem', position: 3, name: 'Shimoga', item: 'https://asbvaluers.com/locations/shimoga' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Who provides property valuation in Shimoga?', acceptedAnswer: { '@type': 'Answer', text: 'ASB Valuers & Engineers provides IBBI registered property valuation in Shimoga (Shivamogga) with bank-approved reports accepted by 30+ financial institutions.' } }, { '@type': 'Question', name: 'Do you provide land valuation in Shimoga district?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide comprehensive land valuation services across Shimoga district including agricultural land, residential plots, and commercial sites.' } }] }

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Shimoga' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Shimoga (Shivamogga) | IBBI Registered Valuer
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>IBBI Registered Valuer Serving Shimoga – Gateway to Malnad</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Professional property valuation services in Shimoga (Shivamogga), the gateway to the scenic Malnad region. Bank-compliant reports within 48 hours.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Professional Property Valuation in Shimoga</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Shimoga (Shivamogga), known as the Gateway to Malnad, is a vibrant city in Central Karnataka with a diverse economy spanning agriculture, industry, and education. The city&apos;s real estate market is driven by educational institutions like Kuvempu University, growing commercial activity, and its role as a district headquarters. ASB Valuers & Engineers provides comprehensive <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>property valuation for loan approval</Link> and <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>land valuation</Link> services in Shimoga.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Services in Shimoga</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Agricultural and plantation land valuation</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Shimoga Real Estate Market</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Shimoga&apos;s real estate market features a mix of urban residential development and significant agricultural land holdings in the surrounding Malnad region. Key areas include Gopala, Durgigudi, BH Road, Kuvempu Nagar, and Vinoba Nagar. The city&apos;s connectivity, educational institutions, and natural beauty drive steady property appreciation. Our <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> assessments ensure accurate valuations for every property type.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Valuation in Shimoga</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Also Serving:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Davangere', 'Hubli', 'Bangalore', 'Belagavi'].map((city) => (
                      <Link key={city} href={`/locations/${city.toLowerCase()}`} style={{ fontSize: '0.8rem', color: '#1976d2', textDecoration: 'underline' }}>{city}</Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Shimoga?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for IBBI Registered Valuer services in Shimoga (Shivamogga).</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
