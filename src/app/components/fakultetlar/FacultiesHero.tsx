"use client"
import { useTranslations } from 'next-intl'
import React from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroCarousel from '../ui/HeroCarousel'

const FacultiesHero = () => {
  const t = useTranslations()
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
  const FixedItem = () => {
    return <div className='md:absolute left-0 bottom-0  w-full h-full p-3 md:p-14 hidden md:flex items-end md:items-center justify-center md:justify-start'>
              <h2 className='font-[500] text-[24px] md:text-[32px] text-black md:text-white'>{t("fakultetlarHero.title")}</h2>
          </div>
  }
  return (
    <section>
      <HeroCarousel data={data} FixedItem={FixedItem}/>
    </section>
  )
}

export default FacultiesHero
