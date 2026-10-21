import Link from "next/link";
import { site, ui } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { ChatIcon } from "./icons";

// Floating chat button on every page (WhatsApp green, client point 20: "WhatsApp CTA very hidden").
// Round icon on phones and tablets (the program pages have an Enroll bar there); a labelled pill on desktop.
// While the WhatsApp number is a placeholder it opens the Contact page.
export function WhatsAppButton() {
  const url = whatsappUrl(site.contact.whatsapp, site.whatsappMessage);
  const classes =
    "fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center gap-2 rounded-full bg-whatsapp text-white shadow-chip ring-4 ring-whatsapp/20 transition-transform duration-200 hover:-translate-y-0.5 sm:right-6 sm:bottom-6 lg:h-14 lg:w-auto lg:px-5";

  if (!url) {
    return (
      <Link href="/contact/" aria-label={ui.whatsappFallbackLabel} title={ui.whatsappFallbackLabel} className={classes}>
        <ChatIcon />
      </Link>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={ui.whatsappLabel} title={ui.whatsappLabel} className={classes}>
      <ChatIcon />
      <span className="hidden font-semibold lg:inline">{ui.whatsappShort}</span>
    </a>
  );
}
