export const COMPANY = {
  name: "ABI Tech",
  email: "admin@abitech.site",
  emailHref: "mailto:admin@abitech.site",
  whatsapp: "+63 945 4456 764",
  whatsappHref: "https://wa.me/639454456764",
  officeName: "Ortigas Office",
  addressLines: [
    "One Corporate Center",
    "Julia Vargas Ave. cor. Meralco Ave.",
    "Ortigas Center, Pasig City 1605",
    "Philippines",
  ],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=One%20Corporate%20Center%20Julia%20Vargas%20Ave%20Meralco%20Ave%20Ortigas%20Center%20Pasig",
  appointmentNote: "Meetings by appointment.",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Use Cases", to: "/use-cases" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Portfolio", href: "https://portfolio.abitech.site" },
  { label: "Blog", to: "/blog" },
  { label: "Our Approach", to: "/approach" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "ai-strategy",
    title: "AI Strategy & Advisory",
    short: "Identify opportunities, define roadmaps, and build AI strategies tailored to your business goals.",
    icon: "lightbulb" as const,
    body: "We sit with your operators, not just your slide deck. In a few weeks we map where AI can move revenue, cost, or risk — and where it cannot. You leave with a sequenced roadmap, a build-vs-buy view, and a business case your board can actually fund.",
    outcomes: [
      "Opportunity map ranked by value, feasibility, and data readiness",
      "12–18 month implementation roadmap with owners and gates",
      "Risk, governance, and model-use policy starter kit",
      "Executive readout your leadership team can decide from",
    ],
  },
  {
    slug: "custom-ai",
    title: "Custom AI Development",
    short: "Build and deploy AI agents, voice AI, computer vision, NLP, and more — designed for your use case.",
    icon: "code" as const,
    body: "Off-the-shelf chatbots stall the moment they meet your data. We design, train, and ship production systems — agents, voice, vision, retrieval, and decisioning — that live inside the tools your teams already use.",
    outcomes: [
      "Production-grade agents with tool use, memory, and audit trails",
      "Voice AI for contact centers and field operations",
      "Computer vision for quality, safety, and document intake",
      "Domain NLP and RAG over your private knowledge",
    ],
  },
  {
    slug: "automation",
    title: "Automation & Integration",
    short: "Streamline operations and reduce costs through intelligent automation and system integration.",
    icon: "cog" as const,
    body: "Most of the value in AI is not a model — it is the plumbing. We connect models to ERP, CRM, EHR, core banking, and the messy middle of your stack so work actually moves without a human copy-paste.",
    outcomes: [
      "Intelligent document processing with human-in-the-loop review",
      "Workflow automation across SAP, Salesforce, ServiceNow, and custom APIs",
      "Event-driven orchestration with observability and rollback",
      "Cost-to-serve reduction you can measure in a quarter",
    ],
  },
  {
    slug: "dedicated-teams",
    title: "Dedicated Teams",
    short: "Skilled AI and software engineers to scale your vision, faster.",
    icon: "users" as const,
    body: "When you need more than a project, we embed a squad — engineers, an applied scientist, and a delivery lead — that works as an extension of your team. Same rituals, same repo, faster throughput.",
    outcomes: [
      "Squads staffed in weeks, not quarters",
      "Senior AI + full-stack coverage in one pod",
      "Knowledge transfer baked into every sprint",
      "Scale up or wind down without a hiring freeze",
    ],
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Better care. Smarter systems.",
    image: "/images/ind-healthcare.jpg",
    summary:
      "Clinical operations, patient support, and medical documentation that keep clinicians with patients — not keyboards.",
    useCases: [
      "AI-assisted patient intake and triage",
      "Ambient clinical documentation",
      "Prior-authorization and claims acceleration",
      "Care-gap outreach that patients actually answer",
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    tagline: "Faster insights. Lower risk.",
    image: "/images/ind-finance.jpg",
    summary:
      "From KYC to credit memos, we put models where analysts already work — with the controls a regulated firm requires.",
    useCases: [
      "Automated document processing for KYC and lending",
      "Fraud and AML investigation copilots",
      "Earnings and research summarization",
      "Operations bots for reconciliations and exceptions",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Personalized experiences. Higher sales.",
    image: "/images/ind-retail.jpg",
    summary:
      "Store, e-commerce, and contact-center AI that treats every shopper as if your best associate is always on shift.",
    useCases: [
      "Real-time multilingual support",
      "Personalized product discovery",
      "Inventory and demand sensing",
      "Associate copilot on the floor",
    ],
  },
  {
    slug: "education",
    title: "Education",
    tagline: "More inclusive learning. Greater access.",
    image: "/images/ind-education.jpg",
    summary:
      "Tutors, content tools, and admin automation that give teachers hours back and students a path that fits them.",
    useCases: [
      "Adaptive tutoring in multiple languages",
      "Assignment feedback at classroom scale",
      "Enrollment and advising assistants",
      "Accessibility tools for diverse learners",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "Smarter operations. Higher productivity.",
    image: "/images/ind-manufacturing.jpg",
    summary:
      "Vision, maintenance, and planning systems that catch defects early and keep lines moving.",
    useCases: [
      "Visual inspection on the line",
      "Predictive maintenance from sensor streams",
      "Work-instruction and safety copilots",
      "Supply-chain exception handling",
    ],
  },
  {
    slug: "government",
    title: "Government",
    tagline: "Efficient services. Stronger communities.",
    image: "/images/ind-government.jpg",
    summary:
      "Citizen services, casework, and records that move at the speed people expect — with the transparency the public deserves.",
    useCases: [
      "Multilingual citizen service desks",
      "Caseworker document assistants",
      "Records search across decades of archives",
      "Benefits eligibility screening with auditability",
    ],
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "patient-support",
    industry: "Healthcare",
    industrySlug: "healthcare",
    title: "AI-Powered Patient Support System",
    image: "/images/case-healthcare.jpg",
    challenge:
      "A regional hospital network was drowning in after-hours calls. Nurses spent nights answering the same five questions, wait times stretched past twenty minutes, and satisfaction scores were sliding.",
    solution:
      "We designed a voice-and-chat support layer that handles scheduling, refill status, and care-instruction follow-ups, with a warm handoff to a nurse when the model is unsure. It sits on top of their existing EHR — no rip-and-replace.",
    metrics: [
      { value: "70%", label: "Higher Patient Satisfaction" },
      { value: "50%", label: "Lower Support Costs" },
      { value: "3X", label: "Faster Response Time" },
    ],
  },
  {
    slug: "document-processing",
    industry: "Finance",
    industrySlug: "finance",
    title: "Automated Document Processing",
    image: "/images/case-finance.jpg",
    challenge:
      "A Southeast Asian lender was taking six days to underwrite SME facilities because analysts read every bank statement, invoice, and ID by hand. Growth was capped by headcount.",
    solution:
      "We built an intake pipeline that classifies, extracts, and cross-checks 40+ document types, then writes a structured credit memo for analyst review. Exceptions route to a queue with the original page highlighted.",
    metrics: [
      { value: "100,000+", label: "Documents Processed Monthly" },
      { value: "99.5%", label: "Accuracy Rate" },
      { value: "80%", label: "Reduced Processing Time" },
    ],
  },
  {
    slug: "multilingual-support",
    industry: "Retail",
    industrySlug: "retail",
    title: "Real-Time Multilingual Support",
    image: "/images/case-retail.jpg",
    challenge:
      "A specialty retailer expanding across ASEAN could not staff native speakers for every store and chat channel. Cart abandonment spiked whenever shoppers hit a language wall.",
    solution:
      "We deployed a real-time multilingual assistant — in-store kiosk, web, and WhatsApp — grounded in the live catalog and return policy, with associate takeover when a sale is on the line.",
    metrics: [
      { value: "50+", label: "Languages Supported" },
      { value: "90%", label: "Customer Satisfaction Increase" },
      { value: "2X", label: "Higher Conversion Rate" },
    ],
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Understand your goals, challenges, and opportunities.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Design",
    body: "Create a tailored AI solution and implementation plan.",
    icon: "pen" as const,
  },
  {
    n: "03",
    title: "Develop",
    body: "Build, test, and iterate with transparency.",
    icon: "code" as const,
  },
  {
    n: "04",
    title: "Deploy",
    body: "Launch and integrate into your operations.",
    icon: "rocket" as const,
  },
  {
    n: "05",
    title: "Scale",
    body: "Optimize, monitor, and expand for greater impact.",
    icon: "bars" as const,
  },
] as const;

export const STATS = [
  { value: "50+", label: "Projects Delivered", icon: "globe" as const },
  { value: "30+", label: "Global Clients", icon: "users" as const },
  { value: "99%", label: "Client Satisfaction", icon: "thumb" as const },
  { value: "5+", label: "Years of Experience", icon: "trophy" as const },
] as const;

export const JOBS = [
  {
    id: "sr-ai-engineer",
    title: "Senior AI Engineer",
    team: "Delivery",
    location: "Ortigas, Pasig · Hybrid",
    type: "Full-time",
    blurb:
      "Own model integration, evaluation, and production reliability on client squads. You have shipped RAG or agents that real users depend on.",
  },
  {
    id: "solutions-consultant",
    title: "AI Solutions Consultant",
    team: "Advisory",
    location: "Ortigas, Pasig · Client-facing",
    type: "Full-time",
    blurb:
      "Translate messy operations into a scoped AI program. You are as comfortable in a boardroom as you are in a process workshop.",
  },
  {
    id: "mlops",
    title: "MLOps Engineer",
    team: "Platform",
    location: "Remote · APAC",
    type: "Full-time",
    blurb:
      "Stand up evaluation, tracing, and deployment pipelines so models do not become mystery boxes after go-live.",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    team: "Experience",
    location: "Ortigas, Pasig · Hybrid",
    type: "Full-time",
    blurb:
      "Design the human side of AI products — handoff states, trust, and the moments a person should take over from a model.",
  },
  {
    id: "engagement-manager",
    title: "Engagement Manager",
    team: "Delivery",
    location: "Ortigas, Pasig · Hybrid",
    type: "Full-time",
    blurb:
      "Run the engagement. Scope, staffing, executive communication, and the unglamorous work of making a program land.",
  },
] as const;

export const PARTNERS = [
  "Microsoft",
  "NVIDIA",
  "AWS",
  "Google Cloud",
  "OpenAI",
  "Meta",
] as const;
