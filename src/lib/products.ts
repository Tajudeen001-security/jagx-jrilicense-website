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
  { key: "jagx-59ec64942f727ec43109c48f446068fd", label: "Builder key A", note: "Free starter key for prototypes and student projects. Fair use." },
  { key: "jagx-adb6112fe4192539858e02fae18053d1", label: "Builder key B", note: "Free starter key for side projects and hackathons. Fair use." },
];

const G: Record<string, string[]> = {
  ai: [
    "/visual-robot.svg",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
  ],
  connect: [
    "/brand-mark.svg",
    "/visual-africa.svg",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
  ],
  os: [
    "/visual-os.svg",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    "/visual-africa.svg",
  ],
  silicon: [
    "/visual-chip.svg",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=900&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
  ],
  mobility: [
    "/visual-car.svg",
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80",
    "https://images.unsplash.com/photo-1549317336-206569e8475c?w=900&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
  ],
  devices: [
    "/visual-os.svg",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&q=80",
    "/visual-africa.svg",
  ],
  cloud: [
    "/visual-cloud.svg",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    "/visual-africa.svg",
  ],
  education: [
    "/visual-edu.svg",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
    "/visual-africa.svg",
    "https://images.unsplash.com/photo-1427504494782-3a9bfc0135e9?w=900&q=80",
  ],
  energy: [
    "/visual-energy.svg",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=80",
  ],
  shield: [
    "/visual-secure.svg",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
  ],
  pay: [
    "/visual-finance.svg",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=900&q=80",
    "/visual-africa.svg",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
  ],
};

