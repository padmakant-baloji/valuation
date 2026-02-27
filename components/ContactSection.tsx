'use client'

import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  Stack,
} from '@mui/material'
import { Phone, Email, LocationOn, Send } from '@mui/icons-material'

const propertyTypes = [
  'Residential Property',
  'Commercial Building',
  'Retail Space',
  'Hotel & Hospitality',
  'Industrial Asset',
  'Other',
]

const purposes = [
  'Loan Processing',
  'Mortgage Security',
  'Financial Reporting',
  'Asset Assessment',
  'Project Feasibility',
  'Other',
]

export default function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: '',
    purpose: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you within 24 hours.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      propertyType: '',
      purpose: '',
      message: '',
    })
  }

  return (
    <Box
      id="contact"
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
          Get Your Property Valuation Started
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Fill out the form below and our team will contact you within 24 hours.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Property Location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Property Type"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    >
                      {propertyTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Purpose of Valuation"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    >
                      {purposes.map((purpose) => (
                        <MenuItem key={purpose} value={purpose}>
                          {purpose}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Send />}
                      sx={{ px: 4, py: 1.5 }}
                    >
                      Submit Request
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone
                      </Typography>
                      <Button
                        href="tel:+918880519265"
                        sx={{ p: 0, textTransform: 'none', justifyContent: 'flex-start' }}
                      >
                        +91 8880519265
                      </Button>
                      <br />
                      <Button
                        href="tel:+919743307500"
                        sx={{ p: 0, textTransform: 'none', justifyContent: 'flex-start' }}
                      >
                        +91 9743307500
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Email sx={{ color: 'primary.main', mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Button
                        href="mailto:asbvaluers@gmail.com"
                        sx={{ p: 0, textTransform: 'none', justifyContent: 'flex-start' }}
                      >
                        asbvaluers@gmail.com
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </Paper>

              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Belagavi Office
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  One City Home Gardens Apartment,
                  <br />
                  Flat No. B-504, 5th Floor,
                  <br />
                  Good Shed Road, Shastri Nagar,
                  <br />
                  Belagavi – 590001
                </Typography>
              </Paper>

              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Kudachi Office
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Behind Union Bank, Shetji Plots,
                  <br />
                  Kudachi, Tq: Raibag,
                  <br />
                  Dist: Belagavi – 591311
                </Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
