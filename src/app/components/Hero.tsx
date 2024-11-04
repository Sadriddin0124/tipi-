import React from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroImgBlur from "@/assets/hero1.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    const t = useTranslations()
    const btn = t("hero.btn")
  return (
    <header className='max-h-[577px] h-[100%] w-full relative rounded-b-[40px] overflow-hidden'>
      <Image src={HeroImg} alt='Hero Image' className='lg:absolute w-[100%] relative right-0 h-[300px] sm:h-auto lg:h-[577px] top-0 sm:left-0 object-cover' width={1400} height={600}/>
      <div className='lg:h-[577px] mt-10 lg:mt-0 w-full lg:w-[50%] relative z-20 flex justify-center items-center'>
        <Image src={HeroImgBlur} alt='Hero Image Blur' className='absolute hidden lg:block z-[-1] w-auto h-[577px] top-0 left-0' width={500} height={400}/>
        <div className='flex flex-col gap-5 items-center'>
            <button className='btn_gradient text-[18px] sm:text-[24px] rounded-[10px] gap-3 text-white'><span className='flex items-center px-4 py-3 gap-3'>{btn}<FaArrowRightLong /></span></button>
        </div>
      </div>
    </header>
  )
}

export default Hero
