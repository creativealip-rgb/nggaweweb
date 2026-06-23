import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import { getAllPosts } from "@/lib/blog-store";
import Link from "next/link";

export default async function AdminBlogPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold hover:text-cyan-400">
            ← NggaweWeb Admin
          </Link>
          <Link
            href="/admin/blog/new"
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition"
          >
            + Tulis Artikel
          </Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Blog Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <p className="text-slate-400">Belum ada artikel.</p>
        ) : (
          <div className="space-y-3">
            {posts
              .sort(
                (a, b) =>
                  new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime()
              )
              .map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          post.status === "published"
                            ? "bg-green-900 text-green-300"
                            : "bg-yellow-900 text-yellow-300"
                        }`}
                      >
                        {post.status}
                      </span>
                      <span className="text-xs text-slate-500">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-medium text-white truncate">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {post.publishedAt} · {post.readTime}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="px-3 py-1.5 text-sm bg-slate-800 hover:bg-slate-700 rounded transition"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 text-sm bg-slate-800 hover:bg-slate-700 rounded transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
}
