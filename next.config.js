/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_URL: process.env.GCA_AUTH_URL,
  }
}

module.exports = nextConfig
