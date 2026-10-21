import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { BrochureButton } from "@/components/BrochureButton";
import { Button, buttonClasses } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CTASection } from "@/components/CTASection";
import { DemoCountdown } from "@/components/DemoCountdown";
import { EnrollButton } from "@/components/EnrollButton";
import { HighlightHeading } from "@/components/HighlightHeading";
import { JsonLd } from "@/components/JsonLd";
import { PriceBlock } from "@/components/PriceBlock";
import { ProjectList } from "@/components/ProjectList";
import { Container } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackSwitcher } from "@/components/TrackSwitcher";
import { ChatIcon, CheckIcon, StarIcon } from "@/components/icons";
import { faqCategories } from "@/data/faqs";
import { audience, placedAt } from "@/data/home";
import { programDetailsPage as copy } from "@/data/pages";
import { advancedAddOn, bundleSavings, pricing } from "@/data/pricing";
import { getProgram, programs, type Program, type Track } from "@/data/programs";
import { site } from "@/data/site";
import { formatRupees } from "@/lib/format-price";
import { durationLabel, longestTrack } from "@/lib/program-summary";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbLd, courseLd } from "@/lib/structured-data";
import { whatsappUrl } from "@/lib/whatsapp";

// Pre-build one page per program (static export needs the full list at build time).
export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const program = getProgram((await params).slug);
  if (!program) return {};
  return pageMetadata({
    title: copy.metaTitle(program),
    description: copy.metaDescription(program, durationLabel(program)),
    path: `/programs/${program.slug}/`,
  });
}

// "Download brochure": a short lead form first, then the PDF downloads (src/components/BrochureButton.tsx).
function BrochureLink({ program, variant, className = "" }: { program: Program; variant: "outline" | "outline-light"; className?: string }) {
  return <BrochureButton programName={program.name} href={program.brochure} label={copy.hero.brochure} variant={variant} className={className} />;
}

