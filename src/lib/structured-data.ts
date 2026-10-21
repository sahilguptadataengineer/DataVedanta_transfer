/*
  Structured data (JSON-LD, schema.org) for search engines and AI assistants.
  Built only from facts already on the website (src/data). No ratings: Google requires review counts for those.
*/
import type { Faq } from "@/data/faqs";
import { pricing } from "@/data/pricing";
import type { Program } from "@/data/programs";
import { seo, site } from "@/data/site";

const abs = (path: string) => new URL(path, site.url).toString();
const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

// The company: name, other spellings, logo, contact and social profiles.
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "Organization"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: seo.alternateNames,
    url: `${site.url}/`,
    logo: abs(site.logo.src),
    image: abs(seo.ogImage.src),
    description: seo.description,
    email: site.contact.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.contact.email,
        telephone: `+${site.contact.whatsapp}`,
        areaServed: "IN",
        availableLanguage: ["English"],
      },
    ],
    areaServed: "IN",
    ...(seo.sameAs.length > 0 ? { sameAs: seo.sameAs } : {}),
  };
}

// The website itself, linked to the company.
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: site.name,
    alternateName: seo.alternateNames,
    url: `${site.url}/`,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

// One program: what it is, who teaches it, the price of each track and that it is online.
export function courseLd(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${site.url}/programs/${program.slug}/#course`,
    name: program.name,
    alternateName: program.fullName !== program.name ? program.fullName : undefined,
    description: program.tagline,
    url: `${site.url}/programs/${program.slug}/`,
    inLanguage: "en",
    teaches: program.techStack,
    provider: { "@type": "Organization", "@id": ORG_ID, name: site.name, sameAs: `${site.url}/` },
    offers: program.tracks.map((track) => ({
      "@type": "Offer",
      name: `${program.name}: ${track.name}`,
      category: "Paid",
      price: pricing[track.id].youPay,
      priceCurrency: "INR",
      url: `${site.url}/programs/${program.slug}/#fees`,
    })),
    hasCourseInstance: program.tracks.map((track) => ({
      "@type": "CourseInstance",
      name: track.name,
      courseMode: "Online",
      // Total length of the track, e.g. "P12W" = 12 weeks.
      courseWorkload: `P${track.weeks}W`,
    })),
  };
}

// Questions and answers exactly as shown on the page.
export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// "Home > Programs > Data Science" trail.
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: abs(item.path) })),
  };
}
