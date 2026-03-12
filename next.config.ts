import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file-sharing-lilac.vercel.app",
      },
    ],
  },
};

export default nextConfig;
