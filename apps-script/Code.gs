/**
 * DataVedanta website forms -> Google Sheet (+ confirmation emails).
 *
 * Deployed as a Google Apps Script WEB APP, bound to the Google Sheet (Extensions > Apps Script).
 * Setup steps: docs/APPS_SCRIPT_SETUP.md.
 *
 * Security (see README: content rules): the web app URL is public, so this script ONLY appends rows and returns
 * {ok: true|false}. It never sends data back. Every input is trimmed, length-limited and validated;
 * a hidden honeypot field catches bots; a lock prevents two submissions writing at the same time;
 * the demo date is re-computed here from the script's own IST clock (the browser's date is ignored).
 */

// ---------------------------------------------------------------------------------------------
// CONFIG: edit these values in the Apps Script editor. Keep program names identical to the website
// (src/data/programs.ts) and demo links identical to src/data/demo-links.ts.
// ---------------------------------------------------------------------------------------------
const CONFIG = {
  // Who gets an email for every new demo booking and enquiry. Leave the placeholder to turn alerts off.
  TEAM_EMAIL: "PLACEHOLDER_TEAM_EMAIL",
  SENDER_NAME: "DataVedanta",
  // WhatsApp number with country code, digits only (e.g. 919876543210). Students message this number
  // to get the demo meeting link (there are no meeting links on the website or in emails).
  WHATSAPP_NUMBER: "917892891602",
  // Program names, exactly as on the website (src/data/programs.ts).
  PROGRAMS: [
    "Generative AI Engineering",
    "Applied AI & ML Engineering",
    "Data Science",
    "Data Engineering",
    "Python Full Stack",
    "Python Programming",
  ],
  // Extra choice allowed on the enquiry form only.
  ENQUIRY_EXTRA_PROGRAMS: ["Not sure yet"],
  // Mentor form choices, exactly as on the website (src/data/forms.ts, mentorForm).
  MENTOR_EXPERIENCE: ["3–5 years", "5–10 years", "10–15 years", "15+ years"],
  MENTOR_TEACHING: ["No formal teaching yet", "Less than 1 year", "1–3 years", "3+ years"],
};

const TZ = "Asia/Kolkata";
const TABS = {
  demo: "Demo Bookings",
  enquiry: "Enquiries",
  enrollment: "Enrollments",
  mentor: "Mentor Applications",
  callback: "Callback Requests",
  brochure: "Brochure Downloads",
};
const LIMITS = {
  name: 100, email: 120, program: 80, message: 1000, sourcePage: 200, track: 20, about: 150,
  degree: 100, position: 100, company: 100, techStack: 300, courses: 500, linkedin: 200, choice: 40,
};
// Tracks a student can enroll in (manual enrollment form on the program pages).
// "Advanced 3 months" = the second half, for learners who finished the 12-week Foundations.
const TRACKS = ["8 weeks", "12 weeks", "24 weeks", "Advanced 3 months"];
const DUPLICATE_WINDOW_SECONDS = 120;

const HEADERS = {
  "Demo Bookings": {
    columns: ["Timestamp (IST)", "Name", "Phone", "Email", "Program", "Demo Date", "Demo Week", "Source page", "College / company & role", "Status (team)", "Notes (team)"],
    teamFrom: 10, // columns 10+ are filled in by the team, never by this script
  },
  Enquiries: {
    columns: ["Timestamp (IST)", "Name", "Phone", "Email", "Program interest", "Message", "Source page", "Status (team)", "Assigned to (team)", "Notes (team)"],
    teamFrom: 8,
  },
  // Manual enrollment requests (Enroll now -> form -> WhatsApp). Payment is confirmed by the team.
  Enrollments: {
    columns: ["Timestamp (IST)", "Name", "Phone", "Email", "Program", "Track", "Source page", "Status (team)", "Payment received (team)", "Notes (team)"],
    teamFrom: 8,
  },
  // "Apply as a mentor" form (client point 3).
  "Mentor Applications": {
    columns: ["Timestamp (IST)", "Name", "Phone", "Email", "Highest degree", "Current position", "Company", "Total experience",
      "Tech stack", "Courses they can teach", "Teaching experience", "LinkedIn", "Message", "Source page", "Status (team)", "Notes (team)"],
    teamFrom: 15,
  },
  // "Talk to an expert" pop-up (client point 22): phone number only.
  "Callback Requests": {
    columns: ["Timestamp (IST)", "Phone", "Source page", "Status (team)", "Notes (team)"],
    teamFrom: 4,
  },
  // "Download brochure" form on program pages (lead capture, 21 Oct 2026).
  "Brochure Downloads": {
    columns: ["Timestamp (IST)", "Name", "Phone", "Email", "Program", "Source page", "Status (team)", "Notes (team)"],
    teamFrom: 7,
  },
};

