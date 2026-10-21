// Shape of a policy document. The text itself is the client's, copied exactly from the client's policy PDFs.

// A paragraph is plain text, or text with phrases shown in bold (as in the PDF) and an optional style.
export type PolicyParagraph =
  | string
  | {
      text: string;
      bold?: string[];
      // "formula": the refund calculation line. "note": the small grey example text.
      style?: "formula" | "note";
    };

export type PolicySection = { heading: string; paragraphs: PolicyParagraph[] };

export type PolicyDocument = {
  title: string;
  // Line under the title, as in the PDF.
  subtitle?: string;
  // Small facts table shown under the title (Entity, Effective date, ...).
  meta: { label: string; value: string }[];
  intro: PolicyParagraph[];
  sections: PolicySection[];
  // Contact box at the end of the document, one line per entry.
  contactBox?: string[];
};
