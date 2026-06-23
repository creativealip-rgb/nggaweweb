# Form & Automation Spec — Nggawe Web

## 0. Purpose

Dokumen ini detail untuk:

- Form fields
- Validation
- Lead scoring
- n8n workflow
- CRM/spreadsheet columns
- Email templates
- WhatsApp templates
- Notification templates
- Follow-up flow

Goal:

- Semua lead dari website masuk rapi
- Owner dapat notifikasi cepat
- Lead dapat balasan otomatis
- Follow-up tidak hilang
- Source/UTM tercatat

---

# 1. Forms Overview

## Forms Needed

1. Brief Project Form
2. Audit Gratis Form
3. Contact Form
4. Newsletter Form
5. Website Cost Calculator Lead Capture
6. Automation ROI Calculator Lead Capture
7. Booking Call Pre-Form optional

## Common Hidden Fields

Semua form kirim hidden fields:

```text
formType
sourcePage
landingPage
referrer
utmSource
utmMedium
utmCampaign
utmTerm
utmContent
submittedAt
userAgent
locale
honeypot
startedAt
```

## Common Validation Rules

- `name`: required, min 2 chars
- `email`: required, valid email
- `phone`: optional/required depending form, min 8 chars
- `website`: optional, valid URL if filled
- `message`: optional, max 3000 chars
- `budgetRange`: required for brief form
- `timeline`: required for brief form
- honeypot must be empty
- submit time must be > 3 seconds from form start

---

# 2. Brief Project Form

## Purpose

Main lead qualification form.

URL:

```text
/brief-project
```

## Fields

### Section 1 — Contact Info

```text
name              required text
email             required email
phone             required text
preferredContact  required select: whatsapp/email/call
```

### Section 2 — Business Info

```text
companyName       required text
businessType      required select
currentWebsite    optional url
location          optional text
```

Business type options:

```text
service_business
startup
umkm
agency
personal_brand
ecommerce
other
```

### Section 3 — Service Needed

```text
servicesNeeded    required multi-select
projectGoal       required textarea
```

Service options:

```text
website_development
seo
business_automation
website_redesign
landing_page
cms_blog
agency_white_label
maintenance
not_sure
```

### Section 4 — Scope

```text
pageCount         optional select
featuresNeeded    optional multi-select
references        optional textarea
```

Page count options:

```text
1_page
2_5_pages
6_10_pages
10_plus_pages
not_sure
```

Feature options:

```text
contact_form
whatsapp_cta
blog
portfolio
cms
booking
payment
membership
calculator
automation
seo_setup
multilingual
other
```

### Section 5 — Budget & Timeline

```text
budgetRange       required select
timeline          required select
```

Budget options:

```text
below_3_5m
3_5m_8_5m
8_5m_15m
15m_30m
30m_plus
not_sure
```

Timeline options:

```text
urgent_1_week
this_month
1_3_months
flexible
not_sure
```

### Section 6 — Message

```text
message           optional textarea
```

## Submit Button

```text
Kirim Brief Project
```

## Success Message

```text
Brief kamu sudah masuk. Kami akan review dan menghubungi kamu maksimal 1x24 jam.
```

---

# 3. Audit Gratis Form

## Purpose

Capture existing website owners.

URL:

```text
/audit-gratis
```

## Fields

```text
name              required text
email             required email
phone             required text
website           required url
mainConcern       required select
businessType      optional select
message           optional textarea
```

Main concern options:

```text
tidak_muncul_google
website_lambat
design_kurang_meyakinkan
lead_sedikit
seo_belum_jelas
mau_redesign
not_sure
```

## Submit Button

```text
Minta Audit Gratis
```

## Success Message

```text
Request audit kamu sudah masuk. Kami akan cek singkat dan follow-up hasil awalnya.
```

---

# 4. Contact Form

## Fields

```text
name              required text
email             required email
phone             optional text
subject           required select
message           required textarea
```

Subject options:

```text
website
seo
automation
agency_partnership
maintenance
other
```

---

# 5. Calculator Lead Capture

## Website Cost Calculator Result Fields

Captured values:

