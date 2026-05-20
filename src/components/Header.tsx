"use client";

import { useState } from "react";
import { LogoMark } from "./Icons";
import { nav, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-room-200/60 bg-[#faf8ff]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-room-900">
          <LogoMark className="h-9 w-9" />
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-room-900/70 transition hover:text-room-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#lista-espera"
          className="hidden rounded-full bg-room-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-room-700 md:inline-flex"
        >
          Lista de espera
        </a>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-room-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-room-900 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-room-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-room-200/60 bg-[#faf8ff] px-5 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-room-900/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lista-espera"
            className="mt-2 block rounded-full bg-room-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Lista de espera
          </a>
        </div>
      )}
    </header>
  );
}
