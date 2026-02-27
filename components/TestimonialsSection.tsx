'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material'
import { FormatQuote } from '@mui/icons-material'

const testimonials = [
  {
    quote:
      'Highly professional and accurate valuation reports. Their compliance standards meet our institutional requirements consistently.',
    author: 'Senior Credit Manager',
    company: 'Private Bank',
  },
  {
    quote:
      'Strong technical understanding and quick turnaround. Reliable valuation partner.',
    author: 'NBFC Credit Head',
    company: 'Leading NBFC',
  },
]

export default function TestimonialsSection() {
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
            mb: 6,
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          What Our Clients Say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  bgcolor: 'background.paper',
                }}
              >
                <FormatQuote
                  sx={{
                    fontSize: 60,
                    color: 'primary.main',
                    opacity: 0.2,
                    position: 'absolute',
                    top: 10,
                    left: 10,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.primary',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                    {testimonial.author.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.company}
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
