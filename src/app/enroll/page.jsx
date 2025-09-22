import Hero from '@/Navigation/Hero'
import React from 'react'
import Enroll from './component/Enroll';
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
const page = () => {
 
  return (
<div>
<Hero images={heroImages} breadcrumbs={breadcrumbs} />
<Enroll/>
</div>
  )
}

export default page