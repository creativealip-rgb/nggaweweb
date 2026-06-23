import Link from "next/link";
import { LinkButton } from "@/components/ui/button";
import { whatsappHref } from "@/content/site";

const nav = [
  { href: "/jasa-pembuatan-website", label: "Website" },
  { href: "/jasa-seo", label: "SEO" },
  { href: "/jasa-automation", label: "Automation" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link className="font-heading text-xl font-black tracking-[-0.04em]" href="/">
          Nggawe<span className="text-cyan-300">Web</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {nav.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LinkButton href={whatsappHref}>Konsultasi Gratis</LinkButton>
        </div>
        <Link className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold lg:hidden" href={whatsappHref}>
          Chat
        </Link>
      </div>
    </header>
  );
}