// ---------------------------------------------------------------------------------------------
// Web app entry points
// ---------------------------------------------------------------------------------------------

/** Receives form posts from the website. */
function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    // Honeypot filled in = a bot. Pretend it worked, store nothing.
    if (clean_(body.website, 200) !== "") return json_({ ok: true });

    const type = Object.prototype.hasOwnProperty.call(TABS, body.type) ? body.type : null;
    if (!type) return json_({ ok: false });

    const lead = {
      name: clean_(body.name, LIMITS.name),
      phone: normalisePhone_(clean_(body.phone, 20)),
      email: clean_(body.email, LIMITS.email).toLowerCase(),
      program: clean_(body.program, LIMITS.program),
      message: type === "enquiry" || type === "mentor" ? clean_(body.message, LIMITS.message) : "",
      track: type === "enrollment" ? clean_(body.track, LIMITS.track) : "",
      about: type === "demo" ? clean_(body.about, LIMITS.about) : "",
      sourcePage: clean_(body.sourcePage, LIMITS.sourcePage),
    };
    // Mentor application details.
    const mentor =
      type === "mentor"
        ? {
            degree: clean_(body.degree, LIMITS.degree),
            position: clean_(body.position, LIMITS.position),
            company: clean_(body.company, LIMITS.company),
            experience: clean_(body.experience, LIMITS.choice),
            techStack: clean_(body.techStack, LIMITS.techStack),
            courses: clean_(body.courses, LIMITS.courses),
            teaching: clean_(body.teaching, LIMITS.choice),
            linkedin: clean_(body.linkedin, LIMITS.linkedin),
          }
        : null;
    if (!isValidLead_(lead, type, mentor)) return json_({ ok: false });

    const now = new Date();
    const timestamp = Utilities.formatDate(now, TZ, "yyyy-MM-dd HH:mm:ss");
    // The browser's date (body.clientDemoDate) is deliberately ignored.
    const slot = type === "demo" ? computeDemoSlot(now) : null;

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    let written = false;
    try {
      if (!isDuplicate_(type, lead)) {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TABS[type]);
        const rows = {
          demo: () => [timestamp, lead.name, lead.phone, lead.email, lead.program, slot.isoDate, slot.week, lead.sourcePage, lead.about],
          enquiry: () => [timestamp, lead.name, lead.phone, lead.email, lead.program, lead.message, lead.sourcePage],
          enrollment: () => [timestamp, lead.name, lead.phone, lead.email, lead.program, lead.track, lead.sourcePage],
          mentor: () => [timestamp, lead.name, lead.phone, lead.email, mentor.degree, mentor.position, mentor.company, mentor.experience,
            mentor.techStack, mentor.courses, mentor.teaching, mentor.linkedin, lead.message, lead.sourcePage],
          callback: () => [timestamp, lead.phone, lead.sourcePage],
          brochure: () => [timestamp, lead.name, lead.phone, lead.email, lead.program, lead.sourcePage],
        };
        const row = rows[type]();
        sheet.appendRow(row.map(safeCell_));
        SpreadsheetApp.flush();
        written = true;
      }
    } finally {
      lock.releaseLock();
    }

    // Emails are sent after the row is saved; an email problem never loses the booking.
    if (written) {
      if (type === "demo") sendDemoEmails_(lead, slot, timestamp);
      else if (type === "enrollment") sendEnrollmentAlert_(lead, timestamp);
      else if (type === "mentor") sendMentorAlert_(lead, mentor, timestamp);
      else if (type === "callback") sendCallbackAlert_(lead, timestamp);
      else if (type === "brochure") sendBrochureAlert_(lead, timestamp);
      else sendEnquiryAlert_(lead, timestamp);
    }
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false });
  }
}

/** Opening the web app URL in a browser shows this (useful to check the deployment works). */
function doGet() {
  return ContentService.createTextOutput("DataVedanta form endpoint is running.");
}

