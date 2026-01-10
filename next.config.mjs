//next.config.mjs
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // output: 'standalone',


  images: {
    //Disables optimisation (and cache writes) altogether if you use an external CDN;
    // trade-off is lost responsive formats.
    // unoptimized: true,

    // If you want to use an external CDN, you can specify the domains here.
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
