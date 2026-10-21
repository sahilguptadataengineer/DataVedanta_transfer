# Google Sheet + Apps Script setup (forms → Sheet → email)

Do this once, signed in to the **company Google account** that should own the leads (not a personal account).
Time needed: about 15 minutes.

## How it works

```
Visitor's browser                 Google Apps Script (web app)          Google Sheet / Gmail
─────────────────                 ────────────────────────────          ────────────────────
Form checks the fields
POST (text/plain, JSON) ────────► doPost: spam trap, trim + length-limit,
                                  validate, lock, RE-COMPUTE demo date
                                  from its own IST clock
                                  appendRow ───────────────────────────► "Demo Bookings" / "Enquiries"
                                  demo: MailApp ───────────────────────► confirmation to student
                                                 ──────────────────────► alert to the team
◄───────────────────────────────  returns only {"ok": true/false}
Thank-you page (date, 7 PM IST, WhatsApp button to get the meeting link)
```

## 1. Create the Google Sheet

1. Open <https://sheets.new> (signed in to the company account).
2. Rename it (top-left) to **DataVedanta Website Leads**.

## 2. Add the script

1. In the Sheet: **Extensions → Apps Script**. A new tab opens with a file called `Code.gs`.
2. Delete everything in that file.
3. Open `apps-script/Code.gs` from this project, copy **all** of it, and paste it in.
4. Click the project name ("Untitled project", top-left) and rename it to **DataVedanta Website Forms**.
5. In the pasted code, find `const CONFIG = {` near the top and edit:
   - `TEAM_EMAIL`: the email address that should receive an alert for every booking and enquiry
     (for example the client's hello@ address). Leave `PLACEHOLDER_TEAM_EMAIL` to switch alerts off.
   - `WHATSAPP_NUMBER`: the WhatsApp number with country code, digits only (e.g. 919876543210). The confirmation email
     tells students to message this number to get the meeting link. Leave the placeholder until the client sends it.
   - `PROGRAMS`: keep the program names exactly as they are (they must match the website).
6. Press **Ctrl + S** to save.

## 3. Create the tabs and give permission

1. In the toolbar, open the function dropdown (it says `doPost` or `myFunction`) and choose **setupSheet**.
2. Click **Run**.
3. Google asks for permission:
   1. **Review permissions** → choose the company account.
   2. You will see "Google hasn't verified this app". This is normal for your own scripts:
      click **Advanced** → **Go to DataVedanta Website Forms (unsafe)**.
   3. Click **Allow**. The script asks to edit this spreadsheet and to **send email as you** (for the confirmations).
4. Go back to the Sheet: you now have **Demo Bookings**, **Enquiries** and **Enrollments** tabs with a frozen header row.
   (Enrollments = students who clicked Enroll now and continued to WhatsApp. Tick "Payment received" when they pay.)
   The sand-coloured columns (Status, Assigned to, Notes) are for the team; the script never writes there.

## 4. Deploy it as a web app

1. In Apps Script: **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → **Web app**.
3. Fill in:
   - Description: `Website forms v1`
   - Execute as: **Me** (the company account)
   - Who has access: **Anyone** (the website's visitors are not signed in to Google)
4. Click **Deploy** and copy the **Web app URL**. It looks like
   `https://script.google.com/macros/s/AKfy.../exec`.
5. Check it: paste the URL in a new browser tab. You should see
   **"DataVedanta form endpoint is running."**

> "Anyone" is safe here: the script only adds rows and replies `{"ok": true}` or `{"ok": false}`.
> It never sends Sheet data back to anyone.

## 5. Connect the website

**On your computer**

1. In the project folder, copy `.env.example` to a new file called `.env.local`.
2. Paste the URL after `NEXT_PUBLIC_APPS_SCRIPT_URL=` (no quotes, no spaces).
3. Stop `npm run dev` (Ctrl + C) and start it again. Environment variables are only read at start-up.

**On Vercel**

1. Vercel → your project → **Settings → Environment Variables**.
2. Add `NEXT_PUBLIC_APPS_SCRIPT_URL` with the same URL, for **Production** and **Preview**.
3. Redeploy.

## 6. Test

1. On the Home page, book a free demo with your own email. You should land on the thank-you page.
2. On the Contact page, send an enquiry.
3. Check:
   - **Demo Bookings** has exactly one new row with the right Saturday and "This week"/"Next week".
   - **Enquiries** has exactly one new row.
   - The confirmation email arrived (check Spam the first time).
   - If `TEAM_EMAIL` is set, the team alerts arrived.

## Changing the script later (keep the same URL!)

After editing the code, do **not** create a new deployment (that makes a new URL). Instead:
**Deploy → Manage deployments → pencil icon → Version: New version → Deploy.** The URL stays the same.

## Email limits

`MailApp` can send to about **100 recipients a day** from a free Gmail account and **1,500 a day** from Google Workspace.
Each demo booking uses 2 (student + team alert); each enquiry uses 1. To check what's left today,
run the `showEmailQuota` function from the editor and look at the log.

## If a form stops working

| Symptom | Likely cause | Fix |
|---|---|---|
| Form says "Online booking is being set up" | `NEXT_PUBLIC_APPS_SCRIPT_URL` is empty | Add it to `.env.local` / Vercel and restart / redeploy |
| Form says "Sorry, something went wrong" | Script error or wrong URL | Open the URL in a browser (step 4.5); in Apps Script check **Executions** for red errors |
| Row appears but no email | Email quota used up, or email in Spam | Run `showEmailQuota`; check Spam |
| Nothing after editing the code | New code not deployed | Manage deployments → New version (see above) |
| A tab was renamed | The script looks for "Demo Bookings" and "Enquiries" | Rename the tabs back |

## Update: Enrollments tab (12 Oct 2026)

If you set up the script before 12 Oct 2026, do this once to add the **Enrollments** tab:

1. Open the Apps Script project. **Before deleting anything**, note your current `TEAM_EMAIL` and `WHATSAPP_NUMBER` values in `CONFIG`.
2. Select all the code and replace it with the new `apps-script/Code.gs` from the project. Put your `TEAM_EMAIL` back
   (`WHATSAPP_NUMBER` is already `917892891602` in the new file). Save (Ctrl + S).
3. Choose **setupSheet** in the function dropdown and click **Run**. It adds the **Enrollments** tab; your existing
   tabs and rows are not touched (it only rewrites their header row).
4. **Deploy → Manage deployments → pencil → Version: New version → Deploy.** The URL stays the same.
5. Test: on a program page click **Enroll now**, fill the form, continue. WhatsApp opens and one row appears in **Enrollments**.

## Update: change request 01 (18 Oct 2026)

What changes in the Sheet:
- **Demo Bookings**: new column **"College / company & role"** (column I). The team columns move one place right.
  Demo dates now use the **Monday cut-off**: bookings on Sunday or Monday get this Saturday; Tuesday onwards get next Saturday.
- **Enrollments**: accepts Data Engineering, Python Programming, "8 weeks" and "Advanced 3 months".
- New tab **Mentor Applications** ("Apply as a mentor" page).
- New tab **Callback Requests** ("Talk to an expert" pop-up: phone number only).

Steps (once):
1. Open the Sheet → **Extensions → Apps Script**. Note your current `TEAM_EMAIL` value in `CONFIG`.
2. Select all the code, delete it, and paste the new `apps-script/Code.gs`. Put your `TEAM_EMAIL` back. **Ctrl + S**.
3. In **Demo Bookings**, delete your old test rows (their team notes would now sit under the new column).
4. Choose **setupSheet** in the function dropdown → **Run**. It rewrites the header rows and adds the 2 new tabs.
5. **Deploy → Manage deployments → pencil → Version: New version → Deploy.** The URL stays the same.
6. Test: book a demo with the new optional field, send a mentor application from `/mentor/`, and wait 1 minute on any page for
   the pop-up. Each should add one row to its tab.

## Update: Brochure Downloads tab (21 Oct 2026)

"Download brochure" on the program pages now asks for name, phone and email first. To save these leads:
1. Note your `TEAM_EMAIL`, paste the new `apps-script/Code.gs`, put `TEAM_EMAIL` back, **Ctrl + S**.
2. Run **setupSheet** once (adds the **Brochure Downloads** tab; other tabs and rows are not touched).
3. **Deploy → Manage deployments → pencil → New version → Deploy.**
4. Test: download a brochure on the live site → one row in **Brochure Downloads**.
