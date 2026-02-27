'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Link, Stack } from '@mui/material'
import { Phone, Email, LocationOn } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              ASB Valuers & Engineers
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Professional real estate valuation and engineering consultancy firm. IBBI
              Registered Valuers trusted by 25+ Banks & Financial Institutions.
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 18 }} />
                <Link href="tel:+918880519265" color="inherit" sx={{ textDecoration: 'none' }}>
                  +91 8880519265
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 18 }} />
                <Link
                  href="mailto:asbvaluers@gmail.com"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  asbvaluers@gmail.com
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="#services" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9 }}>
                Services
              </Link>
              <Link href="#about" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9 }}>
                About Us
              </Link>
              <Link href="#contact" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9 }}>
                Contact
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Offices
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                  <LocationOn sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                  Belagavi – 590001
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                  <LocationOn sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                  Kudachi – 591311
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} ASB Valuers & Engineers. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
