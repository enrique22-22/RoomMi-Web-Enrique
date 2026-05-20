import { LogoMark } from "@/components/ui/Icons";
import { nav, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-room-200/80 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold text-room-900">
            <LogoMark className="h-8 w-8" />
            {site.name}
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-room-900/55">
            {site.tagline}. Proyecto intermodular · {site.author}.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-room-900/60 transition hover:text-room-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-room-100 px-5 pt-8 text-xs text-room-900/40 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
        <p>1º DAM · Proyecto intermodular</p>
      </div>
    </footer>
  );
}
