"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="text-6xl">😵</div>
        <h1 className="text-2xl font-bold text-slate-900">Ada yang salah</h1>
        <p className="text-slate-400">Halaman mengalami error. Coba muat ulang atau kembali ke beranda.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-900 rounded-lg font-medium transition"
          >
            Coba Lagi
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-slate-200 hover:border-slate-200 text-slate-600 rounded-lg transition"
          >
            Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
