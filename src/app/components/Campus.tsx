import Image from 'next/image'
import React from 'react'
import CampusImage from "@/assets/Campus.webp"
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
const Campus = () => {
  const t = useTranslations()
  return (
    <section className='w-[100%] min-h-[450px] h-full relative flex flex-col md:flex-row justify-center items-center'>
      <Image src={CampusImage} alt='Campus Image' className='md:absolute w-full h-full min-h-[250px] sm:min-h-[300px] rounded-2xl z-[-1] object-cover' width={500} height={400}/>
      <button className='px-3 py-2 md:px-[24px] md:py-[24px] bg-[#404B7C] mt-6 md:mt-0 flex text-white text-[20px] md:text-[24px] rounded-[10px] items-center gap-2 border-4 border-transparent hover:border-[#404B7C] ease-linear duration-200 hover:bg-transparent'>{t("campus")}<FaArrowRightLong /></button>
    </section>
  )
}

export default Campus
