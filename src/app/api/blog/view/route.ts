import { NextRequest, NextResponse } from "next/server";
import { incrementViews } from "@/lib/blog-store";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  incrementViews(id);
  return NextResponse.json({ ok: true });
}
