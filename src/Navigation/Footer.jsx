"use client";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
export default function Footer  ()  {
  return (
    <footer className="bg-[#AA9D86] text-[#3D220F]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={"/fumelogo.png"}
              alt="logo"
              width={140}
              height={60}
              className="w-16 h-auto object-contain"
            />
            <h1 className="text-lg font-semibold">Fume Training School</h1>
          </div>

          <p className="mt-4 text-md max-w-xs">
            Transforming coffee enthusiasts into professional baristas through
            hands-on training and expert guidance.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="https://www.facebook.com/fumecoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaFacebook size={28} color="#FFA828" />
            </a>
            <a
              href="https://www.instagram.com/fumecoffeetrainingschool23/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={28} color="#FFA828" />
            </a>
            <a
              href="https://www.tiktok.com/search?q=fume%20coffee&t=1758190667369"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaTiktok size={28} color="#FFA828" />
            </a>
          </div>
        </div>
        <div className="md:ml-16 lg:ml-16">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li className="hover:text-[#FFA828]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[#FFA828]">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-[#FFA828]">
              <Link href="/enroll">Enroll Now</Link>
            </li>
            <li className="hover:text-[#FFA828]">
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div className="md:ml-6">
          <h3 className="font-bold text-lg mb-4 ">Popular Courses</h3>
          <ul className="space-y-2 text-md">
            <li className="hover:text-[#FFA828]">
              <Link href="/">Barista Training</Link>
            </li>
            <li className="hover:text-[#FFA828]">
              <Link href="/">Sushi Training</Link>
            </li>
            <li className="hover:text-[#FFA828]">
              <Link href="/">Bakery Training</Link>
            </li>
            <li className="hover:text-[#FFA828]">
              <Link href="/">Bartending Training</Link>
            </li>
          </ul>
        </div>
        <div className=" sm:ml-14 ">
          <h3 className="font-bold text-lg mb-4  ">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 hover:text-[#FFA828]">
              <IoLocationSharp size={20} color="#FFA828" />
              <a
                href="https://www.google.com/maps?q=Butwal-06,Amarpath,Rupandehi"
                className="hover:underline "
              >
                Amarpath, Butwal
              </a>
            </li>
            <li className="flex items-start gap-2 hover:text-[#FFA828] w-64">
              <FaPhoneAlt size={20} color="#FFA828" className="" />
              <a href="tel:+9779857077828" className="hover:underline flex ">
                9857077828, 9762345120
              </a>
            </li>
            <li className="flex items-start gap-2 hover:text-[#FFA828] absolute">
              <IoMail size={20} color="#FFA828" />
              <a
                href="mailto:info@fumecoffeetraining.com"
                className="hover:underline"
              >
                info@fumecoffeetraining.com
              </a>
            </li>
          </ul>
          <Link href={"/contact"}>
            <Button className="mt-10 text-sm text-white px-4 py-2 rounded-full transition duration-200 bg-[#32241B] w-52 shadow-md hover:bg-[#EBA747]  hover:text-[#32241B]">
              Get Directions
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full border-t border-[#EBA74770]">
        <div className="text-center py-4 text-md text-[#3D220F]">
          ©{new Date().getFullYear()} Coffee Academy. All rights reserved. |
          Privacy Policy | Terms of Service
        </div>
        <p className="text-center text-md text-[#3D220F] pb-3">
          Designed and Developed by{" "}
          <a
            href="https://www.synthbit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFA828] hover:underline"
          >
            Synthbit Technologies
          </a>
        </p>
      </div>
    </footer>
  );
};

