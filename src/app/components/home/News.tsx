"use client"
import React, { useEffect } from 'react'
import News1 from "@/assets/news1.webp"
import News2 from "@/assets/news2.webp"
import News3 from "@/assets/news3.webp"
import News4 from "@/assets/news4.webp"
import News5 from "@/assets/news5.webp"
import News8 from "@/assets/news8.webp"
import News9 from "@/assets/news9.webp"
import News10 from "@/assets/news10.webp"
import { useTranslations } from 'next-intl';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Carousel from '../Carousel'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import Video1 from "../../../video/video1.mp4"
const News = () => {
    const t = useTranslations()
    // const data = [
    // {
    //     img: News1, 
    //     date: t("news.date"),
    //     desc: t("news.desc")
    // },
    // {
    //     img: News2, 
    //     date: t("news.date"),
    //     desc: t("news.desc")
    // },
    // {
    //     img: News3, 
    //     date: t("news.date"),
    //     desc: t("news.desc")
    // },
    // {
    //     img: News4, 
    //     date: t("news.date"),
    //     desc: t("news.desc")
    // },
    // {
    //     img: News5, 
    //     date: t("news.date"),
    //     desc: t("news.desc")
    // },
    // {
    //     img: News6, 
    //     date: t("news.date"),
    //     desc: t("news.desc")
    // },
    // ];
    const data = [
      {
        img: News1,
        link: "https://www.youtube.com/embed/6Wyx_WEi_Vs?si=NZ8CuMIhr5s2jg-U", 
        date: t("news.date1"),
        desc: t("news.desc1"),
    },
    {
        img: News2, 
        link: "https://www.youtube.com/embed/qGRnSOUn1EI?si=rIQvmJfNHDe_QjB8",
        date: t("news.date2"),
        desc: t("news.desc2")
    },
    {
        img: News3, 
        link: "https://www.youtube.com/embed/R8_3wRErfng?si=E9W1juWJjnUAAwqq",
        date: t("news.date3"),
        desc: t("news.desc3")
    },
    {
        img: News4, 
        link: "https://www.youtube.com/embed/Sc3Uz7834V4?si=FphIo8_n2_QyMYA6",
        date: t("news.date4"),
        desc: t("news.desc4")
    },
    {
        img: News5, 
        link: "https://www.youtube.com/embed/OKgWgCYlRnY?si=Io-WRYAGUlteQnKQ",
        date: t("news.date5"),
        desc: t("news.desc5")
    },
      {
          img: News8, 
          link: "",
          date: t("news.date8"),
          desc: t("news.desc8")
        },
        {
          img: News9, 
          link: "",
          date: t("news.date9"),
          desc: t("news.desc9")
        },
        {
          img: News10, 
          link: "",
          date: t("news.date10"),
          desc: t("news.desc10")
      },
      {
          img: News8, 
          link: "",
          date: t("news.date8"),
          desc: t("news.desc8")
        },
        {
          img: News9, 
          link: "",
          date: t("news.date9"),
          desc: t("news.desc9")
        },
        {
          img: News10, 
          link: "",
          date: t("news.date10"),
          desc: t("news.desc10")
      },
      ];
    useEffect(() => {
      Aos.init({
          duration: 1000,
          once: true, 
          easing: 'linear',
      });
  }, []);
  const locale = usePathname()?.split("/")[1]
  return (
    <section className='px-2 pb-6 pt-10 md:pt-[100px] md:pb-[80px]' data-aos="fade-up">
      <div className='max-w-[1320px] mx-auto'>
        <h2 className='pl-[20px] text-[32px] md:text-[40px] font-[600] mb-[20px]'>{t('news.title')}</h2>
        <Carousel data={data}/>
        <div className='w-full flex justify-end px-2'>
          <Link href={`${locale}/yangiliklar/news`} className='text-[20px] pb-0 text-[#404B7C] relative group flex justify-center'>
            {t("news.more")}
            <span className='group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]'></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default News
