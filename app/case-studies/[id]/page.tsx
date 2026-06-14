"use client"

import { useRef } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { caseStudies } from "@/lib/case-studies-data"

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function CaseStudyPage() {
  const params = useParams()
  const cs = caseStudies.find((c) => c.id === params.id)
  if (!cs) notFound()

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">

        {/* Back */}
        <Link
          href="/case-studies"
          className="mb-12 inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          All Case Studies
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#27272A] px-3 py-1 text-xs text-[#A1A1AA]">
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="mb-4 font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
          >
            {cs.title}
          </h1>
          <p className="mb-8 text-xl text-[#A1A1AA] leading-relaxed">{cs.subtitle}</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Role", value: cs.role },
              { label: "Timeline", value: cs.timeline },
              { label: "Year", value: cs.year },
              { label: "Team", value: cs.team },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[#27272A] bg-[#111111] p-4">
                <p className="mb-1 text-xs text-[#3F3F46] uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-12">

          {/* Problem */}
          <Section>
            <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400">01</span>
                <h2 className="text-xl font-bold text-white">The Problem</h2>
              </div>
              <p className="mb-6 text-[#A1A1AA] leading-relaxed">{cs.problem.summary}</p>
              <ul className="flex flex-col gap-2">
                {cs.problem.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Research */}
          <Section>
            <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">02</span>
                <h2 className="text-xl font-bold text-white">Research</h2>
              </div>
              <p className="mb-6 text-[#A1A1AA] leading-relaxed">{cs.research.summary}</p>
              <div className="flex flex-col gap-3">
                {cs.research.methods.map((m) => (
                  <div key={m.method} className="rounded-xl border border-[#27272A] bg-black/30 p-4">
                    <p className="mb-1 text-sm font-semibold text-white">{m.method}</p>
                    <p className="text-sm text-[#A1A1AA]">{"→ "}{m.finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Strategy */}
          <Section>
            <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-purple-400">03</span>
                <h2 className="text-xl font-bold text-white">Strategy</h2>
              </div>
              <p className="mb-6 text-[#A1A1AA] leading-relaxed">{cs.strategy.summary}</p>
              <div className="mb-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                <p className="mb-3 text-sm font-semibold text-purple-400">Framework used: {cs.strategy.framework}</p>
                <ul className="flex flex-col gap-2">
                  {cs.strategy.frameworkDetails.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-purple-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[#27272A] bg-black/30 p-4">
                <p className="text-xs text-[#3F3F46] uppercase tracking-wider mb-2">Decision</p>
                <p className="text-sm text-white">{cs.strategy.decision}</p>
              </div>
            </div>
          </Section>

          {/* Execution */}
          <Section>
            <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-400">04</span>
                <h2 className="text-xl font-bold text-white">Execution</h2>
              </div>
              <p className="mb-6 text-[#A1A1AA] leading-relaxed">{cs.execution.summary}</p>
              <div className="flex flex-col gap-3">
                {cs.execution.steps.map((step) => (
                  <div key={step.phase} className="flex gap-4">
                    <span className="flex-shrink-0 rounded-lg border border-[#27272A] bg-black/30 px-3 py-2 text-xs font-mono text-amber-400 h-fit">
                      {step.phase}
                    </span>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed pt-2">{step.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Results */}
          <Section>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">05</span>
                <h2 className="text-xl font-bold text-white">Results</h2>
              </div>
              <p className="mb-6 text-[#A1A1AA] leading-relaxed">{cs.results.summary}</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cs.results.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-[#27272A] bg-black/40 p-4 text-center">
                    <p className="mb-1 text-xs text-[#3F3F46] uppercase tracking-wider">{metric.label}</p>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="text-xs text-emerald-400 mt-1">{metric.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Learnings */}
          <Section>
            <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#27272A] text-xs font-bold text-[#A1A1AA]">06</span>
                <h2 className="text-xl font-bold text-white">Learnings</h2>
              </div>
              <p className="mb-6 text-[#A1A1AA] leading-relaxed">{cs.learnings.summary}</p>
              <ul className="flex flex-col gap-3">
                {cs.learnings.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                    <span className="mt-0.5 flex-shrink-0 text-base">💡</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Navigation */}
          <Section>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between border-t border-[#27272A] pt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors hover:text-white"
              >
                <ArrowLeft size={14} />
                All Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                Discuss this work
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}