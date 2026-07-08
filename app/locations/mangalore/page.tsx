import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Mangalore | IBBI Registered Valuer Mangaluru',
  description: 'Professional property valuation services in Mangalore (Mangaluru), Karnataka. IBBI Registered Valuer providing bank-approved valuation reports. 40,000+ valuations. Reports within 48 hours.',
  keywords: ['Property Valuation Mangalore', 'Property Valuation Mangaluru', 'IBBI Registered Valuer Mangalore', 'Bank Approved Valuer Mangalore', 'Land Valuation Mangalore', 'Real Estate Valuation Mangalore', 'Mortgage Valuation Mangalore', 'Government Approved Valuer Mangalore'],
  alternates: { canonical: 'https://asbvaluers.com/locations/mangalore' },
}

export default function MangalorePage() {
  const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers - Mangalore', description: 'Professional property valuation services in Mangalore (Mangaluru), Karnataka by IBBI Registered Valuers.', url: 'https://asbvaluers.com/locations/mangalore', telephone: ['+918880519265', '+919743307500'], email: 'asbvaluers@gmail.com', areaServed: { '@type': 'City', name: 'Mangalore' }, parentOrganization: { '@type': 'Organization', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' } }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' }, { '@type': 'ListItem', position: 3, name: 'Mangalore', item: 'https://asbvaluers.com/locations/mangalore' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Who provides bank-approved property valuation in Mangalore?', acceptedAnswer: { '@type': 'Answer', text: 'ASB Valuers & Engineers provides IBBI registered, bank-approved property valuation services in Mangalore with reports accepted by 30+ banks including SBI, HDFC Bank, ICICI Bank, and more.' } }, { '@type': 'Question', name: 'What types of properties do you value in Mangalore?', acceptedAnswer: { '@type': 'Answer', text: 'We value all property types in Mangalore including residential apartments, independent houses, commercial properties, industrial assets, vacant land, and coastal properties.' } }] }

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Mangalore' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Mangalore (Mangaluru) | IBBI Registered Valuer
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>IBBI Registered Valuer Serving Mangalore – Coastal Karnataka</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>ASB Valuers & Engineers provides professional property valuation services in Mangalore (Mangaluru), the port city of Coastal Karnataka. Bank-compliant reports within 48 hours.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Professional Property Valuation in Mangalore</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Mangalore (Mangaluru) is a major port city and the economic hub of Coastal Karnataka. With a growing IT sector, thriving banking industry, and significant commercial development, Mangalore&apos;s real estate market offers diverse investment opportunities. ASB Valuers & Engineers provides comprehensive <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>property valuation for loan approval</Link>, <Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>commercial property valuation</Link>, and <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>land valuation</Link> services across Mangalore.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Services in Mangalore</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link> – Apartments, houses, villas</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link> – Offices, retail, warehouses</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>Technical due diligence</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Port area and industrial property valuation</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Areas We Cover in Mangalore</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We provide property valuation services across Mangalore including Kadri, Bejai, Falnir, Hampankatta, Kankanady, Bendoorwell, Jeppu, Surathkal, Derebail, Kottara, Pandeshwar, and surrounding areas. Our local market knowledge ensures accurate valuations for every property type in the coastal region.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Mangalore Real Estate Market</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Mangalore&apos;s real estate market is characterized by steady growth driven by its port activities, banking sector, IT companies, educational institutions, and healthcare facilities. The city&apos;s connectivity through Mangalore International Airport and NH-66 makes it strategically important. Professional <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> assessments ensure accurate property valuation for all transactions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Valuation in Mangalore</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}><strong>Serving all Mangalore areas</strong><br />Kadri, Bejai, Hampankatta, Kankanady, Surathkal, and all surrounding areas.</Typography>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Also Serving:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Bangalore', 'Belagavi', 'Hubli', 'Mysore'].map((city) => (
                      <Link key={city} href={`/locations/${city.toLowerCase()}`} style={{ fontSize: '0.8rem', color: '#1976d2', textDecoration: 'underline' }}>{city}</Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Mangalore?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers today for professional IBBI Registered Valuer services in Mangalore. Bank-compliant reports within 48 hours.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
