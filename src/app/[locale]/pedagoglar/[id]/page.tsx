// "use client";
// import React, { useEffect, useState } from "react";
// import PedagogueImg1 from "@/assets/pedagogue1.webp";
// import PedagogueImg2 from "@/assets/pedagogue2.webp";
// import PedagogueImg3 from "@/assets/pedagogue3.webp";
// import { useTranslations } from "next-intl";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Social1 from "@/assets/social1.webp";
// import Social2 from "@/assets/social2.webp";
// import Social3 from "@/assets/social3.webp";
// import Social4 from "@/assets/social4.webp";
// import Social5 from "@/assets/social5.webp";
// import Social6 from "@/assets/social6.webp";
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
// import { PedagogueType } from "@/app/types/all.types";
// import FileLogo from "@/assets/file_logo.webp";

// import Link from "next/link";
// import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io";
// import { fetchTeachers } from "@/app/lib/fetchers";
// import { ITeacher } from "@/app/lib/types";
// import { fetchEducators } from "@/app/lib/actions";
// const SingleEducator = () => {
//   const t = useTranslations();
//   const id = usePathname().split("/")[3];
//   const educators: PedagogueType[] = [
//     {
//       id: "pedagog-1",
//       img: EducatorImage1,
//       name: t("pedagogue.name1"),
//       desc: t("pedagogue.desc1"),
//     },
//     {
//       id: "pedagog-2",
//       img: EducatorImage2,
//       name: t("pedagogue.name2"),
//       desc: t("pedagogue.desc2"),
//     },
//     {
//       id: "pedagog-3",
//       img: EducatorImage3,
//       name: t("pedagogue.name3"),
//       desc: t("pedagogue.desc3"),
//     },
//     {
//       id: "pedagog-4",
//       img: EducatorImage4,
//       name: t("pedagogue.name4"),
//       desc: t("pedagogue.desc4"),
//     },
//     {
//       id: "pedagog-5",
//       img: EducatorImage5,
//       name: t("pedagogue.name5"),
//       desc: t("pedagogue.desc5"),
//     },
//     {
//       id: "pedagog-6",
//       img: EducatorImage6,
//       name: t("pedagogue.name6"),
//       desc: t("pedagogue.desc6"),
//     },
//     {
//       id: "pedagog-7",
//       img: EducatorImage7,
//       name: t("pedagogue.name7"),
//       desc: t("pedagogue.desc7"),
//     },
//     {
//       id: "pedagog-8",
//       img: EducatorImage8,
//       name: t("pedagogue.name8"),
//       desc: t("pedagogue.desc8"),
//     },
//     {
//       id: "pedagog-9",
//       img: EducatorImage9,
//       name: t("pedagogue.name9"),
//       desc: t("pedagogue.desc9"),
//     },
//     {
//       id: "pedagog-10",
//       img: EducatorImage10,
//       name: t("pedagogue.name10"),
//       desc: t("pedagogue.desc10"),
//     },
//     {
//       id: "pedagog-11",
//       img: EducatorImage11,
//       name: t("pedagogue.name11"),
//       desc: t("pedagogue.desc11"),
//     },
//   ];
//   const item = educators?.filter((item) => item?.id === id);
//   console.log(item);
//   const data = [
//     {
//       id: "pedagog-1",
//       img: PedagogueImg1,
//       name: t("educator.name"),
//       title: t("educator.title"),
//       edu: [
//         {
//           key: t("educator.edu_t1"),
//           value: t("educator.edu_v1"),
//         },
//         {
//           key: t("educator.edu_t2"),
//           value: t("educator.edu_v2"),
//         },
//         {
//           key: t("educator.edu_t3"),
//           value: t("educator.edu_v3"),
//         },
//         {
//           key: t("educator.edu_t4"),
//           value: t("educator.edu_v4"),
//         },
//         {
//           key: t("educator.edu_t5"),
//           value: t("educator.edu_v5"),
//         },
//       ],
//       about: [
//         {
//           key: t("educator.about_t1"),
//           value: item[0]?.desc,
//         },
//         {
//           key: t("educator.about_t2"),
//           value: t("educator.about_v2"),
//         },
//         {
//           key: t("educator.about_t3"),
//           value: t("educator.about_v3"),
//         },
//       ],
//       media: [t("educator.media1"), t("educator.media2"), t("educator.media3")],
//       data: {
//         title: t("educator.data_t"),
//         items: [
//           {
//             key: t("educator.data_t1"),
//             value: t("educator.data_v1"),
//           },
//           {
//             key: t("educator.data_t2"),
//             value: t("educator.data_v2"),
//           },
//           {
//             key: t("educator.data_t3"),
//             value: t("educator.data_v3"),
//           },
//           {
//             key: t("educator.data_t4"),
//             value: t("educator.data_v4"),
//           },
//         ],
//       },
//       social: [
//         // {
//         //   text: t("educator.social1"),
//         //   icon: Social1
//         // },
//         // {
//         //   text: t("educator.social2"),
//         //   icon: Social2
//         // },
//         {
//           text: t("educator.social3"),
//           icon: Social3,
//         },
//         {
//           text: t("educator.social4"),
//           icon: Social4,
//         },
//         {
//           text: t("educator.social5"),
//           icon: Social5,
//         },
//         // {
//         //   text: t("educator.social6"),
//         //   icon: Social6
//         // },
//       ],
//     },
//     {
//       id: "pedagog-2",
//       img: PedagogueImg2,
//       name: t("pedagogue.title1"),
//       desc: t("pedagogue.desc1"),
//     },
//     {
//       id: "pedagog-3",
//       img: PedagogueImg3,
//       name: t("pedagogue.title1"),
//       desc: t("pedagogue.desc1"),
//     },
//   ];
//   const files = [
//     {
//       img: FileLogo,
//       type: "doc",
//       desc: t("aboutFaculty.fileDesc"),
//     },
//     {
//       img: FileLogo,
//       type: "pdf",
//       desc: t("aboutFaculty.fileDesc"),
//     },
//     {
//       img: FileLogo,
//       type: "pdf",
//       desc: t("aboutFaculty.fileDesc"),
//     },
//     {
//       img: FileLogo,
//       type: "doc",
//       desc: t("aboutFaculty.fileDesc"),
//     },
//     {
//       img: FileLogo,
//       type: "pdf",
//       desc: t("aboutFaculty.fileDesc"),
//     },
//     {
//       img: FileLogo,
//       type: "pdf",
//       desc: t("aboutFaculty.fileDesc"),
//     },
//   ];
//   const [teachers, setTeachers] = useState<ITeacher[]>([])
//   useEffect(()=> {
//     const getData = async() => {
//       const res = await fetchEducators()
//       setTeachers(res)
//     }
//     getData()
//   },[])
//   const educator = teachers?.find(item=> item?.id === id)
//   console.log(educator);
//   console.log(id);
//   console.log(teachers);

