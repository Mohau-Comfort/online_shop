/** @type {import('next').NextConfig} */

module.exports = {

  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

}