import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { TiltedPhoto } from "@/components/TiltedPhoto";
import { contactPage as copy } from "@/data/pages";
import { programs } from "@/data/programs";
import { site } from "@/data/site";
import { isPlaceholder } from "@/lib/placeholder";
import { formatIndianNumber, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: "/contact/" });

export default function ContactPage() {
  const { phone, email } = site.contact;
  const whatsapp = whatsappUrl(site.contact.whatsapp, site.whatsappMessage);
  // No "Book a call" button: sending an enquiry already means the team calls back (decided 7 Oct 2026).
  const hasPhone = !isPlaceholder(phone);
  const linkClass = "font-semibold text-coral-deep underline-offset-2 hover:underline";

  return (
    <>
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} highlight={copy.highlight} description={copy.description} />

      {/* Smaller gap below the page header than the standard section spacing. */}
      <Section flushTop className="pt-8 sm:pt-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="sm:p-10">
            <LeadForm type="enquiry" idPrefix="enquiry" programs={programs.map(({ slug, name }) => ({ slug, name }))} />
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="font-serif text-2xl text-petrol">{copy.direct.title}</h2>
              {/* Only real contact details are shown; anything still PLACEHOLDER_ stays hidden. */}
              <dl className="mt-5 space-y-4">
                {whatsapp && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{copy.direct.whatsapp}</dt>
                    <dd className="mt-1">
                      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {formatIndianNumber(site.contact.whatsapp)}
                      </a>
                    </dd>
                  </div>
                )}
                {!isPlaceholder(email) && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{copy.direct.email}</dt>
                    <dd className="mt-1 break-all">
                      <a href={`mailto:${email}`} className={linkClass}>
                        {email}
                      </a>
                    </dd>
                  </div>
                )}
                {hasPhone && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{copy.direct.phone}</dt>
                    <dd className="mt-1">
                      <a href={`tel:${phone}`} className={linkClass}>
                        {phone}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-coral px-5 py-2.5 font-semibold text-petrol hover:-translate-y-0.5"
                >
                  {copy.direct.chat}
                </a>
              )}
            </Card>

            <TiltedPhoto {...copy.image} />

          </div>
        </div>
      </Section>
    </>
  );
}
