import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  eslint: {
    /** WARNING: only use while you’re stabilising this feature branch */
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.greenhuang.com',
        pathname: '/**',          // or '/docs/**' if you want to be stricter
      },
    ],
    // If you’re on < Next 15.3, you can use the simpler syntax:
    // domains: ['s3.greenhuang.com'],
  },

};

export default withMDX(config);
