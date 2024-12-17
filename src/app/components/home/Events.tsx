"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import Carousel from '../Carousel';
import Aos from 'aos';
// import 'aos/dist/aos.css';  

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fetchNews } from '@/app/lib/fetchers';
import { INews } from '@/app/lib/types';
import { NewsType } from '@/app/types/all.types';
import UnCarousel from '../ui/UnCarousel';
const Events = () => {
  const t = useTranslations()


  const [data, setData] = useState<NewsType[]>([]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'linear',
    });


    fetchNews("EVENT").then((data) => {
      setData(data);
    }).catch(() => {
      // alert("Nimadur noto'g'ri ketdi.");
    });
  }, []);
  const pathname = usePathname()
  const locale = pathname?.split("/")[1]

  return (
    <section className='px-2 py-12 md:py-[100px]' data-aos="fade-up">
      <div className='max-w-[1400px] mx-auto'>
        <div className='w-full flex justify-between items-center px-2'>
        <h2 className='text-[24px] md:text-[32px] font-[600]'>{t('events.title')}</h2>
        {pathname !== `/${locale}/yangiliklar/events` && <Link href={`/${locale}/yangiliklar/events`} className='text-[20px] pb-0 text-[#404B7C] relative group flex justify-center'>
            {t("events.more")}
            <span className='group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]'></span>
          </Link>}
        </div>
        {data?.length > 4 ? <Carousel data={data} category='EVENT'/>
        : <UnCarousel data={data} category='EVENT'/>}
      </div>
    </section>
  )
}

export default Events
