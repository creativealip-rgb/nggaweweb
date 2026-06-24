"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCat, setNewCat] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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
  };

  const add = () => {
    const c = newCat.trim();
    if (c && !categories.includes(c)) {
      setCategories([...categories, c]);
      setNewCat("");
    }
  };

  const remove = (cat: string) => {
    setCategories(categories.filter((c) => c !== cat));
  };

  const rename = (old: string, newName: string) => {
    setCategories(categories.map((c) => (c === old ? newName : c)));
  };

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center text-slate-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold hover:text-blue-600">← Kelola Kategori</Link>
          <button onClick={save} disabled={saving} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-sm font-medium rounded-lg transition disabled:opacity-50">
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {/* Add */}
        <div className="flex gap-3">
          <input
            value={newCat}
            onChange={(e) => setNewCat(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-cyan-500"
            placeholder="Tambah kategori baru..."
          />
          <button onClick={add} className="px-6 py-3 bg-slate-100 hover:bg-slate-100 rounded-lg transition">+ Tambah</button>
        </div>

        {/* List */}
        <div className="space-y-2">
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-slate-400 text-sm w-6">{i + 1}.</span>
              <input
                value={cat}
                onChange={(e) => rename(cat, e.target.value)}
                className="flex-1 bg-transparent text-slate-900 focus:outline-none"
              />
              <button onClick={() => remove(cat)} className="px-3 py-1 text-xs bg-red-900 hover:bg-red-800 text-red-300 rounded-lg transition">Hapus</button>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">Kategori yang dihapus dari list tidak menghapus artikel yang sudah pakai kategori tersebut.</p>
      </main>
    </div>
  );
}
