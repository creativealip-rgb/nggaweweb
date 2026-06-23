"use client";

import { useEffect } from "react";

export function ViewCounter({ postId }: { postId: string }) {
  useEffect(() => {
    // Only count once per session
    const key = `viewed_${postId}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");

    fetch("/api/blog/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: postId }),
    }).catch(() => {});
  }, [postId]);

  return null;
}
