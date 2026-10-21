import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  // Accessible name of the list, for example "Our learners work at".
  label: string;
  // Seconds for one full loop (more items or wider items need more time).
  seconds?: number;
  className?: string;
};

/*
  Auto-moving strip (company names, testimonials). The items are rendered twice so the loop is seamless;
  the copy is hidden from screen readers. It pauses on hover and keyboard focus. With "reduce motion"
  turned on, it does not move and becomes a normal horizontal scroll instead.
*/
export function Marquee({ children, label, seconds = 35, className = "" }: Props) {
  return (
    <div className={`pause-offscreen mask-fade-x overflow-hidden motion-reduce:overflow-x-auto ${className}`}>
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${seconds}s` }}
      >
        <ul aria-label={label} className="flex shrink-0 items-stretch gap-6 pr-6">
          {children}
        </ul>
        <ul aria-hidden="true" inert className="flex shrink-0 items-stretch gap-6 pr-6 motion-reduce:hidden">
          {children}
        </ul>
      </div>
    </div>
  );
}
