# Design System — Nggawe Web

## 0. Design Direction

Brand feel:

- Premium SaaS agency
- Modern Indonesian digital partner
- Clean, sharp, technical, but still human
- Strong contrast
- Subtle glow
- Bento cards
- Automation node graphics
- High trust, low fluff

Main references:

- Knapsack Creative: clear messaging, service business focus, conversion sections
- Pocketknife: clean premium agency feel, simple process, human trust
- Nggawe Web: more technical, automation-forward, local SEO-ready

Design principles:

1. Clear before clever
2. Premium but not overdesigned
3. Motion supports meaning
4. CTA always visible but not annoying
5. Mobile experience must feel fast
6. Portfolio must look like proof, not decoration
7. Automation visuals become key differentiator

---

# 1. Color System

## Core Palette

### Background

```css
--color-bg: #020617;          /* slate 950 */
--color-bg-soft: #07111F;     /* deep navy */
--color-surface: #0F172A;     /* slate 900 */
--color-surface-2: #111827;   /* gray 900 */
--color-surface-light: #F8FAFC;
```

### Text

```css
--color-text: #F8FAFC;
--color-text-muted: #CBD5E1;
--color-text-subtle: #94A3B8;
--color-text-dark: #0F172A;
--color-text-dark-muted: #475569;
```

### Primary

```css
--color-primary: #3B82F6;       /* electric blue */
--color-primary-dark: #1D4ED8;
--color-primary-light: #93C5FD;
```

### Accent

```css
--color-cyan: #22D3EE;
--color-purple: #8B5CF6;
--color-lime: #A3E635;
--color-amber: #F59E0B;
```

### Border

```css
--color-border: rgba(148, 163, 184, 0.18);
--color-border-strong: rgba(226, 232, 240, 0.28);
--color-border-light: #E2E8F0;
```

### Status

```css
--color-success: #22C55E;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #38BDF8;
```

---

## Gradient System

### Primary Gradient

```css
background: linear-gradient(135deg, #3B82F6 0%, #22D3EE 50%, #8B5CF6 100%);
```

### Dark Hero Gradient

```css
background:
  radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.22), transparent 32%),
  radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.18), transparent 30%),
  linear-gradient(180deg, #020617 0%, #07111F 100%);
```

### CTA Gradient

```css
background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
```

### Card Glow

```css
box-shadow:
  0 0 0 1px rgba(148, 163, 184, 0.16),
  0 24px 80px rgba(15, 23, 42, 0.45),
  0 0 48px rgba(59, 130, 246, 0.14);
```

---

# 2. Typography

## Font Stack

Recommended:

```css
--font-heading: "Sora", "Plus Jakarta Sans", system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;
--font-mono: "Geist Mono", "SFMono-Regular", monospace;
```

Alternative:

- Heading: `Plus Jakarta Sans`
- Body: `Inter`
- Mono: `Geist Mono`

## Type Scale

### Display / Hero

```css
--text-display: clamp(3rem, 7vw, 6.5rem);
--leading-display: 0.95;
--tracking-display: -0.06em;
```

Usage:

- Homepage hero H1 only
- Big statement sections

### H1

```css
--text-h1: clamp(2.5rem, 5vw, 5rem);
--leading-h1: 1;
--tracking-h1: -0.05em;
```

### H2

```css
--text-h2: clamp(2rem, 4vw, 3.75rem);
--leading-h2: 1.05;
--tracking-h2: -0.04em;
```

### H3

```css
--text-h3: clamp(1.5rem, 2.5vw, 2.25rem);
--leading-h3: 1.15;
--tracking-h3: -0.03em;
```

### Body

```css
--text-body-lg: 1.125rem;
--text-body: 1rem;
--text-body-sm: 0.875rem;
--leading-body: 1.65;
```

### Label / Eyebrow

```css
--text-label: 0.75rem;
--tracking-label: 0.14em;
--text-transform: uppercase;
```

## Typography Rules

