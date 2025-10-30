"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import { navLinks } from "./Data"; 

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full bg-[#97887E] backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container w-11/12 mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/fumelogo.png"
            alt="logo"
            width={200}
            height={200}
            className="object-cover w-full h-16"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-20 relative">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <div className="flex items-center text-white cursor-pointer hover:text-[#EBA747]">
                {link.href ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <span>{link.label}</span>
                )}
                {link.children && (
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-0 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {link.children && openDropdown === link.label && (
                <div 
                  className="absolute left-0  w-48   bg-white text-[#4A3F3F]  shadow-lg z-50"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/enroll"
            className="ml-4 px-6 py-2.5 text-[#3D220F] bg-[#EBA747] rounded-full hover:bg-[#3D220F] hover:text-white transition"
          >
            Enroll Now
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden text-[#3D220F]">
              <Menu size={32} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#97887E] text-white flex flex-col justify-between border-none"
          >
            <div className="flex flex-col space-y-8 mt-20 ml-10">
              {navLinks.map((link, index) => (
                <div 
                  key={index} 
                  className="flex flex-col"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => link.children && setOpenDropdown(null)}
                >
                  <div className="flex items-center cursor-pointer hover:text-[#EBA747]">
                    {link.href ? (
                      <SheetClose asChild>
                        <Link href={link.href}>{link.label}</Link>
                      </SheetClose>
                    ) : (
                      <span>{link.label}</span>
                    )}

                    {link.children && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {link.children && openDropdown === link.label && (
                    <div className="mt-2 flex flex-col space-y-2 bg-[#f9f7f3] text-[#4A3F3F] py-2 px-3 w-48 ">
                      {link.children.map((child, i) => (
                        <SheetClose asChild key={i}>
                          <Link
                            href={child.href}
                            className="hover:text-yellow-600"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mb-10 w-full flex justify-center items-center">
              <SheetClose asChild>
                <Link
                  href="/enroll"
                  className="block mb-20 text-center px-6 py-3 text-[#4A3F3F] bg-[#EBA747] rounded-full hover:bg-[#3D220F] hover:text-white  transition w-32"
                >
                  Enroll Now
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;