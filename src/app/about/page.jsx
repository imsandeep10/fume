import React from 'react'
import Story from './component/Story'
import Mission from './component/Mission'
import Hero from '@/Navigation/Hero'
import Teams from './component/Teams';
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
        <Story/>
        <Mission/>
        <Teams/>
    </div>
  )
}

export default Page