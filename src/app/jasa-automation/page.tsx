import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa Automation Bisnis dan n8n Workflow — Nggawe Web",
  description:
    "Jasa automation bisnis untuk merapikan lead, form, follow-up, notifikasi, email, spreadsheet, CRM, dan workflow internal dengan n8n atau tools automation lain.",
  openGraph: {
    title: "Jasa Automation Bisnis dan n8n Workflow — Nggawe Web",
    description:
      "Jasa automation bisnis untuk merapikan lead, form, follow-up, notifikasi, email, spreadsheet, CRM, dan workflow internal dengan n8n atau tools automation lain.",
  },
};

const data = {
  eyebrow: "Jasa Business Automation",
  h1: "Kurangi kerja manual, rapikan lead, dan percepat follow-up.",
  subheadline:
    "Kami bantu hubungkan form, website, database, email, spreadsheet, dan notifikasi agar proses bisnis berjalan lebih otomatis.",
  primaryCta: { label: "Audit Workflow Gratis", href: "/audit-gratis" },
  secondaryCta: { label: "Lihat Demo Automation", href: whatsappHref },
  problems: [
    { title: "Lead masuk berantakan", body: "Form masuk ke WhatsApp, email, dan DM tanpa ada sistem yang mengumpulkan." },
    { title: "Follow-up terlambat", body: "Lead baru tidak langsung di-follow-up karena tim tidak tahu ada inquiry masuk." },
    { title: "Data tidak tersimpan rapi", body: "Data customer tersebar di banyak tempat, sulit dilacak dan dianalisa." },
    { title: "Kerja manual berulang", body: "Setiap lead harus dicatat manual, dikirim notifikasi manual, di-follow-up manual." },
    { title: "Tidak ada reporting", body: "Tidak tahu berapa lead masuk, berapa yang di-follow-up, dan berapa closing." },
    { title: "Tim tidak terkoordinasi", body: "Tidak ada sistem yang memberi tahu siapa yang harus follow-up dan kapan." },
  ],
  valueProp: {
    heading: "Automation bukan mengganti orang. Automation bantu orang kerja lebih efisien.",
    body: "Kami bantu desain workflow yang otomatis menangkap lead, menyimpan data, mengirim notifikasi, dan membuat task follow-up supaya tidak ada yang terlewat.",
  },
  deliverables: [
    "Workflow audit & mapping",
    "n8n / Make automation setup",
    "Form webhook integration",
    "Google Sheets / Airtable / Supabase sync",
    "Telegram & WhatsApp notification",
    "Email autoresponder",
    "Lead tagging & categorization",
    "Follow-up reminder system",
    "Documentation & handover",
  ],
  processSteps: [
    { title: "Audit", body: "Mapping proses bisnis saat ini dan cari titik yang bisa diotomasi." },
    { title: "Design", body: "Desain workflow automation yang sesuai kebutuhan tim." },
    { title: "Build", body: "Bangun workflow di n8n, hubungkan semua tools." },
    { title: "Test & Launch", body: "Tes real scenario, pastikan semua jalan, dan handover ke tim." },
  ],
  portfolioItems: [
    { name: "Monev.app", description: "Platform monitoring dengan automation workflow internal." },
    { name: "Contenly.app", description: "Platform content dengan automated pipeline dan notifications." },
    { name: "Internal Tools", description: "Workflow automation untuk lead intake, reporting, dan follow-up." },
  ],
  pillarSections: [
    { title: "Apa itu jasa automation bisnis?", body: "Jasa automation bisnis adalah layanan membuat alur kerja otomatis agar tugas berulang tidak selalu dikerjakan manual. Contohnya lead dari website otomatis masuk spreadsheet, tim dapat notifikasi, customer menerima balasan, dan follow-up dibuat sebagai reminder.", points: ["Mengurangi input data manual.", "Mempercepat respons ke calon pelanggan.", "Merapikan data lead dan aktivitas follow-up.", "Membuat laporan lebih konsisten."] },
    { title: "Workflow yang paling cepat memberi dampak", body: "Automation paling efektif dimulai dari proses yang sering berulang dan punya dampak langsung ke revenue. Untuk UMKM dan bisnis jasa, area paling umum adalah lead intake, WhatsApp notification, CRM sederhana, invoice, reminder pembayaran, dan report mingguan.", points: ["Form website ke WhatsApp atau Telegram.", "Lead masuk otomatis ke Google Sheets, Airtable, atau CRM.", "Follow-up reminder untuk sales.", "Email autoresponder setelah form diisi."] },
    { title: "Tools yang bisa dipakai", body: "Automation bisa dibuat dengan banyak tools. n8n cocok untuk workflow fleksibel dan self-hosted. Make dan Zapier cocok untuk integrasi cepat. Google Sheets bisa jadi database awal untuk UMKM. Pilihan tools tergantung budget, kompleksitas, dan kebutuhan keamanan data.", points: ["n8n untuk workflow custom dan self-hosted.", "Make/Zapier untuk integrasi cepat tanpa banyak setup server.", "Google Sheets/Airtable untuk database sederhana.", "WhatsApp API, Telegram, dan email untuk notifikasi."] },
    { title: "Cara mulai tanpa bikin sistem terlalu kompleks", body: "Kesalahan umum adalah langsung ingin mengotomasi semua proses. Cara aman adalah mulai dari satu workflow yang jelas, ukur hasilnya, lalu tambah alur lain. Automation harus membantu tim, bukan membuat proses makin sulit dipahami.", points: ["Pilih satu proses yang paling banyak makan waktu.", "Buat flow sederhana: trigger, action, notification, log.", "Test dengan skenario real.", "Dokumentasikan cara pakai dan cara memperbaiki error." ] },
  ],
  clusterLinks: [
    { label: "Automation Bisnis Adalah", href: "/blog/automation-bisnis-adalah" }, { label: "Otomatisasi WhatsApp Bisnis", href: "/blog/otomatisasi-whatsapp-bisnis" }, { label: "Chatbot WhatsApp untuk Bisnis", href: "/blog/chatbot-whatsapp-untuk-bisnis" }, { label: "CRM untuk UMKM", href: "/blog/crm-untuk-umkm" }, { label: "Otomasi Bisnis", href: "/blog/otomasi-bisnis" }, { label: "Jasa Automation Bisnis", href: "/blog/jasa-automation-bisnis" }, { label: "WhatsApp Automation", href: "/blog/whatsapp-automation" }, { label: "Automation untuk Ecommerce", href: "/blog/automation-untuk-ecommerce" },
  ],
  faqs: [
    { question: "Apa itu n8n?", answer: "n8n adalah platform automation open-source yang bisa menghubungkan berbagai tools dan service tanpa coding." },
    { question: "Bisnis kecil cocok pakai automation?", answer: "Sangat cocok. Justru bisnis kecil yang paling untung karena bisa hemat waktu dan tidak perlu hire orang tambahan." },
    { question: "Berapa biaya automation?", answer: "Mulai dari Rp5 juta untuk workflow sederhana. Workflow kompleks dengan banyak integrasi akan menyesuaikan scope." },
    { question: "Apakah perlu coding?", answer: "Tidak. n8n dan Make pakai visual workflow builder. Kami yang setup, kamu yang pakai." },
  ],
  relatedServices: [
    { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website", description: "Website profesional yang bikin bisnis terlihat kredibel dan siap dapat lead." },
    { label: "Jasa SEO", href: "/jasa-seo", description: "Optimasi SEO teknis dan konten agar website bisnis kamu lebih ditemukan di Google." },
  ],
  finalCta: {
    heading: "Siap kurangi kerja manual dan rapikan sistem lead kamu?",
    body: "Ceritakan proses bisnis kamu saat ini. Kami bantu identifikasi bagian yang bisa diotomasi.",
  },
};

export default function JasaAutomationPage() {
  return <ServicePage data={data} />;
}
