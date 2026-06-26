"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/admin-shell";
import { Eye, MessageCircle, FileText, Users } from "lucide-react";

type Stats = {
  total: { views: number; leads: number; wa: number; brief: number };
  byDay: { date: string; views: number; leads: number; wa: number; brief: number }[];
  topPages: { page: string; count: number }[];
  topSources: { source: string; count: number }[];
};

export default function AnalyticsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/analytics/stats?days=${days}`)
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [days]);

  if (loading) {
    return (
      <AdminShell>
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
        </div>
      </AdminShell>
    );
  }

  if (!stats) {
    return (
      <AdminShell>
        <div className="text-center py-20">
          <p className="text-4xl mb-3">📊</p>
          <p className="text-slate-500">Gagal memuat data analytics.</p>
        </div>
      </AdminShell>
    );
  }

  const maxViews = Math.max(...stats.byDay.map((d) => d.views), 1);

  const statCards = [
    { label: "Page Views", value: stats.total.views, icon: Eye, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "WA Clicks", value: stats.total.wa, icon: MessageCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Brief Submitted", value: stats.total.brief, icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Leads", value: stats.total.leads, icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <AdminShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
            <p className="text-sm text-slate-500 mt-1">Pantau traffic, engagement, dan leads</p>
          </div>
          <div className="flex gap-2">
            {[7, 14, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                  days === d
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {d} hari
              </button>
            ))}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-6">Traffic Harian</h2>
          {stats.byDay.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-2">📈</p>
              <p className="text-sm text-slate-400">Belum ada data</p>
            </div>
          ) : (
            <>
              <div className="flex items-end gap-1" style={{ height: 200 }}>
                {stats.byDay.map((day) => (
                  <div key={day.date} className="group relative flex-1">
                    <div
                      className="rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 transition hover:from-blue-500 hover:to-cyan-300"
                      style={{ height: `${(day.views / maxViews) * 180}px`, minHeight: day.views > 0 ? 4 : 0 }}
                    />
                    <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:visible">
                      <p className="font-semibold">{day.date}</p>
                      <p>👁️ {day.views} views</p>
                      <p>💬 {day.wa} WA</p>
                      <p>📝 {day.brief} brief</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-slate-400">
                <span>{stats.byDay[0]?.date || ""}</span>
                <span>{stats.byDay[stats.byDay.length - 1]?.date || ""}</span>
              </div>
            </>
          )}
        </div>

        {/* Bottom Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Pages */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-4">Halaman Terpopuler</h2>
            {stats.topPages.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-8">Belum ada data</p>
            ) : (
              <div className="space-y-3">
                {stats.topPages.map((p, i) => (
                  <div key={p.page} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-xs font-medium text-slate-500 flex items-center justify-center">{i + 1}</span>
                    <span className="flex-1 truncate text-sm text-slate-700">{p.page}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{p.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Top Sources */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-4">Sumber Traffic</h2>
            {stats.topSources.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-8">Belum ada data</p>
            ) : (
              <div className="space-y-3">
                {stats.topSources.map((s, i) => (
                  <div key={s.source} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-xs font-medium text-slate-500 flex items-center justify-center">{i + 1}</span>
                    <span className="flex-1 truncate text-sm text-slate-700">
                      {s.source === "direct" ? "🔗 Direct" : s.source}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{s.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
