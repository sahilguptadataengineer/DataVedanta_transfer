import type { Testimonial } from "@/data/testimonials";

// Initials avatar ("Priya Sharma" -> "PS"); colours rotate so the row doesn't look uniform.
const avatarColours = ["bg-violet", "bg-sky", "bg-emerald", "bg-rose", "bg-amber", "bg-teal"];
const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

// Card (client, 20 Oct 2026): the learner's name, role and program first, then their review.
export function TestimonialCard({ testimonial, index, className = "" }: { testimonial: Testimonial; index: number; className?: string }) {
  const colour = avatarColours[index % avatarColours.length];
  return (
    <figure className={`flex h-full flex-col overflow-hidden rounded-card border border-petrol/10 bg-white shadow-card ${className}`}>
      <figcaption className="flex items-center gap-3 border-b border-petrol/10 bg-mist px-6 py-4">
        <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white ${colour}`} aria-hidden="true">
          {initials(testimonial.author)}
        </span>
        <span className="min-w-0">
          <span className="block text-lg font-semibold text-petrol">{testimonial.author}</span>
          {testimonial.role && <span className="block text-sm font-medium text-ink">{testimonial.role}</span>}
          <span className="block text-xs font-semibold tracking-wide text-coral-deep uppercase">{testimonial.program}</span>
        </span>
      </figcaption>
      <blockquote className="relative flex-1 px-6 pt-5 pb-6 leading-relaxed text-ink">
        <span className="absolute top-1 left-4 font-serif text-5xl leading-none text-coral/30" aria-hidden="true">
          “
        </span>
        <p className="relative">{testimonial.quote}</p>
      </blockquote>
    </figure>
  );
}
