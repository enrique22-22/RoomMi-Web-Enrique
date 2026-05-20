import { Reveal } from "./Reveal";
import { steps } from "@/data/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-room-600">
            Cómo funciona
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-room-900 sm:text-4xl">
            Tres pasos para tu próximo hogar compartido
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute top-12 hidden h-0.5 w-full bg-gradient-to-r from-room-200 via-room-400 to-room-200 md:block" />

          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-room-600 font-display text-xl font-bold text-white shadow-glow">
                {item.step}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-room-900">
                {item.title}
              </h3>
              <p className="mt-3 text-room-900/60">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
