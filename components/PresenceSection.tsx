'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { LocationOn, Business } from '@mui/icons-material'

const locations = ['Belagavi (Belgaum)', 'Kudachi', 'Surrounding districts']

const clients = [
  'Banks',
  'NBFCs',
  'Financial Institutions',
  'Chartered Accountants',
  'Insolvency Professionals',
  'Builders & Developers',
  'Corporate Clients',
  'Individual Property Owners',
]

export default function PresenceSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                color: 'primary.main',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <LocationOn sx={{ fontSize: 40 }} />
              Our Presence
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              Serving clients across Karnataka, with strong operational presence in:
            </Typography>
            <Grid container spacing={2}>
              {locations.map((location, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      bgcolor: 'background.default',
                      borderLeft: 4,
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {location}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 3, fontStyle: 'italic' }}>
              We provide on-site inspections and professional valuation services across multiple
              cities and districts.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                color: 'primary.main',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Business sx={{ fontSize: 40 }} />
              Who We Serve
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              Trusted by diverse clients across industries:
            </Typography>
            <Grid container spacing={2}>
              {clients.map((client, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {client}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
