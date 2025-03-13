import gsap from "gsap";
import ButtonOne from "@/components/utils/buttons/ButtonOne";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { ScrollTrigger } from "gsap/all";
import SplashCursor from "@/components/utils/splashcursor/SplashCursor";
import Image from "next/image";
import "./homehero.css";
import CountUp from "@/components/utils/countup/CountUp";
import homeCounter from "@/data/homecounter";

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#home-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#home-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#home-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="home-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        <div className="hidden lg:block">
          <SplashCursor />
        </div>
        <h1 className=" flex md:hidden jus special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          ODYSSEY
        </h1>
        <div className="flex absolute top-[50%] z-[1] w-[80%]  left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="counterWrapper flex  justify-center flex-wrap md:flex-grow w-[100%] md:w-[10%] md:justify-evenly">
            {homeCounter.map((el) => (
              <div
                key={el.id}
                className=" w-[8rem] md:w-[8rem] overflow-hidden border-[1px] border-white text-center rounded-md aspect-[1/1] flex flex-col items-center  py-[2rem] justify-between  bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-500"
              >
                <div>
                  <p className="text-black text-lg  font-bold">
                    <CountUp
                      from={0}
                      to={el.number}
                      separator=","
                      direction="up"
                      duration={3}
                      className="count-up-text"
                    />
                    +
                  </p>
                </div>
                <div>
                  <p>{el.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="homePageChakra absolute w-[70%] object-cover aspect-[1/1] left-[50%] translate-x-[-50%] bottom-0 translate-y-[50%] opacity-[0.5]">
          <Image src="/img/23.png" fill={true} alt="rangoli" />
        </div>
      </div>

      <h1 className="special-font flex md:hidden hero-heading absolute bottom-5 right-5 text-black">
        ODYSSEY
      </h1>
    </div>
  );
};

export default HomeHero;
