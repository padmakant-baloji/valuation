'use client'

import * as React from 'react'
import { Box, Container, Typography, Button, Paper, Grid, List, ListItem, ListItemIcon } from '@mui/material'
import { CheckCircle, Assessment } from '@mui/icons-material'

const useCases = [
  'Loan Processing',
  'Mortgage Security',
  'Financial Reporting',
  'Asset Assessment',
  'Project Feasibility',
]

export default function CTASection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'primary.main',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              Need a Bank-Approved Property Valuation?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.95,
                lineHeight: 1.7,
              }}
            >
              Get accurate, compliant, and professionally prepared valuation reports from
              certified experts.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Ideal for:
            </Typography>
            <List>
              {useCases.map((useCase, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <Typography variant="body1">{useCase}</Typography>
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => handleScrollTo('contact')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  mr: 2,
                  mb: { xs: 2, sm: 0 },
                }}
                startIcon={<Assessment />}
              >
                Request Valuation Now
              </Button>
            </Box>
            <Typography variant="body1" sx={{ mt: 3, opacity: 0.9 }}>
              Or speak directly with our experts today.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                bgcolor: 'rgba(255,255,255,0.95)',
                color: 'text.primary',
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Quick Response Guaranteed
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                Our team will contact you within 24 hours to discuss your valuation needs.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                onClick={() => handleScrollTo('contact')}
                sx={{ mt: 2 }}
              >
                Get Started
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
