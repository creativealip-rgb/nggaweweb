import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa SEO dan Optimasi Website untuk Bisnis — Nggawe Web",
  description:
    "Jasa SEO untuk membantu website lebih siap ranking di Google melalui technical SEO, keyword mapping, service page SEO, local SEO, dan content strategy.",
  openGraph: {
    title: "Jasa SEO dan Optimasi Website untuk Bisnis — Nggawe Web",
    description:
      "Jasa SEO untuk membantu website lebih siap ranking di Google melalui technical SEO, keyword mapping, service page SEO, local SEO, dan content strategy.",
  },
};

const data = {
  eyebrow: "Jasa SEO",
  h1: "Bantu calon customer menemukan bisnis kamu di Google.",
  subheadline:
    "Nggawe Web bantu susun fondasi SEO dari struktur website, keyword map, technical setup, service pages, sampai strategi konten lokal.",
  primaryCta: { label: "Audit SEO Gratis", href: "/audit-gratis" },
  secondaryCta: { label: "Lihat SEO Plan", href: whatsappHref },
  problems: [
    { title: "Tidak muncul di Google", body: "Website sudah ada tapi tidak pernah muncul di hasil pencarian." },
    { title: "Traffic sepi", body: "Tidak ada pengunjung organik dari search engine." },
    { title: "Kalah saing kompetitor", body: "Kompetitor muncul duluan di Google padahal layanan kamu lebih bagus." },
    { title: "SEO hanya pasang plugin", body: "Plugin SEO saja tidak cukup tanpa strategi konten dan struktur yang benar." },
    { title: "Tidak tahu keyword yang tepat", body: "Tidak riset keyword, konten jadi tidak relevan dengan yang dicari customer." },
    { title: "Tidak ada tracking", body: "Tidak tahu dari mana traffic datang dan halaman mana yang performa." },
  ],
  valueProp: {
    heading: "SEO bukan sekadar plugin. SEO butuh sistem.",
    body: "Kami bantu riset keyword, susun struktur halaman, optimasi technical SEO, dan siapkan konten awal agar website punya fondasi organic growth yang kuat.",
  },
  deliverables: [
    "Keyword research & mapping",
    "Technical SEO audit",
    "Metadata optimization (title & description)",
    "Service page SEO structure",
    "Local SEO setup",
    "Schema markup (JSON-LD)",
    "Sitemap & robots.txt",
    "Google Search Console setup",
    "Blog topic plan & cluster strategy",
    "Monthly SEO report template",
  ],
  processSteps: [
    { title: "Audit", body: "Cek kondisi website saat ini: technical, content, dan struktur." },
    { title: "Research", body: "Riset keyword, competitor, dan search intent lokal." },
    { title: "Optimize", body: "Perbaiki technical SEO, metadata, schema, dan struktur halaman." },
    { title: "Grow", body: "Publish konten, build internal links, dan monitor ranking." },
  ],
  portfolioItems: [
    { name: "Ganesha Travel", description: "Website travel dengan SEO structure dan local optimization." },
    { name: "Whale Dive Centre", description: "Website tourism dengan technical SEO dan content strategy." },
    { name: "Monev.app", description: "Platform SaaS dengan SEO-friendly architecture." },
  ],
  faqs: [
    { question: "Berapa lama SEO mulai terlihat hasilnya?", answer: "Biasanya 3–6 bulan untuk keyword kompetitif. Keyword lokal/niche bisa lebih cepat, 1–3 bulan." },
    { question: "Apakah SEO dijamin page 1 Google?", answer: "Tidak ada yang bisa jamin page 1. Tapi kami bantu fondasi sekuat mungkin agar website lebih siap bersaing." },
    { question: "Apakah perlu blog?", answer: "Blog sangat membantu SEO karena bisa target banyak keyword. Kami bantu siapkan topic plan dan template." },
    { question: "Berapa biaya jasa SEO?", answer: "Tergantung scope. SEO basic setup mulai dari Rp5 juta. Monthly SEO retainer bisa dibahas sesuai kebutuhan." },
  ],
  finalCta: {
    heading: "Mau website kamu lebih mudah ditemukan di Google?",
    body: "Minta audit SEO gratis atau diskusi langsung tentang strategi organic growth untuk bisnis kamu.",
  },
};

export default function JasaSeoPage() {
  return <ServicePage data={data} />;
}
