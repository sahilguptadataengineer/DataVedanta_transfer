"use client";

// Client component: the mobile menu needs to remember whether it is open.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, navCta, navMentor, ui } from "@/data/site";
import { buttonClasses } from "./Button";
import { Logo } from "./Logo";
import { Container } from "./Section";
import { CloseIcon, MenuIcon } from "./icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-40 border-b border-petrol/10 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-20">
        <Logo />

        <nav aria-label={ui.mainNavLabel} className="hidden lg:block">
          {/* Active page: coral underline (client point 2: no box), also shown on hover. */}
          <ul className="flex items-center gap-7">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="relative inline-flex min-h-11 items-center text-[15px] font-semibold text-petrol transition-colors after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-coral after:transition-transform hover:text-coral-deep hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop only; on phones and tablets it is in the menu. The wrapper hides it: on the button itself,
              its own inline-flex would override "hidden". */}
          <span className="hidden lg:contents">
            <Link
              href={navMentor.href}
              aria-current={isActive(navMentor.href) ? "page" : undefined}
              className={buttonClasses("outline", "md", "whitespace-nowrap")}
            >
              {navMentor.label}
            </Link>
          </span>
          <Link href={navCta.href} className={buttonClasses("primary", "md", "whitespace-nowrap")}>
            <span className="sm:hidden">{navCta.shortLabel}</span>
            <span className="max-sm:hidden">{navCta.label}</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="inline-flex size-11 items-center justify-center rounded-full text-petrol hover:bg-petrol/5 lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label={ui.mainNavLabel} className="border-t border-petrol/10 bg-white lg:hidden">
          <Container className="py-4">
            <ul className="flex flex-col">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="flex min-h-12 items-center border-b border-petrol/10 border-l-4 border-l-transparent pl-3 text-base font-semibold text-petrol aria-[current=page]:border-l-coral aria-[current=page]:text-coral-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={navCta.href} onClick={() => setOpen(false)} className={buttonClasses("primary", "lg", "mt-5 w-full")}>
              {navCta.label}
            </Link>
            <Link href={navMentor.href} onClick={() => setOpen(false)} className={buttonClasses("outline", "lg", "mt-3 w-full")}>
              {navMentor.label}
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
