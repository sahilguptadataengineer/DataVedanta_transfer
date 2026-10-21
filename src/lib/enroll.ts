import type { TrackId } from "@/data/curriculum/types";
import { manualEnrollment, razorpayLinks } from "@/data/razorpay-links";
import { site } from "@/data/site";
import { isPlaceholder } from "./placeholder";
import { whatsappUrl } from "./whatsapp";

export type EnrollTarget = { kind: "razorpay"; href: string } | { kind: "whatsapp" };

/*
  What the Enroll button does for a program track.
  Real Razorpay link -> open the Razorpay Payment Page. Still a placeholder -> manual enrollment:
  a short form, then WhatsApp with the student's details (src/components/EnrollButton.tsx).
*/
export function enrollTarget(track: TrackId): EnrollTarget {
  const link = razorpayLinks[track];
  return isPlaceholder(link) ? { kind: "whatsapp" } : { kind: "razorpay", href: link };
}

// WhatsApp link with the prefilled enrollment message, or null if the WhatsApp number is not set.
export function enrollmentWhatsAppUrl(details: {
  program: string;
  track: string;
  name: string;
  phone: string;
  email: string;
}): string | null {
  return whatsappUrl(site.contact.whatsapp, manualEnrollment.whatsappMessage(details));
}
