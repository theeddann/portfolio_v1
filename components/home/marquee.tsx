"use client";

const achievements = [
  "5+ Products Shipped",
  "Google PM Certificate",
  "Startup Experience",
  "Cross-functional Leadership",
  "User Research",
  "Growth Strategy",
  "Stakeholder Management",
  "Hackathon Winner",
  "Case Competition Finalist",
  "Data-Driven Decision Making",
  "Product Fellowship",
  "Leadership Award",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-3 mx-8 whitespace-nowrap">
      <span className="h-1 w-1 rounded-full bg-[#52525B]" />
      <span className="text-sm font-medium tracking-wide text-[#A1A1AA]">
        {text}
      </span>
    </span>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...achievements].reverse() : achievements;
  const animClass = reverse
    ? "animate-marquee-reverse"
    : "animate-marquee";

  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 ${animClass}`}>
        {[...items, ...items].map((item, i) => (
          <MarqueeItem key={`first-${i}`} text={item} />
        ))}
      </div>

      <div
        className={`flex shrink-0 ${animClass}`}
        aria-hidden="true"
      >
        {[...items, ...items].map((item, i) => (
          <MarqueeItem key={`second-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-[#27272A] py-16">
      <div className="flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}