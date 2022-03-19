/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'seeded-session-images.scdn.co'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
