import React from "react";
import HeroContent from "./HeroContent";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="bg-neutral-100 h-[50vh] flex my-10 sm:flex-row flex-col justify-around items-center">
      <section className="w-full">
        <Image
          src="/licensed-stock-1.jpeg"
          alt="Hero Image"
          className="w-[110%]"
          width={500}
          height={500}
        />
      </section>{" "}
      <section>
        <HeroContent />
      </section>
    </section>
  );
};

export default HeroSection;
