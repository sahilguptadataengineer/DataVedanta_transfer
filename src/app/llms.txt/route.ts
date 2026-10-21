import { about } from "@/data/about";
import { demo } from "@/data/demo-links";
import { colleges, placedAt, stats, trainersFrom } from "@/data/home";
import { advancedAddOn, pricing } from "@/data/pricing";
import { programs } from "@/data/programs";
import { seo, site } from "@/data/site";
import { formatRupees } from "@/lib/format-price";

// Built into a static /llms.txt at build time (static export).
export const dynamic = "force-static";

/*
  /llms.txt (AEO): a plain-text summary of DataVedanta for AI assistants (ChatGPT, Gemini, Perplexity, Claude).
  Built from the same data as the website, so programs, prices and facts are always the same as on the pages.
  Format: https://llmstxt.org (title, short summary, then sections of links).
*/
function buildText(): string {
  const url = (path: string) => `${site.url}${path}`;
  const lines: string[] = [];

  lines.push(`# ${site.name}`, "");
  lines.push(`> ${seo.description}`, "");
  lines.push(`${site.name} (also written ${seo.alternateNames.join(", ")}) is an online tech training company based in India.`);
  lines.push(about.intro);
  lines.push("");
  lines.push(`- Website: ${url("/")}`);
  lines.push(`- Email: ${site.contact.email}`);
  lines.push(`- WhatsApp: +${site.contact.whatsapp}`);
  lines.push(`- ${demo.scheduleLabel}: ${url("/#free-demo")}`);
  lines.push("");

  lines.push("## At a glance", "");
  for (const s of stats) lines.push(`- ${s.label}: ${s.value}`);
  lines.push(`- ${placedAt.label}: ${placedAt.companies.map((c) => c.name).join(", ")}`);
  lines.push(`- ${colleges.label}: ${colleges.list.map((c) => c.name).join(", ")}`);
  lines.push(`- ${trainersFrom.label}: ${trainersFrom.companies.map((c) => c.name).join(", ")}`);
  lines.push("- Format: live online classes in small cohorts, about 30% concepts and 70% hands-on work, capstone projects");
  lines.push("- Included: dedicated Q&A and doubt-clearing sessions, class recordings, a verifiable certificate, career guidance");
  lines.push("");

  lines.push("## Programs", "");
  for (const p of programs) {
    const tracks = p.tracks
      .map((t) => `${t.name} ${formatRupees(pricing[t.id].youPay)} (program fee ${formatRupees(pricing[t.id].programFee)}, early bird offer)`)
      .join("; ");
    lines.push(`- [${p.name}](${url(`/programs/${p.slug}/`)}): ${p.tagline} Tracks: ${tracks}. Tools: ${p.techStack.join(", ")}. Learner rating ${p.rating}/5.`);
  }
  lines.push(
    `- Advanced 3 months: ${formatRupees(advancedAddOn.youPay)}, for learners who finished 12 Weeks Foundations and want to continue.`,
  );
  lines.push("");

  lines.push("## Key pages", "");
  lines.push(`- [All programs](${url("/programs/")})`);
  lines.push(`- [Student outcomes and capstone projects](${url("/outcomes/")})`);
  lines.push(`- [About DataVedanta](${url("/about/")})`);
  lines.push(`- [FAQ](${url("/faq/")})`);
  lines.push(`- [Contact / Apply](${url("/contact/")})`);
  lines.push(`- [Apply as a mentor](${url("/mentor/")})`);
  lines.push("");

  lines.push("## Policies", "");
  lines.push("- Pro-rata refund within 7 days of cohort start, plus a one-time batch transfer.");
  lines.push("- No job, placement or salary is promised; top-performing students may get referral opportunities at MNCs.");
  lines.push(`- [Refund & Cancellation Policy](${url("/refund/")}), [Terms & Conditions](${url("/terms/")}), [Privacy Policy](${url("/privacy/")})`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildText(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
