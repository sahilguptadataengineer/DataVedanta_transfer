import type { ReactNode } from "react";

type Props = {
  // "arch": Option J hero shape (rounded top). "rounded": plain rounded box.
  shape?: "arch" | "rounded";
  className?: string;
  // Floating chips (for example the next demo date) placed over the image.
  children?: ReactNode;
};

// Sand placeholder used until real images arrive. Decorative, so hidden from screen readers.
export function ImagePlaceholder({ shape = "arch", className = "", children }: Props) {
  const radius = shape === "arch" ? "rounded-t-arch rounded-b-card" : "rounded-card";
  return (
    <div className={`relative ${className}`}>
      <div className={`flex h-full w-full items-center justify-center bg-sand ${radius}`} aria-hidden="true">
        <span className="size-20 rounded-full bg-coral sm:size-28" />
      </div>
      {children}
    </div>
  );
}

// White floating card that overlaps an image (reference pattern).
export function FloatingChip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`absolute rounded-2xl border border-petrol/10 bg-white px-4 py-3 shadow-chip ${className}`}>
      {children}
    </div>
  );
}
