"use client";

import { analytics } from "@/lib/analytics";

// Tracked WhatsApp link
export function TrackedWhatsApp({
  location,
  children,
  className,
}: {
  location: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6280000000000"}?text=${encodeURIComponent("Halo Nggawe Web, saya mau konsultasi soal Website/SEO/Automation.")}`}
      className={className}
      onClick={() => analytics.whatsappClick(location)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

// Tracked CTA button
export function TrackedCTA({
  label,
  location,
  href,
  children,
  className,
}: {
  label: string;
  location: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => analytics.ctaClick(label, location)}
    >
      {children}
    </a>
  );
}
