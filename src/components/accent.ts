import type { ProgramAccent } from "@/data/programs";

// Icon-tile colours per program accent. Written out in full so Tailwind finds every class.
export const accentTile: Record<ProgramAccent, string> = {
  violet: "bg-violet/10 text-violet",
  sky: "bg-sky/10 text-sky",
  amber: "bg-amber/10 text-amber",
  emerald: "bg-emerald/10 text-emerald",
  rose: "bg-rose/10 text-rose",
  teal: "bg-teal/10 text-teal",
};

