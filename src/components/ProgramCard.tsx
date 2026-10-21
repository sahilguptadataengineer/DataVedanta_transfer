import Link from "next/link";
import type { Program } from "@/data/programs";
import { accentTile } from "./accent";
import { DemoDateShort } from "./DemoDateChip";
import { ArrowRightIcon, featureIcons, StarIcon } from "./icons";

type Props = {
  program: Program;
  labels: {
    link: string;
    trending: string;
    seats: (n: number) => string;
    rating: string;
    demo: string;
    demoFallback: string;
  };
  headingLevel?: "h2" | "h3";
};

/*
  Program card (reference design): coloured icon tile and name on one line and a one-line description.
  No 12/24-week chips on cards (client, 20 Oct 2026); the tracks are on each program page.
  Little text on purpose (client point 15) so visitors open the program page. Real proof only:
  the learner rating, the next free demo date, a "Trending" badge and the real seats left (shining red pill).
*/
export function ProgramCard({ program, labels, headingLevel: Heading = "h3" }: Props) {
  const href = `/programs/${program.slug}/`;
  const Icon = featureIcons[program.icon];
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-petrol/15 bg-white p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-coral hover:shadow-card">
      {/* Top row: "Trending" on the left, seats left on the right (real numbers, src/data/programs.ts). */}
      {(program.trending || program.seatsLeft !== null) && (
        <div className="-mt-1 mb-4 flex items-center gap-2">
          {program.trending && (
            <span className="rounded-full bg-coral/15 px-2.5 py-1 text-xs font-semibold text-coral-deep">{labels.trending}</span>
          )}
          {program.seatsLeft !== null && (
            <span className="pause-offscreen relative ml-auto overflow-hidden rounded-full bg-coral-deep px-3 py-1 text-xs font-bold text-white">
              {labels.seats(program.seatsLeft)}
              {/* Light sweep across the pill ("shine"); switched off for visitors who reduce motion. */}
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/35" />
            </span>
          )}
        </div>
      )}
      {/* Icon and program name on the same line. */}
      <div className="flex items-center gap-4">
        <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${accentTile[program.accent]}`}>
          <Icon className="size-6" />
        </span>
        <Heading className="font-serif text-xl leading-snug text-petrol">
          {/* The whole card is clickable through this link (see the after: overlay). */}
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {program.name}
          </Link>
        </Heading>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{program.tagline}</p>


      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-petrol/10 pt-4 text-sm">
        <span className="inline-flex items-center gap-1.5 font-semibold text-petrol">
          <StarIcon className="size-4 text-star" />
          {program.rating.toFixed(1)}
          <span className="font-normal text-muted">{labels.rating}</span>
        </span>
        <span className="text-muted">
          {labels.demo}{" "}
          <span className="font-semibold text-petrol">
            <DemoDateShort fallback={labels.demoFallback} />
          </span>
        </span>
      </div>

      <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-coral-deep" aria-hidden="true">
        {labels.link}
        <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
      {/* Keyboard focus ring for the whole card. */}
      <span className="pointer-events-none absolute inset-0 rounded-card ring-coral-deep ring-offset-2 group-has-[:focus-visible]:ring-2" />
    </article>
  );
}
