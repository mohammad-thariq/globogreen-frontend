/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'flowbite-react';

function Banner() {
  return (
    <div className='container-x mt-[17px] md:mt-5 mb-[10px] md:mb-5'>
      <div className='h-[80px] md:h-[250px] w-full rounded-lg'>
        <Carousel pauseOnHover={true} indicators={false}>
          <img src="/assets/images/1ea3c8eae54b3008.webp" alt="banner1" />
          <img src="/assets/images/36d7954375145984.webp" alt="banner2" />
          <img src="/assets/images/0796093dfab7d447.webp" alt="banner3" />
          <img src="/assets/images/1ea3c8eae54b3008.webp" alt="banner1" />
        </Carousel>
      </div>
    </div>
  )
}

export default Banner
