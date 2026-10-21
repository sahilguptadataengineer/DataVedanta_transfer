import type { Metadata } from "next";
import { seo, site } from "@/data/site";

/*
  Page tags for search engines and share previews.
  - canonical: the one official address of the page on www.datavedanta.com (relative to metadataBase in the layout).
  - openGraph / twitter: the title, description and image shown when the link is shared.
  `path` always starts and ends with "/" (the site uses trailing slashes), e.g. "/programs/data-science/".
*/
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  // true: use the title as written (Home); false: add " | DataVedanta Technologies" (layout template).
  absoluteTitle?: boolean;
  // true: keep the page out of search results (thank-you page).
  noIndex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${seo.titleSuffix}`;
  const image = { url: seo.ogImage.src, width: seo.ogImage.width, height: seo.ogImage.height, alt: seo.ogImage.alt };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: seo.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
