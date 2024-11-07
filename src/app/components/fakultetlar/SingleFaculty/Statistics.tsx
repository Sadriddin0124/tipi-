"use client"
import React, { useState } from 'react'
import IT1 from "@/assets/it1.webp"
import IT2 from "@/assets/it2.webp"
import IT3 from "@/assets/it3.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import TableComponent from '../../ui/Table'
import Link from 'next/link'
import ITImage from "@/assets/it.webp"
import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Statistics = () => {
    const t = useTranslations()
    const [activeStatistic, setActiveStatistic] = useState<number>(1)
    const data = [
        {
            id: 1
,           title: t("information.statistics1"),
            icon: IT1,
            line: false
        },
        {
            id: 3
,           title: t("information.statistics2"),
            icon: IT2,
            line: true
        },
        {
            id: 2
,           title: t("information.statistics2"),
            icon: IT2,
            line: false
        },
        {
            id: 4
,           title: t("information.statistics2"),
            icon: IT2,
            line: true
        },
        {
            id: 3
,           title: t("information.statistics3"),
            icon: IT3,
            line: false
        },
    ]
    const changeStatistic = (id: number) => {
        setActiveStatistic(id)
    }
    const DirectionTHeads = [
        t("information.th1"),
        t("information.th2"),
        t("information.th3"),
        t("information.th4"),
    ]
    const DirectionTBodies = [
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb5: t("information.tb4")
        },
    ]
    const EducatorTHeads = [
        t("information.th5"),
        t("information.th6"),
        t("information.th7"),
        t("information.th8"),
        t("information.th9"),
    ]
    const EducatorTBodies = [
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
    ]
    
    const components = [
        {id: 1, component: <DirectionsTable/>},
        {id: 2, component: <EducatorsTable/>},
        {id: 3, component: <OnlineReception/>},
    ]
  return (
    <section className='w-full flex flex-col items-center gap-20 justify-center pt-[60px] lg:pt-[122px] pb-20 lg:pb-[100px] px-3' data-aos="fade-up">
        <div className='max-w-[1166px] w-full flex flex-row items-center justify-center lg:justify-between gap-8'>
            {
                data?.map((item,index)=> {
                    return ( item?.line ? 
                    <div className='w-1 h-full bg_main min-h-[88px]' key={index}></div> : 
                    <button className='bg_main whitespace-nowrap group px-12 py-6 text-white cursor-pointer text-[20px] rounded-[10px] lg:text-[24px] font-[600] justify-center flex gap-3 items-center' key={index} onClick={()=>changeStatistic(item?.id)}>
                        <span className='relative flex justify-center'>
                            {item?.title}
                            {item?.id === activeStatistic && <span className=' inline-block w-full h-[2px] bg-white absolute bottom-0 left-0'></span> }
                            <span className=' h-[2px] bottom-0 bg-white ease-linear duration-200 w-0 group-hover:w-[100%] absolute'></span>
                            <span className=' h-[2px] bottom-0 bg-white ease-linear duration-200 w-0 group-hover:w-[100%] absolute'></span>
                        </span>
                        <Image src={item?.icon} alt={item?.title} className={`w-[28px] lg:w-[40px] h-[28px] lg:h-[40px] object-contain`} width={100} height={100}/>
                    </button>)
                })
            }
        </div>
        {
            components?.filter(item=> item?.id === activeStatistic)?.map((item,index)=> (
                <div key={index} className='w-full flex justify-center'>{item?.component}</div>
            ))
        }
    </section>
  )
}

export default Statistics


const OnlineReception = () => {
    const t = useTranslations()
    const OnlineReceptionData = [
        {
            title: t("information.reception1"),
            img: ITImage,
            href: "/"
        },
        {
            title: t("information.reception2"),
            img: ITImage,
            href: "/"
        },
        {
            title: t("information.reception3"),
            img: ITImage,
            href: "/"
        },
    ]
    return <div className='max-w-[1240px] w-full grid grid-cols-3 gap-[20px]'>
        {
            OnlineReceptionData?.map((item,index)=> {
                return <div key={index} className='w-full relative flex justify-center items-center h-[160px]'>
                    <Image src={item?.img} alt={item?.title} width={400} height={300} className='absolute left-0 top-0 z-[-1] object-cover'/>
                    <Link href={item?.href} className='text-white font-[500] text-[30px] text-center'>{item?.title}</Link>
                </div>
            })
        }
  </div>
}

const EducatorsTable = () => {
    const t = useTranslations()
    const EducatorTHeads = [
        t("information.th5"),
        t("information.th6"),
        t("information.th7"),
        t("information.th8"),
        t("information.th9"),
    ]
    const EducatorTBodies = [
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
        {
            tb1: t("information.tb5"),
            tb2: t("information.tb6"),
            tb3: "+998 90 123 4567",
            tb4: [
                {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com"
                },
                {
                    icon:  <FaTelegramPlane />,
                    link: "https://t.me"
                },
                {
                    icon: <RiInstagramFill />,
                    link: "https://instagram.com"
                },
                {
                    icon: <FaYoutube />,
                    link: "https://youtube.com"
                },
            ],
            tb5: "Link",
        },
    ]
    return (
        <table className='w-full max-w-[1300px]'>
      <thead className='flex justify-between'>
      </thead>
      <tbody>
            <tr className='w-full text-[26px] py-5 border-b-[2px] border-b-[#404B7C]'>
              {
                EducatorTHeads?.map((item,index)=> (
                  <td key={index} className="py-5">{item}</td>
                ))
              }
            </tr>
          {
            EducatorTBodies?.map((item,index)=> (
              <tr className='text-[26px] py-5 text_main border-b-[2px] border-b-[#404B7C]' key={index}>
                <td className='py-5'>{item?.tb1}</td>
                <td className='py-5'>{item?.tb2}</td>
                <td className='py-5'>{item?.tb3}</td>
                <td className='py-5 flex items-center gap-3 text-[30px]'>{item?.tb4?.map((el,index)=> <a href={el?.link} target='blank' key={index}>{el?.icon}</a>)}</td>
                <td className='py-5'>{item?.tb5}</td>
              </tr>
            ))
          }
      </tbody>
    </table>
    )
}

const DirectionsTable = () => {
    const t = useTranslations()
    const DirectionTHeads = [
        t("information.th1"),
        t("information.th2"),
        t("information.th3"),
        t("information.th4"),
    ]
    const DirectionTBodies = [
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
        {
            tb1: t("information.tb1"),
            tb2: t("information.tb2"),
            tb3: t("information.tb3"),
            tb4: t("information.tb4")
        },
    ]
    return (
        <table className='w-full max-w-[1300px]'>
      <thead className='flex justify-between'>
      </thead>
      <tbody>
            <tr className='w-full text-[26px] py-5 border-b-[2px] border-b-[#404B7C]'>
              {
                DirectionTHeads?.map((item,index)=> (
                  <td key={index} className="py-5">{item}</td>
                ))
              }
            </tr>
          {
            DirectionTBodies?.map((item,index)=> (
              <tr className='text-[26px] py-5 text_main border-b-[2px] border-b-[#404B7C]' key={index}>
                <td className='py-5'>{item?.tb1}</td>
                <td className='py-5'>{item?.tb2}</td>
                <td className='py-5'>{item?.tb3}</td>
                <td className='py-5'>{item?.tb4}</td>
              </tr>
            ))
          }
      </tbody>
    </table>
    )
}