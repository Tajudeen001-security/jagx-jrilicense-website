export type ProductLine = {
  slug: string;
  title: string;
  tagline: string;
  longIntro?: string;
  longBody?: string[];
  africaImpact?: string;
  worldImpact?: string;
  direction?: string;
  types: { name: string; note: string }[];
  promises: string[];
  outlook: { period: string; focus: string; spend: string }[];
  img: string;
  gallery?: string[];
};

export const FREE_API_KEYS = [
  {
    key: "jagx-59ec64942f727ec43109c48f446068fd",
    label: "Builder key A",
    note: "Free starter key for prototypes and student projects. Fair use.",
  },
  {
    key: "jagx-adb6112fe4192539858e02fae18053d1",
    label: "Builder key B",
    note: "Free starter key for side projects and hackathons. Fair use.",
  },
];

const long = {
  ai: {
    longIntro:
      "JagX AI is not a single chat box that forgets context after a few turns. It is a multi-agent system designed so teams can describe outcomes and get structured progress: planning, scaffolding, writing, review, and correction — with identity protection so the model does not claim to be someone else’s product.",
    longBody: [
      "The core experience is a hands-off GROUP coding CLI. A lead agent coordinates specialists for scaffold, backend, frontend, files, shell, design, and review. Folders are created before code is written. Agents announce when they are done. Review catches mistakes and sends work back. Destructive commands stay blocked by default.",
      "Beyond the CLI, JagX AI exposes tool calling, live retrieval, and watermarked outputs. Free developer API keys let builders try JagX AI in their own projects under fair-use limits as the platform matures.",
      "We treat AI as infrastructure. Reliability, inspectability, and clear attribution matter as much as clever demos.",
    ],
    africaImpact:
      "Developers and small teams across Africa often face expensive data, intermittent power, and limited access to enterprise AI seats. JagX AI aims to give local teams structured multi-agent help — with a path to on-device inference later.",
    worldImpact:
      "Startups, universities, and institutions anywhere need multi-agent review loops and honest identity, not a forgetful chat window.",
    direction:
      "Toward agents that own larger slices of the software lifecycle with human approval on destructive paths, plus Edge models on JagX OS and Silicon.",
    gallery: [
      "/visual-robot.svg",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80",
    ],
  },
};

function enrich(p: ProductLine): ProductLine {
  const extra = (long as Record<string, Partial<ProductLine>>)[p.slug];
  if (!extra) {
    return {
      ...p,
      longIntro:
        p.longIntro ||
        `${p.title} is part of the JagX & JRILICENSE family — built for African constraints and global reach, with clear product types, promises, and a long-horizon investment path through 2040+.`,
      longBody: p.longBody || [
        `${p.title} expands into multiple product types so teams can adopt what they need without buying a monolith. Each type below is a concrete offer path as the line matures.`,
        `We publish indicative spend ranges for 2032–2040+ so direction is public: research, infrastructure, people, and go-to-market — not empty slogans.`,
      ],
      africaImpact:
        p.africaImpact ||
        `Designed with mobile-first users across Africa in mind — costly data, shared devices, and trust risk are treated as primary constraints, not edge cases.`,
      worldImpact:
        p.worldImpact ||
        `The same product family is meant to be competitive worldwide: privacy, reliability, and clear branding are not regional preferences.`,
      direction:
        p.direction ||
        `Ship foundations first, scale with partners, and keep software layers coherent with OS, Silicon, and Cloud over the 2030s.`,
      gallery: p.gallery || [p.img, "/visual-africa.svg"],
    };
  }
  return { ...p, ...extra, gallery: extra.gallery || p.gallery || [p.img] };
}

