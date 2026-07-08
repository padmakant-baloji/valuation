import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Tumkur | IBBI Registered Valuer Tumakuru',
  description: 'Professional property valuation services in Tumkur (Tumakuru), Karnataka. IBBI Registered Valuer providing bank-approved valuation reports. Trusted by 30+ banks. Reports within 48 hours.',
  keywords: ['Property Valuation Tumkur', 'Property Valuation Tumakuru', 'IBBI Registered Valuer Tumkur', 'Bank Approved Valuer Tumkur', 'Land Valuation Tumkur', 'Real Estate Valuation Tumakuru'],
  alternates: { canonical: 'https://asbvaluers.com/locations/tumkur' },
}

export default function TumkurPage() {
  const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers - Tumkur', url: 'https://asbvaluers.com/locations/tumkur', telephone: ['+918880519265', '+919743307500'], email: 'asbvaluers@gmail.com', areaServed: { '@type': 'City', name: 'Tumkur' }, parentOrganization: { '@type': 'Organization', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' } }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' }, { '@type': 'ListItem', position: 3, name: 'Tumkur', item: 'https://asbvaluers.com/locations/tumkur' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Who provides property valuation in Tumkur?', acceptedAnswer: { '@type': 'Answer', text: 'ASB Valuers & Engineers provides IBBI registered property valuation in Tumkur (Tumakuru) with bank-approved reports accepted by 30+ financial institutions.' } }, { '@type': 'Question', name: 'Is property valuation required for home loan in Tumkur?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, banks require property valuation from approved valuers before sanctioning home loans. Our IBBI registered valuation reports meet all bank requirements and expedite loan approval in Tumkur.' } }] }

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Tumkur' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Tumkur (Tumakuru) | IBBI Registered Valuer
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>IBBI Registered Valuer Serving Tumkur – Growing Industrial Hub</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Professional property valuation services in Tumkur (Tumakuru), one of Karnataka&apos;s fastest-growing satellite cities near Bangalore. Bank-compliant reports within 48 hours.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Professional Property Valuation in Tumkur</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Tumkur (Tumakuru), strategically located just 70 km from Bangalore, is one of Karnataka&apos;s fastest-growing satellite cities. With the upcoming Tumkur Smart City projects, industrial corridors, and proximity to the state capital, the city&apos;s real estate market is booming. ASB Valuers & Engineers provides comprehensive <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>property valuation for loan approval</Link> and <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>land valuation</Link> services across Tumkur.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Services in Tumkur</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Industrial property and KIADB area valuation</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Tumkur Real Estate Market</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Tumkur&apos;s proximity to Bangalore, Smart City initiatives, and industrial development at KIADB zones have driven significant real estate growth. Key areas include Ashoka Nagar, Jayanagar, SS Puram, Mandipet, and Bangalore-Tumkur Highway corridor. Professional <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> assessments are essential for accurate property value determination in this rapidly appreciating market.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Valuation in Tumkur</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Also Serving:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Bangalore', 'Davangere', 'Shimoga', 'Belagavi'].map((city) => (
                      <Link key={city} href={`/locations/${city.toLowerCase()}`} style={{ fontSize: '0.8rem', color: '#1976d2', textDecoration: 'underline' }}>{city}</Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Tumkur?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for IBBI Registered Valuer services in Tumkur (Tumakuru).</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
