"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdminShell from "@/components/admin/admin-shell";

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

type PublishFilter = "all" | "published" | "scheduled" | "draft";

function isScheduled(post: Post, now = new Date()) {
  if (post.status !== "published") return false;
  if (post.scheduledAt && post.scheduledAt > now.toISOString()) return true;
  return Boolean(post.publishedAt && new Date(post.publishedAt) > now);
}

function getPublishLabel(post: Post): "published" | "scheduled" | "draft" {
  if (post.status === "draft") return "draft";
  return isScheduled(post) ? "scheduled" : "published";
}

const statusStyle = {
  published: "bg-emerald-100 text-emerald-700",
  scheduled: "bg-sky-100 text-sky-700",
  draft: "bg-amber-100 text-amber-700",
};

function getScheduleDate(post: Post) {
  return (post.scheduledAt || post.publishedAt || "").split("T")[0];
}

export default function AdminBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("all");
  const [filterStatus, setFilterStatus] = useState<PublishFilter>("all");
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
    if (filterStatus !== "all" && getPublishLabel(p) !== filterStatus) return false;
    return true;
  });

  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);
  const published = posts.filter((p) => getPublishLabel(p) === "published").length;
  const scheduled = posts.filter((p) => getPublishLabel(p) === "scheduled").length;
  const drafts = posts.filter((p) => getPublishLabel(p) === "draft").length;

  if (loading) {
    return (
      <AdminShell>
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Blog Posts</h1>
            <p className="text-sm text-slate-500 mt-1">Kelola semua artikel</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium rounded-lg shadow-sm transition-all"
          >
            <span>+</span> Tulis Artikel
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total", value: posts.length, icon: "📝", bg: "bg-blue-50", text: "text-blue-700" },
            { label: "Published", value: published, icon: "✅", bg: "bg-emerald-50", text: "text-emerald-700" },
            { label: "Scheduled", value: scheduled, icon: "⏰", bg: "bg-sky-50", text: "text-sky-700" },
            { label: "Draft", value: drafts, icon: "📄", bg: "bg-amber-50", text: "text-amber-700" },
            { label: "Views", value: totalViews, icon: "👁️", bg: "bg-purple-50", text: "text-purple-700" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{stat.icon}</span>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Cari artikel..."
            />
          </div>
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
          >
            <option value="all">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as PublishFilter)}
            className="px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500"
          >
            <option value="all">Semua Status</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Artikel</th>
                <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Kategori</th>
                <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Status</th>
                <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Views</th>
                <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => {
                const publishLabel = getPublishLabel(post);
                const scheduleDate = getScheduleDate(post);
                return (
                <tr key={post.id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-slate-900 truncate max-w-md">{post.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {post.author || "Admin"} · {post.publishedAt} · {post.readTime}
                    </p>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{post.category}</span>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle[publishLabel]}`}>
                        {publishLabel}
                      </span>
                      {publishLabel === "scheduled" && scheduleDate && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-medium">⏰ {scheduleDate}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden lg:table-cell">
                    <span className="text-sm text-slate-600">{post.views || 0}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/blog/${post.id}/edit`} className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition font-medium">Edit</Link>
                      {post.status === "published" && (
                        <Link href={`/blog/${post.slug}`} target="_blank" className="px-3 py-1.5 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition font-medium">View</Link>
                      )}
                      {post.status === "draft" && (
                        <Link href={`/preview/${post.id}`} target="_blank" className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition font-medium">Preview</Link>
                      )}
                    </div>
                  </td>
                </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center">
                    <p className="text-4xl mb-2">📭</p>
                    <p className="text-slate-400">Tidak ada artikel ditemukan</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <p className="text-xs text-slate-400 text-right">{filtered.length} dari {posts.length} artikel</p>
      </div>
    </AdminShell>
  );
}
