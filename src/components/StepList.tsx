import type { ProgramAccent } from "@/data/programs";
import { type FeatureIconName, featureIcons } from "./icons";

type Step = { title: string; text: string; icon: FeatureIconName; accent: ProgramAccent };
type Props = { steps: Step[]; stepLabel: string };

// Solid milestone colours (white icon), one per stage.
const solid: Record<ProgramAccent, string> = {
  violet: "bg-violet",
  sky: "bg-sky",
  amber: "bg-amber",
  emerald: "bg-emerald",
  rose: "bg-rose",
  teal: "bg-teal",
};

// Desktop drawing area (viewBox units).
const W = 1200;
const H = 660;

// Points the road passes through, bottom-left to top-right (client reference, 20 Oct 2026).
const ROAD_POINTS: [number, number][] = [
  [-40, 520],
  [170, 500],
  [330, 440],
  [480, 500],
  [640, 430],
  [790, 320],
  [930, 300],
  [1060, 210],
  [1240, 130],
];

// A smooth curve through the points (Catmull-Rom spline written as cubic Béziers).
function smoothPath(p: [number, number][]): string {
  let d = `M${p[0][0]} ${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
  }
  return d;
}
const ROAD = smoothPath(ROAD_POINTS);

/*
  One entry per stage: `pin` is a point ON the road (one of ROAD_POINTS), `dot` the milestone circle,
  `label` the text block (top-left corner, width, side). Pins alternate above and below the road.
*/
const layout = [
  { pin: ROAD_POINTS[1], dot: [170, 330], label: { x: 228, y: 262, w: 240, align: "left" } },
  { pin: ROAD_POINTS[3], dot: [480, 600], label: { x: 538, y: 556, w: 240, align: "left" } },
  { pin: ROAD_POINTS[5], dot: [790, 150], label: { x: 500, y: 100, w: 232, align: "right" } },
  { pin: ROAD_POINTS[7], dot: [1060, 410], label: { x: 772, y: 392, w: 230, align: "right" } },
] as const;

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

/*
  The 4-stage method as a road map (client references, 20 Oct 2026): a steel-blue road with white dashed lane lines
  that climbs across the full width from bottom-left to top-right, a coloured milestone with an icon for each stage
  (pins alternate above and below the road), and a finish flag at the end.
  On phones and tablets the road runs straight down the left side.
  The lane lines move slowly forward; they stand still for visitors who reduce motion.
*/
export function StepList({ steps, stepLabel }: Props) {
  return (
    <>
      {/* Desktop road map */}
      <div className="relative mx-auto hidden w-full max-w-6xl lg:block" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg className="pause-offscreen absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          {/* Road edge, road surface, moving white lane line. */}
          <path d={ROAD} className="fill-none stroke-road/25" strokeWidth="74" strokeLinecap="round" strokeLinejoin="round" />
          <path d={ROAD} className="fill-none stroke-road" strokeWidth="56" strokeLinecap="round" strokeLinejoin="round" />
          <path d={ROAD} className="animate-road fill-none stroke-white" strokeWidth="4" strokeDasharray="22 18" strokeLinecap="round" />
          {/* Pins from the road to each milestone. */}
          {layout.map(({ pin, dot }, i) => (
            <g key={i}>
              <line x1={pin[0]} y1={pin[1]} x2={dot[0]} y2={dot[1]} className="stroke-star" strokeWidth="5" strokeLinecap="round" />
              <circle cx={pin[0]} cy={pin[1]} r="11" className="fill-star stroke-white" strokeWidth="4" />
            </g>
          ))}
          {/* Finish flag at the end of the road. */}
          <g transform="translate(1150 52)">
            <line x1="0" y1="0" x2="0" y2="78" className="stroke-petrol" strokeWidth="5" strokeLinecap="round" />
            <path d="M2 2 H52 L40 18 L52 34 H2 Z" className="fill-coral" />
          </g>
        </svg>

        <ol>
          {steps.map((step, index) => {
            const Icon = featureIcons[step.icon];
            const { dot, label } = layout[index];
            return (
              <li key={step.title}>
                <span
                  className={`absolute inline-flex aspect-square w-[7.5%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-star text-white shadow-card ${solid[step.accent]}`}
                  style={{ left: pct(dot[0], W), top: pct(dot[1], H) }}
                >
                  <Icon className="size-7" />
                </span>
                <div
                  className={`absolute ${label.align === "right" ? "text-right" : "text-left"}`}
                  style={{ left: pct(label.x, W), top: pct(label.y, H), width: pct(label.w, W) }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-coral-deep">
                    {stepLabel} {index + 1}
                  </p>
                  <h3 className="mt-1 font-sans text-base font-bold tracking-wide text-petrol uppercase">{step.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Phones and tablets: the road runs straight down the left, milestones sit on it. */}
      <ol className="relative mx-auto max-w-xl lg:hidden">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[22px] w-[26px] rounded-full border-[3px] border-road/25 bg-road" />
        <span aria-hidden="true" className="absolute top-4 bottom-4 left-[34px] border-l-2 border-dashed border-white" />
        {steps.map((step, index) => {
          const Icon = featureIcons[step.icon];
          return (
            <li key={step.title} className="relative flex items-start gap-5 pb-8 last:pb-0">
              <span
                className={`relative inline-flex size-[70px] shrink-0 items-center justify-center rounded-full border-4 border-star text-white shadow-card ${solid[step.accent]}`}
              >
                <Icon className="size-7" />
              </span>
              <div className="min-w-0 flex-1 rounded-card border border-petrol/10 bg-white p-5 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-coral-deep">
                  {stepLabel} {index + 1}
                </p>
                <h3 className="mt-1 font-sans text-base font-bold tracking-wide text-petrol uppercase">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
