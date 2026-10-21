type Item = { question: string; answer: string };

// FAQ-style accordion built on native <details>: works with keyboard and screen readers, no JavaScript.
export function Accordion({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-petrol/10 overflow-hidden rounded-card border border-petrol/15">
      {items.map((item) => (
        <li key={item.question}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-semibold text-petrol hover:bg-petrol/[0.03] sm:px-6 [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="text-xl leading-none text-coral-deep transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">{item.answer}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
