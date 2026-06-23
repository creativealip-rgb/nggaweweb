import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import fs from "fs";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blog");

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!fs.existsSync(UPLOAD_DIR)) return NextResponse.json([]);

  const files = fs.readdirSync(UPLOAD_DIR).map((name) => {
    const stat = fs.statSync(path.join(UPLOAD_DIR, name));
    return {
      name,
      url: `/api/uploads/blog/${name}`,
      size: stat.size,
      modified: stat.mtime.toISOString(),
    };
  }).sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime());

  return NextResponse.json(files);
}
