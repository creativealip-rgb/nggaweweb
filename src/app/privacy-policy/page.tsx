import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy — Nggawe Web",
  description:
    "Kebijakan privasi Nggawe Web terkait data kontak, brief project, analytics, dan penggunaan informasi dari website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Legal</Badge>
            <h1 className="font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell max-w-3xl space-y-10 text-slate-300">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Informasi yang Kami Kumpulkan</h2>
              <p className="leading-7">Kami mengumpulkan informasi yang kamu berikan secara langsung melalui form di website, termasuk nama, email, nomor telepon, nama bisnis, dan detail project.</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Penggunaan Informasi</h2>
              <p className="leading-7">Informasi yang dikumpulkan digunakan untuk:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Merespons inquiry dan brief project</li>
                <li>Memberikan rekomendasi layanan yang sesuai</li>
                <li>Mengirim update terkait project</li>
                <li>Meningkatkan kualitas layanan dan website</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Analytics</h2>
              <p className="leading-7">Website ini menggunakan Plausible Analytics dan/atau Google Analytics untuk memahami traffic dan perilaku pengunjung. Data analytics bersifat anonim dan tidak mengidentifikasi individu secara personal.</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Keamanan Data</h2>
              <p className="leading-7">Kami tidak menjual, menyewakan, atau membagikan data personal kamu ke pihak ketiga. Data hanya digunakan untuk keperluan komunikasi dan layanan terkait project.</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Hak Kamu</h2>
              <p className="leading-7">Kamu bisa meminta penghapusan data personal kamu kapan saja dengan menghubungi kami via email atau WhatsApp.</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Perubahan Kebijakan</h2>
              <p className="leading-7">Kebijakan privasi ini bisa diperbarui sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini.</p>
            </div>
            <p className="text-sm text-slate-500">Terakhir diperbarui: Juni 2026</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