- H1 max width: `900px`
- Paragraph max width: `680px`
- Centered section intro max width: `760px`
- Use gradient text only for 1–2 keywords, not full headline
- Body copy never below `16px` on mobile
- Avoid long all-caps except eyebrow labels

---

# 3. Spacing System

## Tokens

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.25rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-10: 2.5rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;
--space-32: 8rem;
```

## Section Spacing

Desktop:

```css
--section-y: 7rem;
--section-y-lg: 9rem;
```

Tablet:

```css
--section-y: 5rem;
```

Mobile:

```css
--section-y: 4rem;
```

## Grid Gap

```css
--grid-gap-sm: 1rem;
--grid-gap: 1.5rem;
--grid-gap-lg: 2rem;
```

---

# 4. Radius & Shadow

## Radius

```css
--radius-sm: 0.5rem;
--radius-md: 0.75rem;
--radius-lg: 1rem;
--radius-xl: 1.5rem;
--radius-2xl: 2rem;
--radius-full: 999px;
```

Usage:

- Buttons: `radius-full` or `radius-md`
- Cards: `radius-xl`
- Hero mockups: `radius-2xl`
- Inputs: `radius-lg`

## Shadows

```css
--shadow-soft: 0 16px 40px rgba(15, 23, 42, 0.18);
--shadow-card: 0 24px 80px rgba(15, 23, 42, 0.28);
--shadow-glow-blue: 0 0 48px rgba(59, 130, 246, 0.24);
--shadow-glow-cyan: 0 0 48px rgba(34, 211, 238, 0.18);
```

---

# 5. Layout Tokens

```css
--container: 1280px;
--container-sm: 1040px;
--container-xs: 840px;
--header-height: 72px;
```

Container CSS:

```css
.container {
  width: min(100% - 40px, var(--container));
  margin-inline: auto;
}

@media (min-width: 768px) {
  .container {
    width: min(100% - 64px, var(--container));
  }
}
```

Grid patterns:

```css
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap-lg);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gap);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gap);
}
```

Mobile:

- All grids collapse to 1 column
- Portfolio grid can use carousel if needed

---

# 6. Component System

## Button

### Primary Button

Use for:

- Konsultasi Gratis
- Submit form
- Main CTA

Style:

```css
.btn-primary {
  background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
  color: #FFFFFF;
  border-radius: 999px;
  padding: 0.875rem 1.25rem;
  font-weight: 700;
  box-shadow: 0 12px 36px rgba(37, 99, 235, 0.28);
}
```

Hover:

- translateY(-1px)
- shadow stronger
- arrow moves right if has icon

### Secondary Button

Use for:

- Lihat Portfolio
- Cek Estimasi Harga

Style:

```css
.btn-secondary {
  background: rgba(248, 250, 252, 0.06);
  color: #F8FAFC;
  border: 1px solid rgba(226, 232, 240, 0.18);
  border-radius: 999px;
}
```

### Ghost Button

Use for:

- Card CTA
- Nav secondary links

Style:

```css
.btn-ghost {
  color: #93C5FD;
  background: transparent;
}
```

---

## Card

### Base Card

```css
.card {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 1.5rem;
  padding: 1.5rem;
  backdrop-filter: blur(16px);
}
```

Hover:

```css
.card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.36);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.34);
}
```

### Bento Card

Use for:

- Services
- Automation demo
- Tools

Features:

- Different heights allowed
- Icon top left
- Badge top right optional
- Strong heading
- Short paragraph

### Light Card

Use on light sections:

```css
.light-card {
  background: #FFFFFF;
  color: #0F172A;
  border: 1px solid #E2E8F0;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
}
```

---

## Badge / Chip

Use for:

- Tech tags
- Service tags
- Portfolio categories
- Trust chips

Style:

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 999px;
  padding: 0.375rem 0.75rem;
  background: rgba(59, 130, 246, 0.10);
  color: #BFDBFE;
  border: 1px solid rgba(59, 130, 246, 0.22);
  font-size: 0.8125rem;
  font-weight: 600;
}
```

---

## Section Header

Structure:

