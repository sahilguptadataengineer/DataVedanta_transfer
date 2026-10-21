import { isPlaceholder } from "./placeholder";

// "917892891602" -> "+91 78928 91602" (how the number is shown on the page).
export function formatIndianNumber(number: string): string {
  const digits = number.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return local.length === 10 ? `+91 ${local.slice(0, 5)} ${local.slice(5)}` : number;
}

/*
  Builds a WhatsApp "click to chat" link: https://wa.me/<digits>?text=<message>.
  Returns null while the number is still a placeholder (or has too few digits),
  so callers can fall back to the Contact page instead of a broken link.
*/
export function whatsappUrl(number: string, message?: string): string | null {
  if (isPlaceholder(number)) return null;

  const digits = number.replace(/\D/g, "");
  if (digits.length < 10) return null;

  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}
