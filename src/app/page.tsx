import Link from "next/link";
import PageShell from "@/components/PageShell";

const PRODUCTS = [
  {
    href: "/ai",
    title: "JagX AI",
    note: "Multi-agent intelligence that plans, codes, and reviews without babysitting every file.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    href: "/connect",
    title: "JagX Connect",
    note: "A social network built for trust — privacy defaults that fit Africa and scale worldwide.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    href: "/os",
    title: "JagX OS",
    note: "An operating layer for phones and edge devices that puts privacy and on-device AI first.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    href: "/silicon",
    title: "JagX Silicon",
    note: "AI-first chips for the edge — so intelligence does not always depend on a distant cloud.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    href: "/mobility",
    title: "JagX Mobility",
    note: "Software-defined vehicles with secure updates and autonomy designed for real roads.",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
  },
  {
    href: "/devices",
    title: "JagX Devices",
    note: "Phones and edge hardware that respect the user and integrate with Connect and AI.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Designed by JagX AI · Created by JagX & JRILICENSE</p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-normal tracking-tight leading-[1.15] mb-8">
            Tools people in Africa
            <br />
            and the world can
            <br />
            actually depend on.
          </h1>
          <p className="prose-body max-w-xl mb-6">
            Most platforms that shape daily life here were designed somewhere
            else, for different networks, different risk profiles, and different
            incentives. JagX & JRILICENSE builds AI, a secure social layer,
            an operating system, silicon, vehicles, and devices with those
            constraints in mind — and with global reach as the destination, not
            the starting assumption.
          </p>
          <p className="prose-body max-w-xl mb-10">
            The direction is simple: software and hardware that work when
            connectivity is expensive, that treat privacy as a default, and that
            leave room for local builders instead of locking them out.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex px-5 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[#e8e8e8] transition-colors"
            >
              About the mission
            </Link>
            <Link
              href="/ai"
              className="inline-flex px-5 py-2.5 text-sm border border-[#333] rounded-full hover:border-[#666] transition-colors"
            >
              Explore JagX AI
            </Link>
          </div>
        </div>
      </section>

      <hr className="divider max-w-6xl mx-auto" />

      <section className="py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">Products</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-12 max-w-xl">
            Six layers of the same system — software, social, OS, silicon,
            mobility, devices.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block border border-[#1f1f1f] bg-[#111] rounded-xl overflow-hidden hover:border-[#333] transition-colors"
              >
                <div className="img-frame aspect-[16/10]">
                  <img src={p.img} alt={p.title} width={800} height={500} />
                </div>
                <div className="p-5">
                  <div className="text-sm font-medium mb-2 group-hover:text-white">{p.title}</div>
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
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6">
            Help for people, not only for dashboards
          </h2>
          <div className="prose-body space-y-5">
            <p>
              In many African cities and towns, mobile is the computer. Data is
              paid per megabyte. Trust online is fragile because scams, account
              takeovers, and opaque moderation are common. Tools that assume
              always-on broadband and Western regulatory norms fail quietly —
              until the bill, the outage, or the breach.
            </p>
            <p>
              JagX products are aimed at that reality: AI that can run and assist
              without shipping every prompt abroad; a social network with
              stronger privacy defaults; an OS that keeps more work on the
              device; silicon and devices that make edge intelligence practical;
              mobility software that can be updated securely. The same stack is
              useful in Lagos, Nairobi, London, or São Paulo — because reliability
              and dignity are not regional preferences.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-block mt-8 text-sm text-[#8a8a8a] hover:text-white border-b border-[#333] pb-0.5"
          >
            Read the full story →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
