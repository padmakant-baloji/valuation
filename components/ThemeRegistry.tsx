'use client'

import * as React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep blue for trust and professionalism
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6f00', // Orange for CTAs
      light: '#ff9f40',
      dark: '#c43e00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
})

function createEmotionCache() {
  const cache = createCache({ key: 'css', prepend: true })
  cache.compat = true
  return cache
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [emotionCache] = React.useState(() => createEmotionCache())

  useServerInsertedHTML(() => {
    const { key, inserted } = emotionCache
    const names = Object.keys(inserted)

    if (names.length === 0) {
      return null
    }

    let styles = ''
    for (const name of names) {
      if (name === 'global') continue
      styles += inserted[name]
    }

    return (
      <style
        key={key}
        data-emotion={`${key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
