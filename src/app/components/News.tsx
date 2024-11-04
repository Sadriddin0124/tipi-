"use client"
import React, { useEffect } from 'react'
import News1 from "@/assets/news1.webp"
import News2 from "@/assets/news2.webp"
import News3 from "@/assets/news3.webp"
import News4 from "@/assets/news4.webp"
import News5 from "@/assets/news5.webp"
import News6 from "@/assets/news6.webp"
import { useTranslations } from 'next-intl';
import Carousel from './Carousel';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
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
    useEffect(() => {
      Aos.init({
          duration: 1000,
          once: true, 
          easing: 'ease-in-out',
      });
  }, []);
  return (
    <section className='px-2 pb-6 pt-10 md:pt-[100px] md:pb-[80px]' data-aos="fade-up">
      <div className='max-w-[1320px] mx-auto'>
        <h2 className='pl-[20px] text-[32px] md:text-[40px] font-[600] mb-[20px]'>{t('news.title')}</h2>
        <Carousel data={data}/>
      </div>
    </section>
  )
}

export default News
