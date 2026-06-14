"use client";

const achievements = [
  "🏆 Hackathon Winner",
  "📦 5+ Products Shipped",
  "🎓 Google PM Certificate",
  "🚀 Startup Experience",
  "📊 Data-Driven PM",
  "🏅 Case Competition Finalist",
  "👥 Cross-functional Leader",
  "🔍 User Research Expert",
  "📈 Growth Specialist",
  "⚡ Product Fellowship",
  "🌟 Leadership Award",
  "🤝 Stakeholder Management",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 mx-8 text-sm font-medium text-[#A1A1AA] whitespace-nowrap">
      <span className="h-1 w-1 rounded-full bg-[#3F3F46]" />
      {text}
    </span>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...achievements].reverse() : achievements;
  const animClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 ${animClass}`}>
        {items.map((item, i) => (
          <MarqueeItem key={`1-${i}`} text={item} />
        ))}
        {items.map((item, i) => (
          <MarqueeItem key={`2-${i}`} text={item} />
        ))}
      </div>
      <div className={`flex shrink-0 ${animClass}`} aria-hidden="true">
        {items.map((item, i) => (
          <MarqueeItem key={`3-${i}`} text={item} />
        ))}
        {items.map((item, i) => (
          <MarqueeItem key={`4-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-16 border-y border-[#27272A] overflow-hidden flex flex-col gap-4">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>
  );
}