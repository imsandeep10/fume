import Image from "next/image";

export default function Mission() {
  return (
    <div className="w-full bg-[#FFFCF9] relative ">
      {/* Large Screen Background Image */}
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/coffee pouring.png"
          alt="Coffee being poured"
          fill
          className="pt-10"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-32 flex flex-col justify-between lg:h-full lg-mb-60 ">
        {/* Mission Section */}
        <div className="w-full flex justify-start ">
          <div className="bg-[#F0EBE6] backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-md ">
            <h2 className="text-2xl font-bold text-[#3D220F] mb-4">
              Our Mission
            </h2>
            <p className="text-[#3D220F] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dictum tempor purus quam
              facilisis diam donec. Rhoncus neque tortor praesent elit vitae
              sed. Ipsum et nunc scelerisque turpis quam volutpat. Massa rhoncus
              leo nec in nunc augue. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="w-[508px] h-screen lg:hidden my-8 relative overflow-hidden rounded-none mt-20 -ml-6  sm:w-screen ">
          <Image
            src="/coffeepour.png"
            alt="Coffee being poured"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full  flex justify-end">
          <div className="bg-[#F0EBE6] backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-md lg:self-end  mt-8 lg:mt-60 flex-end ">
            <h2 className="text-2xl font-bold text-[#3D220F] mb-4">
              Our Vision
            </h2>
            <p className="text-[#3D220F] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dictum tempor purus quam
              facilisis diam donec. Rhoncus neque tortor praesent elit vitae
              sed. Ipsum et nunc scelerisque turpis quam volutpat. Massa rhoncus
              leo nec in nunc augue. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
