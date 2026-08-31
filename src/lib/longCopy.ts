export const LONG_COPY: Record<
  string,
  {
    longIntro: string;
    longBody: string[];
    africaImpact: string;
    worldImpact: string;
    direction: string;
  }
> = {
  silicon: {
    longIntro:
      "JagX Silicon is not a slogan about chips. It is a long-horizon program to design, partner, and eventually manufacture AI-first silicon so that intelligence can run at the edge — on phones, edge boxes, vehicles, and community nodes — with packages and dies that carry the JagX name. Software alone is not enough when regions only consume black-box processors designed for other markets, other export rules, and other power assumptions.",
    longBody: [
      "The family is planned around concrete module types: JX-NPU for neural inference on phones and edge boards; JX-SEC for secure enclaves that hold keys, biometrics, and attested identity; JX-EDGE for vision and sensor fusion; JX-AUTO for vehicle compute under Mobility; and JX-LAB for research silicon with universities. Each type exists so teams can adopt a clear part of the stack instead of waiting for a mythical all-in-one chip that never ships.",
      "Early years focus on prototypes, foundry relationships, evaluation boards, and talent — not marketing renders of imaginary wafers. Packages are intended to be marked JagX where we control the design, so the trust chain from silicon to OS to AI is visible. Power and link budgets are written with intermittent grids and costly mobile data in mind.",
      "Silicon is how on-device JagX AI becomes practical, how JagX OS keeps sensitive work local, and how Mobility and Devices avoid permanent dependence on distant cloud inference for every small task. It is also how skills — layout, verification, systems architecture — can grow inside African institutions instead of only being imported as finished modules.",
      "This page shows formal photography of boards, processors, labs, and engineering work alongside branded JagX chip art. The images communicate seriousness: real electronics, real design tables, real factory floors — not only abstract gradients.",
    ],
    africaImpact:
      "Africa imports a large share of the compute that runs phones, base stations, and data centers. When every neural accelerator and secure element is designed elsewhere, local teams inherit someone else's roadmap, pricing, and geopolitical risk. JagX Silicon exists to change that trajectory over decades, not weeks.\n\nOn-device inference cuts the need to send every voice note, photo, or sensor packet abroad for basic AI features. That matters when data is metered, networks drop, and households share a single phone. A NPU tuned for efficiency is not a luxury feature — it is a way to keep assistance available when the tower is congested or the prepaid balance is low.\n\nSecure enclaves matter for identity in environments where account takeover and SIM swap are common threats. If keys and biometrics can stay in hardware that we understand end to end, Connect Secure and Shield Identity become more credible. Community edge boxes in schools and clinics can run models locally when the wide-area link is weak.\n\nJobs and skills follow the design work. University labs (JX-LAB) and partner programs are intended to keep layout, verification, and systems talent on the continent. Over the 2030s, the goal is regional design centers and a visible pipeline from student projects to production silicon.\n\nPower is part of the product story. Chips that assume always-on clean power fail in the field. Designing for sleep states, burst inference, and pairing with JagX Energy kits is how Silicon stays useful in real African conditions — from Lagos workshops to rural clinics.",
    worldImpact:
      "Every market that cares about privacy, offline resilience, or robotics needs efficient trusted edge compute. Co-designed silicon is how on-device AI becomes practical at scale without shipping every frame of video to a distant region.\n\nIndustries under regulation — finance, health, public sector — increasingly ask where inference runs and who can access the model path. A clear enclave story and marked packages help answer those questions.\n\nGlobal customers benefit when African constraints force efficiency: the same low-power NPU that helps a metered phone also helps a battery robot in Europe or a remote sensor in Asia.\n\nJagX Silicon is meant to sit in a coherent stack with OS, AI, Devices, and Mobility so buyers are not assembling five incompatible vendors. That coherence is a worldwide product advantage.",
    direction:
      "Prototypes and foundry partnerships first. Then volume edge chips and auto samples. Then full family coverage and regional design centers through 2040+.\n\nWe will not pretend full foundry independence on day one. Success is measured in shipped modules and working software — not in press-release nanometers.",
  },
  ai: {
    longIntro:
      "JagX AI is multi-agent intelligence for builders, schools, and institutions — attributed clearly to JagX and JRILICENSE. It is not a forgetful single chat window. It is a system of agents that plan, scaffold, write, review, and correct, with destructive actions gated and identity protected.",
    longBody: [
      "The GROUP coding CLI coordinates specialists for backend, frontend, files, shell, design, and review. Free API keys on this page let developers embed the same intelligence under fair use.",
      "Studios, APIs, Edge models, and Gov deployments expand the path: classrooms, startups, on-device inference, and audited public-sector installs.",
      "We publish long explanations because AI products that only show demos hide the hard parts: attribution, safety gates, offline paths, and cost under metered data.",
    ],
    africaImpact:
      "African developers and students often face expensive data, intermittent power, and limited access to enterprise AI subscriptions. A multi-agent CLI that works toward on-device inference is a practical advantage.\n\nFree starter API keys lower the barrier for hackathons, university projects, and early startups. Attribution to JagX and JRILICENSE keeps identity honest.\n\nPublic-sector and education deployments can keep sensitive workflows under clearer control. Skills compound when local builders contribute tools back into the ecosystem.",
    worldImpact:
      "Teams everywhere need review loops, tool calling, and clear product identity. Multi-agent systems that gate destructive actions are safer for professional software work.\n\nInstitutions under compliance pressure need audit trails and honest branding. JagX AI is built for those universal needs while starting from African constraints that force efficiency.",
    direction:
      "CLI and API maturity, free key program, Studio for education, then Edge models on Silicon and OS, then sovereign Gov deployments at scale through the 2030s.",
  },
  connect: {
    longIntro:
      "JagX Connect is a social network designed so privacy is the default — for African users first, and for anyone tired of being the product.",
    longBody: [
      "Native Flutter apps share accounts with the web. Real-time feeds, chat, communities. Connect Secure hardens messaging for high-risk users.",
      "Integration with JagX OS and Shield means social identity can eventually align with device identity.",
    ],
    africaImpact:
      "Account takeover and leaky data practices hit African users hard. A network that prioritizes private messaging and stronger defaults is a daily advantage for families and SMEs.\n\nMetered data and weak signals are normal. Efficient clients serve people better than clones that assume unlimited Wi-Fi.\n\nTrust is economic infrastructure. When people believe a platform will not quietly train on private chats, they use it for real coordination.",
    worldImpact:
      "Stronger defaults and less performative feeds help users worldwide. A credible Secure tier gives a path for high-risk users who cannot rely on platforms that optimize only for time-on-site.",
    direction:
      "Trust features and Secure pilots, Business scale, deeper encryption, local-language moderation, shared privacy with JagX OS through 2040+.",
  },
  os: {
    longIntro:
      "JagX OS is a privacy-first operating system with on-device AI and clear JagX and JRILICENSE branding on the glass.",
    longBody: [
      "Phone, Edge, Go, and Pro variants cover consumers, SMEs, kiosks, and enterprise. Connect and JagX AI are first-class. Long support cycles aim to keep devices useful for years.",
    ],
    africaImpact:
      "Shared phones, prepaid data, and higher harm from account seizure are everyday realities. An OS that minimizes silent collection and enables on-device AI reduces cost and risk.\n\nLong update support means a device bought for school or a shop stays safer longer. Local branding builds trust.",
    worldImpact:
      "Professionals and privacy-conscious users everywhere want clear controls and multi-year updates. Coherence with a real AI and social stack is an advantage versus fragmented OEM skins.",
    direction:
      "Reference devices, carrier pilots, volume OS, edge verticals, regional default ambition over the 2030s.",
  },
  mobility: {
    longIntro:
      "JagX Mobility treats vehicles as software-defined platforms: signed OTA, cabin intelligence, and assist features designed for real roads.",
    longBody: [
      "Software, City, Fleet, and Autonomy types sequence the work honestly. Pilot fleets come before theatre about full self-driving.",
    ],
    africaImpact:
      "Road conditions and connectivity differ from highway-centric markets. Secure OTA matters when physical recalls are slow. Offline-tolerant assist is more useful than features that only work on perfect infrastructure.\n\nUrban logistics for African cities are primary design cases, not afterthoughts.",
    worldImpact:
      "Every market needs verifiable OTA and cabin systems that do not lock owners forever. The same security discipline applies globally.",
    direction:
      "Software stack and pilots, city and fleet partners, scaled platforms and staged autonomy through 2040+.",
  },
  devices: {
    longIntro:
      "JagX Devices put JagX OS on phones, tablets, and edge boxes — our brand on the glass.",
    longBody: [
      "Phone, Phone Lite, Edge Box, and Tablet cover budgets from flagship to community nodes. Repair-friendly goals and multi-year updates are product principles.",
    ],
    africaImpact:
      "Affordable Lite devices with long support help students and SMEs. Edge Boxes bring local AI to schools and shops when the wide-area link is weak.\n\nRepairability and battery life dominate real decisions. Designing for those is respect for African users.",
    worldImpact:
      "Long support and clear OS identity are advantages for any market tired of disposable devices.",
    direction:
      "Lite and pilot flagship, volume phones and edge boxes, full family through 2040+.",
  },
  cloud: {
    longIntro:
      "JagX Cloud is regional compute and AI hosting with Africa-first latency and data residency options.",
    longBody: [
      "Compute, Cloud AI, Connect backends, and Edge Link form the core. Trustworthy capacity near users — not cloning every hyperscaler feature on day one.",
    ],
    africaImpact:
      "Local capacity reduces round-trips abroad for everyday AI and social backends. Institutions get clearer residency stories. Pricing can respect expensive bandwidth.",
    worldImpact:
      "Global customers who need region choice and compliance can use the same product family.",
    direction:
      "First regions, multi-country presence, continent-scale capacity through 2040+.",
  },
  education: {
    longIntro:
      "JagX Education builds AI literacy, labs, certifications, and scholarships so African builders can enter the ecosystem with dignity.",
    longBody: [
      "Learn, Labs, Cert, and Scholar paths move people from curiosity to real projects on JagX AI, OS, and Connect.",
    ],
    africaImpact:
      "Skills stay local when programs are designed for local schools. Free and low-cost tiers make AI literacy less exclusive. Scholarships reduce financial barriers.",
    worldImpact:
      "Diaspora and global learners can follow the same tracks; certifications should mean something inside the JagX ecosystem.",
    direction:
      "Pilot countries, labs network, continental builder pipeline through 2040+.",
  },
  energy: {
    longIntro:
      "JagX Energy designs solar kits, device power rails, and microgrid software so edge AI survives unreliable grids.",
    longBody: [
      "Unreliable power is treated as a primary case. Kits pair with Edge Boxes and OS deployments.",
    ],
    africaImpact:
      "Edge AI fails when power fails. Solar-ready kits keep community nodes and phones useful. Microgrid software helps shared generation in neighborhoods.",
    worldImpact:
      "Off-grid and disaster-resilient deployments worldwide need the same discipline.",
    direction:
      "Kits and rails, microgrid pilots, scaled packages with Edge hardware.",
  },
  shield: {
    longIntro:
      "JagX Shield is security as a product line: identity, ops monitoring, threat intelligence, and audit packages.",
    longBody: [
      "Identity ties to OS enclaves and Connect. Ops watches social and cloud layers. Intel focuses on real abuse patterns.",
    ],
    africaImpact:
      "Account takeover and social engineering are common, not rare. Tools that assume that reality protect high-risk users, journalists, and institutions more effectively.",
    worldImpact:
      "Coherent identity and ops across JagX products serve global customers under compliance pressure.",
    direction:
      "Identity and Ops core, Intel network, enterprise audit, regional standard path.",
  },
  pay: {
    longIntro:
      "JagX Pay is wallets, merchant tools, cross-border corridors, and APIs — built for African SMEs and diaspora flows with clear fees.",
    longBody: [
      "Identity is shared with Connect and Shield so trust is not rebuilt from zero. APIs let builders embed payments in their own apps.",
    ],
    africaImpact:
      "SMEs need simple tools. Diaspora corridors matter to household income. Clear fees beat surprise charges. Mobile-first flows match how people already move money.",
    worldImpact:
      "Builders and merchants globally can use the same API family as regional compliance matures.",
    direction:
      "Wallet and merchant pilots, corridors, scale payments rail through 2040+.",
  },
};
