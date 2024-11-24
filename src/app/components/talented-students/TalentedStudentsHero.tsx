"use client"
import React, { useEffect, useState } from 'react'
import Student1 from "@/assets/student1.webp"
import Student2 from "@/assets/student2.webp"
import Image from 'next/image'
import { fetchStudents } from '@/app/lib/actions'
import { StudentsType } from '@/app/types/all.types'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import Link from 'next/link'
const TalentedStudentsHero = () => {
    const [students, setStudents] = useState<StudentsType[]>([])
    const locale = usePathname().split("/")[1]
    useEffect(()=> {
      const getStudents = async() => {
        const students = await fetchStudents()
        setStudents(students)
        console.log(students);
      }
      getStudents()
    },[])
  return (
    <section className='w-full flex justify-center pt-[20px] pb-[150px] px-3'>
      <div className='max-w-[1340px] w-full flex flex-col items-center gap-[50px]'>
        <h2 className='text-[40px] font-[500]'>Iqtidorli talabalar</h2>
        <div className='grid grid-cols-2 gap-[30px] w-full'>
          {
            students?.map((item,index)=> {
              return <div key={index} className='flex flex-col md:flex-row w-full items-start gap-[40px] border-2 border-black rounded-[10px] p-3'>
                <div className='max-w-[200px] w-full h-[200px] rounded-[10px] overflow-hidden'>
                  <Image src={`${item?.image?.file}`} alt={item?.name} width={400} height={400} className='w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col gap-4 lg:gap-[35px] w-full'>
                  <div className='flex justify-between w-full'>
                    <h3 className='text-[24px] lg:text-[30px] font-[500]'>{item?.name}</h3>
                    <div className='flex gap-2 items-center text-[24px]'>
                      <Link href={item?.telegram} className='text-blue-500'>
                        <FaTelegram />
                      </Link>
                      <Link href={item?.instagram} className='text-red-800'>
                        <IoLogoInstagram size={30}/>
                      </Link>
                      <Link href={item?.facebook} className='text-blue-500'>
                        <FaFacebook />
                      </Link>
                      <Link href={item?.youtube} className='text-red-500'>
                        <FaYoutube size={30}/>
                      </Link>
                    </div>
                  </div>
                  <div className='flex w-full flex-col gap-2 justify-between h-[120px]'>
                    <p className='text-[16px] lg:text-[20px]'>{locale === "uz" ? item?.description_uz : locale === "ru" ? item?.description_uz : item?.description_en }</p>
                    <span className='self-end text-[14px] italic'>{item?.created_at?.slice(0, 10)}</span>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TalentedStudentsHero
