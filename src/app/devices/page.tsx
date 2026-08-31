import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Devices",
  description: "Mobile and edge devices with privacy-first OS. Designed by JagX AI.",
};

export default function DevicesPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">06 · Mobile &amp; edge</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Devices</h1>
          <p className="prose-body text-lg mb-4">Phones and edge hardware that run JagX OS, talk to JagX Connect, and host on-device AI — designed so the primary computer in someone&apos;s life is not optimized against them.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80" alt="Smartphone" width={900} height={675} /></div>
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=900&q=80" alt="Mobile devices" width={900} height={675} /></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-8 prose-body">
          <div><h3 className="text-white text-base mb-2">In Africa</h3><p>The phone is often the only computer. Battery life, repairability, and data cost dominate. Devices aimed at long support cycles and efficient on-device AI reduce the need to stream everything.</p></div>
          <div><h3 className="text-white text-base mb-2">Worldwide</h3><p>Users everywhere want hardware that receives updates for years and exposes clear privacy controls.</p></div>
          <div><h3 className="text-white text-base mb-2">Direction</h3><p>Software and reference designs first; then hardware that ships JagX OS and Connect as first-class citizens.</p></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80" alt="Phone tech" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80" alt="Smartphone" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1512054502232-10a25f91c704?w=600&q=80" alt="People using mobile" width={600} height={600} /></div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/about" className="text-[#8a8a8a] hover:text-white">About →</Link>
          <Link href="/mobility" className="text-[#8a8a8a] hover:text-white">← Mobility</Link>
        </div>
      </section>
    </PageShell>
  );
}
