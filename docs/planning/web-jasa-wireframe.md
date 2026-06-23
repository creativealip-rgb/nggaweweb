# Wireframe Plan — Nggawe Web

## 0. Wireframe Goals

Tujuan layout:

- Jelaskan value dalam 5 detik
- Tampilkan 3 core services jelas
- Buktikan skill lewat portfolio nyata
- Dorong CTA ke konsultasi, brief, WhatsApp
- Tampilkan automation sebagai pembeda utama
- Support SEO dengan struktur heading rapi
- Mobile-first, desktop premium

Design feel:

- Premium SaaS agency
- Clean, sharp, high contrast
- Banyak whitespace
- Bento/grid cards
- Browser mockup
- Automation node visual
- CTA kuat tapi tidak norak

---

# 1. Global Layout

## Page Container

Desktop:

- Max width: `1200px–1280px`
- Section padding Y: `96px–128px`
- Container padding X: `32px`

Tablet:

- Section padding Y: `72px–96px`
- Container padding X: `24px`

Mobile:

- Section padding Y: `56px–72px`
- Container padding X: `20px`

## Header

Desktop layout:

```text
[Logo]        [Services v] [Portfolio] [Blog] [Tools] [Contact]        [Konsultasi Gratis]
```

Mobile layout:

```text
[Logo]                                      [Menu]
```

Sticky:

- Header sticky top
- Background blur after scroll
- Thin border bottom
- CTA button visible desktop

Services dropdown:

- Jasa Pembuatan Website
- Jasa SEO
- Jasa Automation
- Agency Subcontract

## Footer

Desktop columns:

```text
[Brand + short copy] [Services] [Resources] [Company] [Contact]
```

Footer CTA block above footer:

```text
Ready to build better website system?
[Konsultasi Gratis] [Isi Brief Project]
```

Mobile footer:

- Stacked accordion or simple stacked links
- WhatsApp CTA visible

---

# 2. Homepage Wireframe

## Section 1 — Hero

Purpose:

- Explain offer fast
- Show website + SEO + automation combined
- Push CTA

Desktop layout:

```text
┌──────────────────────────────────────────────────────────────┐
│ Eyebrow: Jasa Website, SEO, dan Automation                   │
│                                                              │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ H1                       │ │ Browser mockup              │ │
│ │ Subheadline              │ │ + automation flow nodes     │ │
│ │ [Konsultasi] [Portfolio] │ │                             │ │
│ │ Trust microcopy          │ │ Form -> CRM -> Notify       │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
│                                                              │
│ Mini proof row: Website • SEO • Automation • Portfolio       │
└──────────────────────────────────────────────────────────────┘
```

Hero visual:

- Browser mockup showing homepage UI
- Floating cards:
  - `Lead captured`
  - `SEO-ready`
  - `WhatsApp notified`
- Animated connection lines

Mobile layout:

```text
[Eyebrow]
[H1]
[Subheadline]
[CTA Primary full width]
[CTA Secondary text/button]
[Compact browser mockup]
[Proof chips horizontal scroll]
```

Notes:

- H1 max 2–3 lines desktop
- CTA above fold mobile
- Avoid heavy animation mobile

---

## Section 2 — Pain Points

Purpose:

- Make visitor feel understood
- Frame problem beyond design

Desktop layout:

```text
[Section label]
[Heading centered]
[Intro centered]

┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│ Website    │ │ Tidak      │ │ Lead tidak │ │ Tidak ada  │
│ biasa      │ │ ranking    │ │ rapi       │ │ system     │
└────────────┘ └────────────┘ └────────────┘ └────────────┘
```

Mobile:

- 1 card per row
- Icons simple line style

Card anatomy:

```text
[Icon]
[Title]
[Body]
```

---

## Section 3 — Solution / System Promise

Purpose:

- Introduce integrated approach

Desktop layout:

```text
┌─────────────────────────────┐ ┌─────────────────────────────┐
│ Heading                     │ │ System diagram              │
│ Body                        │ │ Design -> SEO -> Lead ->    │
│ [CTA]                       │ │ Automation -> Growth        │
└─────────────────────────────┘ └─────────────────────────────┘
```

System diagram cards:

1. Design premium
2. SEO foundation
3. Conversion flow
4. Automation
5. Analytics

Mobile:

- Text first
- Diagram stacked vertical

---

## Section 4 — Services Overview

Purpose:

- Show three service pillars

Desktop layout:

