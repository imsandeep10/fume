import Image from "next/image";
import { courses } from "../data/Courses";
import Link from "next/link";
import SecondHero from "../../../Navigation/SecondHero";
export default function CoursePage({ params }) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Course Not Found</h1>
        <Link href="/courses" className="text-blue-500 underline">
          Back to Courses
        </Link>
      </div>
    );
  }
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: course.title, href: null }, 
  ];
  const heroImage = {
    src: course.heroImage || "/LandingAbout.jpg",
    alt: course.title, 
  };
  return (
    <div className="bg-[#FFFCF9]">
      <SecondHero image={heroImage} breadcrumbs={breadcrumbs} />
      <div className="mx-auto p-8 w-full">
        {course.plans.map((plan, idx) => (
          <div
            key={idx}
            className="mb-8 p-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 w-full"
          >
            <h2 className="text-xl text-[#4A3F3F] font-semibold w-full md:hidden mb-4">
              {plan.name}
            </h2>
            <div className="w-full md:w-78 md:h-68 h-54 relative order-2 md:order-1">
              <Image
                src={plan.image}
                alt={plan.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-full md:w-[900px] flex flex-col order-3 md:order-2">
              <h2 className="text-2xl text-[#4A3F3F] font-semibold hidden md:block mb-2">
                {plan.name}
              </h2>
              <p className="text-[#4A3F3F]">{plan.description}</p>
              <p className="text-[#4A3F3F] mt-2">{plan.include}</p>
              <ul className="list-disc ml-6 mt-2 text-[#4A3F3F]">
                {plan.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-[#7D5336] mt-4">
                Course Price: {plan.price}
              </p>
              <Link
                href={`/enroll`}
                className="inline-block mt-4 px-4 py-2 bg-[#EBA747] text-[#3D220F] rounded-full w-32 hover:bg-[#3D220F] hover:text-white transition"
              >
                Enroll Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
