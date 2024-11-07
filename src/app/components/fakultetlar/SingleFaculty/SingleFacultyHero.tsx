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
    return <div className='absolute left-0 bottom-0  w-full gap-14 h-full p-14 flex flex-col items-start justify-end'>
              <h2 className='font-[500] text-[40px] max-w-[300px] text-white'>{t("information.title")}</h2>
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
