"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { site } from "@/data/content";

export function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSent(true);
  }

  return (
    <section id="lista-espera" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-room-700 via-room-600 to-room-500 px-8 py-14 text-center text-white sm:px-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-mint-400/20 blur-2xl" />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Sé de los primeros en probar {site.name}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                La aplicación se desarrollará en 2º DAM. Déjanos tu correo y te
                avisaremos cuando abramos la beta — ideal si quieres usarla o
                llevarla al mercado.
              </p>

              {sent ? (
                <p className="mt-8 rounded-2xl bg-white/15 px-6 py-4 text-lg font-semibold">
                  ¡Gracias! Te avisaremos en cuanto haya novedades.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full border-0 px-5 py-3.5 text-room-900 placeholder:text-room-900/40 focus:outline-none focus:ring-2 focus:ring-mint-400"
                    aria-label="Correo electrónico"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-room-700 transition hover:bg-room-50"
                  >
                    Unirme
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
