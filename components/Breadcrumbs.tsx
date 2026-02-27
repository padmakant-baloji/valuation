'use client'

import * as React from 'react'
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box } from '@mui/material'
import { Home, NavigateNext } from '@mui/icons-material'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const label = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return { label, href }
    }),
  ]

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <MuiBreadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ maxWidth: 'lg', mx: 'auto', px: 2 }}
      >
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          return isLast ? (
            <Typography key={crumb.href} color="text.primary" sx={{ fontWeight: 500 }}>
              {crumb.label}
            </Typography>
          ) : (
            <Link
              key={crumb.href}
              href={crumb.href}
              sx={{
                textDecoration: 'none',
                color: 'text.secondary',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {index === 0 ? <Home sx={{ fontSize: 18, verticalAlign: 'middle' }} /> : crumb.label}
            </Link>
          )
        })}
      </MuiBreadcrumbs>
    </Box>
  )
}
