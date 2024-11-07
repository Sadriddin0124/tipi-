"use client"
import React from 'react'
import HeroImg from "@/assets/hero.webp"
import { useTranslations } from 'next-intl'
import { FaArrowRightLong } from "react-icons/fa6";
// import HeroCarousel from './ui/HeroCarousel'
const UniversalHero = () => {
  const t = useTranslations()
  const btn = t("hero.btn")
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
  
  return (
    <div className='pb-4'>
      {/* <HeroCarousel data={data} title={t("fakultetlarHero.title")}/> */}
      <div className='sm:hidden flex justify-center'>
        <button className='btn_gradient mt-6 text-[14px] md:text-[24px] rounded-[10px] gap-1 sm:gap-3 text-white'><span className='flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3'>{btn}<FaArrowRightLong /></span></button>
      </div>
    </div>
  )
}

export default UniversalHero
