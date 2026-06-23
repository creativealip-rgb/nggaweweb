import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { portfolioItems, type PortfolioItem } from "@/content/portfolio";
import { whatsappHref } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} — Portfolio Nggawe Web`,
    description: item.summary,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      title: `${item.name} — Portfolio Nggawe Web`,
      description: item.summary,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  const related = portfolioItems.filter((p) => p.slug !== item.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <Breadcrumbs items={[{ label: "Beranda", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: item.name }]} />
              <div className="flex flex-wrap gap-2">
                <Badge>{item.projectType}</Badge>
                <Badge className="border-purple-400/20 bg-purple-400/10 text-purple-100">{item.industry}</Badge>
                <Badge className="border-emerald-400/20 bg-emerald-400/10 text-emerald-100">{item.year}</Badge>
              </div>
              <h1 className="font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
                {item.name}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">{item.summary}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                {item.liveUrl && (
                  <LinkButton href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    Kunjungi Website <ExternalLink size={16} />
                  </LinkButton>
                )}
                <LinkButton href={whatsappHref} variant="secondary">
                  Buat Project Serupa
                </LinkButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-slate-900/80 p-6 shadow-[0_0_80px_rgba(59,130,246,0.22)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <Image src={item.screenshot} alt={`${item.name} screenshot`} width={800} height={450} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-white">Problem</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.problem}</p>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-white">Solution</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.solution}</p>
              </div>
            </div>
            <Card>
              <h3 className="mb-6 font-heading text-xl font-bold">Key Features</h3>
              <ul className="space-y-4">
                {item.features.map((f) => (
                  <li className="flex gap-3 text-slate-300" key={f}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Tech Stack & Services */}
        <section className="bg-slate-900/40 py-20 md:py-28">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-white">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {item.techStack.map((t) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-white">Services</h2>
              <div className="flex flex-wrap gap-3">
                {item.services.map((s) => (
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-white">Project lainnya</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link href={`/portfolio/${r.slug}`} key={r.slug}>
                  <Card className="group">
                    <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                    <h3 className="font-bold group-hover:text-cyan-200 transition">{r.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{r.summary}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      Lihat detail <ArrowRight size={14} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-8 md:p-14">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] md:text-5xl">
                Mau buat project seperti {item.name}?
              </h2>
              <p className="text-lg leading-8 text-blue-50">
                Ceritakan kebutuhan kamu. Kami bantu rekomendasi solusi dan estimasi yang sesuai.
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
