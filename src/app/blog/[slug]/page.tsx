import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { blogPosts } from "@/content/blog";
import { whatsappHref } from "@/content/site";
import { ArrowRight, Clock } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Nggawe Web`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Nggawe Web`,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-slate-400">
                <Clock size={14} /> {post.readTime}
              </span>
              <span className="text-sm text-slate-500">{post.publishedAt}</span>
            </div>
            <h1 className="font-heading text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-slate-300">{post.excerpt}</p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell max-w-3xl">
            <article className="prose prose-invert prose-slate max-w-none">
              <p className="text-lg leading-8 text-slate-300">
                Artikel ini sedang dalam proses penulisan. Konten lengkap akan segera tersedia.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                Sambil menunggu, kamu bisa konsultasi langsung tentang kebutuhan website, SEO, atau automation bisnis kamu.
              </p>
            </article>

            <div className="mt-12 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-8">
              <h3 className="font-heading text-2xl font-bold">Butuh bantuan untuk project kamu?</h3>
              <p className="mt-3 text-blue-100">Ceritakan kebutuhanmu. Kami bantu rekomendasi solusi yang tepat.</p>
              <div className="mt-6 flex gap-3">
                <LinkButton className="bg-white text-blue-700 shadow-none hover:bg-blue-50" href={whatsappHref}>
                  Konsultasi Gratis
                </LinkButton>
                <LinkButton href="/brief-project" variant="secondary">
                  Isi Brief
                </LinkButton>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-16 space-y-8">
                <h2 className="font-heading text-2xl font-bold text-white">Artikel lainnya</h2>
                <div className="grid gap-5 md:grid-cols-3">
                  {related.map((r) => (
                    <Link href={`/blog/${r.slug}`} key={r.slug} className="group">
                      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/30">
                        <Badge>{r.category}</Badge>
                        <h3 className="mt-3 text-sm font-bold group-hover:text-cyan-200 transition">{r.title}</h3>
                        <div className="mt-3 flex items-center gap-2 text-xs text-cyan-300">
                          Baca <ArrowRight size={12} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
