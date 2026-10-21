"use client";

import { useMemo, useSyncExternalStore } from "react";
import { type DemoSlot, getDemoSlot } from "./demo-date";

/*
  The demo slot for "now", computed in the browser only (never at build time).
  The page is pre-built HTML, so during pre-rendering this returns null and the UI shows a loading text;
  after load it shows the real Saturday, and it re-checks every minute (so Monday 23:59 -> Tuesday
  00:00 updates without a reload).
*/
const MINUTE = 60_000;

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, MINUTE);
  return () => window.clearInterval(id);
}

// The current minute: the same number for a whole minute, so React doesn't re-render needlessly.
const currentMinute = () => Math.floor(Date.now() / MINUTE);
const noMinuteOnServer = () => null;

export function useDemoSlot(): DemoSlot | null {
  const minute = useSyncExternalStore(subscribe, currentMinute, noMinuteOnServer);
  return useMemo(() => (minute === null ? null : getDemoSlot(new Date(minute * MINUTE))), [minute]);
}
