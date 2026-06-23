import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: body.type ?? "unknown",
          submittedAt: new Date().toISOString(),
          source: {
            sourcePage: body.sourcePage ?? "",
            landingPage: body.landingPage ?? "",
            referrer: body.referrer ?? "",
            utmSource: body.utmSource ?? "",
            utmMedium: body.utmMedium ?? "",
            utmCampaign: body.utmCampaign ?? "",
          },
          lead: {
            name: body.name ?? "",
            email: body.email ?? "",
            phone: body.phone ?? "",
            companyName: body.companyName ?? "",
            businessType: body.businessType ?? "",
            currentWebsite: body.currentWebsite ?? "",
            servicesNeeded: body.servicesNeeded ?? [],
            projectGoal: body.projectGoal ?? "",
            budgetRange: body.budgetRange ?? "",
            timeline: body.timeline ?? "",
            message: body.message ?? "",
            mainConcern: body.mainConcern ?? "",
            website: body.website ?? "",
          },
        }),
      });
    }

    // Send confirmation email if Resend key exists
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && body.email) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Nggawe Web <halo@nggaweweb.com>",
          to: body.email,
          subject:
            body.type === "audit_request"
              ? "Request audit website kamu sudah masuk"
              : "Brief kamu sudah masuk — Nggawe Web akan review dulu",
          html: `<p>Halo ${body.name ?? "there"},</p><p>Terima kasih sudah menghubungi Nggawe Web. Kami akan review kebutuhanmu dan follow-up dalam 1x24 jam.</p><p>Salam,<br/>Nggawe Web</p>`,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