```text
[Eyebrow]
[Heading]
[Intro]
```

Variants:

1. Centered
2. Left aligned
3. Split heading + CTA

Rules:

- Eyebrow always uppercase/small
- Heading max width `800px`
- Intro max width `720px`

---

## Service Card

Anatomy:

```text
[Icon]
[Title]
[Description]
[Bullet list]
[CTA arrow]
```

Visual:

- Website: browser icon
- SEO: search/chart icon
- Automation: node/workflow icon

---

## Portfolio Card

Anatomy:

```text
[Screenshot mockup]
[Project name]
[Industry/category]
[Short description]
[Tags]
[View Project]
```

Rules:

- Screenshot aspect ratio: `16:10`
- Card image bg dark/light based project
- Tags max 4 visible
- CTA bottom aligned

---

## Pricing Card

Anatomy:

```text
[Package name]
[Best for]
[Starting price]
[Description]
[Deliverables]
[CTA]
```

Recommended package:

- Add badge: `Paling fleksibel`
- Add stronger border/glow

---

## FAQ Accordion

States:

- Closed
- Open
- Focused

Rules:

- Click entire row
- Icon rotates
- Content animates height/opacity
- Use semantic button

---

## Form Components

Fields:

- Text input
- Email input
- Phone input
- Textarea
- Select
- Radio card
- Checkbox

Style:

```css
.input {
  background: rgba(15, 23, 42, 0.74);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 1rem;
  padding: 0.875rem 1rem;
  color: #F8FAFC;
}

.input:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.14);
}
```

Validation:

- Error text red
- Success text green
- Required marker visible
- Labels always visible, not placeholder-only

---

## Automation Node

Use for:

- Hero visual
- Automation demo section
- Service automation page

Node anatomy:

```text
[Small icon] [Node label]
[Status dot]
```

Node examples:

- Form Website
- Lead Database
- n8n Workflow
- WhatsApp Notification
- Email Autoresponder
- Follow-up Task
- Report

Style:

```css
.node {
  background: rgba(15, 23, 42, 0.86);
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 1rem;
  box-shadow: 0 0 32px rgba(34, 211, 238, 0.10);
}
```

---

# 7. Icon System

Recommended icon library:

- Lucide React

Icon style:

- Stroke width: `1.75–2`
- Rounded line caps
- Size default: `20px`
- Card icons: `28px–32px`
- Hero visual icons: `18px–24px`

Core icons:

- Website: `Monitor`, `PanelTop`, `LayoutTemplate`
- SEO: `Search`, `TrendingUp`, `BarChart3`
- Automation: `Workflow`, `Zap`, `Bot`
- Trust: `ShieldCheck`, `BadgeCheck`
- Speed: `Gauge`
- Lead: `MessageCircle`, `Send`, `UserPlus`
- Portfolio: `ExternalLink`

---

# 8. Imagery & Visuals

## Portfolio Screenshots

Rules:

- Use real screenshots
- Show desktop and mobile when possible
- Put inside browser frame
- Add subtle shadow
- Avoid low-res crop

## Hero Mockup

Elements:

- Browser window
- Mini homepage UI
- Floating automation cards
- SEO score badge
- Lead notification badge

## Backgrounds

Use:

- Subtle grid
- Radial gradients
- Noise texture low opacity
- Blurred glow circles

Avoid:

- Busy patterns
- Stock photos as primary visual
- Too many gradients in one section

---

# 9. Motion System

## Motion Principles

- Fast but smooth
- Purposeful
- Low distraction
- Disable heavy animation on mobile
- Respect `prefers-reduced-motion`

## Durations

```css
--duration-fast: 150ms;
--duration-base: 240ms;
--duration-slow: 420ms;
--duration-section: 700ms;
```

## Easing

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

## Common Animations

### Section reveal

```text
opacity 0 → 1
translateY 24px → 0
```

### Card hover

```text
translateY 0 → -4px
border glow increase
```

### Button hover

```text
translateY 0 → -1px
arrow x 0 → 4px
```

