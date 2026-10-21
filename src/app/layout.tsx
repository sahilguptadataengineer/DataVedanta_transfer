import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { AnimationsInView } from "@/components/AnimationsInView";
import { CallbackPopup } from "@/components/CallbackPopup";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";
import { MentorBar } from "@/components/MentorBar";
import { Nav } from "@/components/Nav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { seo, site, ui } from "@/data/site";
import { organizationLd, websiteLd } from "@/lib/structured-data";
import "./globals.css";

// Body font. Variable font, so every weight is available.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font: a crisp serif, as in the client's reference design (change request 01).
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

// Site-wide tags. Each page adds its own title, description and canonical address (src/lib/seo.ts).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.homeTitle,
    template: `%s | ${seo.titleSuffix}`,
  },
  description: seo.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: seo.locale, type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-coral px-5 py-3 font-semibold text-petrol focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {ui.skipToContent}
        </a>
        <MentorBar />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CallbackPopup />
        {/* Who we are, for search engines and AI assistants (on every page). */}
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
        <Analytics />
        <AnimationsInView />
      </body>
    </html>
  );
}
