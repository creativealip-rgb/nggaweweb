import { NextRequest, NextResponse } from "next/server";
import { verifyLogin, createToken } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!(await verifyLogin(username, password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = createToken(username);
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });
  return res;
}
