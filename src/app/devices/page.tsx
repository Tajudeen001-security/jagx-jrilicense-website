import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Devices",
  description: "JagX-branded phones running JagX OS. Designed by JagX AI.",
};

export default function DevicesPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">06 · Mobile &amp; edge</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Devices</h1>
          <p className="prose-body text-lg mb-4">Hardware that runs <strong className="text-white font-normal">JagX OS</strong> — not a skin over someone else&apos;s Android. Lock screen, app grid, and secure element all show JagX &amp; JRILICENSE.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="img-frame rounded-xl aspect-[3/4] anim-glow flex items-center justify-center p-8 bg-[#0d0d0d]">
            <img src="/visual-os.svg" alt="JagX OS on JagX Device" className="object-contain max-h-full anim-float" />
          </div>
          <div className="img-frame rounded-xl aspect-[3/4] flex items-center justify-center p-8 bg-[#0d0d0d]">
            <div className="text-center">
              <img src="/brand-mark.svg" alt="JagX" width={80} height={80} className="mx-auto mb-4 rounded-2xl anim-pulse" />
              <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={64} height={64} className="mx-auto mb-6 rounded-full" />
              <p className="text-sm text-[#8a8a8a]">Official marks on every device</p>
              <p className="text-xs text-[#5c5c5c] mt-2">JagX · JRILICENSE · JagX OS</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-8 prose-body">
          <div><h3 className="text-white text-base mb-2">Branded, not generic</h3><p>Screens show JagX OS, JagX AI, and Connect — not stock Android launcher icons from another brand.</p></div>
          <div><h3 className="text-white text-base mb-2">In Africa</h3><p>Long support cycles and on-device AI matter when the phone is the only computer.</p></div>
          <div><h3 className="text-white text-base mb-2">Worldwide</h3><p>Same OS, same security story, years of updates.</p></div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/about" className="text-[#8a8a8a] hover:text-white">About →</Link>
          <Link href="/os" className="text-[#8a8a8a] hover:text-white">JagX OS →</Link>
        </div>
      </section>
    </PageShell>
  );
}
