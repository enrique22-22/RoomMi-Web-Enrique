import { marqueeItems } from "@/data/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-room-200/70 bg-white py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="mx-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-room-900/35"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-room-500" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
