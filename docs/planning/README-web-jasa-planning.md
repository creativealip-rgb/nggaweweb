# Nggawe Web — Planning Docs Index

## Overview

Planning suite untuk website **Nggawe Web**: jasa website, SEO, dan automation.

Goal:

- Build premium service website
- Target lokal Indonesia dulu
- Showcase portfolio real
- Capture qualified leads
- Connect forms to automation
- Launch SEO-ready

---

# 1. Docs List

## 1. Master Plan

File:

```text
web-jasa-master-plan.md
```

Isi:

- Brand direction
- ICP
- Offer/package
- Proof strategy
- Conversion strategy
- SEO local plan
- Sitemap final
- UX direction
- Technical direction
- MVP scope
- Roadmap

Use when:

- Need understand big picture
- Need align strategy before build

---

## 2. Original Plan

File:

```text
web-jasa-plan.md
```

Isi:

- Plan awal
- Tujuan utama
- Sitemap awal
- Feature ideas
- SEO plan awal
- Roadmap awal

Use when:

- Need compare original scope vs final master plan

---

## 3. Copywriting Plan

File:

```text
web-jasa-copywriting.md
```

Isi:

- Homepage copy
- Service page copy
- CTA copy
- FAQ copy
- Brief/audit page copy
- Global microcopy

Use when:

- Writing page sections
- Building content components

---

## 4. Wireframe Plan

File:

```text
web-jasa-wireframe.md
```

Isi:

- Homepage desktop/mobile wireframe
- Service page layout
- Portfolio layout
- Brief/audit form layout
- Calculator layout
- Sticky CTA plan
- Accessibility notes

Use when:

- Building layout
- Translating copy into sections

---

## 5. Design System

File:

```text
web-jasa-design-system.md
```

Isi:

- Color tokens
- Typography
- Spacing
- Components
- Buttons
- Cards
- Forms
- Icons
- Motion
- Responsive rules
- Accessibility rules

Use when:

- Setting Tailwind config
- Creating UI components
- Keeping visual consistency

---

## 6. Technical Architecture

File:

```text
web-jasa-technical-architecture.md
```

Isi:

- Recommended stack
- Route architecture
- Folder structure
- CMS schema
- Forms architecture
- n8n automation
- Analytics events
- SEO implementation
- Performance/security/deployment plan

Use when:

- Setting up project
- Building app architecture
- Integrating CMS/forms/analytics

---

## 7. Build Tasks

File:

```text
web-jasa-build-tasks.md
```

Isi:

- Phase-by-phase checklist
- Acceptance criteria
- File mapping
- MVP definition of done
- Fast launch priority

Use when:

- Executing build
- Tracking progress

---

## 8. Content Map

File:

```text
web-jasa-content-map.md
```

Isi:

- URL map
- Page goal
- Target keyword
- Search intent
- H1
- Meta title
- Meta description
- CTA
- Internal links
- Schema
- Blog map

Use when:

- Creating routes
- Adding SEO metadata
- Internal linking

---

## 9. Form & Automation Spec

File:

```text
web-jasa-form-and-automation-spec.md
```

Isi:

- Form fields
- Validation rules
- Lead scoring
- n8n workflow
- CRM columns
- Email templates
- WhatsApp templates
- Notification templates

Use when:

- Building forms/API
- Setting n8n workflow
- Creating lead ops system

---

## 10. Launch Checklist

File:

```text
web-jasa-launch-checklist.md
```

Isi:

- Content QA
- SEO QA
- Design QA
- Forms QA
- Automation QA
- Analytics QA
- Performance QA
- Accessibility QA
- Security QA
- Deployment QA
- Post-launch tasks

Use when:

- Before production launch
- Final QA

---

# 2. Recommended Build Order

1. Read `web-jasa-master-plan.md`
2. Use `web-jasa-content-map.md` for routes/SEO
3. Use `web-jasa-design-system.md` for tokens/components
4. Use `web-jasa-wireframe.md` for layout
5. Use `web-jasa-copywriting.md` for section copy
6. Use `web-jasa-technical-architecture.md` for setup
7. Execute from `web-jasa-build-tasks.md`
8. Implement forms using `web-jasa-form-and-automation-spec.md`
9. Launch using `web-jasa-launch-checklist.md`

---

# 3. MVP Scope

Build first:

- Homepage
- `/jasa`
- `/jasa-pembuatan-website`
- `/jasa-seo`
- `/jasa-automation`
- `/agency-subcontract`
- `/portfolio`
- 5 portfolio detail pages
- `/brief-project`
- `/audit-gratis`
- `/tools/website-cost-calculator`
- `/blog`
- 1–5 blog posts
- SEO metadata/sitemap/robots/schema
- Forms + n8n automation
- Analytics tracking

---

# 4. Key Decisions

Brand:

```text
Nggawe Web
```

Positioning:

```text
Website premium, SEO-ready, dan automation buat bisnis yang mau tumbuh lebih rapi.
```

Target:

- Service business
- Startup
- Agency subcontract
- UMKM

Portfolio:

- `cubiqlo.com`
- `monev.app`
- `contenly.app`
- `ganeshatravel.com`
- `whaledivecentre.com`

Stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- React Hook Form + Zod
- n8n
- Resend
- Vercel
- Plausible + GA4

---

# 5. Final Notes

Planning complete enough to start build.

Before coding, decide:

- Domain final
- Logo direction
- Exact WhatsApp number
- CMS choice final: Sanity or Payload
- Lead storage: Google Sheets, Airtable, or Supabase
- Booking tool: Calendly, Cal.com, or custom
