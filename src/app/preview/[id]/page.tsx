import { notFound } from "next/navigation";
import { getPostById, getPublishedPosts } from "@/lib/blog-store";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        {/* Draft banner */}
        <div className="bg-yellow-900/50 border-b border-yellow-700/50 px-6 py-3 text-center">
          <p className="text-yellow-200 text-sm font-medium">
            🔒 Preview Draft — Hanya terlihat di admin. Status:{" "}
            <span className="font-bold uppercase">{post.status}</span>
            {post.scheduledAt && (
              <span className="ml-2">· Terjadwal: {post.scheduledAt.split("T")[0]}</span>
            )}
          </p>
        </div>

        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-slate-400">
                <Clock size={14} /> {post.readTime}
              </span>
              <span className="text-sm text-slate-400">{post.publishedAt}</span>
              {post.author && (
                <span className="text-sm text-slate-400">· {post.author}</span>
              )}
            </div>
            <h1 className="font-heading text-3xl font-black leading-tight tracking-[-0.04em] text-slate-900 md:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
            {post.focusKeyword && (
              <p className="text-xs text-slate-600">Focus keyword: {post.focusKeyword}</p>
            )}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell max-w-3xl">
            <article
              className="prose prose-slate prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
