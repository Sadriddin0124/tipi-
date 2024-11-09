"use client"
import React, { useEffect, useState } from 'react'
import ITImage from "@/assets/it.webp"
import Image from 'next/image'
import Link from 'next/link'
import Blur from "@/assets/faculties_blur.webp"
import { usePathname } from 'next/navigation'
const IT = () => {
    const [lang, setLang] = useState<string>()
    const pathname = usePathname()
    useEffect(()=> {
    const lng = pathname.split("/")[1]
        setLang(lng)
    },[pathname])
    
    const data = [
        {
            id: 1,
            title: "Axborot texnologiyalari",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 2,
            title: "Ijtimoiy Fanlar",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 3,
            title: "Fakultetlar",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 4,
            title: "Fakultetlar",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 5,
            title: "Fakultetlar",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 6,
            title: "Fakultetlar",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 7,
            title: "Fakultetlar",
            img: ITImage,
            href: `/${lang}`
        },
        {
            id: 8,
            title: "Fakultetlar",
            img: ITImage,
            href: `/${lang}`
        },
    ]
  return (
    <section className='w-full flex justify-center px-3'data-aos="fade-up">
      <div className='max-w-[700px] lg:max-w-[1240px] w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-[20px]'>
        {
            data?.map((item,index)=> {
                return <Link href={`${item?.href}/fakultetlar/${item?.id}`}  key={index} className='w-full rounded-[10px] overflow-hidden relative flex justify-center items-center h-[160px]'>
                    <Image src={Blur} alt={item?.title} width={400} height={300} className='absolute w-full h-full left-0 top-0 z-[1] object-cover'/>
                    <Image src={item?.img} alt={item?.title} width={400} height={300} className='absolute w-full h-full left-0 top-0 z-[-1] object-cover'/>
                    <span className='text-white font-[500] text-[24px] relative z-[2] lg:text-[30px] text-center'>{item?.title}</span>
                </Link>
            })
        }
      </div>
    </section>
  )
}

export default IT
