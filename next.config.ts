import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/doctor-appointment-site",
  assetPrefix: "/doctor-appointment-site",
};

export default nextConfig;