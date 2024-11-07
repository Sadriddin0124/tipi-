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
    <div className={`${hoverStatus === id ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} ${pathname < 4 ? "top-[150px]" : "top-[190px]" } transform transition-all duration-300 linear origin-top fixed z-50 left-0 w-full h-[100vh] flex justify-center items-start`}>
      <div
      onMouseLeave={() => HoverComponentLeave(id)}
      onMouseEnter={() => HoverComponentEnter(id)}
      className={`p-10 max-w-[650px] h-auto gap-10 flex justify-between bg-white shadow-md border rounded-[10px]`}
    >
      {item1 && <div className="flex flex-col">
        {item1?.map((item, index) => {
          return (
              <Link
              href={"/"}
              key={index}
                className={item?.status === "big" ? "flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]" : "flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"}
                onClick={() => openElement(item?.id)}
              >
                <IoIosArrowForward
                  className="text-[20px]"
                />
                <span className="max-w-[250px] w-full">{item?.value}</span>
              </Link>
          );
        })}
      </div>}
      {item2 && <div className="flex flex-col">
        {
          item2?.map((item,index)=> {
            return <Link
            href={"/"} 
            key={index}
            className={item?.status === "big" ? "flex w-full mb-[10px] min-w-[250px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]" : "flex gap-2 font-[400] text-[16px] pl-3 items-center text-[#404B7C]"}
            onClick={() => openElement(7)}
          >
            <IoIosArrowForward />
            <span className="max-w-[250px] w-full">{item?.value}</span>
          </Link>
          })
        }
      </div>}
      </div>
    </div>
  );
};

export default HoverComponent;
