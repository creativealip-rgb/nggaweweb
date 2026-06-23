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
  pillarSections: [
    { title: "Apa itu jasa pembuatan website profesional?", body: "Jasa pembuatan website profesional adalah layanan untuk merancang, membangun, dan mengoptimasi website agar bisa menjadi aset digital bisnis. Website bukan cuma halaman online, tapi tempat calon pelanggan memahami layanan, melihat bukti kepercayaan, lalu menghubungi bisnis lewat CTA yang jelas.", points: ["Struktur halaman dibuat berdasarkan search intent dan kebutuhan calon pelanggan.", "Desain disesuaikan dengan brand agar terlihat kredibel.", "Website dibangun responsive, cepat, aman, dan siap diindex Google."] },
    { title: "Jenis website yang paling sering dibutuhkan bisnis", body: "Tidak semua bisnis butuh website kompleks. UMKM bisa mulai dari website company profile atau landing page. Bisnis yang menjual produk bisa butuh toko online. Perusahaan yang punya proses internal bisa butuh website custom dengan dashboard, CMS, atau integrasi automation.", points: ["Landing page untuk campaign dan validasi penawaran.", "Company profile untuk trust dan presentasi layanan.", "Toko online untuk katalog, order, dan pembayaran.", "Web app custom untuk proses bisnis yang lebih spesifik."] },
    { title: "Berapa biaya pembuatan website?", body: "Biaya website tergantung scope. Faktor utamanya adalah jumlah halaman, desain custom, CMS, copywriting, SEO, integrasi payment, automation, dan maintenance. Website sederhana biasanya lebih murah, sedangkan website custom dengan fitur bisnis butuh budget lebih besar karena ada riset, desain, development, testing, dan deployment.", points: ["Landing page cocok untuk promosi satu produk atau layanan.", "Company profile cocok untuk bisnis jasa, UMKM, dan perusahaan.", "Toko online cocok untuk brand yang butuh katalog dan order online.", "Custom system cocok untuk bisnis yang butuh workflow atau dashboard khusus."] },
    { title: "Struktur website SEO-friendly", body: "Website SEO-friendly harus mudah dipahami manusia dan mesin pencari. Setiap halaman perlu satu H1 yang jelas, heading H2/H3 yang rapi, meta title, meta description, internal link, sitemap, robots.txt, canonical URL, dan schema markup. Struktur ini membantu Google memahami topik utama halaman.", points: ["Gunakan URL pendek dan deskriptif.", "Buat halaman layanan khusus untuk tiap service utama.", "Tambahkan FAQ yang menjawab pertanyaan calon pelanggan.", "Link dari artikel blog ke halaman layanan utama."] },
    { title: "Proses kerja ideal dari brief sampai launch", body: "Proses terbaik dimulai dari discovery, bukan langsung desain. Kita perlu tahu target market, value proposition, kompetitor, keyword utama, dan goal konversi. Setelah itu baru susun wireframe, copywriting, design, development, QA, deploy, dan tracking.", points: ["Discovery kebutuhan bisnis dan target pelanggan.", "Wireframe dan struktur konten.", "Desain UI yang sesuai brand.", "Development, testing, deployment, dan handover."] },
  ],
  clusterLinks: [
    { label: "Biaya Pembuatan Website", href: "/blog/biaya-pembuatan-website" }, { label: "Harga Jasa Pembuatan Website", href: "/blog/harga-jasa-pembuatan-website" }, { label: "Jasa Pembuatan Website UMKM", href: "/blog/jasa-pembuatan-website-umkm" }, { label: "Jasa Pembuatan Website Toko Online", href: "/blog/jasa-pembuatan-website-toko-online" }, { label: "Jasa Pembuatan Website Perusahaan", href: "/blog/jasa-pembuatan-website-perusahaan" }, { label: "Jasa Buat Website", href: "/blog/jasa-buat-website" }, { label: "Contoh Website Company Profile", href: "/blog/contoh-website-company-profile" }, { label: "Contoh Website Toko Online", href: "/blog/contoh-website-toko-online" }, { label: "Cara Membuat Website Bisnis", href: "/blog/cara-membuat-website-bisnis" }, { label: "Website untuk UMKM", href: "/blog/website-untuk-umkm" }, { label: "Manfaat Website untuk Bisnis", href: "/blog/manfaat-website-untuk-bisnis" }, { label: "Website untuk Bisnis Kecil", href: "/blog/website-untuk-bisnis-kecil" }, { label: "Website Company Profile Adalah", href: "/blog/website-company-profile-adalah" }, { label: "Jasa Pembuatan Landing Page", href: "/blog/jasa-pembuatan-landing-page" }, { label: "Cara Membuat Website Toko Online", href: "/blog/cara-membuat-website-toko-online" },
  ],
  faqs: [
    { question: "Berapa biaya membuat website?", answer: "Mulai dari Rp3,5 juta untuk website starter. Scope lebih besar akan menyesuaikan kebutuhan dan fitur." },
    { question: "Berapa lama prosesnya?", answer: "Website sederhana 5–10 hari kerja. Website custom dengan CMS dan fitur khusus bisa 2–4 minggu." },
    { question: "Apakah sudah SEO-ready?", answer: "Ya. Metadata, sitemap, robots.txt, heading structure, speed optimization, dan schema basic sudah termasuk." },
    { question: "Bisa edit konten sendiri?", answer: "Bisa. Kami bisa setup CMS (blog/portfolio) supaya kamu bisa update konten tanpa developer." },
  ],
  relatedServices: [
    { label: "Jasa SEO", href: "/jasa-seo", description: "Optimasi SEO teknis dan konten agar website bisnis kamu lebih ditemukan di Google." },
    { label: "Jasa Automation", href: "/jasa-automation", description: "Workflow automation untuk hemat waktu dan rapikan proses bisnis." },
    { label: "Agency Subcontract", href: "/agency-subcontract", description: "Partner white-label untuk agency yang butuh jasa build website." },
  ],
  finalCta: {
    heading: "Siap punya website yang profesional dan menghasilkan lead?",
    body: "Ceritakan kebutuhan bisnis kamu. Kami bantu rekomendasi solusi yang paling masuk akal.",
  },
};

export default function JasaWebsitePage() {
  return <ServicePage data={data} />;
}
