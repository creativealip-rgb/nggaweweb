import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">NggaweWeb Admin</h1>
          <form action="/api/admin/logout" method="POST">
            <button className="text-sm text-slate-400 hover:text-white">
              Logout
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/admin/blog"
            className="block p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 transition"
          >
            <h3 className="text-lg font-bold text-cyan-400">📝 Blog Posts</h3>
            <p className="text-slate-400 mt-1">Kelola artikel blog</p>
          </Link>
          <Link
            href="/"
            className="block p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 transition"
          >
            <h3 className="text-lg font-bold text-cyan-400">🌐 Lihat Website</h3>
            <p className="text-slate-400 mt-1">Buka nggawe.web.id</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
