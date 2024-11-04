import React from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroImgBlur from "@/assets/hero1.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    const t = useTranslations()
    const title = t("hero.title")
    const btn = t("hero.btn")
  return (
    <header className='max-h-[577px] h-[100%] w-full relative rounded-b-[40px] overflow-hidden'>
      <Image src={HeroImg} alt='Hero Image' className='absolute w-[100%] h-[577px] top-0 left-0 object-cover' width={1400} height={600}/>
      <div className='h-[577px] w-[50%] relative z-20 flex justify-center items-center'>
        <Image src={HeroImgBlur} alt='Hero Image Blur' className='absolute z-[-1] w-auto h-[577px] top-0 left-0' width={500} height={400}/>
        <div className='flex flex-col gap-5 items-center'>
            <h1 className='text-[40px] max-w-[320px] text-center'>{title}</h1>
            <button className='p-6 btn_gradient flex items-center text-[24px] rounded-[10px] gap-3 text-white'>{btn}<FaArrowRightLong size={30}/></button>
        </div>
      </div>
    </header>
  )
}

export default Hero
