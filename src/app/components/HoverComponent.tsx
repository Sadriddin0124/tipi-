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

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HoverItemType } from "../types/all.types";
import Link from "next/link";
interface PropsHover {
    id: number | undefined;
    hoverStatus: number | undefined;
    HoverComponentEnter: (id: number | undefined)=> void;
    HoverComponentLeave: (id: number | undefined)=> void;
    item1: HoverItemType[] | undefined;
    item2: HoverItemType[] | undefined;
}
const HoverComponent = ({id, hoverStatus, HoverComponentEnter, HoverComponentLeave, item1, item2}: PropsHover) => {
  const [hoverElementActive, setHoverElementActive] = useState(0);
  const pathname = usePathname().length

  const openElement = (id: number) => {
    setHoverElementActive(hoverElementActive === id ? 0 : id);
  };
  return (
    <div className={`${hoverStatus === id ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} ${pathname < 4 ? "top-[110px]" : "top-[110px]" } transform transition-all duration-300 linear origin-top fixed z-50  h-[100vh] flex justify-center items-start`}>
      <div
        onMouseLeave={() => HoverComponentLeave(id)}
        onMouseEnter={() => HoverComponentEnter(id)}
        className={`p-6 max-w-[650px] min-h-[300px] h-auto gap-10 flex justify-between bg-white shadow-md border rounded-[10px]`}
      >
      {item1 && <div className="flex flex-col">
        {item1?.map((item, index) => {
          return (
              <Link
              href={item?.href}
              target={item?.target ? "_blank" : ""}
              key={index}
                className={item?.status === "big" ? "flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 hover:border-b-transparent ease-linear duration-200 border-b-2 items-center text-[18px]" : "flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"}
                onClick={() => openElement(item?.id)}
              >
                <IoIosArrowForward
                  className="text-[18px]"
                />
                <span className="max-w-[250px] w-full relative flex justify-start group">{item?.value}
                  <span className={`${item?.status === "big" ? "bottom-[-5px] left-[-24px]" : "bottom-0"} absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0`}></span>
                </span>
              </Link>
          );
        })}
      </div>}
      {item2 && <div className="flex flex-col">
        {
          item2?.map((item,index)=> {
            return <Link
            href={item?.href} 
            key={index}
            target={item?.target ? item?.target : ""}
            className={item?.status === "big" ? "relative group flex w-full mb-[10px] group min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[18px]" : "flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"}
            onClick={() => openElement(7)}
          >
            <IoIosArrowForward />
            <span className="max-w-[250px] w-full relative flex justify-start group">{item?.value}
                  <span className={`${item?.status === "big" ? "bottom-[-5px] left-[-24px]" : "bottom-0"} absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0`}></span>
                </span>
          </Link>
          })
        }
      </div>}
      </div>
    </div>
  );
};

export default HoverComponent;
