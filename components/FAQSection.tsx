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
      'Our valuation reports are accepted by 30+ major banks and financial institutions including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and numerous NBFCs across Karnataka. We maintain strict compliance with RBI guidelines and bank-specific requirements, ensuring seamless loan processing for our clients.',
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
      'Our reports stand out due to our IBBI registration, Chartered Engineer credentials, 9+ years of experience, and 40,000+ completed valuations. We combine engineering precision with financial insight, ensuring accurate market analysis, thorough technical assessment, and bank-compliant documentation. Our founders include a VTU Gold Medalist and Chartered Engineer, bringing exceptional expertise to every assignment.',
  },
  {
    question: 'Can you help with project feasibility studies and residual land valuation?',
    answer:
      'Yes, we specialize in development feasibility studies, residual land valuation, revenue modeling, and project viability assessment. Our services help developers, investors, and financial institutions evaluate project potential, assess development costs, forecast returns, and make informed investment decisions. We provide comprehensive analysis combining technical, financial, and market perspectives.',
  },
  {
    question: 'How can I find out my property value?',
    answer:
      'To determine your property value, we conduct comprehensive property valuation and real estate valuation assessments. Our IBBI Registered Valuers perform on-site inspections, analyze comparable properties, assess land rate and site rate factors, review market trends, and prepare detailed valuation reports. Whether you need property valuation for loan approval, sale, or investment purposes, we provide accurate property value assessments that banks and financial institutions trust.',
  },
  {
    question: 'What is land rate and how is it determined?',
    answer:
      'Land rate refers to the per-square-foot or per-square-meter value of land in a specific location. Our land rate assessment considers factors such as location, accessibility, infrastructure development, zoning regulations, market demand, comparable land sales, development potential, and proximity to amenities. We provide accurate land rate evaluation that helps property owners, developers, and financial institutions make informed decisions about land transactions and development projects.',
  },
  {
    question: 'What is site rate and how does it differ from land rate?',
    answer:
      'Site rate is the value of a developed or partially developed plot, considering both the land value and any improvements such as boundary walls, access roads, utilities, and site preparation. Site rate evaluation includes land rate assessment plus the value of site improvements. Our site rate evaluation services help determine the fair market value of plots ready for construction, considering location, development status, infrastructure, and market conditions.',
  },
  {
    question: 'What is property appraisal and how does it help?',
    answer:
      'Property appraisal is a professional assessment of a property\'s market value conducted by certified valuers. Our property appraisal services provide accurate valuations for various purposes including loan applications, property sales, insurance, taxation, legal proceedings, and investment analysis. Our appraisals include detailed analysis of property condition, location factors, market trends, and comparable sales, ensuring reliable property value assessments.',
  },
  {
    question: 'What is included in a technical report for property valuation?',
    answer:
      'Our technical report for property valuation includes structural assessment, building condition evaluation, compliance verification with building codes and regulations, legal-technical risk analysis, construction quality review, infrastructure assessment, and recommendations. Technical reports are essential for banks, financial institutions, and investors to understand property condition, identify risks, and make informed lending or investment decisions. We provide comprehensive technical reports prepared by Chartered Engineers and IBBI Registered Valuers.',
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
          Get answers to common questions about property valuation, real estate valuation, land rate, site rate, property appraisal, technical reports, and our services
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
