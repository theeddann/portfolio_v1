"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[#27272A] bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Home"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              {/* Accent dot */}
              <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
              <span className="text-sm font-semibold tracking-tight text-white">
                Shubham Bhardwaj
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-[#A1A1AA] hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-md bg-white/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.4,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/resume"
              className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-8 items-center rounded-md border border-[#27272A] bg-white px-4 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#27272A] text-white transition-colors hover:bg-white/5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex h-full flex-col px-6 pt-24 pb-8"
            >
              {/* Mobile Links */}
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-[#A1A1AA] hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-auto flex flex-col gap-3"
              >
                <Link
                  href="/resume"
                  className="flex items-center justify-center rounded-lg border border-[#27272A] py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  View Resume
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-lg bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}