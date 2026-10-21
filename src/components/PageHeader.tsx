import type { ReactNode } from "react";
import { Eyebrow } from "./Chip";
import { HighlightHeading } from "./HighlightHeading";
import { Container } from "./Section";
import { TiltedPhoto } from "./TiltedPhoto";

// Shown tilted on a sand shape with coral circles (same style as the Home free demo photo).
type HeaderImage = { src: string; alt: string; width: number; height: number; rotateDeg: number };

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  // Optional picture beside the text on large screens (always below the text on phones).
  image?: HeaderImage;
  imagePosition?: "left" | "right";
  // Extra content under the description (chips, breadcrumbs, buttons).
  children?: ReactNode;
};

// Top of every inner page: a dark petrol band (with a faint grid) holding the eyebrow, the page's single H1 and a description.
export function PageHeader({ eyebrow, title, highlight, description, image, imagePosition = "right", children }: Props) {
  // With an image, the text has no width limit and the image takes 35% of the width (left or right).
  const hasImage = Boolean(image);
  const imageLeft = hasImage && imagePosition === "left";
  const text = (
    <div>
      {eyebrow && <Eyebrow tone="light" className="mb-4">{eyebrow}</Eyebrow>}
      <HighlightHeading as="h1" tone="light" text={title} highlight={highlight} className={hasImage ? "" : "max-w-3xl"} />
      {description && (
        <p className={`mt-5 text-lg leading-relaxed text-white/80 ${hasImage ? "" : "max-w-2xl"}`}>{description}</p>
      )}
      {children}
    </div>
  );

  return (
    <header className="bg-grid bg-navy pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
      <Container>
        {image ? (
          <div className={`grid items-center gap-10 lg:gap-12 ${imageLeft ? "lg:grid-cols-[35fr_65fr]" : "lg:grid-cols-[65fr_35fr]"}`}>
            {text}
            <TiltedPhoto
              priority
              {...image}
              className={`mx-auto w-full max-w-sm lg:max-w-none ${imageLeft ? "lg:order-first" : ""}`}
            />
          </div>
        ) : (
          text
        )}
      </Container>
    </header>
  );
}
