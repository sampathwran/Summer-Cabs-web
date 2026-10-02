import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/__/auth/:path*',
        destination: 'https://summer-cabs-9ccec.firebaseapp.com/__/auth/:path*',
      },
    ];
  },
};

export default nextConfig;
