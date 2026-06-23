"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link className="font-heading text-xl font-black tracking-[-0.04em]" href="/">
          Nggawe<span className="text-cyan-300">Web</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {nav.map((item) => (
            <Link
              className={`transition hover:text-white ${pathname === item.href ? "text-cyan-300" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LinkButton href={whatsappHref}>Konsultasi Gratis</LinkButton>
        </div>

        {/* Mobile: hamburger + chat */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold" href={whatsappHref}>
            Chat
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:text-white"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer — CSS transition, no framer-motion */}
      <div
        className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-200 ease-in-out lg:hidden"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <nav className="container-shell flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-white/5 ${
                pathname === item.href ? "text-cyan-300" : "text-slate-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 px-4">
            <LinkButton className="w-full text-center" href={whatsappHref}>
              Konsultasi Gratis
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
