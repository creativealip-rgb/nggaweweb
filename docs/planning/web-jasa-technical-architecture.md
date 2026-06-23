# Technical Architecture — Nggawe Web

## 0. Technical Goals

Website harus:

- Cepat
- SEO-ready
- Mudah dikembangkan
- Mudah edit konten
- Aman untuk form lead
- Terhubung ke automation
- Punya analytics event jelas
- Siap scale ke tools/calculator/client portal nanti

Core principles:

1. Static-first where possible
2. Server components by default
3. Client components only for interaction
4. SEO metadata generated per route
5. CMS for dynamic content
6. Forms validated server-side
7. Automation via webhook layer
8. Tracking event standardized

---

# 1. Recommended Stack

## Core

- Framework: `Next.js` App Router
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Animation: `Framer Motion`
- UI primitives: custom + Radix UI optional
- Icons: `lucide-react`
- Forms: `react-hook-form` + `zod`
- Email: `Resend`
- Automation: `n8n`
- Hosting: `Vercel`

## CMS

Recommended option: **Sanity**

Reason:

- Fast setup
- Good editor experience
- Flexible schemas
- Easy with Next.js
- Good for portfolio/blog/case study

Alternative:

- Payload CMS if want self-hosted/custom admin
- Directus if want SQL-first admin

## Database

MVP:

- No DB required if leads go to n8n + Google Sheets/Airtable

Scale later:

- `Supabase` for lead storage, calculator logs, client portal

## Analytics

Use both:

- Plausible: clean traffic + conversion events
- GA4: deeper marketing compatibility
- Google Search Console: SEO data

---

# 2. Route Architecture

## Public Routes

```text
/
/jasa
/jasa-pembuatan-website
/jasa-seo
/jasa-automation
/agency-subcontract
/portfolio
/portfolio/[slug]
/case-study
/case-study/[slug]
/blog
/blog/[slug]
/tools
/tools/website-cost-calculator
/tools/seo-audit
/tools/automation-roi-calculator
/audit-gratis
/brief-project
/booking-call
/tentang
/faq
/kontak
/privacy-policy
```

## API Routes

```text
/api/lead
/api/audit-request
/api/calculator-result
/api/newsletter
/api/contact
/api/revalidate
```

## Sitemap Strategy

Static routes:

- Hardcoded in sitemap generator

Dynamic routes:

- Portfolio from CMS
- Case studies from CMS
- Blog from CMS

Use:

```text
/app/sitemap.ts
/app/robots.ts
```

---

# 3. Folder Structure

```text
src/
  app/
    (site)/
      page.tsx
      jasa/
        page.tsx
      jasa-pembuatan-website/
        page.tsx
      jasa-seo/
        page.tsx
      jasa-automation/
        page.tsx
      agency-subcontract/
        page.tsx
      portfolio/
        page.tsx
        [slug]/
          page.tsx
      case-study/
        page.tsx
        [slug]/
          page.tsx
      blog/
        page.tsx
        [slug]/
          page.tsx
      tools/
        page.tsx
        website-cost-calculator/
          page.tsx
        seo-audit/
          page.tsx
        automation-roi-calculator/
          page.tsx
      audit-gratis/
        page.tsx
      brief-project/
        page.tsx
      booking-call/
        page.tsx
      tentang/
        page.tsx
      faq/
        page.tsx
      kontak/
        page.tsx
      privacy-policy/
        page.tsx
      layout.tsx
    api/
      lead/
        route.ts
      audit-request/
        route.ts
      calculator-result/
        route.ts
      newsletter/
        route.ts
      contact/
        route.ts
      revalidate/
        route.ts
    sitemap.ts
    robots.ts
    opengraph-image.tsx
    twitter-image.tsx
    not-found.tsx
    error.tsx
    global-error.tsx
  components/
    ui/
      button.tsx
      card.tsx
      badge.tsx
      input.tsx
      textarea.tsx
      select.tsx
      accordion.tsx
      container.tsx
      section-header.tsx
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-nav.tsx
      sticky-cta.tsx
    sections/
      hero-section.tsx
      problem-section.tsx
      solution-section.tsx
      services-section.tsx
      portfolio-preview.tsx
      automation-demo.tsx
      process-section.tsx
      packages-section.tsx
      faq-section.tsx
      final-cta.tsx
    forms/
      brief-form.tsx
      audit-form.tsx
      contact-form.tsx
      newsletter-form.tsx
    calculators/
      website-cost-calculator.tsx
      automation-roi-calculator.tsx
    portfolio/
      portfolio-card.tsx
      portfolio-grid.tsx
      project-hero.tsx
    blog/
      blog-card.tsx
      article-layout.tsx
      table-of-contents.tsx
    seo/
      json-ld.tsx
  content/
    site.ts
    navigation.ts
    services.ts
    packages.ts
    faqs.ts
  lib/
    analytics/
      events.ts
      plausible.ts
      ga4.ts
    cms/
      client.ts
      queries.ts
      image.ts
    seo/
      metadata.ts
      schema.ts
      sitemap.ts
    forms/
      validators.ts
      submit-lead.ts
      spam.ts
    automation/
      n8n.ts
      payloads.ts
    utils.ts
  styles/
    globals.css
```

