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
