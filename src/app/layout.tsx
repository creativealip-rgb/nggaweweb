import type { Metadata } from "next";
import { Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { Analytics } from "@/components/analytics/analytics-provider";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { BackToTop } from "@/components/layout/back-to-top";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Nggawe Web — Jasa Website, SEO, dan Automation untuk Bisnis",
  description: siteConfig.description,
  openGraph: {
    title: "Nggawe Web — Jasa Website, SEO, dan Automation untuk Bisnis",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Nggawe Web",
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: `+${siteConfig.whatsappNumber}`,
  areaServed: "ID",
  serviceType: ["Website Development", "SEO Optimization", "Business Automation"],
  sameAs: [
    "https://instagram.com/nggaweweb",
    "https://linkedin.com/company/nggaweweb",
    "https://github.com/nggaweweb",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Nggawe Web Blog" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        {children}
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}
