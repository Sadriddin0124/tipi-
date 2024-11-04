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
          easing: 'ease-in-out', // Animation easing
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
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false 
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
          <header key={index} className='h-[300px] md:h-[577px] w-full relative rounded-b-[40px] overflow-hidden' data-aos="zoom-up">
             <Image src={item?.img} alt='Hero Image' className='w-[100%] top-0 left-0 object-cover h-[300px] md:h-[577px]' width={1400} height={600}/>
             <div className='h-auto absolute z-[2] top-0 left-0 flex w-[50%] lg:w-auto items-center justify-center'>
               <Image src={HeroImgBlur} alt='Hero Image Blur' className='backdrop-blur-sm lg:w-auto h-[300px] md:h-[577px]' width={500} height={400}/>
               <div className='flex justify-center gap-5 w-[100%] h-full items-center absolute z-10 top-0 left-0'>
                   <button className='btn_gradient text-[14px] sm:text-[24px] rounded-[10px] gap-3 text-white'><span className='flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3'>{btn}<FaArrowRightLong /></span></button>
               </div>
             </div>
          </header>
      ))}
  </Slider>
  )
}

export default Hero
