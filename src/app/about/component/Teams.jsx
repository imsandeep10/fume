"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  { id: 1, name: "Nikollas Gibbas", title: "Founder / CEO", image: "/hero1.png" },
  { id: 2, name: "Terry Dias", title: "Head Barista Trainer", image: "/hero1.png" },
  { id: 3, name: "Terry Vaccaro", title: "Bartending Trainer", image: "/hero3.png" },
  { id: 4, name: "Angel Herwitz", title: "Bakery & Pastry Chef Trainer", image: "/hero4.png" },
  { id: 5, name: "Angel Herwitz", title: "Bakery & Pastry Chef Trainer", image: "/hero1.png" },
  { id: 6, name: "Angel Herwitz", title: "Bakery & Pastry Chef Trainer", image: "/hero2.png" },
];

export default function Teams() {
  return (
    <section id="team" className="py-20 px-6 bg-[#F5EBDD]">
      <main className="w-10/12 mx-auto">
        <div className="w-11/12 md:w-10/12 mx-auto text-left space-y-4 -ml-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D220F]">
            Meet Our Team
          </h2>
          <p className="text-[#3D220F] max-w-2xl">
            We provide comprehensive training that prepares you for real-world coffee service excellence
          </p>
        </div>
        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination", 
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <Card className="relative group overflow-hidden rounded-xl shadow-lg border-none h-96 md:h-80">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 text-left text-[#3D220F] bg-white space-y-2 w-full flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm">{member.title}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </main>
    </section>
  );
}
