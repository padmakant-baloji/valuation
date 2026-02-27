'use client'

import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
} from '@mui/material'
import { CheckCircle, Phone, CalendarToday } from '@mui/icons-material'

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
        color: 'white',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Trusted IBBI-Registered Valuers
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                opacity: 0.95,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
              }}
            >
              Delivering Accurate & Bank-Compliant Property Valuations
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Professional real estate valuation, technical due diligence, and engineering
              consultancy services trusted by 25+ Banks & Financial Institutions across
              Karnataka.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4 }}
            >
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
                }}
              >
                Request Bank-Approved Valuation
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleScrollTo('contact')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
                startIcon={<CalendarToday />}
              >
                Schedule Consultation
              </Button>
            </Stack>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[
                '12,000+ Valuations Completed',
                '9+ Years of Experience',
                'IBBI Registered Valuer',
                'Chartered Engineer (IEI)',
                'VTU Gold Medalist Expertise',
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
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
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                Quick Contact
              </Typography>
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Phone />}
                  href="tel:+918880519265"
                  size="large"
                >
                  +91 8880519265
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  href="mailto:asbvaluers@gmail.com"
                  size="large"
                >
                  asbvaluers@gmail.com
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
