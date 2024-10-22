"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const HeroContent = (props: Props) => {
  return (
    <article className="text-center px-4 sm:px-8 py-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Empowering Diverse Talent, Driving Inclusive Success
      </h1>
      <p className="text-lg sm:text-xl leading-relaxed">
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
