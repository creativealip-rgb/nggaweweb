import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig, whatsappHref } from "@/content/site";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Nggawe Web — Konsultasi Website, SEO, Automation",
  description:
    "Hubungi Nggawe Web untuk konsultasi pembuatan website, SEO, automation, atau white-label web development project.",
};

export default function KontakPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Kontak</Badge>
            <h1 className="font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
              Hubungi Nggawe Web.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Punya pertanyaan atau mau mulai project? Hubungi kami lewat channel yang paling nyaman.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <MessageCircle className="mx-auto mb-4 text-cyan-300" size={32} />
              <h3 className="font-heading text-xl font-bold">WhatsApp</h3>
              <p className="mt-3 text-sm text-slate-400">Chat langsung untuk konsultasi cepat.</p>
              <LinkButton className="mt-6" href={whatsappHref}>Chat WhatsApp</LinkButton>
            </Card>
            <Card className="text-center">
              <Mail className="mx-auto mb-4 text-cyan-300" size={32} />
              <h3 className="font-heading text-xl font-bold">Email</h3>
              <p className="mt-3 text-sm text-slate-400">Kirim detail project via email.</p>
              <LinkButton className="mt-6" href={`mailto:${siteConfig.email}`} variant="secondary">Kirim Email</LinkButton>
            </Card>
            <Card className="text-center">
              <Phone className="mx-auto mb-4 text-cyan-300" size={32} />
              <h3 className="font-heading text-xl font-bold">Brief Project</h3>
              <p className="mt-3 text-sm text-slate-400">Isi form brief untuk project yang lebih terstruktur.</p>
              <LinkButton className="mt-6" href="/brief-project" variant="secondary">Isi Brief</LinkButton>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
