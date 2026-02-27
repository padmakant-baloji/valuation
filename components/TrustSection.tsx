'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const trustPoints = [
  {
    title: 'Completed 12,000+ valuation assignments',
    description: 'Extensive experience across diverse property types',
  },
  {
    title: 'Associated with 25+ Banks & NBFCs',
    description: 'Trusted by leading financial institutions',
  },
  {
    title: 'Government-recognized valuation standards',
    description: 'Compliance with IBBI and regulatory requirements',
  },
  {
    title: 'Accurate, analytical & compliance-driven reports',
    description: 'Detailed analysis meeting institutional standards',
  },
  {
    title: 'Fast turnaround with market-backed assessment methods',
    description: 'Timely delivery without compromising quality',
  },
]

export default function TrustSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
          Valuation Expertise Backed by Experience & Recognition
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
          When financial decisions depend on accuracy, clients trust ASB Valuers & Engineers.
        </Typography>

        <Grid container spacing={4}>
          {trustPoints.map((point, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckCircle
                    sx={{
                      color: 'secondary.main',
                      fontSize: 32,
                      mt: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}
                    >
                      {point.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {point.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
