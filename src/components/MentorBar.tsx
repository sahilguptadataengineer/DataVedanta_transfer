import Link from "next/link";
import { mentorBarLead, navMentor } from "@/data/site";
import { ArrowRightIcon } from "./icons";

// Phones and tablets: slim bar above the header with "Apply as a mentor" (desktop has a header button instead).
// It sits outside the sticky header, so it scrolls away and the header keeps its usual height.
export function MentorBar() {
  return (
    <div className="bg-navy text-sm text-white lg:hidden">
      <Link href={navMentor.href} className="flex min-h-10 items-center justify-center gap-1.5 px-4 py-2 text-center">
        <span className="text-white/75">{mentorBarLead}</span>
        <span className="font-semibold text-coral underline-offset-2 hover:underline">{navMentor.label}</span>
        <ArrowRightIcon className="size-4 text-coral" />
      </Link>
    </div>
  );
}
