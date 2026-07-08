import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Residential Property Valuation Karnataka | House & Flat Valuation',
  description: 'Professional residential property valuation in Karnataka. Expert house valuation, flat valuation, apartment valuation, and villa valuation. IBBI Registered Valuer. Bank-approved reports within 48 hours.',
  keywords: ['Residential Property Valuation', 'House Valuation Karnataka', 'Flat Valuation', 'Apartment Valuation Karnataka', 'Villa Valuation', 'Home Valuation Services', 'Residential Appraisal Karnataka', 'Independent House Valuation', 'Property Value Assessment Home'],
  alternates: { canonical: 'https://asbvaluers.com/services/residential-property-valuation' },
}

export default function ResidentialPropertyValuationPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Residential Property Valuation', provider: { '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' }, areaServed: { '@type': 'State', name: 'Karnataka' }, description: 'Professional residential property valuation services for houses, apartments, villas, and residential plots in Karnataka.' }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Services' }, { '@type': 'ListItem', position: 3, name: 'Residential Property Valuation', item: 'https://asbvaluers.com/services/residential-property-valuation' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How is residential property value determined?', acceptedAnswer: { '@type': 'Answer', text: 'Residential property value is determined using market comparison approach (analyzing recent sales of comparable properties), income approach (rental income potential), and cost approach (replacement cost minus depreciation). Our IBBI Registered Valuers consider location, property condition, amenities, market trends, and legal compliance.' } }, { '@type': 'Question', name: 'What factors affect house valuation in Karnataka?', acceptedAnswer: { '@type': 'Answer', text: 'Key factors include location and neighborhood quality, property age and condition, built-up area and carpet area, floor level (for apartments), amenities and facilities, proximity to schools/hospitals/markets, road connectivity, legal clearances, and current market demand in the area.' } }] }

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential Property Valuation' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Residential Property Valuation in Karnataka | House & Flat Valuation Services
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Expert House, Apartment & Villa Valuation – Bank-Approved Reports</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Get accurate residential property valuation for your house, flat, apartment, villa, or independent home. Our IBBI Registered Valuer reports are accepted by 30+ banks for home loan approvals.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Comprehensive Residential Property Valuation</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Residential property valuation is the process of determining the fair market value of homes, apartments, villas, and residential plots. Whether you&apos;re buying, selling, or applying for a <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>home loan</Link>, an accurate residential valuation ensures you know your property&apos;s true worth. Our <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuers</Link> use industry-standard methodologies to provide precise, bank-compliant valuations.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Types of Residential Properties We Value</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Independent Houses</strong> – Standalone homes, bungalows, row houses</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Apartments & Flats</strong> – Multi-story apartment complexes, builder flats</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Villas</strong> – Premium villas, duplex villas, gated community villas</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Residential Plots</strong> – <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential land and plots</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Under-Construction Properties</strong> – Properties in various construction stages</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Heritage Properties</strong> – Old heritage buildings with historical significance</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Our Valuation Methodology</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We employ three primary valuation approaches for residential properties: the <strong>Market Comparison Approach</strong> (analyzing recent comparable sales), the <strong>Income Approach</strong> (assessing rental income potential), and the <strong>Cost Approach</strong> (calculating replacement cost minus depreciation). Our comprehensive assessment includes physical inspection, market analysis, location evaluation, legal compliance check, and <Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>technical due diligence</Link>.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Why You Need Professional Residential Valuation</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>Home loan approval</Link> – Banks require valuation for LTV calculation</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Property sale/purchase – Know the fair market value before transacting</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Stamp duty assessment – Ensure correct stamp duty payment</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Insurance – Accurate replacement value for property insurance</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Legal proceedings – Court-approved valuations for disputes</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Investment analysis – Assess ROI and growth potential</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Areas We Serve</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We provide residential property valuation across <Link href="/locations/karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Karnataka</Link> including <Link href="/locations/belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>Belagavi</Link>, <Link href="/locations/bangalore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bangalore</Link>, <Link href="/locations/hubli" style={{ color: '#1976d2', textDecoration: 'underline' }}>Hubli</Link>, <Link href="/locations/mysore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Mysore</Link>, <Link href="/locations/mangalore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Mangalore</Link>, and all other cities.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Residential Valuation</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>🏠 Property Types</Typography>
                  <Typography variant="body2" color="text.secondary">Houses, Apartments, Villas, Plots</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>⏱ Delivery Time</Typography>
                  <Typography variant="body2" color="text.secondary">Within 48 hours</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Residential Property Valuation?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for expert house, apartment, and villa valuation in Karnataka.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
