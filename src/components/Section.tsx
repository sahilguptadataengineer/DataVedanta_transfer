import type { ReactNode } from "react";

// Centred page width with the standard side gutters (16 px on phones).
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type SectionProps = {
  children: ReactNode;
  id?: string;
  // "normal" for most sections; "tight" for bands that sit close to their neighbours.
  spacing?: "normal" | "tight";
  // No top padding: for sections that follow another white section (avoids a double gap).
  flushTop?: boolean;
  className?: string;
  labelledBy?: string;
};

// Every page section uses this so vertical spacing is the same everywhere.
export function Section({ children, id, spacing = "normal", flushTop = false, className = "", labelledBy }: SectionProps) {
  const top = flushTop ? "" : spacing === "normal" ? "pt-16 sm:pt-20 lg:pt-28" : "pt-10 sm:pt-12";
  const bottom = spacing === "normal" ? "pb-16 sm:pb-20 lg:pb-28" : "pb-10 sm:pb-12";
  const padding = `${top} ${bottom}`;
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-20 ${padding} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
