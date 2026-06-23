import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { exportAll } from "@/lib/blog-store";

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = exportAll();
  const filename = `nggawe-backup-${new Date().toISOString().split("T")[0]}.json`;

  return new NextResponse(data, {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
