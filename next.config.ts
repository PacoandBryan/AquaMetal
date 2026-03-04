import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.aqua-metal.com",
      },
      {
        protocol: "https",
        hostname: "*.wordpress.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/wp-admin/:path*",
        destination: "https://backend.aqua-metal.com/wp-admin/:path*",
      },
      {
        source: "/wp-login.php",
        destination: "https://backend.aqua-metal.com/wp-login.php",
      },
    ];
  },
};

export default nextConfig;