```text
websiteType
pageCount
features[]
seoAddon
automationAddon
estimatedMin
estimatedMax
recommendedPackage
```

Lead gate optional fields:

```text
name
email
phone
```

CTA:

```text
Kirim Estimasi ke WhatsApp
```

---

# 6. Lead Scoring

## Score Factors

Budget:

```text
below_3_5m    +0
3_5m_8_5m     +15
8_5m_15m      +30
15m_30m       +45
30m_plus      +60
not_sure      +10
```

Timeline:

```text
urgent_1_week +30
this_month    +25
1_3_months    +15
flexible      +5
not_sure      +0
```

Service needed:

```text
website_development     +15
seo                     +15
business_automation     +20
website_redesign        +15
agency_white_label      +25
not_sure                +5
```

Business type:

```text
service_business        +20
startup                 +20
agency                  +25
umkm                    +10
personal_brand          +10
ecommerce               +10
other                   +5
```

Existing website:

```text
has_current_website     +10
no_current_website      +0
```

## Priority Mapping

```text
0–29      low
30–59     medium
60–89     high
90+       hot
```

## Package Recommendation

```text
below_3_5m      Starter / waitlist
3_5m_8_5m       Website Starter or Growth Lite
8_5m_15m        Website Growth
15m_30m         Website + SEO System
30m_plus        Full System / Custom
agency          Agency White-Label
```

---

# 7. API Payloads

## Brief Project Payload

```json
{
  "type": "brief_project",
  "submittedAt": "2026-01-01T00:00:00.000Z",
  "source": {
    "sourcePage": "/brief-project",
    "landingPage": "/",
    "referrer": "https://google.com",
    "utmSource": "google",
    "utmMedium": "organic",
    "utmCampaign": "",
    "utmTerm": "",
    "utmContent": ""
  },
  "lead": {
    "name": "",
    "email": "",
    "phone": "",
    "preferredContact": "whatsapp",
    "companyName": "",
    "businessType": "service_business",
    "currentWebsite": "",
    "location": "",
    "servicesNeeded": ["website_development", "seo"],
    "projectGoal": "",
    "pageCount": "6_10_pages",
    "featuresNeeded": ["cms", "blog", "automation"],
    "references": "",
    "budgetRange": "8_5m_15m",
    "timeline": "this_month",
    "message": ""
  },
  "qualification": {
    "score": 85,
    "priority": "high",
    "recommendedPackage": "Website Growth"
  }
}
```

---

# 8. n8n Workflow Detail

## Workflow Name

```text
Nggawe Web — Lead Intake
```

## Nodes

1. Webhook Trigger
2. Validate Required Fields
3. Normalize Phone
4. Normalize Website URL
5. Calculate Lead Score
6. Set Priority
7. Save to Lead Sheet/CRM
8. Send Owner Notification
9. Send Confirmation Email
10. Create Follow-up Task
11. Error Handler

## Storage Option A — Google Sheets

Sheet columns:

```text
id
submitted_at
form_type
priority
score
recommended_package
name
email
phone
preferred_contact
company_name
business_type
current_website
location
services_needed
project_goal
page_count
features_needed
budget_range
timeline
message
source_page
landing_page
referrer
utm_source
utm_medium
utm_campaign
status
owner_notes
next_follow_up_at
created_at
updated_at
```

## Status Values

```text
new
contacted
qualified
proposal_sent
won
lost
spam
```

## Follow-up Rules

Hot lead:

- Notify instantly
- Follow-up same day
- Reminder after 4 hours if status still `new`

High lead:

- Notify instantly
- Follow-up within 24 hours

Medium lead:

- Follow-up within 48 hours

Low lead:

- Send polite email + resources

---

# 9. Owner Notification Template

## Telegram / WhatsApp Notification

```text
🔥 Lead baru Nggawe Web

Priority: {{priority}} (Score: {{score}})
Package: {{recommendedPackage}}

Nama: {{name}}
Bisnis: {{companyName}}
Tipe: {{businessType}}
Website: {{currentWebsite}}
Layanan: {{servicesNeeded}}
Budget: {{budgetRange}}
Timeline: {{timeline}}

Goal:
{{projectGoal}}

Message:
{{message}}

Source: {{sourcePage}}
UTM: {{utmSource}} / {{utmMedium}} / {{utmCampaign}}

Follow-up: {{phone}} / {{email}}
```