// ---------------------------------------------------------------------------------------------
// Demo date: same rules as src/lib/demo-date.ts (a website test checks both give the same result)
// Mon -> this week's Saturday ("This week"); Tue-Sun -> next week's Saturday ("Next week"). Cut-off: Tuesday 00:00 IST.
// ---------------------------------------------------------------------------------------------
function computeDemoSlot(now) {
  const IST_OFFSET_MS = (5 * 60 + 30) * 60 * 1000;
  const DAY_MS = 24 * 60 * 60 * 1000;
  const ist = new Date(now.getTime() + IST_OFFSET_MS);
  const mondayBased = (ist.getUTCDay() + 6) % 7; // Mon = 0 ... Sun = 6
  const nextWeek = mondayBased >= 1;
  const daysToSaturday = 5 - mondayBased + (nextWeek ? 7 : 0);
  const saturday = new Date(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()) + daysToSaturday * DAY_MS);
  const pad = (n) => String(n).padStart(2, "0");
  return {
    isoDate: saturday.getUTCFullYear() + "-" + pad(saturday.getUTCMonth() + 1) + "-" + pad(saturday.getUTCDate()),
    week: nextWeek ? "Next week" : "This week",
    // 7:00 PM (IST) = 13:30 UTC
    start: new Date(Date.UTC(saturday.getUTCFullYear(), saturday.getUTCMonth(), saturday.getUTCDate(), 13, 30)),
  };
}

// ---------------------------------------------------------------------------------------------
// Emails (MailApp). Daily quota: about 100 recipients/day on a free Gmail account,
// 1,500/day on Google Workspace. Each demo booking uses 1 (student) + 1 (team alert).
// ---------------------------------------------------------------------------------------------
function sendDemoEmails_(lead, slot, timestamp) {
  const dateText = Utilities.formatDate(slot.start, TZ, "EEEE, d MMMM yyyy");
  const linkLine = isPlaceholder_(CONFIG.WHATSAPP_NUMBER)
    ? "To get the meeting link, please message us on WhatsApp."
    : "To get the meeting link, message us on WhatsApp: https://wa.me/" + CONFIG.WHATSAPP_NUMBER;
  try {
    MailApp.sendEmail({
      to: lead.email,
      name: CONFIG.SENDER_NAME,
      subject: "Your free " + lead.program + " demo: " + dateText + ", 7:00 PM (IST)",
      body: [
        "Hi " + lead.name + ",",
        "",
        "Thank you for booking a free demo with DataVedanta.",
        "",
        "Program: " + lead.program,
        "Date: " + dateText,
        "Time: 7:00 PM (IST)",
        linkLine,
        "",
        "See you on Saturday!",
        "DataVedanta Technologies",
      ].join("\n"),
    });
  } catch (err) {
    console.error("Student email failed", err);
  }
  sendTeamAlert_(
    "New demo booking: " + lead.program + " (" + slot.isoDate + ")",
    ["Time: " + timestamp, "Name: " + lead.name, "Phone: " + lead.phone, "Email: " + lead.email,
     "Program: " + lead.program, "Demo: " + dateText + " (" + slot.week + ")",
     "College / company & role: " + (lead.about || "-"), "Page: " + lead.sourcePage].join("\n"),
  );
}

function sendEnquiryAlert_(lead, timestamp) {
  sendTeamAlert_(
    "New enquiry: " + lead.program,
    ["Time: " + timestamp, "Name: " + lead.name, "Phone: " + lead.phone, "Email: " + lead.email,
     "Program: " + lead.program, "Message: " + (lead.message || "-"), "Page: " + lead.sourcePage].join("\n"),
  );
}

// No email to the student: they continue on WhatsApp, where the team shares the payment details.
function sendEnrollmentAlert_(lead, timestamp) {
  sendTeamAlert_(
    "New enrollment request: " + lead.program + " (" + lead.track + ")",
    ["Time: " + timestamp, "Name: " + lead.name, "Phone: " + lead.phone, "Email: " + lead.email,
     "Program: " + lead.program, "Track: " + lead.track, "Page: " + lead.sourcePage,
     "", "The student was sent to WhatsApp to get the payment details."].join("\n"),
  );
}

function sendMentorAlert_(lead, mentor, timestamp) {
  sendTeamAlert_(
    "New mentor application: " + lead.name + " (" + mentor.company + ")",
    ["Time: " + timestamp, "Name: " + lead.name, "Phone: " + lead.phone, "Email: " + lead.email,
     "Highest degree: " + mentor.degree, "Current position: " + mentor.position, "Company: " + mentor.company,
     "Total experience: " + mentor.experience, "Tech stack: " + mentor.techStack, "Can teach: " + mentor.courses,
     "Teaching experience: " + mentor.teaching, "LinkedIn: " + (mentor.linkedin || "-"), "Message: " + (lead.message || "-")].join("\n"),
  );
}