//   const locale = usePathname().split("/")[1]
//   return (
//     <section className="px-3 w-full flex justify-center py-[70px]">
//       <div className="max-w-[1320px] w-full">
//         <div className="flex gap-5 mb-2">
//           <div className="max-w-[400px] h-full flex flex-col gap-3 justify-between items-center">
//             <Image
//               src={educator?.image?.file as string}
//               alt={educator?.name_uz as string}
//               width={400}
//               height={700}
//               className=" rounded-[10px] mb-[10px] h-[515px] w-full object-cover"
//             />
//             <h4 className="text-[34px] font-[500] text-center">
//               {locale === "en" ? educator?.name_en : locale === "uz" ? educator?.name_uz : educator?.description_ru}
//             </h4>
//           </div>
//           <div className="flex flex-col items-start border border-[#404B7C] p-[30px] rounded-[10px] gap-5">
//             <h3 className="text-[40px] font-[400]">{data[0]?.title}</h3>
//             <div className="flex flex-col gap-5 max-w-[900px]">
//               {/* {educator?.map((item, index) => {
//                 return ( */}
//                   <div  className="flex flex-col items-start ">
//                     <span className="text-[20px] text-[#404B7C] font-[500]">
//                      {locale === "en" ? educator?.description_en : locale === "uz" ? educator?.description_uz : educator?.description_ru}
//                     </span>
//                     <span className="text-[24px] font-[500]">
//                       {locale === "en" ? educator?.description_en : locale === "uz" ? educator?.description_uz : educator?.description_ru}
//                     </span>
//                   </div>
//                 {/* );
//               })} */}
//             </div>
//             <div>
//               <h5 className="text-[20px]">Bog`lanish uchun:</h5>
//               <div className="flex">
//                 <div className="flex gap-10">
//                   <div className="mt-2 flex flex-col gap-2">
//                     <Link href={`tel:${educator?.contact}`} className="text-[20px] block">
//                       {educator?.contact}
//                     </Link>
//                     <Link href={""} className="text-[20px] block">
//                       +998 99 876 6522
//                     </Link>
//                   </div>
//                     <div className="grid grid-cols-2 items-center text-[22px]">
//                       <Link href={""} className=" flex items-center gap-2 mr-10">
//                         Telegram
//                         <FaTelegram />
//                       </Link>
//                       <Link href={""} className="flex items-center gap-2 ">
//                         Instagram
//                         <IoLogoInstagram size={30} />
//                       </Link>
//                       <Link href={""} className=" flex items-center gap-2 mr-10">
//                         Facebook
//                         <FaFacebook />
//                       </Link>
//                       <Link href={""} className="flex items-center gap-2 ">
//                         YouTube
//                         <FaYoutube size={30} />
//                       </Link>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center">
//           <div className="flex flex-col">
//             {/* <div className='flex flex-col gap-5 p-5 border border-[#404B7C] rounded-[10px] max-w-[400px]'>
//               {
//                 data[0]?.about?.map((item,index)=> {
//                   return <div  className='flex flex-col'>
//                     <span className='text-[20px] text-[#404B7C] font-[500]'>{item?.key}</span>
//                     <span className='text-[24px] font-[500]'>{item?.value}</span>
//                   </div>
//                 })
//               }
//             </div> */}
//             {/* <h4 className='text-[40px] font-[500] mb-[10px] mt-5'>{data[0]?.data?.title}</h4>
//             <div className='p-5 flex flex-col border border-[#404B7C] rounded-[10px] max-w-[400px]'>
//               <div>
//                 {
//                   data[0]?.data?.items?.map((item,index)=> {
//                     return <div key={index} className='flex flex-col'>
//                       <span className='text-[20px] text-[#404B7C] font-[500]'>{item?.key}</span>
//                       <span className='text-[24px] font-[500]'>{item?.value}</span>
//                   </div>
//                   })
//                 }
//               </div>
//             </div> */}
//           </div>
//           <div className="grid grid-cols-1 gap-10 w-[35%]">
//             {/* {
//               data[0]?.media?.map((item,index)=> {
//                 return <button key={index} className='text-[24px] p-4 rounded-[10px] bg-[#404B7C] text-white'>
//                   {item}
//                   </button>
//               })
//             } */}
//             {/* {
//               data[0]?.social?.map((item,index)=> {
//                 return <button key={index} className='text-[24px] flex items-center justify-center gap-[10px] p-4 rounded-[10px] border border-[#404B7C] text-[#404B7C]'>
//                   {item?.text}
//                   <Image src={item?.icon} alt={item?.text} width={100} height={200} className='w-6 h-6'/>
//                 </button>
//               })
//             } */}
//           </div>
//         </div>
//         <div className=" flex justify-center py-[70px]">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-[80%]">
//             {files?.map((item, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="flex gap-6 items-center max-w-[250px] relative"
//                 >
//                   <span
//                     className={`${
//                       item?.type === "doc" ? "bg-blue-600" : "bg-red-600"
//                     } uppercase px-1 text-white rounded-sm text-[10px] absolute top-4 left-[-12px]`}
//                   >
//                     {item?.type}
//                   </span>
//                   <Image
//                     src={item?.img}
//                     alt={`File ${index + 1}`}
//                     className="w-[60px] h-[80px]"
//                   />
//                   <span className="font-[500] text-[16px]">{item?.desc}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleEducator;
"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { KafedraTypes } from "@/app/types/all.types";
import FileLogo from "@/assets/file_logo.webp";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { fetchEducators } from "@/app/lib/actions";

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

