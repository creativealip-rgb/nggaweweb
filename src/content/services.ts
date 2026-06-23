import { Bot, Code2, Search } from "lucide-react";

export const services = [
  {
    title: "Website Development",
    href: "/jasa-pembuatan-website",
    description:
      "Website custom yang cepat, responsive, mudah dikelola, dan dirancang untuk membuat bisnis terlihat profesional.",
    bullets: ["Company profile", "Landing page", "Startup/SaaS", "CMS/blog"],
    icon: Code2,
  },
  {
    title: "SEO Optimization",
    href: "/jasa-seo",
    description:
      "Struktur SEO, keyword mapping, technical setup, dan konten awal agar website punya fondasi organic growth.",
    bullets: ["Technical SEO", "Local SEO", "Service page SEO", "Schema markup"],
    icon: Search,
  },
  {
    title: "Business Automation",
    href: "/jasa-automation",
    description:
      "Automation untuk merapikan lead, follow-up, notifikasi, data, dan workflow internal agar kerja manual berkurang.",
    bullets: ["Form automation", "n8n workflow", "Lead follow-up", "CRM/spreadsheet sync"],
    icon: Bot,
  },
];
