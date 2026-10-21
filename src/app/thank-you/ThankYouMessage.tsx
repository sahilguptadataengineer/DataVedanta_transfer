"use client";

// Client component: reads ?type=demo|enquiry|mentor and ?program=<slug> from the address to pick the message.
// Demo bookings: date + time, then a WhatsApp button to ask for the meeting link (no links on the website).
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Chip";
import { HighlightHeading } from "@/components/HighlightHeading";
import { demo } from "@/data/demo-links";
import { thankYouPage as copy } from "@/data/pages";
import { getProgram } from "@/data/programs";
import { site } from "@/data/site";
import { formatDemoDate } from "@/lib/demo-date";
import { useDemoSlot } from "@/lib/use-demo-slot";
import { whatsappUrl } from "@/lib/whatsapp";

function DemoDetails({ programSlug }: { programSlug: string | null }) {
  const slot = useDemoSlot();
  const program = programSlug ? getProgram(programSlug) : undefined;
  const row = "grid gap-1 px-5 py-3 text-left sm:grid-cols-[9rem_1fr] sm:gap-4";
  // WhatsApp message prefilled with the program and date, so the team knows which meeting link to send.
  const whatsapp =
    slot && program ? whatsappUrl(site.contact.whatsapp, demo.whatsappMessage(program.name, formatDemoDate(slot))) : null;

  return (
    <>
      <dl className="mx-auto mt-8 max-w-lg divide-y divide-petrol/10 overflow-hidden rounded-card border border-petrol/15">
        {program && (
          <div className={row}>
            <dt className="text-sm font-semibold text-muted">{copy.demo.labels.program}</dt>
            <dd className="font-semibold text-petrol">{program.name}</dd>
          </div>
        )}
        <div className={row}>
          <dt className="text-sm font-semibold text-muted">{copy.demo.labels.date}</dt>
          <dd className="font-semibold text-petrol">{slot ? formatDemoDate(slot) : "…"}</dd>
        </div>
        <div className={row}>
          <dt className="text-sm font-semibold text-muted">{copy.demo.labels.time}</dt>
          <dd className="font-semibold text-petrol">{demo.timeLabel}</dd>
        </div>
      </dl>
      <p className="mt-8 font-semibold text-petrol">{copy.demo.meetingNote}</p>
      <div className="mt-4 flex justify-center">
        {whatsapp ? (
          <Button href={whatsapp} external>
            {copy.demo.meetingCta}
          </Button>
        ) : (
          <Button href={copy.demo.meetingFallback.href}>{copy.demo.meetingFallback.label}</Button>
        )}
      </div>
    </>
  );
}

export function ThankYouMessage() {
  const params = useSearchParams();
  const type = params.get("type");
  const isDemo = type === "demo";
  const isMentor = type === "mentor";
  const message = isDemo ? copy.demo : isMentor ? copy.mentor : copy.enquiry;
  const whatsapp = whatsappUrl(site.contact.whatsapp, site.whatsappMessage);

  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow className="mb-4">{message.eyebrow}</Eyebrow>
      <HighlightHeading as="h1" text={message.title} highlight={message.highlight} />
      <p className="mt-5 text-lg leading-relaxed text-muted">{message.text}</p>
      {isDemo && <DemoDetails programSlug={params.get("program")} />}
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        {whatsapp && !isDemo && !isMentor && (
          <Button href={whatsapp} external>
            {copy.whatsapp}
          </Button>
        )}
        <Button href={copy.programs.href} variant="outline">
          {copy.programs.label}
        </Button>
        <Button href={copy.back.href} variant="outline">
          {copy.back.label}
        </Button>
      </div>
    </div>
  );
}
