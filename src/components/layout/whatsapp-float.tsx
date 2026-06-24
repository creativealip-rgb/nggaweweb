"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6280000000000"}?text=${encodeURIComponent("Halo Nggawe Web, saya mau konsultasi.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-[0_4px_24px_rgba(34,197,94,0.4)] transition hover:scale-110 hover:bg-green-400"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="text-slate-900" size={28} />
    </a>
  );
}
