# DataVedanta Technologies website

Marketing and enrollment website for **DataVedanta Technologies**, live at <https://www.datavedanta.com>.

- 12 pages: Home, Programs, 6 program pages, Student Outcomes, About, FAQ, Contact / Apply, Apply as a mentor,
  Thank-you, Terms & Conditions, Privacy Policy, Refund & Cancellation Policy.
- Forms (free demo, enquiry, enroll, mentor application, "Talk to an expert" pop-up, brochure download) save to a
  Google Sheet through a Google Apps Script web app, and the team gets an email alert.
- No backend, database or login: the site is built into plain HTML/CSS/JS files and hosted on Vercel.

## Tech stack

| Part | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export), React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Forms → Google Sheet | Google Apps Script (`apps-script/Code.gs`) |
| Hosting | Vercel (deploys automatically from GitHub) |
| Analytics / SEO | Google Analytics 4, sitemap.xml, robots.txt, structured data, llms.txt |
| Tests | Vitest |

## Run it on your computer

Requirements: [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install          # once, installs the packages
cp .env.example .env.local   # then fill in the two values (see below)
npm run dev          # opens the site at http://localhost:3000
```

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the final site into the `out/` folder (what Vercel publishes) |
| `npm test` | Runs the automatic checks (prices, demo dates, forms, SEO, content rules) |
| `npm run lint` | Checks the code style |

## Settings (environment variables)

These are **not** stored on GitHub. Add them in `.env.local` on your computer and in
**Vercel → Project → Settings → Environment Variables** (Production and Preview). Both are public by design.

| Name | Value |
|---|---|
| `NEXT_PUBLIC_APPS_SCRIPT_URL` | The Google Apps Script web app URL (ends with `/exec`) |
| `NEXT_PUBLIC_GA_ID` | The Google Analytics 4 measurement ID (`G-XXXXXXXXXX`) |

After changing a value in Vercel, redeploy (Deployments → newest → ⋯ → Redeploy).

## Where to change content

All text, prices and settings live in `src/data/`. Change a file there, push to GitHub, and Vercel updates the site.

| What | File |
|---|---|
| Programs, ratings, seats left, tech stack, brochure files | `src/data/programs.ts` |
| Fees (Program fee, Early bird offer, You pay) | `src/data/pricing.ts` |
| Curriculum of each track | `src/data/curriculum/` |
| Home page text, stats, company and college logos | `src/data/home.ts` |
| Other pages' text | `src/data/pages.ts`, `src/data/about.ts` |
| FAQ | `src/data/faqs.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Contact details, logo, menu, SEO title and description | `src/data/site.ts` |
| Form wording | `src/data/forms.ts` |
| Free demo time and WhatsApp message | `src/data/demo-links.ts` |
| Razorpay payment links | `src/data/razorpay-links.ts` |
| Policies (Terms, Privacy, Refund) | `src/data/policies/` |
| Images, logos, brochure PDFs | `public/images/`, `public/brochures/` |

## Content rules

- Prices are shown as Program fee, Early bird offer and You pay; no crossed-out prices, no percentages, no countdowns.
- No job, salary or placement guarantee. Refund: pro-rata within 7 days of cohort start, plus a one-time batch transfer.
- Only real figures (students trained, ratings, seats left, companies). Update `seatsLeft` in `src/data/programs.ts` as batches fill.
- No founder, team or trainer profiles; trainers' companies are named, trainers are not.
- Free demo: every Saturday, 7:00 PM (IST). Booking closes Tuesday 00:00 IST for that Saturday.
- Every form has a consent checkbox linked to the Privacy Policy.

## Pending items

Values still to be filled in start with `PLACEHOLDER_` (search the project for it):

- `src/data/razorpay-links.ts`: the 10 Razorpay Payment Page links. While a link is a placeholder,
  "Enroll now" collects the student's details and continues on WhatsApp.
- `src/data/site.ts`: phone number and business address (hidden on the site until filled in).
- `src/data/testimonials.ts`: replace the sample testimonials with real ones (with the students' permission).

## Guides

- `docs/APPS_SCRIPT_SETUP.md`: Google Sheet + Apps Script (forms) setup and updates.
- `docs/SEO_SETUP.md`: Google Analytics, Search Console, Bing, Google Business Profile.
- `docs/RAZORPAY_SETUP.md`: creating the Razorpay Payment Pages.

## Deployment

Vercel is connected to this GitHub repository: every push to the `main` branch builds and publishes the site
automatically (about 1–2 minutes). The domain `www.datavedanta.com` is connected in Vercel → Settings → Domains,
with DNS records at the domain registrar (A record for `@`, CNAME for `www`).

When the Google Apps Script changes (`apps-script/Code.gs`), paste the new code into the Apps Script editor and
publish it with **Deploy → Manage deployments → ✏️ → New version** (see `docs/APPS_SCRIPT_SETUP.md`).
