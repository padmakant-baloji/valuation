'use client'

import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  Home,
  AccountBalance,
  Engineering,
  Assessment,
  Construction,
  WaterDrop,
  CheckCircle,
} from '@mui/icons-material'

const services = [
  {
    icon: <Home />,
    title: 'Real Estate Valuation',
    items: [
      'Residential Properties',
      'Commercial Buildings',
      'Retail Spaces',
      'Hotels & Hospitality Assets',
      'Industrial Assets',
    ],
  },
  {
    icon: <AccountBalance />,
    title: 'Bank & NBFC Valuations',
    items: [
      'Loan security valuation',
      'Mortgage assessments',
      'Financial institution compliance reports',
    ],
  },
  {
    icon: <Engineering />,
    title: 'Technical Due Diligence',
    items: [
      'Structural review',
      'Legal-technical risk assessment',
      'Project viability evaluation',
    ],
  },
  {
    icon: <Assessment />,
    title: 'Feasibility & Residual Value Analysis',
    items: [
      'Development feasibility studies',
      'Redevelopment assessment',
      'Residual land valuation',
      'Revenue modeling',
    ],
  },
  {
    icon: <Construction />,
    title: 'Cost Engineering & Project Management',
    items: [
      'Budget planning',
      'Cost optimization',
      'Value engineering approach',
      'Construction supervision',
    ],
  },
  {
    icon: <WaterDrop />,
    title: 'Lift Irrigation Project Works',
    items: ['Planning', 'Design', 'Execution management'],
  },
]

export default function ServicesSection() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
          Comprehensive Valuation & Engineering Consultancy
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
          Professional services tailored to meet your valuation and engineering needs
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      p: 1.5,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {React.cloneElement(service.icon, { sx: { fontSize: 32 } })}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {service.title}
                  </Typography>
                </Box>
                <List dense sx={{ flexGrow: 1 }}>
                  {service.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
