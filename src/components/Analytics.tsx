import Script from "next/script";

/*
  Google Analytics 4. Loads only when NEXT_PUBLIC_GA_ID is set (.env.local locally, Vercel settings live).
  "lazyOnload": it loads after the page has finished loading, so it never slows the first view.
  Page views: GA4's "Enhanced measurement" counts every page change automatically, including moves between pages
  inside the site. Form and button events are sent from src/lib/analytics.ts (demo_submit, enquiry_submit,
  enroll_click, mentor_submit, callback_submit).
*/
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  if (!GA_ID || !/^G-[A-Z0-9]+$/.test(GA_ID)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
