// experimental: {appDir: true} is required to use the new app directory structure
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.sanity.io"],
  }
}
