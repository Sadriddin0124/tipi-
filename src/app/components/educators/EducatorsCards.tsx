"use client"
import React from 'react'
import PedagogueImg1 from "@/assets/pedagogue1.webp"
import PedagogueImg2 from "@/assets/pedagogue2.webp"
import PedagogueImg3 from "@/assets/pedagogue3.webp"
import { useTranslations } from 'next-intl'
import { PedagogueType } from '@/app/types/all.types'
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";

const EducatorsCards = () => {
    const t = useTranslations()
    const data:PedagogueType[] = [
        {img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]
  return (
    <section className='flex justify-center flex-col items-center gap-10 w-full py-[100px]' data-aos="fade-up">
        <h2 className='text-[24px] md:text-[40px] font-[500]'>{t("pedagogue.title")}</h2>
        <div className='max-w-[1100px] w-full grid grid-cols-3 gap-[60px]'>
            {
                data?.map((item,index)=> {
                    return <div key={index} className='max-w-[350px] px-3 lg:px-5'>
                        <div className='shadow-md rounded-[10px] overflow-hidden'>
                            <Image src={item?.img} alt={item?.name} width={350} height={300} className='w-full'/>
                            <div className='p-5 flex flex-col items-start gap-[10px]'>
                                <h5 className='text-[20px] font-[600] lg:max-w-[160px]'>{item?.name}</h5>
                                <p className='text_main text-[18px] font-[600]'>{item?.desc}</p>
                                <button className='text-[24px] self-end'><FiDownload /></button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default EducatorsCards
