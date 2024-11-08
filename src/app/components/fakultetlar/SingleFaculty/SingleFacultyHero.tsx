"use client"
import { useTranslations } from 'next-intl'
import React from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroCarousel from '../../ui/HeroCarousel'
import BtnGradient from '../../ui/BtnGradient'
import BtnWhite from '../../ui/BtnWhite'

const SingleFacultyHero = () => {
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
    return <div className='md:absolute left-0 bottom-0  w-full gap-4 md:gap-14 h-full p-4 md:p-14 flex flex-col items-center md:items-start justify-end'>
              <h2 className='font-[500] text-[24px] md:text-[40px] max-w-[300px] text-black md:text-white'>{t("information.title")}</h2>
              <BtnWhite value={t("hero.btn")}/>
          </div>
  }
  return (
    <section>
      <HeroCarousel data={data} FixedItem={FixedItem}/>
    </section>
  )
}

export default SingleFacultyHero