---

# 4. Rendering Strategy

## Static Pages

Use static rendering:

- Homepage
- Service pages
- About
- FAQ
- Contact
- Tools landing
- Privacy policy

## Dynamic CMS Pages

Use static generation with revalidation:

- Blog posts
- Portfolio detail
- Case study detail

Recommended:

```ts
export const revalidate = 3600;
```

## Interactive Tools

Client components:

- Website cost calculator
- SEO audit form
- Automation ROI calculator
- Multi-step brief form

Keep interactive state isolated in component.

---

# 5. CMS Schema

## Site Settings

Fields:

```text
siteTitle
siteDescription
logo
primaryPhone
whatsappNumber
email
socialLinks
defaultOgImage
addressOptional
```

## Service

Fields:

```text
title
slug
eyebrow
headline
description
metaTitle
metaDescription
heroVisual
mainCta
secondaryCta
painPoints[]
deliverables[]
processSteps[]
faqs[]
relatedProjects[]
pricingTeaser
schemaType
```

## Portfolio

Fields:

```text
title
slug
liveUrl
clientName
industry
projectType
summary
problem
solution
features[]
techStack[]
services[]
coverImage
screenshots[]
resultMetrics[]
year
featured
sortOrder
metaTitle
metaDescription
```

Portfolio initial data:

```text
cubiqlo.com
monev.app
contenly.app
ganeshatravel.com
whaledivecentre.com
```

## Case Study

Fields:

```text
title
slug
relatedPortfolio
headline
summary
challenge
approach
solution
results[]
screenshots[]
testimonialOptional
services[]
techStack[]
metaTitle
metaDescription
```

## Blog Post

Fields:

```text
title
slug
excerpt
coverImage
author
category
tags[]
publishedAt
updatedAt
body
metaTitle
metaDescription
focusKeyword
relatedPosts[]
```

## FAQ

Fields:

```text
question
answer
category
relatedService
sortOrder
```

## Testimonial

Fields:

```text
name
role
company
quote
rating
project
avatarOptional
```

---

# 6. Content Source Strategy

## Static Content

Keep in repo:

- Navigation
- Packages
- Global FAQs default
- Service summary
- CTA copy

Files:

```text
src/content/navigation.ts
src/content/packages.ts
src/content/services.ts
src/content/faqs.ts
src/content/site.ts
```

## CMS Content

Keep in Sanity:

- Blog posts
- Portfolio
- Case studies
- Testimonials
- Long-form service content optional

Reason:

- Static content easier for build
- CMS content easier for updates

---

# 7. Forms Architecture

## Forms

Forms needed:

1. Brief project form
2. Audit gratis form
3. Contact form
4. Newsletter form
5. Calculator result lead capture

## Validation

Use `zod` schemas:

```ts
briefFormSchema
auditFormSchema
contactFormSchema
newsletterSchema
calculatorLeadSchema
```

