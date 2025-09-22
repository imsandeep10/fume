"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SecondHero = ({ image, breadcrumbs }) => {
  return (
    <section className="w-full">
      {/* Hero Single Image */}
      <div className="relative w-full h-40 sm:h-56 md:h-72 lg:h-80">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Breadcrumb */}
      <nav className="bg-[#FFFCF9] px-6 py-3 pl-20 -ml-10 ">
        <ol className="flex items-center space-x-2 text-sm text-[#3D220F]">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={crumb.href}
                className="hover:text-gray-900 transition-colors"
              >
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">
                  <ChevronRight />
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default SecondHero;
