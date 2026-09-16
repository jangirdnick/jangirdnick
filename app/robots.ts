import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nickdev.space';

  // Define common disallows to reuse across groups
  const commonDisallow = ['/api/'];

  return {
    rules: [
      {
        // General wildcard for all standard crawlers
        userAgent: '*',
        allow: '/',
        disallow: commonDisallow,
      },
      {
        // Explicitly whitelist AI, Search, and Generative Engine bots (GEO / AEO)
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot', // OpenAI
          'ChatGPT-User', // ChatGPT Web Browsing
          'OAI-SearchBot', // OpenAI Search
          'ClaudeBot', // Anthropic
          'anthropic-ai', // Anthropic
          'PerplexityBot', // Perplexity AI
          'Google-Extended', // Google Gemini/Vertex
        ],
        allow: '/',
        disallow: commonDisallow, // Named groups do not inherit wildcard rules, so repeat disallows
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
