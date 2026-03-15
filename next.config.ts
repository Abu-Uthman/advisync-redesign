import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Old blog posts (deleted, still indexed by Google with "Core Web Hub" brand)
      {
        source: '/blog/web-development-automation-integration-melbourne',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/seo-optimization-ai-businesses-melbourne-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/ai-voice-agents-tradies-melbourne-complete-guide',
        destination: '/blog/melbourne-tradies-ai',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
