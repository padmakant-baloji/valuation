'use client'

import * as React from 'react'
import Image from 'next/image'
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
        bgcolor: 'white',
        color: 'text.primary',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.9,
              },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src="/logo.png"
              alt="ASB Valuers & Engineers Logo"
              width={50}
              height={50}
              style={{
                objectFit: 'contain',
              }}
              priority
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                whiteSpace: 'nowrap',
                display: { xs: 'none', sm: 'block' },
                color: 'primary.main',
              }}
            >
              ASB Valuers & Engineers
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Button
              onClick={() => handleScrollTo('services')}
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
              Services
            </Button>
            <Button
              onClick={() => handleScrollTo('about')}
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
              About
            </Button>
            <Button
              onClick={() => handleScrollTo('contact')}
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
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
