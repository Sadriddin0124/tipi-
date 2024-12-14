"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import Aos from 'aos';
// import 'aos/dist/aos.css';  

import Carousel from '../Carousel'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fetchNews } from '@/app/lib/fetchers';
import { NewsType } from '@/app/types/all.types';
import UnCarousel from '../ui/UnCarousel';





const SportNews = () => {
  const t = useTranslations()

  const [data, setData] = useState<NewsType[]>([]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'linear',
    });


    fetchNews("SPORT").then((data) => {
      console.log(data);
      setData(data)
    }).catch(() => {
      // alert("Nimadur noto'g'ri ketdi.");
    });

  }, []);
  const pathname = usePathname()
  const locale = pathname?.split("/")[1]
  
  return (
    <section className='px-2 ' data-aos="fade-up">
      <div className='max-w-[1400px] mx-auto'>
        <div className='flex justify-between w-full items-center'>
          <h2 className='pl-[20px] text-[32px] md:text-[32px] font-[600] mb-[20px]'>{t('news.title2')}</h2>
          {pathname !== `/${locale}/yangiliklar/science` && <Link href={`/${locale}/yangiliklar/science`} className='text-[20px] pb-0 text-[#404B7C] relative group flex justify-center'>
            {t("news.more")}
            <span className='group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]'></span>
          </Link>}
        </div>
        {data?.length > 4 ? <Carousel data={data} category='SPORT'/>
        : <UnCarousel data={data} category='SPORT'/>}
        <div className='w-full flex justify-end px-2'>
        </div>
      </div>
    </section>
  )
}

export default SportNews
