# Estructura del proyecto RoomMi

```
roommi/
├── README.md                 # Nombre y enlace web
├── docs/
│   └── ESTRUCTURA.md         # Este archivo (mapa del proyecto)
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # Publicación automática en GitHub Pages
├── public/                   # Archivos públicos (iconos, robots.txt)
│   ├── assets/
│   │   └── icon.svg
│   ├── robots.txt
│   └── .nojekyll
├── src/
│   ├── app/                  # Páginas Next.js
│   │   ├── layout.tsx        # Plantilla global
│   │   └── page.tsx          # Página principal
│   ├── components/
│   │   ├── layout/           # Cabecera y pie
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/         # Bloques de la landing
│   │   │   ├── Hero.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── RoomPreview.tsx
│   │   │   ├── Roles.tsx
│   │   │   └── CTA.tsx
│   │   └── ui/               # Componentes reutilizables
│   │       ├── Icons.tsx
│   │       └── Reveal.tsx
│   ├── data/
│   │   └── content.ts        # Textos y datos de la web
│   └── styles/
│       └── globals.css       # Estilos globales
├── package.json              # Dependencias (Next.js, React…)
├── next.config.ts            # Configuración de Next.js
├── tailwind.config.ts        # Colores y estilos Tailwind
└── tsconfig.json             # Configuración TypeScript
```

## ¿Qué hay en cada carpeta?

| Carpeta | Contenido |
|---------|-----------|
| `src/app` | Páginas de la aplicación |
| `src/components/layout` | Menú superior y pie de página |
| `src/components/sections` | Cada sección visible de la landing |
| `src/components/ui` | Iconos y animaciones |
| `src/data` | Textos centralizados (fácil de editar) |
| `src/styles` | CSS global |
| `public` | Imágenes e iconos accesibles en la web |
| `docs` | Documentación del proyecto |
| `.github` | Despliegue automático a GitHub Pages |

> Los archivos `package.json`, `next.config.ts`, etc. están en la raíz porque Next.js lo exige así.
