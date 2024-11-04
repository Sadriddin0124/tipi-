"use client"
import React from 'react'
import Event1 from "@/assets/event1.webp"
import Event2 from "@/assets/event2.webp"
import Event3 from "@/assets/event3.webp"
import Event4 from "@/assets/event4.webp"
import Event5 from "@/assets/event5.webp"
import Event6 from "@/assets/event6.webp"
import { useTranslations } from 'next-intl';
import Carousel from './Carousel';
const Events = () => {
    const t = useTranslations()
    const data = [
    {
        img: Event1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Event2, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Event3, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Event4, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Event5, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Event6, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    ];
  return (
    <section className='py-[100px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h2 className='pl-[20px] text-[32px] md:text-[40px] font-[600] mb-[20px]'>{t('events.title')}</h2>
        <Carousel data={data}/>
      </div>
    </section>
  )
}

export default Events
