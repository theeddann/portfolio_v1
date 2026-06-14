"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "mesan-mentorship",
    title: "MeSan Mentorship Platform",
    description: "Co-founded and led product development for an education and mentorship platform. Built with React.js and Remix, generating INR 1.65 Lakhs in revenue with a 12-member team.",
    role: "Co-Founder & Product Lead",
    timeline: "Oct 2025 — Present",
    year: "2025",
    impact: "INR 1.65L revenue generated",
    tags: ["EdTech", "0-to-1", "React.js"],
    category: "Product",
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    id: "ziddi-krunch-gtm",
    title: "Ziddi Krunch GTM Strategy",
    description: "Developed a digital-first go-to-market strategy for MuscleBlaze's high-protein snack brand targeting 150M+ health-conscious consumers through Quick Commerce and D2C.",
    role: "Product Strategist",
    timeline: "Jan 2026 — Feb 2026",
    year: "2026",
    impact: "15% conversion uplift projected",
    tags: ["GTM", "Consumer", "Strategy"],
    category: "Strategy",
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    id: "ev-charging-optimization",
    title: "EV Charging AI Optimization",
    description: "Built an end-to-end AI system using Python and ML to optimize EV charging network operations through demand forecasting and dynamic pricing across 2.1M+ records.",
    role: "Product & Analytics Lead",
    timeline: "May 2026 — Jun 2026",
    year: "2026",
    impact: "16.44% revenue increase",
    tags: ["AI/ML", "Python", "Analytics"],
    category: "Analytics",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    id: "roastery-operations",
    title: "Roastery Coffee House Scale Strategy",
    description: "Formulated a finance and procurement integration strategy to scale a bootstrapped cafe chain from 16 to 50 locations, targeting 212% growth by 2027.",
    role: "Strategy Consultant",
    timeline: "Feb 2026 — Mar 2026",
    year: "2026",
    impact: "5-10% COGS reduction projected",
    tags: ["Operations", "Strategy", "Finance"],
    category: "Strategy",
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    id: "cognizance-2026",
    title: "Cognizance 2026 — Tech Fest",
    description: "Led a 32-member marketing and sponsorship team for Asia's largest student technical festival. Secured 7 corporate sponsors and managed 10,000+ participant event.",
    role: "Marketing Executive",
    timeline: "Nov 2024 — Present",
    year: "2025",
    impact: "7 sponsors, 10K+ participants",
    tags: ["Leadership", "Events", "Marketing"],
    category: "Product",
    gradient: "from-rose-500/20 via-rose-500/5 to-transparent",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
  },
  {
    id: "stc-events",
    title: "STC Events & Hackathons",
    description: "Directed 30 executives across 15+ large-scale technical fests and hackathons. Managed INR 12 Lakh budget and boosted event footfall by 45%.",
    role: "Events Manager",
    timeline: "Feb 2026 — Present",
    year: "2026",
    impact: "45% footfall increase, ₹12L budget",
    tags: ["Leadership", "Operations", "Budget"],
    category: "Growth",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
  },
]
const categories = ["All", "Product", "Growth", "Analytics", "Strategy"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <div ref={heroRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
              Projects
            </p>
            <h1
              className="mb-6 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
            >
              Things I have
              <br />
              <span className="text-[#A1A1AA]">shipped and measured</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              Every project here has a problem, a process, and a result.
              No vanity metrics — only outcomes that moved the needle.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      {/* Filter + Grid */}
      <div ref={gridRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "border border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link href={`/case-studies/${project.id}`} className="group block h-full">
                    <div className={`relative h-full overflow-hidden rounded-2xl border ${project.borderColor} bg-[#111111] p-6 transition-all duration-300 hover:border-opacity-60 flex flex-col`}>

                      {/* Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                      <div className="relative z-10 flex flex-col h-full">

                        {/* Top: year + category */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="font-mono text-xs text-[#3F3F46]">{project.year}</span>
                          <span className={`text-xs font-medium ${project.accentColor}`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold text-white transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-4 text-sm text-[#A1A1AA] leading-relaxed flex-1">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#27272A] px-2.5 py-0.5 text-xs text-[#A1A1AA]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Impact */}
                        <div className="mb-4 rounded-xl border border-[#27272A] bg-black/30 px-4 py-3">
                          <p className="text-xs text-[#3F3F46] uppercase tracking-wider mb-1">Impact</p>
                          <p className={`text-sm font-semibold ${project.accentColor}`}>
                            {project.impact}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                          <div className="flex items-center gap-3">
                            <span>{project.role}</span>
                            <span className="text-[#3F3F46]">·</span>
                            <span>{project.timeline}</span>
                          </div>
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}