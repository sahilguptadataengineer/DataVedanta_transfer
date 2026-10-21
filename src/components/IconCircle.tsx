import type { ReactNode } from "react";

const sizes = {
  sm: { circle: "size-10", dot: "size-3.5" },
  md: { circle: "size-12", dot: "size-4" },
  lg: { circle: "size-16", dot: "size-5" },
} as const;

// Sand circle with a coral dot (Option J). Pass `children` to show an icon or number instead of the dot.
export function IconCircle({
  children,
  size = "md",
  className = "",
}: {
  children?: ReactNode;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-sand text-petrol ${sizes[size].circle} ${className}`}
      aria-hidden={children ? undefined : true}
    >
      {children ?? <span className={`rounded-full bg-coral ${sizes[size].dot}`} />}
    </span>
  );
}
