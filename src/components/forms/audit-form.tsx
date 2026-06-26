"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

const auditSchema = z.object({
  name: z.string().min(2, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(8, "Nomor telepon wajib diisi"),
  website: z.string().url("URL tidak valid").min(1, "Website wajib diisi"),
  mainConcern: z.string().min(1, "Pilih kendala utama"),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

type AuditForm = z.infer<typeof auditSchema>;

const inputClass = "w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-base text-slate-900 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";
const labelClass = "mb-2 block text-sm font-semibold text-slate-600";
const errorClass = "mt-1 text-xs text-red-400";

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuditForm>({
    resolver: zodResolver(auditSchema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: AuditForm) => {
    if (data.honeypot) return;
    setSubmitError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "audit_request", sourcePage: "/audit-gratis" }),
      });
      if (!res.ok) throw new Error("Gagal mengirim");
      setSubmitted(true);
      analytics.formSubmit("audit_request");
    } catch {
      setSubmitError("Gagal mengirim. Coba lagi atau hubungi via WhatsApp.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-emerald-700">Request audit berhasil!</h3>
        <p className="mt-3 text-slate-600">Kami akan cek singkat website kamu dan follow-up hasil awalnya.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
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
          <label className={labelClass}>Website *</label>
          <input className={inputClass} placeholder="https://website-kamu.com" {...register("website")} />
          {errors.website && <p className={errorClass}>{errors.website.message}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass}>Kendala Utama *</label>
        <select className={inputClass} {...register("mainConcern")}>
          <option value="">Pilih kendala</option>
          <option value="tidak_muncul_google">Tidak muncul di Google</option>
          <option value="website_lambat">Website lambat</option>
          <option value="design_kurang_meyakinkan">Design kurang meyakinkan</option>
          <option value="lead_sedikit">Lead sedikit</option>
          <option value="seo_belum_jelas">SEO belum jelas</option>
          <option value="mau_redesign">Mau redesign</option>
          <option value="not_sure">Belum yakin</option>
        </select>
        {errors.mainConcern && <p className={errorClass}>{errors.mainConcern.message}</p>}
      </div>
      <div>
        <label className={labelClass}>Catatan (opsional)</label>
        <textarea className={cn(inputClass, "min-h-[80px] resize-y")} placeholder="Detail tambahan..." {...register("message")} />
      </div>
      {submitError && <p className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">{submitError}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-[0_16px_44px_rgba(37,99,235,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(37,99,235,0.42)] disabled:opacity-50"
      >
        {isSubmitting ? "Mengirim..." : "Minta Audit Gratis"}
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">
        Data kamu aman. Baca <a href="/privacy-policy" className="underline hover:text-blue-600">Kebijakan Privasi</a> kami.
      </p>
    </form>
  );
}