function sendCallbackAlert_(lead, timestamp) {
  sendTeamAlert_("Call back request: " + lead.phone, ["Time: " + timestamp, "Phone: " + lead.phone, "Page: " + lead.sourcePage,
    "", "The visitor asked to talk to an expert (pop-up). Please call them back."].join("\n"));
}

function sendBrochureAlert_(lead, timestamp) {
  sendTeamAlert_(
    "Brochure downloaded: " + lead.program,
    ["Time: " + timestamp, "Name: " + lead.name, "Phone: " + lead.phone, "Email: " + lead.email,
     "Program: " + lead.program, "Page: " + lead.sourcePage].join("\n"),
  );
}

function sendTeamAlert_(subject, body) {
  if (isPlaceholder_(CONFIG.TEAM_EMAIL)) return;
  try {
    MailApp.sendEmail({ to: CONFIG.TEAM_EMAIL, name: CONFIG.SENDER_NAME + " website", subject: subject, body: body });
  } catch (err) {
    console.error("Team alert failed", err);
  }
}

// ---------------------------------------------------------------------------------------------
// One-time setup: run setupSheet() from the editor to create the tabs with headers (safe to run again).
// ---------------------------------------------------------------------------------------------
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(HEADERS).forEach(function (name) {
    const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
    const spec = HEADERS[name];
    const header = sheet.getRange(1, 1, 1, spec.columns.length);
    header.setValues([spec.columns]).setFontWeight("bold").setBackground("#12394A").setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
    // Shade the team-only columns so everyone knows the script never writes there.
    sheet.getRange(1, spec.teamFrom, sheet.getMaxRows(), spec.columns.length - spec.teamFrom + 1).setBackground("#F3ECE0");
    sheet.getRange(1, spec.teamFrom, 1, spec.columns.length - spec.teamFrom + 1).setBackground("#DFD0B6").setFontColor("#12394A");
    sheet.autoResizeColumns(1, spec.columns.length);
  });
  const blank = ss.getSheetByName("Sheet1");
  if (blank && ss.getSheets().length > Object.keys(HEADERS).length && blank.getLastRow() === 0) ss.deleteSheet(blank);
}

/** Run from the editor to see how many emails are left today. */
function showEmailQuota() {
  console.log("Emails left today: " + MailApp.getRemainingDailyQuota());
}

// ---------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------
function clean_(value, maxLength) {
  return String(value == null ? "" : value).replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function normalisePhone_(phone) {
  const digits = phone.replace(/[\s\-()]/g, "");
  return digits.replace(/^(\+?91|0)(?=\d{10}$)/, "");
}

function isPlaceholder_(value) {
  return !value || String(value).indexOf("PLACEHOLDER_") === 0;
}

function isValidLead_(lead, type, mentor) {
  const validPhone = /^[6-9]\d{9}$/.test(lead.phone);
  // Pop-up: only a phone number.
  if (type === "callback") return validPhone;

  const validPerson = lead.name.length >= 2 && validPhone && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email);
  if (type === "mentor") {
    const courses = mentor.courses.split(", ");
    return (
      validPerson &&
      mentor.degree.length >= 2 &&
      mentor.position.length >= 2 &&
      mentor.company.length >= 2 &&
      mentor.techStack.length >= 2 &&
      CONFIG.MENTOR_EXPERIENCE.indexOf(mentor.experience) !== -1 &&
      CONFIG.MENTOR_TEACHING.indexOf(mentor.teaching) !== -1 &&
      courses.every(function (c) { return CONFIG.PROGRAMS.indexOf(c) !== -1; }) &&
      (mentor.linkedin === "" || /^https?:\/\/\S+$/.test(mentor.linkedin))
    );
  }

  const programs = CONFIG.PROGRAMS.concat(type === "enquiry" ? CONFIG.ENQUIRY_EXTRA_PROGRAMS : []);
  return (
    validPerson &&
    programs.indexOf(lead.program) !== -1 &&
    (type !== "enrollment" || TRACKS.indexOf(lead.track) !== -1)
  );
}

// Same phone + program + form within 2 minutes = a double click or retry: store only once.
function isDuplicate_(type, lead) {
  const cache = CacheService.getScriptCache();
  const key = [type, lead.phone, lead.program].join("|");
  if (cache.get(key)) return true;
  cache.put(key, "1", DUPLICATE_WINDOW_SECONDS);
  return false;
}

// Stops spreadsheet formula injection: text starting with = + - @ is stored as plain text.
// Phone numbers are always stored as text so the Sheet keeps them exactly.
function safeCell_(value) {
  const text = String(value);
  return /^[=+\-@]/.test(text) || /^\d{10}$/.test(text) ? "'" + text : text;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
