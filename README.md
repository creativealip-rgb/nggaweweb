# Nggawe Web

Website jasa pembuatan website, SEO, dan automation untuk bisnis.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **CMS:** Sanity (optional)
- **Automation:** n8n webhook
- **Email:** Resend
- **Analytics:** Plausible + GA4
- **Hosting:** Vercel / Dokploy

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (format: 628xxx) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID |
| `N8N_WEBHOOK_URL` | n8n webhook endpoint |
| `RESEND_API_KEY` | Resend API key for email |

## Scripts

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Pages

| Route | Type |
|-------|------|
| `/` | Homepage |
| `/jasa-pembuatan-website` | Service page |
| `/jasa-seo` | Service page |
| `/jasa-automation` | Service page |
| `/agency-subcontract` | Service page |
| `/portfolio` | Portfolio index |
| `/portfolio/[slug]` | Portfolio detail |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog article |
| `/brief-project` | Brief form |
| `/audit-gratis` | Audit form |
| `/tools/website-cost-calculator` | Calculator tool |
| `/kontak` | Contact |
| `/tentang` | About |
| `/faq` | FAQ |
| `/privacy-policy` | Privacy Policy |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |

## Project Structure

```
src/
  app/           # Next.js App Router pages + API
  components/    # UI components, layouts, forms, calculators
  content/       # Static content data (site, services, portfolio, blog)
  lib/           # Utilities (cn, analytics)
  styles/        # Global CSS + design tokens
```

## License

Proprietary — Nggawe Web
