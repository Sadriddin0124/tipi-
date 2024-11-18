"use client"
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import HeroImg1 from "@/assets/hero.webp"
// import HeroImg2 from "@/assets/faculty_hero2.webp"
// import HeroImg3 from "@/assets/faculty_hero3.webp"
// import HeroImg4 from "@/assets/faculty_hero4.webp"
import HeroCarousel from '../../ui/HeroCarousel'
import BtnWhite from '../../ui/BtnWhite'
import { usePathname } from 'next/navigation'

const SingleFacultyHero = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const id = Number(pathname?.split("/")[3])
  
  const data = [
    {
      img: HeroImg1
    },
    {
      img: HeroImg1
    },
    {
      img: HeroImg1
    },
    {
      img: HeroImg1
    },
    {
      img: HeroImg1
    },
    {
      img: HeroImg1
    },
  ]
  const faculties = [
    {
        id: 1,
        title: "Axborot texnologiyalari",
    },
    {
        id: 2,
        title: "Pedagogika",
    },
    {
        id: 3,
        title: "Iqtisodiyot",
    },
    {
        id: 4,
        title: "Tillar va maktabgacha ta'lim",
    },
    {
        id: 5,
        title: "Iltimoiy fanlar",
    },
]
const title = faculties?.find(item=> item?.id === id)
  const FixedItem = () => {
    return <div className='md:absolute left-0 bottom-0  w-full gap-4 md:gap-14 h-full p-4 md:p-14 flex flex-col items-center md:items-start justify-end'>
              <h2 className='font-[500] text-[24px] md:text-[40px] max-w-[300px] text-black md:text-white'>{title?.title}</h2>
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
