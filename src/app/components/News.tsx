"use client"
import React from 'react'
import Image1 from "@/assets/logo.webp"
import { useTranslations } from 'next-intl';
import Carousel from './Carousel';
const News = () => {
    const t = useTranslations()
    const data = [
    {
        img: Image1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Image1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Image1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Image1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Image1, 
        date: t("news.date"),
        desc: t("news.desc")
    },
    {
        img: Image1, 
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
