import { Container } from "./Section";

export type Stat = { value: string; label: string };

// Petrol band with large coral numbers. Real facts only (no invented numbers, no "guarantee").
export function StatsBand({ stats, label }: { stats: Stat[]; label: string }) {
  return (
    <section aria-label={label} className="bg-petrol py-12 sm:py-14">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-white">{stat.label}</dt>
              <dd className="font-serif text-4xl text-coral sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
