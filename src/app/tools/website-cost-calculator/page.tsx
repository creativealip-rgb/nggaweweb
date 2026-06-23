import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WebsiteCostCalculator } from "@/components/calculators/website-cost-calculator";

export const metadata: Metadata = {
  title: "Kalkulator Biaya Website — Nggawe Web",
  description:
    "Gunakan kalkulator biaya website untuk memperkirakan budget pembuatan website berdasarkan tipe, jumlah halaman, fitur, SEO, dan automation.",
};

export default function WebsiteCostCalculatorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Tools</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
              Hitung estimasi biaya website kamu.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Pilih tipe website, jumlah halaman, dan fitur yang dibutuhkan. Kamu langsung dapat estimasi range biaya.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell">
            <WebsiteCostCalculator />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
