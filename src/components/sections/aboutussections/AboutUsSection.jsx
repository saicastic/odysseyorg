import { Meteors } from "@/components/utils/meteor/Meteors";
import aboutUsSections from "@/data/aboutussection";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <>
      {aboutUsSections.map((section) => (
        <section
          key={section.id}
          className="bg-black border-red-100 h-fit pt-[5.5rem] relative"
        >
          <Meteors number={60} />

          <div className="w-[90%] relative md:w-[80%] gap-[2rem]  flex flex-col md:flex-row h-fit bg-yellow-400 mx-auto overflow-hidden rounded-[0.75rem]  p-[0.5rem] text-black pb-2">
            <div className="w-[100%] md:w-[50%]  rounded-[0.5rem] overflow-hidden">
              <Image
                src={section.images[0]}
                width={100}
                height={100}
                alt={section.alt}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full my-3 text-black text-xl ">
                <h1>{section.title}</h1>
              </div>
              <div className="w-full text-gray-700">
                <p className="leading-[1.3]">{section.desc_one}</p>
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
