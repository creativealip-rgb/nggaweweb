"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

const briefSchema = z.object({
  name: z.string().min(2, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(8, "Nomor telepon wajib diisi"),
  preferredContact: z.enum(["whatsapp", "email", "call"]),
  companyName: z.string().min(1, "Nama bisnis wajib diisi"),
  businessType: z.string().min(1, "Pilih tipe bisnis"),
  currentWebsite: z.string().optional(),
  servicesNeeded: z.array(z.string()).min(1, "Pilih minimal 1 layanan"),
  projectGoal: z.string().min(10, "Jelaskan goal project minimal 10 karakter"),
  budgetRange: z.string().min(1, "Pilih range budget"),
  timeline: z.string().min(1, "Pilih timeline"),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

type BriefForm = z.infer<typeof briefSchema>;

const inputClass = "w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-base text-slate-900 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";
const labelClass = "mb-2 block text-sm font-semibold text-slate-600";
const errorClass = "mt-1 text-xs text-red-400";

export function BriefForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<BriefForm>({
    resolver: zodResolver(briefSchema),
    defaultValues: { preferredContact: "whatsapp", servicesNeeded: [], honeypot: "" },
  });

  const servicesNeeded = useWatch({ control, name: "servicesNeeded" }) || [];
  const preferredContact = useWatch({ control, name: "preferredContact" });

  const toggleService = (service: string) => {
    const next = servicesNeeded.includes(service)
      ? servicesNeeded.filter((s) => s !== service)
      : [...servicesNeeded, service];
    setValue("servicesNeeded", next, { shouldValidate: true });
  };

  const onSubmit = async (data: BriefForm) => {
    if (data.honeypot) return;
    setSubmitError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "brief_project", sourcePage: "/brief-project" }),
      });
      if (!res.ok) throw new Error("Gagal mengirim");
      setSubmitted(true);
      analytics.formSubmit("brief_project");
    } catch {
      setSubmitError("Gagal mengirim. Coba lagi atau hubungi via WhatsApp.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-emerald-700">Brief berhasil dikirim!</h3>
        <p className="mt-3 text-slate-600">Kami akan review dan menghubungi kamu maksimal 1x24 jam.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-bold text-slate-900">Kontak</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelClass}>Nama *</label>
            <input className={inputClass} placeholder="Nama kamu" {...register("name")} />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input className={inputClass} type="email" placeholder="email@bisnis.com" {...register("email")} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelClass}>WhatsApp / Telepon *</label>
            <input className={inputClass} placeholder="08xxxxxxxxxx" {...register("phone")} />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Kontak dipilih</label>
            <div className="flex gap-3">
              {(["whatsapp", "email", "call"] as const).map((v) => (
                <button
                  type="button"
                  key={v}
                  onClick={() => setValue("preferredContact", v)}
                  className={cn(
                    "flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition",
                    preferredContact === v
                      ? "border-cyan-400/40 bg-cyan-400/10 text-blue-700"
                      : "border-slate-200 text-slate-400 hover:border-slate-200"
                  )}
                >
                  {v === "whatsapp" ? "WhatsApp" : v === "email" ? "Email" : "Call"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-bold text-slate-900">Bisnis</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelClass}>Nama Bisnis *</label>
            <input className={inputClass} placeholder="PT / brand / usaha" {...register("companyName")} />
            {errors.companyName && <p className={errorClass}>{errors.companyName.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Tipe Bisnis *</label>
            <select className={inputClass} {...register("businessType")}>
              <option value="">Pilih tipe bisnis</option>
              <option value="service_business">Bisnis Service</option>
              <option value="startup">Startup</option>
              <option value="umkm">UMKM</option>
              <option value="agency">Agency</option>
              <option value="personal_brand">Personal Brand</option>
              <option value="other">Lainnya</option>
            </select>
            {errors.businessType && <p className={errorClass}>{errors.businessType.message}</p>}
          </div>
        </div>
        <div>
          <label className={labelClass}>Website Saat Ini (opsional)</label>
          <input className={inputClass} placeholder="https://website-kamu.com" {...register("currentWebsite")} />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-bold text-slate-900">Layanan Dibutuhkan *</legend>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ["website_development", "Website Development"],
            ["seo", "SEO Optimization"],
            ["business_automation", "Business Automation"],
            ["website_redesign", "Website Redesign"],
            ["landing_page", "Landing Page"],
            ["cms_blog", "CMS / Blog"],
            ["agency_white_label", "Agency White-Label"],
            ["maintenance", "Maintenance"],
          ].map(([value, label]) => (
            <button
              type="button"
              key={value}
              onClick={() => toggleService(value)}
              className={cn(
                "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                servicesNeeded.includes(value)
                  ? "border-cyan-400/40 bg-cyan-400/10 text-blue-700"
                  : "border-slate-200 text-slate-400 hover:border-slate-200"
              )}
            >
              {label}
            </button>
          ))}
        </div>
        {errors.servicesNeeded && <p className={errorClass}>{errors.servicesNeeded.message}</p>}
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-lg font-bold text-slate-900">Detail Project</legend>
        <div>
          <label className={labelClass}>Goal Project *</label>
          <textarea className={cn(inputClass, "min-h-[100px] resize-y")} placeholder="Jelaskan goal utama project kamu..." {...register("projectGoal")} />
          {errors.projectGoal && <p className={errorClass}>{errors.projectGoal.message}</p>}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelClass}>Budget Range *</label>
            <select className={inputClass} {...register("budgetRange")}>
              <option value="">Pilih budget</option>
              <option value="below_3_5m">Di bawah Rp3,5 juta</option>
              <option value="3_5m_8_5m">Rp3,5 juta – Rp8,5 juta</option>
              <option value="8_5m_15m">Rp8,5 juta – Rp15 juta</option>
              <option value="15m_30m">Rp15 juta – Rp30 juta</option>
              <option value="30m_plus">Rp30 juta+</option>
              <option value="not_sure">Belum yakin</option>
            </select>
            {errors.budgetRange && <p className={errorClass}>{errors.budgetRange.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Timeline *</label>
            <select className={inputClass} {...register("timeline")}>
              <option value="">Pilih timeline</option>
              <option value="urgent_1_week">Urgent (&lt; 1 minggu)</option>
              <option value="this_month">Bulan ini</option>
              <option value="1_3_months">1–3 bulan</option>
              <option value="flexible">Fleksibel</option>
              <option value="not_sure">Belum yakin</option>
            </select>
            {errors.timeline && <p className={errorClass}>{errors.timeline.message}</p>}
          </div>
        </div>
        <div>
          <label className={labelClass}>Catatan Tambahan (opsional)</label>
          <textarea className={cn(inputClass, "min-h-[80px] resize-y")} placeholder="Referensi, link, atau detail tambahan..." {...register("message")} />
        </div>
      </fieldset>

      {submitError && <p className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-[0_16px_44px_rgba(37,99,235,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(37,99,235,0.42)] disabled:opacity-50"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Brief Project"}
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">
        Data kamu aman. Baca <a href="/privacy-policy" className="underline hover:text-blue-600">Kebijakan Privasi</a> kami.
      </p>
    </form>
  );
}
