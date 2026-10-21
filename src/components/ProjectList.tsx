import type { ProjectSection } from "@/data/curriculum/types";
import { projectIcon } from "@/lib/project-icon";
import { featureIcons } from "./icons";

/*
  Project sections from the course PDF (for example "Month 3 Projects"), showing only the project titles.
  Full project details (what you build, key components) belong in the curriculum brochure.
*/
export function ProjectList({ sections }: { sections: ProjectSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title} aria-label={section.title}>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-coral-deep">{section.title}</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {section.projects.map((project) => {
              const Icon = featureIcons[projectIcon(project.title)];
              return (
                <li
                  key={project.title}
                  className="group flex items-center gap-4 rounded-card border border-petrol/15 bg-white p-5 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-coral hover:shadow-card"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-coral/50 text-coral-deep transition-colors duration-200 group-hover:border-coral group-hover:bg-coral group-hover:text-petrol">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-semibold leading-snug text-petrol">{project.title}</span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
