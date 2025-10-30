import React from 'react';
import Story from './component/Story';
import Mission from './component/Mission';
import Hero from '../../Navigation/Hero.jsx';
import Teams from './component/Teams';
export const metadata = {
  title: "About Us | Your Coffee School",
  description: "Learn about our coffee training school, our mission, story, and dedicated team. Join us to become a professional barista in Nepal.",
  keywords: "About Coffee School, Coffee Training, Barista School Nepal, Coffee Education, Barista Team, Coffee Courses Nepal",
  authors: [{ name: "Your Coffee School", url: "https://fumecoffee.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
      <Story />
      <Mission />
      <Teams />
    </div>
  );
};

export default Page;
