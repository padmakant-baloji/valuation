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
  Security,
  Gavel,
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
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },

        // ===== ALL KEYFRAMES =====
        '@keyframes fadeSlideUp': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes fadeSlideLeft': {
          from: { opacity: 0, transform: 'translateX(40px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes kenBurns': {
          '0%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1.0)' },
        },
        '@keyframes shimmer': {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        '@keyframes pulseGlow': {
          '0%, 100%': { opacity: 0.3, transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: 0.6, transform: 'translate(-50%, -50%) scale(1.08)' },
        },
        '@keyframes floatOrb': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.1)' },
        },
        '@keyframes floatOrb2': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(20px) translateX(10px)' },
          '66%': { transform: 'translateY(-10px) translateX(-5px)' },
        },
        '@keyframes floatOrb3': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        '@keyframes heroFloat': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        '@keyframes floatCard1': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        '@keyframes floatCard2': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        '@keyframes floatCard3': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        '@keyframes meshMove': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(2%, -2%) rotate(1deg)' },
          '66%': { transform: 'translate(-1%, 1%) rotate(-0.5deg)' },
        },
        '@keyframes scanLine': {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        '@keyframes borderGlow': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
        },
        '@keyframes rotateGlow': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      }}
    >
      {/* ===== HERO BACKGROUND IMAGE with Ken Burns Animation ===== */}
      <Box
        sx={{
          position: 'absolute',
          top: '-5%',
          left: '-5%',
          right: '-5%',
          bottom: '-5%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/hero-bank-finance.png"
          alt="Bank Approved Property Valuation - Certified Professional Valuer with Financial Institution Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Ken Burns subtle zoom */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            animation: 'kenBurns 20s ease-in-out infinite',
            transformOrigin: 'center center',
          }}
        />
      </Box>

      {/* ===== DARK GRADIENT OVERLAY — heavier on left for text ===== */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background: {
            xs: `linear-gradient(
              180deg,
              rgba(7, 11, 36, 0.92) 0%,
              rgba(13, 20, 66, 0.88) 40%,
              rgba(26, 35, 126, 0.82) 70%,
              rgba(7, 11, 36, 0.90) 100%
            )`,
            md: `linear-gradient(
              120deg,
              rgba(7, 11, 36, 0.95) 0%,
              rgba(13, 20, 66, 0.90) 25%,
              rgba(26, 35, 126, 0.78) 50%,
              rgba(40, 53, 147, 0.65) 75%,
              rgba(13, 20, 66, 0.80) 100%
            )`,
          },
        }}
      />

      {/* ===== ANIMATED GRADIENT MESH ===== */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          zIndex: 2,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse at 15% 40%, rgba(99, 102, 241, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(59, 130, 246, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(255, 111, 0, 0.06) 0%, transparent 40%)
          `,
          animation: 'meshMove 20s ease-in-out infinite',
        }}
      />

      {/* ===== SUBTLE GRID OVERLAY ===== */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ===== ANIMATED SCAN LINE ===== */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '1.5px',
          zIndex: 3,
          pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.3) 30%, rgba(99, 102, 241, 0.4) 70%, transparent 100%)',
          animation: 'scanLine 10s linear infinite',
          filter: 'blur(0.5px)',
        }}
      />

      {/* ===== FLOATING DECORATIVE ORBS — gold themed for banking ===== */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, transparent 70%)',
          top: '5%',
          right: '-8%',
          filter: 'blur(50px)',
          zIndex: 2,
          animation: 'floatOrb 8s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          bottom: '10%',
          left: '3%',
          filter: 'blur(40px)',
          zIndex: 2,
          animation: 'floatOrb2 12s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 100, md: 180 },
          height: { xs: 100, md: 180 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, transparent 70%)',
          top: '45%',
          left: '50%',
          filter: 'blur(35px)',
          zIndex: 2,
          animation: 'floatOrb3 10s ease-in-out infinite',
        }}
      />

      {/* ===== FLOATING PARTICLES (gold + indigo themed) ===== */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: { xs: 2, md: i % 2 === 0 ? 4 : 3 },
            height: { xs: 2, md: i % 2 === 0 ? 4 : 3 },
            borderRadius: '50%',
            backgroundColor: i % 3 === 0
              ? 'rgba(251, 191, 36, 0.5)'
              : i % 3 === 1
                ? 'rgba(99, 102, 241, 0.4)'
                : 'rgba(74, 222, 128, 0.3)',
            top: `${8 + i * 11}%`,
            left: `${5 + i * 12}%`,
            zIndex: 3,
            animation: `particle${i} ${5 + i * 1.5}s ease-in-out infinite`,
            [`@keyframes particle${i}`]: {
              '0%, 100%': {
                transform: 'translateY(0px) translateX(0px)',
                opacity: 0.15,
              },
              '50%': {
                transform: `translateY(${-25 + i * 6}px) translateX(${12 - i * 3}px)`,
                opacity: 0.7,
              },
            },
          }}
        />
      ))}

      {/* ===== MAIN CONTENT ===== */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          {/* ===== LEFT CONTENT ===== */}
          <Grid item xs={12} md={7}>
            {/* Trust badge */}
            <Box
              sx={{
                animation: 'fadeSlideUp 0.8s ease-out forwards',
                opacity: 0,
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
                  animation: 'borderGlow 3s ease-in-out infinite',
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
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    animation: 'shimmer 3s ease-in-out infinite',
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff8f00 0%, #ffa000 100%)',
                    boxShadow: '0 12px 40px rgba(255, 111, 0, 0.5)',
                    transform: 'translateY(-3px) scale(1.02)',
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
                    bgcolor: 'rgba(255, 255, 255, 0.12)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.2)',
                  },
                }}
              >
                Schedule Consultation
              </Button>
            </Stack>

            {/* Trust indicators — banking focused */}
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
                { text: 'Bank & NBFC Compliant Reports', icon: <AccountBalance sx={{ fontSize: 18 }} /> },
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(6px)',
                        '& .trust-icon-box': {
                          bgcolor: 'rgba(74, 222, 128, 0.25)',
                          boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="trust-icon-box"
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
                        transition: 'all 0.3s ease',
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

          {/* ===== RIGHT COLUMN — Hero Image with floating stat cards ===== */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                animation: 'fadeSlideLeft 1s ease-out 0.4s forwards',
                opacity: 0,
              }}
            >
              {/* Main hero image */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 480,
                  mx: 'auto',
                  animation: 'heroFloat 6s ease-in-out infinite',
                }}
              >
                {/* Glow behind image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    height: '90%',
                    borderRadius: '30px',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(99, 102, 241, 0.15) 40%, transparent 70%)',
                    filter: 'blur(50px)',
                    zIndex: 0,
                    animation: 'pulseGlow 4s ease-in-out infinite',
                  }}
                />
                <Image
                  src="/hero-bank-finance.png"
                  alt="Bank Approved Certified Property Valuer - Professional Valuation Services for Banks and Financial Institutions"
                  width={800}
                  height={800}
                  style={{
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '24px',
                    border: '1px solid rgba(251, 191, 36, 0.2)',
                    boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(251, 191, 36, 0.1)',
                  }}
                  priority
                />
                {/* Rotating border glow effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '102%',
                    height: '102%',
                    borderRadius: '25px',
                    zIndex: 0,
                    pointerEvents: 'none',
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(251, 191, 36, 0.3) 10%, transparent 20%, rgba(99, 102, 241, 0.3) 40%, transparent 50%, rgba(74, 222, 128, 0.2) 70%, transparent 80%, rgba(251, 191, 36, 0.3) 90%, transparent 100%)',
                    animation: 'rotateGlow 8s linear infinite',
                    filter: 'blur(8px)',
                  }}
                />
              </Box>

              {/* ===== FLOATING STAT CARDS ===== */}
              {/* Top-right: Partner Banks */}
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
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  borderRadius: '16px',
                  color: 'white',
                  zIndex: 3,
                  animation: 'floatCard1 5s ease-in-out infinite',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.25)',
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

              {/* Bottom-left: Valuations Done */}
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
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                  borderRadius: '16px',
                  color: 'white',
                  zIndex: 3,
                  animation: 'floatCard2 6s ease-in-out infinite',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(74, 222, 128, 0.2)',
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

              {/* Bottom-right: Client Rating */}
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
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  borderRadius: '16px',
                  color: 'white',
                  zIndex: 3,
                  animation: 'floatCard3 7s ease-in-out infinite',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.2)',
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

        {/* ===== BOTTOM STATS BAR ===== */}
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
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.04), transparent)',
                animation: 'shimmer 6s ease-in-out infinite',
              },
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        '& .stat-icon-box': {
                          boxShadow: '0 0 20px rgba(251, 191, 36, 0.25)',
                          transform: 'scale(1.1)',
                        },
                      },
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
                      className="stat-icon-box"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '14px',
                        bgcolor: 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 0.5,
                        transition: 'all 0.3s ease',
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
