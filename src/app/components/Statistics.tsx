"use client"
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react'
import Statistics1 from "@/assets/statistics1.webp"
import Statistics2 from "@/assets/statistics2.webp"
import Statistics3 from "@/assets/statistics3.webp"
import Count from './CountUp';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const Statistics = () => {
    const t = useTranslations()
    const data = [
        {title: t("statistics.item1"), count: 11000, icon: Statistics1, start: 0, plus: true, increase: 50, price: ""}, 
        {title: "", count: 0, icon: "", start: 0, plus: false, increase: 0, price: ""},
        {title: t("statistics.item2"), count: 400, icon: Statistics2, start: 0, plus: true, increase: 3, price: ""}, 
        {title: "", count: 0, icon: "", start: 0, plus: false, increase: 0, price: ""},
        {title: t("statistics.item4"), count: 1, icon: Statistics3, start: 1, plus: false, increase: 0, price: t("statistics.item3")},
    ]
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true, 
            easing: 'linear',
        });
    }, []);
  return (
    <section className='w-full flex justify-center pt-[60px] lg:pt-[150px] pb-10 lg:pb-[100px] px-3' data-aos="fade-up">
        <div className='max-w-[1166px] w-full flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-8'>
            {
                data?.map((item,index)=> {
                    return <div key={index} className={`${item?.title ? "gap-2 sm:gap-7 flex flex-col items-center" : "hidden lg:block w-[3px] h-full bg-[#404B7C]"}`}>
                        <div className='flex gap-2'>
                            {item?.title && <Count end={item?.count} start={item?.start} plus={item?.plus} increase={item?.increase}/>}
                            {item?.price && <span className='text_main text-[28px] lg:text-[40px] font-[600]'>{item?.price}</span>}
                        </div>
                        <div className='text_main text-[28px] lg:text-[40px] lg:min-w-[250px] font-[600] justify-center flex gap-3 items-center'>
                            <span>{item?.title}</span>
                            {item?.title && <Image src={item?.icon} alt={item?.title} className={`w-[28px] lg:w-[40px] h-[28px] lg:h-[40px] object-contain`} width={40} height={40}/>}
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Statistics
