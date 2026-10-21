import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { faqLd } from "@/lib/structured-data";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { faqCategories } from "@/data/faqs";
import { faqPage as copy } from "@/data/pages";

export const metadata: Metadata = pageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: "/faq/" });

const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd(faqCategories.flatMap((c) => c.faqs))} />
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} highlight={copy.highlight} description={copy.description}>
        {/* Category links on the dark header: white outline, fills white on hover. */}
        <nav aria-label={copy.eyebrow} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {faqCategories.map((c) => (
              <li key={c.title}>
                <a
                  href={`#${slug(c.title)}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/40 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-petrol"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          {faqCategories.map((category) => (
            <section key={category.title} id={slug(category.title)} aria-labelledby={`${slug(category.title)}-title`} className="scroll-mt-24">
              <h2 id={`${slug(category.title)}-title`} className="mb-5 font-serif text-2xl text-petrol">
                {category.title}
              </h2>
              <Accordion items={category.faqs} />
            </section>
          ))}
        </div>
      </Section>

      <CTASection {...copy.cta} />
    </>
  );
}
