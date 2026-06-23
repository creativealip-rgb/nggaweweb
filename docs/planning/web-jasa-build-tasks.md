# Build Tasks — Nggawe Web

## 0. Purpose

File ini jadi checklist eksekusi build website Nggawe Web dari planning ke implementasi.

Related docs:

- `web-jasa-master-plan.md`
- `web-jasa-copywriting.md`
- `web-jasa-wireframe.md`
- `web-jasa-design-system.md`
- `web-jasa-technical-architecture.md`

Goal MVP:

- Website live
- Homepage premium
- Service pages lengkap
- Portfolio real projects
- Brief/audit forms
- Basic calculator
- SEO technical setup
- Analytics tracking
- n8n lead automation

---

# 1. Phase 0 — Project Setup

## Tasks

- [ ] Create Next.js project with TypeScript
- [ ] Install Tailwind CSS
- [ ] Install core dependencies
- [ ] Setup ESLint/Prettier
- [ ] Setup absolute imports
- [ ] Setup folder structure
- [ ] Create `.env.example`
- [ ] Create initial `README.md`
- [ ] Setup Git repository
- [ ] Connect GitHub repository

## Dependencies

Recommended packages:

```bash
pnpm add framer-motion lucide-react zod react-hook-form @hookform/resolvers clsx tailwind-merge
pnpm add next-sanity @sanity/image-url
pnpm add resend
pnpm add -D prettier eslint-config-prettier
```

Optional later:

