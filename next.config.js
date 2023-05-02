const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/vk-limits" : undefined,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@vkontakte/vkui"],
  modularizeImports: {
    "@vkontakte/vkui": {
      transform: "@vkontakte/vkui/dist/cssm",
      skipDefaultConversion: true,
    },
  },
  output: "export",
};

module.exports = nextConfig;
