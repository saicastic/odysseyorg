"use client";

import { ParallaxScroll } from "@/components/snippets/parallaxscroll/ParallaxScroll";
import sponsors from "@/data/sponsors";
import Image from "next/image";

const SponsorsHero = () => {
  return (
    <section className="relative h-full w-full pt-[5rem]">
      <div className="text-center">
        <h1 className="uppercase text-white text-4xl font-bold">sponsors</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-evenly md:flex-wrap gap-8 pt-5">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex justify-center flex-col  items-center gap-2 px-10"
          >
            <div>
              <h1 className="font-bold uppercase tracking-wide">
                {sponsor.sec_name}
              </h1>
            </div>
            <div
              className={`flex flex-col  gap-3 ${
                sponsor.sec_name == "Techno Partner" ? `bg-white p-4` : ``
              }`}
            >
              {sponsor.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="sponsor"
                  height={400}
                  width={400}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsHero;

const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
];
