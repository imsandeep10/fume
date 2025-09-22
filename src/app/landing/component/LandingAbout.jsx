import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const LandingAbout = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <article className="w-10/12 mx-auto grid md:grid-cols-2 gap-20 items-center py-6">
        {/* Left Content */}
        <div className="flex flex-col gap-4 pt-24 -mt-28">
          <header>
            <h2 className="text-4xl md:text-4xl font-bold text-[#3D220F]">
              About Us
            </h2>
          </header>

          <p className="text-[#3D220F] leading-relaxed md:text-md">
            Fume Barista Training School was established in 2023 with a clear
            mission: to nurture a new generation of skilled, confident, and
            passionate baristas who are prepared to make their mark in the
            coffee industry. What began as a vision rooted in a deep love for
            quality coffee and the art of brewing has grown into a place where
            tradition meets innovation. At Fume, we believe coffee is more than
            just a drink—it is a craft, a culture, and a way of connecting
            people. That is why our training programs are carefully designed to
            combine foundational knowledge with practical, hands-on experience.
            From beginners eager to learn the basics to coffee enthusiasts
            aiming to refine their skills, our courses are tailored to meet
            different levels of expertise.
          </p>

          <nav>
            <Link href={`/about`}>
            <Button className="inline-block rounded-full bg-transparent border border-[#3D220F] px-6 py-2 text-[#3D220F] hover:bg-[#3D220F] hover:text-white transition delay-200">
              Learn more →
            </Button>
            </Link>
          </nav>
        </div>

        {/* Right Image with brownish background box */}
        <figure className="relative flex justify-end items-center top-4 ml-8">
          <div className="bg-[#3D220F] rounded-2xl py-6 shadow-2xl">
            <Image
              src="/LandingAbout.jpg"
              alt="Fume Coffee Training School"
              width={300}
              height={300}
              className="rounded-lg shadow-lg -ml-8 w-[400px]"
            />
          </div>

          {/* Decorative elements */}
          <Image
            src="/bean1.png"
            alt="coffee leaf decoration"
            width={80}
            height={80}
            className="absolute -top-14 -left-16 md:-top-12 lg:ml-78 md:ml-40 sm:-left-56"
          />
          <Image
            src="/bean2.png"
            alt="coffee bean decoration"
            width={80}
            height={80}
            className="absolute -bottom-18 -right-10 md:-bottom-16 md:-right-14 "
          />
        </figure>
      </article>
    </section>
  );
};

export default LandingAbout;
