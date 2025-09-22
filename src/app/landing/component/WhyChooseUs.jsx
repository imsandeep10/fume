import React from "react";
import {
  Coffee,
  Award,
  BadgeCheck,
  Clock,
  BookOpen,
  Store,
} from "lucide-react";

const features = [
  {
    icon: <Coffee className="w-8 h-8 text-white" />,
    title: "Hands-on Training",
    description:
      "Practice with professional espresso machines and brewing equipment in state-of-the-art facilities.",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Expert Instructors",
    description:
      "Learn from professionals with years of industry experience and competition wins.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-white" />,
    title: "Certification Programs",
    description:
      "Earn recognized certifications that boost your career prospects in the coffee industry.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Flexible Schedule",
    description:
      "Choose from morning, evening, or weekend classes to fit your busy lifestyle.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Comprehensive Curriculum",
    description:
      "Master everything from coffee origin and processing to latte art and customer service.",
  },
  {
    icon: <Store className="w-8 h-8 text-white" />,
    title: "Real Cafe Experience",
    description:
      "Practice in a simulated café environment with real customers and scenarios.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-[#FFFCF9]">
      <div className="w-10/12 mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold titlecolor mb-4">
          Why Choose Us
        </h2>
        <p className="textcolor mb-12 max-w-2xl mx-auto text-[#7D5336]">
          We provide comprehensive training that prepares you for real-world
          coffee service excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl shadow-md bg-[#F0EBE680] 
                         border border-transparent hover:border-[#5C3A21]/30
                         hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 
                         relative overflow-hidden min-h-[250px]"
            >
              {/* Coffee glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-[#5C3A21] via-[#D1A06F] to-[#5C3A21] rounded-xl blur-2xl transition duration-500"></div>

              {/* Icon wrapper (fixed size) */}
              <div className="flex items-center justify-center mb-4 mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#5C3A21] 
                                group-hover:scale-110 transition duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#5C3A21] mb-2 group-hover:text-[#3D220F] transition">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#7D5336] text-sm group-hover:text-[#5C3A21]  transition">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
