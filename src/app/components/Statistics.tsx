"use client"
import { useTranslations } from 'next-intl';
import React from 'react'
import Statistics1 from "@/assets/statistics1.webp"
import Statistics2 from "@/assets/statistics2.webp"
import Statistics3 from "@/assets/statistics3.webp"
import Count from './CountUp';
import Image from 'next/image';
const Statistics = () => {
    const t = useTranslations()
    const data = [
        {title: t("statistics.item1"), count: 11000, icon: Statistics1, start: 0, plus: true, increase: 50, price: ""}, 
        {title: "", count: 0, icon: "", start: 0, plus: false, increase: 0, price: ""},
        {title: t("statistics.item2"), count: 400, icon: Statistics2, start: 0, plus: true, increase: 3, price: ""}, 
        {title: "", count: 0, icon: "", start: 0, plus: false, increase: 0, price: ""},
        {title: t("statistics.item3"), count: 1000000000, icon: Statistics3, start: 0, plus: false, increase: 5000000, price: "milliardlik"},
    ]
  return (
    <section className='w-full flex justify-center pt-[150px] pb-[100px] px-3'>
        <div className='max-w-[1166px] w-full flex justify-between gap-5'>
            {
                data?.map((item,index)=> {
                    return <div key={index} className={`${item?.price ? "" : "gap-7"} ${item?.title ? " flex flex-col items-center" : "w-[3px] h-full bg-[#404B7C]"}`}>
                        {item?.title && <Count end={item?.count} start={item?.start} plus={item?.plus} increase={item?.increase}/>}
                        {item?.price && <span className='text_main text-[40px] font-[600]'>{item?.price}</span>}
                        <div className='text_main text-[40px] min-w-[250px] font-[600] justify-center flex gap-3 items-center'>
                            <span>{item?.title}</span>
                            {item?.title && <Image src={item?.icon} alt={item?.title} className={` w-[40px] h-[40px] object-contain`} width={40} height={40}/>}
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Statistics
