import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { programs } from "./programs";

// Every internal link written in src/data must point to a page that exists in src/app.
const appDir = join(__dirname, "..", "app");
const routeExists = (path: string) => {
  const clean = path.split(/[?#]/)[0].replace(/^\/|\/$/g, "");
  if (clean === "") return true;
  const programMatch = clean.match(/^programs\/(.+)$/);
  if (programMatch) return programs.some((p) => p.slug === programMatch[1]);
  return existsSync(join(appDir, clean, "page.tsx"));
};

describe("internal links in src/data", () => {
  const files = readdirSync(__dirname).filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts"));
  const links = files.flatMap((file) =>
    [...readFileSync(join(__dirname, file), "utf-8").matchAll(/(?:href|path): "(\/[^"]*)"/g)].map((m) => [file, m[1]] as const),
  );

  it("finds links to check", () => expect(links.length).toBeGreaterThan(20));

  it.each(links)("%s links to %s, which exists", (_file, href) => {
    expect(routeExists(href)).toBe(true);
  });
});
