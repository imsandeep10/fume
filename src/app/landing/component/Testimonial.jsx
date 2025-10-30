"use client";
import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card.jsx";
import { motion, AnimatePresence } from "framer-motion";
const testimonials = [
  {
    id: 1,
    name: " Sandesh Acharya",
    country: "Nepal",
    text: "I was unsure at first, but now I'm confidently working at a specialty coffee shop—thanks to this amazing program!",
    avatar: "/sandesh.jpeg",
  },
  {
    id: 2,
    name: "Prateek Aryal",
    country: "India",
    text: "The hands-on training gave me the confidence I needed. It's the best learning experience I've ever had!",
    avatar: "/galleryimage5.jpeg",
  },
  {
    id: 3,
    name: "Michael Chen",
    country: "Nepal",
    text: "I started my own bakery after completing the course. Couldn't have done it without Fume Coffee!",
    avatar: "/galleryimage2.jpeg",
  },
];
export default function TestimonialSection() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const t = testimonials[index];
  return (
    <section className="bg-[#FDF6F1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-y-12 md:gap-y-0 md:gap-x-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#3E2723] mb-4">
            What Our 
            <br/>
            Students Say
          </h2>
          <p className="text-base sm:text-lg text-[#6B4F4F] max-w-xl mx-auto md:mx-0">
            Our students share their journeys of learning, growth, and hands-on
            experience across our barista, bakery, bartending, and sushi-making programs.
          </p>
        </div>
        <div className="flex-1 w-full max-w-xl">
          <Card className="border-none bg-transparent w-full">
            <CardContent className="p-6">
              <div className="relative min-h-[280px] sm:min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full"
                  >
                    
                    <div className="bg-white rounded-tr-full rounded-l-full  px-6 py-4 shadow-sm text-center mb-6">
                      <p className="text-base sm:text-lg md:text-xl italic text-[#5D4037]">
                        “{t.text}”
                      </p>
                    </div>

                    
                    <div className="flex flex-col items-end justify-end space-y-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover h-16 w-16"
                      />

                      <div className="flex text-[#FFA726]">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill="currentColor"
                              stroke="none"
                            />
                          ))}
                      </div>

                      <p className="text-base sm:text-lg font-semibold text-[#3E2723]">
                        {t.name}, {t.country}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
