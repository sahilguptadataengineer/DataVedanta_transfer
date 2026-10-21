"use client";

/*
  Performance: continuous animations (logo and testimonial strips, the seats shine, the road lanes)
  are paused while off-screen and start when they scroll into view. This saves work while the page loads
  and on phones. Elements opt in with the class "pause-offscreen" (see globals.css).
*/
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AnimationsInView() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".pause-offscreen");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-inview", ""));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.toggleAttribute("data-inview", entry.isIntersecting);
      },
      { rootMargin: "100px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
