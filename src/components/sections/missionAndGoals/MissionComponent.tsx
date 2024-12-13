import Image from "next/image";
import React from "react";

type Props = {};

const MissionComponent = (props: Props) => {
  return (
    <div id="missions" className="missions h-[100vh] flex justify-around pt-10">
      <section className="text-section">
        <h2 className="text-4xl md:text-7xl font-bold">Missions</h2>
      </section>
      <section className="cta-section pt-10">
        <section className="flex gap-10">
          <Image
            src="/licensed-stock-missions.jpeg"
            alt="mission image"
            width={400}
            height={400}
            className="image-styles"
          />
          <Image
            src="/licensed-stock-missions.jpeg"
            alt="mission image"
            width={400}
            height={400}
          />
        </section>
        <section></section>
      </section>
    </div>
  );
};

export default MissionComponent;
