"use client";

import HomeEvent from "@/components/sections/homesections/homeevent/HomeEvent";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HomeHero from "@/components/sections/homesections/homehero/HomeHero";
import HomeAbout from "@/components/sections/homesections/homeabout/HomeAbout";
import HomeSponsors from "@/components/sections/homesections/homesponsors/HomeSponsors";
import HomePastExperience from "@/components/sections/homesections/homepastexperience/HomePastExperience";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const mainContainer = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const totalScrollHeight = window.innerHeight * 3;
      const position = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      ScrollTrigger.create({
        trigger: mainContainer.current.querySelector(".HomeEventSec"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
      });

      //spread Cards

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${position[index]}%`,
          rotation: `${rotations[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: mainContainer.current.querySelector(".HomeEventSec"),
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      //spread cards
      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flipCardFront");
        const backEl = card.querySelector(".flipCardBack");

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: mainContainer.current.querySelector(".HomeEventSec"),
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              gsap.to(frontEl, {
                rotateY: frontRotation,
                ease: "power1.out",
              });
              gsap.to(backEl, {
                rotateY: backRotation,
                ease: "power1.out",
              });

              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    },
    { scope: mainContainer }
  );

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <main
        ref={mainContainer}
        className="relative min-h-screen w-screen overflow-x-hidden"
      >
        <HomeHero />
        <HomeAbout />
        <HomeEvent ref={cardRefs} />
        <HomeSponsors />
        <HomePastExperience />
      </main>
    </ReactLenis>
  );
}
