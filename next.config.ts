import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.resolve(process.cwd()),
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.theprosteps.com" }], destination: "https://theprosteps.com/:path*", permanent: true }];
  },
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" }
    ] }];
  }
};
export default config;
