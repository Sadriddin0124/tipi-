"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import Carousel from '../Carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fetchNews } from '@/app/lib/fetchers';
import { INews } from '@/app/lib/types';
import { NewsType } from '@/app/types/all.types';
const Events = () => {
  const t = useTranslations()


  const [data, setData] = useState<NewsType[]>([]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'linear',
    });


    fetchNews().then((data) => {
      setData(data);
      console.log(data);
    }).catch(() => {
      alert("Nimadur noto'g'ri ketdi.");
    });



  }, []);
  const locale = usePathname()?.split("/")[1]
  return (
    <section className='px-2 py-12 md:py-[100px]' data-aos="fade-up">
      <div className='max-w-[1320px] mx-auto'>
        <h2 className='pl-[20px] text-[32px] md:text-[40px] font-[600] mb-[20px]'>{t('events.title')}</h2>
        <Carousel data={data} />
        <div className='w-full flex justify-end px-2'>
          <Link href={`${locale}/yangiliklar/events`} className='text-[20px] pb-0 text-[#404B7C] relative group flex justify-center'>
            {t("events.more")}
            <span className='group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]'></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Events
