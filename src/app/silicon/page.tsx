import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Silicon",
  description: "Future chip company — AI-first edge silicon. Designed by JagX AI.",
};

export default function SiliconPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">04 · Future chip company</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Silicon</h1>
          <p className="prose-body text-lg mb-4">AI-oriented silicon for the edge: neural processing, low power, and secure enclaves — so phones, robots, and vehicles can think without streaming every frame to a distant cloud.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" alt="Circuit board" width={900} height={675} /></div>
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=900&q=80" alt="Semiconductors" width={900} height={675} /></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p>Software sits on hardware. If regions only consume chips designed elsewhere, they inherit other people&apos;s roadmaps and security assumptions. JagX Silicon is a long-horizon program: NPUs for on-device inference, power budgets that fit phones and vehicles, and hardware security that makes enclaves practical.</p>
          <p>This is talent, IP, partnerships, and research sequenced over years — so JagX OS and JagX AI can eventually run efficiently on silicon we understand end to end.</p>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-8 prose-body">
          <div><h3 className="text-white text-base mb-2">In Africa</h3><p>Edge intelligence reduces dependence on expensive international bandwidth for basic AI features. Local capacity in silicon and systems design builds skills that stay in the region.</p></div>
          <div><h3 className="text-white text-base mb-2">Worldwide</h3><p>Privacy-sensitive industries, robotics, and offline-first products need efficient on-device compute. Custom or co-designed silicon is how that becomes affordable and trustworthy at scale.</p></div>
          <div><h3 className="text-white text-base mb-2">Direction</h3><p>Prototypes and partnerships first; then tighter integration with JagX Devices and Mobility.</p></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" alt="Lab" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" alt="Research" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1518771330411-5a3e3d1b3c3c?w=600&q=80" alt="Microelectronics" width={600} height={600} /></div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/mobility" className="text-[#8a8a8a] hover:text-white">Next: Mobility →</Link>
          <Link href="/os" className="text-[#8a8a8a] hover:text-white">← JagX OS</Link>
        </div>
      </section>
    </PageShell>
  );
}
