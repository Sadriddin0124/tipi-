"use client"
import { useTranslations } from 'next-intl'
import React from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroCarousel from '../ui/HeroCarousel'

const FacultiesHero = () => {
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
  const FixedItem = () => {
    return <div className='absolute left-0 bottom-0  w-full h-full p-14 flex items-center justify-start'>
              <h2 className='font-[500] text-[40px] text-white'>{t("fakultetlarHero.title")}</h2>
          </div>
  }
  return (
    <section>
      <HeroCarousel data={data} FixedItem={FixedItem}/>
    </section>
  )
}

export default FacultiesHero
