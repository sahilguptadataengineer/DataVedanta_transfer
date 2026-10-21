import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { accentTile } from "@/components/accent";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { Eyebrow } from "@/components/Chip";
import { CompanyRow } from "@/components/CompanyLogos";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HighlightHeading } from "@/components/HighlightHeading";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { featureIcons } from "@/components/icons";
import { about } from "@/data/about";
import { trainersFrom } from "@/data/home";
import { aboutPage as copy, mentorCta } from "@/data/pages";

export const metadata: Metadata = pageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: "/about/" });

// About: why we started, vision, mission and values, what we provide and how. No founder, team or mentor profiles (see README: content rules).
export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} highlight={about.highlight} description={about.intro} />

      <Section labelledBy="why-title">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-3">{about.why.eyebrow}</Eyebrow>
            <HighlightHeading id="why-title" text={about.why.title} highlight={about.why.highlight} />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink">
            {about.why.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* What drives us: vision and mission (client text). */}
      {/* Trainers' companies (client, 21 Oct 2026): company names only. */}
      <Section flushTop labelledBy="trainers-title">
        <div className="rounded-card border border-petrol/15 p-6 sm:p-10">
          <Eyebrow className="mb-3">{about.trainers.eyebrow}</Eyebrow>
          <HighlightHeading id="trainers-title" text={about.trainers.title} highlight={about.trainers.highlight} size="h3" />
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{about.trainers.text}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{trainersFrom.label}</p>
          <CompanyRow label={trainersFrom.label} companies={trainersFrom.companies} className="mt-3" />
        </div>
      </Section>

      <Section labelledBy="drives-title" className="bg-mist">
        <SectionHeader id="drives-title" eyebrow={about.drives.eyebrow} title={about.drives.title} highlight={about.drives.highlight} />
        <ul className="grid gap-6 md:grid-cols-3">
          {about.drives.items.map((item) => {
            const Icon = featureIcons[item.icon];
            return (
              <li
                key={item.title}
                className="rounded-card border border-petrol/10 bg-white p-7 shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Icon and title on one line; each box has its own icon colour. */}
                <div className="flex items-center gap-4">
                  <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${accentTile[item.accent]}`}>
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-2xl">{item.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-ink">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Core values (client text). */}
      <Section labelledBy="values-title">
        <SectionHeader id="values-title" eyebrow={about.values.eyebrow} title={about.values.title} highlight={about.values.highlight} />
        <FeatureGrid items={about.values.items} variant="subtle" />
      </Section>

      <Section flushTop labelledBy="offer-title">
        <HighlightHeading id="offer-title" text={about.offer.title} highlight={about.offer.highlight} />
        <p className="mt-4 max-w-2xl text-muted">{about.offer.intro}</p>
        {/* Grey divider between the two lists: vertical on tablets and desktop, horizontal on phones. */}
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-petrol/20">
          <div className="md:pr-10">
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-coral-deep">{copy.offerProgramsLabel}</h3>
            <CheckList items={about.offer.programs} />
          </div>
          <div className="border-t border-petrol/20 pt-10 md:border-t-0 md:pt-0 md:pl-10">
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-coral-deep">{copy.offerServicesLabel}</h3>
            <CheckList items={about.offer.services} />
          </div>
        </div>
      </Section>

      <Section flushTop labelledBy="approach-title">
        <HighlightHeading id="approach-title" text={about.approach.title} highlight={about.approach.highlight} className="mb-10" />
        <FeatureGrid items={about.approach.items} variant="subtle" />
      </Section>

      <Section flushTop labelledBy="community-title">
        {/* Two halves: petrol with a white heading | white with the text, split by a coral line. Pops up on hover. */}
        <div className="grid overflow-hidden rounded-card border border-petrol transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card active:-translate-y-1 active:shadow-card lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex items-center border-b-4 border-coral bg-petrol p-6 sm:p-10 lg:border-r-4 lg:border-b-0">
            <HighlightHeading id="community-title" text={about.community.title} highlight={about.community.highlight} tone="light" />
          </div>
          <div className="flex items-center bg-white p-6 sm:p-10">
            <p className="text-lg leading-relaxed text-ink">{about.community.text}</p>
          </div>
        </div>
      </Section>

      {/* Apply as a mentor (client point 3). */}
      <Section flushTop labelledBy="mentor-cta-title">
        <div className="flex flex-col gap-6 rounded-card border border-petrol/15 bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <HighlightHeading id="mentor-cta-title" text={mentorCta.title} highlight={mentorCta.highlight} size="h3" />
            <p className="mt-3 leading-relaxed text-muted">{mentorCta.description}</p>
          </div>
          <Button href={mentorCta.primary.href} variant="outline" className="shrink-0">
            {mentorCta.primary.label}
          </Button>
        </div>
      </Section>

      <CTASection {...copy.cta} />
    </>
  );
}
