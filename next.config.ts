import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://sharif-portfoli-server.vercel.app/api/:path*",
      },
    ];
  },

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
