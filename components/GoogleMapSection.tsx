'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { LocationOn } from '@mui/icons-material'

export default function GoogleMapSection() {
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
          Our Locations
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
          Visit our offices in Belagavi and Kudachi, Karnataka
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                Belagavi Office
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                One City Home Gardens Apartment,
                <br />
                Flat No. B-504, 5th Floor,
                <br />
                Good Shed Road, Shastri Nagar,
                <br />
                Belagavi – 590001, Karnataka, India
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mt: 2,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1234567890!2d74.4977!3d15.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzU5LjAiTiA3NMKwMjknNTEuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ASB Valuers & Engineers Belagavi Office Location"
                />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                Kudachi Office
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                Behind Union Bank, Shetji Plots,
                <br />
                Kudachi, Tq: Raibag,
                <br />
                Dist: Belagavi – 591311, Karnataka, India
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mt: 2,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1234567890!2d74.4977!3d15.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzU5LjAiTiA3NMKwMjknNTEuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ASB Valuers & Engineers Kudachi Office Location"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
