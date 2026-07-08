import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Mysore | IBBI Registered Valuer Mysuru Karnataka',
  description:
    'Professional property valuation services in Mysore (Mysuru), Karnataka. IBBI Registered Valuer providing bank-approved valuation reports. 40,000+ valuations. Trusted by 30+ banks. Reports within 48 hours.',
  keywords: [
    'Property Valuation Mysore', 'Property Valuation Mysuru', 'IBBI Registered Valuer Mysore',
    'Bank Approved Valuer Mysore', 'Land Valuation Mysore', 'Real Estate Valuation Mysore',
    'Mortgage Valuation Mysore', 'Government Approved Valuer Mysore',
  ],
  alternates: { canonical: 'https://asbvaluers.com/locations/mysore' },
}

export default function MysorePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers - Mysore',
    description: 'Professional property valuation services in Mysore (Mysuru), Karnataka by IBBI Registered Valuers.',
    url: 'https://asbvaluers.com/locations/mysore',
    telephone: ['+918880519265', '+919743307500'], email: 'asbvaluers@gmail.com',
    areaServed: { '@type': 'City', name: 'Mysore' },
    parentOrganization: { '@type': 'Organization', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' },
      { '@type': 'ListItem', position: 3, name: 'Mysore', item: 'https://asbvaluers.com/locations/mysore' },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Who provides IBBI registered property valuation in Mysore?', acceptedAnswer: { '@type': 'Answer', text: 'ASB Valuers & Engineers provides IBBI registered property valuation services in Mysore with 40,000+ valuations completed and reports accepted by 30+ banks.' } },
      { '@type': 'Question', name: 'How long does property valuation take in Mysore?', acceptedAnswer: { '@type': 'Answer', text: 'We deliver bank-compliant property valuation reports in Mysore within 48 hours of property inspection. Expedited services are available for urgent requirements.' } },
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Mysore' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Mysore (Mysuru) | IBBI Registered Valuer
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>IBBI Registered Valuer Serving Mysore – Heritage City of Karnataka</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional property valuation services in Mysore (Mysuru), Karnataka&apos;s cultural capital. Bank-compliant reports within 48 hours.
            </Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Professional Property Valuation in Mysore</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Mysore (Mysuru), Karnataka&apos;s cultural capital and one of India&apos;s cleanest cities, boasts a thriving real estate market driven by IT corridors, educational institutions, and heritage tourism. The city&apos;s expansion along the Mysore-Bangalore corridor has created significant demand for accurate property valuations. ASB Valuers & Engineers provides comprehensive <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>property valuation for loan approval</Link>, <Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>residential property valuation</Link>, and <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>land valuation</Link> services across Mysore.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Property Valuation Services in Mysore</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link> – Heritage homes, apartments, villas, layouts</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link> – IT parks, offices, retail spaces</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>Technical due diligence</Link></Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Areas We Cover in Mysore</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We serve all areas in Mysore including Vijayanagar, Kuvempunagar, Gokulam, Saraswathipuram, Lakshmipuram, Jayalakshmipuram, Hebbal Industrial Area, Hootagalli, Srirampura, BEML Nagar, and surrounding areas along the Mysore Ring Road and Mysore-Bangalore Highway corridor.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Mysore Real Estate Market</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Mysore&apos;s real estate market has experienced steady growth, particularly along the Bangalore-Mysore corridor. The city&apos;s clean environment, moderate climate, heritage appeal, and growing IT sector make it attractive for both residential and commercial investment. Professional <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> assessments are essential for accurate property value determination in this dynamic market.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Valuation in Mysore</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Serving all Mysore areas</strong><br />Vijayanagar, Kuvempunagar, Gokulam, Saraswathipuram, and all surrounding areas.
                </Typography>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Also Serving:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Bangalore', 'Belagavi', 'Hubli', 'Mangalore'].map((city) => (
                      <Link key={city} href={`/locations/${city.toLowerCase()}`} style={{ fontSize: '0.8rem', color: '#1976d2', textDecoration: 'underline' }}>{city}</Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Mysore?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers today for professional IBBI Registered Valuer services in Mysore. Bank-compliant reports within 48 hours.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
