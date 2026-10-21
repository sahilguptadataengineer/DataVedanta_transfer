import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Built into a static /robots.txt at build time (static export).
export const dynamic = "force-static";

/*
  Rules for search engines and AI crawlers (SEO + AEO).
  Everyone may read the site, including the AI assistants' crawlers (ChatGPT, Gemini, Perplexity, Claude, Bing Copilot),
  so they can learn about DataVedanta and link to it. Only the thank-you page is skipped.
*/
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/thank-you/"] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: ["/thank-you/"] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
