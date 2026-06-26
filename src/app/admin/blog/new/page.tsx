"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/admin-shell";
import HtmlEditor from "@/components/admin/html-editor";

export default function NewBlogPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [categories, setCategories] = useState<string[]>(["Website", "SEO", "Automation", "Tips"]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", category: "Website", tags: "",
    readTime: "5 min", status: "draft", content: "",
    author: "Admin", scheduledAt: "",
    metaTitle: "", metaDescription: "", ogImage: "", focusKeyword: "",
  });

  useEffect(() => {
    fetch("/api/admin/categories").then((r) => r.json()).then(setCategories).catch(() => {});
  }, []);

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (field === "title") {
      setForm((f) => ({
        ...f, title: value,
        slug: value.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80),
      }));
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) {
      const img = `\n<img src="${data.url}" alt="${file.name}" class="w-full rounded-xl my-6" />\n`;
      setForm((f) => ({ ...f, content: f.content + img }));
    } else {
      alert(data.error || "Upload gagal");
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        publishedAt: new Date().toISOString().split("T")[0],
        scheduledAt: form.scheduledAt || undefined,
      }),
    });
    if (res.ok) router.push("/admin/blog");
    else alert("Gagal menyimpan");
    setSaving(false);
  };

  return (
    <AdminShell>
      <div className="max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Tulis Artikel Baru</h1>
            <p className="text-sm text-slate-500 mt-1">Buat konten blog baru</p>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium rounded-lg shadow-sm transition-all disabled:opacity-50"
          >
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>

        {/* Info */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
          <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">1</span>
            Info Artikel
          </h2>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Judul</label>
            <input value={form.title} onChange={(e) => update("title", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Judul artikel..." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug</label>
              <input value={form.slug} onChange={(e) => update("slug", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Kategori</label>
              <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Excerpt</label>
            <textarea value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} rows={2} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Ringkasan singkat..." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Tags</label>
              <input value={form.tags} onChange={(e) => update("tags", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm" placeholder="SEO, website" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Read Time</label>
              <input value={form.readTime} onChange={(e) => update("readTime", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Author</label>
              <input value={form.author} onChange={(e) => update("author", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Status</label>
              <select value={form.status} onChange={(e) => update("status", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500">
                <option value="draft">Draft</option><option value="published">Published</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">⏰ Schedule Publish <span className="text-slate-400 font-normal">(opsional)</span></label>
            <input type="datetime-local" value={form.scheduledAt} onChange={(e) => update("scheduledAt", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>
        </section>

        {/* Content */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">2</span>
              Konten
            </h2>
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-sm rounded-lg cursor-pointer transition">
              {uploading ? "Uploading..." : "📷 Upload Gambar"}
              <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
            </label>
          </div>
          <HtmlEditor value={form.content} onChange={(val) => update("content", val)} />
        </section>

        {/* SEO */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
          <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">3</span>
            SEO Settings
          </h2>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Focus Keyword</label>
            <input value={form.focusKeyword} onChange={(e) => update("focusKeyword", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="jasa pembuatan website" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Meta Title</label>
            <input value={form.metaTitle} onChange={(e) => update("metaTitle", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" maxLength={60} />
            <p className="text-xs text-slate-400 mt-1">{form.metaTitle.length}/60</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Meta Description</label>
            <textarea value={form.metaDescription} onChange={(e) => update("metaDescription", e.target.value)} rows={2} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" maxLength={160} />
            <p className="text-xs text-slate-400 mt-1">{form.metaDescription.length}/160</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">OG Image URL</label>
            <input value={form.ogImage} onChange={(e) => update("ogImage", e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="/uploads/blog/cover.jpg" />
          </div>
        </section>

        {/* Google Preview */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">4</span>
            Google Preview
          </h2>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-blue-800 text-lg font-medium truncate">{form.metaTitle || form.title || "Judul Artikel"}</p>
            <p className="text-green-700 text-xs">nggawe.web.id/blog/{form.slug || "slug"}</p>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{form.metaDescription || form.excerpt || "Deskripsi artikel..."}</p>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
