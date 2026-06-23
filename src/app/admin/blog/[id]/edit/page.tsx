"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", category: "Website", tags: "",
    readTime: "5 min", status: "draft", content: "",
    metaTitle: "", metaDescription: "", ogImage: "", focusKeyword: "",
  });

  useEffect(() => {
    fetch(`/api/admin/blog/${id}`).then((r) => r.json()).then((post) => {
      setForm({
        title: post.title, slug: post.slug, excerpt: post.excerpt,
        category: post.category, tags: (post.tags || []).join(", "),
        readTime: post.readTime, status: post.status, content: post.content,
        metaTitle: post.metaTitle || "", metaDescription: post.metaDescription || "",
        ogImage: post.ogImage || "", focusKeyword: post.focusKeyword || "",
      });
      setLoading(false);
    });
  }, [id]);

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) {
      const img = `\n<img src="${data.url}" alt="${file.name}" class="w-full rounded-xl my-6" />`;
      setForm((f) => ({ ...f, content: f.content + img }));
    } else {
      alert(data.error || "Upload gagal");
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      }),
    });
    if (res.ok) router.push("/admin/blog");
    else alert("Gagal menyimpan");
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("Hapus artikel ini?")) return;
    setDeleting(true);
    const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/blog");
    else alert("Gagal menghapus");
    setDeleting(false);
  };

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/admin/blog" className="text-xl font-bold hover:text-cyan-400">← Edit Artikel</Link>
          <div className="flex items-center gap-3">
            <button onClick={handleDelete} disabled={deleting} className="px-4 py-2 bg-red-900 hover:bg-red-800 text-red-200 text-sm rounded-lg transition disabled:opacity-50">{deleting ? "Menghapus..." : "Hapus"}</button>
            <button onClick={handleSave} disabled={saving} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition disabled:opacity-50">{saving ? "Menyimpan..." : "Simpan"}</button>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-5">
        {/* Basic Info */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-cyan-400 border-b border-slate-800 pb-2">Info Artikel</h2>
          <div><label className="block text-sm text-slate-300 mb-1">Judul</label><input value={form.title} onChange={(e) => update("title", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-slate-300 mb-1">Slug</label><input value={form.slug} onChange={(e) => update("slug", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 text-sm" /></div>
            <div><label className="block text-sm text-slate-300 mb-1">Kategori</label>
              <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"><option>Website</option><option>SEO</option><option>Automation</option><option>Tips</option></select>
            </div>
          </div>
          <div><label className="block text-sm text-slate-300 mb-1">Excerpt</label><textarea value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} rows={2} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" /></div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="block text-sm text-slate-300 mb-1">Tags (koma)</label><input value={form.tags} onChange={(e) => update("tags", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 text-sm" /></div>
            <div><label className="block text-sm text-slate-300 mb-1">Read Time</label><input value={form.readTime} onChange={(e) => update("readTime", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 text-sm" /></div>
            <div><label className="block text-sm text-slate-300 mb-1">Status</label>
              <select value={form.status} onChange={(e) => update("status", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"><option value="draft">Draft</option><option value="published">Published</option></select>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-cyan-400 border-b border-slate-800 pb-2">Konten</h2>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm rounded-lg cursor-pointer transition">
              {uploading ? "Uploading..." : "📷 Upload Gambar"}
              <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
            </label>
            <span className="text-xs text-slate-500">Max 2MB · JPG, PNG, WebP, GIF</span>
          </div>
          <textarea value={form.content} onChange={(e) => update("content", e.target.value)} rows={20} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-cyan-500" />
        </section>

        {/* SEO */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-cyan-400 border-b border-slate-800 pb-2">🔍 SEO Settings</h2>
          <div><label className="block text-sm text-slate-300 mb-1">Focus Keyword</label><input value={form.focusKeyword} onChange={(e) => update("focusKeyword", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" placeholder="jasa pembuatan website" /></div>
          <div><label className="block text-sm text-slate-300 mb-1">Meta Title <span className="text-slate-600">(kosong = auto)</span></label><input value={form.metaTitle} onChange={(e) => update("metaTitle", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" maxLength={60} /><p className="text-xs text-slate-500 mt-1">{form.metaTitle.length}/60 karakter</p></div>
          <div><label className="block text-sm text-slate-300 mb-1">Meta Description <span className="text-slate-600">(kosong = auto)</span></label><textarea value={form.metaDescription} onChange={(e) => update("metaDescription", e.target.value)} rows={2} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" maxLength={160} /><p className="text-xs text-slate-500 mt-1">{form.metaDescription.length}/160 karakter</p></div>
          <div><label className="block text-sm text-slate-300 mb-1">OG Image URL</label><input value={form.ogImage} onChange={(e) => update("ogImage", e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" placeholder="/uploads/blog/cover.jpg" /></div>
        </section>

        {/* Google Preview */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-cyan-400 border-b border-slate-800 pb-2">Google Preview</h2>
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
