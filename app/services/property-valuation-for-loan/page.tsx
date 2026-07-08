import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import { Phone } from '@mui/icons-material'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Property Valuation for Loan Approval | Mortgage Valuation Karnataka',
  description: 'Professional property valuation for loan approval and mortgage valuation in Karnataka. IBBI Registered Valuer providing bank-compliant reports for home loans, LAP, and construction finance. Reports within 48 hours.',
  keywords: [
    'Property Valuation for Loan Approval', 'Mortgage Valuation Karnataka', 'Home Loan Property Valuation',
    'Property Valuation for Bank Loan', 'Loan Security Valuation', 'LTV Ratio Property Valuation',
    'Property Valuation for LAP', 'Property Valuation for Construction Finance',
    'Bank Compliant Property Valuation', 'Property Valuation for NBFC Loan',
  ],
  alternates: { canonical: 'https://asbvaluers.com/services/property-valuation-for-loan' },
}

export default function PropertyValuationForLoanPage() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: 'Property Valuation for Loan Approval',
    provider: { '@type': 'LocalBusiness', name: 'ASB Valuers & Engineers', url: 'https://asbvaluers.com' },
    areaServed: { '@type': 'State', name: 'Karnataka' },
    description: 'Professional property valuation for loan approval, mortgage assessment, and bank-compliant valuation reports in Karnataka.',
  }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' }, { '@type': 'ListItem', position: 2, name: 'Services' }, { '@type': 'ListItem', position: 3, name: 'Property Valuation for Loan', item: 'https://asbvaluers.com/services/property-valuation-for-loan' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Is property valuation mandatory for home loan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, property valuation is mandatory for all home loans in India. Banks require a professional valuation report from an approved valuer to determine the Loan-to-Value (LTV) ratio and assess the property as loan security. ASB Valuers & Engineers provides IBBI registered, bank-compliant valuation reports accepted by 30+ banks.' } },
    { '@type': 'Question', name: 'What is LTV ratio in property valuation?', acceptedAnswer: { '@type': 'Answer', text: 'LTV (Loan-to-Value) ratio is the percentage of the property value that a bank is willing to lend. For home loans, LTV typically ranges from 75-90% depending on the loan amount and property type. Our valuation reports accurately determine property value, which forms the basis for LTV calculation.' } },
    { '@type': 'Question', name: 'How long does loan property valuation take?', acceptedAnswer: { '@type': 'Answer', text: 'ASB Valuers & Engineers delivers bank-compliant property valuation reports within 48 hours of property inspection. For urgent loan requirements, we offer expedited services to meet tight bank deadlines.' } },
  ]}

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Property Valuation for Loan' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation for Loan Approval | Mortgage Valuation Services Karnataka
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Bank-Compliant Property Valuation Reports Within 48 Hours</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Get your property valued for home loans, LAP (Loan Against Property), construction finance, and mortgage requirements. Our IBBI Registered Valuer reports are accepted by 30+ banks and NBFCs across Karnataka.</Typography>
            <Button variant="contained" color="secondary" size="large" startIcon={<Phone />} href="tel:+918880519265" sx={{ mt: 2 }}>Call Now: +91 8880519265</Button>
          </Paper>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'primary.main' }}>How Property Valuation Works for Loan Approval</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Property valuation for loan approval is a mandatory process where a bank-approved or <Link href="/services/ibbi-registered-valuer-belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>IBBI Registered Valuer</Link> assesses the fair market value of a property that will serve as loan security. Banks use this valuation to calculate the Loan-to-Value (LTV) ratio, which determines the maximum loan amount they can disburse. Without an accurate, bank-compliant valuation report, your loan application cannot proceed.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Types of Loans Requiring Property Valuation</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Home Loans</strong> – Purchase of residential property (LTV: 75-90%)</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Loan Against Property (LAP)</strong> – Using existing property as collateral (LTV: 50-70%)</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Construction Finance</strong> – Loans for new construction projects</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Commercial Property Loans</strong> – <Link href="/services/commercial-property-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Commercial property</Link> financing</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Plot/Land Loans</strong> – <Link href="/services/land-valuation" style={{ color: '#1976d2', textDecoration: 'underline' }}>Land purchase</Link> financing</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}><strong>Balance Transfer</strong> – Refinancing from one bank to another</Typography></li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Our Loan Valuation Process</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Our streamlined valuation process for loan approval includes: 1) Receiving bank&apos;s valuation request and property documents, 2) Scheduling and conducting comprehensive on-site property inspection, 3) Market analysis with comparable property studies, 4) Preparing bank-compliant valuation report with photographs and documentation, 5) Delivering the final report to the bank within 48 hours. Our reports include all parameters required by RBI guidelines and individual bank specifications.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Banks We Serve</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                Our <Link href="/services/bank-approved-valuation-karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>bank-approved valuation reports</Link> are accepted by 30+ financial institutions including SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Canara Bank, Union Bank, Bank of Baroda, PNB Housing, LIC Housing Finance, Bajaj Finance, and numerous other banks and NBFCs across <Link href="/locations/karnataka" style={{ color: '#1976d2', textDecoration: 'underline' }}>Karnataka</Link>.
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Documents Required for Loan Valuation</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Property title deeds and sale deed</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Encumbrance certificate (EC)</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Approved building plan and occupancy certificate</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Property tax receipts</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Bank&apos;s valuation request letter</Typography></li>
                <li><Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>Previous loan documents (if applicable)</Typography></li>
              </Box>

              <Typography variant="h3" component="h3" sx={{ mb: 2, mt: 4, color: 'primary.main' }}>Service Areas</Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                We provide property valuation for loan approval across all major cities in Karnataka including <Link href="/locations/belagavi" style={{ color: '#1976d2', textDecoration: 'underline' }}>Belagavi</Link>, <Link href="/locations/bangalore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Bangalore</Link>, <Link href="/locations/hubli" style={{ color: '#1976d2', textDecoration: 'underline' }}>Hubli</Link>, <Link href="/locations/dharwad" style={{ color: '#1976d2', textDecoration: 'underline' }}>Dharwad</Link>, <Link href="/locations/mysore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Mysore</Link>, <Link href="/locations/mangalore" style={{ color: '#1976d2', textDecoration: 'underline' }}>Mangalore</Link>, and throughout the state.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>Get Loan Valuation</Typography>
                <Box sx={{ mb: 3 }}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Phone />} href="tel:+918880519265" sx={{ mb: 2 }}>+91 8880519265</Button>
                  <Button variant="outlined" color="primary" fullWidth href="mailto:asbvaluers@gmail.com">Email Us</Button>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>⏱ Report Delivery</Typography>
                  <Typography variant="body2" color="text.secondary">Within 48 hours</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>🏦 Banks Served</Typography>
                  <Typography variant="body2" color="text.secondary">30+ banks & NBFCs</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>✅ Valuations Done</Typography>
                  <Typography variant="body2" color="text.secondary">40,000+</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Property Valuation for Loan Approval?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Contact ASB Valuers & Engineers for bank-compliant property valuation reports delivered within 48 hours. Call +91 8880519265.</Typography>
            <Button variant="contained" color="primary" size="large" href="/#contact" sx={{ mt: 2 }}>Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
