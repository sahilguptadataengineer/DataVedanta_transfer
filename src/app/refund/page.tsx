import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PolicyDocument } from "@/components/PolicyDocument";
import { policyPages } from "@/data/pages";
import { refundPolicy } from "@/data/policies/refund";
import { footerNav } from "@/data/site";

const page = policyPages.refund;

export const metadata: Metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function Page() {
  const related = (footerNav.find((g) => g.links.some((l) => l.href === page.path))?.links ?? []).filter(
    (l) => l.href !== page.path,
  );
  return <PolicyDocument doc={refundPolicy} related={related} relatedLabel={policyPages.relatedLabel} />;
}
