"use client"
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import HeroCarousel from '../../ui/HeroCarousel'
import { usePathname } from 'next/navigation'
import { fetchFaculty } from '@/app/lib/actions'
import { DataType } from '../../home/Hero'
import { fetchHero } from '@/app/lib/fetchers'

const SingleFacultyHero = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const id = pathname?.split("/")[3]
  const locale = pathname.split("/")[1]

const [title, setTitle] = useState<string>("")  
const [images, setImages] = useState<DataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const item = await fetchFaculty(id);
      console.log(item);
      
      setTitle(locale === "uz"
        ? item?.name_uz
        : locale === "ru"
        ? item?.name_ru
        : item?.name_en)
        const data = await fetchHero(id);
        setImages(data?.filter((item) => item?.page === id));
      };
    getData()
  }, [id, locale])

  const FixedItem = () => {
    return <div className='md:absolute left-0 bottom-0  w-full gap-4 md:gap-14 h-full min-w-[400px] p-4 md:p-14 flex flex-col items-center md:items-start justify-center'>
    {/* <div className="w-0 h-0 relative border-t-[400px] border-r-[400px] border-t-[#404B7C] border-r-transparent "> */}
      <h2 className='font-[500] text-[24px] bg-[#404b7cc7] w-full px-6 py-4  md:text-[32px] max-w-[300px] text-black md:text-white'>{title}</h2>
      {/* <BtnWhite value={t("hero.btn")} /> */}

    {/* </div> */}
    </div>
  }
  return (
    <section>
      <HeroCarousel data={images} FixedItem={FixedItem} />
    </section>
  )
}

export default SingleFacultyHero
