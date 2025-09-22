import Image from "next/image";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff9ef] px-4 text-center">
      <div className="flex  ">
        <h1 className="md:text-[200px] text-9xl font-bold text-[#3D220F] mb-4 animate-fade-in">
          4
        </h1>
        <div className=" ">
          <Image
            src="/errorimage.png"
            alt="Coffee bean top"
            width={200}
            height={200}
            className=" h-32 w-32 md:h-52 md:w-52"
          />
        </div>

        <h1 className="md:text-[200px] text-9xl font-bold text-[#3D220F] mb-4 animate-fade-in">
          4
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col md:mb-20">
        {/* Subtext */}
        <p className="text-2xl text-[#20042C] max-w-md animate-fade-in">
          Oops Page Not Found!
        </p>
        <p className="text-xl text-[#7D5336]">
          Looks like this page got lost in the steam. Let’s get you back to
          brewing knowledge.
        </p>

        {/* Optional Button */}
        <a
          href="/"
          className="mt-6 inline-block border-1 text-[#3D220F] border-[#3D220F] rounded-full  px-6 py-2 shadow-md hover:bg-[#3D220F] hover:text-white transition duration-300"
        >
          Back to Homepage →
        </a>
      </div>
    </div>
  );
}
