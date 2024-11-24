"use client"
import { fetchAboutTipi, fetchFaculties } from '@/app/lib/actions';
import { HoverItemType } from '@/app/types/all.types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
// import License from './lisenziya/page'

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
      console.log(about_tipi);
      setAboutTipi(about_tipi);
      setSections(department);
      setAdministration(admin);
    };
    getData();
  }, []);
  return (
    <section className='px-3 w-full flex justify-center'>
      <div className='max-w-[1300px] w-full py-[30px]'>
        <h2 className='text-[32px] font-[600]'>{id === "ABOUT_INSTITUTE" ? t("nav.link3") : t("nav.link7")}</h2>
        <div className='py-[20px]'>
          <h3 className='text-[24px] font-[600]'>{id === "ABOUT_INSTITUTE" ? t("nav.link3") : t("nav.link5")}</h3>
          {id === "ABOUT_INSTITUTE" ? <div className='w-full grid grid-cols-3 gap-3 mt-3'>
            {
              aboutTipi?.map((item,index)=> {
                return (
                item?.active &&
                <Link href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white text-[#404B7C]'>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div> : 
          <div className='w-full grid grid-cols-3 gap-3 mt-3'>
            {
              sections?.map((item,index)=> {
                return (
                item?.active &&
                <Link href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white text-[#404B7C]'>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}<FaArrowRightLong /></span>
                </Link>)
              })
            }
          </div>}
        </div>
        {id === "ABOUT_INSTITUTE" && <div className='py-[20px]'>
          <h3 className='text-[24px] font-[600]'>{id === "ABOUT_INSTITUTE" ? t("hover.about4") : t("nav.link5")}</h3>
          <div className='w-full grid grid-cols-3 gap-3 mt-3'>
            {
              administration?.map((item,index)=> {
                return (
                item?.active &&
                <Link href={`/${locale}/about?id=${item?.id}`} key={index} className='bg-[#404B7C] border-[#404B7C] px-5 shadow py-4 text-[14px] md:text-[24px] hover:bg-white  hover:border-[#404B7C]  border-2 hover:text-[#404B7C] ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white text-[#404B7C]'>
                    <span className='flex justify-center items-center gap-3'>{locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}<FaArrowRightLong /></span>
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
