// Client policy text, copied exactly from the client's Refund & Cancellation Policy PDF.
// Do not rewrite the wording. Exceptions approved by the user (10 Oct 2026): American spelling "enroll"/"enrollment",
// and every email address replaced with hello@datavedanta.com.

import type { PolicyDocument } from "./types";

export const refundPolicy: PolicyDocument = {
  "title": "Refund & Cancellation Policy",
  "subtitle": "For paid courses, cohorts, workshops and other learning programs",
  "meta": [
    {
      "label": "Entity",
      "value": "Data Vedanta Technologies"
    },
    {
      "label": "Effective date",
      "value": "7 October 2026"
    },
    {
      "label": "Policy",
      "value": "Applies to paid programs unless a program page expressly states different terms"
    }
  ],
  "intro": [],
  "sections": [
    {
      "heading": "1. Cancellation and Refund Window",
      "paragraphs": [
        {
          "text": "A participant may request cancellation and a refund within 7 calendar days from the commencement date of the enrolled program/cohort.",
          "bold": [
            "7 calendar days from the commencement date of the enrolled program/cohort"
          ]
        },
        {
          "text": "After the 7-calendar-day period has expired, no refund will be provided, except where required by applicable law or where Data Vedanta expressly agrees otherwise in writing.",
          "bold": [
            "no refund will be provided"
          ]
        }
      ]
    },
    {
      "heading": "2. Refund Within the First 7 Days",
      "paragraphs": [
        {
          "text": "Where a valid cancellation request is received within the first 7 calendar days, the refund will be calculated on a pro-rata basis. The portion of the program corresponding to the period already elapsed/consumed will be deducted from the amount paid, and the balance will be refunded.",
          "bold": [
            "pro-rata basis"
          ]
        },
        {
          "text": "Refund = Amount Paid − Pro-rata amount attributable to the elapsed period",
          "style": "formula"
        },
        {
          "text": "Example: If a program runs for 10 weeks and a participant cancels after 1 week, the applicable amount for the elapsed 1 week will be deducted and the remaining eligible amount will be refunded.",
          "style": "note"
        }
      ]
    },
    {
      "heading": "3. One-Time Batch Transfer",
      "paragraphs": [
        {
          "text": "Instead of requesting a refund, a participant may request a transfer to one future batch of the same or substantially similar program, subject to availability.",
          "bold": [
            "one future batch of the same or substantially similar program"
          ]
        },
        {
          "text": "The batch-transfer option may be used only once and is subject to Data Vedanta's confirmation. Once a participant has transferred to a future batch, the original enrollment will be treated as transferred and the participant will not be entitled to a second batch transfer for the same enrollment.",
          "bold": [
            "only once"
          ]
        },
        "A batch transfer is not an additional refund entitlement and does not reset or extend the original refund period unless Data Vedanta expressly confirms otherwise in writing."
      ]
    },
    {
      "heading": "4. How to Request Cancellation",
      "paragraphs": [
        {
          "text": "Cancellation or batch-transfer requests must be sent to hello@datavedanta.com from the email address used for enrollment. The request should include the participant's name, enrolled program and payment/enrollment reference, if available.",
          "bold": [
            "hello@datavedanta.com"
          ]
        },
        "The date on which Data Vedanta receives the request will be used to determine whether the request falls within the 7-calendar-day refund window."
      ]
    },
    {
      "heading": "5. Refund Processing",
      "paragraphs": [
        "Approved refunds will normally be processed through the original payment method or another method reasonably determined by Data Vedanta and permitted by the payment provider. Actual crediting time may depend on the payment gateway, bank or financial institution."
      ]
    },
    {
      "heading": "6. Program Cancellation or Material Change by Data Vedanta",
      "paragraphs": [
        "If Data Vedanta cancels a program or makes a material change that results in the program no longer being reasonably deliverable as originally offered, Data Vedanta may provide an alternative batch, replacement arrangement or refund, as appropriate and subject to applicable law."
      ]
    },
    {
      "heading": "7. Statutory Rights",
      "paragraphs": [
        "Nothing in this Policy is intended to exclude, restrict or waive any consumer right, remedy or protection that cannot legally be excluded or waived under applicable law."
      ]
    },
    {
      "heading": "8. Policy Changes",
      "paragraphs": [
        "Data Vedanta may update this Policy from time to time. The version applicable to an enrollment will generally be the version presented or made available at the time of purchase, unless a later change is required by law or expressly communicated to the participant."
      ]
    }
  ],
  "contactBox": [
    "Data Vedanta Technologies",
    "Refund / cancellation support: hello@datavedanta.com",
    "General enquiries: hello@datavedanta.com",
    "Website: www.datavedanta.com"
  ]
};
