export type ProductLine = {
  slug: string;
  title: string;
  tagline: string;
  types: { name: string; note: string }[];
  promises: string[];
  outlook: { period: string; focus: string; spend: string }[];
  img: string;
};

export const PRODUCTS: ProductLine[] = [
  {
    slug: "ai",
    title: "JagX AI",
    tagline: "Multi-agent intelligence for builders and institutions.",
    types: [
      { name: "JagX AI CLI", note: "GROUP multi-agent coding with review loops." },
      { name: "JagX AI Studio", note: "Web workspace for teams and education." },
      { name: "JagX AI API", note: "Tool calling, retrieval, document generation." },
      { name: "JagX AI Edge", note: "On-device models via JagX OS + Silicon." },
      { name: "JagX AI Gov", note: "Identity-protected deployments for public sector." },
    ],
    promises: [
      "Clear attribution to JagX & JRILICENSE — no false identity.",
      "Destructive actions gated; review before merge-style workflows.",
      "Path to on-device inference so teams are not always billed for cloud tokens.",
      "Open contribution paths for local developers.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Studio + API scale; education seats", spend: "USD 40–80M cumulative" },
      { period: "2035–2037", focus: "Edge models + enterprise Africa/EU", spend: "USD 120–200M cumulative" },
      { period: "2038–2040+", focus: "Full lifecycle agents; sovereign deployments", spend: "USD 250–400M+ cumulative" },
    ],
    img: "/visual-robot.svg",
  },
  {
    slug: "connect",
    title: "JagX Connect",
    tagline: "Secure social for Africa and the world.",
    types: [
      { name: "Connect Personal", note: "Moments, messaging, privacy defaults." },
      { name: "Buddy Circles", note: "Interest and community groups." },
      { name: "Connect Business", note: "Verified pages for SMEs and creators." },
      { name: "Connect Secure", note: "Hardened messaging for high-risk users." },
      { name: "Connect Live", note: "Real-time events and spaces." },
    ],
    promises: [
      "Privacy-first defaults, not engagement theatre.",
      "Native apps that work on African networks.",
      "Moderation that respects local languages over time.",
      "Integration with JagX OS identity.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Trust features; scale ambition", spend: "USD 60–100M cumulative" },
      { period: "2035–2037", focus: "Business + Secure tiers", spend: "USD 150–250M cumulative" },
      { period: "2038–2040+", focus: "Global secure social alternative", spend: "USD 300–500M+ cumulative" },
    ],
    img: "/brand-mark.svg",
  },
  {
    slug: "os",
    title: "JagX OS",
    tagline: "Privacy-first OS with on-device AI.",
    types: [
      { name: "JagX OS Phone", note: "Primary consumer and SME phones." },
      { name: "JagX OS Edge", note: "Kiosks, POS, industrial boards." },
      { name: "JagX OS Go", note: "Lightweight build for entry devices." },
      { name: "JagX OS Pro", note: "Long support + enterprise MDM." },
    ],
    promises: [
      "Boot and settings show JagX & JRILICENSE.",
      "On-device AI path with Silicon.",
      "Multi-year security updates.",
      "Connect and AI as first-class apps.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Reference devices; pilot carriers", spend: "USD 80–150M cumulative" },
      { period: "2035–2037", focus: "Volume OS + edge verticals", spend: "USD 200–350M cumulative" },
      { period: "2038–2040+", focus: "Regional default OS ambition", spend: "USD 400–700M+ cumulative" },
    ],
    img: "/visual-os.svg",
  },
  {
    slug: "silicon",
    title: "JagX Silicon",
    tagline: "AI-first chips and modules.",
    types: [
      { name: "JX-NPU", note: "Neural processing for phones and edge." },
      { name: "JX-SEC", note: "Secure enclave for identity and keys." },
      { name: "JX-EDGE", note: "Vision and sensor fusion." },
      { name: "JX-AUTO", note: "Vehicle compute for Mobility." },
      { name: "JX-LAB", note: "Research silicon with universities." },
    ],
    promises: [
      "Die and package marked JagX.",
      "Design for costly or intermittent networks.",
      "Partner and talent pipeline in Africa.",
      "Roadmap aligned with OS and AI.",
    ],
    outlook: [
      { period: "2032–2034", focus: "NPU/SEC prototypes; foundry partners", spend: "USD 100–200M cumulative" },
      { period: "2035–2037", focus: "Volume edge chips; auto samples", spend: "USD 300–500M cumulative" },
      { period: "2038–2040+", focus: "Full family + regional design centers", spend: "USD 600M–1.2B+ cumulative" },
    ],
    img: "/visual-chip.svg",
  },
  {
    slug: "mobility",
    title: "JagX Mobility",
    tagline: "Software-defined vehicles.",
    types: [
      { name: "Mobility Software", note: "OTA, cabin AI, security stack." },
      { name: "Mobility City", note: "Urban EV platforms for African cities." },
      { name: "Mobility Fleet", note: "Commercial and logistics fleets." },
      { name: "Mobility Autonomy", note: "Assist and autonomy research." },
    ],
    promises: [
      "Signed OTA as default.",
      "Design for real roads and offline-tolerant assist.",
      "Shared identity with JagX OS.",
      "Transparent long support cycles.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Software stack + pilot fleets", spend: "USD 120–220M cumulative" },
      { period: "2035–2037", focus: "City/fleet production partners", spend: "USD 350–600M cumulative" },
      { period: "2038–2040+", focus: "Scaled platforms + autonomy", spend: "USD 800M–1.5B+ cumulative" },
    ],
    img: "/visual-car.svg",
  },
  {
    slug: "devices",
    title: "JagX Devices",
    tagline: "Phones and edge hardware with JagX OS.",
    types: [
      { name: "JagX Phone", note: "Flagship branded handset line." },
      { name: "JagX Phone Lite", note: "Affordable, long-life entry devices." },
      { name: "JagX Edge Box", note: "On-prem AI and Connect nodes." },
      { name: "JagX Tablet", note: "Education and field work." },
    ],
    promises: [
      "JagX OS on the glass — not generic Android only.",
      "Repair-friendly goals and multi-year updates.",
      "African market pricing tiers over time.",
      "Bundle paths with Connect and AI.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Lite + pilot flagship", spend: "USD 90–160M cumulative" },
      { period: "2035–2037", focus: "Volume phones + edge boxes", spend: "USD 250–400M cumulative" },
      { period: "2038–2040+", focus: "Full device family", spend: "USD 500–900M+ cumulative" },
    ],
    img: "/visual-os.svg",
  },
  {
    slug: "cloud",
    title: "JagX Cloud",
    tagline: "Regional cloud with Africa-first latency.",
    types: [
      { name: "Cloud Compute", note: "VMs and containers near users." },
      { name: "Cloud AI", note: "Hosted JagX AI with data residency options." },
      { name: "Cloud Connect", note: "Backend for social at regional scale." },
      { name: "Cloud Edge Link", note: "Sync with on-device OS and Silicon." },
    ],
    promises: [
      "Data residency options for African institutions.",
      "Pricing that does not assume always-on broadband.",
      "Tight coupling with AI, Connect, and OS.",
    ],
    outlook: [
      { period: "2032–2034", focus: "First regional regions", spend: "USD 70–130M cumulative" },
      { period: "2035–2037", focus: "Multi-country presence", spend: "USD 200–350M cumulative" },
      { period: "2038–2040+", focus: "Continent-scale capacity", spend: "USD 450–800M+ cumulative" },
    ],
    img: "/visual-cloud.svg",
  },
  {
    slug: "education",
    title: "JagX Education",
    tagline: "AI literacy and builder programs.",
    types: [
      { name: "JagX Learn", note: "Courses for students and teachers." },
      { name: "JagX Labs", note: "University and community labs." },
      { name: "JagX Cert", note: "Practical certifications on AI, OS, security." },
      { name: "JagX Scholar", note: "Scholarships for African builders." },
    ],
    promises: [
      "Curriculum that includes African languages and contexts over time.",
      "Free and low-cost tiers for public schools where possible.",
      "Path from Learn to CLI to jobs in the ecosystem.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Curriculum + pilot countries", spend: "USD 25–50M cumulative" },
      { period: "2035–2037", focus: "Labs network; certifications", spend: "USD 70–120M cumulative" },
      { period: "2038–2040+", focus: "Continental builder pipeline", spend: "USD 150–300M+ cumulative" },
    ],
    img: "/visual-edu.svg",
  },
  {
    slug: "energy",
    title: "JagX Energy",
    tagline: "Power systems for edge and devices.",
    types: [
      { name: "Energy Solar Kit", note: "Solar + storage for edge nodes and homes." },
      { name: "Energy Device Rail", note: "Efficient power for phones and boxes." },
      { name: "Energy Microgrid", note: "Community microgrid software + hardware." },
    ],
    promises: [
      "Design for unreliable grid realities.",
      "Pair with Edge Box and OS deployments.",
      "Transparent efficiency metrics.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Kits + device rails", spend: "USD 40–80M cumulative" },
      { period: "2035–2037", focus: "Microgrid pilots", spend: "USD 100–180M cumulative" },
      { period: "2038–2040+", focus: "Scaled energy + edge packages", spend: "USD 200–400M+ cumulative" },
    ],
    img: "/visual-energy.svg",
  },
  {
    slug: "shield",
    title: "JagX Shield",
    tagline: "Security, identity, and threat defense.",
    types: [
      { name: "Shield Identity", note: "Keys, biometrics, device attestation." },
      { name: "Shield Ops", note: "Monitoring for Connect and Cloud." },
      { name: "Shield Intel", note: "Threat intelligence for African networks." },
      { name: "Shield Audit", note: "Compliance packages for institutions." },
    ],
    promises: [
      "Security as product, not afterthought.",
      "Protects high-risk users and institutions.",
      "Aligned with Connect Secure and OS enclaves.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Identity + Ops core", spend: "USD 35–70M cumulative" },
      { period: "2035–2037", focus: "Intel network; enterprise", spend: "USD 90–160M cumulative" },
      { period: "2038–2040+", focus: "Regional security standard path", spend: "USD 180–350M+ cumulative" },
    ],
    img: "/visual-secure.svg",
  },
  {
    slug: "pay",
    title: "JagX Pay",
    tagline: "Payments and merchant tools.",
    types: [
      { name: "Pay Wallet", note: "Consumer wallet tied to Connect identity." },
      { name: "Pay Merchant", note: "POS and online tools for SMEs." },
      { name: "Pay Cross-border", note: "Remittance-friendly corridors over time." },
      { name: "Pay API", note: "Builders embed payments in apps." },
    ],
    promises: [
      "Built for African merchants and diaspora flows.",
      "Strong identity via Shield and Connect.",
      "Clear fees; no dark patterns.",
    ],
    outlook: [
      { period: "2032–2034", focus: "Wallet + merchant pilots", spend: "USD 50–90M cumulative" },
      { period: "2035–2037", focus: "Cross-border corridors", spend: "USD 120–220M cumulative" },
      { period: "2038–2040+", focus: "Scale payments rail", spend: "USD 250–450M+ cumulative" },
    ],
    img: "/visual-finance.svg",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