function Hero({ program }: { program: Program }) {
  const longest = longestTrack(program);
  const facts = [
    { label: copy.hero.facts.duration, value: durationLabel(program) },
    { label: copy.hero.facts.classes, value: copy.hero.facts.classesValue },
    { label: copy.hero.facts.rating, value: `${program.rating.toFixed(1)}/5`, star: true },
    program.level
      ? { label: copy.hero.facts.level, value: program.level }
      : { label: copy.hero.facts.format, value: longest.curriculum.meta.format },
  ];

  return (
    <header className="bg-grid bg-navy pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pb-20">
      <Container>
        <nav aria-label={copy.breadcrumb.navLabel}>
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li>
              <Link href={copy.breadcrumb.href} className="hover:text-white hover:underline">
                {copy.breadcrumb.label}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">
              {program.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <HighlightHeading as="h1" tone="light" text={program.name} highlight={program.highlight} />
          {program.fullName !== program.name && <p className="mt-2 text-lg font-semibold text-coral">{program.fullName}</p>}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{program.tagline}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <dt className="text-xs text-white/60">{fact.label}</dt>
                <dd className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {fact.star && <StarIcon className="size-4 text-star" />}
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={copy.hero.demo.href}>{copy.hero.demo.label}</Button>
            <BrochureLink program={program} variant="outline-light" />
          </div>
        </div>
      </Container>
    </header>
  );
}

// Sticky "On this page" tabs (reference design).
function Tabs() {
  return (
    <nav aria-label={copy.tabs.navLabel} className="sticky top-16 z-30 border-b border-petrol/10 bg-white/95 backdrop-blur lg:top-20">
      <Container>
        <ul className="-mb-px flex gap-6 overflow-x-auto">
          {copy.tabs.items.map((tab) => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                className="inline-flex min-h-12 items-center border-b-2 border-transparent text-sm font-semibold whitespace-nowrap text-petrol hover:border-coral hover:text-coral-deep"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

function Overview({ program }: { program: Program }) {
  const { differentiation } = longestTrack(program).curriculum;
  return (
    <section id="overview" aria-labelledby="overview-title" className="scroll-mt-36 space-y-12">
      <div>
        <h2 id="overview-title" className="text-2xl sm:text-3xl">
          {copy.overview.audienceTitle}
        </h2>
        <CheckList items={audience.items} className="mt-5" />
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl">{copy.overview.learnTitle}</h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {program.techStack.map((tech) => (
            <li key={tech} className="inline-flex items-center gap-2 rounded-xl border border-petrol/15 bg-white px-3.5 py-2 text-sm font-semibold text-petrol">
              <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted">{copy.overview.rolesTitle}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {program.roles.map((role) => (
            <li key={role} className="rounded-full bg-coral/15 px-3 py-1 text-sm font-medium text-coral-deep">
              {role}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-card border border-petrol/15 bg-mist p-6 sm:p-8">
        <HighlightHeading as="h2" text={copy.overview.benefitsTitle} highlight={copy.overview.benefitsHighlight} size="h3" />
        <CheckList items={differentiation.focusAreas} className="mt-6" />
        {differentiation.tagline && <p className="mt-6 font-serif text-xl text-petrol">{differentiation.tagline}</p>}
      </div>
    </section>
  );
}

function TrackCurriculum({ track }: { track: Track }) {
  const c = track.curriculum;
  const byWeeks = c.overview[0]?.label.startsWith("Week");
  return (
    <div className="space-y-12">
      <ComparisonTable
        caption={`${copy.curriculum.title}: ${track.name}`}
        columns={[
          { key: "label", label: byWeeks ? copy.curriculum.columns.weeks : copy.curriculum.columns.month },
          { key: "focus", label: copy.curriculum.columns.focus },
          { key: "outcome", label: copy.curriculum.columns.outcome },
        ]}
        rows={c.overview}
        nowrapFirst
      />

      {c.projectSections.length > 0 && (
        <div>
          <h3 className="mb-6 text-2xl">{copy.curriculum.projectsTitle}</h3>
          <ProjectList sections={c.projectSections} />
        </div>
      )}
    </div>
  );
}

function Fees({ program }: { program: Program }) {
  const savings = bundleSavings(program);
  return (
    <section id="fees" aria-labelledby="fees-title" className="scroll-mt-36">
      <HighlightHeading id="fees-title" text={copy.fees.title} highlight={copy.fees.highlight} className="mb-8" />
      <div className="grid gap-6 sm:grid-cols-2">
        {program.tracks.map((track) => (
          <div key={track.id} className="flex flex-col rounded-card border border-petrol/15 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-coral-deep">{track.name}</p>
            <p className="mt-1 text-sm text-muted">{track.label}</p>
            <div className="mt-3 flex-1">
              <PriceBlock price={pricing[track.id]} />
            </div>
            <EnrollButton
              track={track.id}
              programName={program.name}
              trackLabel={track.shortLabel}
              label={copy.fees.enroll}
              className="mt-6 w-full"
            />
          </div>
        ))}

        {savings && (
          <div className="flex flex-col rounded-card border-2 border-dashed border-petrol/20 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-coral-deep">{copy.fees.addOn.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{copy.fees.addOn.note}</p>
            <div className="mt-3 flex-1">
              <PriceBlock price={advancedAddOn} />
            </div>
            <EnrollButton
              programName={program.name}
              trackLabel={copy.fees.addOn.sheetLabel}
              label={copy.fees.addOn.enroll}
              className="mt-6 w-full"
            />
          </div>
        )}
      </div>

      {savings &&
        (() => {
          const text = copy.fees.savings({
            separately: formatRupees(savings.separately),
            full: formatRupees(savings.full),
            saving: formatRupees(savings.saving),
          });
          return (
            <div className="mt-6 flex gap-4 rounded-card border border-coral bg-coral/10 p-5 sm:p-6">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-coral text-petrol">
                <CheckIcon className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-petrol">{text.title}</p>
                <p className="mt-1 leading-relaxed text-ink">{text.text}</p>
              </div>
            </div>
          );
        })()}

    </section>
  );
}

// Sticky side card (client point 20): demo countdown, what's included, Enroll, WhatsApp and brochure.
function SideCard({ program }: { program: Program }) {
  const s = copy.sidebar;
  const whatsapp = whatsappUrl(site.contact.whatsapp, copy.whatsappMessage(program.name));
  const included = [
    program.tracks.map((t) => t.name).join(" · "),
    ...(program.level ? [program.level] : []),
    s.features.certificate,
    s.features.doubt,
    s.features.recordings,
    s.features.demo,
  ];
  return (
    <div className="rounded-card border border-petrol/15 bg-white p-6 shadow-card">
      <div className="mb-5 h-1.5 rounded-full bg-linear-to-r from-coral to-star" aria-hidden="true" />
      <DemoCountdown title={s.countdownTitle} units={s.units} loading={s.countdownLoading} />
      <ul className="mt-5 space-y-2.5">
        {included.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-ink">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-3">
        <a href="#fees" className={buttonClasses("primary", "lg", "w-full")}>
          {s.enroll}
        </a>
        {whatsapp && (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClasses("whatsapp", "lg", "w-full")}>
            <ChatIcon className="size-6" />
            {s.whatsapp}
          </a>
        )}
        <BrochureLink program={program} variant="outline" className="w-full" />
      </div>
      <p className="mt-4 text-center text-xs text-muted">{s.footnote}</p>
    </div>
  );
}

// Phones and tablets: lowest price and a jump to the fees, always at the bottom of the screen.
function MobileBar({ program }: { program: Program }) {
  const from = Math.min(...program.tracks.map((t) => pricing[t.id].youPay));
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-petrol/10 bg-white/95 py-3 pr-24 pl-4 backdrop-blur sm:pl-6 lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-sm text-muted">
          {copy.mobileBar.from} <span className="font-serif text-lg font-semibold text-petrol">{formatRupees(from)}</span>
        </p>
        <a href="#fees" className={buttonClasses("primary", "md", "shrink-0")}>
          {copy.mobileBar.viewFees}
        </a>
      </div>
    </div>
  );
}

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const program = getProgram((await params).slug);
  if (!program) notFound();

  const faqs = faqCategories.filter((c) => copy.faq.categories.includes(c.title)).flatMap((c) => c.faqs);

  return (
    <>
      <JsonLd data={courseLd(program)} />
      <JsonLd
        data={breadcrumbLd([
          { name: copy.breadcrumb.home.label, path: copy.breadcrumb.home.href },
          { name: copy.breadcrumb.label, path: copy.breadcrumb.href },
          { name: program.name, path: `/programs/${program.slug}/` },
        ])}
      />
      <Hero program={program} />
      <Tabs />

      <section aria-label={placedAt.label} className="border-b border-petrol/10 py-6">
        <Container className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{placedAt.label}</p>
          <CompanyLogos className="min-w-0 flex-1" />
        </Container>
      </section>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_22rem] lg:gap-14">
        <div className="min-w-0 space-y-16">
          <Overview program={program} />

          <section id="curriculum" aria-labelledby="curriculum-title" className="scroll-mt-36">
            <HighlightHeading id="curriculum-title" text={copy.curriculum.title} highlight={copy.curriculum.highlight} className="mb-8" />
            <TrackSwitcher
              label={copy.curriculum.trackSelectorLabel}
              options={program.tracks.map((track) => ({ id: track.id, label: track.name, panel: <TrackCurriculum track={track} /> }))}
            />
          </section>

          <Fees program={program} />

          <section id="faqs" aria-labelledby="faqs-title" className="scroll-mt-36">
            <SectionHeader id="faqs-title" title={copy.faq.title} highlight={copy.faq.highlight} action={copy.faq.action} />
            <Accordion items={faqs} />
          </section>
        </div>

        <aside className="lg:sticky lg:top-36 lg:self-start">
          <SideCard program={program} />
        </aside>
      </Container>

      <div className="pb-20 lg:pb-0">
        <CTASection {...copy.cta} />
      </div>
      <MobileBar program={program} />
    </>
  );
}
