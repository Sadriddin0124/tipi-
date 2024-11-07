import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import HeroImage from "@/assets/hero.webp"
import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImgBlue from "@/assets/hero-blue.webp"
import { FakultetlarType } from '@/app/types/all.types';


const HeroCarousel = ({data, FixedItem}: {data: FakultetlarType[]; FixedItem: ()=> React.JSX.Element}) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false 
  };
  useEffect(() => {
    Aos.init({
        duration: 1000, 
        once: true, 
        easing: 'linear',
    });
}, []);
  return (
    <div className='relative w-full h-auto overflow-hidden'>
      <Slider {...settings}>
          {data.map((item, index) => (
              <header key={index} className='h-[300px] md:h-[447px] w-full relative rounded-b-[20px] md:rounded-b-[40px] overflow-hidden'>
                <Image src={item?.img} alt='Hero Image' className='w-[100%] object-cover h-[300px] md:h-[447px]' width={1400} height={600}/>
              </header>
          ))}
      </Slider>
      <div className="absolute top-[-7px] left-0 w-auto h-full bg-cover bg-center z-0">
        <Image src={HeroImgBlue} alt='Hero Image' className='w-full h-full object-cover' width={1400} height={600}/>
        <FixedItem/>
        <div className=' absolute w-[50px] h-[40px] bottom-0 left-0 bg-white z-[-1]'></div>
      </div>
    </div>
  )
}

export default HeroCarousel
