import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "outline" | "outline-light" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Coral background with PETROL text (white on coral fails contrast).
  primary: "bg-coral text-petrol hover:shadow-card",
  outline: "border-2 border-petrol text-petrol hover:bg-petrol hover:text-white",
  // For dark (navy) backgrounds.
  "outline-light": "border-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-navy",
  // WhatsApp green with white text.
  whatsapp: "bg-whatsapp text-white hover:shadow-card",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

type ButtonAsLink = Common & { href: string; external?: boolean };
type ButtonAsButton = Common & Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

export function buttonClasses(variant: Variant = "primary", size: Size = "lg", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({ variant = "primary", size = "lg", className = "", children, ...rest }: ButtonAsLink | ButtonAsButton) {
  const classes = buttonClasses(variant, size, className);

  if ("href" in rest && rest.href !== undefined) {
    if (rest.external) {
      return (
        <a href={rest.href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as Omit<ButtonAsButton, keyof Common>)}>
      {children}
    </button>
  );
}

// Coral-deep text link with an arrow, for "View program ->" and "View all ->".
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-semibold text-coral-deep hover:underline hover:underline-offset-4 ${className}`}
    >
      {children}
      <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
