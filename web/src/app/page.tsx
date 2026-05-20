import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Marquee } from "@/components/sections/Marquee";
import { Problem } from "@/components/sections/Problem";
import { Roles } from "@/components/sections/Roles";
import { RoomPreview } from "@/components/sections/RoomPreview";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <HowItWorks />
        <RoomPreview />
        <Roles />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
