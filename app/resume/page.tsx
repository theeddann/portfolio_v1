
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"

const highlights = [
  { label: "Current Focus", value: "Product Manager / Analyst / Strategy roles" },
  { label: "Education", value: "IIT Roorkee — Integrated B.Tech + M.Tech (2024–2029)" },
  { label: "Current Role", value: "Co-Founder & Product Lead, MeSan Mentorship" },
  { label: "Location", value: "Roorkee, India — open to remote worldwide" },
  { label: "Revenue Generated", value: "INR 1.65 Lakhs (MeSan Mentorship)" },
  { label: "Team Leadership", value: "Led teams of 12, 30, 32 members" },
]

const skills = {
  "Product": ["Product Strategy", "Roadmapping", "PRD Writing", "User Stories", "A/B Testing", "Go-To-Market"],
  "Research": ["User Interviews", "Market Research", "Competitive Analysis", "Consumer Surveys", "Data-Driven Decisions"],
  "Analytics": ["SQL", "Python (Pandas, NumPy)", "Advanced Excel", "PowerBI", "Mixpanel", "Google Analytics", "Streamlit", "Plotly"],
  "Engineering": ["React.js", "JavaScript", "HTML/CSS", "C++", "Git/GitHub", "Remix"],
  "Leadership": ["Team Leadership", "Stakeholder Management", "Strategic Planning", "Event Management", "Sponsorships"],
  "Frameworks": ["RICE", "MoSCoW", "OKRs", "Jobs-to-be-Done", "Impact vs Effort", "North Star Metric"],
}

export default function ResumePage() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" })

  return (
    <div className="bg-black min-h-screen">

      <div ref={heroRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
                Resume
              </p>
              <h1
                className="mb-6 font-bold text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
              >
                Shubham
                <br />
                <span className="text-[#A1A1AA]">Bhardwaj</span>
              </h1>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                Product Manager specializing in growth, strategy, and
                building products that create measurable business impact.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                <Download size={16} />
                Download PDF
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-bhardwaj-9b65511b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#27272A] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5"
              >
                <ExternalLink size={16} className="text-[#A1A1AA]" />
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <div ref={contentRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            <div className="lg:col-span-1 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-[#27272A] bg-[#111111] p-6"
              >
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
                  At a Glance
                </p>
                <div className="flex flex-col gap-4">
                  {highlights.map((h) => (
                    <div key={h.label}>
                      <p className="text-xs text-[#3F3F46] mb-0.5">{h.label}</p>
                      <p className="text-sm font-medium text-white">{h.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border border-[#27272A] bg-[#111111] p-6"
              >
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
                  Contact
                </p>
                <div className="flex flex-col gap-3 text-sm">
                  <a href="mailto:shubham.b.01official@gmail.com" className="text-[#A1A1AA] hover:text-white transition-colors">
                    shubham.b.01official@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/shubham-bhardwaj-9b65511b5/" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
                    linkedin.com/in/shubham-bhardwaj-9b65511b5
                  </a>
                  <a href="https://github.com/theeddann" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
                   https://github.com/theeddann
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-[#27272A] bg-[#111111] p-6"
                >
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#27272A] px-3 py-1.5 text-sm text-[#A1A1AA] transition-colors hover:border-[#3F3F46] hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6"
              >
                <p className="mb-2 text-sm font-semibold text-white">
                  Want the full picture?
                </p>
                <p className="mb-4 text-sm text-[#A1A1AA]">
                  Download my resume for the complete work history, education,
                  and project details.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
                >
                  <Download size={14} />
                  Download Resume PDF
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}