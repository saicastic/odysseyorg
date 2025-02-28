"use client";

import { forwardRef, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HomeEventCard from "@/components/snippets/homeeventcard/HomeEventCard";
import "./homeevent.css";
import AnimatedTitle from "@/components/utils/animatedtitle/AnimatedTitle";

const HomeEvent = forwardRef(({}, ref) => {
  const homeEventContainer = useRef(null);

  return (
    <section className="HomeEventSec" ref={homeEventContainer}>
      <AnimatedTitle
        title="Events Overview"
        containerClass="mt-5 !text-black text-center"
      />
      {[...Array(4)].map((_, index) => (
        <HomeEventCard
          key={index}
          id={`card-${index + 1}`}
          frontSrc="/img/amity_logo.png"
          frontAlt="Card Image"
          backText="Your card Details Appear here"
          ref={(el) => (ref.current[index] = el)}
        />
      ))}
    </section>
  );
});

export default HomeEvent;
