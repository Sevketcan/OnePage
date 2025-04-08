/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
    ],
  },
  // Config file locations
  postcss: true,
  tailwind: true,
  typescript: true,
}

module.exports = nextConfig 