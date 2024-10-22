import AboutSection from "@/components/sections/about/AboutSection";
import HeroSection from "@/components/sections/hero/HeroSection";

export default function Home() {
  return (
    <div className="h-[200vh]">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
