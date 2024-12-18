// import { useTranslations } from "next-intl";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { CategoryTypes, HoverItemType } from "../types/all.types";
// import Link from "next/link";
// import { fetchAboutTipi, fetchAdmin, fetchFaculties, fetchSections } from "../lib/actions";
// interface PropsHover {
//     id: number | undefined;
//     hoverStatus: number | undefined;
//     HoverComponentEnter: (id: number | undefined)=> void;
//     HoverComponentLeave: (id: number | undefined)=> void;
//     item1: HoverItemType[] | undefined;
//     item2: HoverItemType[] | undefined;
//     title1?: HoverItemType;
//     title2?: HoverItemType;
// }
// const HoverComponent = ({id, hoverStatus, title1, title2, HoverComponentEnter, HoverComponentLeave, item1, item2}: PropsHover) => {
//   const [hoverElementActive, setHoverElementActive] = useState<number | null | undefined>(0);
//   const pathname = usePathname().length
//   const [items1, setItems1] = useState<CategoryTypes[]>([])
//   const [items2, setItems2] = useState<CategoryTypes[]>([])
//   const openElement = (id: number | null | undefined) => {
//     setHoverElementActive(hoverElementActive === id ? 0 : id);
//   };
//   useEffect(()=> {
//     const getData = async () => {
//     const faculty = await fetchFaculties()
//     const sections = await fetchSections()
//     const about = await fetchAboutTipi()
//     const admin = await fetchAdmin()
//     setItems1(title1?.status === "faculty" ? faculty : title1?.status === "sections" ? sections : title1?.status === "about_tipi" ? about : [])
//     setItems2(title2?.status === "admin" ? admin : [])
//   }
//     getData()
//   },[title1?.status, title2?.status])
//   return (
//     <div className={`${hoverStatus === id ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} ${pathname < 4 ? "top-[110px]" : "top-[110px]" } transform transition-all duration-300 linear origin-top fixed z-50  h-[100vh] flex justify-center items-start`}>
//       <div
//         onMouseLeave={() => HoverComponentLeave(id)}
//         onMouseEnter={() => HoverComponentEnter(id)}
//         className={`p-6 max-w-[650px] min-h-[300px] h-auto gap-10 flex justify-between bg-white shadow-md border rounded-[10px]`}
//       >
//       {<div className="flex flex-col">
//         {title1 && <Link
//               href={title1?.href}
//                 className={"flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 hover:border-b-transparent ease-linear duration-200 border-b-2 items-center text-[18px]"}
//               >
//                 <IoIosArrowForward
//                   className="text-[18px]"
//                 />
//                 <span className="max-w-[250px] w-full relative flex justify-start group">{title1?.value}
//                   <span className={` left-[-24px] absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-[-3px]`}></span>
//                 </span>
//               </Link>}
//         {items1 && items1?.map((item, index) => {
//           return (
//               <Link
//               href={`${title1?.href}/${item?.id}`}
//               key={index}
//                 className={"flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"}
//                 onClick={() => openElement(item?.id)}
//               >
//                 <IoIosArrowForward
//                   className="text-[18px]"
//                 />
//                 <span className="max-w-[250px] w-full relative flex justify-start group">{item?.title_uz}
//                   <span className={`bottom-0" absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0`}></span>
//                 </span>
//               </Link>
//           );
//         })}
//       </div>}
//       {title2 && <div className="flex flex-col">
//         {title2 && <Link
//               href={title2?.href}
//                 className={"flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 hover:border-b-transparent ease-linear duration-200 border-b-2 items-center text-[18px]"}
//               >
//                 <IoIosArrowForward
//                   className="text-[18px]"
//                 />
//                 <span className="max-w-[250px] w-full relative flex justify-start group">{title2?.value}
//                   <span className={` left-[-24px] absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-[-3px]`}></span>
//                 </span>
//               </Link>}
//         {items2 && items2?.map((item, index) => {
//           return (
//               <Link
//               href={`${title2?.href}/${item?.place}`}
//               key={index}
//                 className={"flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"}
//                 onClick={() => openElement(item?.id)}
//               >
//                 <IoIosArrowForward
//                   className="text-[18px]"
//                 />
//                 <span className="max-w-[250px] w-full relative flex justify-start group">{item?.title_uz}
//                   <span className={`bottom-0" absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0`}></span>
//                 </span>
//               </Link>
//           );
//         })}
//       </div>}
//       </div>
//     </div>
//   );
// };

