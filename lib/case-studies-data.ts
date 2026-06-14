export type CaseStudy = {
  id: string
  title: string
  subtitle: string
  role: string
  timeline: string
  year: string
  team: string
  impact: string
  tags: string[]
  accentColor: string
  problem: { summary: string; points: string[] }
  research: { summary: string; methods: { method: string; finding: string }[] }
  strategy: { summary: string; framework: string; frameworkDetails: string[]; decision: string }
  execution: { summary: string; steps: { phase: string; action: string }[] }
  results: { summary: string; metrics: { label: string; value: string; change: string }[] }
  learnings: { summary: string; points: string[] }
}

export const caseStudies: CaseStudy[] = [
  {
    id: "mesan-mentorship",
    title: "MeSan Mentorship Platform",
    subtitle: "Co-founding and leading a mentorship platform from 0 to INR 1.65 Lakhs in revenue",
    role: "Co-Founder & Product Lead",
    timeline: "Oct 2025 — Present",
    year: "2025",
    team: "12 members — product, engineering, marketing",
    impact: "INR 1.65L revenue generated",
    tags: ["EdTech", "0-to-1", "Growth"],
    accentColor: "text-blue-400",
    problem: {
      summary: "Students at IIT Roorkee and across India lacked structured access to mentorship from seniors and industry professionals. Existing platforms were either too expensive, too generic, or not focused on the Indian student context. The gap was clear — high demand, fragmented supply.",
      points: [
        "No structured mentorship platform built specifically for Indian engineering students",
        "Existing solutions like LinkedIn and generic coaching were expensive and unstructured",
        "Students needed guidance on placements, startups, research, and career pivots",
        "Mentors had no easy way to offer help without a time-consuming open-ended commitment",
      ],
    },
    research: {
      summary: "Before building anything, I ran structured discovery across two user groups — mentees (students) and mentors (seniors and professionals).",
      methods: [
        { method: "Student Interviews (n=40)", finding: "Top need: placement guidance and resume reviews from people who had recently gone through the same process" },
        { method: "Mentor Interviews (n=15)", finding: "Mentors willing to help but needed async, time-boxed formats — not open-ended commitments" },
        { method: "Competitive Analysis", finding: "Topmate and similar platforms exist but are not IIT or campus-specific — community trust was the missing ingredient" },
        { method: "Survey (n=120 students)", finding: "78% would pay INR 299-499 for a 30-minute session with a relevant senior from their institution" },
      ],
    },
    strategy: {
      summary: "We positioned MeSan as the campus-trusted mentorship network — not a generic marketplace. The key insight was that students trust seniors from their own institution far more than unknown professionals online.",
      framework: "MoSCoW Prioritization",
      frameworkDetails: [
        "Must have: Mentor profiles, session booking, payment integration",
        "Must have: IIT Roorkee community launch for trust and network effects",
        "Should have: Async Q&A format for low-commitment mentor participation",
        "Could have: Group sessions and cohort-based programs",
        "Won't have in v1: AI matching, mobile app",
      ],
      decision: "Launch with a curated cohort of 15 high-quality mentors from the IIT Roorkee alumni network during placement season, and use word-of-mouth as the primary acquisition channel to keep CAC at zero.",
    },
    execution: {
      summary: "Ran a lean 8-week build-and-launch sprint with a cross-functional team of 12.",
      steps: [
        { phase: "Week 1-2", action: "Built mentor onboarding flow in React.js and Remix. Recruited first 15 mentors personally through alumni network." },
        { phase: "Week 3-4", action: "Integrated payment system. Built booking and calendar management system for session scheduling." },
        { phase: "Week 5", action: "Soft launch to 50 students. Collected feedback on booking UX and session quality through post-session surveys." },
        { phase: "Week 6", action: "Iterated on mentor profile pages based on feedback. Added session review and rating system." },
        { phase: "Week 7-8", action: "Full launch during placement season. Ran targeted outreach across college WhatsApp groups and campus notice boards." },
      ],
    },
    results: {
      summary: "The platform achieved revenue in the first launch phase with strong initial traction from the IIT Roorkee community.",
      metrics: [
        { label: "Revenue Generated", value: "₹1.65L", change: "0 to 1" },
        { label: "Team Size", value: "12", change: "built from scratch" },
        { label: "Mentors Onboarded", value: "15+", change: "curated network" },
        { label: "Launch Timeline", value: "8 weeks", change: "0 to live" },
      ],
    },
    learnings: {
      summary: "Building MeSan taught me that distribution is as important as product — especially in community-driven marketplace businesses.",
      points: [
        "Timing matters — launching during placement season gave us 10x the traction versus a random month",
        "Trust is the product in marketplace businesses — the IIT Roorkee brand did more than any feature we built",
        "Async formats like Q&A and recorded sessions unlocked mentor supply that synchronous formats could not",
        "Would invest in referral mechanics earlier — our best acquisition was students sharing sessions with batchmates organically",
      ],
    },
  },
  {
    id: "ziddi-krunch-gtm",
    title: "Ziddi Krunch — India's First Savory Protein Chip",
    subtitle: "A strategic category expansion proposal for MuscleBlaze targeting 150M+ health-conscious consumers via a digital-first GTM",
    role: "Product Strategist",
    timeline: "Jan 2026 — Feb 2026",
    year: "2026",
    team: "Solo project — Society of Business, IIT Roorkee",
    impact: "₹24 Crore Year 1 revenue projected",
    tags: ["GTM Strategy", "Consumer", "Product Roadmap"],
    accentColor: "text-purple-400",
    problem: {
      summary: "The Indian healthy snacks market is polarized between unhealthy mass snacks (Lays, Kurkure) and sweet-biased protein products (bars, cookies, peanut butter). Fitness-conscious consumers — especially urban millennials — are experiencing 'sweet fatigue' from protein bars and shakes. The Indian savory snack market is valued at $14 Billion growing at 8% CAGR till 2030, yet there is zero dominant player in the High-Protein Savory segment. This is the Blue Ocean Gap.",
      points: [
        "90% of the healthy snacking market is sweet — the savory aisle is completely empty",
        "150 Million health-conscious Indians are the serviceable addressable market with no tailored product",
        "Fitness enthusiasts choose between Junk (Lays — tasty but unhealthy) or Diet Chips (healthy but tasteless)",
        "MuscleBlaze operates as a low-frequency business (Whey: 4x/year) — needs a high-frequency product (Chips: 100x/year) to increase Customer LTV",
        "73% of Indians now read ingredient labels before buying — demand for clean, savory protein is real and growing",
      ],
    },
    research: {
      summary: "Conducted deep consumer, market, and competitive research to validate the category opportunity and define the product positioning.",
      methods: [
        { method: "Market Sizing Analysis", finding: "Indian savory snacks market recorded $4.3B in 2024 at 5.2% CAGR. Healthy Savory Snacks growing at 18% YoY vs 4% for traditional snacks" },
        { method: "Consumer Persona Research", finding: "Core user: Rohan, 26, IT professional, gym 4x/week. Pain point: At 5 PM office break, only options are samosas or a boring protein bar" },
        { method: "Competitive Landscape Audit", finding: "RiteBite has hard texture. The Whole Truth is 90% sweet. Too Yumm is low protein. Farmley misses macro targets. No one owns savory + high protein + Indian flavors" },
        { method: "Consumer Survey", finding: "67% of consumers actively seeking guilt-free savory options like Makhana. Fastest-growing search: savory guilt-free chips and bhujia alternatives" },
      ],
    },
    strategy: {
      summary: "Positioned Ziddi Krunch as India's first savory high-protein chip — not another sweet bar. Built on a 3-Pillar Moat Strategy: Scientific Superiority (Biozyme technology for zero bloating), Palate Superiority (Indian chatpata flavors), and Trust Superiority (pharma-grade forensic transparency with batch-specific authentication codes).",
      framework: "TAM-SAM-SOM Revenue Funnel + MoSCoW",
      frameworkDetails: [
        "TAM: 150M health-conscious Indians earning >₹4.5L/year who care about health",
        "SAM: 5M active gym-goers — MuscleBlaze already has 60% brand recall with this audience",
        "SOM Year 1: 2% of SAM = 100,000 users buying 4 packs/month = ₹24 Crore revenue",
        "Must have: Biozyme-powered baked chips in 3 Indian flavors (Ziddi Masala, Cream and Onion, Peri-Peri Punch)",
        "Must have: Quick Commerce launch on Blinkit and Zepto targeting 4-7 PM and 11 PM late night munchie windows",
        "Should have: D2C subscription on MB App — 30 packs/month for recurring revenue",
        "Won't have in v1: Offline modern trade, international expansion",
      ],
      decision: "Lead with a digital-first Quick Commerce launch targeting impulse purchase windows. Use free sample inserts in every Whey Protein tub sold (Zero CAC trial strategy) to convert 15% of existing customers into weekly snack subscribers within Year 1.",
    },
    execution: {
      summary: "Designed a 12-month phased product roadmap with clear OKRs for each phase.",
      steps: [
        { phase: "Months 1-3: The Lab", action: "R&D and formulation. Solve cardboard taste problem. Develop Post-Bake Biozyme Dusting (probiotics sprayed after cooking to prevent heat damage). Finalize 3 Indian Hero flavors: Ziddi Masala, Cream and Onion, Peri-Peri." },
        { phase: "Months 4-6: The Setup", action: "Asset-light OEM manufacturing partner for popping technology. Deploy Authentication Code system on every pack (industry first). Gym Bag Beta: 10K units as surprise gifts in Whey orders with QR codes collecting Rate the Crunch feedback." },
        { phase: "Months 7-9: The Attack", action: "Exclusive drop on MB App and Website for loyalists first. Aggressive Quick Commerce entry on Blinkit and Zepto. Buy checkout slots nudging users buying eggs and bread. Launch Discovery Box (mixed flavors) at ₹99 entry price." },
        { phase: "Months 10-12: The Invasion", action: "Replace gym vending machines with MB Ziddi Stations. Modern trade entry into Nature's Basket. Activate Snack Box Subscriptions at 30 packs/month on MB App for office-goers." },
      ],
    },
    results: {
      summary: "Projected business viability based on validated unit economics and market benchmarks.",
      metrics: [
        { label: "Year 1 Revenue", value: "₹24 Cr", change: "projected" },
        { label: "Gross Margin", value: "60%", change: "at ₹50 MRP" },
        { label: "Net Contribution", value: "23%", change: "per pack" },
        { label: "Trial Target", value: "50,000", change: "in 90 days" },
      ],
    },
    learnings: {
      summary: "This project sharpened my ability to identify white spaces in consumer markets and build full-stack product-to-GTM strategies.",
      points: [
        "Positioning in a crowded market is about what you are NOT — owning the savory occasion versus sweet was the entire unlock",
        "Quick Commerce fundamentally changes GTM — discovery is algorithmic, not shelf-based. Buying checkout slots is the new shelf placement",
        "Existing customer bases are the highest-ROI acquisition channel — the Whey-to-Snack insert strategy had near-zero CAC",
        "Unit economics must be designed before product — the ₹50 MRP with 60% gross margin and 23% net contribution was the strategic foundation, not an afterthought",
        "Would conduct primary consumer taste tests in Phase 1 Beta before finalizing flavor SKUs to reduce formulation risk",
      ],
    },
  },
  {
    id: "roastery-operations",
    title: "Roastery Coffee House — Scale Strategy",
    subtitle: "Designing a finance and procurement integration strategy to scale India's only profitable bootstrapped cafe chain from 16 to 50 locations",
    role: "Strategy Consultant",
    timeline: "Feb 2026 — Mar 2026",
    year: "2026",
    team: "Team project — IIM Lucknow Case Competition",
    impact: "5-10% COGS reduction + emergency purchases from 25% to 10%",
    tags: ["Operations", "Strategy", "Finance"],
    accentColor: "text-amber-400",
    problem: {
      summary: "Roastery Coffee House is India's only profitable bootstrapped cafe chain — 16 cafes across 6 cities, HQ in Noida, recently raised ₹50 Crore institutional funding. The challenge: scale aggressively from 16 to 50 locations by December 2027 (212% growth) without breaking the financial discipline that made them profitable in the first place. The India cafe market stands at $564.3M growing at 8.1% CAGR, with Specialty Coffee projected to grow from $2.94B to $6.28B by 2030.",
      points: [
        "Emergency Purchase Ratio over 25% versus industry benchmark of under 10% — expensive ad-hoc buying destroying margins",
        "No dedicated procurement function head — team still assembling with unstructured logistics",
        "Revenue reconciliation gaps — POS data not matching bank deposits, creating leakage risk",
        "No spend analytics — zero visibility into category or vendor spending patterns",
        "New Financial Controller with only 3-4 months tenure — small team lacking multi-location scale experience",
        "12-14 new cafe launches across diverse geographies in 12 months creates massive supply chain strain",
      ],
    },
    research: {
      summary: "Analyzed Roastery's current operations, supply chain structure, and financial controls to diagnose the root causes of procurement and finance inefficiency.",
      methods: [
        { method: "Operations Audit", finding: "Frequent stockouts driving expensive emergency purchases. Poor demand planning and delayed vendor payments weakening supplier relationships" },
        { method: "Supply Chain Mapping", finding: "A-Items (coffee beans) need centralized weekly supply. C-Items (milk, perishables) need local daily vendors. No ABC classification currently in use" },
        { method: "Financial Controls Analysis", finding: "No 3-way match process (PO + GRN + Invoice). Payments not batched — admin cost and cash retention suffering" },
        { method: "Benchmark Comparison", finding: "Emergency purchase ratio at 25% vs industry benchmark of under 10%. Procure-to-Pay cycle time and Days Payable Outstanding not tracked" },
      ],
    },
    strategy: {
      summary: "Designed a two-layer strategy: centralize financial visibility and procurement controls at Noida HQ while decentralizing local execution for perishables to maintain expansion velocity. Built around the ROAST-TRAC proprietary tracking app and a tiered P2P approval workflow.",
      framework: "Tiered P2P Approval Workflow + 90-Day Action Plan",
      frameworkDetails: [
        "Under ₹5,000: Cafe Managers approve daily perishables for local speed",
        "₹5,001 to ₹50,000: Procurement Head approves standard supplies for spend consolidation",
        "Over ₹50,000: Financial Controller approves Capex to protect cash flow and budgets",
        "Vendor Payment Strategy: Uniform 30-45 day payment cycle with 2/10 Net 30 early settlement discounts",
        "City-Level Master Service Agreements: One MSA per city for consolidated sourcing and volume rebates",
        "Emergency Purchase Protocol: 1-2 pre-vetted backup vendors per city. Petty cash under ₹2,000. Above ₹2,000 requires mandatory 24-hour exception report",
      ],
      decision: "Launch ROAST-TRAC MVP in all 16 cafes in Days 1-30, roll out tiered P2P workflow in Days 31-60, and consolidate top 10 high-volume inventory items at Hub level in Days 61-90 — targeting emergency purchase ratio from 25% down to the 10% industry benchmark within 90 days.",
    },
    execution: {
      summary: "Designed a phased 90-day implementation plan with clear milestones and actionable metrics.",
      steps: [
        { phase: "Days 1-30: Foundation", action: "Deploy ROAST-TRAC app MVP in all 16 cafes for real-time tracking and UX friction identification. Map supply chain infrastructure and finalize Zonal Hub lease agreements for the 5-city expansion pipeline. Conduct comprehensive vendor audit and begin centralized bulk procurement onboarding." },
        { phase: "Days 31-60: Standardization", action: "Roll out tiered P2P approval workflows across all active locations. Launch Vendor Scorecards tracking OTIF (On-Time In-Full) delivery rates and cost variances. Implement mandatory weekly inventory reconciliation to align POS data with physical stock and close leakage gaps." },
        { phase: "Days 61-90: Optimization", action: "Analyze 60 days of system data to identify historical spend leakage. Centralize procurement of Top 10 high-volume A-Items (coffee beans) at Hub level. Formalize emergency purchase protocol to drive ratio from 25% down to the under-10% industry benchmark." },
      ],
    },
    results: {
      summary: "Strategy projected significant operational and financial improvements enabling the 16-to-50 cafe scale without margin degradation.",
      metrics: [
        { label: "COGS Reduction", value: "5-10%", change: "via consolidated sourcing" },
        { label: "Emergency Purchases", value: "<10%", change: "from 25% baseline" },
        { label: "Target Locations", value: "50 cafes", change: "212% growth by 2027" },
        { label: "Working Capital", value: "Optimized", change: "via 30-45 day payment cycles" },
      ],
    },
    learnings: {
      summary: "This case taught me that scaling operations is fundamentally a systems design problem — not just a headcount or capital problem.",
      points: [
        "The biggest operational risk in scaling is the emergency purchase ratio — it is a leading indicator of broken demand planning and supplier relationships",
        "Centralize visibility, decentralize execution — this tension is the core of multi-location operations strategy",
        "A proprietary tracking tool like ROAST-TRAC is not just a tech investment — it is a data moat that improves every downstream decision",
        "Vendor relationships are working capital — early payment discounts and consolidated MSAs are as valuable as cost cuts",
        "Would push for a dedicated Procurement Function Head hire in Month 1 — organizational void was the root cause of all other inefficiencies",
      ],
    },
  },
  {
    id: "ev-charging-optimization",
    title: "EV Charging Network AI Optimization",
    subtitle: "Building an end-to-end AI system that increased projected revenue by 16.44% through demand forecasting and dynamic pricing",
    role: "Product & Analytics Lead",
    timeline: "May 2026 — Jun 2026",
    year: "2026",
    team: "Solo — SocBiz OP Analytics",
    impact: "16.44% revenue increase projected",
    tags: ["AI/ML", "Python", "Analytics"],
    accentColor: "text-emerald-400",
    problem: {
      summary: "EV charging networks using static pricing were leaving significant revenue on the table. During peak demand, chargers were overloaded and users faced wait times. During off-peak hours, chargers sat idle generating zero revenue. The opportunity was dynamic pricing — charge more when demand is high, less when it is low — to simultaneously maximize revenue and optimize network utilization across 2.1 million charging records.",
      points: [
        "Static pricing completely ignored demand patterns — peak chargers overloaded, off-peak chargers idle",
        "No real-time monitoring of station health and utilization across the network",
        "Revenue optimization was purely capacity-based, not demand-driven",
        "2.1 million charging records existed but were not being used to inform any pricing or operational decisions",
      ],
    },
    research: {
      summary: "Analyzed 2.1 million historical charging records to understand demand patterns, station behavior, and revenue leakage before designing any model.",
      methods: [
        { method: "Historical Data Analysis (2.1M records)", finding: "Clear demand peaks during morning commute and evening return hours — 3x baseline utilization at peak vs off-peak" },
        { method: "Station-level Power Law Analysis", finding: "Top 20% of stations drove 60% of revenue — classic power law. High-value stations needed premium pricing strategy" },
        { method: "Temporal Pattern Analysis", finding: "Weekend vs weekday patterns significantly different, requiring separate model treatment to avoid mis-pricing" },
        { method: "Revenue Leakage Analysis", finding: "Static pricing undercharged by approximately 18% during peak windows and overcharged during off-peak causing user abandonment" },
      ],
    },
    strategy: {
      summary: "Built a three-component AI system architecture — Demand Prediction Agent, Dynamic Pricing Engine, and Real-Time Monitoring Dashboard — with each layer feeding the next.",
      framework: "RICE Scoring for component prioritization",
      frameworkDetails: [
        "Highest RICE: Demand Prediction Agent — foundation that every other component depends on for accuracy",
        "High RICE: Dynamic Pricing Engine — direct revenue impact once demand forecasting is validated",
        "High RICE: Real-Time Monitoring Dashboard — operational visibility for network managers to act on recommendations",
        "Lower priority: Personalization and user-facing price transparency features — deferred to v2",
      ],
      decision: "Build sequentially — demand model first, pricing engine second, monitoring dashboard third. Each layer only works if the previous one is accurate. Validated demand model on holdout data before building pricing logic on top of it.",
    },
    execution: {
      summary: "Built end-to-end using Python, Scikit-learn, Pandas, and Streamlit in a focused 6-week sprint across three integrated components.",
      steps: [
        { phase: "Week 1-2", action: "Data cleaning and EDA on 2.1M records using Pandas. Feature engineering for temporal variables, station-level features, and utilization patterns." },
        { phase: "Week 3", action: "Built Demand Prediction Agent using Scikit-learn. Trained on historical utilization, temporal, and station-level features. Validated on holdout set." },
        { phase: "Week 4", action: "Built Dynamic Pricing Engine. Rules: higher tariffs at above 80% utilization, lower tariffs at below 30% to stimulate off-peak demand. Congestion-aware pricing logic." },
        { phase: "Week 5", action: "Built Monitoring Agent tracking real-time station health, demand trends, pricing recommendations, and revenue impact across the network." },
        { phase: "Week 6", action: "Built interactive Streamlit dashboard with Plotly visualizations. Ran revenue comparison: AI-driven dynamic pricing vs baseline static pricing across all 2.1M records." },
      ],
    },
    results: {
      summary: "The AI-driven dynamic pricing system significantly outperformed static baseline pricing across the full dataset.",
      metrics: [
        { label: "Revenue Increase", value: "16.44%", change: "vs static pricing" },
        { label: "Records Analyzed", value: "2.1M+", change: "charging records" },
        { label: "AI Components", value: "3", change: "agents + dashboard" },
        { label: "Tech Stack", value: "Python ML", change: "Scikit-learn + Streamlit" },
      ],
    },
    learnings: {
      summary: "Building end-to-end AI products requires equal rigor on data engineering, model development, and product presentation.",
      points: [
        "Data quality is the real bottleneck — I spent 40% of total time on cleaning and feature engineering, not modeling",
        "A simple rule-based pricing engine outperformed complex ML pricing in early tests — start simple, layer complexity only where it adds measurable value",
        "Dashboards are products too — the Streamlit interface needed as much iteration as the underlying models to be actually useful to network operators",
        "Would instrument an A/B testing framework earlier to validate pricing impact in a live production environment rather than only on historical data",
      ],
    },
  },
]