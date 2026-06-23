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
