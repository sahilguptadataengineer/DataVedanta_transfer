import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { accentTile } from "@/components/accent";
import { TextLink } from "@/components/Button";
import { CapstoneCard } from "@/components/CapstoneCard";
import { featureIcons } from "@/components/icons";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/Section";
import { Marquee } from "@/components/Marquee";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { outcomesPage as copy } from "@/data/pages";
import { programs } from "@/data/programs";
import { testimonials } from "@/data/testimonials";
import { longestTrack, projectSummary } from "@/lib/program-summary";

export const metadata: Metadata = pageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: "/outcomes/" });

export default function OutcomesPage() {
  // Final capstones, grouped by program: the last project section of each program's longest track.
  const groups = programs
    .map((program) => ({ program, projects: longestTrack(program).curriculum.projectSections.at(-1)?.projects ?? [] }))
    .filter((g) => g.projects.length > 0);

  return (
    <>
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} highlight={copy.highlight} description={copy.description} image={copy.image} imagePosition="right" />

      <Section labelledBy="capstones-title">
        <SectionHeader
          id="capstones-title"
          eyebrow={copy.capstones.eyebrow}
          title={copy.capstones.title}
          highlight={copy.capstones.highlight}
          description={copy.capstones.description}
        />
        {/* Course name first, then its capstone cards (client, 20 Oct 2026). */}
        <div className="space-y-14">
          {groups.map(({ program, projects }) => {
            const Icon = featureIcons[program.icon];
            return (
              <section key={program.slug} aria-labelledby={`capstones-${program.slug}`}>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-petrol/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex size-11 items-center justify-center rounded-xl ${accentTile[program.accent]}`}>
                      <Icon className="size-6" />
                    </span>
                    <h3 id={`capstones-${program.slug}`} className="text-2xl">
                      {program.name}
                    </h3>
                  </div>
                  <TextLink href={`/programs/${program.slug}/`}>{copy.capstones.viewProgram}</TextLink>
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <CapstoneCard key={project.title} title={project.title} summary={projectSummary(project)} accent={program.accent} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Section>

      <Section flushTop labelledBy="career-title">
        <SectionHeader
          id="career-title"
          eyebrow={copy.career.eyebrow}
          title={copy.career.title}
          highlight={copy.career.highlight}
          description={copy.career.description}
        />
        <FeatureGrid items={copy.career.items} variant="boxed" />
      </Section>

      {/* Testimonials: same auto-moving row as the Home page (pauses on hover). */}
      <section aria-labelledby="testimonials-title" className="pb-16 sm:pb-20 lg:pb-28">
        <Container>
          <SectionHeader
            id="testimonials-title"
            eyebrow={copy.testimonials.eyebrow}
            title={copy.testimonials.title}
            highlight={copy.testimonials.highlight}
          />
        </Container>
        <Marquee label={copy.testimonials.title} seconds={60}>
          {testimonials.map((t, i) => (
            <li key={t.author} className="w-[19rem] shrink-0 sm:w-[24rem]">
              <TestimonialCard testimonial={t} index={i} />
            </li>
          ))}
        </Marquee>
      </section>

      <CTASection {...copy.cta} />
    </>
  );
}
