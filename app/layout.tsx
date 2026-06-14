import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Shubham Bhardwaj — Product Manager",
    template: "%s | Shubham Bhardwaj",
  },
  description:
    "Co-Founder & Product Lead at MeSan Mentorship. IIT Roorkee student specializing in product strategy, growth, and data-driven decision making.",
  keywords: ["Product Manager", "Product Analyst", "Strategy", "IIT Roorkee", "Growth", "Portfolio"],
  authors: [{ name: "Shubham Bhardwaj" }],
  creator: "Shubham Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhambhardwaj.vercel.app",
    title: "Shubham Bhardwaj — Product Manager",
    description: "Co-Founder & Product Lead at MeSan Mentorship. IIT Roorkee student specializing in product strategy, growth, and data-driven decision making.",
    siteName: "Shubham Bhardwaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Bhardwaj — Product Manager",
    description: "Co-Founder & Product Lead at MeSan Mentorship. IIT Roorkee student specializing in product strategy, growth, and data-driven decision making.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(inter.variable, "dark")}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn("min-h-screen bg-background text-foreground antialiased", inter.className)}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}