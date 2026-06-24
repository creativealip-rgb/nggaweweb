"use client";

import { useEffect } from "react";

export function BlogAnalytics({ postId, slug }: { postId: string; slug: string }) {
  useEffect(() => {
    // Track page view
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "page_view",
        page: `/blog/${slug}`,
        referrer: document.referrer || "direct",
      }),
    }).catch(() => {});
  }, [postId, slug]);

  // Track WA clicks
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "wa_click",
            page: `/blog/${slug}`,
            meta: { href },
          }),
        }).catch(() => {});
      }
      if (href.includes("/brief-project") || link.textContent?.includes("Brief")) {
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "cta_click",
            page: `/blog/${slug}`,
            meta: { target: "brief", text: link.textContent || "" },
          }),
        }).catch(() => {});
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [slug]);

  return null;
}
