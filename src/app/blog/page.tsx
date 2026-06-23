import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getPublishedPosts } from "@/lib/blog-store";
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
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Breadcrumbs items={[{ label: "Beranda", href: "/" }, { label: "Blog" }]} />
            <Badge>Blog</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
              Insight tentang website, SEO, dan automation.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Artikel praktis untuk bantu bisnis kamu punya website lebih baik, lebih ditemukan di Google, dan lebih efisien.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {getPublishedPosts().map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <Card className="group flex h-full flex-col">
                    {post.image ? (
                      <div className="mb-4 h-40 overflow-hidden rounded-2xl bg-slate-800">
                        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="mb-4 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                    )}
                    <div className="flex items-center gap-3">
                      <Badge>{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 flex-1 font-heading text-xl font-bold tracking-[-0.03em] group-hover:text-cyan-200 transition">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      Baca artikel <ArrowRight size={14} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
