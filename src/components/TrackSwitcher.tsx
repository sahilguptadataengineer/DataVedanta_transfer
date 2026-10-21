"use client";

// Client component: remembers which track is selected (12 Weeks Foundations / 24 Weeks Advanced) and shows only that panel.
import { type ReactNode, useId, useState } from "react";

type Option = { id: string; label: string; panel: ReactNode };

export function TrackSwitcher({ label, options }: { label: string; options: Option[] }) {
  const [selected, setSelected] = useState(options[0].id);
  const labelId = useId();

  return (
    <>
      {options.length > 1 && (
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <p id={labelId} className="text-sm font-semibold text-petrol">
            {label}
          </p>
          <div role="group" aria-labelledby={labelId} className="inline-flex w-full rounded-full border border-petrol/20 p-1 sm:w-auto">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected === option.id}
                onClick={() => setSelected(option.id)}
                className="min-h-11 flex-1 rounded-full px-5 text-sm font-semibold text-petrol transition-colors aria-pressed:bg-petrol aria-pressed:text-white sm:flex-none"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {options.map((option) => (
        <div key={option.id} hidden={selected !== option.id}>
          {option.panel}
        </div>
      ))}
    </>
  );
}
