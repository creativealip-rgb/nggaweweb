# Launch Checklist — Nggawe Web

## 0. Purpose

Checklist final sebelum website Nggawe Web live.

Use untuk:

- QA
- SEO validation
- Form/automation validation
- Performance check
- Deployment readiness
- Post-launch monitoring

---

# 1. Content Checklist

## Core Pages

- [ ] Homepage copy final
- [ ] Jasa overview copy final
- [ ] Jasa pembuatan website copy final
- [ ] Jasa SEO copy final
- [ ] Jasa automation copy final
- [ ] Agency subcontract copy final
- [ ] Portfolio index copy final
- [ ] 5 portfolio detail copy final
- [ ] Brief project copy final
- [ ] Audit gratis copy final
- [ ] Contact copy final
- [ ] FAQ copy final
- [ ] Privacy policy copy final

## Portfolio Content

- [ ] Cubiqlo screenshot
- [ ] Monev.app screenshot
- [ ] Contenly.app screenshot
- [ ] Ganesha Travel screenshot
- [ ] Whale Dive Centre screenshot
- [ ] Project summaries written
- [ ] Tech stack tags added
- [ ] Live URLs checked
- [ ] Result/impact notes added where available

## Blog Launch Content

Minimum launch:

- [ ] 1 blog post published
- [ ] 3 blog drafts ready
- [ ] Blog category setup
- [ ] Related posts/internal links added

Recommended launch:

- [ ] 5 starter posts published

---

# 2. SEO Checklist

## Metadata

- [ ] Unique title for every page
- [ ] Unique meta description for every page
- [ ] Canonical URL for every page
- [ ] OG title for every page
- [ ] OG description for every page
- [ ] OG image set
- [ ] Twitter card set

## Technical SEO

- [ ] `sitemap.xml` works
- [ ] `robots.txt` works
- [ ] 404 page works
- [ ] No duplicate H1
- [ ] Heading order logical
- [ ] Internal links working
- [ ] Breadcrumbs on dynamic pages
- [ ] Image alt text added
- [ ] No broken links
- [ ] No accidental `noindex`

## Schema

Validate with Rich Results Test:

- [ ] Organization
- [ ] WebSite
- [ ] ProfessionalService
- [ ] Service
- [ ] FAQPage
- [ ] BreadcrumbList
- [ ] Article
- [ ] CreativeWork
- [ ] WebApplication for tools

## Search Console

- [ ] Property added
- [ ] Domain verified
- [ ] Sitemap submitted
- [ ] Main pages requested for indexing

---

# 3. Design QA

## Desktop

- [ ] 1440px layout clean
- [ ] 1280px layout clean
- [ ] 1024px layout clean
- [ ] Header spacing good
- [ ] Hero above fold strong
- [ ] CTA contrast strong
- [ ] Portfolio cards polished
- [ ] Automation visual clear

## Tablet

- [ ] 768px layout clean
- [ ] Grid collapse correct
- [ ] Nav works
- [ ] Cards spacing good

## Mobile

- [ ] 375px layout clean
- [ ] 390px layout clean
- [ ] 430px layout clean
- [ ] CTA visible
- [ ] Mobile nav works
- [ ] Sticky CTA not blocking forms
- [ ] Text readable
- [ ] No horizontal scroll

---

# 4. Forms QA

## Brief Form

- [ ] Valid submission works
- [ ] Required errors show
- [ ] Invalid email blocked
- [ ] Invalid URL handled
- [ ] Budget captured
- [ ] Timeline captured
- [ ] Services captured
- [ ] UTM captured
- [ ] Success message shown

## Audit Form

- [ ] Valid submission works
- [ ] Website URL required
- [ ] Main concern captured
- [ ] Success message shown

## Contact Form

- [ ] Valid submission works
- [ ] Subject captured
- [ ] Message captured

## Spam Protection

