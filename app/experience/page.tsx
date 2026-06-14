"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "MeSan Mentorship",
    role: "Co-Founder & Product Lead",
    type: "Startup",
    period: "Oct 2025 — Present",
    location: "Remote / India",
    description: "Co-founded and led product development for an education and mentorship platform. Built and managed a cross-functional team of 12 to take the product from 0 to revenue.",
    outcomes: [
      "Generated INR 1.65 Lakhs in revenue within the initial launch phase",
      "Led a cross-functional team of 12 members across product, engineering, and marketing",
      "Conducted market research and user data analysis using Python and Advanced Excel",
      "Led full product lifecycle management using React.js and Remix",
      "Streamlined internal workflows and reduced manual operational errors",
    ],
    skills: ["Product Strategy", "React.js", "Python", "Team Leadership", "Market Research"],
    color: "blue",
  },
  {
    company: "Cognizance — IIT Roorkee",
    role: "Marketing Executive",
    type: "Leadership",
    period: "Nov 2024 — Present",
    location: "IIT Roorkee",
    description: "Led a 32-member marketing and sponsorship team for Cognizance 2026, one of Asia's largest student technical festivals.",
    outcomes: [
      "Secured 7 corporate sponsors and strategic partners through partnership negotiations",
      "Managed stakeholder engagement for 10,000+ participant annual technical fest",
      "Analyzed attendee feedback using Excel to identify engagement gaps",
      "Implemented process improvements that resolved real-time logistical issues",
      "Increased overall event participation through data-driven marketing strategies",
    ],
    skills: ["Stakeholder Management", "Data Analysis", "Excel", "Team Leadership", "Marketing"],
    color: "purple",
  },
  {
    company: "Student Technical Council — IIT Roorkee",
    role: "Events Manager",
    type: "Leadership",
    period: "Feb 2026 — Present",
    location: "IIT Roorkee",
    description: "Directed a cross-functional team of 30 executives to manage 15+ large-scale technical fests and hackathons across IIT Roorkee.",
    outcomes: [
      "Directed 30 executives across 15+ technical fests and hackathons",
      "Drove cumulative participation of 5000+ students",
      "Managed an operating budget of INR 12 Lakhs",
      "Secured key corporate sponsorships through targeted promotional strategies",
      "Boosted overall event footfall by 45% through strategic marketing",
    ],
    skills: ["Event Management", "Budget Management", "Cross-functional Leadership", "Sponsorships"],
    color: "emerald",
  },
  {
    company: "IIT Roorkee Motorsports",
    role: "Marketing Executive",
    type: "Leadership",
    period: "Jan 2025 — Present",
    location: "IIT Roorkee",
    description: "Led an 11-member marketing and sponsorship outreach team for IIT Roorkee's motorsports division, securing brand partnerships and a barter deal with Tesla (BMS).",
    outcomes: [
      "Led 11-member marketing and sponsorship outreach team",
      "Negotiated brand partnerships to secure funding for team projects",
      "Secured barter deal of BMS from Tesla",
      "Developed targeted promotional campaigns increasing team visibility",
      "Grew engagement across digital platforms significantly",
    ],
    skills: ["Brand Partnerships", "Negotiation", "Digital Marketing", "Campaign Management"],
    color: "amber",
  },
]

const colorMap: Record<string, { border: string; bg: string; dot: string; tag: string }> = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    dot: "bg-blue-500",
    tag: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
    dot: "bg-purple-500",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    dot: "bg-emerald-500",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    dot: "bg-amber-500",
    tag: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
}

export default function ExperiencePage() {
  const heroRef = useRef(null)
  const expRef = useRef(null)
  const philosophyRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const expInView = useInView(expRef, { once: true, margin: "-80px" })
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" })

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
              Experience
            </p>
            <h1
              className="mb-6 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
            >
              What I have
              <br />
              <span className="text-[#A1A1AA]">built and led</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              From co-founding a revenue-generating startup to leading 32-member teams at IIT Roorkee — real outcomes, not just responsibilities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <div ref={expRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color]
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  animate={expInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 transition-all duration-300 lg:p-10`}
                >
                  <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1.5 h-3 w-3 flex-shrink-0 rounded-full ${colors.dot}`} />
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="rounded-full border border-[#27272A] px-2 py-0.5 text-xs text-[#A1A1AA]">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-[#A1A1AA]">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 lg:items-end text-sm text-[#3F3F46]">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="mb-6 text-[#A1A1AA] leading-relaxed pl-7">{exp.description}</p>

                  <div className="mb-6 pl-7">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#3F3F46]">Key Outcomes</p>
                    <ul className="flex flex-col gap-2">
                      {exp.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#3F3F46]" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pl-7">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#3F3F46]">Skills Used</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className={`rounded-full border px-3 py-1 text-xs font-medium ${colors.tag}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <div ref={philosophyRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">Philosophy</p>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">How I lead</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Build with data, ship with conviction",
                body: "Every decision at MeSan started with data — user interviews, retention metrics, revenue signals. But data only gets you to the door. You still need conviction to walk through it.",
              },
              {
                number: "02",
                title: "Teams win, not individuals",
                body: "Leading 30+ people across events and 12 at MeSan taught me that the PM's job is to create clarity, remove blockers, and let the team do their best work.",
              },
              {
                number: "03",
                title: "Outcomes over output",
                body: "At IIT Roorkee I learned to measure what matters — not events organized, but participation growth. Not features shipped, but revenue generated and users retained.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-[#27272A] bg-[#111111] p-8"
              >
                <p className="mb-4 font-mono text-4xl font-bold text-[#27272A]">{item.number}</p>
                <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90">
              See my work <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-[#27272A] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}