const BASE: ProductLine[] = [
  {
    slug: "ai",
    title: "JagX AI",
    tagline:
      "Multi-agent intelligence for builders, schools, and institutions — attributed clearly to JagX & JRILICENSE.",
    types: [
      { name: "JagX AI CLI", note: "GROUP multi-agent coding with review loops and safe defaults." },
      { name: "JagX AI Studio", note: "Web workspace for teams, classrooms, and collaboration." },
      { name: "JagX AI API", note: "HTTP API for tool calling and generation — free starter keys below." },
      { name: "JagX AI Edge", note: "On-device models via JagX OS and Silicon." },
      { name: "JagX AI Gov", note: "Auditable deployments for public sector and regulated orgs." },
    ],
    promises: [
      "Outputs attributed to JagX & JRILICENSE — no false corporate identity.",
      "Destructive actions gated; review-oriented workflows by default.",
      "Path to on-device inference so connectivity cost does not block basic help.",
      "Free starter API keys for developers to experiment in their projects.",
      "Open contribution paths for African and global builders over time.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Studio + API scale; education seats; free key program", spend: "USD 40–80M cumulative" },
      { period: "2035–2037", focus: "Edge models + enterprise Africa/EU", spend: "USD 120–200M cumulative" },
      { period: "2038–2040+", focus: "Full lifecycle agents; sovereign deployments", spend: "USD 250–400M+ cumulative" },
    ],
    img: "/visual-robot.svg",
  },
  {
    slug: "connect",
    title: "JagX Connect",
    tagline: "A social network built so privacy is the default — for African users first, and for anyone tired of being the product.",
    types: [
      { name: "Connect Personal", note: "Moments, messaging, and privacy controls for everyday users." },
      { name: "Buddy Circles", note: "Interest and community groups that stay coherent." },
      { name: "Connect Business", note: "Verified pages and tools for SMEs and creators." },
      { name: "Connect Secure", note: "Hardened messaging for high-risk contexts." },
      { name: "Connect Live", note: "Real-time events without forcing public performance." },
    ],
    promises: [
      "Privacy-first defaults, not engagement theatre as the primary metric.",
      "Native apps that respect African network realities.",
      "Moderation that grows to respect local languages and norms.",
      "Identity integration with JagX OS and Shield over time.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Trust features; scale ambition; Secure tier pilots", spend: "USD 60–100M cumulative" },
      { period: "2035–2037", focus: "Business + Secure at regional scale", spend: "USD 150–250M cumulative" },
      { period: "2038–2040+", focus: "Global secure social alternative", spend: "USD 300–500M+ cumulative" },
    ],
    img: "/brand-mark.svg",
    gallery: ["/brand-mark.svg", "/visual-africa.svg", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80", "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80"],
    longIntro:
      "Social platforms that dominate Africa were rarely designed here. They optimize for engagement and advertising, not for expensive data or account-takeover risk. JagX Connect is our attempt to build the social layer people can actually trust.",
    longBody: [
      "Connect is a real-time network: posts and moments, private and group messaging, Buddy Circles. Native Flutter apps share accounts with the web. Auth supports email, OTP, and Google.",
      "The ambition is explicit: become the most secure social platform Africa has, and a serious option worldwide. Stronger defaults, granular privacy, and understandable controls.",
      "We focus on identity, chat, feed, communities, and trust — so families, creators, and businesses can build relationships without becoming inventory for advertisers.",
    ],
    africaImpact:
      "Account takeovers and leaky data practices erode trust. Families and SMEs need private coordination on mobile-first networks. Connect prioritizes messaging and circles that fit that reality.",
    worldImpact:
      "Journalists, organizers, diaspora families, and ordinary users face the same pressure: platforms optimize for time-on-site. Stronger defaults help far beyond one region.",
    direction:
      "Deeper encryption, better local-language moderation, and a shared privacy model with JagX OS.",
  },
  {
    slug: "os",
    title: "JagX OS",
    tagline: "An operating system that assumes the user owns the device — privacy, on-device AI, and JagX branding on the glass.",
    types: [
      { name: "JagX OS Phone", note: "Primary consumer and SME phone experience." },
      { name: "JagX OS Edge", note: "Kiosks, POS, industrial and community edge boards." },
      { name: "JagX OS Go", note: "Lightweight build for entry-level hardware." },
      { name: "JagX OS Pro", note: "Long support, enterprise controls, audit-friendly defaults." },
    ],
    promises: [
      "JagX & JRILICENSE visible on boot and core settings.",
      "On-device AI path paired with Silicon.",
      "Multi-year security update ambition.",
      "Connect and AI as first-class apps.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Reference devices; pilot carriers and OEMs", spend: "USD 80–150M cumulative" },
      { period: "2035–2037", focus: "Volume OS + edge verticals", spend: "USD 200–350M cumulative" },
      { period: "2038–2040+", focus: "Regional default OS ambition", spend: "USD 400–700M+ cumulative" },
    ],
    img: "/visual-os.svg",
    gallery: ["/visual-os.svg", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80", "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80", "/visual-africa.svg"],
    longIntro:
      "JagX OS is the software layer for phones and edge hardware in the JagX family. Boot, settings, and first-party apps show JagX & JRILICENSE. Privacy and on-device AI are design constraints, not optional extras.",
    longBody: [
      "Permissions are explicit. Background collection is minimized. Common AI tasks can run locally when Silicon allows, so a weak connection does not block basic assistance.",
      "Connect and JagX AI integrate as first-class experiences. Long support cycles aim to keep devices useful for years.",
      "The OS bridges software products and Silicon, Devices, and Mobility — one privacy model from phone to edge to vehicle over time.",
    ],
    africaImpact:
      "People who pay per megabyte or share devices benefit from local processing and fewer silent trackers. That is practical respect, not a luxury feature.",
    worldImpact:
      "Anyone who wants a phone that is a tool first benefits from clear controls, long updates, and honest branding.",
    direction:
      "Tighter Silicon coupling, safer sandboxing, verified OTA, and reference devices that prove the brand on the lock screen.",
  },
  {
    slug: "silicon",
    title: "JagX Silicon",
    tagline: "AI-first chips and modules so intelligence can live at the edge — marked JagX end to end.",
    types: [
      { name: "JX-NPU", note: "Neural processing for phones, tablets, and edge boards." },
      { name: "JX-SEC", note: "Secure enclave for keys, biometrics, and attested identity." },
      { name: "JX-EDGE", note: "Vision and sensor fusion for robots and cameras." },
      { name: "JX-AUTO", note: "Vehicle compute for JagX Mobility platforms." },
      { name: "JX-LAB", note: "Research silicon and university collaboration nodes." },
    ],
    promises: [
      "Die and package marked JagX where we control the design.",
      "Power and link budgets aware of costly or intermittent networks.",
      "Talent and partner pipeline including African institutions.",
      "Roadmap aligned with OS and AI.",
    ],
    outlook: [
      { period: "2032–2034", focus: "NPU/SEC prototypes; foundry partners", spend: "USD 100–200M cumulative" },
      { period: "2035–2037", focus: "Volume edge chips; auto samples", spend: "USD 300–500M cumulative" },
      { period: "2038–2040+", focus: "Full family + regional design centers", spend: "USD 600M–1.2B+ cumulative" },
    ],
    img: "/visual-chip.svg",
    gallery: ["/visual-chip.svg", "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80", "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=900&q=80", "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80"],
  },
  {
    slug: "mobility",
    title: "JagX Mobility",
    tagline: "Software-defined vehicles with secure OTA, cabin intelligence, and design for real roads.",
    types: [
      { name: "Mobility Software", note: "OTA, cabin AI, security, and diagnostics stack." },
      { name: "Mobility City", note: "Urban EV platforms oriented to African city patterns." },
      { name: "Mobility Fleet", note: "Commercial and logistics fleet programs." },
      { name: "Mobility Autonomy", note: "Assist and autonomy research with staged capability." },
    ],
    promises: [
      "Signed OTA as a default.",
      "Design for real roads and imperfect connectivity.",
      "Shared identity path with JagX OS.",
      "Transparent long support cycles.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Software stack + pilot fleets", spend: "USD 120–220M cumulative" },
      { period: "2035–2037", focus: "City/fleet production partners", spend: "USD 350–600M cumulative" },
      { period: "2038–2040+", focus: "Scaled platforms + autonomy", spend: "USD 800M–1.5B+ cumulative" },
    ],
    img: "/visual-car.svg",
    gallery: ["/visual-car.svg", "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80", "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80", "https://images.unsplash.com/photo-1549317336-206569e8475c?w=900&q=80"],
  },
  {
    slug: "devices",
    title: "JagX Devices",
    tagline: "Phones, tablets, and edge boxes that run JagX OS — our brand on the glass.",
    types: [
      { name: "JagX Phone", note: "Flagship branded handset line with full OS experience." },
      { name: "JagX Phone Lite", note: "Affordable, long-life entry devices." },
      { name: "JagX Edge Box", note: "On-prem AI and Connect nodes for communities and SMEs." },
      { name: "JagX Tablet", note: "Education and field work with durable software support." },
    ],
    promises: [
      "JagX OS on the glass — not generic Android branding only.",
      "Repair-friendly goals and multi-year update ambition.",
      "Pricing paths that include African market tiers over time.",
      "Bundles with Connect and AI where it helps users.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Lite + pilot flagship", spend: "USD 90–160M cumulative" },
      { period: "2035–2037", focus: "Volume phones + edge boxes", spend: "USD 250–400M cumulative" },
      { period: "2038–2040+", focus: "Full device family", spend: "USD 500–900M+ cumulative" },
    ],
    img: "/visual-os.svg",
    gallery: ["/visual-os.svg", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80", "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=900&q=80", "/visual-africa.svg"],
  },
  {
    slug: "cloud",
    title: "JagX Cloud",
    tagline: "Regional cloud with Africa-first latency and data residency options.",
    types: [
      { name: "Cloud Compute", note: "VMs and containers near your users." },
      { name: "Cloud AI", note: "Hosted JagX AI with residency options." },
      { name: "Cloud Connect", note: "Backend capacity for social at regional scale." },
      { name: "Cloud Edge Link", note: "Sync between cloud and on-device OS/Silicon." },
    ],
    promises: [
      "Data residency options for African institutions.",
      "Pricing and architecture aware of expensive bandwidth.",
      "Tight product coupling with AI, Connect, and OS.",
    ],
    outlook: [
      { period: "2032–2034", focus: "First regional regions", spend: "USD 70–130M cumulative" },
      { period: "2035–2037", focus: "Multi-country presence", spend: "USD 200–350M cumulative" },
      { period: "2038–2040+", focus: "Continent-scale capacity", spend: "USD 450–800M+ cumulative" },
    ],
    img: "/visual-cloud.svg",
    gallery: ["/visual-cloud.svg", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80", "/visual-africa.svg"],
  },
  {
    slug: "education",
    title: "JagX Education",
    tagline: "AI literacy, labs, certifications, and scholarships for African builders.",
    types: [
      { name: "JagX Learn", note: "Courses for students, teachers, and self-learners." },
      { name: "JagX Labs", note: "University and community lab programs." },
      { name: "JagX Cert", note: "Practical certifications on AI, OS, and security." },
      { name: "JagX Scholar", note: "Scholarships for African builders." },
    ],
    promises: [
      "Growing African language and context coverage.",
      "Free and low-cost tiers for public education where possible.",
      "Clear path from Learn to CLI, API, and jobs in the ecosystem.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Curriculum + pilot countries", spend: "USD 25–50M cumulative" },
      { period: "2035–2037", focus: "Labs network; certifications", spend: "USD 70–120M cumulative" },
      { period: "2038–2040+", focus: "Continental builder pipeline", spend: "USD 150–300M+ cumulative" },
    ],
    img: "/visual-edu.svg",
    gallery: ["/visual-edu.svg", "/visual-africa.svg", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"],
  },
  {
    slug: "energy",
    title: "JagX Energy",
    tagline: "Solar kits, device rails, and microgrid software for edge reality.",
    types: [
      { name: "Energy Solar Kit", note: "Solar + storage for edge nodes and homes." },
      { name: "Energy Device Rail", note: "Efficient power design for phones and boxes." },
      { name: "Energy Microgrid", note: "Community microgrid software + hardware packages." },
    ],
    promises: [
      "Design for unreliable grid as a primary case.",
      "Pair openly with Edge Box and OS deployments.",
      "Transparent efficiency metrics over time.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Kits + device rails", spend: "USD 40–80M cumulative" },
      { period: "2035–2037", focus: "Microgrid pilots", spend: "USD 100–180M cumulative" },
      { period: "2038–2040+", focus: "Scaled energy + edge packages", spend: "USD 200–400M+ cumulative" },
    ],
    img: "/visual-energy.svg",
    gallery: ["/visual-energy.svg", "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80"],
  },
  {
    slug: "shield",
    title: "JagX Shield",
    tagline: "Identity, ops monitoring, threat intelligence, and audit for high-risk users and institutions.",
    types: [
      { name: "Shield Identity", note: "Keys, biometrics, device attestation." },
      { name: "Shield Ops", note: "Monitoring for Connect and Cloud." },
      { name: "Shield Intel", note: "Threat intelligence for African and global networks." },
      { name: "Shield Audit", note: "Compliance and evidence packages for institutions." },
    ],
    promises: [
      "Security treated as a product, not an afterthought.",
      "Protects high-risk users and institutions deliberately.",
      "Aligned with Connect Secure and OS enclaves.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Identity + Ops core", spend: "USD 35–70M cumulative" },
      { period: "2035–2037", focus: "Intel network; enterprise", spend: "USD 90–160M cumulative" },
      { period: "2038–2040+", focus: "Regional security standard path", spend: "USD 180–350M+ cumulative" },
    ],
    img: "/visual-secure.svg",
    gallery: ["/visual-secure.svg", "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80"],
  },
  {
    slug: "pay",
    title: "JagX Pay",
    tagline: "Wallets, merchant tools, cross-border corridors, and APIs for African SMEs and diaspora flows.",
    types: [
      { name: "Pay Wallet", note: "Consumer wallet tied to Connect identity." },
      { name: "Pay Merchant", note: "POS and online tools for SMEs." },
      { name: "Pay Cross-border", note: "Remittance-friendly corridors over time." },
      { name: "Pay API", note: "Embed payments in third-party apps." },
    ],
    promises: [
      "Built for African merchants and diaspora flows as primary cases.",
      "Strong identity via Shield and Connect.",
      "Clear fees; no dark patterns as a product principle.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Wallet + merchant pilots", spend: "USD 50–90M cumulative" },
      { period: "2035–2037", focus: "Cross-border corridors", spend: "USD 120–220M cumulative" },
      { period: "2038–2040+", focus: "Scale payments rail", spend: "USD 250–450M+ cumulative" },
    ],
    img: "/visual-finance.svg",
    gallery: ["/visual-finance.svg", "/visual-africa.svg", "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"],
  },
];

export const PRODUCTS: ProductLine[] = BASE.map(enrich);

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
