"use client";
import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/storyimage1.jpg",
    alt: "Coffee Pouring",
    size: "w-50 h-76 sm:w-52 sm:h-72 md:w-60 md:h-94",
    borderRotate: "rotate-8",
    borderExtra: "w-52 h-78 sm:w-54 sm:h-74 md:w-64 md:h-96",
  },
  {
    src: "/storyimage2.jpg",
    alt: "Drink",
    size: "w-36 h-52 sm:w-36 sm:h-52 md:w-44 md:h-62",
    borderRotate: "rotate-8",
    borderExtra: "w-38 h-54 sm:w-38 sm:h-54 md:w-46 md:h-64",
  },
  {
    src: "/storyimage3.jpg",
    alt: "Cake",
    size: "w-36 h-52 sm:w-36 sm:h-52 md:w-44 md:h-62",
    borderRotate: "-rotate-8",
    borderExtra: "w-38 h-54 sm:w-38 sm:h-54 md:w-46 md:h-64",
  },
];

const Story = () => {
  return (
    <section className="w-full bg-[#FFFCF9] py-16 px-4 sm:px-8 md:px-16 overflow-x-hidden">
      <div className="gap-8 md:gap-12 items-center md:flex-row sm:grid lg:flex ">
        {/* Left Text Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 md:p-10 relative z-10 w-11/12 sm:w-11/12 md:ml-10 ml-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D220F] mb-4 sm:mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-base">
            Fume Barista Training School was established in 2023 with a clear
            mission: to nurture a new generation of skilled, confident, and
            passionate baristas who are prepared to make their mark in the
            coffee industry. What began as a vision rooted in a deep love for
            quality coffee and the art of brewing has grown into a place where
            tradition meets innovation. At Fume, we believe coffee is more than
            just a drink—it is a craft, a culture, and a way of connecting
            people. That is why our training programs are carefully designed to
            combine foundational knowledge with practical, hands–on experience.
            From beginners eager to learn the basics to coffee enthusiasts
            aiming to refine their skills, our courses are tailored to meet
            different levels of expertise.
          </p>
        </div>
        <div className="relative flex items-center gap-6 md:gap-10 justify-center w-full h-auto mt-10 transform scale-90 sm:scale-95 md:scale-100">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center pointer-events-none">
            <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mt-2 sm:mt-3 md:mt-4">
              <Image
                src="/beanback1.png"
                alt="Background top"
                fill
                className="rounded-full"
              />
              <Image
                src="/bean1.png"
                alt="Coffee bean top"
                width={80}
                height={80}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 md:-mt-10 md:-ml-2 -mt-6 -ml-2"
              />
            </div>
            <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mb-2 sm:mb-3 md:mb-4">
              <Image
                src="/beanback.png"
                alt="Background bottom"
                fill
                className="rounded-full object-cover"
              />
              <Image
                src="/bean2.png"
                alt="Coffee bean bottom"
                width={80}
                height={80}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-20 md:mt-8 mt-6"
              />
            </div>
          </div>
          <div className="relative flex-shrink-0 group">
            <div
              className={`absolute -top-2 -left-2 ${images[0].borderExtra} border-[1px] border-[#3D220F] rounded-full ${images[0].borderRotate} transition duration-500 group-hover:shadow-[0_0_20px_#7D5336]`}
            ></div>
            <div
              className={`relative ${images[0].size} overflow-hidden rounded-full max-w-full`}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-14 flex-shrink-0 pt-2 pb-2 md:pt-4 md:pb-4">
            {images.slice(1).map((img, i) => (
              <div key={i} className="relative group">
                <div
                  className={`absolute -top-1 -left-1 ${img.borderExtra} border-[1px] border-[#3D220F] rounded-full ${img.borderRotate} transition duration-500 group-hover:shadow-[0_0_15px_#7D5336]`}
                ></div>
                <div
                  className={`relative ${img.size} overflow-hidden rounded-full max-w-full`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
