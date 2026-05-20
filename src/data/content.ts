export const site = {
  name: "RoomMi",
  tagline: "Tu habitación, tu gente, tu confianza",
  description:
    "RoomMi es la aplicación para buscar y compartir habitaciones con seguridad: publica o encuentra alojamiento, chatea con otros usuarios y valora la convivencia. Ideal para estudiantes y jóvenes profesionales.",
  url: "https://roommi.app",
  author: "Enrique Soriano",
};

export const nav = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Perfiles", href: "#perfiles" },
];

export const problems = [
  {
    title: "Poca seguridad en redes sociales",
    description:
      "Mucha gente busca piso por Instagram o grupos de WhatsApp sin verificar perfiles ni historial de convivencia.",
    icon: "shield",
  },
  {
    title: "Difícil comparar y confiar",
    description:
      "No hay una forma clara de comparar precios, zonas y saber si alguien ofrece un servicio de calidad.",
    icon: "scale",
  },
  {
    title: "Sin chat ni valoraciones centralizadas",
    description:
      "La comunicación se dispersa y no queda registro de experiencias reales entre compañeros de piso.",
    icon: "chat",
  },
];

export const features = [
  {
    title: "Busca y publica habitaciones",
    description:
      "Filtra por zona, precio y disponibilidad. Los propietarios gestionan sus anuncios desde un solo lugar.",
    icon: "home",
  },
  {
    title: "Chat integrado",
    description:
      "Habla con inquilinos o propietarios sin salir de la app. Todo queda registrado y entre usuarios verificados.",
    icon: "message",
  },
  {
    title: "Valoraciones reales",
    description:
      "Solo quien ha convivido puede valorar. La puntuación media te ayuda a elegir con más confianza.",
    icon: "star",
  },
  {
    title: "Coincidencias por afinidad",
    description:
      "Encuentra compañeros con hábitos parecidos: horarios, zona, presupuesto y estilo de vida.",
    icon: "match",
  },
];

export const steps = [
  {
    step: "01",
    title: "Crea tu perfil",
    description:
      "Regístrate como inquilino o propietario. Añade edad, zona, hábitos y presupuesto.",
  },
  {
    step: "02",
    title: "Explora o publica",
    description:
      "Busca habitaciones con filtros inteligentes o publica la tuya con fotos y precio.",
  },
  {
    step: "03",
    title: "Conecta y convive",
    description:
      "Chatea, conoce coincidencias sugeridas y deja tu valoración tras la estancia.",
  },
];

export const roles = [
  {
    name: "Usuario",
    subtitle: "Busca habitación o compañero",
    permissions: [
      "Registrarse e iniciar sesión",
      "Crear y editar perfil",
      "Buscar habitaciones",
      "Chat y valoraciones",
    ],
    highlight: false,
  },
  {
    name: "Propietario",
    subtitle: "Ofrece una o varias habitaciones",
    permissions: [
      "Todo lo del usuario",
      "Publicar y editar anuncios",
      "Gestionar disponibilidad",
      "Ver interés y mensajes",
    ],
    highlight: true,
  },
  {
    name: "Administrador",
    subtitle: "Mantiene la comunidad segura",
    permissions: [
      "Moderar usuarios y publicaciones",
      "Revisar valoraciones",
      "Supervisar el chat",
      "Estadísticas generales",
    ],
    highlight: false,
  },
];

export const sampleRooms = [
  {
    title: "Habitación luminosa en centro",
    zone: "Valencia · Ruzafa",
    price: 380,
    rating: 4.8,
    tags: ["WiFi", "Estudiantes", "No fumadores"],
    available: true,
  },
  {
    title: "Piso compartido con terraza",
    zone: "Madrid · Chamberí",
    price: 520,
    rating: 4.6,
    tags: ["Mascotas OK", "Teletrabajo"],
    available: true,
  },
  {
    title: "Habitación cerca del campus",
    zone: "Barcelona · Poblenou",
    price: 450,
    rating: 4.9,
    tags: ["Bajo consumo", "Limpio"],
    available: false,
  },
];

export const marqueeItems = [
  "Alquiler compartido seguro",
  "Perfiles verificados",
  "Chat en la app",
  "Valoraciones reales",
  "Filtros por zona y precio",
  "Coincidencias por hábitos",
  "Propietarios e inquilinos",
  "Comunidad de convivencia",
];
