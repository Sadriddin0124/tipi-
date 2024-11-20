"use client"
import React from 'react'
import News1 from "@/assets/news1.webp"
import News2 from "@/assets/news2.webp"
import News3 from "@/assets/news3.webp"
import News4 from "@/assets/news4.webp"
import News5 from "@/assets/news5.webp"
import News8 from "@/assets/news8.webp"
import News9 from "@/assets/news9.webp"
import News10 from "@/assets/news10.webp"
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Event1 from "@/assets/event1.webp"
import Event2 from "@/assets/event2.webp"
import Event3 from "@/assets/event3.webp"
import Event4 from "@/assets/event4.webp"
import Event5 from "@/assets/event5.webp"
import Event6 from "@/assets/event6.webp"
import { useParams } from 'next/navigation'
const SingleNews = () => {
    const t = useTranslations()
    const news = [
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
    const params = useParams()
    const slug = params?.slug
    
    const events = [
        {
            img: Event1, 
            link: "",
            date: t("news.date"),
            desc: t("news.desc")
        },
        {
            img: Event2, 
            link: "",
            date: t("news.date"),
            desc: t("news.desc")
        },
        {
            img: Event3, 
            link: "",
            date: t("news.date"),
            desc: t("news.desc")
        },
        {
            img: Event4, 
            link: "",
            date: t("news.date"),
            desc: t("news.desc")
        },
        {
            img: Event5, 
            link: "",
            date: t("news.date"),
            desc: t("news.desc")
        },
        {
            img: Event6, 
            link: "",
            date: t("news.date"),
            desc: t("news.desc")
        },
    ];
    const empty = [{img: News1, link: "", date: "", desc: ""}]
    const data = slug === "news" ? news : slug === "events" ? events : empty   
  return (
    <section className='px-3 overflow-hidden pb-6 pt-10 md:pt-[100px] md:pb-[80px]'>
      <div className='max-w-[1320px] mx-auto flex flex-col gap-6 items-center'>
        <h2 className='pl-[20px] text-[32px] md:text-[40px] font-[600] mb-[20px]'>{slug === "news" ? t('news.title') : slug === "events" ? t('events.title') : ""}</h2>
        <div className='grid grid-cols-4 gap-4'>
            {data?.map((item, index) => (
                <div className='' key={index}>
                    <div key={index} className='rounded-[10px] overflow-hidden shadow-lg flex flex-col'>
                      <div className='bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center'>
                      { item?.link  ? (
                          <iframe
                            height={180}
                            src={item.link}
                            className='w-full'
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        ) : <Image src={item?.img} alt={`Slide ${index + 1}`} className='w-full object-cover h-[180px]' width={500} height={400}/>}
                        </div>
                        <div className='pt-[26px] px-[18px] pb-[40px] text_main flex flex-col gap-4 ease-linear duration-200 hover:text-white hover:bg-[#404B7C]'>
                            <span className='text-[20px] font-[600]'>{item?.date}</span>
                            <p className='text-[17px] min-h-[140px] font-[600] line-clamp-5 text-center leading-5'>{item?.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SingleNews
