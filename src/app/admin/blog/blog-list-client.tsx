"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  publishedAt: string;
  readTime: string;
  author?: string;
  views?: number;
  scheduledAt?: string;
};

export default function AdminBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/blog")
      .then((r) => r.json())
      .then((d) => {
        setPosts(d);
        setLoading(false);
      });
  }, []);

  const categories = [...new Set(posts.map((p) => p.category))].sort();

  const filtered = posts.filter((p) => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterCat !== "all" && p.category !== filterCat) return false;
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    return true;
  });

  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center text-slate-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold hover:text-blue-600">← Blog Posts</Link>
          <div className="flex items-center gap-3">
            <Link href="/admin/gallery" className="px-3 py-2 bg-slate-100 hover:bg-slate-100 text-sm rounded-lg transition">🖼️ Gallery</Link>
            <Link href="/admin/categories" className="px-3 py-2 bg-slate-100 hover:bg-slate-100 text-sm rounded-lg transition">🏷️ Kategori</Link>
            <a href="/api/admin/backup" className="px-3 py-2 bg-slate-100 hover:bg-slate-100 text-sm rounded-lg transition">💾 Backup</a>
            <Link href="/admin/blog/new" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-sm font-medium rounded-lg transition">+ Tulis Artikel</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200"><p className="text-2xl font-bold text-blue-600">{posts.length}</p><p className="text-xs text-slate-400">Total Artikel</p></div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><p className="text-2xl font-bold text-green-400">{posts.filter((p) => p.status === "published").length}</p><p className="text-xs text-slate-400">Published</p></div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><p className="text-2xl font-bold text-yellow-400">{posts.filter((p) => p.status === "draft").length}</p><p className="text-xs text-slate-400">Draft</p></div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><p className="text-2xl font-bold text-purple-600">{totalViews}</p><p className="text-xs text-slate-400">Total Views</p></div>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-cyan-500"
            placeholder="🔍 Cari artikel..."
          />
          <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)} className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none">
            <option value="all">Semua Kategori</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none">
            <option value="all">Semua Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        {/* Posts */}
        <div className="space-y-3">
          {filtered.map((post) => (
            <div key={post.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-slate-200 hover:border-slate-200 transition">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 text-xs rounded-full ${post.status === "published" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"}`}>
                    {post.status}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 text-slate-400">{post.category}</span>
                  {post.scheduledAt && post.scheduledAt > new Date().toISOString() && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-900 text-blue-300">⏰ {post.scheduledAt.split("T")[0]}</span>
                  )}
                </div>
                <h3 className="font-medium text-slate-900 truncate">{post.title}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {post.author || "Admin"} · {post.publishedAt} · {post.readTime} · 👁️ {post.views || 0} views
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/admin/blog/${post.id}/edit`} className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-100 rounded-lg transition">Edit</Link>
                {post.status === "published" && (
                  <Link href={`/blog/${post.slug}`} target="_blank" className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-100 rounded-lg transition">View</Link>
                )}
                {post.status === "draft" && (
                  <Link href={`/preview/${post.id}`} target="_blank" className="px-3 py-1.5 text-xs bg-cyan-900 hover:bg-cyan-800 text-blue-600 rounded-lg transition">Preview</Link>
                )}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-8">Tidak ada artikel ditemukan</p>
          )}
        </div>
      </main>
    </div>
  );
}
