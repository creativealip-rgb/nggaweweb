import { NextResponse } from "next/server";
import { addEvent } from "@/lib/analytics-store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.type || !body.page) {
      return NextResponse.json({ error: "type and page required" }, { status: 400 });
    }
    const event = addEvent({
      type: body.type,
      page: body.page,
      referrer: body.referrer || "",
      userAgent: request.headers.get("user-agent") || "",
      meta: body.meta || {},
    });
    return NextResponse.json({ ok: true, id: event.id });
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }
}
