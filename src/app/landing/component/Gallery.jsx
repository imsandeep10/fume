"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/galleryimage1.jpeg",
  "/galleryimage2.jpeg",
  "/galleryimage3.jpeg",
  "/galleryimage4.jpeg",
  "/galleryimage5.jpeg",
];

export default function StackedImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }, 1500);
    return () => clearInterval(interval);
  }, [imageCount]);
  const getRotation = (idx) => {
    const rotationPattern = ["3deg", "0deg", "-3deg", "1deg"]; 
    return rotationPattern[idx % rotationPattern.length];
  };

  return (
    <section className="bg-[#F5EBDD] py-12 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D220F]">
          Our Gallery
        </h1>
        <p className="text-[#7D5336] text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
          See moments from our training programs in barista skills, baking,
          sushi making, and bartending.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-36 py-16">
        <div className="relative w-[200px] sm:w-[250px] md:w-[400px] lg:w-[500px] h-[150px] sm:h-[150px] md:h-[300px] sm:ml-20 lg:h-[400px] ">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            const offset = (idx - currentIndex) * 6;
            const activeRotation = getRotation(idx);
            return (
              <Image
                key={idx}
                src={img}
                alt={`Image ${idx}`}
                width={400}
                height={200}
                className={`
                  absolute lg:top-16 lg:left-8
                  w-[250px] h-[150px] sm:w-[220px] sm:h-[180px] md:w-[380px] md:h-[280px] lg:w-[400px] lg:h-[280px]
                  transition-all duration-700
                  border-[10px] border-white
                  shadow-lg
                  ${
                    isActive
                      ? "z-30 scale-105 opacity-100"
                      : "z-10 scale-100 opacity-80 rotate-[-10deg]"
                  }
                `}
                style={{
                  zIndex: isActive ? 30 : 10,
                  transform: `translate(${offset}px, ${offset}px) ${
                    isActive
                      ? `rotate(${activeRotation}) scale(1.05)`
                      : "rotate(-10deg) scale(1)"
                  }`,
                }}
              />
            );
          })}
        </div>
        <div className="border-10 border-white md:mr-10">
          <Image
            src={images[currentIndex]}
            alt="Main Display"
            width={800}
            height={300}
            className="w-[300px] sm:w-[340px] md:w-[600px] lg:w-[550px] h-[200px] sm:h-[240px] md:h-[350px] lg:h-[380px] object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}