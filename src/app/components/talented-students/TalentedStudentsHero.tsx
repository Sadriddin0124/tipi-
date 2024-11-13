import React from 'react'
import Student1 from "@/assets/student1.webp"
import Student2 from "@/assets/student2.webp"
import Image from 'next/image'
const TalentedStudentsHero = () => {
    const desc = "The School of Computing and Technology (SCT), established in 1979, is the oldest unit of the Eastern Mediterranean University . SCT provides a high-tech education in a fully digital and multicultural environment to its multinational student profile. The teaching language is English in the four year Information Technology Program (BS) and in the graduate program Master of Technology in Information Technology (MTech in IT). However, Turkish language is used as a teaching language in the two-year and three-year course programs. "
    const students = [
        {
            img: Student1,
            name: "Madina Toshpulatova",
            desc: desc
        },
        {
            img: Student2,
            name: "Madina Toshpulatova",
            desc: desc
        },
        {
            img: Student1,
            name: "Madina Toshpulatova",
            desc: desc
        },
        {
            img: Student2,
            name: "Madina Toshpulatova",
            desc: desc
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
                <div className='min-w-[300px] w-full max-h-[350px] md:max-h-max lg:min-w-[400px] rounded-[10px] overflow-hidden'>
                  <Image src={item?.img} alt={item?.name} width={400} height={400} className='w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col gap-4 lg:gap-[35px] max-w-[860px]'>
                  <h3 className='text-[24px] lg:text-[30px] font-[500]'>{item?.name}</h3>
                  <p className='text-[16px] lg:text-[20px] xl:text-[26px]'>{item?.desc}</p>
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
