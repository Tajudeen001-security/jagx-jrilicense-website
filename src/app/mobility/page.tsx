import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Mobility — Full vehicles by JagX & JRILICENSE",
  description:
    "JagX Horizon and JagX Courier — full vehicles built by JagX and JRILICENSE, not a parts-only programme. Service through 2045.",
};

const CARS = [
  {
    name: "JagX Horizon",
    role: "Flagship city EV",
    tagline:
      "Family and executive transport — full body, cabin, and software by JagX & JRILICENSE.",
    price: "From ₦48,000,000",
    priceNote:
      "Indicative launch band · final list price published closer to production",
    views: [
      { src: "/cars/horizon-front.svg", label: "Exterior — front" },
      { src: "/cars/horizon-rear.svg", label: "Exterior — rear" },
      { src: "/cars/horizon-interior.svg", label: "Interior — cabin" },
      {
        src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80",
        label: "On the road",
      },
      {
        src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80",
        label: "Detail",
      },
    ],
    points: [
      "JagX logo on the grille, rear badge, and steering boss — our brand, not a rebadged import.",
      "Full vehicle programme: body, chassis integration, cabin electronics, and signed OTA software.",
      "JagX OS Cabin for maps, privacy controls, and assist features designed for real African roads.",
      "Every authorised service action — including fasteners and wear parts — returns through JagX & JRILICENSE channels.",
    ],
  },
  {
    name: "JagX Courier",
    role: "Urban utility & fleet EV",
    tagline:
      "Cargo and last-mile work — built as a complete vehicle for African city logistics.",
    price: "From ₦32,000,000",
    priceNote: "Fleet pricing available · indicative band only",
    views: [
      { src: "/cars/courier-side.svg", label: "Exterior — side" },
      { src: "/cars/courier-rear.svg", label: "Exterior — rear / cargo" },
      { src: "/cars/courier-interior.svg", label: "Interior — fleet cabin" },
      {
        src: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=900&q=80",
        label: "Work vehicle context",
      },
    ],
    points: [
      "JagX badge on the body and rear — fleet operators know who built the full vehicle.",
      "Cargo volume designed for urban delivery, not a passenger car with stickers.",
      "Fleet console on JagX software with signed over-the-air updates.",
      "If a screw, panel, or module fails, authorised repair is through JagX & JRILICENSE — we own the full product.",
    ],
  },
];

export default function MobilityPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-10 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">JagX Mobility</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-5 leading-tight">
            Full vehicles.
            <br />
            Not a parts company.
          </h1>
          <p className="prose-body text-lg mb-4">
            JagX &amp; JRILICENSE are building complete cars — body, cabin,
            software, and service — from the beginning. We are not joining as a
            badge-only partner or a bolt-on parts supplier. Horizon and Courier
            are our vehicles, with the JagX logo on the metal.
          </p>
          <p className="text-xs text-[#5c5c5c]">
            Designed by JagX AI · Created by JagX &amp; JRILICENSE · Roadmap
            through 2045
          </p>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <h2 className="text-2xl text-white font-normal tracking-tight">
            We build the whole car
          </h2>
          <p>
            Many programmes in the region start as assembly, badge engineering,
            or “we supply one module.” That is not our path. JagX Mobility is a
            full-vehicle effort: structure, exterior design, interior, electrical
            architecture, cabin software, and the service network that keeps the
            car honest after sale.
          </p>
          <p>
            If a part fails — even a single screw that leaves the vehicle — the
            authorised path is back to{" "}
            <strong className="text-white font-normal">
              JagX &amp; JRILICENSE
            </strong>
            . We do not design a car so that random markets can scatter
            untracked fasteners and panels. Ownership of the product includes
            ownership of how it is repaired.
          </p>
          <p>
            Software is signed. Over-the-air updates come from us. The JagX logo
            on the grille and the rear badge means the same organisation that
            built the vehicle stands behind the fix.
          </p>
        </div>
      </section>

      {CARS.map((car) => (
        <section
          key={car.name}
          className="px-5 py-14 border-t border-[#1f1f1f]"
        >
          <div className="max-w-3xl mx-auto mb-10">
            <p className="eyebrow mb-2">{car.role}</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3">
              {car.name}
            </h2>
            <p className="prose-body mb-6">{car.tagline}</p>
            <div className="border border-[#2a2a2a] bg-[#111] rounded-2xl px-6 py-5 mb-4">
              <div className="text-2xl text-white mb-1">{car.price}</div>
              <p className="text-xs text-[#5c5c5c]">{car.priceNote}</p>
            </div>
            <ul className="space-y-3">
              {car.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-[#b0b0b0]">
                  <span className="text-white shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {car.views.map((v) => (
              <div key={v.src}>
                <p className="text-[11px] font-mono text-[#5c5c5c] tracking-wider uppercase mb-2">
                  {v.label}
                </p>
                <div className="img-frame rounded-2xl aspect-[16/10] overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                  <img
                    src={v.src}
                    alt={`${car.name} — ${v.label}`}
                    className={`w-full h-full ${
                      v.src.startsWith("/")
                        ? "object-contain p-6 anim-float"
                        : "object-cover"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="px-5 py-14 border-t border-[#1f1f1f] bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p className="eyebrow">Service policy</p>
          <h2 className="text-2xl text-white font-normal tracking-tight">
            If it leaves the car, it comes back to us
          </h2>
          <p>
            JagX &amp; JRILICENSE service is not optional theatre. Authorised
            workshops, genuine parts, and software tooling are how we keep
            Horizon and Courier safe and consistent. A lost screw, a damaged
            panel, a failed module — the correct path is the JagX service
            channel, not an untracked market substitute that breaks the integrity
            of a full-vehicle design.
          </p>
          <p>
            Owners still drive the car. Fleets still run routes. The difference
            is accountability: the same name on the badge is the name on the
            workshop order through the 2030s and toward{" "}
            <strong className="text-white font-normal">2045</strong>.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Direction to 2045</p>
          <h2 className="text-2xl text-white font-normal tracking-tight mb-6">
            Indicative investment (Naira)
          </h2>
          <div className="space-y-4">
            {[
              {
                period: "2032–2036",
                spend: "₦180–330 billion cumulative",
                focus: "Software stack, pilots, Horizon & Courier design freeze",
              },
              {
                period: "2037–2041",
                spend: "₦525–900 billion cumulative",
                focus: "Production partners, fleet volume, service network",
              },
              {
                period: "2042–2045+",
                spend: "₦1.2–2.25 trillion+ cumulative",
                focus: "Scaled platforms, more body styles, deeper autonomy",
              },
            ].map((o) => (
              <div
                key={o.period}
                className="border border-[#1f1f1f] bg-[#111] rounded-2xl p-5"
              >
                <div className="text-[11px] font-mono text-[#5c5c5c] mb-2">
                  {o.period}
                </div>
                <div className="text-lg text-white mb-2">{o.spend}</div>
                <p className="text-sm text-[#8a8a8a]">{o.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-5 text-sm">
          <Link
            href="/roadmap"
            className="text-[#8a8a8a] hover:text-white transition-colors"
          >
            Full roadmap →
          </Link>
          <Link
            href="/"
            className="text-[#8a8a8a] hover:text-white transition-colors"
          >
            ← All products
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
