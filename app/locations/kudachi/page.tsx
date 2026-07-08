import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone, LocationOn } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Kudachi | IBBI Registered Valuer Kudachi Karnataka',
  description: 'Professional property valuation services in Kudachi, Belagavi District, Karnataka. IBBI Registered Valuer with local office. Bank-approved valuation reports. 40,000+ valuations. Reports within 48 hours.',
  keywords: ['Property Valuation Kudachi', 'IBBI Registered Valuer Kudachi', 'Bank Approved Valuer Kudachi', 'Land Valuation Kudachi', 'Property Valuer near Kudachi', 'Real Estate Valuation Kudachi', 'Property Valuation Belagavi District'],
  alternates: { canonical: 'https://asbvaluers.com/locations/kudachi' },
}

export default function KudachiPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers - Kudachi Office',
    description: 'Professional property valuation services in Kudachi, Belagavi District, Karnataka. Local office with IBBI Registered Valuers.',
    url: 'https://asbvaluers.com/locations/kudachi',
    telephone: ['+918880519265', '+919743307500'], email: 'asbvaluers@gmail.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Behind Union Bank, Shetji Plots', addressLocality: 'Kudachi', addressRegion: 'Karnataka', postalCode: '591311', addressCountry: 'IN' },
    areaServed: { '@type': 'City', name: 'Kudachi' },
    parentOrganization: { '@type': 'Organization', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' },
  }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' }, { '@type': 'ListItem', position: 3, name: 'Kudachi', item: 'https://asbvaluers.com/locations/kudachi' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Does ASB Valuers have an office in Kudachi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, ASB Valuers & Engineers has a local office in Kudachi located behind Union Bank, Shetji Plots, Kudachi – 591311. This is one of our two office locations alongside our Belagavi headquarters.' } }, { '@type': 'Question', name: 'What property valuation services are available in Kudachi?', acceptedAnswer: { '@type': 'Answer', text: 'We provide comprehensive property valuation services in Kudachi and surrounding areas including residential, commercial, agricultural land, and bank-approved loan security valuations.' } }] }

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Kudachi' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Kudachi | IBBI Registered Valuer – Local Office
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Our Kudachi Office – Local Presence for Better Service</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>ASB Valuers & Engineers has a dedicated local office in Kudachi, ensuring quick turnaround and in-depth local market knowledge for property valuations in Kudachi and surrounding areas of Belagavi District.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+919743307500" sx={{ mt: 2 }}>Call Kudachi Office: +91 9743307500</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Property Valuation in Kudachi, Belagavi District</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Kudachi, located in Belagavi District of Karnataka, is our second office location. With a dedicated local team, we provide prompt and accurate property valuation services for the Kudachi area and surrounding towns. Our proximity to clients ensures faster property inspections, deeper local market understanding, and quicker report delivery for <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>loan approvals</Link> and other valuation needs.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Kudachi Office Location</Typography>
              <Box sx={{ mb: 3, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  <LocationOn sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                  <strong>Behind Union Bank, Shetji Plots</strong><br />
                  Kudachi – 591311<br />
                  Belagavi District, Karnataka, India
                </Typography>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Services in Kudachi</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Agricultural land valuation</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/government-approved-valuer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Government approved valuations</Link></Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Areas Served from Kudachi Office</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                From our Kudachi office, we serve Kudachi town, Raibag, Gokak, Athani, Chikkodi, Nippani, Kagwad, Soundatti, and surrounding areas in Belagavi District. Our local presence enables same-day property inspections and faster report delivery for clients in these areas. We also serve the broader <Link href="/locations/belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>Belagavi region</Link> from this office.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Contact Kudachi Office</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+919743307500" sx={{ mb: 2 }}>+91 9743307500</Button>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Kudachi Office:</strong><br />
                  Behind Union Bank, Shetji Plots<br />
                  Kudachi – 591311
                </Typography>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Our Other Office:</Typography>
                  <Link href="/locations/belagavi" style={{ fontSize: '0.9rem', color: '#1976d2', textDecoration: 'underline' }}>Belagavi Headquarters</Link>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Kudachi?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Visit our Kudachi office or call us for professional IBBI Registered Valuer services. Bank-compliant reports within 48 hours.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
