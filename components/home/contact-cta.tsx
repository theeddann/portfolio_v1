"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Mail, Calendar } from "lucide-react"

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-[#27272A] bg-[#111111] px-8 py-16 text-center lg:px-16 lg:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)" }}
          />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="relative z-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500">
              Contact
            </p>

            <h2
              className="mb-6 font-bold text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: "1.1" }}
            >
              {"Let's Build Something"}
              <br />
              <span className="text-[#A1A1AA]">Meaningful</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-[#A1A1AA] leading-relaxed">
              {"I'm actively looking for Product Manager, Product Analyst, and Strategy roles. If you think we'd be a good fit — let's talk."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90"
              >
                <Mail size={16} />
                Get In Touch
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              
              <a
                href="https://calendly.com/yourlink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#27272A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5"
              >
                <Calendar size={16} className="text-[#A1A1AA]" />
                Schedule a Call
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-[#27272A] pt-8 text-sm text-[#A1A1AA]">
              <a href="mailto:shubham.b.01official@gmail.com" className="transition-colors hover:text-white">
                your@email.com
              </a>
              <a href="https://www.linkedin.com/in/shubham-bhardwaj-9b65511b5/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                LinkedIn
              </a>
              <a href="https://github.com/theeddann" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}