import React from 'react'
import { Carousel } from 'flowbite-react'
export default function MyCarousel() {
  return (

<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-16" >
  <Carousel slideInterval={5000}>
    <img
      src="imgs/photo1.jpg"
      alt="..."
    />
    <img
      src="imgs/img2.jpg"
      alt="..."
    />
    <img
       src="imgs/photo2.jpg"
      alt="..."
    />
   
  </Carousel>
</div>

  )
}
