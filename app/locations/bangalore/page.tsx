import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation in Bangalore | IBBI Registered Valuer Bengaluru',
  description:
    'Professional property valuation services in Bangalore (Bengaluru), Karnataka. IBBI Registered Valuer providing bank-approved valuation reports for residential, commercial & land properties. 40,000+ valuations. Reports within 48 hours.',
  keywords: [
    'Property Valuation Bangalore',
    'Property Valuation Bengaluru',
    'IBBI Registered Valuer Bangalore',
    'Bank Approved Valuer Bangalore',
    'Property Valuation Services Bangalore',
    'Land Valuation Bangalore',
    'Real Estate Valuation Bangalore',
    'Mortgage Valuation Bangalore',
    'Property Appraiser Bangalore',
    'Government Approved Valuer Bangalore',
    'Commercial Property Valuation Bangalore',
    'Residential Property Valuation Bangalore',
  ],
  alternates: {
    canonical: 'https://asbvaluers.com/locations/bangalore',
  },
}

export default function BangalorePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ASB Valuers & Engineers - Bangalore',
    description: 'Professional property valuation services in Bangalore (Bengaluru), Karnataka by IBBI Registered Valuers.',
    url: 'https://asbvaluers.com/locations/bangalore',
    telephone: ['+918880519265', '+919743307500'],
    email: 'asbvaluers@gmail.com',
    areaServed: { '@type': 'City', name: 'Bangalore' },
    parentOrganization: { '@type': 'Organization', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://asbvaluers.com/locations/karnataka' },
      { '@type': 'ListItem', position: 3, name: 'Bangalore', item: 'https://asbvaluers.com/locations/bangalore' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best IBBI Registered Valuer in Bangalore?',
        acceptedAnswer: { '@type': 'Answer', text: 'ASB Valuers & Engineers is a trusted IBBI Registered Valuer serving Bangalore with 40,000+ valuations completed. Our bank-approved reports are accepted by 30+ banks and financial institutions across Karnataka.' },
      },
      {
        '@type': 'Question',
        name: 'How much does property valuation cost in Bangalore?',
        acceptedAnswer: { '@type': 'Answer', text: 'Property valuation fees in Bangalore depend on the property type, size, location, and purpose of valuation. Contact ASB Valuers & Engineers at +91 8880519265 for a personalized quote. We offer competitive rates with bank-compliant reports delivered within 48 hours.' },
      },
      {
        '@type': 'Question',
        name: 'Do you provide property valuation for IT corridor properties in Bangalore?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide property valuation for all types of properties in Bangalore including IT corridor areas like Electronic City, Whitefield, Marathahalli, Sarjapur Road, and Outer Ring Road. Our valuations cover residential apartments, commercial offices, IT parks, and land.' },
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/karnataka' }, { label: 'Bangalore' }]} />

          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Services in Bangalore (Bengaluru) | IBBI Registered Valuer
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              IBBI Registered Valuer Serving Bangalore – India&apos;s Silicon Valley
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              ASB Valuers & Engineers provides professional property valuation services across Bangalore. From Electronic City to Whitefield, our IBBI Registered Valuer team delivers bank-compliant valuation reports within 48 hours.
            </Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>
              Call Now: +91 8880519265
            </Button>
          </Paper>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Professional Property Valuation in Bangalore
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Bangalore (Bengaluru), India&apos;s Silicon Valley and Karnataka&apos;s capital city, has one of the most dynamic real estate markets in the country. With a booming IT sector, rapid infrastructure development, and massive urbanization, accurate property valuation is critical for every real estate transaction. ASB Valuers & Engineers provides comprehensive <Link href="/services/property-valuation-for-loan" style={{ color: '#1976d2', textDecoration: 'underline' }}>property valuation for loan approval</Link>, investment assessment, and <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>land valuation</Link> services across all zones of Bangalore.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Property Valuation Services in Bangalore
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Residential property valuation</Link> – Apartments, villas, independent houses, gated communities</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property valuation</Link> – IT parks, offices, retail spaces, malls</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bank-approved loan security valuation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land rate and site rate evaluation</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>Technical due diligence for developers</Link></Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Industrial property and warehouse valuation</Typography></li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Areas We Cover in Bangalore
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We provide property valuation services across all zones of Bangalore including Electronic City, Whitefield, Marathahalli, Koramangala, HSR Layout, Sarjapur Road, Outer Ring Road, JP Nagar, Jayanagar, Banashankari, Rajajinagar, Malleshwaram, Hebbal, Yelahanka, Devanahalli, and surrounding areas. Our team&apos;s deep understanding of Bangalore&apos;s micro-markets ensures accurate valuations for every property type.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Bangalore Real Estate Market Overview
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Bangalore&apos;s real estate market is one of India&apos;s most active, driven by the IT/ITeS sector, startup ecosystem, and infrastructure projects like Namma Metro expansion and Peripheral Ring Road. Property values vary dramatically across micro-markets, making professional <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> assessments essential for accurate market value determination. Our comprehensive valuation reports help banks, investors, and property owners make informed decisions.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>
                Banks We Serve in Bangalore
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Our <Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>bank-approved valuation reports</Link> are accepted by all major banks operating in Bangalore including SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Canara Bank, and numerous NBFCs and housing finance companies. We ensure full compliance with RBI guidelines and bank-specific requirements.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Valuation in Bangalore</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Serving all Bangalore areas:</strong><br />
                  Electronic City, Whitefield, Koramangala, HSR Layout, JP Nagar, Jayanagar, Hebbal, and all zones.
                </Typography>
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>Also Serving:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {['Mysore', 'Belagavi', 'Hubli', 'Mangalore'].map((city) => (
                      <Link key={city} href={`/locations/${city.toLowerCase()}`} style={{ fontSize: '0.8rem', color: '#1976d2', textDecoration: 'underline' }}>{city}</Link>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation in Bangalore?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              Contact ASB Valuers & Engineers today for professional IBBI Registered Valuer services in Bangalore. We deliver bank-compliant property valuation reports within 48 hours.
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