const SingleEducator = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [teachers, setTeachers] = useState<KafedraTypes[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchEducators();
      setTeachers(res);
    };
    getData();
  }, []);

  const data = teachers?.find((item) => item?.id === id);
  // const educator = teachers?.find(item=> item?.id === id)

  const locale = usePathname().split("/")[1];
  // const decodedURL = 
  return (
    <section className="px-3 w-full flex h-[600px] justify-center py-[70px]">
      <div className="max-w-[1320px] w-full">
        <div className="flex justify-center gap-5 mb-2">
          <div className="max-w-[400px] h-full flex flex-col gap-3 justify-between items-center">
            <Image
              src={data?.image?.file as string}
              alt={data?.name_uz as string}
              width={400}
              height={700}
              className=" rounded-[10px] mb-[10px] h-[415px] w-full object-cover"
            />
            <h4 className="text-[24px] font-[500] text-center">
              {locale === "en"
                ? data?.name_en
                : locale === "uz"
                ? data?.name_uz
                : data?.description_ru}
            </h4>
          </div>
          <div className="flex flex-col items-start border h-[500px] overflow-y-auto border-[#404B7C] p-[30px] rounded-[10px] gap-1">
            <h3 className="text-[20px] font-[400]">
              {locale === "en"
                ? data?.name_en
                : locale === "uz"
                ? data?.name_uz
                : data?.name_ru}
            </h3>
            <div className="flex flex-col gap-2 max-w-[900px]">
              {/* {data?.map((item, index) => {
                return ( */}
              <div className="flex flex-col items-start ">
                {/* <span className="text-[20px] text-[#404B7C] font-[500]">
                     {locale === "en" ? data?.description_en : locale === "uz" ? data?.description_uz : data?.description_ru}
                    </span> */}
                <span
                  className="text-[20px] font-[500]"
                  dangerouslySetInnerHTML={{
                    __html:
                      l(
                        locale,
                        data?.description_uz,
                        data?.description_ru,
                        data?.description_en
                      )?.replace(/\n/g, "<br>") || "",
                  }}
                ></span>
              </div>
              {/* );
              })} */}
              <div>
                <h5 className="text-[20px]">Bog`lanish uchun:</h5>
                <div className="flex">
                  <div className="flex items-start gap-10">
                    <div className="mt-2 flex flex-col gap-2">
                      {data?.contact2 && (
                        <Link
                          href={`tel:${data?.contact2}`}
                          className="text-[20px] block"
                        >
                          {data?.contact2}
                        </Link>
                      )}
                      {/* <Link href={""} className="text-[20px] block">
                      +998 99 876 6522
                    </Link> */}
                    </div>
                    <div className="grid grid-cols-2 items-center text-[22px]">
                      {data?.telegram && (
                        <Link
                          href={data?.telegram}
                          className=" flex items-center gap-2 mr-10"
                        >
                          Telegram
                          <FaTelegram />
                        </Link>
                      )}
                      {data?.instagram && (
                        <Link
                          href={data?.instagram}
                          className="flex items-center gap-2 "
                        >
                          Instagram
                          <IoLogoInstagram size={30} />
                        </Link>
                      )}
                      {data?.facebook && (
                        <Link
                          href={data?.facebook}
                          className=" flex items-center gap-2 mr-10"
                        >
                          Facebook
                          <FaFacebook />
                        </Link>
                      )}
                      {data?.youtube && (
                        <Link
                          href={data?.youtube}
                          className="flex items-center gap-2 "
                        >
                          YouTube
                          <FaYoutube size={30} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 my-3">
                <button className="px-3 py-2 bg-[#404b7c] text-white hover:bg-[#404b7c] hover:text-white">{t("book")}</button>
                <button className="px-3 py-2 border-[#404b7c] hover:bg-[#404b7c] hover:text-white border text_main text-white">{t("cert")}</button>
              </div>
              <div className="flex flex-col items-start mt-1 gap-3 w-[80%]">
                {data?.files?.map((item, index) => {
                  return (
                    <Link
                      href={item?.file}
                      target="_blank"
                      key={index}
                      className="flex gap-3 items-center overflow-hidden  w-full relative"
                    >
                      {/* <span
                    className={`${
                      !item ? "bg-blue-600" : "bg-red-600"
                    } uppercase px-1 text-white rounded-sm text-[10px] absolute top-4 left-[0]`}
                  >
                    {"PDF"}
                  </span> */}
                      <Image
                        src={FileLogo}
                        alt={`File ${index + 1}`}
                        className="w-[25px] h-[30px]"
                      />
                      <span className="font-[500] text-[16px] max-w-[500px] w-full line-clamp-1">
                      {decodeURIComponent(item?.file?.split("/")[5])}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col">
            {/* <div className='flex flex-col gap-5 p-5 border border-[#404B7C] rounded-[10px] max-w-[400px]'>
              {
                data[0]?.about?.map((item,index)=> {
                  return <div  className='flex flex-col'>
                    <span className='text-[20px] text-[#404B7C] font-[500]'>{item?.key}</span>
                    <span className='text-[24px] font-[500]'>{item?.value}</span>
                  </div>
                })
              }
            </div> */}
            {/* <h4 className='text-[40px] font-[500] mb-[10px] mt-5'>{data[0]?.data?.title}</h4>
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
            </div> */}
          </div>
          <div className="grid grid-cols-1 gap-10 w-[35%]">
            {/* {
              data[0]?.media?.map((item,index)=> {
                return <button key={index} className='text-[24px] p-4 rounded-[10px] bg-[#404B7C] text-white'>
                  {item}
                  </button>
              })
            } */}
            {/* {
              data[0]?.social?.map((item,index)=> {
                return <button key={index} className='text-[24px] flex items-center justify-center gap-[10px] p-4 rounded-[10px] border border-[#404B7C] text-[#404B7C]'>
                  {item?.text}
                  <Image src={item?.icon} alt={item?.text} width={100} height={200} className='w-6 h-6'/>
                </button>
              })
            } */}
          </div>
        </div>
        <div className=" flex justify-center py-[70px]"></div>
      </div>
    </section>
  );
};

export default SingleEducator;
