/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wedding-website',
  assetPrefix: '/wedding-website/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
