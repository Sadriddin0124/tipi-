"use client"
import React, { useEffect, useState } from 'react'
import ITImage from "@/assets/it.webp"
import Image from 'next/image'
import Link from 'next/link'
import Blur from "@/assets/faculties_blur.webp"
import { usePathname } from 'next/navigation'
import { fetchFaculties } from '@/app/lib/actions'
type ImagesType = {
    id: string;
    file: string
}
type FacultyType = {
    id: number
    main_image: ImagesType;
    name_uz: string
    name_ru: string
    name_en: string
    is_active: boolean
}
const IT = () => {
    const [lang, setLang] = useState<string>("")
    const pathname = usePathname()
    useEffect(()=> {
    const lng = pathname.split("/")[1]
        setLang(lng)
    },[pathname])
 
    const [faculties, setFaculties] = useState<FacultyType[]>([])
    useEffect(()=> {
        const getData = async() => {
            const faculties = await fetchFaculties()
            setFaculties(faculties)
        }
        getData()
    },[])
  return (
    <section className='w-full flex justify-center px-3'data-aos="fade-up">
      <div className='max-w-[700px] lg:max-w-[1400px] w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-[20px]'>
        {
            faculties?.map((item,index)=> {
                return <Link href={`/${lang}/fakultetlar/${item?.id}`}  key={index} className='w-full rounded-[10px] overflow-hidden relative flex justify-center items-center h-[160px]'>
                    <Image src={Blur} alt={item?.name_en} width={400} height={300} className='absolute w-full h-full left-0 top-0 z-[1] object-cover'/>
                    <Image src={item?.main_image?.file} alt={item?.name_en} width={400} height={300} className='absolute w-full h-full left-0 top-0 z-[-1] object-cover'/>
                    <span className='text-white font-[500] text-[24px] relative z-[2] lg:text-[30px] text-center'>{lang === "uz" ? item?.name_uz : lang === "en" ? item?.name_en : item?.name_ru}</span>
                </Link>
            })
        }
      </div>
    </section>
  )
}

export default IT
