import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Roles } from "@/components/Roles";
import { RoomPreview } from "@/components/RoomPreview";

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
