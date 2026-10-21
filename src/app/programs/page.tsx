import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { programsSection } from "@/data/home";
import { programsPage } from "@/data/pages";
import { programs } from "@/data/programs";
import { longestTrack } from "@/lib/program-summary";

export const metadata: Metadata = pageMetadata({
  title: programsPage.metaTitle,
  description: programsPage.metaDescription,
  path: "/programs/",
});

// Programs list. Fees are shown only on each program page (client point 19).
export default function ProgramsPage() {
  const { compare } = programsPage;

  return (
    <>
      <PageHeader
        eyebrow={programsPage.eyebrow}
        title={programsPage.title}
        highlight={programsPage.highlight}
        description={programsPage.description}
        image={programsPage.image}
        imagePosition="left"
      />

      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <li key={program.slug}>
              <ProgramCard program={program} labels={programsSection.card} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Section>

      <Section flushTop labelledBy="compare-title">
        <SectionHeader id="compare-title" eyebrow={compare.eyebrow} title={compare.title} highlight={compare.highlight} />
        <ComparisonTable
          caption={compare.title}
          columns={[
            { key: "program", label: compare.columns.program },
            { key: "tracks", label: compare.columns.tracks },
            { key: "format", label: compare.columns.format },
            { key: "rating", label: compare.columns.rating },
          ]}
          rows={programs.map((program) => ({
            program: program.name,
            tracks: program.tracks.map((t) => t.name).join(" · "),
            format: program.level ?? longestTrack(program).curriculum.meta.format,
            rating: `★ ${program.rating.toFixed(1)}/5`,
          }))}
        />
      </Section>

      <CTASection {...programsPage.cta} />
    </>
  );
}
