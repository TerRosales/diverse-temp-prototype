"use client";
import React from "react";
import HeroContent from "./HeroContent";
import Image from "next/image";
import "@/styles/globals.css";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="animation h-[50vh] bg-pink-100 my-10 md:flex-col lg:grid lg:grid-cols-3 lg:gap-2 justify-evenly items-center">
      <section className="lg:col-span-2">
        <Image
          src="/licensed-stock-1.jpeg"
          alt="Hero Image"
          className=""
          width={720}
          height={720}
          priority
        />
      </section>{" "}
      <section>
        <HeroContent />
      </section>
    </section>
  );
};

export default HeroSection;
