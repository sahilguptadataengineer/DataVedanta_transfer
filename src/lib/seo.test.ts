import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { faqCategories } from "@/data/faqs";
import { pricing } from "@/data/pricing";
import { getProgram, programs } from "@/data/programs";
import { seo, site } from "@/data/site";
import { programDetailsPage } from "@/data/pages";
import { durationLabel } from "./program-summary";
import { pageMetadata } from "./seo";
import { breadcrumbLd, courseLd, faqLd, organizationLd, websiteLd } from "./structured-data";

describe("page tags", () => {
  it("adds the brand, the canonical address and a share preview", () => {
    const m = pageMetadata({ title: "FAQ", description: "Answers", path: "/faq/" });
    expect(m.title).toBe("FAQ");
    expect(m.alternates?.canonical).toBe("/faq/");
    expect(m.openGraph).toMatchObject({ title: `FAQ | ${seo.titleSuffix}`, url: "/faq/", siteName: site.name });
    expect(m.robots).toBeUndefined();
  });

  it("keeps the Home title as written and hides pages marked noIndex", () => {
    expect(pageMetadata({ title: seo.homeTitle, description: "x", path: "/", absoluteTitle: true }).title).toEqual({ absolute: seo.homeTitle });
    expect(pageMetadata({ title: "Thanks", description: "x", path: "/thank-you/", noIndex: true }).robots).toEqual({ index: false, follow: true });
  });

  it("starts the Home title with the brand name", () => {
    expect(seo.homeTitle.startsWith(site.name)).toBe(true);
  });

  // Google cuts titles after ~60 characters and descriptions after ~160 (SEO checker, 21 Oct 2026).
  it("keeps the Home title and description within Google's limits", () => {
    expect(seo.homeTitle.length).toBeLessThanOrEqual(60);
    expect(seo.description.length).toBeGreaterThanOrEqual(120);
    expect(seo.description.length).toBeLessThanOrEqual(160);
  });

  it.each(programs.map((p) => [p.name, p] as const))("%s page title and description fit", (_name, program) => {
    const title = `${programDetailsPage.metaTitle(program)} | ${seo.titleSuffix}`;
    const description = programDetailsPage.metaDescription(program, durationLabel(program));
    expect(title.length).toBeLessThanOrEqual(60);
    expect(description.length).toBeLessThanOrEqual(160);
  });
});

describe("structured data", () => {
  it("describes the organization with its other spellings and contact", () => {
    const org = organizationLd();
    expect(org.name).toBe("DataVedanta Technologies");
    expect(org.alternateName).toContain("Data Vedanta");
    expect(org.url).toBe("https://www.datavedanta.com/");
    expect(org.logo).toBe("https://www.datavedanta.com/images/brand/logo.png");
    expect(websiteLd().publisher).toEqual({ "@id": org["@id"] });
  });

  it.each(programs.map((p) => [p.slug] as const))("%s course uses the website prices and is online", (slug) => {
    const program = getProgram(slug)!;
    const course = courseLd(program);
    expect(course.offers.map((o) => o.price)).toEqual(program.tracks.map((t) => pricing[t.id].youPay));
    expect(course.offers.every((o) => o.priceCurrency === "INR")).toBe(true);
    expect(course.hasCourseInstance.every((c) => c.courseMode === "Online")).toBe(true);
    expect(course.provider.name).toBe(site.name);
  });

  it("lists every FAQ exactly as on the page", () => {
    const all = faqCategories.flatMap((c) => c.faqs);
    const ld = faqLd(all);
    expect(ld.mainEntity).toHaveLength(all.length);
    expect(ld.mainEntity[0].acceptedAnswer.text).toBe(all[0].answer);
  });

  it("builds a breadcrumb trail with full addresses", () => {
    const ld = breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Programs", path: "/programs/" },
    ]);
    expect(ld.itemListElement[1]).toEqual({ "@type": "ListItem", position: 2, name: "Programs", item: "https://www.datavedanta.com/programs/" });
  });
});

describe("sitemap and robots", () => {
  it("lists every public page and every program, but not the thank-you page", () => {
    const urls = sitemap().map((e) => e.url);
    for (const p of programs) expect(urls).toContain(`${site.url}/programs/${p.slug}/`);
    for (const path of ["/", "/programs/", "/outcomes/", "/about/", "/faq/", "/contact/", "/mentor/", "/privacy/", "/terms/", "/refund/"]) {
      expect(urls).toContain(`${site.url}${path}`);
    }
    expect(urls.some((u) => u.includes("thank-you"))).toBe(false);
  });

  it("lets search engines and AI crawlers in and points to the sitemap", () => {
    const r = robots();
    const rules = Array.isArray(r.rules) ? r.rules : [r.rules];
    const agents = rules.flatMap((rule) => (Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent]));
    for (const bot of ["*", "GPTBot", "OAI-SearchBot", "Google-Extended", "PerplexityBot", "ClaudeBot", "Bingbot"]) {
      expect(agents).toContain(bot);
    }
    expect(rules.every((rule) => rule.allow === "/")).toBe(true);
    expect(r.sitemap).toBe("https://www.datavedanta.com/sitemap.xml");
  });
});

describe("llms.txt", () => {
  it("summarises the company and every program with the website prices", async () => {
    const { GET } = await import("@/app/llms.txt/route");
    const text = await GET().text();
    expect(text.startsWith("# DataVedanta Technologies")).toBe(true);
    for (const p of programs) expect(text).toContain(`${site.url}/programs/${p.slug}/`);
    expect(text).toContain("₹49,000");
    expect(text).not.toMatch(/guarantee/i);
  });
});
