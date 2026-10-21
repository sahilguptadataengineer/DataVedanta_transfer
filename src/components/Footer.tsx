import Link from "next/link";
import { footerNav, site, ui } from "@/data/site";
import { isPlaceholder } from "@/lib/placeholder";
import { formatIndianNumber, whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { Container } from "./Section";

export function Footer() {
  const { phone, email, address } = site.contact;
  const whatsapp = whatsappUrl(site.contact.whatsapp, site.whatsappMessage);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-petrol text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1.2fr] lg:gap-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">{site.description}</p>
          <p className="mt-4 text-sm font-medium text-coral">{site.demoSchedule}</p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white">{group.title}</h2>
            <ul className="mt-4 space-y-1">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-9 items-center text-sm text-white/80 hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white">{ui.footerContactTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {/* Only real values are shown; anything still PLACEHOLDER_ stays hidden. */}
            {whatsapp && (
              <li>
                {ui.footerWhatsapp}:{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                  {formatIndianNumber(site.contact.whatsapp)}
                </a>
              </li>
            )}
            {!isPlaceholder(phone) && (
              <li>
                <a href={`tel:${phone}`} className="hover:text-white hover:underline">
                  {phone}
                </a>
              </li>
            )}
            {!isPlaceholder(email) && (
              <li>
                <a href={`mailto:${email}`} className="break-all hover:text-white hover:underline">
                  {email}
                </a>
              </li>
            )}
            {!isPlaceholder(address) && <li>{address}</li>}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="py-5 text-xs text-white/70">
          © {year} {site.name}. {ui.copyright}
        </Container>
      </div>
    </footer>
  );
}
