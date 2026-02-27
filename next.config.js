/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export so we can deploy to GitHub Pages (or any static host)
  output: 'export',
};

module.exports = nextConfig;
