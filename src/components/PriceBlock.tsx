import type { Price } from "@/data/pricing";
import { priceLabels } from "@/data/pricing";
import { formatDiscount, formatRupees } from "@/lib/format-price";

/*
  The ONLY way prices are shown: Program fee, Early bird offer, You pay (no "+ GST" for now, 18 Oct 2026).
  No crossed-out prices, no percentages.
*/
export function PriceBlock({ price, compact = false }: { price: Price; compact?: boolean }) {
  const row = compact ? "py-1.5 text-sm" : "py-2.5";
  return (
    <dl className="divide-y divide-petrol/10">
      <div className={`flex items-baseline justify-between gap-4 ${row}`}>
        <dt className="text-muted">{priceLabels.programFee}</dt>
        <dd className="text-ink">{formatRupees(price.programFee)}</dd>
      </div>
      <div className={`flex items-baseline justify-between gap-4 ${row}`}>
        <dt className="text-muted">{priceLabels.earlyBirdDiscount}</dt>
        <dd className="text-coral-deep">{formatDiscount(price.earlyBirdDiscount)}</dd>
      </div>
      <div className={`flex items-baseline justify-between gap-4 ${compact ? "pt-2 text-base" : "pt-3"}`}>
        <dt className="font-semibold text-petrol">{priceLabels.youPay}</dt>
        <dd className={`font-serif text-petrol ${compact ? "text-xl" : "text-3xl"}`}>{formatRupees(price.youPay)}</dd>
      </div>
    </dl>
  );
}
