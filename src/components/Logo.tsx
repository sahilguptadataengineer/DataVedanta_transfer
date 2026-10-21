import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

// Client logo (src/data/site.ts). "light" = white "Data" for the petrol footer.
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { src, lightSrc, width, height } = site.logo;
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${site.name} home`}>
      <Image
        src={tone === "dark" ? src : lightSrc}
        alt={site.shortName}
        width={width}
        height={height}
        priority={tone === "dark"}
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}
