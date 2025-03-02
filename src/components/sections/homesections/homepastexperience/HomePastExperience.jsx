"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/img/shrine.jpg",
    caption: "Layout nº001",
  },
  {
    src: "/img/shrine.jpg",
    caption: "Layout nº002",
  },
  {
    src: "/img/shrine.jpg",
    caption: "Layout nº003",
  },
  {
    src: "/img/shrine.jpg",
    caption: "Layout nº004",
  },
];

export default function HomePastExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto">
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <h2 className="text-xl font-bold">
          {String(currentSlide + 1).padStart(2, "0")}
        </h2>
        <span>/</span>
        <h2 className="text-xl font-bold">
          {String(slides.length).padStart(2, "0")}
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center"
            >
              <div className="relative">
                <Image
                  src={slide.src}
                  alt={slide.caption}
                  width={560}
                  height={315}
                  className="rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {slide.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white rounded-full shadow-lg"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-white rounded-full shadow-lg"
        >
          →
        </button>
      </div>
    </section>
  );
}
