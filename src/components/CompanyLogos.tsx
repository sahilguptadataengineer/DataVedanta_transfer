import Image from "next/image";
import { type Company, placedAt } from "@/data/home";
import { Marquee } from "./Marquee";

// One company: its logo, or its name as a text badge when there is no logo file.
export function CompanyBadge({ company }: { company: Company }) {
  return (
    <li className="flex h-16 items-center rounded-xl border border-petrol/10 bg-white px-7">
      {company.logo ? (
        <Image
          src={company.logo}
          alt={company.name}
          width={company.width}
          height={company.height}
          style={{ height: company.display }}
          className="w-auto max-w-none"
        />
      ) : (
        <span className="text-xl font-bold tracking-tight whitespace-nowrap text-petrol">{company.name}</span>
      )}
    </li>
  );
}

// Auto-moving row of company logos ("Our learners work at", client point 25). Used on Home and every program page.
export function CompanyLogos({ className = "" }: { className?: string }) {
  return (
    <Marquee label={placedAt.label} className={className}>
      {placedAt.companies.map((company) => (
        <CompanyBadge key={company.name} company={company} />
      ))}
    </Marquee>
  );
}

// Auto-moving row for any list of companies, e.g. "Our trainers come from" on Home and About (pauses on hover).
export function CompanyRow({ label, companies, className = "" }: { label: string; companies: Company[]; className?: string }) {
  return (
    <Marquee label={label} seconds={30} className={className}>
      {companies.map((company) => (
        <CompanyBadge key={company.name} company={company} />
      ))}
    </Marquee>
  );
}
