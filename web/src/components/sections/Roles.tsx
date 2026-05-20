import { Reveal } from "@/components/ui/Reveal";
import { roles } from "@/data/content";

export function Roles() {
  return (
    <section id="perfiles" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-peach-500">
            Perfiles de usuario
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-room-900 sm:text-4xl">
            Diseñado para inquilinos, propietarios y administración
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.name} delay={i * 0.1}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  role.highlight
                    ? "border-room-500 bg-gradient-to-b from-room-600 to-room-700 text-white shadow-glow"
                    : "border-room-200/80 bg-white shadow-card"
                }`}
              >
                {role.highlight && (
                  <span className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Más popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{role.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    role.highlight ? "text-white/75" : "text-room-900/55"
                  }`}
                >
                  {role.subtitle}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {role.permissions.map((perm) => (
                    <li
                      key={perm}
                      className={`flex gap-2 text-sm leading-snug ${
                        role.highlight ? "text-white/90" : "text-room-900/70"
                      }`}
                    >
                      <span
                        className={
                          role.highlight ? "text-mint-400" : "text-room-500"
                        }
                      >
                        ✓
                      </span>
                      {perm}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
