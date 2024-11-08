import React from 'react'
import News1 from "@/assets/news1.webp"
import News2 from "@/assets/news2.webp"
import News3 from "@/assets/news3.webp"
import News4 from "@/assets/news4.webp"
import News5 from "@/assets/news5.webp"
import News6 from "@/assets/news6.webp"
import { useTranslations } from 'next-intl';
import Image from 'next/image'
const ScientificCards = () => {
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
        {
            img: News6, 
            date: t("news.date"),
            desc: t("news.desc")
        },
    ];
  return (
    <section className='flex justify-center w-full py-20 px-3'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[400px] sm:max-w-[700px] lg:max-w-[1320px] w-full gap-[20px]'>
            {data.map((item, index) => (
                <div key={index} className='rounded-[10px] overflow-hidden shadow-lg flex flex-col'>
                    <div className='bg-[#D9D9D9] min-h-[200px] h-full flex justify-center items-center'>
                        <Image src={item?.img} alt={`Exchange item ${index + 1}`} className='w-full object-cover h-[200px]' width={500} height={400}/>
                    </div>
                    <div className='pt-[26px] px-[18px] pb-[40px] text_main flex flex-col gap-4 ease-linear duration-200 hover:text-white hover:bg-[#404B7C]'>
                        <span className='text-[20px] font-[600]'>{item?.date}</span>
                        <p className='text-[17px] font-[600] text-center leading-5'>{item?.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ScientificCards
