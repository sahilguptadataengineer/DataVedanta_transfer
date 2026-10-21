import Link from "next/link";
import type { ReactNode } from "react";
import type { PolicyDocument as Doc, PolicyParagraph } from "@/data/policies/types";
import { Container } from "./Section";

const LINK_RE = /([a-z]+@datavedanta\.com|www\.datavedanta\.com)/;

// Makes emails and the website address clickable without changing the text.
// split() with a capture group puts every match at an odd index.
function linkify(text: string, keyPrefix: string): ReactNode[] {
  return text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.includes("@") ? `mailto:${part}` : `https://${part}`;
    return (
      <a key={`${keyPrefix}-${i}`} href={href} className="font-semibold text-coral-deep underline underline-offset-2">
        {part}
      </a>
    );
  });
}

// Renders a paragraph exactly as supplied, with the PDF's bold phrases in bold.
function Rich({ text, bold = [] }: { text: string; bold?: string[] }) {
  if (bold.length === 0) return <>{linkify(text, "t")}</>;
  const pattern = new RegExp(`(${bold.map((b) => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);
  return (
    <>
      {text.split(pattern).map((part, i) =>
        bold.includes(part) ? (
          <strong key={i} className="font-semibold text-petrol">
            {linkify(part, `b${i}`)}
          </strong>
        ) : (
          <span key={i}>{linkify(part, `p${i}`)}</span>
        ),
      )}
    </>
  );
}

function Paragraph({ p }: { p: PolicyParagraph }) {
  if (typeof p === "string") return <p>{linkify(p, "s")}</p>;
  if (p.style === "formula") return <p className="rounded-xl border border-petrol/15 px-4 py-3 font-semibold text-petrol">{p.text}</p>;
  if (p.style === "note") return <p className="text-sm text-muted">{p.text}</p>;
  return (
    <p>
      <Rich text={p.text} bold={p.bold} />
    </p>
  );
}

type Props = { doc: Doc; related: { label: string; href: string }[]; relatedLabel: string };

// The client's policy text, word for word. One H1 (the document title), numbered H2 sections.
export function PolicyDocument({ doc, related, relatedLabel }: Props) {
  return (
    <article className="py-12 sm:py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight font-medium text-petrol sm:text-5xl">{doc.title}</h1>
        {doc.subtitle && <p className="mt-4 text-lg text-muted">{doc.subtitle}</p>}

        <dl className="mt-8 divide-y divide-petrol/10 overflow-hidden rounded-card border border-petrol/15">
          {doc.meta.map((row) => (
            <div key={row.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-petrol">{row.label}</dt>
              <dd className="text-sm break-words text-ink">{linkify(row.value, row.label)}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 space-y-4 leading-relaxed text-ink">
          {doc.intro.map((p, i) => (
            <Paragraph key={i} p={p} />
          ))}
        </div>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-sans text-xl font-semibold text-petrol">{section.heading}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-ink">
              {section.paragraphs.map((p, i) => (
                <Paragraph key={i} p={p} />
              ))}
            </div>
          </section>
        ))}

        {doc.contactBox && (
          <address className="mt-10 rounded-card border border-petrol/15 p-6 not-italic">
            {doc.contactBox.map((line) => (
              <p key={line} className="font-semibold text-petrol">
                {linkify(line, line)}
              </p>
            ))}
          </address>
        )}

        <nav aria-label={relatedLabel} className="mt-14 border-t border-petrol/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{relatedLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-coral-deep hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </article>
  );
}
