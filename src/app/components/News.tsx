"use client"
import React from 'react'
import News1 from "@/assets/news1.webp"
import News2 from "@/assets/news2.webp"
import News3 from "@/assets/news3.webp"
import News4 from "@/assets/news4.webp"
import News5 from "@/assets/news5.webp"
import News6 from "@/assets/news6.webp"
import { useTranslations } from 'next-intl';
import Carousel from './Carousel';
const News = () => {
    const t = useTranslations()
    const data = [
    {
        img: News1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: News2, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: News3, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: News4, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: News5, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: News6, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    ];
  return (
    <section className='py-[100px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h2 className='pl-[20px] text-[40px] font-[600] mb-[20px]'>{t('news.title')}</h2>
        <Carousel data={data}/>
      </div>
    </section>
  )
}

export default News
