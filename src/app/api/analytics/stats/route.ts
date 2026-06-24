import { NextResponse } from "next/server";
import { getStats } from "@/lib/analytics-store";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const days = parseInt(url.searchParams.get("days") || "30", 10);
  const stats = getStats(days);
  return NextResponse.json(stats);
}
