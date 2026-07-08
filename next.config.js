/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // so serve images as regular <img> tags so assets like /logo.png work correctly.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
