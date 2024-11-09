"use client"
import React, { useEffect } from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroImgBlur from "@/assets/hero1.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
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
      <Slider {...settings}>
        {data.map((item, index) => (
            <header key={index} className='md:h-[400px] lg:h-[577px] w-full relative rounded-b-[20px] md:rounded-b-[40px] overflow-hidden' data-aos="zoom-up">
              <Image src={item?.img} alt='Hero Image' className='w-[100%] top-0 left-0 object-cover h-[300px] md:h-[577px]' width={1400} height={600}/>
            </header>
        ))}
    </Slider>
    <div className="absolute top-0 left-0 w-[50%] md:w-auto h-full bg-cover bg-center z-0">
        <Image src={HeroImgBlur} alt='Hero Image Blur' className='lg:w-auto h-[300px] md:h-[577px]' width={500} height={400}/>
        <div className='hidden sm:flex justify-center gap-5 w-[100%] h-full items-center absolute z-10 top-0 left-0'>
            <button className='btn_gradient text-[14px] md:text-[24px] rounded-[10px] gap-1 sm:gap-3 text-white'><span className='flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3'>{btn}<FaArrowRightLong /></span></button>
        </div>
      </div>
    <div className='sm:hidden flex justify-center'>
      <button className='btn_gradient mt-6 text-[14px] md:text-[24px] rounded-[10px] gap-1 sm:gap-3 text-white'><span className='flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3'>{btn}<FaArrowRightLong /></span></button>
    </div>
    </div>
  )
}

export default Hero
