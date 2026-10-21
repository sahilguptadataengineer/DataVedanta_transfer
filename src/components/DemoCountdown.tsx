"use client";

/*
  Client component: live countdown to the next free demo (Saturday 7:00 PM (IST), from src/lib/demo-date.ts).
  A real date, not a fake offer timer. Ticks every second, only in the browser.
*/
import { useSyncExternalStore } from "react";
import { getDemoSlot } from "@/lib/demo-date";

const SECOND = 1000;
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, SECOND);
  return () => window.clearInterval(id);
}
const currentSecond = () => Math.floor(Date.now() / SECOND);
const noTimeOnServer = () => null;

type Units = { days: string; hours: string; minutes: string; seconds: string };

export function DemoCountdown({ title, units, loading }: { title: string; units: Units; loading: string }) {
  const second = useSyncExternalStore(subscribe, currentSecond, noTimeOnServer);

  let parts: [string, number][] | null = null;
  if (second !== null) {
    const now = new Date(second * SECOND);
    const left = Math.max(0, Math.floor((getDemoSlot(now).start.getTime() - now.getTime()) / SECOND));
    parts = [
      [units.days, Math.floor(left / 86400)],
      [units.hours, Math.floor((left % 86400) / 3600)],
      [units.minutes, Math.floor((left % 3600) / 60)],
      [units.seconds, left % 60],
    ];
  }

  return (
    <div className="rounded-xl border border-petrol/10 bg-mist p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{title}</p>
      {parts ? (
        <dl className="mt-2 grid grid-cols-4 gap-2 text-center" aria-live="off">
          {parts.map(([label, value]) => (
            <div key={label} className="flex flex-col-reverse">
              <dt className="text-[11px] font-medium uppercase text-muted">{label}</dt>
              <dd className="font-serif text-2xl font-semibold text-petrol tabular-nums">{String(value).padStart(2, "0")}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-2 font-semibold text-petrol">{loading}</p>
      )}
    </div>
  );
}
