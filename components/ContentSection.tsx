'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { Link } from '@mui/material'

export default function ContentSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 4,
                color: 'primary.main',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              How Banks Evaluate Property Before Loan Approval: A Comprehensive Guide
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.9, fontSize: '1.1rem' }}>
              When banks evaluate property for loan approval, they conduct a rigorous multi-step
              assessment process to ensure the property serves as adequate security for the loan
              amount. This evaluation is critical for risk management and regulatory compliance. As
              an IBBI Registered Valuer in Belagavi with 9+ years of experience serving 25+ banks
              and financial institutions, ASB Valuers & Engineers understands exactly what banks
              look for in property valuations.
            </Typography>

            <Typography variant="h3" component="h2" sx={{ mb: 3, mt: 5, color: 'primary.main' }}>
              The Property Valuation Process: What Banks Require
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Banks require property valuations from IBBI Registered Valuers or bank-approved
              valuers to determine the fair market value of the property. This valuation forms the
              basis for calculating the Loan-to-Value (LTV) ratio, which typically ranges from 70%
              to 90% of the property value depending on the loan type and property category.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Our valuation reports include comprehensive market analysis, comparable property
              studies, location assessment, property condition evaluation, and compliance
              verification. We ensure all reports meet RBI guidelines and bank-specific
              requirements, making the loan approval process seamless for our clients.
            </Typography>

            <Typography variant="h3" component="h2" sx={{ mb: 3, mt: 5, color: 'primary.main' }}>
              Importance of IBBI Registered Valuer Reports
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              IBBI (Insolvency and Bankruptcy Board of India) registration is mandatory for
              valuations used in insolvency proceedings, mergers, acquisitions, and often required
              by banks and NBFCs. IBBI Registered Valuers undergo rigorous certification and must
              maintain high professional standards, ensuring their reports are credible and
              legally defensible.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              ASB Valuers & Engineers is led by Amar Bale, an IBBI Registered Valuer and Chartered
              Engineer (IEI), bringing exceptional expertise to every valuation assignment. Our
              IBBI registration ensures that our reports are accepted by all major banks, financial
              institutions, and regulatory bodies across Karnataka.
            </Typography>

            <Typography variant="h3" component="h2" sx={{ mb: 3, mt: 5, color: 'primary.main' }}>
              Common Mistakes in Property Valuation and How to Avoid Them
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Property valuation errors can delay loan approvals or result in incorrect loan
              amounts. Common mistakes include inadequate market research, overlooking property
              defects, incorrect comparable property selection, ignoring legal encumbrances, and
              failing to account for location-specific factors.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Our experienced team conducts thorough on-site inspections, comprehensive market
              analysis, and detailed documentation review to avoid these pitfalls. With 12,000+
              completed valuations, we have the expertise to identify and address potential issues
              before they impact your loan application.
            </Typography>

            <Typography variant="h3" component="h2" sx={{ mb: 3, mt: 5, color: 'primary.main' }}>
              How Technical Due Diligence Reduces Financial Risk
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Technical due diligence is a comprehensive assessment of a property's physical
              condition, structural integrity, compliance with building codes, and potential risks.
              For banks and financial institutions, technical due diligence provides critical
              insights that help mitigate financial risk and make informed lending decisions.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Our technical due diligence services include structural review by Chartered Engineers,
              legal-technical risk assessment, construction quality evaluation, compliance
              verification, and project viability analysis. We identify potential issues early,
              allowing banks and investors to make informed decisions and protect their financial
              interests.
            </Typography>

            <Typography variant="h3" component="h2" sx={{ mb: 3, mt: 5, color: 'primary.main' }}>
              Why Choose ASB Valuers & Engineers for Property Valuation in Karnataka
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              With offices in Belagavi and Kudachi, ASB Valuers & Engineers is a trusted partner
              for property valuation and engineering consultancy across Karnataka. Our credentials
              include IBBI Registration, Chartered Engineer (IEI) certification, and VTU Gold
              Medalist expertise. We have completed over 12,000 valuations and serve 25+ banks and
              financial institutions.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
              Our team combines engineering precision with financial insight, ensuring accurate
              valuations that meet bank compliance requirements. We deliver bank-compliant reports
              within 48 hours, helping clients expedite loan approvals and make informed property
              investment decisions.
            </Typography>

            <Paper
              elevation={3}
              sx={{
                p: 4,
                mt: 6,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Get Your Bank-Compliant Property Valuation Report Within 48 Hours
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
                Contact ASB Valuers & Engineers today for professional property valuation services
                in Belagavi, Kudachi, and across Karnataka. Our IBBI Registered Valuers ensure
                accurate, bank-compliant reports that expedite your loan approval process.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Call us at +91 8880519265 or +91 9743307500, or email asbvaluers@gmail.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
