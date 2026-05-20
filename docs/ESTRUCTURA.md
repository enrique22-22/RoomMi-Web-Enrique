# Estructura del proyecto RoomMi

```
roommi/
├── README.md                 # Nombre y enlace web
├── docs/                     # Documentación
│   └── ESTRUCTURA.md
├── .github/                  # Despliegue automático (GitHub Pages)
│   └── workflows/
│       └── deploy-pages.yml
└── web/                      # Toda la aplicación web
    ├── public/               # Iconos y archivos públicos
    │   └── assets/
    ├── src/
    │   ├── app/              # Páginas
    │   ├── components/
    │   │   ├── layout/       # Cabecera y pie
    │   │   ├── sections/     # Bloques de la landing
    │   │   └── ui/           # Iconos y animaciones
    │   ├── data/             # Textos de la web
    │   └── styles/           # CSS global
    ├── package.json
    ├── next.config.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

## Carpetas en la raíz

| Carpeta | Contenido |
|---------|-----------|
| `docs/` | Documentación del proyecto |
| `web/` | Código completo de la landing (Next.js) |
| `.github/` | Publicación automática en internet |

> Los archivos de configuración (`.json`, `.ts`, `.mjs`) están dentro de `web/` porque Next.js los necesita ahí para funcionar.
