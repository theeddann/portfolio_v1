"use client"
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, Target, Zap, BarChart2 } from "lucide-react"

const timeline = [
  {
    year: "2025 — Present",
    title: "Co-Founder & Product Lead — MeSan Mentorship",
    org: "Self-founded startup",
    description: "Built and launched an education mentorship platform with a 12-member team, generating INR 1.65 Lakhs in revenue in the initial phase.",
  },

  {
    year: "2025 — Present",
    title: "Marketing Executive — IIT Roorkee Motorsports",
    org: "IIT Roorkee",
    description: "Led sponsorship negotiations securing a Tesla BMS barter deal and brand partnerships for team funding.",
  },
  
  {
    year: "2024 — Present",
    title: "Marketing Executive — Cognizance IIT Roorkee",
    org: "IIT Roorkee Technical Festival",
    description: "Led a 32-member marketing and sponsorship team. Secured 7 corporate sponsors and managed outreach for 10,000+ participant festival.",
  },
  
  {
    year: "2024",
    title: "Joined IIT Roorkee",
    org: "Indian Institute of Technology, Roorkee",
    description: "Started Integrated B.Tech + M.Tech program. Discovered product management through leading student organizations and building MeSan.",
  },
]

const values = [
  {
    title: "User First",
    description: "Every decision starts with understanding the user. Data tells you what, research tells you why.",
    icon: User,
  },
  {
    title: "Clarity Over Complexity",
    description: "The best products are simple. I cut through noise to find the essential thing that needs to be built.",
    icon: Target,
  },
  {
    title: "Bias for Action",
    description: "Done is better than perfect. Ship, learn, iterate. Momentum matters more than perfection.",
    icon: Zap,
  },
  {
    title: "Data-Informed",
    description: "Intuition has a seat at the table, but data drives decisions. I build dashboards before I build features.",
    icon: BarChart2,
  },
]

const workingStyle = [
  { label: "Communication", value: "Direct, async-first, over-communicate progress" },
  { label: "Decision Making", value: "Framework-driven with strong intuition" },
  { label: "With Engineers", value: "Deeply technical, respect the craft" },
  { label: "With Designers", value: "User-centered, strong visual opinions" },
  { label: "With Leadership", value: "Metrics-focused, no surprises" },
  { label: "Under Pressure", value: "Calm, structured, ruthless prioritization" },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const valuesRef = useRef(null)
  const styleRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" })
  const styleInView = useInView(styleRef, { once: true, margin: "-80px" })

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <div ref={heroRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
                About
              </p>
              <h1
                className="mb-6 font-bold text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
              >
                I build products
                <br />
                <span className="text-[#A1A1AA]">people love</span>
              </h1>
              <p className="mb-6 text-lg text-[#A1A1AA] leading-relaxed">
                {"I'm Shubham — a product manager obsessed with turning messy user problems into clean, measurable outcomes."}
              </p>
              <p className="text-[#A1A1AA] leading-relaxed">
                My journey into product started when I realized that the best technology means nothing if it does not solve a real human problem. Since then I have been on a mission to bridge the gap between what users need and what businesses build.
              </p>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="flex justify-center lg:justify-end"
>
  <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#27272A] bg-[#111111] min-h-[560px]">
    
    {/* Background Glow */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 flex h-full flex-col items-center px-8 py-12">
      
      {/* Profile Image */}
      <div className="mb-8 h-600 w-40 overflow-hidden rounded-full border-1.5 border-[#27272A] shadow-xl">
        <Image
          src="/images/profile.jpg"
          alt="Shubham Bhardwaj"
          width={160}
          height={160}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-3xl font-bold text-white">
        Shubham Bhardwaj
      </h3>

      <p className="mt-2 text-sm text-[#A1A1AA]">
        Product Manager • IIT Roorkee
      </p>

      {/* Status */}
      <div className="mt-5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm text-[#A1A1AA]">
          Open to opportunities
        </span>
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-[#27272A]" />

      {/* Stats */}
      <div className="grid w-full grid-cols-3 gap-4">
        {[
          { value: "2+", label: "Products" },
          { value: "10K+", label: "Users" },
          { value: "2+", label: "Years" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-white">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-[#71717A]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-[#27272A]" />

      {/* Short Bio */}
      <div className="space-y-3 text-center">
        <p className="text-sm leading-relaxed text-[#A1A1AA]">
          Building products at the intersection of user needs,
          business goals, and technology.
        </p>

        <p className="text-sm leading-relaxed text-[#71717A]">
          Founder at MeSan • Marketing Executive at IIT Roorkee
          Motorsports & Cognizance.
        </p>
      </div>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      {/* Values */}
      <div ref={valuesRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
              Values
            </p>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              What I believe in
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
  const Icon = value.icon
  return (
    <motion.div
      key={value.title}
      initial={{ opacity: 0, y: 24 }}
      animate={valuesInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group rounded-2xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46]"
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-black">
        <Icon size={16} className="text-[#A1A1AA]" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-white">{value.title}</h3>
      <p className="text-sm text-[#A1A1AA] leading-relaxed">{value.description}</p>
    </motion.div>
  )
})}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
              Journey
            </p>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              How I got here
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#27272A] hidden sm:block" />

            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-black mt-1 flex-shrink-0" />
                  </div>

                  <div className="flex-1 rounded-2xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-blue-500">{item.year}</span>
                      <span className="text-xs text-[#3F3F46]">{item.org}</span>
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      {/* Working Style */}
      <div ref={styleRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={styleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
              Working Style
            </p>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              How I operate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workingStyle.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={styleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46]"
              >
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#3F3F46]">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white leading-relaxed">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}