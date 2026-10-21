import { DemoDateValue } from "./DemoDateChip";
import { ArrowRightIcon, featureIcons, StarIcon } from "./icons";

type Line = { text: string; tone: string };
type Props = {
  fileName: string;
  code: Line[];
  steps: string[];
  demoLabel: string;
  demoFallback: string;
  rating: string;
};

const tones: Record<string, string> = { muted: "text-white/70", plain: "text-white/90", accent: "text-coral" };

/*
  Engineering-style hero illustration (replaces the photo, client points 5 and 8): a code editor window,
  a build pipeline, and two straight (not tilted) cards: the next free demo and the learner rating.
  Purely decorative; the demo date and rating are also stated in text elsewhere on the page.
*/
export function HeroIllustration({ fileName, code, steps, demoLabel, demoFallback, rating }: Props) {
  const Calendar = featureIcons.calendar;
  return (
    <div className="relative mx-auto w-full max-w-md pb-14 lg:max-w-none">
      <div className="overflow-hidden rounded-card border border-white/10 bg-navy-soft shadow-card">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-coral" />
          <span className="size-2.5 rounded-full bg-star" />
          <span className="size-2.5 rounded-full bg-white/30" />
          <span className="ml-2 truncate font-mono text-xs text-white/60">{fileName}</span>
        </div>
        <pre className="overflow-hidden px-4 py-5 font-mono text-[12.5px] leading-6 sm:px-5 sm:text-sm" aria-hidden="true">
          {code.map((line, i) => (
            <div key={i} className={tones[line.tone]}>
              <span className="mr-4 inline-block w-4 text-right text-white/25 select-none">{i + 1}</span>
              {line.text || " "}
            </div>
          ))}
        </pre>
        <ol className="flex flex-wrap items-center gap-2 border-t border-white/10 px-4 pt-4 pb-6 sm:px-5" aria-hidden="true">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white">{step}</span>
              {i < steps.length - 1 && <ArrowRightIcon className="size-3.5 text-coral" />}
            </li>
          ))}
        </ol>
      </div>

      {/* Straight cards, lined up with the window's edges. */}
      <div className="absolute right-4 -top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-petrol shadow-chip">
        <StarIcon className="size-4 text-star" />
        {rating}
      </div>
      <div className="absolute bottom-0 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-chip sm:left-6">
        <span className="inline-flex size-10 items-center justify-center rounded-lg bg-coral text-petrol">
          <Calendar className="size-5" />
        </span>
        <div>
          <p className="text-xs text-muted">{demoLabel}</p>
          <p className="text-sm font-semibold text-petrol">
            <DemoDateValue fallback={demoFallback} />
          </p>
        </div>
      </div>
    </div>
  );
}
