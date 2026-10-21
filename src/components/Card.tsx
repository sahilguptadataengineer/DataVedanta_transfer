import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  as?: "div" | "article" | "li";
  // Pops up (lifts with a soft shadow) and the border turns coral on hover, or while tapped on phones.
  interactive?: boolean;
  className?: string;
};

export function Card({ children, as: Tag = "div", interactive = false, className = "" }: CardProps) {
  const hover = interactive
    ? "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-coral hover:shadow-card active:-translate-y-1 active:border-coral active:shadow-card"
    : "";
  return (
    <Tag className={`rounded-card border border-petrol/15 bg-white p-6 sm:p-7 ${hover} ${className}`}>{children}</Tag>
  );
}
