import React from 'react'
import PedagogueImg from "@/assets/pedagogue.webp"
import { useTranslations } from 'next-intl'
import { PedagogueType } from '../types/all.types'
import Image from 'next/image'
const Pedagogue = () => {
    const t = useTranslations()
    const data:PedagogueType[] = [
        {img: PedagogueImg, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {img: PedagogueImg, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]
  return (
    <section className='flex justify-center items-center'>
      <div className='max-w-[1130px] w-full flex flex-col gap-[50px] items-center justify-center'>
        <h2 className='text-[40px] font-[600]'>{t("pedagogue.title")}</h2>
        <div className='flex gap-[40px]'>
            {
                data?.map((item,index)=> {
                    return <div key={index} className='shadow-md'>
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
