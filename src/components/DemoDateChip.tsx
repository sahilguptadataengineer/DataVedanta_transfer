"use client";

// Client component: the hero chip shows the next bookable demo date, computed in the browser.
import { demoForm } from "@/data/forms";
import { formatDemoDate, formatDemoShort } from "@/lib/demo-date";
import { useDemoSlot } from "@/lib/use-demo-slot";

export function DemoDateValue({ fallback }: { fallback: string }) {
  const slot = useDemoSlot();
  // Before the browser works out the date (and in the pre-built HTML) the generic schedule is shown.
  return <>{slot ? `${formatDemoDate(slot)} · ${demoForm.time}` : fallback}</>;
}

// Compact "Sat, 24 Oct" for program cards; the fallback is shown before the date is worked out.
export function DemoDateShort({ fallback }: { fallback: string }) {
  const slot = useDemoSlot();
  return <>{slot ? formatDemoShort(slot) : fallback}</>;
}
