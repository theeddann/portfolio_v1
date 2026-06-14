"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

const roles = [
  "Product Manager",
  "Strategic Thinker",
  "Problem Solver",
  "Growth Builder",
  "Product Analyst",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-8"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue Glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#111111] px-4 py-1.5 text-sm text-[#A1A1AA]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              Open to Product, Strategy & Consulting Roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1
              className="font-bold leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              Shubham
              <br />
              <span className="text-[#A1A1AA]">Bhardwaj</span>
            </h1>
          </motion.div>

          {/* Dynamic Role */}
          <motion.div
            variants={itemVariants}
            className="mt-6 overflow-hidden"
            style={{ height: "clamp(2rem, 4vw, 4rem)" }}
          >
            <div
              style={{
                transform: isAnimating
                  ? "translateY(-8px)"
                  : "translateY(0)",
                opacity: isAnimating ? 0 : 1,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
              }}
              className="font-light text-blue-500"
            >
              {roles[currentRole]}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl leading-relaxed text-[#A1A1AA]"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
          >
            I turn user problems into measurable business outcomes.
            <br />
            Co-Founder at MeSan • Builder at IIT Roorkee • Product
            Manager.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90"
            >
              View Case Studies
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-md border border-[#27272A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5"
            >
              <Download size={16} className="text-[#A1A1AA]" />
              Download Resume
            </Link>

            <Link
              href="/contact"
              className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
            >
              Let's connect →
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center gap-8 border-t border-[#27272A] pt-8"
          >
            {[
              { value: "1", label: "Company Founded" },
              { value: "12+", label: "Team Members Led" },
              { value: "₹1.65L", label: "Revenue Generated" },
              { value: "5000+", label: "Lives Impacted" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-[#A1A1AA]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-[#3F3F46] uppercase">
          scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={16} className="text-[#3F3F46]" />
        </motion.div>
      </motion.div>
    </section>
  );
}