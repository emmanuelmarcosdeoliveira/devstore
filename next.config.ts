import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.github.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
