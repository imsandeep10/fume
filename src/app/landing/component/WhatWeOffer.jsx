"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "Barista Training Program",
    description:
      "Master espresso techniques, latte art, and customer service in our intensive barista course.",
    image: "/barista.png",
  },
  {
    id: 2,
    title: "Sushi Training Program",
    description:
      "From basic rolls to advanced techniques, get hands-on training in authentic sushi preparation.",
    image: "/sushi.png",
  },
  {
    id: 3,
    title: "Bakery Training Program",
    description:
      "Learn artisan baking, cake decoration, and pastry making with expert guidance.",
    image: "/cake.png",
  },
  {
    id: 4,
    title: "Coffee Roasting Program",
    description:
      "Understand the science of roasting and flavor profiling for the perfect cup.",
    image: "/coffeee.png",
  },
  {
    id: 5,
    title: "Bakery Training Program",
    description:
      "Learn artisan baking, cake decoration, and pastry making with expert guidance.",
    image: "/cake.png",
  },
  {
    id: 6,
    title: "Bakery Training Program",
    description:
      "Learn artisan baking, cake decoration, and pastry making with expert guidance.",
    image: "/cake.png",
  },
  {
    id: 7,
    title: "Bakery Training Program",
    description:
      "Learn artisan baking, cake decoration, and pastry making with expert guidance.",
    image: "/cake.png",
  },
  {
    id: 8,
    title: "Bakery Training Program",
    description:
      "Learn artisan baking, cake decoration, and pastry making with expert guidance.",
    image: "/cake.png",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="offers" className="py-20 px-6 bg-[#F5EBDD]">
      <main className="w-10/12 mx-auto">
        <div className="w-11/12 md:w-10/12 mx-auto text-start space-y-4 -ml-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D220F]">
            What We Offer
          </h2>
          <p className="text-[#3D220F] max-w-2xl">
            Choose from our carefully crafted courses designed to take you from
            beginner to professional.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative"
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <Card className="relative group overflow-hidden rounded-2xl shadow-lg border-none h-96">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 text-left text-white space-y-2">
                    <h3 className="text-lg font-semibold text-[#FFA726]">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-gray-200">{offer.description}</p>
                    <Button
                      variant="outline"
                      className="mt-3 rounded-lg border border-[#FFA726] text-[#FFA726] bg-white/15 backdrop-blur-lg hover:bg-[#FFA726] hover:text-black transition"
                    >
                      <Link href={`/about`}>Learn more →</Link>
                    </Button>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination-custom mt-6 flex justify-center"></div>
          </Swiper>
        </div>
      </main>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #7d5336 !important; /* coffee brown */
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background-color: #3d220f !important; /* darker coffee */
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
