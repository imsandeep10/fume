import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  const images = [
    { src: "/bowlcoffee.webp", alt: "Coffee Beans" },
    { src: "/beanwithpowder.jpg", alt: "Event Icon 1" },
    { src: "/coffee pouring.png", alt: "Event Icon 2" },
  ];

  return (
    <section className="relative bg-[#6C5147] text-white py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src="/bg.png" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#6C5147]/90" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full justify-start sm:items-start  lg:-ml-16 ">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4  ">
            Join Our Upcoming Events
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Etiam diam sed aenean id
            cursus fames eget aliquam sit. Sapien bibendum.
          </p>
          <Link href={`/register`}>
            <Button className="bg-[#EBA747] text-[#3D220F] font-semibold px-6 py-3 rounded-full hover:bg-[#3D220F] hover:text-white transition duration-300 h-12 w-42">
              Register Now
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-6 flex-wrap w-full max-w-md mx-auto md:ml-20 md:mb-10 lg:ml-48  ">
          <Image
            src={"/eventimage.png"}
            alt={images}
            height={600}
            width={600}
            className="rounded-full h-[150px] w-[400px]  md:-mr-60 mb-8 sm:-ml-96"
          ></Image>
        </div>
      </div>
    </section>
  );
}
