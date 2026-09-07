import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About JagX & JRILICENSE — Founded 15 August 2022",
  description:
    "JagX was founded 15 August 2022. JRILICENSE launched 2025. We build AI, secure social, OS, silicon, mobility, devices, cloud, education, energy, Shield, payments, and JagX Intelligent Military for the protection of Africa. Slogans, anthem, expansion plans, and honest progress so far.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src="/brand-mark.svg" alt="JagX" width={48} height={48} className="rounded-xl" />
            <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={48} height={48} className="rounded-full" />
          </div>
          <p className="eyebrow mb-4">About us</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
            JagX & JRILICENSE
          </h1>
          <p className="prose-body text-lg mb-4">
            We build the tools we wish Africa already owned.
          </p>
          <p className="text-sm text-[#8a8a8a]">
            JagX founded <strong className="text-white">15 August 2022</strong> · JRILICENSE established{" "}
            <strong className="text-white">2025</strong>
          </p>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-6">
          <p>
            We started JagX on 15 August 2022 because too much of the technology that shapes daily life across Africa is designed somewhere else, priced somewhere else, and controlled somewhere else. We wanted a stack we could inspect, brand clearly, and improve ourselves — AI, social, operating systems, security, and more.
          </p>
          <p>
            In 2025 we formalised JRILICENSE as the licensing and commercial arm so every product, model, OS build, and design can be protected and offered under clear terms without losing ownership. Together we are one group: JagX invents and operates; JRILICENSE licenses and protects.
          </p>
          <p>
            This website is ours. There is no leftover badge from an old contractor or an external AI builder. Every page, every roadmap figure, and every promise is written and owned by JagX & JRILICENSE.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Our slogans</p>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-[#5c5c5c] uppercase tracking-widest mb-2">JagX</p>
              <p className="text-2xl md:text-3xl font-normal text-white tracking-tight">
                “Intelligence that stays home. Security that travels the continent.”
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5c5c5c] uppercase tracking-widest mb-2">JRILICENSE</p>
              <p className="text-2xl md:text-3xl font-normal text-white tracking-tight">
                “License the future. Own the stack.”
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5c5c5c] uppercase tracking-widest mb-2">Together</p>
              <p className="text-2xl md:text-3xl font-normal text-white tracking-tight">
                “From Lagos to the last mile — Africa builds, Africa protects.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Anthem</p>
          <h2 className="text-2xl font-normal mb-6 text-white">The JagX & JRILICENSE Anthem</h2>
          <div className="prose-body space-y-4 font-serif text-[#c8c8c8] leading-relaxed border-l-2 border-[#2a2a2a] pl-6">
            <p>
              From the Niger to the Cape of Hope,<br />
              From Freetown’s shore to the Sahel’s slope,<br />
              We rise with code and with iron will —<br />
              The mind of Africa, standing still no more.
            </p>
            <p>
              JagX lights the path of sovereign light,<br />
              JRILICENSE holds the keys of right.<br />
              No stranger hand shall write our fate;<br />
              We build the shield, we open the gate.
            </p>
            <p>
              Through dust and data, through night and day,<br />
              Our children will speak what we code today.<br />
              Sixteen nations and more shall know our name —<br />
              Intelligence home, security the same.
            </p>
            <p className="text-white italic">
              Stand, Africa. Stand with the mark of JX.<br />
              The future is licensed. The future is ours.
            </p>
          </div>
          <p className="text-xs text-[#5c5c5c] mt-6">
            Official anthem · JagX & JRILICENSE · Free for use by our teams and partners with attribution.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Honest progress so far</p>
          <h2 className="text-2xl font-normal mb-6 text-white">Where we are today</h2>
          <div className="prose-body space-y-4">
            <p>
              We are still early. Most of our product lines are in build, pilot, or design stage and have not yet generated revenue. The one clear commercial signal we have so far is <strong className="text-white">JagX Connect</strong>, which brought in approximately <strong className="text-white">₦195,250</strong> in its first year. That number is modest, but it is real, and it proves people will pay for a social experience designed with privacy and African networks in mind.
            </p>
            <p>
              Everything else — JagX AI, OS, Silicon, Mobility, Devices, Cloud, Education, Energy, Shield, Pay, and Intelligent Military — is still being built and does not yet contribute to revenue. We publish the long roadmaps and indicative investment figures so partners and our own team can see the scale of the work ahead, not because those lines are already profitable.
            </p>
            <p>
              Starting capital for JagX in 2022 was lean: roughly <strong className="text-white">₦45–85 million</strong> covering registration, early compute, brand protection, and a small core team. JRILICENSE in 2025 required a higher setup floor — approximately <strong className="text-white">₦180–350 million</strong> for legal, IP, compliance, and first-year operations — so we could license and protect the stack properly.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">JagX Intelligent Military</p>
          <h2 className="text-2xl font-normal mb-6 text-white">
            Protection for Africa — not one state’s private force
          </h2>
          <div className="prose-body space-y-4">
            <p>
              JagX Intelligent Military is part of our Shield family. It is not a private army and it is not locked to a single country. We are building technology, doctrine, and equipment standards that African states and regional bodies can use together: AI-assisted command and control blocks, secure communications, sensor fusion, training standards, and modular uniforms and platforms designed for African climates and logistics.
            </p>
            <p>
              Threats do not stop at old borders. A problem that starts in one capital can move to another within weeks. We want African institutions to share a common technological language without handing control to a single foreign vendor. Human oversight stays non-negotiable. Data residency and decision authority stay on the continent whenever we can make that true.
            </p>
            <p>
              Under this programme we also design:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#c8c8c8]">
              <li>Security dress — modular uniforms for heat, dust, and humidity, with optional ballistic or sensor layers and authenticity tags linked to Shield Identity</li>
              <li>Operational shirts and soft kit for daily field and logistics use</li>
              <li>Cabin air and scent systems for our Mobility vehicles (Horizon and Courier), treated as a controlled environmental layer with sealed service only through us</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Where we are going</p>
          <h2 className="text-2xl font-normal mb-6 text-white">
            Nigeria first, then the continent — 2035 to 2045
          </h2>
          <div className="prose-body space-y-4">
            <p>
              We start in Nigeria. From there we plan practical presence — products, partners, cloud regions, education labs, or Shield deployments — across Burkina Faso, Sierra Leone, South Africa, and twelve further priority countries: Ghana, Côte d’Ivoire, Senegal, Kenya, Rwanda, Uganda, Tanzania, Ethiopia, Egypt, Morocco, Botswana, and Namibia.
            </p>
            <p>
              That list is deliberate. It balances population, digital readiness, security cooperation potential, and logistics. More countries will follow when capital, talent, and regulation allow. Every new market must be able to run critical services with local data options and local partners.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Blueprints we are working on</p>
          <h2 className="text-2xl font-normal mb-6 text-white">
            Vehicles, uniforms, and operational kit
          </h2>
          <div className="prose-body space-y-6">
            <div>
              <h3 className="text-lg text-white mb-2">Cabin scent & air systems (Horizon & Courier)</h3>
              <p>
                Our Mobility platforms will include a software-controlled cabin air and scent system. It is not a gimmick. It is for neutralising external odours, mild alertness profiles on long drives, and optional branded ambient profiles that fleet operators can lock or disable. Reservoirs and filters are sealed and serviceable only through JagX & JRILICENSE centres — same rule as every other part of the car.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-white mb-2">Security dress</h3>
              <p>
                A modular uniform family for Shield and Intelligent Military users: climate-appropriate base layers, optional ballistic or cut-resistant panels, power and data conduits for body-worn sensors, and finishes for high visibility or low profile. Designed for African heat and dust. Every authorised garment carries a discrete JagX / JRILICENSE mark and a scannable authenticity tag.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-white mb-2">Operational shirts</h3>
              <p>
                Lighter daily wear for security, logistics, and field engineering: quick-dry fabric, subtle reflective elements, routing for radio and earpiece, optional RFID/NFC pockets. Male and female cuts sized for real local body distributions, not imported templates.
              </p>
            </div>
            <p className="text-sm text-[#8a8a8a]">
              Full engineering drawings stay internal. These public summaries show direction without exposing protected design data.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">The road ahead</p>
          <h2 className="text-2xl font-normal mb-6 text-white">
            Future of JagX AI and JRILICENSE
          </h2>
          <div className="prose-body space-y-4">
            <p>
              Africa needs AI that can run when bandwidth is expensive and power is intermittent. JagX AI is multi-agent intelligence for builders, schools, and institutions — with free starter API keys, a path to on-device models on our Silicon, and Gov-grade options that institutions can audit. We are still in the build phase; revenue from AI is still ahead of us.
            </p>
            <p>
              JRILICENSE exists so models, OS builds, vehicle software, security doctrine, and equipment designs can be licensed and protected without us losing control. Over the next decade it becomes the main interface for governments, universities, defence partners, and commercial customers who need clear rights and clear support.
            </p>
            <p>
              We invent and operate under JagX. We license and protect under JRILICENSE. That is how the stack stays ours while it travels across the continent.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-4">
          <p>
            This site and these products belong to JagX & JRILICENSE. No former contractor and no external builder holds residual credit. The work continues from Nigeria outward, with the same seriousness that started on 15 August 2022.
          </p>
          <p className="text-sm text-[#5c5c5c]">
            Not affiliated with Jaguar Health, Jaguar Cars, or any other Jag* trademark holders outside this group.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 text-sm">
          {["/ai", "/connect", "/os", "/silicon", "/mobility", "/devices", "/shield", "/roadmap"].map((href) => (
            <Link
              key={href}
              href={href}
              className="border border-[#1f1f1f] bg-[#111] rounded-lg px-4 py-3 text-[#8a8a8a] hover:text-white"
            >
              {href}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
