"use client"
import React, { useEffect, useState } from 'react'
import ITImage from "@/assets/it.webp"
import Image from 'next/image'
import Link from 'next/link'
import { activeLang } from '@/app/lib/utils'
import { usePathname } from 'next/navigation'
const IT = () => {
    const [lang, setLang] = useState<string>()
    const pathname = usePathname()
    useEffect(()=> {
    const lng = pathname.split("/")[1]
        setLang(lng)
    },[])
    
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
    <section className='w-full flex justify-center'>
      <div className='max-w-[1240px] w-full grid grid-cols-4 gap-[20px]'>
        {
            data?.map((item,index)=> {
                return <div key={index} className='w-full relative flex justify-center items-center h-[160px]'>
                    <Image src={item?.img} alt={item?.title} width={400} height={300} className='absolute left-0 top-0 z-[-1] object-cover'/>
                    <Link href={`${item?.href}/fakultetlar/${item?.id}`} className='text-white font-[500] text-[30px] text-center'>{item?.title}</Link>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default IT
