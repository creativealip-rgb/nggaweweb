import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getPublishedPosts, getPostBySlug } from "@/lib/blog-store";
import { whatsappHref, siteConfig } from "@/content/site";
import { ArrowRight, Clock, MessageCircle, FileText } from "lucide-react";
import { ViewCounter } from "@/components/blog/view-counter";
import { BlogAnalytics } from "@/components/blog/blog-analytics";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const title = post.metaTitle || `${post.title} — Nggawe Web`;
  const description = post.metaDescription || post.excerpt;
  return {
    title,
    description,
    keywords: post.focusKeyword ? [post.focusKeyword] : post.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      ...(post.ogImage && { images: [post.ogImage] }),
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getPublishedPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, 4);

  const faqMatches = [...post.content.matchAll(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g)].slice(-8);
  const faqJsonLd = faqMatches.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqMatches.map((match) => ({
      "@type": "Question",
      name: match[1].replace(/<[^>]+>/g, ""),
      acceptedAnswer: { "@type": "Answer", text: match[2].replace(/<[^>]+>/g, "") },
    })),
  } : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    keywords: post.tags,
    author: { "@type": "Organization", name: "Nggawe Web", url: siteConfig.url },
    publisher: { "@type": "Organization", name: "Nggawe Web", url: siteConfig.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
    ...(post.image && { image: `${siteConfig.url}${post.image}` }),
  };

  return (
    <>
      <ViewCounter postId={post.id} />
      <BlogAnalytics postId={post.id} slug={post.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-16 md:py-20">
          <div className="container-shell max-w-5xl space-y-6">
            <Breadcrumbs items={[{ label: "Beranda", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
            {post.image && (
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img src={post.image} alt={post.title} className="w-full object-cover max-h-[400px]" />
              </div>
            )}
            <div className="flex items-center gap-3">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-slate-400">
                <Clock size={14} /> {post.readTime}
              </span>
              <span className="text-sm text-slate-400">{post.publishedAt}</span>
              {post.author && <span className="text-sm text-slate-400">· {post.author}</span>}
              <span className="text-sm text-slate-400">· 👁️ {post.views || 0}</span>
            </div>
            <h1 className="font-heading text-3xl font-black leading-tight tracking-[-0.04em] text-slate-900 md:text-4xl">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16 md:py-20">
          <div className="container-shell max-w-5xl">
            <div className="flex flex-col gap-10 lg:flex-row">
              {/* Main Article */}
              <article className="min-w-0 flex-1">
                <div className="prose prose-slate prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Bottom CTA */}
                <div className="mt-12 rounded-2xl border-2 border-blue-400 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/20 p-8">
                  <h3 className="font-heading text-2xl font-bold">Butuh bantuan untuk project kamu?</h3>
                  <p className="mt-3 text-blue-700">Ceritakan kebutuhanmu. Kami bantu rekomendasi solusi yang tepat.</p>
                  <div className="mt-6 flex gap-3">
                    <LinkButton className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600" href={whatsappHref}>
                      Konsultasi Gratis
                    </LinkButton>
                    <LinkButton href="/brief-project" variant="secondary">
                      Isi Brief
                    </LinkButton>
                  </div>
                </div>

                {/* Related at bottom (mobile visible, desktop hidden) */}
                {related.length > 0 && (
                  <div className="mt-16 space-y-8 lg:hidden">
                    <h2 className="font-heading text-2xl font-bold text-slate-900">Artikel lainnya</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      {related.slice(0, 2).map((r) => (
                        <Link href={`/blog/${r.slug}`} key={r.slug} className="group">
                          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:border-blue-300">
                            {r.image && (
                              <div className="mb-3 overflow-hidden rounded-xl">
                                <img src={r.image} alt={r.title} className="h-28 w-full object-cover" />
                              </div>
                            )}
                            <Badge>{r.category}</Badge>
                            <h3 className="mt-3 text-sm font-bold group-hover:text-blue-600 transition">{r.title}</h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar — desktop only, sticky */}
              <aside className="hidden lg:block lg:w-[300px] shrink-0">
                <div className="sticky top-24 space-y-6">
                  {/* CTA Card */}
                  <Card className="space-y-4 border-blue-200 bg-gradient-to-b from-white to-slate-50 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                        <MessageCircle size={20} className="text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-slate-900">Butuh bantuan?</p>
                        <p className="text-xs text-slate-500">Chat langsung via WhatsApp</p>
                      </div>
                    </div>
                    <LinkButton href={whatsappHref} className="w-full bg-emerald-500 hover:bg-emerald-500 text-slate-900 shadow-none">
                      💬 Konsultasi Gratis
                    </LinkButton>
                    <LinkButton href="/brief-project" variant="secondary" className="w-full">
                      <FileText size={16} /> Isi Brief Project
                    </LinkButton>
                  </Card>

                  {/* About Card */}
                  <Card className="space-y-3 p-5">
                    <p className="font-heading text-sm font-bold text-slate-900">Tentang Nggawe Web</p>
                    <p className="text-xs leading-6 text-slate-500">
                      Kami bantu bisnis punya website profesional, ditemukan di Google, dan lebih efisien dengan automation.
                    </p>
                    <div className="flex gap-4 text-xs text-slate-600">
                      <span>🌐 Website</span>
                      <span>📈 SEO</span>
                      <span>⚡ Automation</span>
                    </div>
                  </Card>

                  {/* Related Articles */}
                  {related.length > 0 && (
                    <Card className="space-y-4 p-5">
                      <p className="font-heading text-sm font-bold text-slate-900">Artikel Terkait</p>
                      <div className="space-y-3">
                        {related.map((r) => (
                          <Link href={`/blog/${r.slug}`} key={r.slug} className="group flex gap-3">
                            {r.image ? (
                              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                                <img src={r.image} alt={r.title} className="h-full w-full object-cover" />
                              </div>
                            ) : (
                              <div className="h-14 w-14 shrink-0 rounded-lg bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                            )}
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-slate-600 line-clamp-2 group-hover:text-blue-600 transition">
                                {r.title}
                              </p>
                              <span className="text-[10px] text-slate-500">{r.category}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Card>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
