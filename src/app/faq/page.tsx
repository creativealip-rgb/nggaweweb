import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ Website, SEO, dan Automation — Nggawe Web",
  description:
    "Jawaban untuk pertanyaan umum tentang biaya website, timeline, SEO, automation, maintenance, dan white-label project di Nggawe Web.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Berapa biaya membuat website di Nggawe Web?",
    a: "Biaya mulai dari Rp3,5 juta untuk website starter. Project yang butuh custom design, CMS, SEO, automation, atau fitur khusus akan menyesuaikan scope.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Website sederhana biasanya 5–10 hari kerja. Website custom dengan SEO dan automation bisa memakan waktu 2–6 minggu tergantung kompleksitas.",
  },
  {
    q: "Apakah website sudah SEO-ready?",
    a: "Ya. Struktur dasar seperti metadata, sitemap, robots.txt, heading, speed, schema basic, dan Search Console bisa disiapkan sejak awal.",
  },
  {
    q: "Apakah bisa dibantu automation juga?",
    a: "Bisa. Form website bisa dihubungkan ke database, spreadsheet, email, Telegram, WhatsApp notification, atau workflow n8n sesuai kebutuhan.",
  },
  {
    q: "Apakah menerima project white-label dari agency?",
    a: "Ya. Nggawe Web bisa membantu agency sebagai partner build untuk website, landing page, technical SEO, dan automation secara white-label.",
  },
  {
    q: "Bagaimana cara memulai project?",
    a: "Chat WhatsApp langsung atau isi brief project di website. Kami akan review kebutuhan dan follow-up dalam 1x24 jam.",
  },
  {
    q: "Apakah ada maintenance bulanan?",
    a: "Bisa. Kami menyediakan paket maintenance untuk update konten, security patch, monitoring, dan support teknis.",
  },
  {
    q: "Stack teknologi apa yang dipakai?",
    a: "Kami pakai Next.js, TypeScript, Tailwind CSS, Sanity/Payload CMS, n8n, dan tools modern lainnya. Stack bisa disesuaikan dengan kebutuhan project.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>FAQ</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
              Pertanyaan umum tentang website, SEO, dan automation.
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.q} className="p-6">
                  <h3 className="font-heading text-lg font-bold">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-shell text-center">
            <h2 className="font-heading text-2xl font-bold text-white">Masih ada pertanyaan?</h2>
            <p className="mt-3 text-slate-400">Chat langsung dan tanya apa saja.</p>
            <LinkButton className="mt-6" href={whatsappHref}>Chat WhatsApp</LinkButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
