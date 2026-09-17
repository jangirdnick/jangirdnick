import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cache Components enables Partial Prerendering (PPR) — Next.js 16.3+
  // All routes in this portfolio are fully static (no request-time reads),
  // so every page renders as ○ (Static) with instant navigation support.
  cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
};

export default nextConfig;
