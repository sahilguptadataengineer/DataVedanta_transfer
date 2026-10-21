import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { Chip, Eyebrow } from "@/components/Chip";
import { CompanyLogos, CompanyRow } from "@/components/CompanyLogos";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HeroIllustration } from "@/components/HeroIllustration";
import { HighlightHeading } from "@/components/HighlightHeading";
import { LeadForm } from "@/components/LeadForm";
import { Marquee } from "@/components/Marquee";
import { ProgramCard } from "@/components/ProgramCard";
import { Container, Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsRow } from "@/components/StatsRow";
import { StepList } from "@/components/StepList";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TiltedPhoto } from "@/components/TiltedPhoto";
import { StarIcon } from "@/components/icons";
import {
  audience,
  averageRating,
  colleges,
  comparison,
  freeDemo,
  hero,
  highlights,
  method,
  placedAt,
  problem,
  programsSection,
  stats,
  statsLabel,
  testimonialsSection,
  trainersFrom,
} from "@/data/home";
import { programs } from "@/data/programs";
import { seo } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/seo";

// Home: brand-first title so a search for "DataVedanta" finds the official site.
export const metadata: Metadata = pageMetadata({ title: seo.homeTitle, description: seo.description, path: "/", absoluteTitle: true });

export default function HomePage() {
  return (
    <>
      {/* Hero: dark petrol band with a faint grid (reference design). Extra bottom space for the stats card. */}
      <section className="bg-grid overflow-hidden bg-navy pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
        {/* min-w-0: the code window must not stretch the column wider than a phone screen. */}
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] [&>*]:min-w-0">
          <div>
            <Chip dot tone="light">
              {hero.eyebrow}
            </Chip>
            <HighlightHeading as="h1" tone="light" text={hero.title} highlight={hero.highlight} className="mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline-light">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              {hero.proof.map((item, i) => (
                <li key={item} className="inline-flex items-center gap-2">
                  {i === 0 ? <StarIcon className="size-4 text-star" /> : <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeroIllustration {...hero.illustration} rating={`${averageRating}/5`} />
        </Container>
      </section>

      <StatsRow label={statsLabel} stats={stats} />

      {/* Colleges + companies (client point 25). */}
      <section aria-label={placedAt.label} className="pt-14 pb-4 sm:pt-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{colleges.label}</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {colleges.list.map((college) => (
                <li
                  key={college.name}
                  className="inline-flex h-14 items-center gap-2.5 rounded-xl border border-petrol/15 bg-white px-4 font-serif text-lg font-semibold text-petrol"
                >
                  {college.logo ? (
                    <>
                      <Image
                        src={college.logo.src}
                        alt={`${college.name} logo`}
                        width={college.logo.width}
                        height={college.logo.height}
                        className="h-10 w-auto"
                      />
                      {college.showName && <span aria-hidden="true">{college.name}</span>}
                    </>
                  ) : (
                    <>
                      <span className="inline-flex size-7 items-center justify-center rounded-md bg-petrol font-sans text-xs font-bold text-white" aria-hidden="true">
                        {college.name[0]}
                      </span>
                      {college.name}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{placedAt.label}</p>
            <CompanyLogos className="mt-3" />
          </div>
          {/* Trainers' companies (client, 21 Oct 2026): company names only. */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{trainersFrom.label}</p>
            <CompanyRow label={trainersFrom.label} companies={trainersFrom.companies} className="mt-3" />
          </div>
        </Container>
      </section>

      {/* Programs */}
      <Section labelledBy="programs-title">
        <SectionHeader
          id="programs-title"
          eyebrow={programsSection.eyebrow}
          title={programsSection.title}
          highlight={programsSection.highlight}
          description={programsSection.description}
          action={programsSection.action}
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <li key={program.slug}>
              <ProgramCard program={program} labels={programsSection.card} />
            </li>
          ))}
        </ul>
      </Section>

      {/* What makes our learning experience different (client text) */}
      <Section labelledBy="highlights-title" className="bg-mist">
        <SectionHeader id="highlights-title" eyebrow={highlights.eyebrow} title={highlights.title} highlight={highlights.highlight} />
        <FeatureGrid items={highlights.items} variant="boxed" columns={3} />
      </Section>

      {/* The problem */}
      <Section labelledBy="problem-title">
        <SectionHeader
          id="problem-title"
          eyebrow={problem.eyebrow}
          title={problem.title}
          highlight={problem.highlight}
          description={problem.text}
        />
        <ComparisonTable
          caption={problem.title}
          columns={[
            { key: "area", label: problem.columns.area },
            { key: "academic", label: problem.columns.academic },
            { key: "industry", label: problem.columns.industry },
          ]}
          rows={problem.rows}
          emphasis="industry"
        />
        <p className="mt-8 font-serif text-xl text-petrol sm:text-2xl">{problem.takeaway}</p>
      </Section>

      {/* How we're different */}
      <Section labelledBy="comparison-title" flushTop>
        <SectionHeader id="comparison-title" eyebrow={comparison.eyebrow} title={comparison.title} highlight={comparison.highlight} />
        <ComparisonTable
          caption={comparison.title}
          columns={[
            { key: "topic", label: "" },
            { key: "generic", label: comparison.columns.generic },
            { key: "ours", label: comparison.columns.ours },
          ]}
          rows={comparison.rows}
          emphasis="ours"
        />
      </Section>

      {/* 4-stage method */}
      <Section labelledBy="method-title" className="bg-mist">
        <SectionHeader id="method-title" eyebrow={method.eyebrow} title={method.title} highlight={method.highlight} align="center" />
        <StepList steps={method.stages} stepLabel={method.stepLabel} />
      </Section>

      {/* Testimonials: auto-scrolling row (client point 26). */}
      <section aria-labelledby="testimonials-title" className="py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionHeader id="testimonials-title" eyebrow={testimonialsSection.eyebrow} title={testimonialsSection.title} highlight={testimonialsSection.highlight} />
        </Container>
        <Marquee label={testimonialsSection.title} seconds={60}>
          {testimonials.map((t, i) => (
            <li key={t.author} className="w-[19rem] shrink-0 sm:w-[24rem]">
              <TestimonialCard testimonial={t} index={i} />
            </li>
          ))}
        </Marquee>
      </section>

      {/* Who it's for */}
      <Section labelledBy="audience-title" flushTop>
        <div className="grid gap-10 rounded-card border border-petrol/15 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow className="mb-3">{audience.eyebrow}</Eyebrow>
            <HighlightHeading id="audience-title" text={audience.title} highlight={audience.highlight} />
          </div>
          <CheckList items={audience.items} />
        </div>
      </Section>

      {/* Free demo */}
      <Section id="free-demo" labelledBy="free-demo-title" className="bg-mist">
        <div className="grid items-center gap-10 rounded-card border border-petrol/15 bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2">
          <div>
            <TiltedPhoto {...freeDemo.image} className="mb-8" />
            <Eyebrow className="mb-3">{freeDemo.eyebrow}</Eyebrow>
            <HighlightHeading id="free-demo-title" text={freeDemo.title} highlight={freeDemo.highlight} />
            <p className="mt-4 leading-relaxed text-muted">{freeDemo.text}</p>
            <CheckList items={freeDemo.points} className="mt-6" />
          </div>
          <div className="sm:rounded-card sm:border sm:border-petrol/10 sm:p-8">
            <LeadForm type="demo" idPrefix="demo" programs={programs.map(({ slug, name }) => ({ slug, name }))} />
          </div>
        </div>
      </Section>
    </>
  );
}
