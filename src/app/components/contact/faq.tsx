"use client"
import { fetchBlog } from '@/app/lib/actions';
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AboutFaculty, { NewsItem } from '../fakultetlar/SingleFaculty/AboutFaculty';

const Faq = () => {
  const t = useTranslations()
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");

  useEffect(() => {
    const getData = async () => {
      const blog = await fetchBlog(`about-${id}`);
      setBlog(blog);

    };
    getData();
  }, [id]);
  return (
    <section className='w-full flex justify-center px-3 py-[30px]'>
      <div className='max-w-[1300px] w-full'>
        <h2 className='text-[40px] font-[600]'>{t("contact_.title")}</h2>
        <div className="pb-[40px] md:pb-[80px]">
        {
          blog?.map((item,index)=> (
            <div className="py-[30px]" key={index}>
            <AboutFaculty item={item} />
            </div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Faq
