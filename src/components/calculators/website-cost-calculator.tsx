"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/content/site";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";

type Option = { value: string; label: string; price: number };

const websiteTypes: Option[] = [
  { value: "landing", label: "Landing Page", price: 3500000 },
  { value: "company", label: "Company Profile", price: 5000000 },
  { value: "service", label: "Service Business", price: 8500000 },
  { value: "startup", label: "Startup / SaaS", price: 15000000 },
  { value: "ecommerce", label: "E-commerce", price: 20000000 },
];

const pageCounts: Option[] = [
  { value: "1", label: "1 halaman", price: 0 },
  { value: "2-5", label: "2–5 halaman", price: 2000000 },
  { value: "6-10", label: "6–10 halaman", price: 5000000 },
  { value: "10+", label: "10+ halaman", price: 10000000 },
];

const features: Option[] = [
  { value: "cms", label: "CMS (blog/portfolio)", price: 3000000 },
  { value: "seo", label: "SEO Setup", price: 3000000 },
  { value: "automation", label: "Automation", price: 5000000 },
  { value: "booking", label: "Booking System", price: 4000000 },
  { value: "multilang", label: "Multi-language", price: 4000000 },
  { value: "custom", label: "Custom Feature", price: 5000000 },
];

function formatRp(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export function WebsiteCostCalculator() {
  const [websiteType, setWebsiteType] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const basePrice = websiteTypes.find((t) => t.value === websiteType)?.price ?? 0;
  const pagePrice = pageCounts.find((p) => p.value === pageCount)?.price ?? 0;
  const featurePrice = features
    .filter((f) => selectedFeatures.includes(f.value))
    .reduce((sum, f) => sum + f.price, 0);

  const total = basePrice + pagePrice + featurePrice;
  const totalMin = Math.round(total * 0.85);
  const totalMax = Math.round(total * 1.15);

  const toggleFeature = (value: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const step = !websiteType ? 0 : !pageCount ? 1 : 2;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-bold text-slate-900">1. Tipe Website</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {websiteTypes.map((t) => (
              <button
                key={t.value}
                onClick={() => setWebsiteType(t.value)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                  websiteType === t.value
                    ? "border-cyan-400/40 bg-cyan-400/10 text-blue-700"
                    : "border-slate-200 text-slate-400 hover:border-slate-200"
                )}
              >
                {t.label}
                <span className="mt-1 block text-xs text-slate-400">Mulai {formatRp(t.price)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        {websiteType && (
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900">2. Jumlah Halaman</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {pageCounts.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPageCount(p.value)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                    pageCount === p.value
                      ? "border-cyan-400/40 bg-cyan-400/10 text-blue-700"
                      : "border-slate-200 text-slate-400 hover:border-slate-200"
                  )}
                >
                  {p.label}
                  {p.price > 0 && <span className="mt-1 block text-xs text-slate-400">+{formatRp(p.price)}</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {pageCount && (
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900">3. Fitur Tambahan</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <button
                  key={f.value}
                  onClick={() => toggleFeature(f.value)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                    selectedFeatures.includes(f.value)
                      ? "border-cyan-400/40 bg-cyan-400/10 text-blue-700"
                      : "border-slate-200 text-slate-400 hover:border-slate-200"
                  )}
                >
                  {f.label}
                  <span className="mt-1 block text-xs text-slate-400">+{formatRp(f.price)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Estimate Card */}
      <div className="sticky top-28 self-start rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="text-blue-600" size={24} />
          <h3 className="font-heading text-lg font-bold text-slate-900">Estimasi Biaya</h3>
        </div>

        {total > 0 ? (
          <div className="space-y-6">
            <div className="space-y-3">
              {websiteType && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{websiteTypes.find((t) => t.value === websiteType)?.label}</span>
                  <span className="text-slate-900">{formatRp(basePrice)}</span>
                </div>
              )}
              {pageCount && pagePrice > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{pageCounts.find((p) => p.value === pageCount)?.label}</span>
                  <span className="text-slate-900">+{formatRp(pagePrice)}</span>
                </div>
              )}
              {selectedFeatures.map((fv) => {
                const feat = features.find((f) => f.value === fv);
                return feat ? (
                  <div className="flex justify-between text-sm" key={fv}>
                    <span className="text-slate-400">{feat.label}</span>
                    <span className="text-slate-900">+{formatRp(feat.price)}</span>
                  </div>
                ) : null;
              })}
            </div>

            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm text-slate-400">Estimasi range:</p>
              <p className="mt-1 font-heading text-2xl font-black text-gradient">
                {formatRp(totalMin)} – {formatRp(totalMax)}
              </p>
            </div>

            <div className="space-y-3">
              <LinkButton className="w-full" href={whatsappHref}>
                Konsultasi Gratis <ArrowRight size={16} />
              </LinkButton>
              <LinkButton className="w-full" href="/brief-project" variant="secondary">
                Isi Brief Project
              </LinkButton>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-slate-400">Pilih tipe website untuk mulai hitung estimasi.</p>
          </div>
        )}
      </div>
    </div>
  );
}
