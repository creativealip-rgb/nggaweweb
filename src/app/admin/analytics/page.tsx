"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
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
    setLoading(true);
    fetch(`/api/analytics/stats?days=${days}`)
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [days]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-slate-400">Gagal memuat data analytics.</p>
      </div>
    );
  }

  const maxViews = Math.max(...stats.byDay.map((d) => d.views), 1);

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-black text-white">Analytics Dashboard</h1>
            <p className="mt-2 text-sm text-slate-400">Pantau traffic, engagement, dan leads masuk.</p>
          </div>
          <div className="flex gap-2">
            {[7, 14, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  days === d ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {d} hari
              </button>
            ))}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                <Eye size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Page Views</p>
                <p className="font-heading text-2xl font-bold text-white">{stats.total.views}</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
                <MessageCircle size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">WA Clicks</p>
                <p className="font-heading text-2xl font-bold text-white">{stats.total.wa}</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                <FileText size={20} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Brief Submitted</p>
                <p className="font-heading text-2xl font-bold text-white">{stats.total.brief}</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <Users size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Leads</p>
                <p className="font-heading text-2xl font-bold text-white">{stats.total.leads}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Chart */}
        <Card className="p-6">
          <h2 className="mb-6 font-heading text-lg font-bold text-white">Traffic Harian</h2>
          {stats.byDay.length === 0 ? (
            <p className="text-sm text-slate-500">Belum ada data.</p>
          ) : (
            <div className="flex items-end gap-1" style={{ height: 200 }}>
              {stats.byDay.map((day) => (
                <div key={day.date} className="group relative flex-1">
                  <div
                    className="rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 transition hover:from-blue-500 hover:to-cyan-300"
                    style={{ height: `${(day.views / maxViews) * 180}px`, minHeight: day.views > 0 ? 4 : 0 }}
                  />
                  <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 -translate-x-1/2 rounded-lg bg-slate-800 px-3 py-2 text-xs text-white shadow-lg group-hover:visible">
                    <p className="font-semibold">{day.date}</p>
                    <p>👁️ {day.views} views</p>
                    <p>💬 {day.wa} WA</p>
                    <p>📝 {day.brief} brief</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-between text-[10px] text-slate-600">
            <span>{stats.byDay[0]?.date || ""}</span>
            <span>{stats.byDay[stats.byDay.length - 1]?.date || ""}</span>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Pages */}
          <Card className="p-6">
            <h2 className="mb-4 font-heading text-lg font-bold text-white">Halaman Terpopuler</h2>
            {stats.topPages.length === 0 ? (
              <p className="text-sm text-slate-500">Belum ada data.</p>
            ) : (
              <div className="space-y-3">
                {stats.topPages.map((p, i) => (
                  <div key={p.page} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-400">
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate text-sm text-slate-300">{p.page}</span>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-bold text-cyan-300">{p.count}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Top Sources */}
          <Card className="p-6">
            <h2 className="mb-4 font-heading text-lg font-bold text-white">Sumber Traffic</h2>
            {stats.topSources.length === 0 ? (
              <p className="text-sm text-slate-500">Belum ada data.</p>
            ) : (
              <div className="space-y-3">
                {stats.topSources.map((s, i) => (
                  <div key={s.source} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-400">
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate text-sm text-slate-300">
                      {s.source === "direct" ? "🔗 Direct" : s.source}
                    </span>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-bold text-cyan-300">{s.count}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