- [ ] Honeypot blocks bot-like submission
- [ ] Submit timer works
- [ ] API validates server-side
- [ ] Webhook URL not exposed client-side

---

# 5. Automation QA

## n8n

- [ ] Webhook active
- [ ] Test payload received
- [ ] Lead score calculated
- [ ] Priority set
- [ ] Google Sheets/Airtable/Supabase row created
- [ ] Owner notification sent
- [ ] Confirmation email sent
- [ ] Follow-up task created
- [ ] Error path tested

## Notifications

- [ ] Hot lead notification clear
- [ ] Agency lead notification clear
- [ ] Audit request notification clear
- [ ] UTM/source included
- [ ] Contact info visible

---

# 6. Analytics QA

## Setup

- [ ] Plausible installed
- [ ] GA4 installed
- [ ] No duplicate pageviews
- [ ] Consent/privacy note acceptable

## Events

- [ ] `cta_click`
- [ ] `whatsapp_click`
- [ ] `booking_click`
- [ ] `form_start`
- [ ] `form_submit`
- [ ] `form_error`
- [ ] `calculator_start`
- [ ] `calculator_complete`
- [ ] `audit_request`
- [ ] `portfolio_click`
- [ ] `faq_open`

## UTM

- [ ] UTM stored
- [ ] Referrer stored
- [ ] Landing page stored
- [ ] Data attached to form payload

---

# 7. Performance QA

## Lighthouse Targets

- [ ] Performance 90+
- [ ] Accessibility 95+
- [ ] Best Practices 95+
- [ ] SEO 100

## Core Web Vitals

- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms

## Optimization

- [ ] Images compressed
- [ ] Screenshots WebP/AVIF
- [ ] Fonts optimized
- [ ] Heavy animations lazy/reduced
- [ ] Calculator lazy loaded
- [ ] No huge unused JS
- [ ] Third-party scripts minimal

---

# 8. Accessibility QA

- [ ] Keyboard navigation works
- [ ] Focus visible
- [ ] Color contrast passes
- [ ] Buttons have clear labels
- [ ] Icon-only buttons have aria-label
- [ ] Forms have labels
- [ ] Errors announced/associated
- [ ] Accordion accessible
- [ ] Mobile menu accessible
- [ ] Reduced motion supported

---

# 9. Security QA

- [ ] `.env` not committed
- [ ] `.env.example` safe
- [ ] API keys server-only
- [ ] n8n webhook server-only
- [ ] Input validation server-side
- [ ] Rate limit active or planned
- [ ] Security headers configured
- [ ] No sensitive console logs

Security headers:

```text
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

# 10. Deployment QA

- [ ] GitHub repo connected
- [ ] Vercel project created
- [ ] Production env vars set
- [ ] Preview deploy works
- [ ] Production deploy works
- [ ] Domain configured
- [ ] HTTPS active
- [ ] Redirect www/non-www configured
- [ ] Build command works
- [ ] No runtime errors

Commands:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

---

# 11. Post-Launch Checklist

Day 1:

- [ ] Check production forms
- [ ] Check analytics
- [ ] Check n8n logs
- [ ] Check Search Console
- [ ] Check sitemap submission
- [ ] Test WhatsApp CTA

Week 1:

- [ ] Fix real-user bugs
- [ ] Check indexing status
- [ ] Review lead quality
- [ ] Publish first blog posts
- [ ] Add missing internal links

Month 1:

- [ ] Publish 8 articles
- [ ] Improve service pages from Search Console data
- [ ] Add SEO audit mini tool
- [ ] Add more case study details
- [ ] Review conversion rate

---

# 12. Final Go/No-Go

Go live only if:

- [ ] Main pages complete
- [ ] Forms work
- [ ] Leads reach owner
- [ ] Analytics work
- [ ] SEO basics pass
- [ ] Mobile UX clean
- [ ] No critical errors

If not, delay launch or launch soft with only essential pages.
