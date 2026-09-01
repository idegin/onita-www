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
      { source: "/products/documents", destination: "/products/docs-assistant", permanent: true },
      { source: "/products/timeline", destination: "/products/project-manager", permanent: true },
      { source: "/products/automations", destination: "/products/workflows", permanent: true },
      { source: "/products/spreadsheet", destination: "/products", permanent: true },
      { source: "/products/ai-agents", destination: "/products", permanent: true },
      { source: "/solutions", destination: "/use-cases", permanent: true },
      { source: "/solutions/:slug*", destination: "/use-cases", permanent: true },
    ];
  },
};

export default nextConfig;
