"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from '../Carousel'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fetchNews } from '@/app/lib/fetchers';
import { NewsType } from '@/app/types/all.types';
import UnCarousel from '../ui/UnCarousel';





const News = () => {
  const t = useTranslations()

  const [data, setData] = useState<NewsType[]>([]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'linear',
    });


    fetchNews("SCIENCE").then((data) => {
      setData(data);
      console.log(data);
    }).catch(() => {
      alert("Nimadur noto'g'ri ketdi.");
    });



  }, []);
  const pathname = usePathname()
  const locale = pathname?.split("/")[1]
  
  return (
    <section className='px-2 pb-6 pt-10 md:pt-[100px] md:pb-[80px]' data-aos="fade-up">
      <div className='max-w-[1400px] mx-auto'>
        <h2 className='pl-[20px] text-[32px] md:text-[40px] font-[600] mb-[20px]'>{t('news.title')}</h2>
        {data?.length > 6 ? <Carousel data={data} category='SCIENCE'/>
        : <UnCarousel data={data} category='SCIENCE'/>}
        <div className='w-full flex justify-end px-2'>
          {pathname !== `/${locale}/yangiliklar/news` && <Link href={`/${locale}/yangiliklar/news`} className='text-[20px] pb-0 text-[#404B7C] relative group flex justify-center'>
            {t("news.more")}
            <span className='group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]'></span>
          </Link>}
        </div>
      </div>
    </section>
  )
}

export default News