### Automation line pulse

```text
stroke opacity 0.2 → 1 → 0.2
stroke dashoffset animated
```

### Hero floating card

```text
translateY -4px ↔ 4px
8s loop
```

Mobile:

- Remove float loops
- Keep tap feedback only

---

# 10. Responsive Rules

Breakpoints:

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Mobile rules:

- Single column by default
- CTAs full width when stacked
- Text left aligned except special CTA sections
- Hero visual below copy
- Cards use smaller padding
- Sticky bottom CTA appears after scroll
- Animation reduced

Desktop rules:

- Use split layouts
- More whitespace
- Larger type
- Hover interactions enabled
- Header CTA visible

---

# 11. Accessibility Rules

- Color contrast WCAG AA minimum
- Focus ring visible
- Buttons use actual `button` or `a`
- Icon-only buttons need `aria-label`
- FAQ uses semantic disclosure pattern
- Form labels always visible
- Error messages connected via `aria-describedby`
- Motion respects `prefers-reduced-motion`
- Images have useful alt text
- External links indicate new tab if used

Focus style:

```css
:focus-visible {
  outline: 2px solid #22D3EE;
  outline-offset: 3px;
}
```

---

# 12. Tailwind Token Mapping

Recommended Tailwind theme extension:

```ts
colors: {
  bg: '#020617',
  bgSoft: '#07111F',
  surface: '#0F172A',
  primary: '#3B82F6',
  cyan: '#22D3EE',
  purple: '#8B5CF6',
  lime: '#A3E635',
  text: '#F8FAFC',
  muted: '#CBD5E1',
  subtle: '#94A3B8',
},
borderRadius: {
  xl: '1.5rem',
  '2xl': '2rem',
},
boxShadow: {
  glow: '0 0 48px rgba(59, 130, 246, 0.24)',
  card: '0 24px 80px rgba(15, 23, 42, 0.28)',
},
fontFamily: {
  heading: ['Sora', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['Geist Mono', 'monospace'],
}
```

---

# 13. Section Style Variants

## Dark Hero

Use for:

- Homepage hero
- Service page hero

Features:

- Deep navy background
- Radial glow
- Subtle grid
- Bright CTA

## Light Proof Section

Use for:

- Portfolio detail
- Case studies
- Blog content

Features:

- Warm white background
- Dark text
- Clean cards

## Dark Bento Section

Use for:

- Services
- Automation demo
- Tools

Features:

- Dark cards
- Glow border
- Node/tech aesthetic

## CTA Gradient Block

Use for:

- Final CTA
- Mid-page conversion block

Features:

- Blue/cyan gradient
- Strong heading
- 2 CTA buttons

---

# 14. Page-Specific Design Notes

## Homepage

Most visual page. Use:

- Hero mockup
- Automation animation
- Bento service cards
- Portfolio screenshots
- Pricing cards

## Service Pages

More focused. Use:

- Service-specific hero visual
- Deliverables grid
- Process timeline
- Relevant portfolio cards

## Portfolio Pages

Proof-heavy. Use:

- Large screenshots
- Device frames
- Tags
- Result cards
- Problem/solution split

## Blog

Readable. Use:

- Light background preferred for article body
- Max content width `760px`
- Good typography spacing
- Table of contents for long posts

## Forms

Conversion-focused. Use:

- Split layout desktop
- Step-based form optional
- Progress indicator for long brief
- Clear success state

---

# 15. Do / Don't

## Do

- Use strong contrast
- Keep section headings direct
- Show real portfolio
- Make CTAs obvious
- Use automation visual as signature element
- Keep mobile simple and fast

## Don't

- Overuse blur/glass everywhere
- Use tiny gray text on dark background
- Animate every element
- Hide CTA below too much content
- Make pricing too vague
- Use generic stock photos as proof

---

# 16. Next File Needed

Next planning file:

`web-jasa-technical-architecture.md`

Include:

- Next.js routes
- folder structure
- CMS schema
- forms/webhook
- analytics events
- SEO implementation
- deployment checklist