---

# 10. Email Templates

## Brief Confirmation Email

Subject:

```text
Brief kamu sudah masuk — Nggawe Web akan review dulu
```

Body:

```text
Halo {{name}},

Brief kamu sudah kami terima. Kami akan review kebutuhan, website saat ini, target project, budget, dan timeline kamu.

Biasanya kami balas maksimal 1x24 jam dengan rekomendasi langkah awal yang paling masuk akal.

Sambil menunggu, kamu bisa lihat portfolio kami di:
{{portfolioUrl}}

Kalau ada info tambahan, balas email ini atau chat WhatsApp kami.

— Nggawe Web
```

## Audit Confirmation Email

Subject:

```text
Request audit website kamu sudah masuk
```

Body:

```text
Halo {{name}},

Request audit untuk {{website}} sudah kami terima.

Kami akan cek singkat beberapa area utama:
- Tampilan dan trust
- Mobile experience
- Speed basic
- SEO basic
- Struktur CTA
- Lead flow

Kami akan follow-up hasil awalnya secepatnya.

— Nggawe Web
```

## Low Budget Email

Subject:

```text
Rekomendasi awal untuk project website kamu
```

Body:

```text
Halo {{name}},

Terima kasih sudah mengirim brief.

Dari budget yang kamu pilih, rekomendasi paling aman adalah mulai dari versi starter dulu: halaman utama, informasi layanan, WhatsApp CTA, dan SEO basic.

Kalau nanti budget sudah siap untuk versi lebih lengkap, website bisa dikembangkan bertahap.

— Nggawe Web
```

---

# 11. WhatsApp Templates

## Initial Follow-up

```text
Halo {{name}}, saya dari Nggawe Web.

Brief kamu soal {{servicesNeeded}} sudah masuk. Saya sudah lihat kebutuhan awalnya: {{projectGoal}}.

Boleh saya tanya 2 hal dulu?
1. Target utama website/sistem ini apa dalam 1–3 bulan pertama?
2. Ada referensi website atau style yang kamu suka?
```

## Audit Follow-up

```text
Halo {{name}}, saya dari Nggawe Web.

Request audit untuk {{website}} sudah masuk. Saya akan cek singkat dari sisi tampilan, SEO basic, speed, dan CTA.

Nanti saya kirim catatan awalnya di sini ya.
```

## Agency Follow-up

```text
Halo {{name}}, saya dari Nggawe Web.

Saya lihat kamu butuh support white-label/agency project. Boleh share brief singkat, scope, deadline, dan stack yang diinginkan?

Kalau perlu NDA atau komunikasi white-label, aman.
```

---

# 12. Error Handling

## Form Error Message

```text
Data belum terkirim. Coba lagi atau hubungi kami lewat WhatsApp.
```

## API Failure Behavior

If n8n fails:

- Log error server-side
- Send fallback email to owner if possible
- Return generic error to user
- Do not expose webhook/API error

## n8n Error Workflow

On error:

- Send owner alert
- Save failed payload to backup sheet/table
- Include error message and node name

---

# 13. Privacy Notes

Website should state:

- Data form dipakai untuk follow-up kebutuhan project
- Data tidak dijual ke pihak lain
- Analytics dipakai untuk memahami performa website
- User bisa minta data dihapus dengan menghubungi email/WhatsApp

---

# 14. Implementation Checklist

- [ ] Create Zod schemas
- [ ] Create form UI
- [ ] Add hidden UTM fields
- [ ] Add honeypot
- [ ] Add submit timer
- [ ] Create API routes
- [ ] Add n8n webhook env
- [ ] Create n8n workflow
- [ ] Test valid brief
- [ ] Test invalid brief
- [ ] Test audit form
- [ ] Test owner notification
- [ ] Test confirmation email
- [ ] Test CRM row creation
- [ ] Test error flow
