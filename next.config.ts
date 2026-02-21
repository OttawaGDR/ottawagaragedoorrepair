import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "garagedoorsolutionsottawa.ca",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.garagedoorsolutionsottawa.ca",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
