import Hero from '../../Navigation/Hero'
import React from 'react'
import Enroll from './component/Enroll';

export const metadata = {
  title: "Enroll | Your Coffee School",
  description: "Join our coffee training courses today! Enroll now to learn professional barista skills, latte art, espresso making, and more.",
  keywords: "Coffee Training, Barista Courses, Enroll Coffee School, Coffee Education Nepal, Barista Training Nepal",
  authors: [{ name: "fume coffee", url: "https://fumecoffee.com" }],
  icons: { icon: "/favicon.ico" },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Enroll", href: "/enroll" },
];

const heroImages = [
  { src: "/hero1.png", alt: "Coffee 1" },
  { src: "/hero2.png", alt: "Coffee 2" },
  { src: "/hero3.png", alt: "Coffee 3" },
  { src: "/hero4.png", alt: "Coffee 4" },
];

const Page = () => {
  return (
    <div>
      <Hero images={heroImages} breadcrumbs={breadcrumbs} />
      <Enroll />
    </div>
  );
};

export default Page;
