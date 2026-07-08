import { MetadataRoute } from 'next'

// Ensure this route is statically generated so it works with `output: 'export'`
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asbvaluers.com'

  const locations = [
    'belagavi', 'karnataka', 'hubli', 'dharwad', 'bangalore', 'mysore', 
    'mangalore', 'davangere', 'gulbarga', 'shimoga', 'tumkur', 'kudachi'
  ]

  const services = [
    'ibbi-registered-valuer-belagavi',
    'bank-approved-valuation-karnataka',
    'technical-due-diligence-consultant',
    'property-valuation-for-loan',
    'residential-property-valuation',
    'commercial-property-valuation',
    'land-valuation',
    'government-approved-valuer'
  ]

  const blogs = [
    '', // for /blog itself
    'ibbi-registered-valuer-karnataka-guide',
    'property-valuation-for-loan-approval-belagavi',
    'bank-approved-valuer-karnataka',
    'land-rate-site-rate-karnataka',
    'property-valuation-methods-explained'
  ]

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]

  services.forEach(service => {
    sitemap.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  })

  locations.forEach(location => {
    sitemap.push({
      url: `${baseUrl}/locations/${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  blogs.forEach(blog => {
    sitemap.push({
      url: blog ? `${baseUrl}/blog/${blog}` : `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return sitemap
}