```text
[Heading]
[Intro]

┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ Website Dev      │ │ SEO Optimization │ │ Automation       │
│ Description      │ │ Description      │ │ Description      │
│ Bullet list      │ │ Bullet list      │ │ Bullet list      │
│ [CTA]            │ │ [CTA]            │ │ [CTA]            │
└──────────────────┘ └──────────────────┘ └──────────────────┘
```

Interaction:

- Hover card lift
- Border glow subtle
- CTA arrow moves right

Mobile:

- Cards stacked
- Each card CTA visible

---

## Section 5 — Portfolio Preview

Purpose:

- Build trust with real work

Desktop layout:

```text
[Heading left]                                      [View all]
[Intro]

┌──────────────────────────────────────┐ ┌──────────────┐
│ Featured: Monev.app / Contenly.app   │ │ Cubiqlo      │
│ Large screenshot                     │ │ Small card   │
└──────────────────────────────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Ganesha      │ │ Whale Dive   │ │ Other/demo   │
└──────────────┘ └──────────────┘ └──────────────┘
```

Portfolio card anatomy:

```text
[Screenshot]
[Project name]
[Industry/type]
[Short result]
[Tech/service tags]
```

Recommended featured order:

1. Monev.app — app/system proof
2. Contenly.app — product/AI proof
3. Ganesha Travel — service/local proof
4. Whale Dive Centre — tourism/service proof
5. Cubiqlo — brand/design proof

Mobile:

- Featured card full width
- Other cards carousel or stacked

---

## Section 6 — Automation Demo

Purpose:

- Make automation tangible
- Differentiate Nggawe Web

Desktop layout:

```text
┌──────────────────────────────┐
│ Heading centered             │
│ Body centered                │
└──────────────────────────────┘

[Form Website] → [Lead Database] → [Notification]
       ↓                ↓                ↓
[Email Reply]  → [Follow-up Task] → [Report]
```

Alternative bento:

```text
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Form       │→│ n8n Flow   │→│ WhatsApp   │
└────────────┘ └────────────┘ └────────────┘
       ↓              ↓              ↓
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Sheet/CRM  │ │ Email      │ │ Follow-up  │
└────────────┘ └────────────┘ └────────────┘
```

Motion:

- Lines pulse slowly
- Node active one-by-one
- Disable complex motion mobile

Mobile:

- Vertical timeline:

```text
Form Website
↓
Lead Database
↓
Notification
↓
Email Autoresponder
↓
Follow-up Task
```

---

## Section 7 — Process

Purpose:

- Reduce uncertainty
- Show professional workflow

Desktop layout:

```text
[Heading]
[Intro]

01 Discovery → 02 Strategy → 03 Design → 04 Build → 05 Automation → 06 Launch
```

Each step:

```text
[Number]
[Title]
[Short body]
```

Mobile:

- Vertical timeline
- Numbers left, content right

---

## Section 8 — Packages Teaser

Purpose:

- Qualify lead by budget
- Set expectation

Desktop layout:

```text
[Heading]
[Intro]

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Starter      │ │ Growth       │ │ Full System  │
│ Rp3.5jt+     │ │ Rp8.5jt+     │ │ Rp15jt+      │
│ Deliverables │ │ Deliverables │ │ Deliverables │
│ [CTA]        │ │ [CTA]        │ │ [CTA]        │
└──────────────┘ └──────────────┘ └──────────────┘
```

Highlight:

- Growth package as recommended

Mobile:

- Stacked pricing cards
- Recommended badge visible

---

## Section 9 — Tools / Lead Magnet

Purpose:

- Capture mid-intent users
- Increase engagement

Desktop layout:

```text
┌────────────────────────────┐ ┌────────────────────────────┐
│ Website Cost Calculator    │ │ Free Website/SEO Audit     │
│ Estimate project budget    │ │ Get improvement notes      │
│ [Hitung Estimasi]          │ │ [Minta Audit Gratis]       │
└────────────────────────────┘ └────────────────────────────┘
```

Optional third card:

```text
Automation ROI Calculator
```

Mobile:

- Cards stacked

---

## Section 10 — FAQ

Purpose:

- Remove objections
- Support SEO schema

Desktop layout:

```text
[Heading left]         [Accordion right]
```

FAQ items:

- Biaya
- Timeline
- SEO-ready
- Automation
- White-label
- Maintenance

Mobile:

- Heading top
- Accordion full width

---

## Section 11 — Final CTA

Purpose:

- Push final conversion

Desktop layout:

```text
┌──────────────────────────────────────────────┐
│ Mau website yang bukan cuma bagus?          │
│ Ceritakan kebutuhan kamu.                   │
│ [Konsultasi Gratis] [Isi Brief Project]     │
└──────────────────────────────────────────────┘
```

