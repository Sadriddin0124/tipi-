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
//     const locale = usePathname().split("/")[1]

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

"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { KafedraTypes, PedagogueType } from "@/app/types/all.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchEducators } from "@/app/lib/actions";
import SingleEducator from "@/app/[locale]/pedagoglar/[id]/page";

const FacultyKafedra = ({ data }: { data: KafedraTypes[] }) => {
  const t = useTranslations();
  const [id, setId] = useState<string>("")
  useEffect(() => {
    const getData = async () => {
      const res = await fetchEducators();
      console.log(res);
    };
    getData();
  }, []);
  const locale = usePathname().split("/")[1];
  function scrollToBottom(id: string) {
    setId(id)
    setTimeout(() => {
      window.scrollTo({
        top: 1000, // Scroll to 1000px from the top
        behavior: "smooth", // Smooth scrolling
      });
    }, 1000);
  }
  const pathname = usePathname()
  return (
    <section
      className="flex justify-center flex-col items-center px-1 gap-10 w-full"
    >
      {id && <div className="fixed w-full z-[200] h-[100vh] top-0 left-0 bg-[#0000006b] flex justify-center items-center">
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#0000006b]" onClick={()=>setId("")}></div>
        <div className="pl-[20px] max-w-[1100px] scroll_no w-full flex justify-center rounded-lg h-[600px] bg-white overflow-y-auto relative z-10">
          <SingleEducator/>
        </div>
      </div>}
      <h2 className="text-[24px] md:text-[40px] font-[500]">
        {t("pedagogue.title")}
      </h2>
      <div className=" max-w-[400px] sm:max-w-[1100px] w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[60px]">
        {data?.map((item, index) => {
          return (
            <div key={index} className="max-w-[350px]">
              <div className="shadow-md rounded-[10px] overflow-hidden">
                <Image
                  src={item?.image?.file}
                  alt={item?.name_uz}
                  width={350}
                  height={300}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-5 flex flex-col items-start justify-between gap-[10px] sm:h-[240px]">
                  <div>
                    <h5 className="text-[20px] font-[600] ">
                      {locale === "uz"
                        ? item?.name_uz
                        : locale === "ru"
                        ? item?.name_ru
                        : item?.name_en}
                    </h5>
                    <p className="text_main sm:text-[18px] font-[600]">
                      {locale === "uz"
                        ? item?.description_uz
                        : locale === "ru"
                        ? item?.description_ru
                        : item?.description_en}
                    </p>
                  </div>
                  <Link
                  onClick={()=>scrollToBottom(item?.id)}
                    href={`${pathname}?id=${item?.id}`}
                    className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                  >
                    {t("pedagogue.btn")}
                  </Link>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FacultyKafedra;
