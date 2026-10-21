import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/Card";
import { CheckList } from "@/components/CheckList";
import { MentorForm } from "@/components/MentorForm";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { mentorPage as copy } from "@/data/pages";
import { programs } from "@/data/programs";

export const metadata: Metadata = pageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: "/mentor/" });

// "Apply as a mentor" (client point 3). Applications go to the "Mentor Applications" Sheet tab.
export default function MentorPage() {
  return (
    <>
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} highlight={copy.highlight} description={copy.description} />
      <Section flushTop className="pt-10 sm:pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">{copy.lookingFor.title}</h2>
              <CheckList items={copy.lookingFor.items} className="mt-5" />
            </div>
            <div className="rounded-card border border-petrol/15 bg-mist p-6">
              <h2 className="text-xl">{copy.next.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{copy.next.text}</p>
            </div>
          </div>
          <Card className="sm:p-10">
            <MentorForm programs={programs.map((p) => p.name)} />
          </Card>
        </div>
      </Section>
    </>
  );
}
