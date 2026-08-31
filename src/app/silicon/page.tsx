import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Silicon",
  description: "JagX chip family — 10 lines. Designed by JagX AI.",
};

const CHIPS = [
  { code: "JX-NPU1", name: "Neural Processing Unit", use: "On-device inference for JagX AI models on phones and edge boards." },
  { code: "JX-SEC", name: "Secure Enclave", use: "Keys, biometrics, and sealed storage for Connect identity and payments." },
  { code: "JX-EDGE", name: "Edge Accelerator", use: "Low-power vision and sensor fusion for robots and cameras." },
  { code: "JX-MODEM", name: "Link Controller", use: "Efficient radio control tuned for costly or intermittent networks." },
  { code: "JX-ISP", name: "Imaging Pipeline", use: "Camera pipeline with optional on-device redaction before upload." },
  { code: "JX-AUTO", name: "Vehicle Compute", use: "Cabin and assist workloads for JagX Mobility platforms." },
  { code: "JX-PMIC", name: "Power Management", use: "Battery and rail control for long life on single-charge days." },
  { code: "JX-AUDIO", name: "Audio DSP", use: "Noise and call clarity without shipping every sample to the cloud." },
  { code: "JX-FAB", name: "Reference SoC", use: "Integration vehicle for OS bring-up and partner evaluation." },
  { code: "JX-LAB", name: "Research Silicon", use: "Experimental nodes for African talent pipeline and university labs." },
];

export default function SiliconPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">04 · Future chip company</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Silicon</h1>
          <p className="prose-body text-lg mb-4">A family of AI-oriented chips marked JagX — so phones, robots, and vehicles can run intelligence without always depending on a distant cloud.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 mb-10">
          <div className="img-frame rounded-xl aspect-square flex items-center justify-center p-10 bg-[#0d0d0d] anim-glow">
            <img src="/visual-chip.svg" alt="JagX chip" className="object-contain max-h-full anim-float" />
          </div>
          <div className="img-frame rounded-xl aspect-square flex items-center justify-center p-10 bg-[#0d0d0d]">
            <div className="text-center">
              <img src="/brand-mark.svg" alt="JagX" width={72} height={72} className="mx-auto mb-3 rounded-xl" />
              <p className="text-sm text-white">JagX die mark</p>
              <p className="text-xs text-[#5c5c5c] mt-1">Every package carries JX identity</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">Chip family</p>
          <h2 className="text-2xl font-normal tracking-tight mb-8">Ten lines of work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHIPS.map((c, i) => (
              <div key={c.code} className="chip-grid-item border border-[#1f1f1f] bg-[#111] rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center overflow-hidden">
                    <img src="/visual-chip.svg" alt="" className="w-10 h-10 object-contain anim-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#5c5c5c] tracking-wider">{c.code}</div>
                    <div className="text-sm text-white">{c.name}</div>
                  </div>
                </div>
                <p className="text-xs text-[#8a8a8a] leading-relaxed">{c.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-8 prose-body">
          <div><h3 className="text-white text-base mb-2">In Africa</h3><p>Edge chips cut bandwidth bills and build local skills in systems and silicon.</p></div>
          <div><h3 className="text-white text-base mb-2">Worldwide</h3><p>Robotics and offline products need efficient on-device compute with a clear trust chain.</p></div>
          <div><h3 className="text-white text-base mb-2">Direction</h3><p>Reference designs first, then tighter coupling with JagX OS, Devices, and Mobility.</p></div>
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
