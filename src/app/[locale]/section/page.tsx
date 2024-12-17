"use client"
import { fetchAboutTipi, fetchFaculties } from '@/app/lib/actions';
import { HoverItemType } from '@/app/types/all.types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
// import License from './lisenziya/page'

type ServicesType = {
  id: number,
  name_uz: string;
  name_ru: string;
  name_en: string;
  active: boolean
  href: string
  target?: string
}

const InstitutHaqida = () => {
  const [aboutTipi, setAboutTipi] = useState<HoverItemType[]>([]);
  const [administration, setAdministration] = useState<HoverItemType[]>([]);
  const [sections, setSections] = useState<HoverItemType[]>([]);
  const [faculties, setFaculties] = useState([]);
  const searchparams = useSearchParams()
  const id = searchparams.get("id")
  const t = useTranslations()
  const locale = usePathname().split("/")[1]
  useEffect(() => {
    const getData = async () => {
      const faculties = await fetchFaculties();
      setFaculties(faculties);
      const about = await fetchAboutTipi();
      // const admin = await fetchAdmin()
      // setAdministration(admin)
      // const sections = await fetchSections()
      // setSections(sections)

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
  }, []);
  const [services, setServices] = useState<ServicesType[]>([
    {
      id: 1,
      name_uz: t("hover.title10"),
      name_ru: t("hover.title10"),
      name_en: t("hover.title10"),
      active: true,
      href: `/${locale}/interaktiv-xizmatlar/iqtidorli-talabalar`,
    },
    {
      id: 8,
      name_uz: t("hover.title8"),
      name_ru: t("hover.title8"),
      name_en: t("hover.title8"),
      active: true,
      href: `https://www.online-library.uz/`,
      target: "blank",
    },
    {
      id: 9,
      name_uz: t("hover.title9"),
      name_ru: t("hover.title9"),
      name_en: t("hover.title9"),
      active: true,
      href: `https://tipi-journal.uz`,
      target: "blank",
    },
  ])
  const News: ServicesType[] = [
    {
      id: 1,
      name_uz: t('news.title2'),
      name_ru: t('news.title2'),
      name_en: t('news.title2'),
      active: true,
      href: `/${locale}/yangiliklar/science`,
    },
    {
      id: 8,
      name_uz: t('news.title3'),
      name_ru: t('news.title3'),
      name_en: t('news.title3'),
      active: true,
      href: `/${locale}/yangiliklar/news`,
    },
    {
      id: 9,
      name_uz: t('events.title'),
      name_ru: t('events.title'),
      name_en: t('events.title'),
      active: true,
      href: `/${locale}/yangiliklar/events`,
    },
  ];
  return (
    <section className='px-3 w-full flex justify-center'>
      <div className='max-w-[1300px] w-full py-[30px]'>
        <h2 className='text-[32px] font-[600]'>{id === "ABOUT_INSTITUTE" ? t("nav.link3") : id === "SERVICE" ? t("nav.link6") : id === "NEWS" ? t("nav.link4") : t("nav.link7")}</h2>
        <div className='py-[20px]'>
          <h3 className='text-[24px] font-[600]'>{id === "ABOUT_INSTITUTE" ? t("nav.link3") : id === "DEPARTMENT" ? t("nav.link5") : ""}</h3>
          {id === "ABOUT_INSTITUTE" && <div className='w-full grid lg:grid-cols-3 gap-3 mt-3'>
            {
              aboutTipi?.map((item,index)=> {
                return (
                item?.active &&
                <Link href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white '>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div> } 
          {id === "DEPARTMENT" && <div className='w-full grid lg:grid-cols-3 gap-3 mt-3'>
            {
              sections?.map((item,index)=> {
                return (
                item?.active &&
                <Link href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white '>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div>}
        </div>
        {id === "ABOUT_INSTITUTE" && <div className='py-[20px]'>
          <h3 className='text-[24px] font-[600]'>{id === "ABOUT_INSTITUTE" ? t("hover.about4") : t("nav.link5")}</h3>
          <div className='w-full grid lg:grid-cols-3 gap-3 mt-3'>
            {
              administration?.map((item,index)=> {
                return (
                item?.active &&
                <Link href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white'>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div>
        </div>}
        {id === "SERVICE" && <div className='py-[20px]'>
          <h3 className='text-[24px] font-[600]'>{t("nav.link6")}</h3>
          <div className='w-full grid lg:grid-cols-3 gap-3 mt-3'>
            {
              services?.map((item,index)=> {
                return (
                item?.active &&
                <Link target={item?.target ? "_blank" : ""} href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white'>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.name_uz : locale === "ru" ? item?.name_ru : item?.name_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div>
        </div>}
        {id === "NEWS" && <div className='py-[20px]'>
          <h3 className='text-[24px] font-[600]'>{t("nav.link4")}</h3>
          <div className='w-full grid lg:grid-cols-3 gap-3 mt-3'>
            {
              News?.map((item,index)=> {
                return (
                item?.active &&
                <Link target={item?.target ? "_blank" : ""} href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white'>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.name_uz : locale === "ru" ? item?.name_ru : item?.name_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div>
        </div>}
      </div>
      {/* <License/> */}
    </section>
  )
}

export default InstitutHaqida
