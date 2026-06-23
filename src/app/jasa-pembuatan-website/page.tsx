import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional dan SEO-Friendly — Nggawe Web",
  description:
    "Jasa pembuatan website profesional untuk bisnis service, startup, UMKM, dan agency. Desain premium, cepat, responsive, SEO-ready, dan siap automation.",
  openGraph: {
    title: "Jasa Pembuatan Website Profesional dan SEO-Friendly — Nggawe Web",
    description:
      "Jasa pembuatan website profesional untuk bisnis service, startup, UMKM, dan agency. Desain premium, cepat, responsive, SEO-ready, dan siap automation.",
  },
};

const data = {
  eyebrow: "Jasa Pembuatan Website",
  h1: "Website profesional yang bikin bisnis terlihat kredibel dan siap dapat lead.",
  subheadline:
    "Kami bikin website custom yang cepat, responsive, mudah dipahami, dan dirancang dengan struktur SEO serta CTA yang jelas sejak awal.",
  primaryCta: { label: "Diskusi Website Baru", href: whatsappHref },
  secondaryCta: { label: "Cek Estimasi Biaya", href: "/tools/website-cost-calculator" },
  problems: [
    { title: "Website lama tidak meyakinkan", body: "Tampilan ketinggalan zaman bikin calon customer ragu sebelum menghubungi." },
    { title: "Tidak mobile-friendly", body: "Mayoritas traffic dari HP, tapi website tidak responsif di layar kecil." },
    { title: "Tidak ada struktur SEO", body: "Tanpa fondasi SEO yang benar, website sulit ditemukan di Google." },
    { title: "Tidak ada CTA jelas", body: "Visitor bingung harus ngapain setelah lihat website, akhirnya pergi." },
    { title: "Loading lambat", body: "Website lambat bikin visitor keluar sebelum sempat lihat isi." },
    { title: "Sulit diupdate", body: "Konten tidak bisa diubah tanpa minta bantuan developer." },
  ],
  valueProp: {
    heading: "Website yang dirancang untuk performa, bukan cuma tampilan.",
    body: "Kami gabungkan design modern, development cepat, SEO structure, dan CTA yang terarah agar website bukan hanya enak dilihat, tapi juga menghasilkan inquiry.",
  },
  deliverables: [
    "Custom design sesuai brand",
    "Responsive untuk semua device",
    "SEO basic setup (meta, sitemap, robots)",
    "Contact form / brief form",
    "WhatsApp CTA integration",
    "Google Analytics & Search Console setup",
    "Speed optimization",
    "CMS optional (blog/portfolio)",
    "Automation webhook optional",
  ],
  processSteps: [
    { title: "Discovery", body: "Kami pahami bisnis, target market, dan tujuan website." },
    { title: "Design", body: "Tampilan modern yang sesuai brand dan fokus conversion." },
    { title: "Build", body: "Website dibangun cepat, responsive, dan SEO-ready." },
    { title: "Launch", body: "Deploy, tes, dan pastikan semua berjalan lancar." },
  ],
  portfolioItems: [
    { name: "Cubiqlo", description: "Website brand dengan tampilan modern dan UX rapi." },
    { name: "Ganesha Travel", description: "Website travel dengan fokus trust dan inquiry." },
    { name: "Whale Dive Centre", description: "Website tourism dengan visual kuat dan CTA jelas." },
  ],
  faqs: [
    { question: "Berapa biaya membuat website?", answer: "Mulai dari Rp3,5 juta untuk website starter. Scope lebih besar akan menyesuaikan kebutuhan dan fitur." },
    { question: "Berapa lama prosesnya?", answer: "Website sederhana 5–10 hari kerja. Website custom dengan CMS dan fitur khusus bisa 2–4 minggu." },
    { question: "Apakah sudah SEO-ready?", answer: "Ya. Metadata, sitemap, robots.txt, heading structure, speed optimization, dan schema basic sudah termasuk." },
    { question: "Bisa edit konten sendiri?", answer: "Bisa. Kami bisa setup CMS (blog/portfolio) supaya kamu bisa update konten tanpa developer." },
  ],
  finalCta: {
    heading: "Siap punya website yang profesional dan menghasilkan lead?",
    body: "Ceritakan kebutuhan bisnis kamu. Kami bantu rekomendasi solusi yang paling masuk akal.",
  },
};

export default function JasaWebsitePage() {
  return <ServicePage data={data} />;
}
