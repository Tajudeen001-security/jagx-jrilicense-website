import { LONG_COPY } from "./longCopy";

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
  ai: ["/visual-robot.svg", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80", "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80", "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80", "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80"],
  connect: ["/brand-mark.svg", "/visual-africa.svg", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80", "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80"],
  os: ["/visual-os.svg", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80", "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80", "/visual-africa.svg"],
  silicon: ["/visual-chip.svg", "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80", "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=900&q=80", "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80"],
  mobility: ["/visual-car.svg", "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80", "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80", "https://images.unsplash.com/photo-1549317336-206569e8475c?w=900&q=80"],
  devices: ["/visual-os.svg", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80", "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=900&q=80", "/visual-africa.svg"],
  cloud: ["/visual-cloud.svg", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80", "/visual-africa.svg"],
  education: ["/visual-edu.svg", "/visual-africa.svg", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"],
  energy: ["/visual-energy.svg", "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80"],
  shield: ["/visual-secure.svg", "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80"],
  pay: ["/visual-finance.svg", "/visual-africa.svg", "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"],
};

export const PRODUCTS: ProductLine[] = [
  { slug: "ai", title: "JagX AI", tagline: "Multi-agent intelligence for builders, schools, and institutions.", types: [{ name: "JagX AI CLI", note: "GROUP multi-agent coding with review loops." }, { name: "JagX AI Studio", note: "Web workspace for teams and classrooms." }, { name: "JagX AI API", note: "HTTP API — free starter keys on this page." }, { name: "JagX AI Edge", note: "On-device models via OS and Silicon." }, { name: "JagX AI Gov", note: "Auditable deployments for public sector." }], promises: ["Outputs attributed to JagX & JRILICENSE.", "Destructive actions gated by default.", "Path to on-device inference.", "Free starter API keys for builders."], outlook: [{ period: "2032–2034", focus: "Studio + API; free key program", spend: "USD 40–80M cumulative" }, { period: "2035–2037", focus: "Edge models + enterprise", spend: "USD 120–200M cumulative" }, { period: "2038–2040+", focus: "Lifecycle agents; sovereign deployments", spend: "USD 250–400M+ cumulative" }], img: "/visual-robot.svg", gallery: G.ai },
  { slug: "connect", title: "JagX Connect", tagline: "Privacy-first social for Africa and the world.", types: [{ name: "Connect Personal", note: "Moments, messaging, privacy controls." }, { name: "Buddy Circles", note: "Interest and community groups." }, { name: "Connect Business", note: "Verified pages for SMEs." }, { name: "Connect Secure", note: "Hardened messaging for high-risk users." }, { name: "Connect Live", note: "Real-time events." }], promises: ["Privacy-first defaults.", "Native apps for African networks.", "Local-language moderation over time.", "Identity with OS and Shield."], outlook: [{ period: "2032–2034", focus: "Trust features; Secure tier", spend: "USD 60–100M cumulative" }, { period: "2035–2037", focus: "Business + Secure scale", spend: "USD 150–250M cumulative" }, { period: "2038–2040+", focus: "Global secure alternative", spend: "USD 300–500M+ cumulative" }], img: "/brand-mark.svg", gallery: G.connect },
  { slug: "os", title: "JagX OS", tagline: "Privacy-first OS with on-device AI and JagX branding on the glass.", types: [{ name: "JagX OS Phone", note: "Consumer and SME phones." }, { name: "JagX OS Edge", note: "Kiosks, POS, edge boards." }, { name: "JagX OS Go", note: "Lightweight entry builds." }, { name: "JagX OS Pro", note: "Enterprise long support." }], promises: ["JagX branding on boot and settings.", "On-device AI path with Silicon.", "Multi-year security updates.", "Connect and AI first-class."], outlook: [{ period: "2032–2034", focus: "Reference devices", spend: "USD 80–150M cumulative" }, { period: "2035–2037", focus: "Volume OS + edge", spend: "USD 200–350M cumulative" }, { period: "2038–2040+", focus: "Regional default OS ambition", spend: "USD 400–700M+ cumulative" }], img: "/visual-os.svg", gallery: G.os },
  { slug: "silicon", title: "JagX Silicon", tagline: "AI-first chips marked JagX end to end.", types: [{ name: "JX-NPU", note: "Neural processing for phones and edge." }, { name: "JX-SEC", note: "Secure enclave." }, { name: "JX-EDGE", note: "Vision and sensor fusion." }, { name: "JX-AUTO", note: "Vehicle compute." }, { name: "JX-LAB", note: "Research silicon." }], promises: ["Packages marked JagX.", "Power budgets for intermittent networks.", "African talent pipeline.", "Aligned with OS and AI."], outlook: [{ period: "2032–2034", focus: "NPU/SEC prototypes", spend: "USD 100–200M cumulative" }, { period: "2035–2037", focus: "Volume edge chips", spend: "USD 300–500M cumulative" }, { period: "2038–2040+", focus: "Full family + design centers", spend: "USD 600M–1.2B+ cumulative" }], img: "/visual-chip.svg", gallery: G.silicon },
  { slug: "mobility", title: "JagX Mobility", tagline: "Software-defined vehicles with secure OTA.", types: [{ name: "Mobility Software", note: "OTA, cabin AI, security." }, { name: "Mobility City", note: "Urban EV platforms." }, { name: "Mobility Fleet", note: "Commercial fleets." }, { name: "Mobility Autonomy", note: "Assist research." }], promises: ["Signed OTA as default.", "Real roads, imperfect connectivity.", "Shared identity with OS.", "Long support cycles."], outlook: [{ period: "2032–2034", focus: "Software + pilot fleets", spend: "USD 120–220M cumulative" }, { period: "2035–2037", focus: "City/fleet partners", spend: "USD 350–600M cumulative" }, { period: "2038–2040+", focus: "Scaled platforms", spend: "USD 800M–1.5B+ cumulative" }], img: "/visual-car.svg", gallery: G.mobility },
  { slug: "devices", title: "JagX Devices", tagline: "Phones and edge boxes running JagX OS.", types: [{ name: "JagX Phone", note: "Flagship handset." }, { name: "JagX Phone Lite", note: "Affordable long-life." }, { name: "JagX Edge Box", note: "On-prem AI nodes." }, { name: "JagX Tablet", note: "Education and field work." }], promises: ["JagX OS on the glass.", "Multi-year updates.", "African pricing tiers over time.", "Bundles with Connect and AI."], outlook: [{ period: "2032–2034", focus: "Lite + pilot flagship", spend: "USD 90–160M cumulative" }, { period: "2035–2037", focus: "Volume phones + edge", spend: "USD 250–400M cumulative" }, { period: "2038–2040+", focus: "Full device family", spend: "USD 500–900M+ cumulative" }], img: "/visual-os.svg", gallery: G.devices },
  { slug: "cloud", title: "JagX Cloud", tagline: "Regional cloud with Africa-first latency.", types: [{ name: "Cloud Compute", note: "VMs near users." }, { name: "Cloud AI", note: "Hosted JagX AI." }, { name: "Cloud Connect", note: "Social backends." }, { name: "Cloud Edge Link", note: "Sync with devices." }], promises: ["Data residency options.", "Aware of expensive bandwidth.", "Coupled with AI, Connect, OS."], outlook: [{ period: "2032–2034", focus: "First regions", spend: "USD 70–130M cumulative" }, { period: "2035–2037", focus: "Multi-country", spend: "USD 200–350M cumulative" }, { period: "2038–2040+", focus: "Continent-scale", spend: "USD 450–800M+ cumulative" }], img: "/visual-cloud.svg", gallery: G.cloud },
  { slug: "education", title: "JagX Education", tagline: "AI literacy, labs, certs, scholarships.", types: [{ name: "JagX Learn", note: "Courses." }, { name: "JagX Labs", note: "Community labs." }, { name: "JagX Cert", note: "Practical certifications." }, { name: "JagX Scholar", note: "Scholarships." }], promises: ["African language coverage over time.", "Low-cost tiers where possible.", "Path to CLI, API, and jobs."], outlook: [{ period: "2032–2034", focus: "Curriculum pilots", spend: "USD 25–50M cumulative" }, { period: "2035–2037", focus: "Labs network", spend: "USD 70–120M cumulative" }, { period: "2038–2040+", focus: "Builder pipeline", spend: "USD 150–300M+ cumulative" }], img: "/visual-edu.svg", gallery: G.education },
  { slug: "energy", title: "JagX Energy", tagline: "Solar kits and microgrids for edge reality.", types: [{ name: "Energy Solar Kit", note: "Solar + storage." }, { name: "Energy Device Rail", note: "Efficient device power." }, { name: "Energy Microgrid", note: "Community packages." }], promises: ["Unreliable grid as primary case.", "Pairs with Edge Box and OS.", "Transparent efficiency metrics."], outlook: [{ period: "2032–2034", focus: "Kits + rails", spend: "USD 40–80M cumulative" }, { period: "2035–2037", focus: "Microgrid pilots", spend: "USD 100–180M cumulative" }, { period: "2038–2040+", focus: "Scaled packages", spend: "USD 200–400M+ cumulative" }], img: "/visual-energy.svg", gallery: G.energy },
  { slug: "shield", title: "JagX Shield", tagline: "Identity, ops, threat intel, audit.", types: [{ name: "Shield Identity", note: "Keys and attestation." }, { name: "Shield Ops", note: "Connect and Cloud monitoring." }, { name: "Shield Intel", note: "Threat intelligence." }, { name: "Shield Audit", note: "Institution packages." }], promises: ["Security as a product.", "High-risk users and institutions.", "Aligned with Connect Secure and OS."], outlook: [{ period: "2032–2034", focus: "Identity + Ops", spend: "USD 35–70M cumulative" }, { period: "2035–2037", focus: "Intel + enterprise", spend: "USD 90–160M cumulative" }, { period: "2038–2040+", focus: "Regional standard path", spend: "USD 180–350M+ cumulative" }], img: "/visual-secure.svg", gallery: G.shield },
  { slug: "pay", title: "JagX Pay", tagline: "Wallets, merchants, corridors, APIs.", types: [{ name: "Pay Wallet", note: "Consumer wallet." }, { name: "Pay Merchant", note: "SME tools." }, { name: "Pay Cross-border", note: "Remittance corridors." }, { name: "Pay API", note: "Embed payments." }], promises: ["African merchants and diaspora first.", "Identity via Shield and Connect.", "Clear fees; no dark patterns."], outlook: [{ period: "2032–2034", focus: "Wallet + merchant pilots", spend: "USD 50–90M cumulative" }, { period: "2035–2037", focus: "Cross-border corridors", spend: "USD 120–220M cumulative" }, { period: "2038–2040+", focus: "Scale payments rail", spend: "USD 250–450M+ cumulative" }], img: "/visual-finance.svg", gallery: G.pay },
];

for (const p of PRODUCTS) {
  const c = LONG_COPY[p.slug];
  if (c) {
    p.longIntro = c.longIntro;
    p.longBody = c.longBody;
    p.africaImpact = c.africaImpact;
    p.worldImpact = c.worldImpact;
    p.direction = c.direction;
  }
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
