import { type FeatureIconName, featureIcons } from "./icons";
import { IconCircle } from "./IconCircle";

type Item = { title: string; text: string; icon?: FeatureIconName };

type Props = {
  items: Item[];
  columns?: 3 | 4;
  // "icon": sand circle above each item. "boxed": white box with a coral outline, icon next to the heading; lifts on hover.
  // "subtle": same layout with a thin grey outline and a soft grey icon tile (turns coral on hover).
  variant?: "icon" | "boxed" | "subtle";
};

// Row of items (key highlights, principles). 1 column on phones, 2 on tablets, up to 4 on desktop.
export function FeatureGrid({ items, columns = 4, variant = "icon" }: Props) {
  const desktop = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  if (variant === "boxed" || variant === "subtle") {
    const subtle = variant === "subtle";
    const box = subtle ? "border-petrol/15 hover:border-coral/60" : "border-coral";
    const tile = subtle
      ? "bg-mist text-petrol group-hover:bg-coral/15 group-hover:text-coral-deep"
      : "border border-coral/50 text-coral-deep group-hover:border-coral group-hover:bg-coral group-hover:text-petrol";
    return (
      <ul className={`grid gap-6 sm:grid-cols-2 ${desktop}`}>
        {items.map((item) => {
          const Icon = item.icon ? featureIcons[item.icon] : null;
          return (
            <li
              key={item.title}
              className={`group rounded-card border bg-white p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-card ${box}`}
            >
              {/* Icon and heading side by side; the description goes below. */}
              <div className="flex items-center gap-3">
                {Icon && (
                  <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${tile}`}>
                    <Icon className="size-6" />
                  </span>
                )}
                <h3 className="font-sans text-lg leading-snug font-semibold text-petrol">{item.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={`grid gap-8 sm:grid-cols-2 ${desktop}`}>
      {items.map((item) => (
        <li key={item.title}>
          <IconCircle />
          <h3 className="mt-5 font-sans text-lg font-semibold text-petrol">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
