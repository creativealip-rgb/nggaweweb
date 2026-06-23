import Link from "next/link";
import { isAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { getAllPosts, getCategories } from "@/lib/blog-store";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const posts = getAllPosts();
  const categories = getCategories();
  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">NggaweWeb Admin</h1>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" className="text-sm text-slate-400 hover:text-white transition">🌐 Lihat Website</a>
            <form action="/api/admin/logout" method="POST"><button className="text-sm text-red-400 hover:text-red-300 transition">Logout</button></form>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><p className="text-2xl font-bold text-cyan-400">{posts.length}</p><p className="text-xs text-slate-500">Artikel</p></div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><p className="text-2xl font-bold text-green-400">{posts.filter((p) => p.status === "published").length}</p><p className="text-xs text-slate-500">Published</p></div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><p className="text-2xl font-bold text-yellow-400">{posts.filter((p) => p.status === "draft").length}</p><p className="text-xs text-slate-500">Draft</p></div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><p className="text-2xl font-bold text-purple-400">{totalViews}</p><p className="text-xs text-slate-500">Views</p></div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><p className="text-2xl font-bold text-orange-400">{categories.length}</p><p className="text-xs text-slate-500">Kategori</p></div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/admin/blog" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition"><h3 className="text-lg font-bold">📝 Blog Posts</h3><p className="text-sm text-slate-400 mt-1">Kelola artikel</p></Link>
          <Link href="/admin/gallery" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition"><h3 className="text-lg font-bold">🖼️ Gallery</h3><p className="text-sm text-slate-400 mt-1">Kelola gambar</p></Link>
          <Link href="/admin/categories" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition"><h3 className="text-lg font-bold">🏷️ Kategori</h3><p className="text-sm text-slate-400 mt-1">Tambah/hapus kategori</p></Link>
          <a href="/api/admin/backup" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition"><h3 className="text-lg font-bold">💾 Backup</h3><p className="text-sm text-slate-400 mt-1">Download data</p></a>
        </div>
      </main>
    </div>
  );
}
