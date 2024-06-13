/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa");
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [`${hostname}`],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
const pwa = process.env.NEXT_PWA_STATUS;
const nextConfigWithPwa = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
})(nextConfig); // Corrected this line
module.exports = pwa === "1" ? nextConfigWithPwa : nextConfig;
