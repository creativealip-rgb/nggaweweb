import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "White-Label Web Development Partner untuk Agency — Nggawe Web",
  description:
    "Partner white-label untuk agency yang butuh bantuan website development, landing page, technical SEO, CMS, dan automation implementation.",
  openGraph: {
    title: "White-Label Web Development Partner untuk Agency — Nggawe Web",
    description:
      "Partner white-label untuk agency yang butuh bantuan website development, landing page, technical SEO, CMS, dan automation implementation.",
  },
};

const data = {
  eyebrow: "Agency Subcontract",
  h1: "Partner build yang rapi untuk agency yang butuh delivery cepat dan reliable.",
  subheadline:
    "Nggawe Web membantu creative agency, marketing agency, branding studio, dan SEO agency mengeksekusi website, landing page, technical SEO, dan automation secara white-label.",
  primaryCta: { label: "Bahas Project White-Label", href: whatsappHref },
  secondaryCta: { label: "Lihat Capability", href: "/portfolio" },
  problems: [
    { title: "Tim dev overload", body: "Project menumpuk tapi kapasitas tim development terbatas." },
    { title: "Butuh skill spesifik", body: "Client butuh technical SEO, automation, atau CMS yang tim internal belum kuasai." },
    { title: "Deadline ketat", body: "Client minta cepat, tapi hiring freelancer berisiko kualitas tidak konsisten." },
    { title: "Ingin expand tanpa hire", body: "Mau ambil lebih banyak project tanpa overhead karyawan tetap." },
    { title: "Komunikasi rumit", body: "Freelancer sering hilang atau komunikasi tidak profesional." },
    { title: "Perlu partner jangka panjang", body: "Butuh partner reliable yang bisa diandalkan untuk banyak project." },
  ],
  valueProp: {
    heading: "Kamu fokus ke client dan strategy. Build bisa kami bantu di belakang layar.",
    body: "Kami bisa masuk sebagai partner teknis untuk membantu delivery project tanpa mengganggu relasi agency dengan client. Komunikasi white-label, NDA ready.",
  },
  deliverables: [
    "Landing page & website build",
    "Full website development",
    "CMS setup & customization",
    "Technical SEO implementation",
    "Performance optimization",
    "Bug fixing & maintenance",
    "Automation integration",
    "White-label communication",
    "NDA available",
  ],
  processSteps: [
    { title: "Brief", body: "Terima brief dari agency: scope, deadline, stack, dan requirement." },
    { title: "Estimate", body: "Kasih estimasi waktu dan biaya yang realistis." },
    { title: "Build", body: "Eksekusi project dengan komunikasi rutin ke agency." },
    { title: "Deliver", body: "Handover ke agency, siap disampaikan ke client." },
  ],
  portfolioItems: [
    { name: "Monev.app", description: "Full-stack SaaS app dengan kompleksitas tinggi." },
    { name: "Contenly.app", description: "Platform content/AI dengan integrasi backend." },
    { name: "Cubiqlo", description: "Website brand dengan design system modern." },
  ],
  faqs: [
    { question: "Apakah bisa kerja white-label?", answer: "Ya. Semua komunikasi dan deliverable bisa atas nama agency kamu. NDA tersedia." },
    { question: "Stack apa yang dikuasai?", answer: "Next.js, React, TypeScript, Tailwind, Sanity, Payload, PostgreSQL, Supabase, n8n, dan berbagai tools modern." },
    { question: "Bagaimana cara kerjanya?", answer: "Agency kasih brief → kami kasih estimate → build → handover. Komunikasi bisa via chat, email, atau project management tool." },
    { question: "Berapa biaya subcontract?", answer: "Tergantung scope. Kami kasih estimate per project atau retainer bulanan untuk ongoing support." },
  ],
  finalCta: {
    heading: "Butuh partner build yang reliable untuk agency kamu?",
    body: "Ceritakan kebutuhan project kamu. Kami bantu eksekusi di belakang layar dengan kualitas dan komunikasi yang profesional.",
  },
};

export default function AgencySubcontractPage() {
  return <ServicePage data={data} />;
}
