import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { portfolioItems } from "@/content/portfolio";
import { whatsappHref } from "@/content/site";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio Website dan Digital Product — Nggawe Web",
  description:
    "Lihat portfolio Nggawe Web: website bisnis, SaaS, platform digital, travel website, tourism website, dan project automation-ready.",
  openGraph: {
    title: "Portfolio Website dan Digital Product — Nggawe Web",
    description:
      "Lihat portfolio Nggawe Web: website bisnis, SaaS, platform digital, travel website, tourism website, dan project automation-ready.",
  },
};

const categories = ["Semua", "Website", "Web Application", "SEO", "Automation"];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Portfolio</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
              Project yang menunjukkan design, sistem, dan problem solving.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Dari website bisnis service sampai platform aplikasi, setiap project dibuat dengan fokus pada tampilan, performa, struktur, dan kebutuhan bisnis.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell space-y-10">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    i === 0
                      ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200"
                      : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <Link href={`/portfolio/${item.slug}`} key={item.slug}>
                  <Card className="group flex h-full flex-col">
                    <div className="mb-5 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10">
                      <img src={item.screenshot} alt={`${item.name} screenshot`} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{item.projectType}</Badge>
                      <Badge className="border-purple-400/20 bg-purple-400/10 text-purple-100">{item.industry}</Badge>
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-bold tracking-[-0.03em] group-hover:text-cyan-200 transition">
                      {item.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{item.summary}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      Lihat detail <ArrowRight size={14} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-8 md:p-14">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] md:text-5xl">
                Mau buat project serupa?
              </h2>
              <p className="text-lg leading-8 text-blue-50">
                Ceritakan kebutuhan project kamu. Kami bantu rekomendasi solusi dan estimasi yang sesuai.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton className="bg-white text-blue-700 shadow-none hover:bg-blue-50" href={whatsappHref}>
                  Konsultasi Gratis
                </LinkButton>
                <LinkButton href="/brief-project" variant="secondary">
                  Isi Brief Project
                </LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
