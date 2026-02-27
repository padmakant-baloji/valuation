'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import {
  Verified,
  TrendingUp,
  Speed,
  School,
  Business,
} from '@mui/icons-material'

const benefits = [
  {
    icon: <Verified />,
    title: 'Bank-Compliant Reports',
    description: 'Prepared strictly as per financial institution and regulatory guidelines.',
  },
  {
    icon: <TrendingUp />,
    title: 'Market-Backed Valuation Methodology',
    description: 'Real-time market analysis and comparable sales approach.',
  },
  {
    icon: <Speed />,
    title: 'Fast Turnaround Time',
    description: 'Timely reporting to meet banking and financial deadlines.',
  },
  {
    icon: <School />,
    title: 'Engineering + Financial Expertise',
    description: 'Unique blend of civil engineering knowledge and financial evaluation.',
  },
  {
    icon: <Business />,
    title: 'Trusted by 25+ Institutions',
    description: 'Extensive institutional experience ensures reliability.',
  },
]

export default function WhyChooseSection() {
  return (
    <Box
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
          Why Choose ASB Valuers & Engineers?
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
          Excellence in every valuation assignment
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {React.cloneElement(benefit.icon, { sx: { fontSize: 32 } })}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mb: 1.5, fontWeight: 600, color: 'primary.main' }}
                >
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