```bash
pnpm add @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

## Acceptance Criteria

- [ ] `pnpm dev` runs without error
- [ ] `pnpm build` passes
- [ ] TypeScript works
- [ ] Tailwind classes work
- [ ] Project structure matches architecture doc

---

# 2. Phase 1 — Design Tokens & Base UI

## Tasks

- [ ] Add fonts via `next/font`
- [ ] Configure Tailwind theme colors
- [ ] Configure typography scale
- [ ] Configure radius/shadow tokens
- [ ] Create global CSS variables
- [ ] Create base layout styles
- [ ] Create `cn()` utility

## Files

```text
src/app/globals.css
src/lib/utils.ts
tailwind.config.ts
src/app/(site)/layout.tsx
```

## UI Components

Create:

- [ ] `Button`
- [ ] `Card`
- [ ] `Badge`
- [ ] `Container`
- [ ] `SectionHeader`
- [ ] `Input`
- [ ] `Textarea`
- [ ] `Select`
- [ ] `Accordion`

## Acceptance Criteria

- [ ] Primary/secondary/ghost buttons render correctly
- [ ] Cards match dark premium style
- [ ] Focus states visible
- [ ] Components responsive
- [ ] No duplicate styling patterns

---

# 3. Phase 2 — Layout System

## Tasks

- [ ] Build site header
- [ ] Build desktop nav
- [ ] Build services dropdown
- [ ] Build mobile nav
- [ ] Build footer
- [ ] Build sticky mobile CTA
- [ ] Add global CTA links

## Files

```text
src/components/layout/site-header.tsx
src/components/layout/mobile-nav.tsx
src/components/layout/site-footer.tsx
src/components/layout/sticky-cta.tsx
src/content/navigation.ts
src/content/site.ts
```

## Header Requirements

Desktop nav:

```text
Logo | Services | Portfolio | Blog | Tools | Contact | Konsultasi Gratis
```

Mobile:

```text
Logo | Menu
```

## Footer Requirements

Columns:

- Brand
- Services
- Resources
- Company
- Contact

## Acceptance Criteria

- [ ] Header sticky works
- [ ] Mobile menu works
- [ ] Dropdown accessible
- [ ] CTA visible desktop
- [ ] Sticky mobile CTA appears after scroll
- [ ] Footer links correct

---

# 4. Phase 3 — Static Content Data

## Tasks

- [ ] Create site config
- [ ] Create navigation config
- [ ] Create services config
- [ ] Create packages config
- [ ] Create FAQ config
- [ ] Create portfolio seed config if CMS not ready

## Files

```text
src/content/site.ts
src/content/navigation.ts
src/content/services.ts
src/content/packages.ts
src/content/faqs.ts
src/content/portfolio.ts
```

## Acceptance Criteria

- [ ] All repeated content comes from config
- [ ] CTA labels centralized
- [ ] WhatsApp number centralized
- [ ] Package pricing easy to change

---

# 5. Phase 4 — Homepage Sections

## Tasks

Build sections in order:

- [ ] Hero section
- [ ] Pain points section
- [ ] Solution/system section
- [ ] Services overview
- [ ] Portfolio preview
- [ ] Automation demo
- [ ] Process section
- [ ] Packages teaser
- [ ] Tools/lead magnet section
- [ ] FAQ section
- [ ] Final CTA

## Files

```text
src/app/(site)/page.tsx
src/components/sections/hero-section.tsx
src/components/sections/problem-section.tsx
src/components/sections/solution-section.tsx
src/components/sections/services-section.tsx
src/components/sections/portfolio-preview.tsx
src/components/sections/automation-demo.tsx
src/components/sections/process-section.tsx
src/components/sections/packages-section.tsx
src/components/sections/tools-section.tsx
src/components/sections/faq-section.tsx
src/components/sections/final-cta.tsx
```

## Hero Requirements

- [ ] Eyebrow
- [ ] H1
- [ ] Subheadline
- [ ] Primary CTA
- [ ] Secondary CTA
- [ ] Browser mockup
- [ ] Automation floating cards
- [ ] Proof chips

## Acceptance Criteria

- [ ] Above fold value clear under 5 seconds
- [ ] CTA visible without scroll on mobile
- [ ] Hero visual loads fast
- [ ] Sections follow wireframe
- [ ] No layout shift
- [ ] Mobile layout clean

---

# 6. Phase 5 — Service Pages

## Pages

- [ ] `/jasa-pembuatan-website`
- [ ] `/jasa-seo`
- [ ] `/jasa-automation`
- [ ] `/agency-subcontract`
- [ ] `/jasa` overview page

## Shared Components

- [ ] Service hero
- [ ] Service problem section
- [ ] Deliverables grid
- [ ] Service process
- [ ] Related portfolio
- [ ] Service FAQ
- [ ] Service CTA

## Files

```text
src/app/(site)/jasa/page.tsx
src/app/(site)/jasa-pembuatan-website/page.tsx
src/app/(site)/jasa-seo/page.tsx
src/app/(site)/jasa-automation/page.tsx
src/app/(site)/agency-subcontract/page.tsx
src/components/sections/service-hero.tsx
src/components/sections/deliverables-grid.tsx
src/components/sections/service-process.tsx
```

## Acceptance Criteria

- [ ] Each service has unique H1
- [ ] Each service has unique metadata
- [ ] Each service has clear CTA
- [ ] FAQ included
- [ ] Internal links between services exist
- [ ] Related portfolio shown

---

# 7. Phase 6 — Portfolio System

## Tasks

- [ ] Build portfolio index page
- [ ] Build portfolio card
- [ ] Build portfolio filter chips
- [ ] Build portfolio detail template
- [ ] Add 5 real projects
- [ ] Add screenshots
- [ ] Add project tags
- [ ] Add live links

## Initial Projects

- [ ] Cubiqlo — `cubiqlo.com`
- [ ] Monev.app — `monev.app`
- [ ] Contenly.app — `contenly.app`
- [ ] Ganesha Travel — `ganeshatravel.com`
- [ ] Whale Dive Centre — `whaledivecentre.com`

## Files

```text
src/app/(site)/portfolio/page.tsx
src/app/(site)/portfolio/[slug]/page.tsx
src/components/portfolio/portfolio-card.tsx
src/components/portfolio/portfolio-grid.tsx
src/components/portfolio/project-hero.tsx
src/content/portfolio.ts
```

## Portfolio Detail Sections

- Hero
- Overview
- Problem
- Solution
- Features
- Tech stack
- Screenshots
- Result/impact
- Related projects
- CTA

## Acceptance Criteria

- [ ] Portfolio index shows all 5 projects
- [ ] Each project detail page works
- [ ] Live links open correctly
- [ ] Images optimized
- [ ] Tags/filter work
- [ ] Portfolio supports SEO metadata

---

# 8. Phase 7 — Forms & API

## Forms

- [ ] Brief project form
- [ ] Audit gratis form
- [ ] Contact form
- [ ] Newsletter form optional
- [ ] Calculator lead capture optional

## API Routes

- [ ] `/api/lead`
- [ ] `/api/audit-request`
- [ ] `/api/contact`
- [ ] `/api/newsletter`
- [ ] `/api/calculator-result`

## Validation

- [ ] Create Zod schemas
- [ ] Client validation
- [ ] Server validation
- [ ] Error handling
- [ ] Success states

## Spam Protection

- [ ] Honeypot field
- [ ] Minimum submit time
- [ ] Basic rate limit
- [ ] Sanitize text input

## Files

```text
src/components/forms/brief-form.tsx
src/components/forms/audit-form.tsx
src/components/forms/contact-form.tsx
src/lib/forms/validators.ts
src/lib/forms/spam.ts
src/lib/forms/submit-lead.ts
src/app/api/lead/route.ts
src/app/api/audit-request/route.ts
src/app/api/contact/route.ts
```

## Acceptance Criteria

- [ ] Valid submissions succeed
- [ ] Invalid submissions show clear errors
- [ ] Honeypot blocks spam
- [ ] API never exposes n8n URL
- [ ] Success state shown
- [ ] Form event tracked

---

# 9. Phase 8 — n8n Automation

## Tasks

- [ ] Create n8n webhook workflow
- [ ] Send test payload from local
- [ ] Save lead to Google Sheets/Airtable/Supabase
- [ ] Send Telegram notification
- [ ] Send email autoresponder
- [ ] Create follow-up task
- [ ] Add failure handling
- [ ] Add workflow logging

## Workflow Steps

```text
Webhook
→ Validate payload
→ Normalize fields
→ Score lead
→ Save lead
→ Notify owner
→ Send confirmation email
→ Create follow-up task
→ Log result
```

## Acceptance Criteria

- [ ] Lead arrives in storage
- [ ] Notification received
- [ ] Email sent
- [ ] Failed workflow visible/logged
- [ ] Duplicate spam minimized

---

# 10. Phase 9 — Website Cost Calculator

## Tasks

- [ ] Build calculator UI
- [ ] Add project type step
- [ ] Add page count step
- [ ] Add feature selection
- [ ] Add SEO/automation add-ons
- [ ] Show estimate range
- [ ] Recommend package
- [ ] Add CTA to brief form
- [ ] Track completion event

## Files

```text
src/app/(site)/tools/website-cost-calculator/page.tsx
src/components/calculators/website-cost-calculator.tsx
src/lib/calculators/website-cost.ts
```

## Pricing Logic Baseline

```text
Starter base: 3.5m
Growth base: 8.5m
Full system base: 15m
Extra page: 500k–1m
CMS: +2m
Blog: +1.5m
SEO setup: +2m–5m
Automation: +3m–10m
```

## Acceptance Criteria

- [ ] Calculator works on mobile
- [ ] Estimate range feels realistic
- [ ] Package recommendation shown
- [ ] CTA routes to brief with context
- [ ] Event tracked

---

# 11. Phase 10 — Blog System

## Tasks

- [ ] Build blog index
- [ ] Build blog detail template
- [ ] Build blog card
- [ ] Add category/tags
- [ ] Add table of contents
- [ ] Add related posts
- [ ] Add 5 starter posts or placeholders

## Files

```text
src/app/(site)/blog/page.tsx
src/app/(site)/blog/[slug]/page.tsx
src/components/blog/blog-card.tsx
src/components/blog/article-layout.tsx
src/components/blog/table-of-contents.tsx
```

## Starter Posts

- [ ] Berapa Biaya Pembuatan Website Profesional di Indonesia?
- [ ] Kenapa Website Tidak Muncul di Google?
- [ ] Checklist Website SEO Friendly untuk Bisnis
- [ ] Contoh Automation untuk UMKM
- [ ] Website vs Landing Page: Mana yang Cocok?

## Acceptance Criteria

- [ ] Blog index works
- [ ] Blog detail readable
- [ ] Metadata unique
- [ ] Article schema present
- [ ] Internal links included

---

# 12. Phase 11 — SEO Implementation

## Tasks

- [ ] Create metadata helper
- [ ] Add metadata to all pages
- [ ] Add OG image generation
- [ ] Add sitemap
- [ ] Add robots
- [ ] Add canonical URLs
- [ ] Add JSON-LD schema
- [ ] Add breadcrumbs
- [ ] Add internal links
- [ ] Add 404 page
- [ ] Add not-found handling for dynamic routes

## Files

```text
src/lib/seo/metadata.ts
src/lib/seo/schema.ts
src/components/seo/json-ld.tsx
src/app/sitemap.ts
src/app/robots.ts
src/app/opengraph-image.tsx
src/app/not-found.tsx
```

## Schema Required

- [ ] Organization
- [ ] WebSite
- [ ] ProfessionalService
- [ ] Service
- [ ] FAQPage
- [ ] BreadcrumbList
- [ ] Article
- [ ] CreativeWork

## Acceptance Criteria

- [ ] Metadata valid
- [ ] Sitemap returns correct URLs
- [ ] Robots accessible
- [ ] JSON-LD valid in Rich Results Test
- [ ] No duplicate H1
- [ ] No missing canonical

---

# 13. Phase 12 — Analytics & Tracking

## Tasks

- [ ] Add Plausible script
- [ ] Add GA4 script
- [ ] Create analytics helper
- [ ] Track CTA clicks
- [ ] Track form start/submit/error
- [ ] Track WhatsApp clicks
- [ ] Track calculator start/complete
- [ ] Track portfolio clicks
- [ ] Track FAQ opens
- [ ] Capture UTM params

## Files

```text
src/lib/analytics/events.ts
src/lib/analytics/plausible.ts
src/lib/analytics/ga4.ts
src/components/analytics/analytics-provider.tsx
```

## Acceptance Criteria

- [ ] Events visible in Plausible/GA4
- [ ] UTM data attached to form submissions
- [ ] No tracking errors in console
- [ ] Events use standardized names

---

# 14. Phase 13 — Performance & Accessibility Pass

## Performance Tasks

- [ ] Optimize images
- [ ] Use `next/image`
- [ ] Compress screenshots
- [ ] Lazy load below-fold visuals
- [ ] Reduce client JS
- [ ] Split calculator code
- [ ] Check font loading
- [ ] Remove unused packages

## Accessibility Tasks

- [ ] Check heading hierarchy
- [ ] Check contrast
- [ ] Add alt text
- [ ] Check keyboard nav
- [ ] Check focus styles
- [ ] Check form labels
- [ ] Check reduced motion

## Acceptance Criteria

Target Lighthouse:

- [ ] Performance 90+
- [ ] Accessibility 95+
- [ ] Best Practices 95+
- [ ] SEO 100

Core Web Vitals:

- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms

---

# 15. Phase 14 — Deployment

## Tasks

- [ ] Create GitHub repo
- [ ] Connect Vercel
- [ ] Add env vars
- [ ] Configure domain
- [ ] Enable HTTPS
- [ ] Deploy preview
- [ ] Run QA on preview
- [ ] Deploy production
- [ ] Submit sitemap to Search Console
- [ ] Add property to GA4/Plausible

## Env Vars

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

## Acceptance Criteria

- [ ] Production site live
- [ ] Domain points correctly
- [ ] SSL active
- [ ] Forms work in production
- [ ] Analytics works in production
- [ ] Sitemap submitted
- [ ] Search Console verified

---

# 16. Phase 15 — Launch QA Checklist

## Page QA

- [ ] Homepage
- [ ] Jasa overview
- [ ] Jasa website
- [ ] Jasa SEO
- [ ] Jasa automation
- [ ] Agency subcontract
- [ ] Portfolio index
- [ ] 5 portfolio details
- [ ] Blog index
- [ ] Blog detail
- [ ] Brief project
- [ ] Audit gratis
- [ ] Calculator
- [ ] Contact
- [ ] FAQ
- [ ] Privacy policy
- [ ] 404 page

## Interaction QA

- [ ] Header nav
- [ ] Mobile nav
- [ ] Dropdown
- [ ] CTA buttons
- [ ] WhatsApp links
- [ ] Forms
- [ ] Calculator
- [ ] FAQ accordion
- [ ] Portfolio filters
- [ ] External links

## Device QA

- [ ] 375px
- [ ] 390px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] 1440px

## Browser QA

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Chrome
- [ ] Mobile Safari

---

# 17. Post-Launch Tasks

Week 1:

- [ ] Check Search Console indexing
- [ ] Check form submissions
- [ ] Check analytics events
- [ ] Fix real-user bugs
- [ ] Submit main pages manually for indexing

Month 1:

- [ ] Publish 8 articles
- [ ] Add more portfolio screenshots
- [ ] Improve service page internal links
- [ ] Add SEO audit mini tool
- [ ] Review leads quality

Month 2:

- [ ] Publish 10 articles
- [ ] Add local SEO pages if needed
- [ ] Add automation ROI calculator
- [ ] Add case study depth

Month 3:

- [ ] Publish 12 articles
- [ ] Optimize pages based on Search Console
- [ ] Add proposal generator planning
- [ ] Improve conversion based on analytics

---

# 18. Definition of Done — MVP

MVP considered done when:

- [ ] Website live on production domain
- [ ] Homepage complete and responsive
- [ ] All service pages complete
- [ ] Portfolio has 5 projects
- [ ] Brief/audit forms work
- [ ] n8n automation receives leads
- [ ] WhatsApp CTA works
- [ ] Analytics events working
- [ ] Sitemap/robots working
- [ ] Search Console verified
- [ ] Lighthouse targets mostly reached
- [ ] No critical console errors
- [ ] Mobile UX clean

---

# 19. Build Priority If Time Limited

If need fastest launch, do this first:

1. Homepage
2. Jasa website page
3. Jasa SEO page
4. Jasa automation page
5. Portfolio index with 5 projects
6. Brief form
7. WhatsApp CTA
8. SEO metadata/sitemap
9. Analytics
10. Deploy

Then add:

- Calculator
- Blog
- Case studies
- Advanced automation
- SEO audit tool
