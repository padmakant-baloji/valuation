'use client'

import * as React from 'react'
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
} from '@mui/material'
import { WhatsApp, Close } from '@mui/icons-material'

export default function WhatsAppButton() {
  const [open, setOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    organization: '',
    location: '',
    comments: '',
  })
  const [errors, setErrors] = React.useState({
    name: false,
    organization: false,
    location: false,
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setFormData({ name: '', organization: '', location: '', comments: '' })
    setErrors({ name: false, organization: false, location: false })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      organization: !formData.organization.trim(),
      location: !formData.location.trim(),
    }
    setErrors(newErrors)
    return !newErrors.name && !newErrors.organization && !newErrors.location
  }

  const handleSend = () => {
    if (!validateForm()) {
      return
    }

    // Format the WhatsApp message
    const message = `Hello ASB Valuers & Engineers,

I would like to request a property valuation.

*Name:* ${formData.name}
*Organization:* ${formData.organization}
*Location:* ${formData.location}
${formData.comments ? `*Comments:* ${formData.comments}` : ''}

Please contact me at your earliest convenience.

Thank you!`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = '918880519265' // WhatsApp number without + or spaces
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Close dialog and reset form
    handleClose()
  }

  return (
    <>
      <Fab
        color="success"
        aria-label="whatsapp"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 24 },
          right: { xs: 20, md: 24 },
          zIndex: 1000,
          bgcolor: '#25D366',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          '&:hover': {
            bgcolor: '#20BA5A',
          },
        }}
        onClick={handleOpen}
      >
        <WhatsApp sx={{ fontSize: 32 }} />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'success.main',
            color: 'white',
            px: 3,
            pt: 3,
            pb: 2.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WhatsApp sx={{ fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Chat with Us on WhatsApp
            </Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ pt: 2, mb: 3 }}>
            Please fill in the details below and we'll send you a WhatsApp message with your
            information.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              error={errors.name}
              helperText={errors.name ? 'Name is required' : ''}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              error={errors.organization}
              helperText={errors.organization ? 'Organization is required' : ''}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              error={errors.location}
              helperText={errors.location ? 'Location is required' : ''}
              variant="outlined"
              placeholder="City, State"
            />

            <TextField
              fullWidth
              label="Comments / Additional Information"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              placeholder="Please provide any additional details about your valuation requirement..."
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2.5, gap: 2 }}>
          <Button onClick={handleClose} variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleSend}
            variant="contained"
            color="success"
            startIcon={<WhatsApp />}
            sx={{
              bgcolor: '#25D366',
              '&:hover': {
                bgcolor: '#20BA5A',
              },
            }}
          >
            Send WhatsApp Message
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
