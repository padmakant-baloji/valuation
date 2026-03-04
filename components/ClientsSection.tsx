'use client'

import * as React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import Image from 'next/image'

const clients = [
  { name: 'SBI', logo: '/clients/sbi.jpg' },
  { name: 'Union Bank', logo: '/clients/union-bank.png' },
  { name: 'UCO Bank', logo: '/clients/uco-bank.png' },
  { name: 'PNB Bank', logo: '/clients/pnb-bank.jpg' },
  { name: 'IDFC First Bank', logo: '/clients/idfc-first-bank.png' },
  { name: 'Chola Finance', logo: '/clients/chola-finance.webp' },
  { name: 'Equitas Small Finance Bank', logo: '/clients/equitas-sfb.png' },
  { name: 'Nivara Home Fin', logo: '/clients/nivara-home-fin.png' },
  { name: 'Vistar Finance', logo: '/clients/vistara-finance.jpeg' },
  { name: 'Tyger Capital', logo: '/clients/tyger-capital.png' },
  {name: 'IIFL Samastha', logo: '/clients/iifl-samasta.webp'},
  {name: 'Sarvagram Fincare', logo: '/clients/sarvagram-fincare.webp'}

]

export default function ClientsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
          Our Clients
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
          Trusted by leading banks and financial institutions across India
        </Typography>

        <Grid container spacing={4}>
          {clients.map((client, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                  bgcolor: 'white',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 200,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    mx: 'auto',
                  }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                    sizes="(max-width: 600px) 150px, (max-width: 960px) 200px, 250px"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    fontWeight: 600,
                    color: 'text.primary',
                    mt: 1,
                  }}
                >
                  {client.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
