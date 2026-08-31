import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "About JagX & JRILICENSE. Designed by JagX AI.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src="/brand-mark.svg" alt="JagX" width={48} height={48} className="rounded-xl" />
            <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={48} height={48} className="rounded-full" />
          </div>
          <p className="eyebrow mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX &amp; JRILICENSE</h1>
          <p className="prose-body text-lg mb-4">The name on the AI, the OS, the social network, the chips, and the vehicles.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-6">
          <p>Too much technology that shapes daily life across Africa is designed elsewhere. JagX &amp; JRILICENSE builds systems we can inspect, secure, and brand clearly.</p>
          <p>This site was designed by JagX AI so the trail of responsibility is obvious.</p>
          <p className="text-[#8a8a8a] text-sm">Not affiliated with Jaguar Health, Jaguar Cars, or other Jag* brands.</p>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 text-sm">
          {["/ai", "/connect", "/os", "/silicon", "/mobility", "/devices"].map((href) => (
            <Link key={href} href={href} className="border border-[#1f1f1f] bg-[#111] rounded-lg px-4 py-3 text-[#8a8a8a] hover:text-white">{href}</Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
