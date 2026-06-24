"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/admin/blog" className="text-xl font-bold hover:text-blue-600">← Tulis Artikel Baru</Link>
          <button onClick={handleSave} disabled={saving} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-medium rounded-lg transition disabled:opacity-50">
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-5">
        {/* Basic Info */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-blue-600 border-b border-slate-200 pb-2">Info Artikel</h2>
          <div><label className="block text-sm text-slate-600 mb-1">Judul</label><input value={form.title} onChange={(e) => update("title", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" placeholder="Judul artikel..." /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-slate-600 mb-1">Slug</label><input value={form.slug} onChange={(e) => update("slug", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500 text-sm" /></div>
            <div><label className="block text-sm text-slate-600 mb-1">Kategori</label>
              <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div><label className="block text-sm text-slate-600 mb-1">Excerpt</label><textarea value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} rows={2} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" placeholder="Ringkasan singkat..." /></div>
          <div className="grid grid-cols-4 gap-4">
            <div><label className="block text-sm text-slate-600 mb-1">Tags (koma)</label><input value={form.tags} onChange={(e) => update("tags", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500 text-sm" placeholder="SEO, website" /></div>
            <div><label className="block text-sm text-slate-600 mb-1">Read Time</label><input value={form.readTime} onChange={(e) => update("readTime", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500 text-sm" /></div>
            <div><label className="block text-sm text-slate-600 mb-1">Author</label><input value={form.author} onChange={(e) => update("author", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500 text-sm" /></div>
            <div><label className="block text-sm text-slate-600 mb-1">Status</label>
              <select value={form.status} onChange={(e) => update("status", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500">
                <option value="draft">Draft</option><option value="published">Published</option>
              </select>
            </div>
          </div>
          <div><label className="block text-sm text-slate-600 mb-1">⏰ Schedule Publish <span className="text-slate-600">(opsional, kosong = langsung)</span></label>
            <input type="datetime-local" value={form.scheduledAt} onChange={(e) => update("scheduledAt", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" />
          </div>
        </section>

        {/* Content with Rich Editor */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-blue-600 border-b border-slate-200 pb-2">Konten</h2>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 bg-slate-100 hover:bg-slate-100 text-sm rounded-lg cursor-pointer transition">
              {uploading ? "Uploading..." : "📷 Upload Gambar"}
              <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
            </label>
            <span className="text-xs text-slate-400">Max 2MB · JPG, PNG, WebP, GIF</span>
          </div>
          <HtmlEditor value={form.content} onChange={(val) => update("content", val)} />
        </section>

        {/* SEO */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-blue-600 border-b border-slate-200 pb-2">🔍 SEO Settings</h2>
          <div><label className="block text-sm text-slate-600 mb-1">Focus Keyword</label><input value={form.focusKeyword} onChange={(e) => update("focusKeyword", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" placeholder="jasa pembuatan website" /></div>
          <div><label className="block text-sm text-slate-600 mb-1">Meta Title</label><input value={form.metaTitle} onChange={(e) => update("metaTitle", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" maxLength={60} /><p className="text-xs text-slate-400 mt-1">{form.metaTitle.length}/60</p></div>
          <div><label className="block text-sm text-slate-600 mb-1">Meta Description</label><textarea value={form.metaDescription} onChange={(e) => update("metaDescription", e.target.value)} rows={2} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" maxLength={160} /><p className="text-xs text-slate-400 mt-1">{form.metaDescription.length}/160</p></div>
          <div><label className="block text-sm text-slate-600 mb-1">OG Image URL</label><input value={form.ogImage} onChange={(e) => update("ogImage", e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500" placeholder="/uploads/blog/cover.jpg" /></div>
        </section>

        {/* Google Preview */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-blue-600 border-b border-slate-200 pb-2">Google Preview</h2>
          <div className="p-4 bg-white rounded-lg">
            <p className="text-blue-800 text-lg font-medium truncate">{form.metaTitle || form.title || "Judul Artikel"}</p>
            <p className="text-green-700 text-xs">nggawe.web.id/blog/{form.slug || "slug"}</p>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{form.metaDescription || form.excerpt || "Deskripsi artikel..."}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
