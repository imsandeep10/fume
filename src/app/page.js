import React from 'react'
import Landing from './landing/component/Landing'
import LandingAbout from './landing/component/LandingAbout'
import WhatWeOffer from './landing/component/WhatWeOffer'
import WhyChooseUs from './landing/component/WhyChooseUs'
import Testimonial from './landing/component/Testimonial'
import Gallery from './landing/component/Gallery'
import JoinUs from './landing/component/JoinUs'
const page = () => {
  return (
<>
<Landing/>
<LandingAbout/>
<WhatWeOffer/>
<WhyChooseUs/>
<Testimonial/>
<Gallery/>
<JoinUs/>
</>
  )
}
export default page