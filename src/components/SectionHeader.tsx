import { TextLink } from "./Button";
import { Eyebrow } from "./Chip";
import { HighlightHeading } from "./HighlightHeading";

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  // Optional "View all ->" link on the right (below the heading on phones).
  action?: { label: string; href: string };
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, highlight, description, action, id, align = "left", as = "h2" }: Props) {
  const centered = align === "center";
  return (
    <div
      className={`mb-10 flex flex-col gap-4 sm:mb-12 ${
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <HighlightHeading as={as} id={id} text={title} highlight={highlight} />
        {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
      </div>
      {action && (
        <TextLink href={action.href} className="shrink-0">
          {action.label}
        </TextLink>
      )}
    </div>
  );
}
