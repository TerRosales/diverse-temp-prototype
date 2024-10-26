import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className=" flex flex-col sm:flex-row w-full bg-gray-100 min-h-[20%] mt-4">
      <div className="w-full sm:w-[70%] flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold my-2">
          Welcome to Our Banner
        </h1>
      </div>

      <div className="hidden sm:flex w-full sm:w-[30%] items-center justify-center bg-gray-300">
        <div className="hero-image-2 lg:col-span-1" />
      </div>
    </section>
  );
};

export default AboutSection;
