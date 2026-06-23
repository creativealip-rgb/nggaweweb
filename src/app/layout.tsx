import type { Metadata } from "next";
import { Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { Analytics } from "@/components/analytics/analytics-provider";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable} ${geistMono.variable} antialiased`}>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
