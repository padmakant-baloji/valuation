'use client'

import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
} from '@mui/material'
import { Engineering, School, WorkspacePremium } from '@mui/icons-material'

const teamMembers = [
  {
    name: 'Amar Bale',
    title: 'B.E (Civil Engineering), MBA',
    credentials: ['IBBI Registered Valuer – India', 'Chartered Engineer (IEI)'],
    description:
      'With over 9 years of experience and 12,000+ completed valuation assignments, Amar Bale specializes in real estate valuation, development feasibility, cost engineering, and financial risk assessment for banks and institutions.',
    icon: <Engineering sx={{ fontSize: 40 }} />,
  },
  {
    name: 'Rajani V K',
    title: 'M.Tech (Construction Technology) – VTU Gold Medalist',
    credentials: ['IOV Approved Valuer – India'],
    description:
      'With strong expertise in project management, strategic planning, feasibility studies, and real estate asset valuation, she brings technical depth and analytical excellence to every assignment.',
    icon: <School sx={{ fontSize: 40 }} />,
  },
]

export default function AboutSection() {
  return (
    <Box
      id="about"
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
          Engineering Precision. Financial Clarity.
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
          ASB Valuers & Engineers is a professional real estate valuation and engineering
          consultancy firm headquartered in Belagavi (Belgaum) with presence in Kudachi,
          Karnataka.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 80,
                        height: 80,
                      }}
                    >
                      {member.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                        {member.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    {member.credentials.map((cred, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <WorkspacePremium sx={{ color: 'secondary.main', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {cred}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {member.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={2}
          sx={{
            p: 4,
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Together, they combine engineering precision with financial insight.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
