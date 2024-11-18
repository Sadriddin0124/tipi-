import React from 'react'
import Student1 from "@/assets/students/student1.webp"
import Student2 from "@/assets/students/student2.webp"
import Student3 from "@/assets/students/student3.webp"
import Student4 from "@/assets/students/student4.webp"
import Student5 from "@/assets/students/student5.webp"
import Student6 from "@/assets/students/student6.webp"
import Student7 from "@/assets/students/student7.webp"
import Student8 from "@/assets/students/student8.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
const TalentedStudentsHero = () => {
  const t = useTranslations()
    const students = [
        {
            img: Student1,
            name: t("talented.name1"),
            desc: t("talented.desc")
        },
        {
            img: Student2,
            name: t("talented.name2"),
            desc: t("talented.desc")
        },
        {
            img: Student3,
            name: t("talented.name3"),
            desc: t("talented.desc")
        },
        {
            img: Student4,
            name: t("talented.name4"),
            desc: t("talented.desc")
        },
        {
            img: Student5,
            name: t("talented.name5"),
            desc: t("talented.desc")
        },
        {
            img: Student6,
            name: t("talented.name6"),
            desc: t("talented.desc")
        },
        {
            img: Student7,
            name: t("talented.name7"),
            desc: t("talented.desc")
        },
        {
            img: Student8,
            name: t("talented.name8"),
            desc: t("talented.desc")
        },
    ]
  return (
    <section className='w-full flex justify-center pt-[20px] pb-[150px] px-3'>
      <div className='max-w-[1340px] w-full flex flex-col items-center gap-[50px]'>
        <h2 className='text-[40px] font-[500]'>Iqtidorli talabalar</h2>
        <div className='flex flex-col gap-[50px]'>
          {
            students?.map((item,index)=> {
              return <div key={index} className='flex flex-col md:flex-row items-start gap-[40px] border-2 border-black rounded-[10px] p-5'>
                <div className='max-w-[200px] w-full max-h-[220px] md:max-h-[220px] lg:min-w-[200px] rounded-[10px] overflow-hidden'>
                  <Image src={item?.img} alt={item?.name} width={400} height={400} className='w-full h-full object-contain'/>
                </div>
                <div className='flex flex-col gap-4 lg:gap-[35px] max-w-[860px]'>
                  <h3 className='text-[24px] lg:text-[30px] font-[500]'>{item?.name}</h3>
                  <p className='text-[16px] lg:text-[18px] xl:text-[20px]'>{item?.desc}</p>
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
