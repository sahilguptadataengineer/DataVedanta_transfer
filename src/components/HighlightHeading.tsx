import type { ReactNode } from "react";

type Level = "h1" | "h2" | "h3";

const sizes: Record<Level, string> = {
  h1: "text-4xl leading-[1.1] sm:text-5xl lg:text-6xl",
  h2: "text-3xl leading-tight sm:text-4xl",
  h3: "text-xl leading-snug sm:text-2xl",
};

type Props = {
  as?: Level;
  // Visual size, when it should differ from the tag (for example an h2 styled like an h3).
  size?: Level;
  // Full heading text, for example "Programs built for high-growth careers".
  text: string;
  // The one word (or phrase) inside `text` shown in coral.
  highlight?: string;
  id?: string;
  // "light": white heading with a coral highlight, for dark (navy) backgrounds.
  tone?: "dark" | "light";
  className?: string;
};

// Serif heading with one highlight word in coral (upright, not italic: new look, change request 01).
export function HighlightHeading({ as: Tag = "h2", size, text, highlight, id, tone = "dark", className = "" }: Props) {
  const colours = tone === "light" ? { text: "text-white", em: "text-coral" } : { text: "text-petrol", em: "text-coral-deep" };
  let content: ReactNode = text;
  const index = highlight ? text.indexOf(highlight) : -1;

  if (highlight && index >= 0) {
    content = (
      <>
        {text.slice(0, index)}
        <em className={`not-italic ${colours.em}`}>{highlight}</em>
        {text.slice(index + highlight.length)}
      </>
    );
  }

  return (
    <Tag id={id} className={`font-serif font-semibold tracking-tight ${colours.text} ${sizes[size ?? Tag]} ${className}`}>
      {content}
    </Tag>
  );
}
