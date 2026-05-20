import { Reveal } from "@/components/ui/Reveal";
import { FeatureIcon } from "@/components/ui/Icons";
import { problems } from "@/data/content";

export function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-peach-500">
            El problema
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-room-900 sm:text-4xl">
            Buscar piso compartido hoy es complicado y poco seguro
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-room-900/60">
            Estudiantes y jóvenes profesionales dependen de redes sociales y
            anuncios dispersos. RoomMi nace para dar control, transparencia y
            comunidad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="h-full rounded-2xl border border-room-200/80 bg-white p-7 shadow-card transition hover:border-room-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-room-100 text-room-600">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-room-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-room-900/60">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
