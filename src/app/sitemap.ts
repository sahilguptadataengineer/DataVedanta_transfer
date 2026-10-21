import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { site } from "@/data/site";

// Built into a static /sitemap.xml at build time (static export).
export const dynamic = "force-static";

// Every public page, for Google and Bing. The thank-you page is left out on purpose (not for search).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/programs/", 0.9, "weekly"),
    ...programs.map((p) => page(`/programs/${p.slug}/`, 0.9, "weekly")),
    page("/outcomes/", 0.7, "monthly"),
    page("/about/", 0.7, "monthly"),
    page("/faq/", 0.7, "monthly"),
    page("/contact/", 0.6, "monthly"),
    page("/mentor/", 0.5, "monthly"),
    page("/terms/", 0.2, "yearly"),
    page("/privacy/", 0.2, "yearly"),
    page("/refund/", 0.2, "yearly"),
  ];
}
