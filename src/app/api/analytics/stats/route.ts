import { NextResponse } from "next/server";
import { getStats } from "@/lib/analytics-store";
import { isAuthenticated } from "@/lib/admin-auth";

export async function GET(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const days = parseInt(url.searchParams.get("days") || "30", 10);
  const stats = getStats(days);
  return NextResponse.json(stats);
}
