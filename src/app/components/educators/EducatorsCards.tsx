// // "use client"
// // import React from 'react'
// // import PedagogueImg1 from "@/assets/pedagogue1.webp"
// // import PedagogueImg2 from "@/assets/pedagogue2.webp"
// // import PedagogueImg3 from "@/assets/pedagogue3.webp"
// // import { useTranslations } from 'next-intl'
// // import { PedagogueType } from '@/app/types/all.types'
// // import Image from 'next/image'
// // import Link from 'next/link'
// // import { usePathname } from 'next/navigation'

// // const EducatorsCards = () => {
// //     const t = useTranslations()
// //     const data:PedagogueType[] = [
// //         {id: "pedagog-1", img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-2", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-3", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-4", img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-5", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-6", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-7", img: PedagogueImg1, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-8", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //         {id: "pedagog-9", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
// //     ]
// //     const locale = usePathname().split("/")[1]

// //   return (
// //     <section className='flex justify-center flex-col items-center gap-10 w-full py-[100px]' data-aos="fade-up">
// //         <h2 className='text-[24px] md:text-[40px] font-[500]'>{t("pedagogue.title")}</h2>
// //         <div className='max-w-[1100px] w-full grid grid-cols-3 gap-[60px]'>
// //             {
// //                 data?.map((item,index)=> {
// //                     return <div key={index} className='max-w-[350px] px-3 lg:px-5'>
// //                         <div className='shadow-md rounded-[10px] overflow-hidden'>
// //                             <Image src={item?.img} alt={item?.name} width={350} height={300} className='w-full'/>
// //                             <div className='p-5 flex flex-col items-start gap-[10px]'>
// //                                 <h5 className='text-[20px] font-[600] lg:max-w-[160px]'>{item?.name}</h5>
// //                                 <p className='text_main text-[18px] font-[600]'>{item?.desc}</p>
// //                                 <Link href={`/${locale}/pedagoglar/${item?.id}`} className='hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]'>{t("pedagogue.btn")}</Link>
// //                                 </div>
// //                         </div>
// //                     </div>
// //                 })
// //             }
// //         </div>
// //     </section>
// //   )
// // }

// // export default EducatorsCards

// "use client";
// import React, { useEffect } from "react";
// import EducatorImage1 from "@/assets/educator1.webp";
// import EducatorImage2 from "@/assets/educator2.webp";
// import EducatorImage3 from "@/assets/educator3.webp";
// import EducatorImage4 from "@/assets/educator4.webp";
// import EducatorImage5 from "@/assets/educator5.webp";
// import EducatorImage6 from "@/assets/educator6.webp";
// import EducatorImage7 from "@/assets/educator7.webp";
// import EducatorImage8 from "@/assets/educator8.webp";
// import EducatorImage9 from "@/assets/educator9.webp";
// import EducatorImage10 from "@/assets/educator10.webp";
// import EducatorImage11 from "@/assets/educator11.webp";
// import { useTranslations } from "next-intl";
// import { KafedraTypes, PedagogueType } from "@/app/types/all.types";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { fetchEducators } from "@/app/lib/actions";

// const EducatorsCards = ({ data }: { data: KafedraTypes[] }) => {
//   const t = useTranslations();
//   // const data: PedagogueType[] = [
//   //   {
//   //     id: "pedagog-1",
//   //     img: EducatorImage1,
//   //     name: t("pedagogue.name1"),
//   //     desc: t("pedagogue.desc1"),
//   //   },
//   //   {
//   //     id: "pedagog-2",
//   //     img: EducatorImage2,
//   //     name: t("pedagogue.name2"),
//   //     desc: t("pedagogue.desc2"),
//   //   },
//   //   {
//   //     id: "pedagog-3",
//   //     img: EducatorImage3,
//   //     name: t("pedagogue.name3"),
//   //     desc: t("pedagogue.desc3"),
//   //   },
//   //   {
//   //     id: "pedagog-4",
//   //     img: EducatorImage4,
//   //     name: t("pedagogue.name4"),
//   //     desc: t("pedagogue.desc4"),
//   //   },
//   //   {
//   //     id: "pedagog-5",
//   //     img: EducatorImage5,
//   //     name: t("pedagogue.name5"),
//   //     desc: t("pedagogue.desc5"),
//   //   },
//   //   {
//   //     id: "pedagog-6",
//   //     img: EducatorImage6,
//   //     name: t("pedagogue.name6"),
//   //     desc: t("pedagogue.desc6"),
//   //   },
//   //   {
//   //     id: "pedagog-7",
//   //     img: EducatorImage7,
//   //     name: t("pedagogue.name7"),
//   //     desc: t("pedagogue.desc7"),
//   //   },
//   //   {
//   //     id: "pedagog-8",
//   //     img: EducatorImage8,
//   //     name: t("pedagogue.name8"),
//   //     desc: t("pedagogue.desc8"),
//   //   },
//   //   {
//   //     id: "pedagog-9",
//   //     img: EducatorImage9,
//   //     name: t("pedagogue.name9"),
//   //     desc: t("pedagogue.desc9"),
//   //   },
//   //   {
//   //     id: "pedagog-10",
//   //     img: EducatorImage10,
//   //     name: t("pedagogue.name10"),
//   //     desc: t("pedagogue.desc10"),
//   //   },
//   //   {
//   //     id: "pedagog-11",
//   //     img: EducatorImage11,
//   //     name: t("pedagogue.name11"),
//   //     desc: t("pedagogue.desc11"),
//   //   },
//   // ];
//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetchEducators();
//       console.log(res);
//     };
//     getData();
//   }, []);
//   const locale = usePathname().split("/")[1];

