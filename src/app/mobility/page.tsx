import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Mobility",
  description: "JagX software-defined vehicles. Designed by JagX AI.",
};

export default function MobilityPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">05 · Next-gen cars</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Mobility</h1>
          <p className="prose-body text-lg mb-4">Software-defined vehicles with signed OTA and cabin AI — badged JagX.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="img-frame rounded-xl aspect-video anim-glow flex items-center justify-center p-6 bg-[#0d0d0d]">
            <img src="/visual-car.svg" alt="JagX Mobility" className="object-contain max-h-full anim-float" />
          </div>
          <div className="img-frame rounded-xl aspect-video flex items-center justify-center p-8 bg-[#0d0d0d]">
            <div className="text-center">
              <img src="/brand-mark.svg" alt="JagX" width={56} height={56} className="mx-auto mb-3 rounded-xl" />
              <p className="text-sm text-white">JagX Mobility</p>
              <p className="text-xs text-[#5c5c5c] mt-1">Secure OTA · Cabin AI · Software-defined</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p><strong className="text-white font-normal">In Africa:</strong> Secure updates when physical recalls are slow. <strong className="text-white font-normal">Worldwide:</strong> Car as secure network endpoint. <strong className="text-white font-normal">Direction:</strong> Shared AI with JagX OS.</p>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto"><Link href="/devices" className="text-sm text-[#8a8a8a] hover:text-white">Next: Devices →</Link></div>
      </section>
    </PageShell>
  );
}
