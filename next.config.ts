import type { NextConfig } from "next";

const noIndexHeaders = [
  {
    key: "X-Robots-Tag",
    value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
  },
];

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      { source: "/portal", headers: noIndexHeaders },
      { source: "/portal/:path*", headers: noIndexHeaders },
    ];
  },
  async redirects() {
    return [
      { source: "/products/dashboard", destination: "/products/dashboards", permanent: true },
      { source: "/products/documents", destination: "/products/docs", permanent: true },
      { source: "/products/docs-assistant", destination: "/products/docs", permanent: true },
      { source: "/products/timeline", destination: "/products/spreadsheet", permanent: true },
      { source: "/products/database", destination: "/products/spreadsheet", permanent: true },
      { source: "/products/automations", destination: "/products/flow", permanent: true },
      { source: "/products/workflows", destination: "/products/flow", permanent: true },
      { source: "/solutions", destination: "/use-cases", permanent: true },
      { source: "/solutions/:slug*", destination: "/use-cases/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;
