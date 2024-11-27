"use client"
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import HeroImg from "@/assets/hero.webp"
import HeroCarousel from '../../ui/HeroCarousel'
import BtnWhite from '../../ui/BtnWhite'
import { usePathname } from 'next/navigation'
import { fetchFaculty } from '@/app/lib/actions'

const SingleFacultyHero = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const id = pathname?.split("/")[3]
  const locale = pathname.split("/")[1]

const [title, setTitle] = useState<string>("")  
const [image, setImage] = useState<string>("")
  useEffect(() => {
    const getData = async () => {
      const item = await fetchFaculty(id);
      console.log(item);
      
      setImage(item?.main_image?.file)
      setTitle(locale === "uz"
        ? item?.name_uz
        : locale === "ru"
        ? item?.name_ru
        : item?.name_en)
    };
    getData();
  }, [id, locale]);
  const FixedItem = () => {
    return <div className='md:absolute left-0 bottom-0  w-full gap-4 md:gap-14 h-full p-4 md:p-14 flex flex-col items-center md:items-start justify-end'>
      <h2 className='font-[500] text-[24px] md:text-[32px] text-center max-w-[300px] text-black md:text-white'>{title}</h2>
      <BtnWhite value={t("hero.btn")} />
    </div>
  }
  return (
    <section>
      <HeroCarousel data={image} FixedItem={FixedItem} />
    </section>
  )
}

export default SingleFacultyHero
