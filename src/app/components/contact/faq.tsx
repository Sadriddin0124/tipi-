"use client"
import { fetchBlog } from '@/app/lib/actions';
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AboutFaculty, { NewsItem } from '../fakultetlar/SingleFaculty/AboutFaculty';
import { RiCloseCircleLine } from 'react-icons/ri';
import Image from 'next/image';

const Faq = () => {
  const t = useTranslations()
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const [popUp, setPopUp] = useState<string>("")

  useEffect(() => {
    const getData = async () => {
      const blog = await fetchBlog(`about-${id}`);
      setBlog(blog);

    };
    getData();
  }, [id]);
  return (
    <section className='w-full flex justify-center px-3 py-[30px]'>
      {popUp && <div onClick={()=>setPopUp("")} className={`fixed w-full h-full bg-[#0000006c] top-0 left-0 flex justify-center items-center z-[220]`}>
        <div className=" h-[90vh] object-contain absolute">
            <RiCloseCircleLine  className="absolute right-1 sm:-right-12 -top-8 sm:-top-6 text-white text-[30px] cursor-pointer" onClick={()=>setPopUp("")}/>
            <Image src={popUp} alt="POp up" width={800} height={500} className="w-full h-full object-contain"/>
          </div>
        </div>}
      <div className='max-w-[1300px] w-full'>
        {/* <h2 className='text-[32px] font-[600]'>{t("contact_.title")}</h2> */}
        <div className="pb-[40px] md:pb-[80px]">
        {
          blog?.map((item,index)=> (
            <div className="py-[30px]" key={index}>
            <AboutFaculty item={item} setPopUp={setPopUp}/>
            </div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Faq
