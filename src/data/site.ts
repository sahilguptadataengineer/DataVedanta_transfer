/*
  Site-wide settings: name, contact details and navigation.
  Every value starting with PLACEHOLDER_ is still missing from the client (see README: pending items).
  Replace it here and the whole site updates.
*/

import { demo } from "./demo-links";

export const site = {
  name: "DataVedanta Technologies",
  url: "https://www.datavedanta.com",
  shortName: "DataVedanta",
  // Client logo (18 Oct 2026): "Data" in petrol over "Vedanta" in coral. The light version (white "Data") is for the footer.
  // The "DV" mark is the browser tab icon (src/app/icon.png, apple-icon.png, favicon.ico).
  logo: { src: "/images/brand/logo.png", lightSrc: "/images/brand/logo-light.png", width: 402, height: 180 },
  description:
    "Online programs in Generative AI, Applied AI & ML, Data Science, Data Engineering, Python and Python Full Stack.",
  demoSchedule: demo.scheduleLabel,
  contact: {
    phone: "PLACEHOLDER_PHONE",
    email: "hello@datavedanta.com",
    // Full number with country code, digits only, for example 919876543210.
    whatsapp: "917892891602",
    address: "PLACEHOLDER_ADDRESS",
  },
  whatsappMessage: "Hi DataVedanta, I would like to know more about your programs.",
} as const;

/*
  SEO / AEO settings. Used for page titles, share previews, structured data (JSON-LD), sitemap and llms.txt.
  Only facts that are already on the website.
*/
export const seo = {
  // Home page title: the brand first, so searches for "DataVedanta" match the official site.
  // Max ~60 characters, or Google cuts it off.
  homeTitle: "DataVedanta Technologies | AI & Data Science Courses",
  // 120-160 characters, or Google cuts it off.
  description:
    "Live, code-first online courses in Generative AI, AI & ML, Data Science, Data Engineering and Python Full Stack, with real projects and a free Saturday demo.",
  // Brand added after every inner page title, e.g. "FAQ | DataVedanta" (short, so titles stay under ~60 characters).
  titleSuffix: "DataVedanta",
  // Other ways people write the brand (structured data "alternateName").
  alternateNames: ["DataVedanta", "Data Vedanta", "Data Vedanta Technologies"],
  locale: "en_IN",
  // Share preview image (WhatsApp, LinkedIn, X...), 1200 x 630.
  ogImage: { src: "/og-image.png", width: 1200, height: 630, alt: "DataVedanta Technologies: Build Real Skills. Become AI Native and Industry-Ready." },
  /*
    Official social profiles (LinkedIn, Instagram, YouTube, Facebook, X...). Add the full links when the client sends them:
    Google and AI assistants use them to connect the brand to this website.
  */
  sameAs: [] as string[],
};

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs/" },
  { label: "Outcomes", href: "/outcomes/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

export const navCta: NavLink & { shortLabel: string } = {
  label: "Book free demo",
  // Shown on small phones, where the full label does not fit next to the logo and menu button.
  shortLabel: "Free demo",
  href: "/#free-demo",
};

// Header button next to "Book free demo" (client point 3). On phones and tablets: a slim bar above the header.
export const navMentor: NavLink = { label: "Apply as a mentor", href: "/mentor/" };
export const mentorBarLead = "Industry expert?";

export const footerNav: { title: string; links: NavLink[] }[] = [
  { title: "Explore", links: mainNav },
  {
    title: "Policies",
    links: [
      // Same order as the policy document: Part A (Terms) first, then Part B (Privacy).
      { label: "Terms & Conditions", href: "/terms/" },
      { label: "Privacy Policy", href: "/privacy/" },
      { label: "Refund & Cancellation Policy", href: "/refund/" },
    ],
  },
  // Client point 3.
  { title: "Join us", links: [{ label: "Apply as a mentor", href: "/mentor/" }] },
];

export const ui = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  mainNavLabel: "Main",
  footerContactTitle: "Contact",
  whatsappLabel: "Chat with us on WhatsApp",
  // Visible label on the floating button (desktop).
  whatsappShort: "WhatsApp us",
  footerWhatsapp: "WhatsApp",
  whatsappFallbackLabel: "Contact us (WhatsApp number coming soon)",
  copyright: "All rights reserved.",
  skipToContent: "Skip to content",
} as const;
