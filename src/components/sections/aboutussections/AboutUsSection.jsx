import { Meteors } from "@/components/utils/meteor/Meteors";
import aboutUsSections from "@/data/aboutussection";
import Image from "next/image";

import "./aboutussection.css";

const AboutUsSection = () => {
  return (
    <>
      {aboutUsSections.map((section) => (
        <section key={section.id} className=" h-fit pt-[5.5rem] relative">
          <Meteors number={60} />

          <div className="w-[90%] relative md:w-[80%] md:gap-[2rem]  flex flex-col md:flex-row h-fit bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 mx-auto overflow-hidden rounded-[0.75rem]  p-[0.5rem] text-black pb-2 border-2 border-gray-700 shadow-[15px_13px_17px_5px_rgba(255,_255,_255,_0.05)] md:text-justify md:pr-[2rem]">
            <div className="w-[100%] md:w-[50%]  rounded-[0.5rem] overflow-hidden">
              <Image
                src={section.images[0]}
                width={100}
                height={100}
                alt={section.alt}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full my-3 md:mt-0 text-black text-xl uppercase font-bold">
                <h1>{section.title}</h1>
              </div>
              <div className="w-full text-gray-900 pb-2">
                <p className="leading-[1.3]">{section.desc_one}</p>
                <br />
                <p className="leading-[1.3] hidden md:block ">
                  {section.desc_two}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AboutUsSection;
