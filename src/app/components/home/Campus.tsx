"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import CampusImage from "@/assets/Campus.webp"
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const Campus = () => {
  const t = useTranslations()
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true, 
        easing: 'linear',
    });
}, []);
  return (
    <section className='w-[100%] min-h-[250px] sm:min-h-[450px] relative flex flex-col md:flex-row justify-center items-center' data-aos="fade-up">
      <Image src={CampusImage} alt='Campus Image' className='absolute brightness-90 w-full min-h-[250px] sm:min-h-[300px] h-full rounded-2xl z-[-1] object-cover' width={1600} height={400}/>
      <button className='px-4 py-3 md:px-[24px] md:py-[24px] bg-[#404B7C] shadow-md hover:text-[#404B7C] mt-6 md:mt-0 flex text-white text-[20px] md:text-[24px] rounded-[10px] items-center gap-2 ease-linear duration-200 hover:bg-white'>{t("campus")}<FaArrowRightLong /></button>
    </section>
  )
}

export default Campus