//   return (
//     <section
//       className="flex justify-center flex-col items-center px-1 gap-10 w-full"
//       data-aos="fade-up"
//     >
//       <h2 className="text-[24px] md:text-[40px] font-[500]">
//         {t("pedagogue.title")}
//       </h2>
//       <div className=" max-w-[400px] sm:max-w-[1100px] w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[60px]">
//         {data?.map((item, index) => {
//           return (
//             <div key={index} className="max-w-[350px]">
//               <div className="shadow-md rounded-[10px] overflow-hidden">
//                 <Image
//                   src={item?.image?.file}
//                   alt={item?.name_uz}
//                   width={350}
//                   height={300}
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="p-5 flex flex-col items-start justify-between gap-[10px] sm:h-[240px]">
//                   <div>
//                     <h5 className="text-[20px] font-[600] ">
//                       {locale === "uz"
//                         ? item?.name_uz
//                         : locale === "en"
//                         ? item?.name_en
//                         : item?.name_ru}
//                     </h5>
//                     <p className="text_main sm:text-[18px] font-[600]">
//                       {locale === "uz"
//                         ? item?.description_uz
//                         : locale === "en"
//                         ? item?.description_en
//                         : item?.description_ru}
//                     </p>
//                   </div>
//                   <Link
//                     href={`/${locale}/pedagoglar/${item?.id}`}
//                     className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
//                   >
//                     {t("pedagogue.btn")}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default EducatorsCards;

"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { KafedraTypes } from "@/app/types/all.types";
import { fetchEducators } from "@/app/lib/actions";
import SingleEducator from "@/app/[locale]/pedagoglar/[id]/page";
import { IoCloseCircle } from "react-icons/io5";

const EducatorsCards = ({ data }: { data: KafedraTypes[] }) => {
  const t = useTranslations();
  const locale = usePathname()?.split("/")[1] || "uz"; // Default to "uz"
  const [id, setId] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchEducators();
        console.log(res); // Validate API response
      } catch (error) {
        console.error("Failed to fetch educators:", error);
      }
    };
    getData();
  }, []);
  // const educator = data?.find(item=> item?.id === id)

  return (
    <section
      className="flex flex-col items-center px-4 gap-10 w-full"
      // data-aos="fade-up"
    >
      {id && <div className="fixed w-full z-[200] h-[100vh] top-0 left-0 bg-[#0000006b] flex justify-center items-center">
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#0000006b]" onClick={()=>setId("")}></div>
        <div className="pl-[20px] max-w-[1200px] w-full flex justify-center rounded-lg h-[600px] bg-white relative z-10">
        <button className="absolute right-5 top-5 text_main z-20 cursor-pointer" onClick={()=>setId("")}><IoCloseCircle size={30}/></button>
          <SingleEducator/>
        </div>
      </div>}
      <h2 className="text-[28px] font-[500] md:text-[40px] md:font-medium">
        {t("pedagogue.title")}
      </h2>
      <div className="max-w-[1300px] w-full flex items-center flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        {data?.map((item, index) => (
          <div key={index} className="max-w-[350px] w-full">
            <div className="shadow-md rounded-[10px] overflow-hidden">
              <Image
                src={item?.image?.file || "/placeholder-image.jpg"}
                alt={item?.name_uz || "Educator"}
                width={350}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-5 flex flex-col justify-between gap-[10px] sm:h-[240px]">
                <div className="flex flex-col gap-[10px]">
                  <h5 className="text-[20px] font-bold line-clamp-2">
                    {locale === "uz"
                      ? item?.name_uz
                      : locale === "en"
                      ? item?.name_en
                      : item?.name_ru}
                  </h5>
                  <p className="text-lg text_main line-clamp-2">
                    {locale === "uz"
                      ? item?.description_uz
                      : locale === "en"
                      ? item?.description_en
                      : item?.description_ru}
                  </p>
                </div>
                <Link
                  onClick={() => setId(item?.id)}
                  href={`/${locale}/pedagoglar?id=${item?.id}`}
                  className="self-end px-6 py-3 rounded-lg bg-[#404B7C] text-white hover:bg-white hover:text-[#404B7C] border-2 border-transparent hover:border-[#404B7C] transition ease-linear duration-200"
                >
                  {t("information.th9")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducatorsCards;
