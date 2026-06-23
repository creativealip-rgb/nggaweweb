"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBlogPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
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

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (field === "title") {
      setForm((f) => ({
        ...f,
        title: value,
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .slice(0, 80),
      }));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        publishedAt: new Date().toISOString().split("T")[0],
      }),
    });
    if (res.ok) {
      router.push("/admin/blog");
    } else {
      alert("Gagal menyimpan");
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/admin/blog"
            className="text-xl font-bold hover:text-cyan-400"
          >
            ← Tulis Artikel Baru
          </Link>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition disabled:opacity-50"
          >
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-5">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Judul</label>
          <input
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            placeholder="Judul artikel..."
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
            placeholder="Ringkasan singkat..."
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
              placeholder="SEO, website"
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
            placeholder='<p class="text-lg leading-8 text-slate-300">Tulis konten HTML di sini...</p>'
          />
          <p className="text-xs text-slate-500 mt-1">
            Gunakan HTML. Class Tailwind tersedia: text-slate-300, text-white,
            text-cyan-300, font-heading, text-2xl, font-bold, mt-10, mb-4, dll.
          </p>
        </div>
      </main>
    </div>
  );
}