Common fields:

```text
name
email
phone
company
website
serviceNeeded
budgetRange
timeline
message
sourcePage
utmSource
utmMedium
utmCampaign
```

## API Flow

```text
User submits form
→ Client validates with Zod
→ POST /api/lead or relevant route
→ Server validates with Zod again
→ Spam checks
→ Send payload to n8n webhook
→ Send confirmation email via Resend
→ Return success response
→ Track event
```

## Spam Protection

MVP:

- Honeypot field
- Minimum submit time
- Basic rate limit by IP
- Server-side validation

Optional later:

- Turnstile
- reCAPTCHA Enterprise

## Rate Limit

Recommended:

- 5 submissions per IP per 10 minutes
- Use Upstash Redis if needed

---

# 8. n8n Automation Spec

## Lead Webhook Payload

```json
{
  "type": "brief_project",
  "submittedAt": "2026-01-01T00:00:00.000Z",
  "sourcePage": "/brief-project",
  "utm": {
    "source": "google",
    "medium": "organic",
    "campaign": ""
  },
  "lead": {
    "name": "",
    "email": "",
    "phone": "",
    "company": "",
    "website": "",
    "serviceNeeded": "website_seo_automation",
    "budgetRange": "8_5m_15m",
    "timeline": "this_month",
    "message": ""
  },
  "qualification": {
    "leadType": "growth",
    "priority": "high",
    "recommendedPackage": "Website Growth"
  }
}
```

## n8n Workflow

Steps:

1. Webhook receives payload
2. Validate required fields
3. Normalize phone/email
4. Score lead
5. Save to Google Sheets/Airtable/Supabase
6. Send Telegram notification
7. Send email confirmation via Resend or SMTP
8. Create follow-up task
9. Optional: send WhatsApp notification
10. Log result

## Lead Scoring

High priority:

- Budget Rp8.5 juta+
- Timeline this month/urgent
- Needs website + SEO/automation
- Has existing business/website

Medium:

- Budget Rp3.5–8.5 juta
- Timeline flexible

Low:

- Budget below starter
- Unclear project

---

# 9. Analytics Plan

## Event Naming

Use snake_case.

Events:

```text
cta_click
whatsapp_click
booking_click
form_start
form_submit
form_error
calculator_start
calculator_complete
audit_request
portfolio_click
service_page_view
pricing_view
faq_open
blog_read
external_link_click
```

## Event Properties

```ts
type AnalyticsEventProps = {
  page?: string;
  section?: string;
  cta_label?: string;
  service?: string;
  lead_type?: string;
  budget_range?: string;
  project_type?: string;
  portfolio_slug?: string;
  post_slug?: string;
};
```

## CTA Tracking

Every CTA component receives:

```ts
trackingEvent="cta_click"
trackingProps={{ section: 'hero', cta_label: 'Konsultasi Gratis' }}
```

## UTM Capture

Store in localStorage/sessionStorage:

```text
utm_source
utm_medium
utm_campaign
utm_term
utm_content
referrer
landing_page
```

Attach to all form submissions.

---

# 10. SEO Implementation

## Metadata

Use helper:

```ts
createMetadata({
  title,
  description,
  path,
  image,
  noIndex,
})
```

Required per page:

- title
- description
- canonical
- OG title
- OG description
- OG image
- Twitter card

## Structured Data

Implement JSON-LD:

Homepage:

- `Organization`
- `WebSite`
- `ProfessionalService`

Service pages:

- `Service`
- `FAQPage`
- `BreadcrumbList`

Blog posts:

- `Article`
- `BreadcrumbList`

Portfolio/case study:

- `CreativeWork`
- `BreadcrumbList`

FAQ page:

- `FAQPage`

## Technical SEO Checklist

- `sitemap.ts`
- `robots.ts`
- Canonical URLs
- One H1 per page
- Heading hierarchy
- Image alt text
- OpenGraph images
- Fast LCP image
- Lazy load below-fold images
- Internal links
- 404 page
- Redirects if needed

## Local SEO

