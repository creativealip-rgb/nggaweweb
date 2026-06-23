"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type File = { name: string; url: string; size: number; modified: string };

export default function GalleryPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const loadFiles = () => {
    fetch("/api/admin/gallery").then((r) => r.json()).then((d) => { setFiles(d); setLoading(false); });
  };

  useEffect(() => { loadFiles(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    await fetch("/api/admin/upload", { method: "POST", body: fd });
    setUploading(false);
    loadFiles();
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("URL copied!");
  };

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold hover:text-cyan-400">← Image Gallery</Link>
          <label className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-sm font-medium rounded-lg cursor-pointer transition">
            {uploading ? "Uploading..." : "📷 Upload Baru"}
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
          </label>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-8">
        <p className="text-sm text-slate-500 mb-4">{files.length} file · Klik gambar untuk copy URL</p>
        {files.length === 0 ? (
          <p className="text-center text-slate-500 py-16">Belum ada upload</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {files.map((f) => (
              <div key={f.name} onClick={() => copyUrl(f.url)} className="group cursor-pointer rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition">
                <div className="aspect-square bg-slate-800 flex items-center justify-center">
                  <img src={f.url} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <p className="text-xs text-slate-400 truncate">{f.name}</p>
                  <p className="text-xs text-slate-600">{(f.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
