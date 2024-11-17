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
const SingleEducator = () => {
    const t = useTranslations()
    const id = usePathname().split("/")[3]
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
                value: t("educator.about_v1"),
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
                {
                  text: t("educator.social1"),
                  icon: Social1
                },
                {
                  text: t("educator.social2"),
                  icon: Social2
                },
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
                {
                  text: t("educator.social6"),
                  icon: Social6
                },
            ]
        },
        {id: "pedagog-2", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {id: "pedagog-3", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]
    const item = data?.find(item=> item?.id === id)
    console.log(item);
    
  return (
    <section className='px-3 w-full flex justify-center py-[70px]'>
      <div className='max-w-[1320px] w-full'>
        <div className='flex gap-5 mb-2'>
          <div className='max-w-[400px] h-full flex flex-col gap-3 justify-between items-center'>
            <Image src={data[0]?.img} alt={data[0]?.name} width={400} height={700} className=' rounded-[10px] mb-[10px] h-[515px] w-full object-cover'/>
            <h4 className='text-[24px] font-[500] text-center'>{data[0]?.name}</h4>
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
          <div className='grid grid-cols-3 gap-10'>
            {
              data[0]?.media?.map((item,index)=> {
                return <button key={index} className='text-[24px] p-4 rounded-[10px] bg-[#404B7C] text-white'>{item}</button>
              })
            }
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