export const PRODUCTS: ProductLine[] = [
  {
    slug: "ai",
    title: "JagX AI",
    tagline: "Multi-agent intelligence for builders, schools, and institutions — attributed clearly to JagX and JRILICENSE.",
    longIntro: "JagX AI is not a single chat box that forgets context. It is a multi-agent system for planning, scaffolding, writing, review, and correction — with identity protection so the model does not claim to be someone else's product.",
    longBody: [
      "The core experience is a hands-off GROUP coding CLI. A lead agent coordinates specialists. Review catches mistakes. Destructive commands stay blocked by default.",
      "Beyond the CLI: tool calling, live retrieval, watermarked outputs. Free developer API keys let builders try JagX AI under fair-use limits.",
      "We treat AI as infrastructure. Reliability and clear attribution matter as much as demos.",
    ],
    africaImpact: "Developers and small teams across Africa often face expensive data, intermittent power, and limited access to enterprise AI seats. JagX AI aims to give local teams structured multi-agent help — with a path to on-device inference later.",
    worldImpact: "Startups, universities, and institutions anywhere need multi-agent review loops and honest identity.",
    direction: "Toward agents that own larger slices of the software lifecycle with human approval, plus Edge models on JagX OS and Silicon.",
    types: [
      { name: "JagX AI CLI", note: "GROUP multi-agent coding with review loops." },
      { name: "JagX AI Studio", note: "Web workspace for teams and classrooms." },
      { name: "JagX AI API", note: "HTTP API — free starter keys on this page." },
      { name: "JagX AI Edge", note: "On-device models via OS and Silicon." },
      { name: "JagX AI Gov", note: "Auditable deployments for public sector." },
    ],
    promises: [
      "Outputs attributed to JagX and JRILICENSE.",
      "Destructive actions gated by default.",
      "Path to on-device inference.",
      "Free starter API keys for builders.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Studio + API; free key program", spend: "₦60–120 billion cumulative" },
      { period: "2035–2037", focus: "Edge models + enterprise", spend: "₦180–300 billion cumulative" },
      { period: "2038–2040+", focus: "Lifecycle agents; sovereign deployments", spend: "₦375–600 billion+ cumulative" },
    ],
    img: "/visual-robot.svg",
    gallery: G.ai,
  },
  {
    slug: "connect",
    title: "JagX Connect",
    tagline: "A social network built so privacy is the default — for African users first.",
    longIntro: "Social platforms that dominate Africa were rarely designed here. JagX Connect is the social layer people can actually trust.",
    longBody: [
      "Real-time posts, moments, messaging, Buddy Circles. Native Flutter apps share accounts with the web.",
      "Ambition: the most secure social platform Africa has, and a serious option worldwide.",
    ],
    africaImpact: "Families and SMEs need private coordination on mobile-first networks without becoming ad inventory.",
    worldImpact: "Stronger defaults help users everywhere who are tired of engagement theatre.",
    direction: "Deeper encryption and shared privacy model with JagX OS.",
    types: [
      { name: "Connect Personal", note: "Moments, messaging, privacy controls." },
      { name: "Buddy Circles", note: "Interest and community groups." },
      { name: "Connect Business", note: "Verified pages for SMEs." },
      { name: "Connect Secure", note: "Hardened messaging for high-risk users." },
      { name: "Connect Live", note: "Real-time events." },
    ],
    promises: [
      "Privacy-first defaults.",
      "Native apps for African networks.",
      "Local-language moderation over time.",
      "Identity with OS and Shield.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Trust features; Secure tier", spend: "₦90–150 billion cumulative" },
      { period: "2035–2037", focus: "Business + Secure scale", spend: "₦225–375 billion cumulative" },
      { period: "2038–2040+", focus: "Global secure alternative", spend: "₦450–750 billion+ cumulative" },
    ],
    img: "/brand-mark.svg",
    gallery: G.connect,
  },
  {
    slug: "os",
    title: "JagX OS",
    tagline: "Privacy-first OS with on-device AI and JagX branding on the glass.",
    longIntro: "JagX OS is the software layer for phones and edge hardware. Boot and settings show JagX and JRILICENSE.",
    longBody: [
      "Explicit permissions. Minimal background collection. On-device AI when Silicon allows.",
      "Connect and AI as first-class apps. Multi-year update ambition.",
    ],
    africaImpact: "Local processing cuts cost and risk when data is expensive and devices are shared.",
    worldImpact: "A phone that is a tool first — clear controls and long updates.",
    direction: "Tighter Silicon coupling and verified OTA.",
    types: [
      { name: "JagX OS Phone", note: "Consumer and SME phones." },
      { name: "JagX OS Edge", note: "Kiosks, POS, edge boards." },
      { name: "JagX OS Go", note: "Lightweight entry builds." },
      { name: "JagX OS Pro", note: "Enterprise long support." },
    ],
    promises: [
      "JagX branding on boot and settings.",
      "On-device AI path with Silicon.",
      "Multi-year security updates.",
      "Connect and AI first-class.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Reference devices", spend: "₦120–225 billion cumulative" },
      { period: "2035–2037", focus: "Volume OS + edge", spend: "₦300–525 billion cumulative" },
      { period: "2038–2040+", focus: "Regional default OS ambition", spend: "₦600 billion–1.05 trillion+ cumulative" },
    ],
    img: "/visual-os.svg",
    gallery: G.os,
  },
  {
    slug: "silicon",
    title: "JagX Silicon",
    tagline: "AI-first chips marked JagX end to end.",
    types: [
      { name: "JX-NPU", note: "Neural processing for phones and edge." },
      { name: "JX-SEC", note: "Secure enclave." },
      { name: "JX-EDGE", note: "Vision and sensor fusion." },
      { name: "JX-AUTO", note: "Vehicle compute." },
      { name: "JX-LAB", note: "Research silicon." },
    ],
    promises: [
      "Packages marked JagX.",
      "Power budgets for intermittent networks.",
      "African talent pipeline.",
      "Aligned with OS and AI.",
    ],
    outlook: [
      { period: "2032–2034", focus: "NPU/SEC prototypes", spend: "₦150–300 billion cumulative" },
      { period: "2035–2037", focus: "Volume edge chips", spend: "₦450–750 billion cumulative" },
      { period: "2038–2040+", focus: "Full family + design centers", spend: "₦900 billion–1.8 trillion+ cumulative" },
    ],
    img: "/visual-chip.svg",
    gallery: G.silicon,
  },
  {
    slug: "mobility",
    title: "JagX Mobility",
    tagline: "Software-defined vehicles with secure OTA.",
    types: [
      { name: "Mobility Software", note: "OTA, cabin AI, security." },
      { name: "Mobility City", note: "Urban EV platforms." },
      { name: "Mobility Fleet", note: "Commercial fleets." },
      { name: "Mobility Autonomy", note: "Assist research." },
    ],
    promises: [
      "Signed OTA as default.",
      "Real roads, imperfect connectivity.",
      "Shared identity with OS.",
      "Long support cycles.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Software + pilot fleets", spend: "₦180–330 billion cumulative" },
      { period: "2035–2037", focus: "City/fleet partners", spend: "₦525–900 billion cumulative" },
      { period: "2038–2040+", focus: "Scaled platforms", spend: "₦1.2–2.25 trillion+ cumulative" },
    ],
    img: "/visual-car.svg",
    gallery: G.mobility,
  },
  {
    slug: "devices",
    title: "JagX Devices",
    tagline: "Phones and edge boxes running JagX OS.",
    types: [
      { name: "JagX Phone", note: "Flagship handset." },
      { name: "JagX Phone Lite", note: "Affordable long-life." },
      { name: "JagX Edge Box", note: "On-prem AI nodes." },
      { name: "JagX Tablet", note: "Education and field work." },
    ],
    promises: [
      "JagX OS on the glass.",
      "Multi-year updates.",
      "African pricing tiers over time.",
      "Bundles with Connect and AI.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Lite + pilot flagship", spend: "₦135–240 billion cumulative" },
      { period: "2035–2037", focus: "Volume phones + edge", spend: "₦375–600 billion cumulative" },
      { period: "2038–2040+", focus: "Full device family", spend: "₦750 billion–1.35 trillion+ cumulative" },
    ],
    img: "/visual-os.svg",
    gallery: G.devices,
  },
  {
    slug: "cloud",
    title: "JagX Cloud",
    tagline: "Regional cloud with Africa-first latency.",
    types: [
      { name: "Cloud Compute", note: "VMs near users." },
      { name: "Cloud AI", note: "Hosted JagX AI." },
      { name: "Cloud Connect", note: "Social backends." },
      { name: "Cloud Edge Link", note: "Sync with devices." },
    ],
    promises: [
      "Data residency options.",
      "Aware of expensive bandwidth.",
      "Coupled with AI, Connect, OS.",
    ],
    outlook: [
      { period: "2032–2034", focus: "First regions", spend: "₦105–195 billion cumulative" },
      { period: "2035–2037", focus: "Multi-country", spend: "₦300–525 billion cumulative" },
      { period: "2038–2040+", focus: "Continent-scale", spend: "₦675 billion–1.2 trillion+ cumulative" },
    ],
    img: "/visual-cloud.svg",
    gallery: G.cloud,
  },
  {
    slug: "education",
    title: "JagX Education",
    tagline: "AI literacy, labs, certs, scholarships.",
    types: [
      { name: "JagX Learn", note: "Courses." },
      { name: "JagX Labs", note: "Community labs." },
      { name: "JagX Cert", note: "Practical certifications." },
      { name: "JagX Scholar", note: "Scholarships." },
    ],
    promises: [
      "African language coverage over time.",
      "Low-cost tiers where possible.",
      "Path to CLI, API, and jobs.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Curriculum pilots", spend: "₦37–75 billion cumulative" },
      { period: "2035–2037", focus: "Labs network", spend: "₦105–180 billion cumulative" },
      { period: "2038–2040+", focus: "Builder pipeline", spend: "₦225–450 billion+ cumulative" },
    ],
    img: "/visual-edu.svg",
    gallery: G.education,
  },
  {
    slug: "energy",
    title: "JagX Energy",
    tagline: "Solar kits and microgrids for edge reality.",
    types: [
      { name: "Energy Solar Kit", note: "Solar + storage." },
      { name: "Energy Device Rail", note: "Efficient device power." },
      { name: "Energy Microgrid", note: "Community packages." },
    ],
    promises: [
      "Unreliable grid as primary case.",
      "Pairs with Edge Box and OS.",
      "Transparent efficiency metrics.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Kits + rails", spend: "₦60–120 billion cumulative" },
      { period: "2035–2037", focus: "Microgrid pilots", spend: "₦150–270 billion cumulative" },
      { period: "2038–2040+", focus: "Scaled packages", spend: "₦300–600 billion+ cumulative" },
    ],
    img: "/visual-energy.svg",
    gallery: G.energy,
  },
  {
    slug: "shield",
    title: "JagX Shield",
    tagline: "Identity, ops, threat intel, audit.",
    types: [
      { name: "Shield Identity", note: "Keys and attestation." },
      { name: "Shield Ops", note: "Connect and Cloud monitoring." },
      { name: "Shield Intel", note: "Threat intelligence." },
      { name: "Shield Audit", note: "Institution packages." },
    ],
    promises: [
      "Security as a product.",
      "High-risk users and institutions.",
      "Aligned with Connect Secure and OS.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Identity + Ops", spend: "₦52–105 billion cumulative" },
      { period: "2035–2037", focus: "Intel + enterprise", spend: "₦135–240 billion cumulative" },
      { period: "2038–2040+", focus: "Regional standard path", spend: "₦270–525 billion+ cumulative" },
    ],
    img: "/visual-secure.svg",
    gallery: G.shield,
  },
  {
    slug: "pay",
    title: "JagX Pay",
    tagline: "Wallets, merchants, corridors, APIs.",
    types: [
      { name: "Pay Wallet", note: "Consumer wallet." },
      { name: "Pay Merchant", note: "SME tools." },
      { name: "Pay Cross-border", note: "Remittance corridors." },
      { name: "Pay API", note: "Embed payments." },
    ],
    promises: [
      "African merchants and diaspora first.",
      "Identity via Shield and Connect.",
      "Clear fees; no dark patterns.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Wallet + merchant pilots", spend: "₦75–135 billion cumulative" },
      { period: "2035–2037", focus: "Cross-border corridors", spend: "₦180–330 billion cumulative" },
      { period: "2038–2040+", focus: "Scale payments rail", spend: "₦375–675 billion+ cumulative" },
    ],
    img: "/visual-finance.svg",
    gallery: G.pay,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
