/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true
  }
};

export default nextConfig;