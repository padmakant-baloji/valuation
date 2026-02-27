'use client'

import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const faqs = [
  {
    question: 'What is an IBBI Registered Valuer and why is it important?',
    answer:
      'An IBBI (Insolvency and Bankruptcy Board of India) Registered Valuer is a professional certified by the IBBI to conduct property valuations. IBBI registration is mandatory for valuations used in insolvency proceedings, mergers, acquisitions, and often required by banks and financial institutions. ASB Valuers & Engineers is IBBI registered, ensuring all our valuation reports meet the highest regulatory standards and are accepted by banks, NBFCs, and financial institutions across Karnataka.',
  },
  {
    question: 'How long does it take to get a bank-compliant property valuation report?',
    answer:
      'We typically deliver bank-compliant property valuation reports within 48 hours of property inspection. For urgent requirements, we offer expedited services. The timeline depends on property size, complexity, and documentation availability. Our team conducts thorough on-site inspections, market analysis, and prepares comprehensive reports that meet all bank compliance requirements.',
  },
  {
    question: 'Which banks and financial institutions accept your valuation reports?',
    answer:
      'Our valuation reports are accepted by 25+ major banks and financial institutions including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and numerous NBFCs across Karnataka. We maintain strict compliance with RBI guidelines and bank-specific requirements, ensuring seamless loan processing for our clients.',
  },
  {
    question: 'What types of properties do you value?',
    answer:
      'We provide valuation services for residential properties, commercial buildings, retail spaces, hotels and hospitality assets, industrial properties, vacant land, and specialized real estate assets. Our expertise covers all property types required for loan security, mortgage assessments, financial reporting, project feasibility studies, and technical due diligence.',
  },
  {
    question: 'What is included in a technical due diligence report?',
    answer:
      'Our technical due diligence reports include structural assessment, legal-technical risk evaluation, construction quality analysis, compliance verification with building codes and regulations, project viability assessment, and recommendations for risk mitigation. This comprehensive analysis helps banks, investors, and developers make informed decisions and reduce financial risk.',
  },
  {
    question: 'Do you provide valuation services outside Belagavi and Kudachi?',
    answer:
      'Yes, we provide property valuation and engineering consultancy services across Karnataka. While our primary offices are in Belagavi and Kudachi, we regularly conduct valuations in major cities including Bangalore, Hubli, Dharwad, Mysore, Mangalore, and throughout Karnataka. We have extensive experience serving clients across the state.',
  },
  {
    question: 'What documents are required for property valuation?',
    answer:
      'Required documents typically include property title deeds, sale deed, encumbrance certificate, property tax receipts, approved building plans, occupancy certificate, NOC from relevant authorities, and any existing loan documents. Our team will provide a complete checklist based on your specific property type and valuation purpose.',
  },
  {
    question: 'How do banks evaluate property before loan approval?',
    answer:
      'Banks evaluate properties through multiple factors: market value assessment by registered valuers, legal title verification, property condition and construction quality, location and marketability, compliance with building regulations, and loan-to-value (LTV) ratio calculation. Our valuation reports address all these criteria, providing banks with the comprehensive analysis needed for loan approval decisions.',
  },
  {
    question: 'What makes your valuation reports different from others?',
    answer:
      'Our reports stand out due to our IBBI registration, Chartered Engineer credentials, 9+ years of experience, and 12,000+ completed valuations. We combine engineering precision with financial insight, ensuring accurate market analysis, thorough technical assessment, and bank-compliant documentation. Our founders include a VTU Gold Medalist and Chartered Engineer, bringing exceptional expertise to every assignment.',
  },
  {
    question: 'Can you help with project feasibility studies and residual land valuation?',
    answer:
      'Yes, we specialize in development feasibility studies, residual land valuation, revenue modeling, and project viability assessment. Our services help developers, investors, and financial institutions evaluate project potential, assess development costs, forecast returns, and make informed investment decisions. We provide comprehensive analysis combining technical, financial, and market perspectives.',
  },
]

export default function FAQSection() {
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          Get answers to common questions about property valuation, IBBI registration, and our
          services
        </Typography>

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                boxShadow: 2,
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
                sx={{
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: 'background.paper', pt: 2 }}>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
