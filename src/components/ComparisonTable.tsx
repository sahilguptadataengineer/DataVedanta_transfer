type Column = { key: string; label: string };

type Props = {
  caption: string;
  columns: Column[];
  rows: Record<string, string>[];
  // Column shown in petrol bold (our side of a comparison).
  emphasis?: string;
  // Keep short first-column labels like "Month 1" on one line.
  nowrapFirst?: boolean;
};

/*
  A real table on tablets and desktop; on phones each row becomes a small card,
  because a 3-column table does not fit at 360 px.
*/
export function ComparisonTable({ caption, columns, rows, emphasis, nowrapFirst = false }: Props) {
  const [first, ...rest] = columns;
  const cell = (key: string) => (key === emphasis ? "font-semibold text-petrol" : "text-muted");

  return (
    <>
      <div className="hidden overflow-hidden rounded-card border border-petrol/15 md:block">
        <table className="w-full text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-petrol text-white">
            <tr>
              {columns.map((col) => (
                <th key={col.key} scope="col" className="px-6 py-4 text-sm font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[first.key]} className="border-t border-petrol/10">
                <th scope="row" className={`px-6 py-4 font-semibold text-petrol ${nowrapFirst ? "whitespace-nowrap" : ""}`}>
                  {row[first.key]}
                </th>
                {rest.map((col) => (
                  <td key={col.key} className={`px-6 py-4 ${cell(col.key)}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-4 md:hidden" aria-label={caption}>
        {rows.map((row) => (
          <li key={row[first.key]} className="rounded-card border border-petrol/15 p-5">
            <p className="font-semibold text-petrol">{row[first.key]}</p>
            <dl className="mt-3 space-y-3">
              {rest.map((col) => (
                <div key={col.key}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-coral-deep">{col.label}</dt>
                  <dd className={`mt-1 ${cell(col.key)}`}>{row[col.key]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
