"use client";
import React from "react";

type Props = {};

const HeroContent = (props: Props) => {
  return (
    <article className="py-2 my-2 mx-4">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Empowering Diverse Talent, Driving Inclusive Success
      </h1>
      <p className="text-md sm:text-lg leading-relaxed">
        At Diverse Temp, we are committed to bridging the gap between
        exceptional talent and forward-thinking organizations. Our mission is to
        foster an inclusive workforce where diversity isn&apos;t just
        welcomed—it&apos;s celebrated. We connect companies with professionals
        from all backgrounds to help build stronger, more dynamic teams.
      </p>
    </article>
  );
};

export default HeroContent;
