"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const HeroContent = (props: Props) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }} // Start off-screen (left) and invisible
      animate={{ x: 0, opacity: 1 }} // Slide into place and become visible
      transition={{ duration: 0.5 }} // Animation duration of 0.5 seconds
    >
      HeroContent
    </motion.div>
  );
};

export default HeroContent;
