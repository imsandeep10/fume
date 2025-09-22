import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <section
      className="relative landingbgcolor flex items-center"
      style={{ height: "calc(100vh - 64px)" }} // full viewport minus navbar
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingbg.png"
          alt="coffee background"
          fill
          className="object-cover opacity-10 pointer-events-none"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">
        {/* Left Text */}
        <div className="flex flex-col justify-center space-y-3 md:pb-20 pt-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#3D220F] leading-snug">
            Learn. Brew. <br />
            <span>Serve.</span> <br />
            <span className="text-[#7D5336]">Your Barista </span> <br />
            <span className="text-[#7D5336]">Journey</span> <br />
            <span>Begins Here</span>
          </h1>
          <p className="text-[#3D220F] text-base sm:text-lg max-w-lg">
            Get hands-on training, real café simulations, and expert guidance to
            become a confident barista ready to craft and serve high-quality coffee.
          </p>
          <Link href="/enroll">
            <Button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#EBA747] text-[#3D220F] rounded-full shadow hover:bg-[#3D220F] hover:text-white transition">
              Enroll Now →
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-80 sm:h-96 md:h-screen  md:top-14">
          <Image
            src="/landingimage.png"
            alt="Barista training"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
