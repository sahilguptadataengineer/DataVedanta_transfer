import type { ReactNode } from "react";

// Small uppercase label shown above a section heading, for example "PROGRAMS".
// tone "light": coral on dark backgrounds (coral-deep is for white backgrounds).
export function Eyebrow({ children, className = "", tone = "dark" }: { children: ReactNode; className?: string; tone?: "dark" | "light" }) {
  const colour = tone === "light" ? "text-coral" : "text-coral-deep";
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colour} ${className}`}>{children}</p>
  );
}

// Rounded tag for facts such as "12 weeks". `dot` adds a small coral dot in front. tone "light" is for dark backgrounds.
export function Chip({
  children,
  dot = false,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  dot?: boolean;
  tone?: "dark" | "light";
  className?: string;
}) {
  const colours = tone === "light" ? "border-white/20 bg-white/5 text-white" : "border-petrol/15 bg-white text-petrol";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${colours} ${className}`}>
      {dot && <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />}
      {children}
    </span>
  );
}
