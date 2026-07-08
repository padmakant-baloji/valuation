'use client'

import * as React from 'react'
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box } from '@mui/material'
import { Home, NavigateNext } from '@mui/icons-material'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps = {}) {
  const pathname = usePathname()

  if (!items && pathname === '/') {
    return null
  }

  let breadcrumbs = items

  if (!breadcrumbs) {
    const pathSegments = pathname.split('/').filter(Boolean)
    breadcrumbs = [
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
  }

  return (
    <Box
      sx={{
        bgcolor: 'transparent',
        py: items ? 0 : 2,
        mb: items ? 3 : 0,
        borderBottom: items ? 'none' : '1px solid',
        borderColor: 'divider',
      }}
    >
      <MuiBreadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ maxWidth: 'lg', mx: items ? 0 : 'auto', px: items ? 0 : 2 }}
      >
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs!.length - 1
          return isLast || !crumb.href ? (
            <Typography key={crumb.label} color="text.primary" sx={{ fontWeight: 500 }}>
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
              {index === 0 && crumb.label === 'Home' ? <Home sx={{ fontSize: 18, verticalAlign: 'middle' }} /> : crumb.label}
            </Link>
          )
        })}
      </MuiBreadcrumbs>
    </Box>
  )
}

