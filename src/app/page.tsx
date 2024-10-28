"use client";
import AboutSection from "@/components/sections/about/AboutSection";
import HeroSection from "@/components/sections/hero/HeroSection";

export default function Home() {
  return (
    <div className="h-auto flex flex-col">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
