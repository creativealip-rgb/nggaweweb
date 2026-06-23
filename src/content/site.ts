export const siteConfig = {
  name: "Nggawe Web",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nggaweweb.com",
  description:
    "Nggawe Web membantu bisnis service, startup, UMKM, dan agency membuat website premium, SEO-ready, dan automation untuk menangkap lead lebih rapi.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6280000000000",
  email: "halo@nggaweweb.com",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Halo Nggawe Web, saya mau konsultasi soal Website/SEO/Automation.",
)}`;
