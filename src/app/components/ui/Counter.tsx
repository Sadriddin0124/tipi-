"use client"
import React, { useEffect } from 'react'
import { CounterType } from '@/app/types/all.types'
import Image from 'next/image'
import Statistics1 from "@/assets/statistics1.webp"
import Statistics2 from "@/assets/statistics2.webp"
import Statistics3 from "@/assets/statistics3.webp"
import Aos from 'aos';
// import 'aos/dist/aos.css';  
 
import CountUp from 'react-countup';

const Counter = ({data}: {data: CounterType[]}) => {
    const icons = [Statistics1, "", Statistics2, "", Statistics3]
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true, 
            easing: 'linear',
        });
    }, []);
  return (
    <section className='w-full flex justify-center pt-2 md:pt-[60px] lg:pt-[122px] pb-10 lg:pb-[100px] px-3' data-aos="fade-up">
        <div className='max-w-[1000px] w-full flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-8'>
            {
                data?.map((item,index)=> {
                    return <div key={index} className={`${item?.title ? "gap-2 sm:gap-7 flex flex-col items-center" : "hidden lg:block w-[3px] h-full bg-[#404B7C]"}`}>
                        <div className='flex gap-2 text_main whitespace-nowrap text-[28px] lg:text-[28px] font-[600]'>
                            {item?.count > 1 && <span><CountUp end={item?.count} duration={5}/>+</span>}
                            {item?.price && <span className='text_main text-[28px] lg:text-[28px] font-[600] whitespace-nowrap'>1 {item?.price}</span>}
                        </div>
                        <div className='text_main text-[28px] lg:text-[28px] lg:min-w-[250px] font-[600] justify-center flex gap-3 items-center'>
                            <span>{item?.title}</span>
                            {item?.title && <Image src={icons[index]} alt={item?.title} className={`w-[24px] lg:w-[28px] h-[24px] lg:h-[28px] object-contain`} width={40} height={40}/>}
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Counter
