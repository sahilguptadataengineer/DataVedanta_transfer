import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { HighlightHeading } from "@/components/HighlightHeading";
import { Section } from "@/components/Section";
import { thankYouPage as copy } from "@/data/pages";
import { ThankYouMessage } from "./ThankYouMessage";

// Not shown in search results.
export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: "/thank-you/",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <Section>
      {/* The message depends on ?type=, which is only known in the browser. The fallback is the generic enquiry text. */}
      <Suspense
        fallback={
          <div className="mx-auto max-w-2xl text-center">
            <HighlightHeading as="h1" text={copy.enquiry.title} highlight={copy.enquiry.highlight} />
            <p className="mt-5 text-lg text-muted">{copy.enquiry.text}</p>
          </div>
        }
      >
        <ThankYouMessage />
      </Suspense>
    </Section>
  );
}
