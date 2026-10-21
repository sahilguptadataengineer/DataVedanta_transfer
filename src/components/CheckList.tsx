import { CheckIcon } from "./icons";

// List with coral check marks (who it's for, what's included).
export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-sand text-coral-deep">
            <CheckIcon className="size-3.5" />
          </span>
          <span className="leading-relaxed text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}
