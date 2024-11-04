import React from 'react'
import PedagogueImg1 from "@/assets/pedagogue1.webp"
import PedagogueImg2 from "@/assets/pedagogue2.webp"
import PedagogueImg3 from "@/assets/pedagogue3.webp"
import { useTranslations } from 'next-intl'
import { PedagogueType } from '../types/all.types'
import Image from 'next/image'
const Pedagogue = () => {
    const t = useTranslations()
    const data:PedagogueType[] = [
        {img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]
  return (
    <section className='flex justify-center items-center px-3'>
      <div className='max-w-[1130px] w-full flex flex-col gap-[50px] items-center justify-center'>
        <h2 className='text-[32px] md:text-[40px] font-[600]'>{t("pedagogue.title")}</h2>
        <div className='flex flex-col items-center sm:flex-row sm:grid sm:grid-cols-2 md:flex gap-3 lg:gap-[40px]'>
            {
                data?.map((item,index)=> {
                    return <div key={index} className='shadow-md rounded-[10px] overflow-hidden'>
                        <Image src={item?.img} alt={item?.name} width={350} height={300}/>
                        <div className='p-5 flex flex-col items-start gap-[10px]'>
                            <h5 className='text-[20px] font-[600] max-w-[160px]'>{item?.name}</h5>
                            <p className='text_main text-[18px] font-[600]'>{item?.desc}</p>
                            <button className='bg-white self-end hover:text-white px-6 py-3 rounded-lg border-2 hover:border-transparent border-[#404B7C] ease-linear duration-200 hover:bg-[#404B7C] bg-transparent text-[#404B7C]'>{t("pedagogue.btn")}</button>
                        </div>
                    </div>
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Pedagogue
