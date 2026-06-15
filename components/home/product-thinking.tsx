"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Scale, Target, BarChart2, TrendingUp, Zap } from "lucide-react"

const skills = [
  {
    category: "Discovery",
    icon: Search,
    items: ["User Interviews", "Jobs-to-be-Done", "Competitive Analysis", "Market Sizing"],
  },
  {
    category: "Prioritization",
    icon: Scale,
    items: ["RICE Framework", "MoSCoW Method", "Impact vs Effort", "Opportunity Scoring"],
  },
  {
    category: "Strategy",
    icon: Target,
    items: ["Roadmapping", "OKRs and KPIs", "North Star Metric", "Product Vision"],
  },
  {
    category: "Analytics",
    icon: BarChart2,
    items: ["Funnel Analysis", "Cohort Analysis", "A/B Testing", "SQL and Dashboards"],
  },
  {
    category: "Growth",
    icon: TrendingUp,
    items: ["Activation Loops", "Retention Hooks", "Viral Mechanics", "Monetization"],
  },
  {
    category: "Execution",
    icon: Zap,
    items: ["Sprint Planning", "PRD Writing", "Stakeholder Comms", "Launch Planning"],
  },
]

export default function ProductThinking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Frameworks
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            How I think about product
          </h2>
          <p className="text-[#A1A1AA] leading-relaxed">
            A structured approach to building products from discovery to delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46]"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#27272A] bg-black">
                    <Icon size={15} className="text-[#A1A1AA]" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{skill.category}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#3F3F46]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="rounded-2xl border border-[#27272A] bg-[#111111] px-8 py-6 text-center max-w-lg">
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Every framework maps to a real project.
              <a href="/case-studies" className="ml-1 text-white underline underline-offset-4 hover:text-blue-400 transition-colors">
                See them in action
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}