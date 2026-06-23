"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "Website",
    tags: "",
    readTime: "5 min",
    status: "draft",
    content: "",
  });

  useEffect(() => {
    fetch(`/api/admin/blog/${id}`)
      .then((r) => r.json())
      .then((post) => {
        setForm({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          category: post.category,
          tags: (post.tags || []).join(", "),
          readTime: post.readTime,
          status: post.status,
          content: post.content,
        });
        setLoading(false);
      });
  }, [id]);

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      }),
    });
    if (res.ok) {
      router.push("/admin/blog");
    } else {
      alert("Gagal menyimpan");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("Hapus artikel ini?")) return;
    setDeleting(true);
    const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/admin/blog");
    } else {
      alert("Gagal menghapus");
    }
    setDeleting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/admin/blog"
            className="text-xl font-bold hover:text-cyan-400"
          >
            ← Edit Artikel
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-4 py-2 bg-red-900 hover:bg-red-800 text-red-200 text-sm rounded-lg transition disabled:opacity-50"
            >
              {deleting ? "Menghapus..." : "Hapus"}
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition disabled:opacity-50"
            >
              {saving ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-5">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Judul</label>
          <input
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Slug</label>
            <input
              value={form.slug}
              onChange={(e) => update("slug", e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Kategori
            </label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option>Website</option>
              <option>SEO</option>
              <option>Automation</option>
              <option>Tips</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Excerpt (ringkasan)
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            rows={2}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Tags (koma)
            </label>
            <input
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Read Time
            </label>
            <input
              value={form.readTime}
              onChange={(e) => update("readTime", e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Status</label>
            <select
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Konten (HTML)
          </label>
          <textarea
            value={form.content}
            onChange={(e) => update("content", e.target.value)}
            rows={20}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-cyan-500"
          />
          <p className="text-xs text-slate-500 mt-1">
            Gunakan HTML + Tailwind classes.
          </p>
        </div>
      </main>
    </div>
  );
}
