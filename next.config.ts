/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;