import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX OS",
  description: "JagX OS — privacy-first OS with on-device AI. Designed by JagX AI.",
};

export default function OSPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">03 · Operating system</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX OS</h1>
          <p className="prose-body text-lg mb-4">Our OS for phones and edge. Privacy by default, on-device JagX AI, Connect built in — JagX &amp; JRILICENSE on the boot screen.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="img-frame rounded-xl aspect-[3/4] anim-glow flex items-center justify-center p-6 bg-[#0d0d0d]">
            <img src="/visual-os.svg" alt="JagX OS interface" className="object-contain max-h-full anim-float" />
          </div>
          <div className="space-y-4 flex flex-col justify-center">
            {["Privacy by default — explicit permissions, minimal background collection.","On-device JagX AI — less data cost, more offline use.","Connect-native messaging without ad-SDK maze.","Long support — security updates for years.","Clear controls for network, storage, and AI."].map((t) => (
              <div key={t} className="border border-[#1f1f1f] bg-[#111] rounded-xl p-5">
                <p className="text-xs text-[#8a8a8a] leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/silicon" className="text-[#8a8a8a] hover:text-white">Next: Silicon →</Link>
          <Link href="/devices" className="text-[#8a8a8a] hover:text-white">Devices →</Link>
        </div>
      </section>
    </PageShell>
  );
}
