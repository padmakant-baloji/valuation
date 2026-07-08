'use client'

import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Chip,
} from '@mui/material'
import {
  CheckCircle,
  Phone,
  CalendarToday,
  TrendingUp,
  AccountBalance,
  Assessment,
  Verified,
  Star,
  ArrowForward,
} from '@mui/icons-material'
import Image from 'next/image'

// Animated counter hook
function useCounter(end: number, duration: number = 2000, suffix: string = '') {
  const [count, setCount] = React.useState(0)
  const [started, setStarted] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  React.useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  return { count, ref, suffix }
}

export default function HeroSection() {
  const valuations = useCounter(40000, 2500, '+')
  const banks = useCounter(30, 2000, '+')
  const experience = useCounter(10, 1800, '+')
  const rating = useCounter(49, 1500, '')

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a0f2e 0%, #1a237e 40%, #283593 70%, #0d1442 100%)',
        color: 'white',
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { md: '92vh' },
        display: 'flex',
        alignItems: 'center',
        // Animated gradient mesh background
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
          `,
          animation: 'meshMove 20s ease-in-out infinite',
          '@keyframes meshMove': {
            '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
            '33%': { transform: 'translate(2%, -2%) rotate(1deg)' },
            '66%': { transform: 'translate(-1%, 1%) rotate(-0.5deg)' },
          },
        },
        // Subtle grid overlay
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Floating decorative orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 111, 0, 0.12) 0%, transparent 70%)',
          top: '10%',
          right: '-5%',
          filter: 'blur(40px)',
          animation: 'floatOrb 8s ease-in-out infinite',
          '@keyframes floatOrb': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-30px) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          bottom: '15%',
          left: '5%',
          filter: 'blur(30px)',
          animation: 'floatOrb2 10s ease-in-out infinite',
          '@keyframes floatOrb2': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(20px)' },
          },
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: { xs: 3, md: 4 },
            height: { xs: 3, md: 4 },
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
            animation: `particle${i} ${6 + i * 2}s ease-in-out infinite`,
            [`@keyframes particle${i}`]: {
              '0%, 100%': {
                transform: 'translateY(0px) translateX(0px)',
                opacity: 0.2,
              },
              '50%': {
                transform: `translateY(${-20 + i * 5}px) translateX(${10 - i * 3}px)`,
                opacity: 0.6,
              },
            },
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={7}>
            {/* Trust badge */}
            <Box
              sx={{
                animation: 'fadeSlideUp 0.8s ease-out forwards',
                opacity: 0,
                '@keyframes fadeSlideUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Chip
                icon={<Verified sx={{ color: '#4ade80 !important', fontSize: 18 }} />}
                label="IBBI Registered & Bank Approved Valuer"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(74, 222, 128, 0.1)',
                  color: '#4ade80',
                  border: '1px solid rgba(74, 222, 128, 0.25)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  py: 2.5,
                  px: 1,
                  borderRadius: '50px',
                  backdropFilter: 'blur(10px)',
                  '& .MuiChip-icon': { ml: 1 },
                }}
              />
            </Box>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem', lg: '3.6rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                animation: 'fadeSlideUp 0.8s ease-out 0.15s forwards',
                opacity: 0,
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Professional Property Valuation & Real Estate Services
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: 580,
                animation: 'fadeSlideUp 0.8s ease-out 0.3s forwards',
                opacity: 0,
              }}
            >
              Accurate Land Rate Assessment, Site Rate Evaluation & Technical Reports.
              Trusted by <strong style={{ color: '#fbbf24' }}>30+ Banks & Financial Institutions</strong> across Karnataka.
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                mb: 5,
                animation: 'fadeSlideUp 0.8s ease-out 0.45s forwards',
                opacity: 0,
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => handleScrollTo('contact')}
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #ff6f00 0%, #ff8f00 100%)',
                  boxShadow: '0 8px 32px rgba(255, 111, 0, 0.35)',
                  borderRadius: '14px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff8f00 0%, #ffa000 100%)',
                    boxShadow: '0 12px 40px rgba(255, 111, 0, 0.45)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Request Valuation
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleScrollTo('contact')}
                startIcon={<CalendarToday />}
                sx={{
                  px: 4,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  color: 'white',
                  borderRadius: '14px',
                  backdropFilter: 'blur(10px)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Schedule Consultation
              </Button>
            </Stack>

            {/* Trust indicators with icons */}
            <Grid
              container
              spacing={1.5}
              sx={{
                animation: 'fadeSlideUp 0.8s ease-out 0.6s forwards',
                opacity: 0,
              }}
            >
              {[
                { text: '40,000+ Valuations Completed', icon: <Assessment sx={{ fontSize: 18 }} /> },
                { text: '10+ Years of Experience', icon: <TrendingUp sx={{ fontSize: 18 }} /> },
                { text: 'IBBI Registered Valuer', icon: <Verified sx={{ fontSize: 18 }} /> },
                { text: 'Chartered Engineer (IEI)', icon: <Star sx={{ fontSize: 18 }} /> },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 0.8,
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'translateX(4px)' },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 28,
                        height: 28,
                        borderRadius: '8px',
                        bgcolor: 'rgba(74, 222, 128, 0.12)',
                        color: '#4ade80',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column - Illustration + Stats */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                animation: 'fadeSlideLeft 1s ease-out 0.4s forwards',
                opacity: 0,
                '@keyframes fadeSlideLeft': {
                  from: { opacity: 0, transform: 'translateX(40px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                },
              }}
            >
              {/* Main illustration with glow effect */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 480,
                  mx: 'auto',
                  animation: 'heroFloat 6s ease-in-out infinite',
                  '@keyframes heroFloat': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                  },
                }}
              >
                {/* Glow behind image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    zIndex: 0,
                  }}
                />
                <Image
                  src="/hero-illustration.png"
                  alt="Professional Property Valuation - Building analysis with data analytics"
                  width={480}
                  height={480}
                  style={{
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                  }}
                  priority
                />
              </Box>

              {/* Animated stat cards floating around the image */}
              {/* Top-right stat card */}
              <Paper
                elevation={0}
                sx={{
                  position: 'absolute',
                  top: { xs: -8, md: -5 },
                  right: { xs: -5, md: -20 },
                  p: 1.5,
                  px: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  color: 'white',
                  zIndex: 2,
                  animation: 'floatCard1 5s ease-in-out infinite',
                  '@keyframes floatCard1': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                  },
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '10px',
                      bgcolor: 'rgba(251, 191, 36, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AccountBalance sx={{ color: '#fbbf24', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography
                      ref={banks.ref}
                      variant="h6"
                      sx={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.2 }}
                    >
                      {banks.count}+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}
                    >
                      Partner Banks
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Bottom-left stat card */}
              <Paper
                elevation={0}
                sx={{
                  position: 'absolute',
                  bottom: { xs: 20, md: 40 },
                  left: { xs: -5, md: -30 },
                  p: 1.5,
                  px: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  color: 'white',
                  zIndex: 2,
                  animation: 'floatCard2 6s ease-in-out infinite',
                  '@keyframes floatCard2': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(10px)' },
                  },
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '10px',
                      bgcolor: 'rgba(74, 222, 128, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUp sx={{ color: '#4ade80', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography
                      ref={valuations.ref}
                      variant="h6"
                      sx={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.2 }}
                    >
                      {valuations.count.toLocaleString()}+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}
                    >
                      Valuations Done
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Rating badge */}
              <Paper
                elevation={0}
                sx={{
                  position: 'absolute',
                  bottom: { xs: -10, md: 0 },
                  right: { xs: 10, md: 0 },
                  p: 1.5,
                  px: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  color: 'white',
                  zIndex: 2,
                  animation: 'floatCard3 7s ease-in-out infinite',
                  '@keyframes floatCard3': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-6px)' },
                  },
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '10px',
                      bgcolor: 'rgba(251, 191, 36, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Star sx={{ color: '#fbbf24', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography
                      ref={rating.ref}
                      variant="h6"
                      sx={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.2 }}
                    >
                      {(rating.count / 10).toFixed(1)}
                      <Typography
                        component="span"
                        sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', ml: 0.3 }}
                      >
                        /5
                      </Typography>
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}
                    >
                      Client Rating
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Stats Bar */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            animation: 'fadeSlideUp 0.8s ease-out 0.75s forwards',
            opacity: 0,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              p: { xs: 3, md: 4 },
            }}
          >
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              {[
                {
                  icon: <Assessment sx={{ fontSize: 28, color: '#818cf8' }} />,
                  value: '40,000+',
                  label: 'Valuations Completed',
                },
                {
                  icon: <AccountBalance sx={{ fontSize: 28, color: '#fbbf24' }} />,
                  value: '30+',
                  label: 'Banks & NBFCs',
                },
                {
                  icon: <TrendingUp sx={{ fontSize: 28, color: '#4ade80' }} />,
                  value: '10+',
                  label: 'Years Experience',
                },
                {
                  icon: <Verified sx={{ fontSize: 28, color: '#38bdf8' }} />,
                  value: '48 Hrs',
                  label: 'Report Delivery',
                },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Stack
                    alignItems="center"
                    spacing={1}
                    sx={{
                      position: 'relative',
                      '&::after': index < 3 ? {
                        content: '""',
                        position: 'absolute',
                        right: { xs: 'auto', md: 0 },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '40px',
                        width: '1px',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        display: { xs: 'none', md: 'block' },
                      } : {},
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '14px',
                        bgcolor: 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 0.5,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: 'white',
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.8rem',
                        textAlign: 'center',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
