> **Update 18 Oct 2026:** there are now **10** Payment Pages to create (add Data Engineering 12 and 24 weeks, and Python
> Programming 8 weeks; see `src/data/razorpay-links.ts`). Prices follow the brochures (`src/data/pricing.ts`); the site shows
> them without "+ GST" for now, but the Payment Page amount must still include GST if it applies (ask the CA).
> The "Advanced 3 months" add-on is enrolled manually (form, then WhatsApp).

# Razorpay Payment Pages setup

The website never handles payments. Each **Enroll** button simply opens a **Razorpay Payment Page**
(hosted by Razorpay). There are **no API keys, no secrets and no webhook** in the website.
The **Razorpay dashboard is the record of who has paid.**

Until a page's link is added, payment is manual: Enroll asks for name, phone and email, then opens WhatsApp
with a prefilled message, and the team shares the payment details on WhatsApp.

## The 7 Payment Pages

| # | Page title (put program + tier in the title) | You pay (excl. GST) | Paste the link into `src/data/razorpay-links.ts` as |
|---|---|---|---|
| 1 | DataVedanta – Generative AI Engineering – 12 weeks | ₹35,000 | `"genai-12"` |
| 2 | DataVedanta – Applied AI & ML Engineering – 12 weeks | ₹35,000 | `"aiml-12"` |
| 3 | DataVedanta – Applied AI & ML Engineering – 24 weeks | ₹49,000 | `"aiml-24"` |
| 4 | DataVedanta – Data Science – 12 weeks | ₹35,000 | `"ds-12"` |
| 5 | DataVedanta – Data Science – 24 weeks | ₹49,000 | `"ds-24"` |
| 6 | DataVedanta – Python Full Stack Web Engineering – 12 weeks | ₹35,000 | `"pfs-12"` |
| 7 | DataVedanta – Python Full Stack Web Engineering – 24 weeks | ₹50,000 | `"pfs-24"` |

## GST: confirm before creating the pages

The website shows every price as **"You pay ₹X + GST"**, so the amount charged on Razorpay must be
**You pay + GST**. Confirm these with the client's **CA** first:

1. Is the business GST-registered, and which rate applies? Private training is commonly taxed at **18%**,
   but only the CA can confirm it for this business.
2. If 18% applies, the Payment Page amounts would be:
   - ₹35,000 + 18% = **₹41,300**
   - ₹49,000 + 18% = **₹57,820**
   - ₹50,000 + 18% = **₹59,000**
3. How will students get a **GST invoice**? (A Payment Page receipt is not automatically a tax invoice.
   Ask the CA whether invoices are issued separately, and check the GST/invoice options in the Razorpay
   dashboard settings.)

Write the agreed amounts in the table above before creating the pages.

## Create the pages (test mode first)

Do this in the client's Razorpay account (or ask the client to do it; it needs their login).

1. Log in to <https://dashboard.razorpay.com>.
2. Switch to **Test Mode** (toggle at the top of the dashboard). Test mode uses fake money.
3. Go to **Payment Pages → Create Payment Page** and pick a simple template.
4. For each of the 7 pages:
   1. **Title**: exactly as in the table (program and tier in the title, so the team can tell payments apart).
   2. **Description**: a short line, for example "12-week online program. Fees include GST."
   3. **Amount**: a **fixed amount** = You pay + GST (as agreed with the CA). Students must not be able to change it.
   4. **Customer details / custom fields**: make these required:
      - Full name
      - Phone
      - Email
      - College (add as a custom text field)
   5. Save and **publish** the page, then copy its link (it starts with `https://rzp.io/` or `https://pages.razorpay.com/`).
5. **Test payment**: open one test page, pay with a test card from Razorpay's
   [test card details](https://razorpay.com/docs/payments/payments/test-card-details/) page, and check the payment
   appears in the dashboard (Test Mode) with all four fields filled in.

## Go live

1. The Razorpay account must be **activated** (KYC complete) before Live Mode works.
2. Switch to **Live Mode** and create the 7 pages again. Test-mode pages and links do **not** carry over to live mode.
3. Paste the 7 **live** links into `src/data/razorpay-links.ts`, replacing each `PLACEHOLDER_...` value:
   ```ts
   "ds-24": "https://rzp.io/...",
   ```
4. Run `npm test`: a test checks every link is a real Razorpay address and that no two tiers share a link.
5. Redeploy the website. Each Enroll button now opens its Razorpay page in a new tab.
6. Make one small real payment (or ask the client to) and refund it from the dashboard, to confirm the live setup.

## How the team sees who has paid

There is no "Paid Students" sheet on purpose. Razorpay is the single record of payments.

1. **Dashboard → Payment Pages → open a page**: shows every payment made on that page, with the
   name, phone, email and college the student entered.
2. **Dashboard → Transactions → Payments**: all payments; filter by date or status (only **Captured** means paid).
3. **Export**: use the download/export option on the payments list (or **Reports**) to get a CSV for a date range,
   for example every Monday morning.
4. For each new paid student, the team:
   1. checks the page title to see the program and tier,
   2. adds the student to that program's WhatsApp group,
   3. keeps their own note of who has been added (for example in the CSV or a team sheet).
5. **Refunds** (pro-rata within 7 days of cohort start, per the Refund & Cancellation Policy) are issued from the
   payment's page in the dashboard: **Issue Refund**.
