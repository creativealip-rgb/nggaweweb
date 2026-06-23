import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { getCategories, setCategories } from "@/lib/blog-store";

export async function GET() {
  return NextResponse.json(getCategories());
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { categories } = await req.json();
  if (!Array.isArray(categories)) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  setCategories(categories.filter(Boolean));
  return NextResponse.json({ ok: true });
}
