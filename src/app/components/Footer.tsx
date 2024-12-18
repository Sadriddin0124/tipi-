"use client"
import React, { useEffect, useState } from 'react'
import Logo from "@/assets/logo.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { HoverItemType } from '../types/all.types'
import { fetchAboutTipi, fetchFaculties } from '../lib/actions'
import { usePathname } from 'next/navigation'
const Footer = () => {
    const t = useTranslations()
    const social = [
        {
            icon: <FaTelegramPlane />,
            path: "https://t.me/"
        },
        {
            icon: <FaFacebookF />,
            path: "https://facebook.com/"
        },
        {
            icon: <RiInstagramFill />,
            path: "https://instagram.com/"
        },
    ]
    function l(
        locale: string | null | undefined,
        uz: string | null | undefined,
        ru: string | null | undefined,
        en: string | null | undefined
      ) {
        if (locale == "uz") return uz;
        if (locale == "ru") return ru;
        if (locale == "en") return en;
      }
    const [aboutTipi, setAboutTipi] = useState<HoverItemType[]>([]);
    const [administration, setAdministration] = useState<HoverItemType[]>([]);
    const [sections, setSections] = useState<HoverItemType[]>([]);
    const [faculties, setFaculties] = useState<HoverItemType[]>([]);
    useEffect(()=> {
        const getData = async () => {
            const faculties = await fetchFaculties();
            setFaculties(faculties);
            const about = await fetchAboutTipi();
      
            const admin = (about as Array<HoverItemType>)?.filter(
              (item) => item?.page === "ADMINISTRATION"
            );
            const about_tipi = (about as Array<HoverItemType>)?.filter(
              (item) => item?.page === "ABOUT_INSTITUTE"
            );
            const department = (about as Array<HoverItemType>)?.filter(
              (item) => item?.page === "DEPARTMENT"
            );
            setAboutTipi(about_tipi);
            setSections(department);
            setAdministration(admin);
          };
          getData();
    },[])
    // label: t("nav.link3"),
    //   path: `/${activeLang?.value}/section?id=ABOUT_INSTITUTE`,
    const locale = usePathname().split("/")[1]
  return (
    <footer className='pt-[28px] px-3 bg_main flex flex-col items-center justify-start'>
        <div className='flex pb-[28px] justify-between flex-wrap gap-8 md:flex-nowrap max-w-[1400px] w-full'>
            {/* <div className='flex max-w-[400px] w-full flex-col items-start sm:items-end'>
            </div> */}
            <div className='flex flex-col items-start sm:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-10 gap-2 w-full'>
                <div className='max-w-[450px] col-span-3 w-full flex gap-4 items-start'>
                    <Image src={Logo} alt='Logo' width={100} height={100} className='w-[50px] md:w-[90px] h-[50px] md:h-[90px]'/>
                    <div className='max-w-[276px] flex flex-col gap-2 text-white'>
                        <span className='max-w-[280px] font-bold text-white'>{t("footer.logo")}</span>
                        <p className=''>{t("footer.address")}</p>
                        <p className=''>{t("footer.phone")}</p>
                        <p className=''>{t("footer.mail")}</p>
                        <div className='flex w-full justify-between gap-2 max-w-[150px] self-start text-white text-[20px]'>
                            {
                                social?.map((item,index)=> {
                                    return <a href={item?.path} key={index}>{item?.icon}</a>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='text-[16px] font-[400] col-span-2 flex flex-col gap-2 text-white'>
                    <Link href={`/${locale}/section?id=ABOUT_INSTITUTE`} className='text-[18px]'>{t("nav.link3")}</Link>
                    {
                        aboutTipi?.map((item,index)=> {
                            return <Link href={`/${locale}/about?id=${item?.id}`} key={index}>{l(locale, item?.title_uz, item?.title_ru, item?.title_en)}</Link>
                        })
                    }
                    <Link href={`/${locale}/section?id=ABOUT_INSTITUTE`} className='text-[18px]'>{t("hover.about4")}</Link>
                    {
                        administration?.map((item,index)=> {
                            return <Link href={`/${locale}/about?id=${item?.id}`} key={index}>{l(locale, item?.title_uz, item?.title_ru, item?.title_en)}</Link>
                        })
                    }
                </div>
                <div className='text-[16px] font-[400] col-span-2 flex flex-col gap-2 text-white'>
                    <Link href={`/${locale}/section?id=DEPARTMENT`} className='text-[18px]'>{t("nav.link5")}</Link>
                    {
                        sections?.map((item,index)=> {
                            return <Link href={`/${locale}/about?id=${item?.id}`} key={index}>{l(locale, item?.title_uz, item?.title_ru, item?.title_en)}</Link>
                        })
                    }
                </div>
                {/* <div className='text-[18px] font-[400] flex flex-col gap-2 text-white'>
                    <Link href={`/${locale}/fakultetlar`}>{t("nav.link2")}</Link>
                    {
                        faculties?.map((item,index)=> {
                            return <Link href={`/${locale}/about?id=${item?.id}`} key={index}>{l(locale, item?.name_uz, item?.name_ru, item?.name_en)}</Link>
                        })
                    }
                </div> */}
                <iframe className='max-w-[350px] min-h-[200px] col-span-3 w-full rounded-2xl' src="https://yandex.com/map-widget/v1/?ll=69.544003%2C41.435949&mode=search&oid=193297945866&ol=biz&z=16.63"></iframe>
                {/* <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.152144074336!2d69.54135817588119!3d41.4359202712938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefb81e98fa5bf%3A0x6f0f86d77ec98842!2sToshkent%20Iqtisodiyot%20va%20Pedagogika%20Instituti!5e0!3m2!1sen!2s!4v1732942504174!5m2!1sen!2s" height="200" loading="lazy" ></iframe>             */}
            </div>
        </div>
        <Link href={"https://www.instagram.com/sector_soft"} target='_blank' className='self-end text-white p-3 text-[12px]'>Powered by Sector Soft</Link>
    </footer>
  )
}

export default Footer