Add optional local schema if address/service area decided:

- Indonesia
- Jakarta
- Bandung
- Surabaya
- Bali
- Jogja
- Semarang
- Tangerang
- Bekasi
- Depok

For now, use service area text without fake physical address.

---

# 11. Performance Plan

Targets:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100
- LCP: < 2.5s
- CLS: < 0.1
- INP: < 200ms

Implementation:

- Use `next/image`
- Preload hero image/mockup if needed
- Optimize fonts with `next/font`
- Server components by default
- Split client components
- Lazy load heavy calculators
- Avoid huge animation bundles
- Compress screenshots
- Use WebP/AVIF
- Avoid third-party script bloat

---

# 12. Security Plan

## Forms

- Server-side validation
- Rate limit
- Honeypot
- Sanitize text fields
- Never expose n8n webhook URL client-side
- Store API keys in env only

## Headers

Set security headers:

```text
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Optional CSP later.

## Env Handling

Never commit `.env`.

Use:

```text
.env.local
.env.example
```

---

# 13. Environment Variables

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_WHATSAPP_NUMBER=

SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=

N8N_LEAD_WEBHOOK_URL=
N8N_AUDIT_WEBHOOK_URL=
N8N_CONTACT_WEBHOOK_URL=

RESEND_API_KEY=
RESEND_FROM_EMAIL=
OWNER_NOTIFICATION_EMAIL=

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Notes:

- `NEXT_PUBLIC_*` boleh muncul di client.
- Semua token/API key lain harus server-only.
- Jangan expose webhook n8n di client.

# 14. Deployment Plan

## Platform

Recommended: Vercel

Reason:

- Next.js first-class support
- Easy env management
- Preview deployments
- Edge-ready
- Analytics optional

## Branching

```text
main        production
staging     preview/staging
feature/*   feature work
```

## Deployment Flow

1. Push to GitHub
2. Vercel preview deploy
3. Test preview
4. Merge to main
5. Production deploy
6. Submit sitemap to Search Console

## Build Commands

```bash
pnpm install
pnpm build
pnpm lint
pnpm typecheck
```

Recommended package manager:

```text
pnpm
```

---

# 15. Testing Checklist

## Before Deploy

Run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Manual QA:

- All pages load
- Navigation works
- Mobile menu works
- Forms submit
- n8n receives data
- Email confirmation sends
- WhatsApp links correct
- Analytics events fire
- Sitemap works
- Robots works
- OG image works
- 404 works
- No console errors

## Browser QA

Test:

- Chrome
- Safari
- Firefox
- Mobile Chrome
- Mobile Safari

## Device QA

Widths:

```text
375px
390px
430px
768px
1024px
1280px
1440px
```

---

# 16. MVP Build Order

1. Project setup
2. Tailwind/design tokens
3. Layout: header/footer/container
4. UI components
5. Homepage sections
6. Service pages
7. Portfolio index/detail
8. Brief/audit forms
9. API routes + n8n webhook
10. SEO metadata/schema
11. Analytics events
12. Calculator basic
13. Blog basic
14. Performance pass
15. Launch QA

---

# 17. Future Expansion

Phase 2:

- SEO audit mini tool
- Automation ROI calculator
- Proposal generator
- Client portal
- Rank tracker
- Case study builder
- Newsletter system
- Local landing pages by city

Phase 3:

- Dashboard for leads
- CRM-lite
- Maintenance client reports
- Automated SEO report
- Payment/invoice integration

---

# 18. Files to Create During Build

```text
.env.example
README.md
src/content/site.ts
src/content/navigation.ts
src/content/services.ts
src/content/packages.ts
src/lib/seo/metadata.ts
src/lib/seo/schema.ts
src/lib/analytics/events.ts
src/lib/forms/validators.ts
src/lib/automation/n8n.ts
```

---

# 19. Next Planning File

Next file recommended:

`web-jasa-build-tasks.md`

Purpose:

- Convert all planning into actual implementation task checklist
- Order tasks by phase
- Include acceptance criteria
- Make build easier to execute