Style:

- Dark gradient card
- Glow border
- Subtle background grid

Mobile:

- CTA buttons full width

---

# 3. Service Page Wireframe

Used for:

- `/jasa-pembuatan-website`
- `/jasa-seo`
- `/jasa-automation`
- `/agency-subcontract`

## Section Order

1. Hero
2. Problem
3. Value proposition
4. Deliverables
5. Process
6. Related portfolio
7. Packages / starting price
8. FAQ
9. Final CTA

## Service Hero Desktop

```text
┌──────────────────────────┐ ┌──────────────────────────────┐
│ Eyebrow                  │ │ Service visual               │
│ H1                       │ │ e.g. website mockup / SEO    │
│ Subheadline              │ │ audit board / automation map │
│ [Primary] [Secondary]    │ │                              │
└──────────────────────────┘ └──────────────────────────────┘
```

## Deliverables Grid

```text
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Deliverable│ │ Deliverable│ │ Deliverable│
└────────────┘ └────────────┘ └────────────┘
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Deliverable│ │ Deliverable│ │ Deliverable│
└────────────┘ └────────────┘ └────────────┘
```

Mobile:

- 1 column

---

# 4. Portfolio Page Wireframe

## Portfolio Index

Desktop:

```text
[Hero: Work that shows design, system, and growth]
[Filter chips: All / Website / SaaS / SEO / Automation]

┌──────────────┐ ┌──────────────┐
│ Project card │ │ Project card │
└──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐
│ Project card │ │ Project card │
└──────────────┘ └──────────────┘
```

Project card:

- Screenshot
- Project name
- Category
- Short description
- Tags
- CTA

## Portfolio Detail Page

Section order:

1. Project hero
2. Overview
3. Problem
4. Solution
5. Features/stack
6. Screenshots
7. Result/impact
8. Related projects
9. CTA

Desktop hero:

```text
[Project name + summary + tags] [Large screenshot]
```

---

# 5. Brief Project Page Wireframe

Purpose:

- Collect qualified lead

Desktop layout:

```text
┌──────────────────────────────┐ ┌──────────────────────────────┐
│ Heading                      │ │ Form                         │
│ What happens next            │ │ Fields                       │
│ Trust notes                  │ │ Submit                       │
└──────────────────────────────┘ └──────────────────────────────┘
```

Form sections:

1. Contact info
2. Business info
3. Service needed
4. Budget/timeline
5. Project details

Mobile:

- Heading first
- Form below
- Sticky submit optional if long form

---

# 6. Audit Gratis Page Wireframe

Desktop:

```text
[Hero]
[What we check grid]
[Form]
[Sample audit preview]
[FAQ]
```

Audit check grid:

- Design/trust
- Mobile UX
- Speed
- SEO basic
- CTA clarity
- Lead flow

---

# 7. Website Cost Calculator Wireframe

## Calculator Steps

Step 1:

- Website type

Step 2:

- Number of pages

Step 3:

- Features needed

Step 4:

- SEO/automation add-ons

Step 5:

- Result estimate + CTA

Desktop layout:

```text
┌──────────────────────────────┐ ┌──────────────────────────────┐
│ Questions                    │ │ Live estimate card           │
│ Step controls                │ │ Package recommendation       │
└──────────────────────────────┘ └──────────────────────────────┘
```

Mobile:

- Questions first
- Sticky estimate bottom

---

# 8. Sticky CTA Plan

Desktop:

- Header CTA only
- Optional floating WhatsApp bottom right

Mobile:

```text
[WhatsApp] [Konsultasi]
```

Sticky bottom bar appears after 40% scroll.

Avoid covering form submit buttons.

---

# 9. Accessibility Notes

- One H1 per page
- Logical heading order
- Buttons have accessible labels
- Contrast passes WCAG AA
- Focus states visible
- Motion respects `prefers-reduced-motion`
- Forms have labels and error messages
- Cards clickable area clear

---

# 10. Build Priority

Priority 1:

- Header
- Footer
- Homepage hero
- Services cards
- Portfolio cards
- CTA banner
- FAQ accordion

Priority 2:

- Automation demo
- Pricing cards
- Brief form
- Audit form

Priority 3:

- Calculator
- Portfolio detail template
- Blog cards
- Sticky mobile CTA

---

# 11. Next File Needed

Next planning file:

`web-jasa-design-system.md`

Contents:

- Colors
- Typography
- Spacing
- Components
- Motion
- Icons
- Imagery
- UI tokens
