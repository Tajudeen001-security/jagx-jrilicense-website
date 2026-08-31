import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Mobility",
  description: "Software-defined vehicles with secure OTA. Designed by JagX AI.",
};

export default function MobilityPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">05 · Next-gen cars</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Mobility</h1>
          <p className="prose-body text-lg mb-4">Vehicles as software platforms: signed over-the-air updates, autonomy that can improve over time, and cabin systems that connect to JagX AI and Connect.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80" alt="Electric vehicle" width={900} height={675} /></div>
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80" alt="Car interior tech" width={900} height={675} /></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-8 prose-body">
          <div><h3 className="text-white text-base mb-2">In Africa</h3><p>Road conditions and connectivity differ from highway-centric markets. Software that can be updated securely matters when a physical recall is slow. Assist features that degrade gracefully offline are more useful than features that only work on perfect maps.</p></div>
          <div><h3 className="text-white text-base mb-2">Worldwide</h3><p>Every market needs verifiable OTA and a security model that assumes the car is a network endpoint carrying people.</p></div>
          <div><h3 className="text-white text-base mb-2">Direction</h3><p>Software-defined architecture first; shared AI and identity with JagX OS so the same privacy story follows from phone to vehicle.</p></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1549317336-206569e8475c?w=600&q=80" alt="Car on road" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" alt="Vehicle" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80" alt="Automotive" width={600} height={600} /></div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/devices" className="text-[#8a8a8a] hover:text-white">Next: Devices →</Link>
          <Link href="/silicon" className="text-[#8a8a8a] hover:text-white">← Silicon</Link>
        </div>
      </section>
    </PageShell>
  );
}
