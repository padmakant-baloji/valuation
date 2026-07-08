import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Commercial Property Valuation Karnataka | Office & Shop Valuation',
  description: 'Professional commercial property valuation in Karnataka. Expert office valuation, shop valuation, mall valuation, hotel valuation, and IT park valuation. IBBI Registered Valuer. Bank-approved reports.',
  keywords: ['Commercial Property Valuation', 'Office Valuation Karnataka', 'Shop Valuation', 'Mall Valuation', 'Hotel Valuation Karnataka', 'IT Park Valuation', 'Warehouse Valuation', 'Commercial Appraisal Karnataka', 'Retail Property Valuation'],
  alternates: { canonical: 'https://asbvaluers.com/services/commercial-property-valuation' },
}

export default function CommercialPropertyValuationPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Commercial Property Valuation', provider: { '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' }, areaServed: { '@type': 'State', name: 'Karnataka' }, description: 'Professional commercial property valuation services for offices, shops, malls, hotels, and industrial properties in Karnataka.' }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Services' }, { '@type': 'ListItem', position: 3, name: 'Commercial Property Valuation', item: 'https://asbvaluers.com/services/commercial-property-valuation' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How is commercial property value calculated?', acceptedAnswer: { '@type': 'Answer', text: 'Commercial property value is primarily calculated using the Income Capitalization Approach (net operating income divided by capitalization rate), Market Comparison Approach (comparing similar commercial property sales), and Cost Approach (replacement cost). Our IBBI Registered Valuers use all three methods to determine the most accurate fair market value.' } }, { '@type': 'Question', name: 'Do you value IT parks and office spaces?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide specialized valuation services for IT parks, office spaces, co-working spaces, and commercial complexes across Karnataka including Bangalore IT corridors. Our team has extensive experience in valuing technology-related commercial properties.' } }] }

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Commercial Property Valuation' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Commercial Property Valuation in Karnataka | Office, Shop & Industrial Valuation
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Expert Commercial Property Valuation – IBBI Registered Valuer</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Professional valuation of offices, retail spaces, malls, hotels, warehouses, IT parks, and industrial properties. Bank-approved reports within 48 hours.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Comprehensive Commercial Property Valuation Services</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Commercial property valuation requires specialized expertise in income analysis, market dynamics, and regulatory compliance. Our <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuers</Link> combine engineering precision with financial insight to deliver accurate commercial property valuations for banks, investors, developers, and business owners across <Link href="/locations/karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Karnataka</Link>.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Types of Commercial Properties We Value</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Office Spaces</strong> – Corporate offices, IT parks, co-working spaces, business centers</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Retail Properties</strong> – Shops, showrooms, shopping malls, retail complexes</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Hotels & Hospitality</strong> – Hotels, resorts, restaurants, banquet halls</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Industrial Properties</strong> – Factories, warehouses, logistics parks, manufacturing units</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Mixed-Use Developments</strong> – Commercial-residential combined properties</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Special Purpose Properties</strong> – Hospitals, educational institutions, religious buildings</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Valuation Approaches for Commercial Properties</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We use the <strong>Income Capitalization Approach</strong> (analyzing rental income, occupancy rates, and cap rates), <strong>Market Comparison Approach</strong> (comparing similar commercial property transactions), and <strong>Cost Approach</strong> (calculating replacement cost with depreciation). Our <Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>technical due diligence</Link> ensures comprehensive assessment of structural condition, compliance, and operational efficiency.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Purpose of Commercial Valuation</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank loan security</Link> and mortgage assessment</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Business acquisition and merger valuations</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Insurance valuation and claims assessment</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Financial reporting and balance sheet compliance</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Investment analysis and portfolio assessment</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Rent review and lease negotiation support</Typography></li>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Commercial Valuation</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>🏢 Property Types</Typography>
                  <Typography variant="body2" color="text.secondary">Offices, Shops, Malls, Hotels, Warehouses</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>📋 Methods Used</Typography>
                  <Typography variant="body2" color="text.secondary">Income, Market & Cost Approach</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Commercial Property Valuation?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for expert commercial property valuation in Karnataka.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
