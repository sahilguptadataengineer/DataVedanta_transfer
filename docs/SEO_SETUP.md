# SEO, AEO and Google Analytics: setup steps

The website code is ready: brand-first titles, canonical addresses, share previews, `sitemap.xml`, `robots.txt`
(open to Google, Bing and AI crawlers), structured data (Organization, WebSite, Course x6, FAQPage, breadcrumbs)
and `llms.txt`. These steps connect it to Google, Bing and analytics. Do them with the **client's Google account**
when possible (or yours, and add the client as Owner later).

## 1. Google Analytics 4 (visitor numbers + form events)
1. Go to <https://analytics.google.com> → **Admin** (gear) → **Create → Property**.
2. Property name `DataVedanta Website`, time zone **India**, currency **INR** → Next → business details → **Create**.
3. Choose **Web**, URL `www.datavedanta.com`, stream name `Website` → keep **Enhanced measurement ON** → **Create stream**.
4. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
5. Vercel → project → **Settings → Environment Variables** → add `NEXT_PUBLIC_GA_ID` = that ID (Production + Preview) → Save.
6. Vercel → **Deployments** → newest → **⋯ → Redeploy** (the ID is built into the site).
7. Test: open the site, then GA4 → **Reports → Realtime**: you should see yourself within a minute.
8. Optional: GA4 → Admin → **Events**: mark `demo_submit`, `enquiry_submit`, `enroll_click`, `mentor_submit`,
   `callback_submit`, `brochure_download` as **Key events** (they appear after they happen once).

## 2. Google Search Console (Google search + Gemini)
The domain already has a `google-site-verification` TXT record in Namecheap, so someone has verified it.
1. Open <https://search.google.com/search-console> with the account that verified it (ask the client).
   If nobody has access: **Add property → Domain** → `datavedanta.com` → copy the new TXT value → add it in
   Namecheap → Advanced DNS → **TXT Record**, Host `@` → Save → **Verify**.
2. **Sitemaps** (left menu) → enter `sitemap.xml` → **Submit**.
3. **URL inspection** (top bar) → `https://www.datavedanta.com/` → **Request indexing**. Repeat for `/programs/`.
4. Check again after 3–7 days: **Pages** shows indexed pages; **Performance** shows searches like "datavedanta".

## 3. Bing Webmaster Tools (Bing + ChatGPT search + Copilot)
1. Open <https://www.bing.com/webmasters> → sign in with the same Google account.
2. **Import from Google Search Console** → Allow → select `datavedanta.com` → Import (no DNS work needed).
3. **Sitemaps** → confirm `https://www.datavedanta.com/sitemap.xml` is there (submit it if not).
4. **URL Submission** → submit `https://www.datavedanta.com/`.

## 4. Google Business Profile (brand card on Google, logo, reviews)
1. <https://business.google.com> → **Add business** → `DataVedanta Technologies`, category **Educational institution**
   or **Training centre**, **online / service area business** (no address needed) → website `https://www.datavedanta.com`,
   phone/WhatsApp → verify (Google decides: email, phone or video).
2. Add the logo (`public/images/brand/logo.png`), a cover image, and ask happy students for reviews.

## 5. Social profiles (helps Google and AI tools recognise the brand)
1. Create or update LinkedIn company page, Instagram, YouTube (and any others) with the **same name** "DataVedanta Technologies",
   the same short description and the link `https://www.datavedanta.com`.
2. Send the profile links: they go into `seo.sameAs` in `src/data/site.ts` (structured data), then redeploy.

## What to expect
- **Google for "DataVedanta"**: usually first within days to ~2 weeks after step 2 (unique brand name).
- **ChatGPT / Perplexity / Gemini**: they read the site through Bing/Google and their own crawlers (allowed in robots.txt,
  summary in `/llms.txt`). Expect weeks. Mentions on LinkedIn, college pages, YouTube and blogs speed this up.
- Generic searches ("data science course online") take months and need content, reviews and links: ongoing work.
