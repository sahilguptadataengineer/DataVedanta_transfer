import { Container } from "./Section";
import { type FeatureIconName, featureIcons } from "./icons";

export type StatItem = { value: string; label: string; icon: FeatureIconName };

// White card with 4 key figures and icons, overlapping the bottom of the dark hero (reference design). Real facts only.
export function StatsRow({ stats, label }: { stats: StatItem[]; label: string }) {
  return (
    <Container className="relative z-10 -mt-12 sm:-mt-14">
      <section aria-label={label} className="rounded-card border border-petrol/10 bg-white p-5 shadow-card sm:p-7">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = featureIcons[stat.icon];
            return (
              <li key={stat.label} className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-coral/15 text-coral-deep sm:size-12" aria-hidden="true">
                  <Icon className="size-6" />
                </span>
                <p className="flex min-w-0 flex-col">
                  <span className="font-serif text-2xl font-semibold text-petrol sm:text-3xl">{stat.value}</span>
                  <span className="text-xs leading-snug text-muted sm:text-sm">{stat.label}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
}
