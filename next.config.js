const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/vk-limits" : undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
