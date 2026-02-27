/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export so we can deploy to GitHub Pages (or any static host)
  output: 'export',
  // In static export, there is no Next.js image optimization server,
  // so serve images as regular <img> tags so assets like /logo.png work correctly.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
