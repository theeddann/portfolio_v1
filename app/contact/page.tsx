"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Linkedin, Github, Calendar, Send, MapPin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shubham.b.01official@gmail.com",
    href: "mailto:shubham.b.01official@gmail.com",
    description: "Best for detailed conversations",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shubham-b-01official",
    href: "https://www.linkedin.com/in/shubham-bhardwaj-9b65511b5/",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shubhambhardwaj",
    href: "https://github.com/theeddann",
    description: "See what I am building",
  },
  {
    icon: Calendar,
    label: "Phone",
    value: "+91-9651680399",
    href: "tel:+919651680399",
    description: "Call or WhatsApp",
  },
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formInView = useInView(formRef, { once: true, margin: "-80px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

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
              Contact
            </p>
            <h1
              className="mb-6 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "1.05" }}
            >
              {"Let's build"}
              <br />
              <span className="text-[#A1A1AA]">something together</span>
            </h1>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              Open to PM roles, consulting projects, and interesting conversations.
              The best way to reach me is email — I respond within 24 hours.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#A1A1AA]">
              <MapPin size={14} className="text-blue-500" />
              IIT Roorkee, Uttarakhand — open to remote worldwide
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <div ref={formRef} className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-[#3F3F46] mb-2">
                Reach out directly
              </p>
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-center gap-4 rounded-2xl border border-[#27272A] bg-[#111111] p-5 transition-all duration-300 hover:border-[#3F3F46]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#27272A] bg-black">
                    <link.icon size={18} className="text-[#A1A1AA] transition-colors group-hover:text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#3F3F46] mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium text-white truncate">{link.value}</p>
                    <p className="text-xs text-[#A1A1AA]">{link.description}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-[#27272A] bg-[#111111] p-8"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-3xl">
                    ✅
                  </div>
                  <h3 className="text-xl font-bold text-white">Message sent</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    Thanks for reaching out. I will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <p className="mb-6 text-xs font-medium uppercase tracking-widest text-[#3F3F46]">
                    Send a message
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs text-[#A1A1AA]">Name</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full rounded-lg border border-[#27272A] bg-black px-4 py-2.5 text-sm text-white placeholder-[#3F3F46] outline-none transition-colors focus:border-[#3F3F46]"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs text-[#A1A1AA]">Email</label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-[#27272A] bg-black px-4 py-2.5 text-sm text-white placeholder-[#3F3F46] outline-none transition-colors focus:border-[#3F3F46]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs text-[#A1A1AA]">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[#27272A] bg-black px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#3F3F46]"
                      >
                        <option value="" className="bg-black">Select a subject</option>
                        <option value="job" className="bg-black">Job opportunity</option>
                        <option value="consulting" className="bg-black">Consulting project</option>
                        <option value="collaboration" className="bg-black">Collaboration</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs text-[#A1A1AA]">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity or what you have in mind..."
                        rows={5}
                        className="w-full rounded-lg border border-[#27272A] bg-black px-4 py-2.5 text-sm text-white placeholder-[#3F3F46] outline-none transition-colors focus:border-[#3F3F46] resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
                    >
                      <Send size={14} />
                      Send Message
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}