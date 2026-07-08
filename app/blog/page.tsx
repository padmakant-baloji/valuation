import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material'
import Link from 'next/link'
import Script from 'next/script'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Property Valuation Blog | Expert Insights & Guides | ASB Valuers',
  description: 'Expert blog on property valuation, land rate, site rate, IBBI registered valuers, bank-approved valuation, and real estate insights in Karnataka. Get guidance from 40,000+ valuation experts.',
  keywords: ['Property Valuation Blog', 'Real Estate Valuation Insights', 'IBBI Valuer Blog', 'Land Rate Guide', 'Property Valuation Tips Karnataka'],
  alternates: { canonical: 'https://asbvaluers.com/blog' },
}

const blogPosts = [
  {
    slug: 'ibbi-registered-valuer-karnataka-guide',
    title: 'Complete Guide to IBBI Registered Valuer in Karnataka: Why It Matters',
    excerpt: 'Everything you need to know about IBBI Registered Valuers in Karnataka – what they do, why IBBI registration matters, and how to choose the right valuer for your property.',
    date: '2025-01-15',
    keywords: 'IBBI Registered Valuer, Karnataka',
  },
  {
    slug: 'property-valuation-for-loan-approval-belagavi',
    title: 'Property Valuation for Loan Approval in Belagavi: Step-by-Step Process',
    excerpt: 'A complete step-by-step guide to getting property valuation for home loan, LAP, and mortgage approval in Belagavi and Karnataka.',
    date: '2025-01-20',
    keywords: 'Property Valuation, Loan Approval, Belagavi',
  },
  {
    slug: 'bank-approved-valuer-karnataka',
    title: 'Bank Approved Valuer in Karnataka: Everything You Need to Know',
    excerpt: 'Learn about bank-approved valuers, why banks require approved valuation reports, and how ASB Valuers serves 30+ banks across Karnataka.',
    date: '2025-02-01',
    keywords: 'Bank Approved Valuer, Karnataka',
  },
  {
    slug: 'land-rate-site-rate-karnataka',
    title: 'Understanding Land Rate and Site Rate in Karnataka: Complete Guide',
    excerpt: 'Comprehensive guide to understanding land rate, site rate, and how they are determined for properties across Karnataka.',
    date: '2025-02-10',
    keywords: 'Land Rate, Site Rate, Karnataka',
  },
  {
    slug: 'property-valuation-methods-explained',
    title: 'Property Valuation Methods Explained: Market, Income & Cost Approach',
    excerpt: 'Learn about the three primary property valuation methods – market comparison, income capitalization, and cost approach – and when each is used.',
    date: '2025-02-20',
    keywords: 'Property Valuation Methods, Valuation Approach',
  },
]

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asbvaluers.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://asbvaluers.com/blog' },
    ],
  }

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Box sx={{ pt: 10, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
          <Typography variant="h1" component="h1" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Property Valuation Blog – Expert Insights & Guides
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800 }}>
            Expert articles on property valuation, land rate assessment, IBBI registered valuers, bank-approved valuation, and real estate insights from our team with 40,000+ valuations experience.
          </Typography>

          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} md={6} key={post.slug}>
                <Paper elevation={3} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                  <Typography variant="overline" color="text.secondary" sx={{ mb: 1 }}>
                    {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} • {post.keywords}
                  </Typography>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h5" component="h2" sx={{ mb: 2, color: 'primary.main', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, flex: 1 }}>
                    {post.excerpt}
                  </Typography>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary">Read More →</Button>
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Paper elevation={3} sx={{ p: 4, mt: 6, bgcolor: 'primary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Need Professional Property Valuation?</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              Contact ASB Valuers & Engineers for IBBI Registered Valuer services. Bank-compliant reports within 48 hours. Call +91 8880519265.
            </Typography>
            <Button variant="contained" color="secondary" size="large" href="/#contact">Request Valuation Now</Button>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
