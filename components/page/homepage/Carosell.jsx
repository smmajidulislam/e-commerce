"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/carosell/carousel.jpg",
  "/carosell/carousel2.jpg",
  "/carosell/carousel3.jpg",
  "/carosell/carousel4.jpg",
];

export default function Carosell() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto px-1 mt-16.5">
      <div className="relative w-full h-50 md:h-100 lg:h-110 overflow-hidden rounded-xl shadow-xl">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt="carousel"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/25 hover:bg-white/50 text-white rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-lg"
        >
          ❮
        </button>

        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/25 hover:bg-white/50 text-white rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-lg"
        >
          ❯
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
