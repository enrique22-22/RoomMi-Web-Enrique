"use client";

import { motion } from "framer-motion";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="bg-mesh absolute inset-0" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-room-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-mint-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-room-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-room-600 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint-500" />
            Próximamente · 2º DAM
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-room-900 sm:text-5xl lg:text-[3.4rem]">
            Encuentra tu habitación y{" "}
            <span className="text-gradient">compañeros de confianza</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-room-900/65">
            {site.name} digitaliza el alquiler compartido: publica o busca
            habitaciones, chatea en la app y elige con valoraciones reales de
            quien ya ha convivido contigo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#lista-espera"
              className="inline-flex items-center justify-center rounded-full bg-room-600 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-room-700"
            >
              Apúntate a la lista de espera
            </a>
            <a
              href="#solucion"
              className="inline-flex items-center justify-center rounded-full border border-room-300 bg-white px-7 py-3.5 text-sm font-semibold text-room-700 transition hover:border-room-500"
            >
              Ver cómo funciona
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-room-200/80 pt-8">
            {[
              { label: "Sector", value: "Tech + Inmobiliario" },
              { label: "Plataforma", value: "Web y móvil" },
              { label: "Enfoque", value: "Convivencia segura" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-room-900/45">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-sm font-semibold text-room-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="animate-float relative rounded-[2rem] border border-room-200/80 bg-white p-4 shadow-card">
            <div className="rounded-2xl bg-gradient-to-br from-room-100 to-white p-5">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-semibold text-room-900">
                  Explorar habitaciones
                </p>
                <span className="rounded-full bg-mint-500/15 px-2.5 py-0.5 text-xs font-semibold text-mint-600">
                  12 nuevas
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  {
                    zone: "Valencia · Benimaclet",
                    price: "340 €",
                    match: "94% afinidad",
                    color: "from-violet-400/30 to-violet-600/20",
                  },
                  {
                    zone: "Madrid · Lavapiés",
                    price: "490 €",
                    match: "88% afinidad",
                    color: "from-emerald-400/25 to-teal-500/15",
                  },
                ].map((room) => (
                  <div
                    key={room.zone}
                    className={`rounded-xl bg-gradient-to-r ${room.color} p-4`}
                  >
                    <div className="flex justify-between text-sm font-semibold text-room-900">
                      <span>{room.zone}</span>
                      <span>{room.price}</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-room-600">
                      {room.match} · Chat disponible
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-room-100 bg-white p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-room-600 text-sm font-bold text-white">
                  ES
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-room-900">
                    María · 4.9 ★
                  </p>
                  <p className="truncate text-xs text-room-900/50">
                    «Muy responsable y ordenada»
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-room-100 bg-white px-4 py-3 shadow-card">
            <p className="text-xs font-medium text-room-900/50">Valoración media</p>
            <p className="font-display text-2xl font-bold text-room-600">4.8</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
