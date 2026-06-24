import * as fs from "fs";
import * as path from "path";

export type AnalyticsEvent = {
  id: string;
  type: "page_view" | "wa_click" | "brief_submit" | "lead_submit" | "cta_click";
  page: string;
  referrer?: string;
  userAgent?: string;
  ip?: string;
  timestamp: string;
  meta?: Record<string, string>;
};

const DB_PATH = path.join(process.cwd(), "data", "analytics.json");

function ensureDir() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function getAllEvents(): AnalyticsEvent[] {
  ensureDir();
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

export function addEvent(event: Omit<AnalyticsEvent, "id" | "timestamp">): AnalyticsEvent {
  const events = getAllEvents();
  const newEvent: AnalyticsEvent = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: new Date().toISOString(),
    ...event,
  };
  events.push(newEvent);
  // Keep last 10000 events
  const trimmed = events.slice(-10000);
  fs.writeFileSync(DB_PATH, JSON.stringify(trimmed, null, 2));
  return newEvent;
}

export function getStats(days = 30) {
  const events = getAllEvents();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString();

  const recent = events.filter((e) => e.timestamp >= cutoffStr);

  // Group by day
  const byDay: Record<string, { views: number; leads: number; wa: number; brief: number }> = {};
  for (const e of recent) {
    const day = e.timestamp.slice(0, 10);
    if (!byDay[day]) byDay[day] = { views: 0, leads: 0, wa: 0, brief: 0 };
    if (e.type === "page_view") byDay[day].views++;
    if (e.type === "lead_submit") byDay[day].leads++;
    if (e.type === "wa_click") byDay[day].wa++;
    if (e.type === "brief_submit") byDay[day].brief++;
  }

  // Top pages
  const pageViews = recent.filter((e) => e.type === "page_view");
  const topPages: Record<string, number> = {};
  for (const e of pageViews) {
    topPages[e.page] = (topPages[e.page] || 0) + 1;
  }

  // Top sources
  const topSources: Record<string, number> = {};
  for (const e of pageViews) {
    const src = e.referrer || "direct";
    topSources[src] = (topSources[src] || 0) + 1;
  }

  return {
    total: {
      views: pageViews.length,
      leads: recent.filter((e) => e.type === "lead_submit").length,
      wa: recent.filter((e) => e.type === "wa_click").length,
      brief: recent.filter((e) => e.type === "brief_submit").length,
    },
    byDay: Object.entries(byDay)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, data]) => ({ date, ...data })),
    topPages: Object.entries(topPages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([page, count]) => ({ page, count })),
    topSources: Object.entries(topSources)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([source, count]) => ({ source, count })),
  };
}
