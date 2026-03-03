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
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
