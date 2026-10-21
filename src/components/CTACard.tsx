import type { ReactNode } from "react";
import { HighlightHeading } from "./HighlightHeading";
import { type FeatureIconName, featureIcons } from "./icons";
import { IconCircle } from "./IconCircle";

type Props = {
  title: string;
  highlight?: string;
  description?: string;
  // Optional line icon shown instead of the sand circle; it fills coral when the card is hovered.
  icon?: FeatureIconName;
  // Buttons go here, for example <Button>Book free demo</Button>.
  children: ReactNode;
};

// Wide rounded card used at the end of pages to lead into the next action.
export function CTACard({ title, highlight, description, icon, children }: Props) {
  const Icon = icon ? featureIcons[icon] : null;
  return (
    <div className="group flex flex-col items-start gap-6 rounded-card border border-petrol/15 bg-white p-6 shadow-card transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-coral sm:p-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-start gap-5">
        {Icon ? (
          <span className="hidden size-16 shrink-0 items-center justify-center rounded-2xl border border-coral/50 text-coral-deep transition-[background-color,color,transform] duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:border-coral group-hover:bg-coral group-hover:text-petrol sm:inline-flex">
            <Icon className="size-8" />
          </span>
        ) : (
          <IconCircle size="lg" className="hidden sm:inline-flex" />
        )}
        <div>
          <HighlightHeading as="h2" text={title} highlight={highlight} />
          {description && <p className="mt-3 max-w-xl leading-relaxed text-muted">{description}</p>}
        </div>
      </div>
      {/* shrink-0 + nowrap: the buttons keep their labels on one line next to long text. */}
      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row [&>*]:whitespace-nowrap">{children}</div>
    </div>
  );
}