// export default HoverComponent;

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HoverItemType, LinkType } from "../types/all.types";
import Link from "next/link";
type TitleType = {
  title: string;
  href: string;
};
interface PropsHover {
  id: number | undefined;
  hoverStatus: number | undefined;
  HoverComponentEnter: (id: number | undefined) => void;
  HoverComponentLeave: (id: number | undefined) => void;
  title1: TitleType;
  title2: TitleType;
  item1: LinkType[] | HoverItemType[] | undefined;
  item2: HoverItemType[] | LinkType[] | undefined;
}
const HoverComponent = ({
  id,
  hoverStatus,
  HoverComponentEnter,
  HoverComponentLeave,
  item1,
  item2,
  title1,
  title2,
}: PropsHover) => {
  const [hoverElementActive, setHoverElementActive] = useState(0);
  const pathname = usePathname().length;
  const locale = usePathname()?.split("/")[1];
  const openElement = (id: number) => {
    setHoverElementActive(hoverElementActive === id ? 0 : id);
  };
  return (
    <div
      className={`${
        hoverStatus === id ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
      } ${
        pathname < 4 ? "top-[110px]" : "top-[150px]"
      } transform transition-all duration-300 linear origin-top fixed z-50  h-[100vh] flex justify-center items-start`}
    >
      <div
        onMouseLeave={() => HoverComponentLeave(id)}
        onMouseEnter={() => HoverComponentEnter(id)}
        className={`p-6 max-w-[850px] min-h-[300px] h-auto gap-10 flex justify-between bg-white shadow-md border rounded-[10px]`}
      >
        {item1 && (
          <div className="flex flex-col">
            <Link
            href={title1?.href}
              className={
                "text-black flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[18px]"
              }
              // onClick={() => openElement(item?.id)}
            >
              <IoIosArrowForward className="text-[18px]" />
              {title1?.title}
              {/* <span className="max-w-[250px] w-full relative flex justify-start group">
                  <span className={`bottom-[-5px] left-[-24px]" absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C]`}></span>
                </span> */}
            </Link>
            {item1?.map((item, index) => {
              return (
                item?.active && (
                <Link
                  href={item?.href ? item?.href : item?.name_uz && !item?.href ? `/${locale}/fakultetlar/${item?.id}` : `/${locale}/about?id=${item?.id}`}
                  // target={item?.target ? "_blank" : ""}
                  key={index}
                  className={
                    "flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"
                  }
                  // onClick={() => openElement(item?.id)}
                >
                  <IoIosArrowForward className="text-[18px]" />
                  <span className=" w-full relative flex justify-start group">
                    {locale === "uz"
                      ? item?.name_uz || item?.title_uz
                      : locale === "en"
                      ? item?.name_en || item?.title_en
                      : item?.name_ru || item?.title_ru}
                    <span
                      className={`absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0`}
                    ></span>
                  </span>
                </Link>
              ));
            })}
          </div>
        )}
        {item2 && (
          <div className="flex flex-col">
            <Link
            href={title2?.href}
              className={
                "text-black flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[18px]"
              }
              // onClick={() => openElement(item?.id)}
            >
              <IoIosArrowForward className="text-[18px]" />
              {title2?.title}
              {/* <span className="max-w-[250px] w-full relative flex justify-start group">
                  <span className={`bottom-[-5px] left-[-24px]" absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C]`}></span>
                </span> */}
            </Link>
            {item2?.map((item, index) => {
              return (
                item?.active && (
                  <Link
                  href={item?.href ? item?.href : `/${locale}/about?id=${item?.id}`}
                    // target={item?.target ? "_blank" : ""}
                    key={index}
                    className={
                      "flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"
                    }
                    // onClick={() => openElement(item?.id)}
                  >
                    <IoIosArrowForward className="text-[18px]" />
                    <span className=" w-full relative flex justify-start group">
                    {locale === "uz"
                      ? item?.name_uz || item?.title_uz
                      : locale === "en"
                      ? item?.name_en || item?.title_en
                      : item?.name_ru || item?.title_ru}
                      <span
                        className={`absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0`}
                      ></span>
                    </span>
                  </Link>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverComponent;
