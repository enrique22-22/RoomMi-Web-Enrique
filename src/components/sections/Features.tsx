import { Reveal } from "@/components/ui/Reveal";
import { FeatureIcon } from "@/components/ui/Icons";
import { features } from "@/data/content";

export function Features() {
  return (
    <section id="solucion" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-mint-600">
            La solución
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-room-900 sm:text-4xl">
            Todo lo que necesitas para compartir piso, en una sola app
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group flex h-full gap-5 rounded-2xl border border-room-100 bg-[#faf8ff] p-6 transition hover:border-room-300 hover:shadow-card">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-room-500 to-room-700 text-white shadow-md transition group-hover:scale-105">
                  <FeatureIcon name={item.icon} className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-room-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-room-900/60">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
