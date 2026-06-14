"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: 10000,
    suffix: "+",
    label: "Users Impacted",
    description: "Across products shipped",
  },
  {
    value: 25,
    suffix: "%",
    label: "Growth Achieved",
    description: "Average metric improvement",
  },
  {
    value: 5,
    suffix: "+",
    label: "Products Built",
    description: "End-to-end ownership",
  },
  {
    value: 3,
    suffix: "+",
    label: "Leadership Roles",
    description: "Cross-functional teams",
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function MetricCard({
  value,
  suffix,
  label,
  description,
  index,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);

  const formatted =
    value >= 1000
      ? (count / 1000).toFixed(count >= value ? 1 : 0) + "K"
      : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-2 rounded-2xl border border-[#27272A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#3F3F46] hover:bg-[#161616]"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
          {formatted}
        </span>
        <span className="text-3xl font-bold text-blue-500">{suffix}</span>
      </div>

      <p className="text-base font-semibold text-white">{label}</p>
      <p className="text-sm text-[#A1A1AA]">{description}</p>
    </motion.div>
  );
}

export default function Metrics() {
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
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Impact
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Numbers that matter
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              {...metric}
              index={i}
              started={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}