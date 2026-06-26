import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { portfolioItems } from "@/content/portfolio";
import { whatsappHref } from "@/content/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio Website dan Digital Product — Nggawe Web",
  description:
    "Lihat portfolio Nggawe Web: website bisnis, SaaS, platform digital, travel website, tourism website, dan project automation-ready.",
  alternates: { canonical: "/portfolio" },
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
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Breadcrumbs items={[{ label: "Beranda", href: "/" }, { label: "Portfolio" }]} />
            <Badge>Portfolio</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-slate-900 md:text-6xl">
              Project yang menunjukkan design, sistem, dan problem solving.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
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
                      ? "border-blue-300 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-400 hover:border-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <h2 className="font-heading text-3xl font-black tracking-[-0.03em] text-slate-900 md:text-4xl">Project Pilihan</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <Link href={`/portfolio/${item.slug}`} key={item.slug}>
                  <Card className="group flex h-full flex-col">
                    <div className="relative mb-5 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10">
                      <Image src={item.screenshot} alt={`${item.name} screenshot`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{item.projectType}</Badge>
                      <Badge className="border-purple-400/20 bg-purple-50 text-purple-700">{item.industry}</Badge>
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-bold tracking-[-0.03em] group-hover:text-blue-600 transition">
                      {item.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{item.summary}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Lihat detail <ArrowRight size={14} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border-2 border-blue-400 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/20 p-8 md:p-14">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-white drop-shadow-sm md:text-5xl">
                Mau website yang bukan cuma bagus, tapi juga bekerja untuk bisnis kamu?
              </h2>
              <p className="text-lg leading-8 text-white">
                Ceritakan kebutuhan kamu. Kami bantu mapping solusi paling masuk akal: mulai dari website, SEO, sampai automation.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href={whatsappHref}>
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
