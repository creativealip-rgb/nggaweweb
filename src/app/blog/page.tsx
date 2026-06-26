import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getPublishedPosts } from "@/lib/blog-store";
import { whatsappHref } from "@/content/site";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Website, SEO, dan Automation — Nggawe Web",
  description:
    "Artikel Nggawe Web tentang pembuatan website, SEO, business automation, lead generation, dan strategi digital untuk bisnis.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Breadcrumbs items={[{ label: "Beranda", href: "/" }, { label: "Blog" }]} />
            <Badge>Blog</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-slate-900 md:text-6xl">
              Insight tentang website, SEO, dan automation.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Artikel praktis untuk bantu bisnis kamu punya website lebih baik, lebih ditemukan di Google, dan lebih efisien.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell">
            <h2 className="mb-10 font-heading text-3xl font-black tracking-[-0.03em] text-slate-900 md:text-4xl">Artikel Terbaru</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {getPublishedPosts().map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <Card className="group flex h-full flex-col">
                    {post.image ? (
                      <div className="mb-4 h-40 overflow-hidden rounded-2xl bg-slate-100">
                        <Image src={post.image} alt={post.title} width={1200} height={630} className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="mb-4 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                    )}
                    <div className="flex items-center gap-3">
                      <Badge>{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 flex-1 font-heading text-xl font-bold tracking-[-0.03em] group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Baca artikel <ArrowRight size={14} />
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
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-white drop-shadow-sm md:text-5xl">Mau website yang bukan cuma bagus, tapi juga bekerja untuk bisnis kamu?</h2>
              <p className="text-lg leading-8 text-white">Ceritakan kebutuhan kamu. Kami bantu mapping solusi paling masuk akal: mulai dari website, SEO, sampai automation.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href={whatsappHref}>Konsultasi Gratis</LinkButton>
                <LinkButton href="/brief-project" variant="secondary">Isi Brief Project</LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
