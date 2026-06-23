import Link from "next/link";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socialLinks = [
  { icon: InstagramIcon, href: "https://instagram.com/nggaweweb", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/nggaweweb", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/nggaweweb", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link className="font-heading text-2xl font-black tracking-[-0.04em]" href="/">
            Nggawe<span className="text-cyan-300">Web</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Website premium, SEO-ready, dan automation buat bisnis yang mau tumbuh lebih rapi.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link href="/jasa-pembuatan-website">Website Development</Link></li>
            <li><Link href="/jasa-seo">SEO Optimization</Link></li>
            <li><Link href="/jasa-automation">Business Automation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Resources</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/tools/website-cost-calculator">Cost Calculator</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link href="/brief-project">Brief Project</Link></li>
            <li><Link href="/audit-gratis">Audit Gratis</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-500 md:flex-row">
          <p>&copy; 2026 NggaweWeb. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/tentang" className="hover:text-slate-300">Tentang Kami</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
