import { Reveal } from "./Reveal";
import { sampleRooms } from "@/data/content";

export function RoomPreview() {
  return (
    <section className="bg-gradient-to-b from-white to-[#faf8ff] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-room-600">
            Vista previa
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-room-900 sm:text-4xl">
            Habitaciones filtradas por zona, precio y confianza
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sampleRooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 0.1}>
              <article className="overflow-hidden rounded-2xl border border-room-200/80 bg-white shadow-card">
                <div
                  className={`h-36 bg-gradient-to-br ${
                    i === 0
                      ? "from-violet-300/50 to-indigo-400/30"
                      : i === 1
                        ? "from-orange-200/60 to-amber-300/40"
                        : "from-emerald-200/50 to-teal-300/35"
                  }`}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-room-900">
                      {room.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                        room.available
                          ? "bg-mint-500/15 text-mint-600"
                          : "bg-room-100 text-room-900/50"
                      }`}
                    >
                      {room.available ? "Libre" : "Ocupada"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-room-900/50">{room.zone}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <p className="font-display text-2xl font-bold text-room-600">
                      {room.price}
                      <span className="text-sm font-medium text-room-900/40">
                        {" "}
                        €/mes
                      </span>
                    </p>
                    <p className="text-sm font-semibold text-room-900">
                      {room.rating} ★
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-room-50 px-2.5 py-1 text-xs font-medium text-room-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
