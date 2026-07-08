import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Land Valuation Karnataka | Land Rate & Site Rate Assessment',
  description: 'Professional land valuation, land rate assessment, and site rate evaluation in Karnataka. IBBI Registered Valuer for residential plots, agricultural land, commercial sites. Bank-approved reports within 48 hours.',
  keywords: ['Land Valuation Karnataka', 'Land Rate', 'Site Rate', 'Land Rate Assessment', 'Site Rate Evaluation', 'Plot Valuation', 'Agricultural Land Valuation', 'Land Appraisal Karnataka', 'My Land Value', 'Residential Plot Valuation', 'Commercial Site Valuation', 'Land Rate Per Square Foot'],
  alternates: { canonical: 'https://asbvaluers.com/services/land-valuation' },
}

export default function LandValuationPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Land Valuation and Rate Assessment', provider: { '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' }, areaServed: { '@type': 'State', name: 'Karnataka' }, description: 'Professional land valuation, land rate assessment, and site rate evaluation services across Karnataka.' }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Services' }, { '@type': 'ListItem', position: 3, name: 'Land Valuation', item: 'https://asbvaluers.com/services/land-valuation' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What is land rate and how is it calculated?', acceptedAnswer: { '@type': 'Answer', text: 'Land rate is the per-square-foot or per-square-meter value of undeveloped land in a specific location. It is calculated by analyzing comparable land sales, location factors, zoning regulations, development potential, infrastructure availability, road frontage, and market demand. Our IBBI Registered Valuers provide accurate land rate assessments for all purposes.' } },
    { '@type': 'Question', name: 'What is the difference between land rate and site rate?', acceptedAnswer: { '@type': 'Answer', text: 'Land rate refers to the raw land value per unit area, while site rate includes the land value plus the value of any site improvements like boundary walls, access roads, utilities, grading, and site preparation. Site rate is typically higher than land rate because it accounts for development investments.' } },
    { '@type': 'Question', name: 'Do you provide agricultural land valuation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide comprehensive agricultural land valuation in Karnataka. Our assessment considers soil quality, irrigation facilities, crop yield potential, location, road access, conversion potential, and market demand for agricultural land in the area.' } },
  ]}

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Land Valuation' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Land Valuation in Karnataka | Land Rate & Site Rate Assessment Services
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Accurate Land Rate & Site Rate Assessment – IBBI Registered Valuer</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Get professional land valuation and site rate evaluation for residential plots, agricultural land, commercial sites, and industrial land. Bank-approved reports delivered within 48 hours.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Comprehensive Land Valuation & Rate Assessment</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Land valuation is the process of determining the fair market value of undeveloped or partially developed land. Understanding land rate and site rate is critical for property transactions, <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>loan approvals</Link>, investment decisions, and tax assessments. Our <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuers</Link> provide accurate land valuation services across <Link href="/locations/karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Karnataka</Link>, considering all relevant factors that influence land and site values.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Understanding Land Rate</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Land rate is the market value of land per unit area (per square foot or per square meter) in a specific location. It is the fundamental building block of all property valuations. Factors that influence land rate include location, accessibility, road frontage, zoning and land use permissions, infrastructure development, proximity to amenities, market demand and supply, and future development potential. Our land rate assessments are based on thorough market research, comparable land sales analysis, and expert evaluation.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Understanding Site Rate</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Site rate includes the land value plus the value of any improvements made to the site. These improvements include boundary walls, leveling and grading, drainage, access roads, utility connections (water, electricity, sewage), and landscaping. Site rate evaluation is essential for developed plots ready for construction, as it captures the total investment in the land including infrastructure.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Types of Land We Value</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Residential Plots</strong> – Approved layout plots, BDA/MUDA/HDMC allotted sites</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Agricultural Land</strong> – Farmland, plantation land, conversion potential land</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Commercial Sites</strong> – Commercial zone plots, highway-facing land</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Industrial Land</strong> – KIADB plots, industrial zone land, SEZ areas</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Revenue Land</strong> – Government land assessment, revenue records evaluation</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Development Land</strong> – Land for residential/commercial development projects</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Land Valuation Factors We Assess</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Location and accessibility (road width, public transport)</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Zoning regulations and permissible land use</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Infrastructure availability (water, electricity, sewage)</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Comparable land transactions in the area</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Development potential and FSI/FAR</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Legal status, encumbrances, and title clarity</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Proximity to schools, hospitals, markets, and employment centers</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Service Areas</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We provide land valuation across Karnataka including <Link href="/locations/belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>Belagavi</Link>, <Link href="/locations/bangalore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bangalore</Link>, <Link href="/locations/hubli" style={{ color: '#1976d2', textDecoration: 'underline' }}>Hubli</Link>, <Link href="/locations/dharwad" style={{ color: '#1976d2', textDecoration: 'underline' }}>Dharwad</Link>, <Link href="/locations/mysore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Mysore</Link>, <Link href="/locations/mangalore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Mangalore</Link>, <Link href="/locations/davangere" style={{ color: '#1976d2', textDecoration: 'underline' }}>Davangere</Link>, and all other districts.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Land Valuation</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>🌍 Land Types</Typography>
                  <Typography variant="body2" color="text.secondary">Residential, Agricultural, Commercial, Industrial</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>📊 Assessment Includes</Typography>
                  <Typography variant="body2" color="text.secondary">Land Rate + Site Rate + Market Analysis</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Land Valuation or Rate Assessment?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for expert land rate assessment and site rate evaluation in Karnataka.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
