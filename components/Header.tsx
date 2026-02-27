'use client'

import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material'
import { Phone } from '@mui/icons-material'

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'primary.main',
        boxShadow: 3,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            ASB Valuers & Engineers
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Button color="inherit" onClick={() => handleScrollTo('services')}>
              Services
            </Button>
            <Button color="inherit" onClick={() => handleScrollTo('about')}>
              About
            </Button>
            <Button color="inherit" onClick={() => handleScrollTo('contact')}>
              Contact
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Phone />}
              href="tel:+918880519265"
              sx={{ ml: 2 }}
            >
              Call Now
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href="tel:+918880519265"
            >
              <Phone />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
