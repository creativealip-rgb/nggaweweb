import Link from "next/link";
import { isAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { getAllPosts, getCategories, isPostLive, isPostScheduled } from "@/lib/blog-store";
import AdminShell from "@/components/admin/admin-shell";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const posts = getAllPosts();
  const categories = getCategories();
  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);
  const published = posts.filter((p) => isPostLive(p)).length;
  const scheduled = posts.filter((p) => isPostScheduled(p)).length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  const stats = [
    { label: "Total Artikel", value: posts.length, icon: "📝", color: "from-blue-500 to-blue-600", bg: "bg-blue-50", text: "text-blue-700" },
    { label: "Published", value: published, icon: "✅", color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50", text: "text-emerald-700" },
    { label: "Scheduled", value: scheduled, icon: "⏰", color: "from-sky-500 to-cyan-600", bg: "bg-sky-50", text: "text-sky-700" },
    { label: "Draft", value: drafts, icon: "📄", color: "from-amber-500 to-amber-600", bg: "bg-amber-50", text: "text-amber-700" },
    { label: "Total Views", value: totalViews, icon: "👁️", color: "from-purple-500 to-purple-600", bg: "bg-purple-50", text: "text-purple-700" },
    { label: "Kategori", value: categories.length, icon: "🏷️", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-50", text: "text-cyan-700" },
  ];

  const quickLinks = [
    { href: "/admin/blog", icon: "📝", label: "Blog Posts", desc: "Kelola artikel", count: posts.length },
    { href: "/admin/gallery", icon: "🖼️", label: "Gallery", desc: "Kelola gambar" },
    { href: "/admin/categories", icon: "🏷️", label: "Kategori", desc: "Tambah/hapus", count: categories.length },
    { href: "/api/admin/backup", icon: "💾", label: "Backup", desc: "Download data", isApi: true },
    { href: "/admin/analytics", icon: "📈", label: "Analytics", desc: "Traffic & leads" },
  ];

  // Recent posts
  const recentPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  return (
    <AdminShell>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Overview website dan konten kamu</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{stat.icon}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${stat.bg} ${stat.text}`}>{stat.label}</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {quickLinks.map((link) => {
              const Wrapper = link.isApi ? "a" : Link;
              return (
                <Wrapper
                  key={link.label}
                  href={link.href}
                  className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="text-3xl block mb-3">{link.icon}</span>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition">{link.label}</h3>
                  <p className="text-xs text-slate-400 mt-1">{link.desc}</p>
                  {link.count !== undefined && (
                    <p className="text-xs font-medium text-blue-600 mt-2">{link.count} items</p>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Artikel Terbaru</h2>
            <Link href="/admin/blog" className="text-sm text-blue-600 hover:text-blue-700 font-medium">Lihat semua →</Link>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Judul</th>
                  <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Kategori</th>
                  <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Status</th>
                  <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Views</th>
                  <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => {
                  const publishLabel = isPostScheduled(post) ? "scheduled" : post.status;
                  return (
                  <tr key={post.id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                    <td className="px-5 py-3">
                      <p className="text-sm font-medium text-slate-900 truncate max-w-xs">{post.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{post.publishedAt}</p>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{post.category}</span>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${publishLabel === "published" ? "bg-emerald-100 text-emerald-700" : publishLabel === "scheduled" ? "bg-sky-100 text-sky-700" : "bg-amber-100 text-amber-700"}`}>
                        {publishLabel}
                      </span>
                    </td>
                    <td className="px-5 py-3 hidden lg:table-cell">
                      <span className="text-sm text-slate-600">{post.views || 0}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <Link href={`/admin/blog/${post.id}/edit`} className="text-xs text-blue-600 hover:text-blue-700 font-medium">Edit</Link>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
