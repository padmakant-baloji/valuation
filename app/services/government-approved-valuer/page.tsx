import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Government Approved Valuer Karnataka | Court Approved Property Valuation',
  description: 'Government approved and court approved property valuer in Karnataka. IBBI Registered Valuer providing valuation for stamp duty, tax assessment, legal proceedings, and government purposes. 40,000+ valuations.',
  keywords: ['Government Approved Valuer', 'Court Approved Valuer Karnataka', 'Stamp Duty Valuation', 'Government Property Valuation', 'Tax Assessment Valuation', 'Legal Valuation Karnataka', 'Property Valuation for Court', 'Approved Valuer Karnataka', 'Sub-Registrar Valuation', 'Income Tax Valuation'],
  alternates: { canonical: 'https://asbvaluers.com/services/government-approved-valuer' },
}

export default function GovernmentApprovedValuerPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Government Approved Property Valuation', provider: { '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' }, areaServed: { '@type': 'State', name: 'Karnataka' }, description: 'Government approved and court approved property valuation services in Karnataka for stamp duty, tax, and legal purposes.' }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Services' }, { '@type': 'ListItem', position: 3, name: 'Government Approved Valuer', item: 'https://asbvaluers.com/services/government-approved-valuer' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What is a government approved valuer?', acceptedAnswer: { '@type': 'Answer', text: 'A government approved valuer is a certified property valuation professional recognized by government bodies for official valuations. This includes IBBI Registered Valuers, IOV Approved Valuers, and valuers registered with various government departments. ASB Valuers & Engineers has both IBBI Registration and IOV Approval.' } },
    { '@type': 'Question', name: 'When is government approved valuation needed?', acceptedAnswer: { '@type': 'Answer', text: 'Government approved valuation is needed for stamp duty assessment, property tax appeals, income tax capital gains, court cases and legal disputes, government acquisition proceedings, insolvency and bankruptcy proceedings, and company mergers and acquisitions.' } },
  ]}

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Government Approved Valuer' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Government Approved Valuer in Karnataka | Court Approved Property Valuation
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>IBBI Registered & IOV Approved Valuer – Official Property Valuations</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Government recognized property valuations for stamp duty, taxation, court proceedings, insolvency, and all official purposes. Legally defensible reports by certified professionals.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>Government & Court Approved Property Valuation Services</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Many property transactions and legal proceedings require valuations from government-recognized or court-approved valuers. ASB Valuers & Engineers, led by <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> Amar Bale and IOV Approved Valuer Rajani V K, provides legally defensible property valuations recognized by government bodies, courts, and regulatory authorities across <Link href="/locations/karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Karnataka</Link>.
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>When You Need Government Approved Valuation</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Stamp Duty Assessment</strong> – Valuation for property registration and stamp duty calculation</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Income Tax Purposes</strong> – Capital gains tax, wealth tax, gift tax valuations</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Court Proceedings</strong> – Property disputes, partition suits, divorce settlements</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Insolvency & Bankruptcy</strong> – IBBI mandated valuations under IBC proceedings</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Government Acquisition</strong> – Land acquisition and compensation determination</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Company Law</strong> – Mergers, demergers, amalgamation valuations</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Property Tax Appeals</strong> – Challenging property tax assessments</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Our Credentials</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>IBBI (Insolvency and Bankruptcy Board of India) Registered Valuer</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>IOV (Institution of Valuers) Approved Valuer</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Chartered Engineer (Institution of Engineers, India)</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>40,000+ completed valuations</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Accepted by <Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>30+ banks</Link> and government bodies</Typography></li>
              </Box>
              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Why Choose Government Approved Valuer?</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Government-approved valuations carry legal weight and are recognized by courts, tax authorities, and regulatory bodies. Our <Link href="/services/technical-due-diligence-consultant" style={{ color: '#1976d2', textDecoration: 'underline' }}>technical expertise</Link> combined with regulatory knowledge ensures reports that withstand legal scrutiny. We value <Link href="/services/residential-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>residential</Link>, <Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>commercial</Link>, and <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>land properties</Link> for all government and legal purposes.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Official Valuation</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>🏛️ Recognized By</Typography>
                  <Typography variant="body2" color="text.secondary">IBBI, IOV, IEI, Courts, Banks</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>⚖️ Purposes</Typography>
                  <Typography variant="body2" color="text.secondary">Stamp Duty, Tax, Court, IBC</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Government Approved Valuation?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for IBBI registered, government-approved property valuations in Karnataka.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
