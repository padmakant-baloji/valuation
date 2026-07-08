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
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from '@mui/material'
import { 
  Phone, 
  Email, 
  LocationOn, 
  Send,
  Person,
  LocationCity,
  Business,
  Assignment,
  ChatBubbleOutline
} from '@mui/icons-material'

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
  
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [successOpen, setSuccessOpen] = React.useState(false)
  const [errorOpen, setErrorOpen] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      setSuccessOpen(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        propertyType: '',
        purpose: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSuccessOpen(false)
    setErrorOpen(false)
  }

  return (
    <React.Fragment>
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'grey.50', // Softer background
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.25rem', md: '3rem' }
              }}
            >
              Get Your Property Valuation Started
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Fill out the form below and our expert team will get in touch with you within 24 hours to discuss your valuation needs.
            </Typography>
          </Box>

          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 5 }, 
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  boxShadow: '0px 10px 40px -10px rgba(0,0,0,0.08)'
                }}
              >
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
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person color="action" />
                            </InputAdornment>
                          ),
                        }}
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
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone color="action" />
                            </InputAdornment>
                          ),
                        }}
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
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email color="action" />
                            </InputAdornment>
                          ),
                        }}
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
                        placeholder="e.g. Belagavi, Kudachi"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationCity color="action" />
                            </InputAdornment>
                          ),
                        }}
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
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Business color="action" />
                            </InputAdornment>
                          ),
                        }}
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
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Assignment color="action" />
                            </InputAdornment>
                          ),
                        }}
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
                        label="Message (Optional)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                              <ChatBubbleOutline color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{ 
                          py: 1.8, 
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 2,
                          textTransform: 'none',
                          boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)'
                        }}
                      >
                        {isSubmitting ? (
                          <CircularProgress size={26} color="inherit" />
                        ) : (
                          <>
                            Submit Request
                            <Send sx={{ ml: 1, fontSize: 20 }} />
                          </>
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 4, 
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0px 10px 40px -10px rgba(0,0,0,0.1)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 700 }}>
                      Contact Information
                    </Typography>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'primary.50' }}>
                          <Phone sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box>
                          <Typography variant="body2" color="text.secondary" fontWeight={500}>
                            Phone
                          </Typography>
                          <Typography 
                            component="a" 
                            href="tel:+918880519265"
                            sx={{ color: 'text.primary', textDecoration: 'none', display: 'block', fontWeight: 600, '&:hover': { color: 'primary.main' } }}
                          >
                            +91 8880519265
                          </Typography>
                          <Typography 
                            component="a" 
                            href="tel:+919743307500"
                            sx={{ color: 'text.primary', textDecoration: 'none', display: 'block', fontWeight: 600, '&:hover': { color: 'primary.main' } }}
                          >
                            +91 9743307500
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'primary.50' }}>
                          <Email sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box>
                          <Typography variant="body2" color="text.secondary" fontWeight={500}>
                            Email
                          </Typography>
                          <Typography 
                            component="a" 
                            href="mailto:asbvaluers@gmail.com"
                            sx={{ color: 'text.primary', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'primary.main' } }}
                          >
                            asbvaluers@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                <Card 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 4, 
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0px 10px 40px -10px rgba(0,0,0,0.1)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ mr: 1 }} />
                      Belagavi Office
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, pl: 4 }}>
                      One City Home Gardens Apartment,<br />
                      Flat No. B-504, 5th Floor,<br />
                      Good Shed Road, Shastri Nagar,<br />
                      Belagavi – 590001
                    </Typography>
                  </CardContent>
                </Card>

                <Card 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 4, 
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0px 10px 40px -10px rgba(0,0,0,0.1)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ mr: 1 }} />
                      Kudachi Office
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, pl: 4 }}>
                      Behind Union Bank, Shetji Plots,<br />
                      Kudachi, Tq: Raibag,<br />
                      Dist: Belagavi – 591311
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar 
        open={successOpen} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', borderRadius: 2, fontWeight: 500 }}>
          Thank you! We have received your request and will get back to you shortly.
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar 
        open={errorOpen} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%', borderRadius: 2, fontWeight: 500 }}>
          There was an error submitting your request. Please try again or contact us directly.
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}
