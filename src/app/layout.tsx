import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const metadataBase = new URL(
  process.env.GITHUB_PAGES === "true"
    ? "https://enrique22-22.github.io/RoomMi-Web-Enrique"
    : "http://localhost:3000"
);

export const metadata: Metadata = {
  metadataBase,
  title: `${site.name} | Encuentra habitación y compañeros de confianza`,
  description: site.description,
  keywords: [
    "alquiler habitación",
    "compartir piso",
    "buscar compañero de piso",
    "alquiler estudiantes",
    "RoomMi",
    "pisos compartidos",
  ],
  authors: [{ name: site.author }],
  openGraph: {
    title: `${site.name} — Alquiler compartido con confianza`,
    description: site.description,
    type: "website",
    locale: "es_ES",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "RealEstateApplication",
  operatingSystem: "Web, iOS, Android",
  description: site.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
