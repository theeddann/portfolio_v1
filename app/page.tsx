import Hero from "@/components/home/hero";
import Metrics from "@/components/home/metrics";
import FeaturedProjects from "@/components/home/featured-projects";
import Marquee from "@/components/home/marquee";
import ProductThinking from "@/components/home/product-thinking";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <Metrics />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <FeaturedProjects />

      <Marquee />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
      </div>

      <ProductThinking />
    </div>
  );
}