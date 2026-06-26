"use client";

import { useState, useEffect } from "react";
import AdminShell from "@/components/admin/admin-shell";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCat, setNewCat] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/categories").then((r) => r.json()).then((d) => { setCategories(d); setLoading(false); });
  }, []);

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/categories", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categories }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const add = () => {
    const c = newCat.trim();
    if (c && !categories.includes(c)) {
      setCategories([...categories, c]);
      setNewCat("");
    }
  };

  const remove = (cat: string) => {
    if (!confirm(`Hapus kategori "${cat}"?`)) return;
    setCategories(categories.filter((c) => c !== cat));
  };

  const rename = (old: string, newName: string) => {
    setCategories(categories.map((c) => (c === old ? newName : c)));
  };

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
      <div className="space-y-6 max-w-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Kelola Kategori</h1>
            <p className="text-sm text-slate-500 mt-1">Atur kategori untuk artikel blog</p>
          </div>
          <button
            onClick={save}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium rounded-lg shadow-sm transition-all disabled:opacity-50"
          >
            {saving ? "Menyimpan..." : saved ? "✓ Tersimpan" : "Simpan"}
          </button>
        </div>

        {/* Add */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Tambah Kategori Baru</h2>
          <div className="flex gap-3">
            <input
              value={newCat}
              onChange={(e) => setNewCat(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && add()}
              className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Nama kategori..."
            />
            <button
              onClick={add}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-sm font-medium rounded-lg transition"
            >
              + Tambah
            </button>
          </div>
        </div>

        {/* List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-100">
            <h2 className="text-sm font-semibold text-slate-700">Kategori Aktif ({categories.length})</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {categories.map((cat, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition group">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-xs font-medium text-slate-500 flex items-center justify-center">{i + 1}</span>
                <input
                  value={cat}
                  onChange={(e) => rename(cat, e.target.value)}
                  className="flex-1 bg-transparent text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1"
                />
                <button
                  onClick={() => remove(cat)}
                  className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                  title="Hapus"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 4h10M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1M9 7v4M5 7v4M3 4l.5 8a1 1 0 001 1h5a1 1 0 001-1L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ))}
            {categories.length === 0 && (
              <div className="px-5 py-8 text-center">
                <p className="text-slate-400">Belum ada kategori</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-slate-400">Kategori yang dihapus dari list tidak menghapus artikel yang sudah pakai kategori tersebut.</p>
      </div>
    </AdminShell>
  );
}
