import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/original/**',
      },
      {
        protocol: 'https',
        hostname: 'www.syfy.com',
        pathname: '/sites/syfy/files/styles/**',
      },{
        protocol:"http",
        hostname:'image.tmdb.org',
        pathname:'/t/p/w500/**'
      }
    ],
  },
  eslint:{
    ignoreDuringBuilds:true,
  }
};


export default nextConfig;
