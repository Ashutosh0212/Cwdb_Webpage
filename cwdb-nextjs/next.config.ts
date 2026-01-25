import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // If deploying to GitHub Pages subdirectory, uncomment and set:
  // basePath: process.env.NODE_ENV === 'production' ? '/Cwdb_Webpage' : '',
  // For custom domain (woolboard.in), leave basePath empty or commented
};

export default nextConfig;
