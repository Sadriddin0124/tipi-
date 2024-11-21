"use client"
import React, { useEffect } from 'react'
import HeroImg from "@/assets/hero.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
// import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ConstructorSlider = () => {
    const t = useTranslations()
    const btn = t("hero.btn")
    useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration
          once: true, // Only animate once
          easing: 'linear', // Animation easing
      });
  }, []);
  const data = [
    {
      img: HeroImg
    },
    {
      img: HeroImg
    },
    {
      img: HeroImg
    },
    {
      img: HeroImg
    },
    {
      img: HeroImg
    },
  ]
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false 
  };
  return (
    <div className='pb-4 relative'>
      <div className='rounded-b-[20px] md:rounded-b-[40px] overflow-hidden md:h-[400px] lg:h-[577px]'>
        <Slider {...settings}>
          {data.map((item, index) => (
              <header key={index} className=' w-full relative h-[577px]' data-aos="zoom-up">
                <Image src={item?.img} alt='Hero Image' className='w-[100%] top-0 left-0 object-cover h-[300px] md:h-[577px]' width={1400} height={600}/>
              </header>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ConstructorSlider
