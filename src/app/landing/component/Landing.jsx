// import { Button } from "@/components/ui/button";
import { Button } from "../../../components/ui/button.jsx";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <section className="landingbgcolor relative overflow-hidden">
      {/* Coffee Background (only lg and above) */}
      <div className="absolute right-0 top-0 z-0 hidden lg:block">
        <Image
          src="/landingbg.png"
          alt="coffee"
          width={240}
          height={240}
          className="w-screen h-full object-cover opacity-10 pointer-events-none"
        />
      </div>

      {/* Landing Image as Background (only md devices) */}
      <div className="absolute inset-0 z-0 hidden md:block lg:hidden">
        <Image
          src="/landingimage.png"
          alt="Barista team background"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 md:h-[740px] h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 h-full">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 order-1 py-8 md:py-12 lg:py-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#3D220F]">
                Learn. Brew. <br />
                <span>Serve.</span>
                <br />
                <span className="text-[#7D5336]">Your Barista</span> <br />
                <span className="text-[#7D5336]">Journey</span> <br />
                <span>Begins Here</span>
              </h1>
              
              <p className="text-white text-base sm:text-lg md:text-base lg:text-lg leading-relaxed max-w-lg">
                Get hands-on training, real café simulations, and expert
                guidance to become a confident barista ready to craft and
                serve high-quality coffee.
              </p>
              
              <Link href="/enroll">
                <Button className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-[#EBA747] text-[#3D220F] rounded-full shadow hover:bg-[#3D220F] hover:text-white transition-colors duration-300">
                  Enroll Now →
                </Button>
              </Link>
            </div>

            {/* Right Image */}
            {/* Mobile: show image below text */}
            <div className="flex justify-center items-end order-2 h-full md:hidden">
              <div className="relative w-full h-full flex items-end justify-center">
                <Image
                  src="/landingimage.png"
                  alt="Barista team mobile"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Desktop/Laptop: side-by-side image */}
            <div className="hidden lg:flex justify-end items-end order-2 h-full">
              <div className="relative w-full h-full flex items-end justify-end">
                <Image
                  src="/landingimage.png"
                  alt="Barista team desktop"
                  width={1200}
                  height={1200}
                  className="w-[140%] lg:w-[115%] h-full max-w-none lg:pb-18 object-cover object-bottom lg:object-contain lg:scale-125"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
