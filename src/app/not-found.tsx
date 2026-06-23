import Link from "next/link";
import { LinkButton } from "@/components/ui/button";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center py-32">
        <div className="container-shell max-w-2xl text-center space-y-8">
          <p className="font-mono text-6xl font-black text-gradient">404</p>
          <h1 className="font-heading text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Halaman tidak ditemukan
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Halaman yang kamu cari tidak ada atau sudah dipindahkan.
          </p>
          <div className="flex justify-center gap-3">
            <LinkButton href="/">Kembali ke Home</LinkButton>
            <LinkButton href="/kontak" variant="secondary">Hubungi Kami</LinkButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
