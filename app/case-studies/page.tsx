"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
   {
    id: "ziddi-krunch-gtm",
    number: "01",
    title: "Ziddi Krunch — Savory Protein Chip GTM",
    subtitle: "A full product strategy and digital-first GTM for India's first savory high-protein chip, projecting ₹24 Crore Year 1 revenue",
    role: "Product Strategist",
    timeline: "Jan 2026 — Feb 2026",
    year: "2026",
    impact: "₹24 Crore Y1 revenue projected",
    tags: ["GTM Strategy", "Consumer", "Product Roadmap"],
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
  },
  {
    id: "roastery-operations",
    number: "02",   
    title: "Roastery Coffee House — Scale Strategy",
    subtitle: "IIM Lucknow Case Competition — Finance and procurement integration to scale from 16 to 50 cafes with 212% growth target",
    role: "Strategy Consultant",
    timeline: "Feb 2026 — Mar 2026",
    year: "2026",
    impact: "5-10% COGS reduction projected",
    tags: ["Operations", "Strategy", "Finance"],
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/5",
  },
  
]

export default function CaseStudiesPage() {
  const heroRef = useRef(null)
  const listRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const listInView = useInView(listRef, { once: true, margin: "-80px" })

  return (
    <div className="bg-black min-h-screen">
      <div ref={heroRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
              Case Studies
            </p>
            <h1
              className="mb-6 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
            >
              Deep dives into
              <br />
              <span className="text-[#A1A1AA]">how I think</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              Each case study follows the full PM process — problem, research,
              strategy, execution, and results. Read them like a PM interview answer.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <div ref={listRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl flex flex-col gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/case-studies/${cs.id}`} className="group block">
                <div className={`relative overflow-hidden rounded-2xl border ${cs.borderColor} ${cs.bgColor} p-8 transition-all duration-300 hover:border-opacity-60 lg:p-10`}>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-4xl font-bold text-[#1a1a1a] flex-shrink-0">
                        {cs.number}
                      </span>
                      <div>
                        <div className="mb-2 flex flex-wrap gap-2">
                          {cs.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-[#27272A] px-2.5 py-0.5 text-xs text-[#A1A1AA]">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                          {cs.title}
                        </h2>
                        <p className="text-[#A1A1AA] leading-relaxed">{cs.subtitle}</p>
                        <div className="mt-4 flex flex-wrap gap-6 text-sm text-[#A1A1AA]">
                          <span><span className="text-[#3F3F46]">Role: </span>{cs.role}</span>
                          <span><span className="text-[#3F3F46]">Timeline: </span>{cs.timeline}</span>
                          <span><span className="text-[#3F3F46]">Year: </span>{cs.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 lg:items-end flex-shrink-0">
                      <div className="rounded-xl border border-[#27272A] bg-black/40 p-4 text-center min-w-[160px]">
                        <p className="text-xs text-[#3F3F46] uppercase tracking-wider mb-1">Impact</p>
                        <p className={`text-base font-semibold ${cs.accentColor}`}>{cs.impact}</p>
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${cs.accentColor} transition-transform duration-200`}>
                        Read case study
                        <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}