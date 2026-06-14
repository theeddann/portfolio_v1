"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  Work: [
    { label: "Projects", href: "/projects" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  About: [
    { label: "About Me", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Resume", href: "/resume" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-bhardwaj-9b65511b5/", external: true },
    { label: "GitHub", href: "https://github.com/theeddann", external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#27272A] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-white">Shubham Bhardwaj</span>
            </div>
            <p className="mb-4 text-sm text-[#A1A1AA] leading-relaxed max-w-xs">
              Co-Founder and Product Lead. IIT Roorkee. Turning user problems into measurable outcomes.
            </p>
            <p className="mb-6 text-xs text-[#3F3F46]">
              shubham.b.01official@gmail.com
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#27272A] px-3 py-1 text-xs text-[#A1A1AA]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Open to PM opportunities
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#A1A1AA] transition-colors hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#27272A] pt-8 sm:flex-row">
          <p className="text-xs text-[#3F3F46]">
            © 2025 Shubham Bhardwaj. IIT Roorkee. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-xs text-[#3F3F46]">
            Designed to get hired.
          </p>
        </div>
      </div>
    </footer>
  )
}