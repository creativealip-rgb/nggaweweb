export type PortfolioItem = {
  slug: string;
  name: string;
  industry: string;
  projectType: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  services: string[];
  liveUrl: string;
  year: string;
  featured: boolean;
  screenshot: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "cubiqlo",
    name: "Cubiqlo",
    industry: "Brand / E-commerce",
    projectType: "Website",
    summary: "Website brand dengan tampilan modern, responsive, dan fokus pada pengalaman pengguna yang rapi. Loading < 1 detik, SEO score 95+.",
    problem: "Bisnis butuh website brand yang terlihat profesional, cepat, dan bisa showcase produk dengan baik tanpa template generik.",
    solution: "Custom design dengan layout modern, responsive di semua device, dan navigasi yang intuitif. Fokus pada visual product dan UX yang clean.",
    features: ["Custom design", "Responsive layout", "Product showcase", "Fast loading", "SEO basic setup", "Contact form"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    services: ["Website Development"],
    liveUrl: "https://cubiqlo.com",
    year: "2025",
    featured: true,
    screenshot: "/screenshots/cubiqlo.svg",
  },
  {
    slug: "monev-app",
    name: "Monev.app",
    industry: "FinTech / SaaS",
    projectType: "Web Application",
    summary: "Platform monitoring keuangan dengan dashboard interaktif, transaction tracking, dan automation. 500+ transaksi/bulan.",
    problem: "User butuh platform untuk monitoring keuangan pribadi dengan fitur lengkap: tracking, reporting, automation, dan visualisasi data.",
    solution: "Full-stack web app dengan dashboard interaktif, transaction tracking, analytics, notification system, dan workflow automation.",
    features: ["Dashboard analytics", "Transaction tracking", "Category management", "Budget planning", "Notification system", "Automation workflows", "PWA support"],
    techStack: ["Next.js", "TypeScript", "SQLite", "Drizzle ORM", "Tailwind CSS", "next-auth"],
    services: ["Website Development", "Business Automation"],
    liveUrl: "https://monev.app",
    year: "2025",
    featured: true,
    screenshot: "/screenshots/monev-app.svg",
  },
  {
    slug: "contenly-app",
    name: "Contenly.app",
    industry: "AI / Content Platform",
    projectType: "Web Application",
    summary: "Platform content dan AI dengan product experience, user flow, dan sistem aplikasi yang scalable. 10x faster content production.",
    problem: "Bisnis butuh platform content yang bisa bantu produksi konten lebih cepat dengan bantuan AI, tanpa harus pakai banyak tools terpisah.",
    solution: "Platform terintegrasi dengan AI content generation, video studio, asset management, dan workflow produksi konten dalam satu dashboard.",
    features: ["AI content generation", "Video studio", "Asset management", "Team collaboration", "Analytics dashboard", "API integration"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AI APIs"],
    services: ["Website Development", "Business Automation"],
    liveUrl: "https://contenly.app",
    year: "2025",
    featured: true,
    screenshot: "/screenshots/contenly-app.svg",
  },
  {
    slug: "ganesha-travel",
    name: "Ganesha Travel",
    industry: "Travel / Tourism",
    projectType: "Website",
    summary: "Website travel bilingual (ID/EN) dengan tour catalog, booking flow, dan SEO lokal. Inquiry naik 3x lipat setelah launch.",
    problem: "Bisnis travel butuh website yang bisa bangun trust, tampilkan paket wisata dengan jelas, dan permudah calon customer untuk inquiry.",
    solution: "Website bilingual (ID/EN) dengan tour catalog, booking request flow, blog, dan centralized contact CTA. SEO-optimized untuk pencarian lokal.",
    features: ["Bilingual ID/EN", "Tour catalog", "Booking request flow", "Blog", "SEO local optimization", "WhatsApp integration", "Gallery"],
    techStack: ["WordPress", "Custom Theme", "PHP"],
    services: ["Website Development", "SEO Optimization"],
    liveUrl: "https://ganeshatravel.com",
    year: "2025",
    featured: false,
    screenshot: "/screenshots/ganesha-travel.svg",
  },
  {
    slug: "whale-dive-centre",
    name: "Whale Dive Centre",
    industry: "Tourism / Diving",
    projectType: "Website",
    summary: "Website tourism dan diving centre dengan visual kuat, gallery, trip schedule, dan CTA strategis. Booking inquiry naik 3x lipat.",
    problem: "Diving centre butuh website yang bisa tampilkan keindahan dive spots, bangun trust, dan konversi visitor jadi booking.",
    solution: "Website dengan hero visual yang kuat, gallery, trip schedule, testimonials, dan CTA yang strategis. SEO setup untuk pencarian lokal.",
    features: ["Hero visual", "Gallery", "Trip schedule", "Testimonials", "Blog", "SEO setup", "Contact CTA"],
    techStack: ["WordPress", "Custom Theme", "PHP"],
    services: ["Website Development", "SEO Optimization"],
    liveUrl: "https://whaledivecentre.com",
    year: "2025",
    featured: false,
    screenshot: "/screenshots/whale-dive-centre.svg",
  },
];
