"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "MeSan Mentorship Platform",
    role: "Co-Founder & Product Lead",
    timeline: "Oct 2025 — Present",
    impact: "INR 1.65L revenue generated",
    tags: ["EdTech", "0-to-1", "React.js"],
    description:
      "Co-founded and led product development for an education and mentorship platform. Built with React.js and Remix, generating INR 1.65 Lakhs in revenue while leading a 12-member team.",
    color: "from-blue-500/10 to-transparent",
    accentColor: "bg-blue-500",
    href: "/case-studies/mesan-mentorship",
  },
  {
    id: "02",
    title: "EV Charging AI Optimization",
    role: "Product & Analytics Lead",
    timeline: "May 2026 — Jun 2026",
    impact: "16.44% revenue increase",
    tags: ["AI/ML", "Python", "Analytics"],
    description:
      "Built an end-to-end AI system using Python and machine learning to optimize EV charging network operations through demand forecasting and dynamic pricing across 2.1M+ records.",
    color: "from-emerald-500/10 to-transparent",
    accentColor: "bg-emerald-500",
    href: "/case-studies/ev-charging-optimization",
  },
  {
    id: "03",
    title: "Ziddi Krunch GTM Strategy",
    role: "Product Strategist",
    timeline: "Jan 2026 — Feb 2026",
    impact: "15% conversion uplift projected",
    tags: ["GTM", "Consumer", "Strategy"],
    description:
      "Developed a digital-first go-to-market strategy for MuscleBlaze's high-protein snack brand, targeting 150M+ health-conscious consumers through Quick Commerce and D2C channels.",
    color: "from-purple-500/10 to-transparent",
    accentColor: "bg-purple-500",
    href: "/case-studies/ziddi-krunch-gtm",
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
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
             Featured Work
         </p>

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
             Selected Projects
           </h2>
          <Link
            href="/projects"
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
                        Read project
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