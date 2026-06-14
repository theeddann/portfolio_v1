"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    id: "why-pms-need-sql",
    title: "Why Every PM Needs to Learn SQL",
    excerpt: "You do not need to be a data engineer. But if you cannot query your own data, you are always waiting for someone else to answer your questions. Here is how I learned SQL in 30 days and why it changed how I work.",
    category: "Product Management",
    readTime: "5 min read",
    date: "Dec 2024",
    featured: true,
  },
  {
    id: "rice-vs-moscow",
    title: "RICE vs MoSCoW: When to Use Which Framework",
    excerpt: "Prioritization frameworks are tools, not rules. I have used both extensively and they solve different problems. This is my practical guide to choosing the right one for your situation.",
    category: "Strategy",
    readTime: "4 min read",
    date: "Nov 2024",
    featured: true,
  },
  {
    id: "user-interviews",
    title: "How to Run User Interviews That Actually Surface Insights",
    excerpt: "Most user interviews are just validation exercises in disguise. You ask leading questions and confirm what you already believe. Here is the framework I use to genuinely discover what users think.",
    category: "User Research",
    readTime: "6 min read",
    date: "Oct 2024",
    featured: false,
  },
  {
    id: "pm-without-authority",
    title: "Influencing Without Authority as a PM",
    excerpt: "PMs have no direct reports but are responsible for outcomes that require the whole team. This tension is the job. Here is how I have learned to lead through influence instead of authority.",
    category: "Leadership",
    readTime: "5 min read",
    date: "Sep 2024",
    featured: false,
  },
  {
    id: "metrics-that-matter",
    title: "Choosing the Right North Star Metric",
    excerpt: "Every product has dozens of metrics you could track. Most of them are vanity metrics. The hard work is finding the one number that captures real value creation for users and the business.",
    category: "Growth",
    readTime: "4 min read",
    date: "Aug 2024",
    featured: false,
  },
  {
    id: "ai-product-thinking",
    title: "How AI is Changing Product Management",
    excerpt: "AI is not just a feature — it is a new way of thinking about what products can do. Here is how I think about building AI-powered products and what it means for the PM skill set.",
    category: "AI Products",
    readTime: "7 min read",
    date: "Jul 2024",
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  "Product Management": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Strategy": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  "User Research": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "Leadership": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "Growth": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "AI Products": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
}

export default function WritingPage() {
  const heroRef = useRef(null)
  const listRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const listInView = useInView(listRef, { once: true, margin: "-80px" })

  const featured = articles.filter((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

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
              Writing
            </p>
            <h1
              className="mb-6 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
            >
              Thinking out
              <br />
              <span className="text-[#A1A1AA]">loud</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              Essays on product management, growth, strategy, and building things
              people care about. Written to share what I am learning.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <div ref={listRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
              Featured
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {featured.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={listInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/writing/${article.id}`} className="group block h-full">
                    <div className="h-full rounded-2xl border border-[#27272A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#3F3F46]">
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[article.category]}`}>
                          {article.category}
                        </span>
                        <span className="text-xs text-[#3F3F46]">{article.date}</span>
                      </div>
                      <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-white">
                        {article.title}
                      </h2>
                      <p className="mb-6 text-sm text-[#A1A1AA] leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#3F3F46]">{article.readTime}</span>
                        <ArrowUpRight size={14} className="text-[#A1A1AA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
              All Articles
            </p>
            <div className="flex flex-col gap-3">
              {rest.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={listInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                >
                  <Link href={`/writing/${article.id}`} className="group block">
                    <div className="flex flex-col gap-4 rounded-xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46] sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[article.category]}`}>
                            {article.category}
                          </span>
                          <span className="text-xs text-[#3F3F46]">{article.date}</span>
                          <span className="text-xs text-[#3F3F46]">{article.readTime}</span>
                        </div>
                        <h3 className="text-base font-semibold text-white">{article.title}</h3>
                      </div>
                      <ArrowUpRight size={16} className="text-[#A1A1AA] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}