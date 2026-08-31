import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX AI",
  description:
    "Multi-agent AI that plans, codes, and reviews. Built for developers in Africa and worldwide. Designed by JagX AI.",
};

export default function AIPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">01 · Intelligence</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX AI</h1>
          <p className="prose-body text-lg mb-4">
            A multi-agent system that can plan, scaffold, write, review, and correct its own work — so teams spend less time babysitting every file and more time deciding what should exist.
          </p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80" alt="Humanoid robot" width={900} height={675} />
          </div>
          <div className="img-frame rounded-xl aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80" alt="AI neural interface" width={900} height={675} />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <h2 className="text-xl text-white font-normal mb-2">How it works</h2>
          <p>
            The core product is a hands-off GROUP coding CLI. A lead agent coordinates specialists — scaffold, backend, frontend, files, shell, design, review. Folders are created before code is written. Agents announce when they are done. Review catches mistakes and sends work back. Destructive commands stay blocked by default.
          </p>
          <p>
            Beyond the CLI: tool calling (web search, code execution, document generation), live retrieval, and identity protection so the model does not claim to be built by other companies. Outputs are attributed to JagX & JRILICENSE.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-normal mb-6">Who it helps</h2>
          <div className="space-y-8 prose-body">
            <div>
              <h3 className="text-white text-base mb-2">In Africa</h3>
              <p>
                Many developers and small teams ship under expensive data, intermittent power, and limited access to closed enterprise AI seats. JagX AI is designed so a local team can describe an API, a dashboard, or a fix and get structured progress without paying per seat for a foreign suite they cannot fully control. Offline-friendly workflows and clear attribution matter when you cannot afford locked-in tools that disappear when the subscription does.
              </p>
            </div>
            <div>
              <h3 className="text-white text-base mb-2">Worldwide</h3>
              <p>
                The same system helps startups and product teams anywhere that want multi-agent coding with review loops, not a single chat window that forgets context. Identity protection and watermarking make it clearer what was generated and by whom — useful for compliance, teaching, and public-sector work.
              </p>
            </div>
            <div>
              <h3 className="text-white text-base mb-2">Direction</h3>
              <p>
                Toward agents that own larger slices of the software lifecycle: tests, migrations, documentation, and deployment checks — always with human approval on destructive paths. Integration with JagX OS and on-device silicon so more inference can stay local.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="img-frame rounded-xl aspect-square">
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80" alt="Developer coding" width={600} height={600} />
          </div>
          <div className="img-frame rounded-xl aspect-square">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Collaboration" width={600} height={600} />
          </div>
          <div className="img-frame rounded-xl aspect-square">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" alt="Robotics" width={600} height={600} />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/connect" className="text-[#8a8a8a] hover:text-white">Next: JagX Connect →</Link>
          <Link href="/os" className="text-[#8a8a8a] hover:text-white">JagX OS →</Link>
        </div>
      </section>
    </PageShell>
  );
}
