import Link from "next/link";
import PageShell from "@/components/PageShell";

const PRODUCTS = [
  { href: "/ai", title: "JagX AI", note: "Multi-agent intelligence that plans, codes, and reviews without babysitting every file.", img: "/visual-robot.svg" },
  { href: "/connect", title: "JagX Connect", note: "A social network built for trust — privacy defaults that fit Africa and scale worldwide.", img: "/brand-mark.svg" },
  { href: "/os", title: "JagX OS", note: "Operating layer for phones and edge — privacy and on-device AI first. Branded JagX, not generic Android.", img: "/visual-os.svg" },
  { href: "/silicon", title: "JagX Silicon", note: "AI-first chips for the edge — so intelligence does not always depend on a distant cloud.", img: "/visual-chip.svg" },
  { href: "/mobility", title: "JagX Mobility", note: "Software-defined vehicles with secure updates and autonomy designed for real roads.", img: "/visual-car.svg" },
  { href: "/devices", title: "JagX Devices", note: "Phones and edge hardware running JagX OS — our brand on the glass, not someone else's.", img: "/visual-os.svg" },
];

export default function Home() {
  return (
    <PageShell>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src="/brand-mark.svg" alt="JagX" width={40} height={40} className="rounded-xl anim-pulse" />
            <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={40} height={40} className="rounded-full" />
          </div>
          <p className="eyebrow mb-6">Designed by JagX AI · Created by JagX & JRILICENSE</p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-normal tracking-tight leading-[1.15] mb-8">
            Tools people in Africa<br />and the world can<br />actually depend on.
          </h1>
          <p className="prose-body max-w-xl mb-6">
            JagX & JRILICENSE builds AI, a secure social layer, JagX OS, silicon, vehicles, and devices — designed for African constraints and global ambition. Every screen and badge carries our mark — not a generic phone skin.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex px-5 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[#e8e8e8] transition-colors">About the mission</Link>
            <Link href="/os" className="inline-flex px-5 py-2.5 text-sm border border-[#333] rounded-full hover:border-[#666] transition-colors">See JagX OS</Link>
          </div>
        </div>
      </section>
      <hr className="divider max-w-6xl mx-auto" />
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">Products</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-12 max-w-xl">Six layers — software, social, OS, silicon, mobility, devices.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <Link key={p.href} href={p.href} className="group block border border-[#1f1f1f] bg-[#111] rounded-xl overflow-hidden hover:border-[#333] transition-colors anim-glow">
                <div className="img-frame aspect-[16/10] bg-[#0d0d0d] flex items-center justify-center p-6">
                  <img src={p.img} alt={p.title} className="object-contain max-h-full anim-float" style={{ animationDelay: `${i * 0.3}s` }} />
                </div>
                <div className="p-5">
                  <div className="text-sm font-medium mb-2">{p.title}</div>
                  <p className="text-xs text-[#8a8a8a] leading-relaxed">{p.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-5 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Why this matters</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6">Help for people, not only for dashboards</h2>
          <div className="prose-body space-y-5">
            <p>In many African cities, mobile is the computer. Data is paid per megabyte. JagX products aim at that reality: AI and OS that can work on-device, stronger privacy defaults, silicon and devices that carry our brand — useful in Lagos, Nairobi, London, or São Paulo.</p>
          </div>
          <Link href="/about" className="inline-block mt-8 text-sm text-[#8a8a8a] hover:text-white border-b border-[#333] pb-0.5">Read the full story →</Link>
        </div>
      </section>
    </PageShell>
  );
}
