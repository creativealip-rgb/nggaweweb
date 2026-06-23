import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="container-shell grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link className="font-heading text-2xl font-black tracking-[-0.04em]" href="/">
            Nggawe<span className="text-cyan-300">Web</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Website premium, SEO-ready, dan automation buat bisnis yang mau tumbuh lebih rapi.
          </p>
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
    </footer>
  );
}
