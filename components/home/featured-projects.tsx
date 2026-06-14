"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Growth Dashboard",
    role: "Product Manager",
    timeline: "3 months",
    impact: "40% increase in activation rate",
    tags: ["Growth", "Analytics", "B2B"],
    description:
      "Redesigned the onboarding funnel and built a real-time growth dashboard that gave the team instant visibility into activation bottlenecks.",
    color: "from-blue-500/10 to-transparent",
    accentColor: "bg-blue-500",
    href: "/case-studies/growth-dashboard",
  },
  {
    id: "02",
    title: "AI Search Feature",
    role: "Product Analyst",
    timeline: "2 months",
    impact: "25% reduction in search drop-off",
    tags: ["AI/ML", "Search UX", "Data"],
    description:
      "Led discovery and prioritization for an AI-powered search revamp, collaborating with ML engineers and designers to ship v1 ahead of schedule.",
    color: "from-purple-500/10 to-transparent",
    accentColor: "bg-purple-500",
    href: "/case-studies/ai-search",
  },
  {
    id: "03",
    title: "Mobile Checkout Revamp",
    role: "Associate PM",
    timeline: "6 weeks",
    impact: "18% lift in conversion",
    tags: ["Mobile", "E-commerce", "UX"],
    description:
      "Identified friction points in the mobile checkout flow through user interviews and session recordings, then drove a focused redesign sprint.",
    color: "from-emerald-500/10 to-transparent",
    accentColor: "bg-emerald-500",
    href: "/case-studies/mobile-checkout",
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
              Work
            </p>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Featured Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden items-center gap-1 text-sm text-[#A1A1AA] transition-colors hover:text-white lg:flex"
          >
            View all work
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={project.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#3F3F46] lg:p-10">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left: main content */}
                    <div className="flex flex-col gap-4 lg:max-w-2xl">
                      {/* Number + tags */}
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-[#3F3F46]">
                          {project.id}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#27272A] px-3 py-0.5 text-xs text-[#A1A1AA]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-white lg:text-3xl">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#A1A1AA] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-[#A1A1AA]">
                        <span>
                          <span className="text-[#3F3F46]">Role: </span>
                          {project.role}
                        </span>
                        <span>
                          <span className="text-[#3F3F46]">Timeline: </span>
                          {project.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Right: impact metric */}
                    <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
                      <div className="rounded-xl border border-[#27272A] bg-black/50 p-5 lg:min-w-[180px]">
                        <p className="mb-1 text-xs text-[#3F3F46] uppercase tracking-wider">
                          Impact
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {project.impact}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#A1A1AA] transition-all duration-200 group-hover:text-white">
                        Read case study
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 rounded-md border border-[#27272A] px-6 py-2.5 text-sm text-[#A1A1AA] transition-colors hover:text-white"
          >
            View all case studies
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}