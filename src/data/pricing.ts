/*
  THE ONLY PLACE PRICES LIVE. Source: the client brochures (change request 01, 18 Oct 2026).
  All amounts are in rupees. youPay must equal programFee - earlyBirdDiscount (a test checks this).
  Rules: show Program fee, Early bird offer and You pay. No "+ GST" for now (user decision, 18 Oct 2026),
  no crossed-out prices, no percentages, no EMI, no end date or countdown on the offer.
*/

import type { Program } from "./programs";
import type { TrackId } from "./curriculum/types";

export type Price = {
  programFee: number;
  earlyBirdDiscount: number;
  youPay: number;
};

// 12 Weeks Foundations ("First 3 Months") and the separate Advanced 3 months ("Next 3 Months"): same price.
const threeMonth: Price = { programFee: 50000, earlyBirdDiscount: 15000, youPay: 35000 };
// 24 Weeks Advanced ("6-Month Course (Full Course)").
const sixMonth: Price = { programFee: 70000, earlyBirdDiscount: 21000, youPay: 49000 };

export const pricing: Record<TrackId, Price> = {
  "genai-12": threeMonth,
  "aiml-12": threeMonth,
  "aiml-24": sixMonth,
  "ds-12": threeMonth,
  "ds-24": sixMonth,
  "de-12": threeMonth,
  "de-24": sixMonth,
  "pfs-12": threeMonth,
  "pfs-24": sixMonth,
  "py-8": { programFee: 28500, earlyBirdDiscount: 8550, youPay: 19950 },
};

/*
  Advanced 3 months, for learners who finished the 12-week Foundations and want to continue
  (brochure "Next 3 Months (Advanced ...)"). Only for programs that have both a 12- and a 24-week track.
*/
export const advancedAddOn: Price = threeMonth;

// Foundations + Advanced bought separately vs the full 24 weeks: ₹35,000 + ₹35,000 = ₹70,000 vs ₹49,000.
export function bundleSavings(program: Program): { separately: number; full: number; saving: number } | null {
  const twelve = program.tracks.find((t) => t.weeks === 12);
  const twentyFour = program.tracks.find((t) => t.weeks === 24);
  if (!twelve || !twentyFour) return null;
  const separately = pricing[twelve.id].youPay + advancedAddOn.youPay;
  const full = pricing[twentyFour.id].youPay;
  return { separately, full, saving: separately - full };
}

// Labels shown next to each amount. Change the wording here only.
export const priceLabels = {
  programFee: "Program fee",
  earlyBirdDiscount: "Early bird offer",
  youPay: "You pay",
} as const;
