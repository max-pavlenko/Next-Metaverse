/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', ],
    loader: 'default',
    // Додати параметр cache
    minimumCacheTTL: 60 * 60 * 24 * 30
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
