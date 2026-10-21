import type { ProgramAccent } from "@/data/programs";
import { projectIcon } from "@/lib/project-icon";
import { accentTile } from "./accent";
import { featureIcons } from "./icons";

type Props = { title: string; summary: string; accent: ProgramAccent };

/*
  One capstone project (text copied from the course PDF / brochure) with a small vector illustration on top:
  the project's icon on a tinted panel with dots and rings in the program's colour (client, 20 Oct 2026).
*/
export function CapstoneCard({ title, summary, accent }: Props) {
  const Icon = featureIcons[projectIcon(title)];
  const tint = accentTile[accent];
  return (
    <li className="group flex h-full flex-col overflow-hidden rounded-card border border-petrol/10 bg-white shadow-card transition-transform duration-200 hover:-translate-y-1">
      <div className={`relative flex h-20 items-center justify-center overflow-hidden ${tint}`} aria-hidden="true">
        <span className="absolute -top-8 -left-8 size-24 rounded-full border-8 border-current opacity-10" />
        <span className="absolute -right-6 -bottom-10 size-24 rounded-full bg-current opacity-10" />
        <span className="absolute top-5 right-10 size-2 rounded-full bg-current opacity-40" />
        <span className="absolute bottom-6 left-12 size-3 rounded-full bg-current opacity-30" />
        <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          <Icon className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-serif text-base leading-snug font-semibold text-petrol">{title}</h4>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{summary}</p>
      </div>
    </li>
  );
}
