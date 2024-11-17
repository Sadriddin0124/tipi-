// "use client"
// import React from 'react'
// import PedagogueImg1 from "@/assets/pedagogue1.webp"
// import PedagogueImg2 from "@/assets/pedagogue2.webp"
// import PedagogueImg3 from "@/assets/pedagogue3.webp"
// import { useTranslations } from 'next-intl'
// import { PedagogueType } from '@/app/types/all.types'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const EducatorsCards = () => {
//     const t = useTranslations()
//     const data:PedagogueType[] = [
//         {id: "pedagog-1", img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-2", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-3", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-4", img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-5", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-6", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-7", img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-8", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//         {id: "pedagog-9", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
//     ]
//     const activeLang = usePathname().split("/")[1]
    
//   return (
//     <section className='flex justify-center flex-col items-center gap-10 w-full py-[100px]' data-aos="fade-up">
//         <h2 className='text-[24px] md:text-[40px] font-[500]'>{t("pedagogue.title")}</h2>
//         <div className='max-w-[1100px] w-full grid grid-cols-3 gap-[60px]'>
//             {
//                 data?.map((item,index)=> {
//                     return <div key={index} className='max-w-[350px] px-3 lg:px-5'>
//                         <div className='shadow-md rounded-[10px] overflow-hidden'>
//                             <Image src={item?.img} alt={item?.name} width={350} height={300} className='w-full'/>
//                             <div className='p-5 flex flex-col items-start gap-[10px]'>
//                                 <h5 className='text-[20px] font-[600] lg:max-w-[160px]'>{item?.name}</h5>
//                                 <p className='text_main text-[18px] font-[600]'>{item?.desc}</p>
//                                 <Link href={`/${activeLang}/pedagoglar/${item?.id}`} className='hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]'>{t("pedagogue.btn")}</Link>
//                                 </div>
//                         </div>
//                     </div>
//                 })
//             }
//         </div>
//     </section>
//   )
// }

// export default EducatorsCards

"use client"
import React from 'react'
import EducatorImage1 from "@/assets/educator1.webp"
import EducatorImage2 from "@/assets/educator2.webp"
import EducatorImage3 from "@/assets/educator3.webp"
import EducatorImage4 from "@/assets/educator4.webp"
import EducatorImage5 from "@/assets/educator5.webp"
import EducatorImage6 from "@/assets/educator6.webp"
import EducatorImage7 from "@/assets/educator7.webp"
import EducatorImage8 from "@/assets/educator8.webp"
import EducatorImage9 from "@/assets/educator9.webp"
import EducatorImage10 from "@/assets/educator10.webp"
import EducatorImage11 from "@/assets/educator11.webp"
import { useTranslations } from 'next-intl'
import { PedagogueType } from '@/app/types/all.types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const EducatorsCards = () => {
    const t = useTranslations()
    const data:PedagogueType[] = [
        {id: "pedagog-1", img: EducatorImage1, name: t("pedagogue.name1"), desc: t("pedagogue.desc1")},
        {id: "pedagog-2", img: EducatorImage2, name: t("pedagogue.name2"), desc: t("pedagogue.desc2")},
        {id: "pedagog-3", img: EducatorImage3, name: t("pedagogue.name3"), desc: t("pedagogue.desc3")},
        {id: "pedagog-4", img: EducatorImage4, name: t("pedagogue.name4"), desc: t("pedagogue.desc4")},
        {id: "pedagog-5", img: EducatorImage5, name: t("pedagogue.name5"), desc: t("pedagogue.desc5")},
        {id: "pedagog-6", img: EducatorImage6, name: t("pedagogue.name6"), desc: t("pedagogue.desc6")},
        {id: "pedagog-7", img: EducatorImage7, name: t("pedagogue.name7"), desc: t("pedagogue.desc7")},
        {id: "pedagog-8", img: EducatorImage8, name: t("pedagogue.name8"), desc: t("pedagogue.desc8")},
        {id: "pedagog-9", img: EducatorImage9, name: t("pedagogue.name9"), desc: t("pedagogue.desc9")},
        {id: "pedagog-10", img: EducatorImage10, name: t("pedagogue.name10"), desc: t("pedagogue.desc10")},
        {id: "pedagog-11", img: EducatorImage11, name: t("pedagogue.name11"), desc: t("pedagogue.desc11")},
    ]
    const activeLang = usePathname().split("/")[1]
    
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
                                <h5 className='text-[20px] font-[600] '>{item?.name}</h5>
                                <p className='text_main text-[18px] font-[600]'>{item?.desc}</p>
                                <Link href={`/${activeLang}/pedagoglar/${item?.id}`} className='hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]'>{t("pedagogue.btn")}</Link>
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