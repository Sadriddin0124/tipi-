"use client"
import React from 'react'
import PedagogueImg1 from "@/assets/pedagogue1.webp"
import PedagogueImg2 from "@/assets/pedagogue2.webp"
import PedagogueImg3 from "@/assets/pedagogue3.webp"
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Social1 from "@/assets/social1.webp"
import Social2 from "@/assets/social2.webp"
import Social3 from "@/assets/social3.webp"
import Social4 from "@/assets/social4.webp"
import Social5 from "@/assets/social5.webp"
import Social6 from "@/assets/social6.webp"
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
import { PedagogueType } from '@/app/types/all.types'
import EducatorImage12 from "@/assets/educator12.jpg"
import EducatorImage13 from "@/assets/educator13.jpg"
import EducatorImage14 from "@/assets/educator14.jpg"
import EducatorImage15 from "@/assets/educator15.jpg"
// import jjn from "../../../../files/books/kusharov.pdf"
// import Certificate1 from "@/app/files/certificate/Сертификат(скопус).pdf"
import Link from 'next/link'
const SingleEducator = () => {
    const t = useTranslations()
    const id = usePathname().split("/")[3]
    const educators:PedagogueType[] = [
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
      {id: "pedagog-12", img: EducatorImage12, name: "Fayziyev Adham", desc: "Doktor (DSc) Filologiya fanlari doktori", faculty: "1"},
      {id: "pedagog-13", img: EducatorImage13, name: "Rustamov Umid", desc: "Professor Iqtisodiyot fanlari bo'yicha mutaxassis", faculty: "1"},
      {id: "pedagog-14", img: EducatorImage14, name: "Sattikulov Muzaffar", desc: "Dotsent Iqtisodiyot fanlari nomzodi", faculty: "1"},
      {id: "pedagog-15", img: EducatorImage15, name: "Kusharov Zoxid", desc: "Informatika bo'yicha mutaxassis", faculty: "1"},
  ]
    const item = educators?.filter(item=> item?.id === id)
    console.log(item);
    const data = [
        {
            id: "pedagog-1", 
            img: PedagogueImg1, 
            name: t("educator.name"), 
            title: t("educator.title"),
            edu: [
              {
                key: t("educator.edu_t1"),
                value: t("educator.edu_v1"),
              },
              {
                key: t("educator.edu_t2"),
                value: t("educator.edu_v2"),
              },
              {
                key: t("educator.edu_t3"),
                value: t("educator.edu_v3"),
              },
              {
                key: t("educator.edu_t4"),
                value: t("educator.edu_v4"),
              },
              {
                key: t("educator.edu_t5"),
                value: t("educator.edu_v5"),
              },
            ],
            about: [
              {
                key: t("educator.about_t1"),
                value: item[0]?.desc,
              },
              {
                key: t("educator.about_t2"),
                value: t("educator.about_v2"),
              },
              {
                key: t("educator.about_t3"),
                value: t("educator.about_v3"),
              },
            ],
            media: [
              t("educator.media1"),
              t("educator.media2"),
              t("educator.media3")
            ],
            data: {
              title: t("educator.data_t"),
              items: [
                {
                  key: t("educator.data_t1"),
                  value: t("educator.data_v1"),
                },
                {
                  key: t("educator.data_t2"),
                  value: t("educator.data_v2"),
                },
                {
                  key: t("educator.data_t3"),
                  value: t("educator.data_v3"),
                },
                {
                  key: t("educator.data_t4"),
                  value: t("educator.data_v4"),
                },
              ]
            },
            social: [
                // {
                //   text: t("educator.social1"),
                //   icon: Social1
                // },
                // {
                //   text: t("educator.social2"),
                //   icon: Social2
                // },
                {
                  text: t("educator.social3"),
                  icon: Social3
                },
                {
                  text: t("educator.social4"),
                  icon: Social4
                },
                {
                  text: t("educator.social5"),
                  icon: Social5
                },
                // {
                //   text: t("educator.social6"),
                //   icon: Social6
                // },
            ]
        },
        {id: "pedagog-2", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {id: "pedagog-3", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]

    const books = [
      {
        title: "Kitob",
        link: "../../../../files/books/kusharov.pdf"
      }
    ]
  return (
    <section className='px-3 w-full flex justify-center py-[70px]'>
      <div className='max-w-[1320px] w-full'>
        <div className='flex gap-5 mb-2'>
          <div className='max-w-[400px] h-full flex flex-col gap-3 justify-between items-center'>
            <Image src={item[0]?.img} alt={item[0]?.name} width={400} height={700} className=' rounded-[10px] mb-[10px] min-w-[400px] h-[515px] w-full object-cover'/>
            <h4 className='text-[24px] font-[500] text-center'>{item[0]?.name}</h4>
          </div>
          <div className='flex flex-col items-start border border-[#404B7C] p-[30px] rounded-[10px] gap-5'>
            <h3 className='text-[40px] font-[400]'>{data[0]?.title}</h3>
            <div className='flex flex-col gap-5 max-w-[900px]'>
              {
                data[0]?.edu?.map((item,index)=> {
                  return <div key={index} className='flex flex-col items-start '>
                    <span className='text-[20px] text-[#404B7C] font-[500]'>{item?.key}</span>
                    <span className='text-[24px] font-[500]'>{item?.value}</span>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className='flex gap-8 items-center'>
          <div className='flex flex-col'>
              <div className='flex flex-col gap-5 p-5 border border-[#404B7C] rounded-[10px] max-w-[400px]'>
              {
                data[0]?.about?.map((item,index)=> {
                  return <div key={index} className='flex flex-col'>
                    <span className='text-[20px] text-[#404B7C] font-[500]'>{item?.key}</span>
                    <span className='text-[24px] font-[500]'>{item?.value}</span>
                  </div>
                })
              }
            </div>
            <h4 className='text-[40px] font-[500] mb-[10px] mt-5'>{data[0]?.data?.title}</h4>
            <div className='p-5 flex flex-col border border-[#404B7C] rounded-[10px] max-w-[400px]'>
              <div>
                {
                  data[0]?.data?.items?.map((item,index)=> {
                    return <div key={index} className='flex flex-col'>
                      <span className='text-[20px] text-[#404B7C] font-[500]'>{item?.key}</span>
                      <span className='text-[24px] font-[500]'>{item?.value}</span>
                  </div>
                  })
                }
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-10 w-[65%]'>
            {
              data[0]?.media?.map((item,index)=> {
                return <button key={index} className='text-[24px] p-4 rounded-[10px] bg-[#404B7C] text-white'>
                  {item}
                  </button>
              })
            }
            <div>

            </div>
            {
              data[0]?.social?.map((item,index)=> {
                return <button key={index} className='text-[24px] flex items-center justify-center gap-[10px] p-4 rounded-[10px] border border-[#404B7C] text-[#404B7C]'>
                  {item?.text}
                  <Image src={item?.icon} alt={item?.text} width={100} height={200} className='w-6 h-6'/>
                </button>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleEducator
