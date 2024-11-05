import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
interface PropsHover {
    id: number | undefined;
    hoverStatus: number | undefined;
    HoverComponentEnter: (id: number | undefined)=> void;
    HoverComponentLeave: (id: number | undefined)=> void;
}
const HoverComponent = ({id, hoverStatus, HoverComponentEnter, HoverComponentLeave}: PropsHover) => {
  const t = useTranslations();
  const HoverElements = [
    {
      id: 1,
      value: t("hover.title1"),
    },
    {
      id: 2,
      value: t("hover.title2"),
    },
    {
      id: 3,
      value: t("hover.title3"),
    },
    {
      id: 4,
      value: t("hover.title4"),
    },
    {
      id: 5,
      value: t("hover.title5"),
    },
    {
      id: 6,
      value: t("hover.title6"),
    },
  ];
  const HoverElementsIn = [
    {
      id: 1,
      value: t("hover.title_in1"),
    },
    {
      id: 2,
      value: t("hover.title_in2"),
    },
    {
      id: 3,
      value: t("hover.title_in3"),
    },
    {
      id: 4,
      value: t("hover.title_in4"),
    },
    {
      id: 5,
      value: t("hover.title_in5"),
    },
  ];
  const [hoverElementActive, setHoverElementActive] = useState(0);
  const openElement = (id: number) => {
    setHoverElementActive(hoverElementActive === id ? 0 : id);
  };
  return (
    <div className={`${hoverStatus === id ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} transform transition-all duration-300 linear origin-top fixed z-50 top-[158px] left-0 w-full h-[100vh] flex justify-center items-start`}>
      <div
      onMouseLeave={() => HoverComponentLeave(id)}
      onMouseEnter={() => HoverComponentEnter(id)}
      className={`p-10 max-w-[1040px] w-full h-auto gap-10 flex justify-between bg-white shadow-md border rounded-[10px]`}
    >
      <div className="flex flex-col">
        {/* Hover Elements */}
        {HoverElements?.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex w-full max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]"
                onClick={() => openElement(item?.id)}
              >
                <IoIosArrowForward
                  size={24}
                  className={
                    item?.id === hoverElementActive
                      ? "rotate-[90deg] duration-200 ease-linear"
                      : "duration-200 ease-linear"
                  }
                />
                <span className="max-w-[280px] w-full">{item?.value}</span>
              </div>
              {/* Hover elements Inside */}
              <div className={`${ item?.id === hoverElementActive ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0" } transform transition-all duration-300 linear origin-top flex flex-col pl-3`}>
                {HoverElementsIn?.map((item, index) => {
                  return (
                    <div
                      className="flex gap-2 items-center pb-1 pt-3 border-b-2 text-[#404B7C]"
                      key={index}
                    >
                      <IoIosArrowForward size={24} />
                      <span>{item?.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <div
          className="flex w-full max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]"
          onClick={() => openElement(7)}
        >
          <IoIosArrowForward
            size={24}
            className={
              id === hoverElementActive
                ? "rotate-[90deg] duration-200 ease-linear"
                : "duration-200 ease-linear"
            }
          />
          <span className="max-w-[280px] w-full">{t("hover.title7")}</span>
        </div>
        {/* Hover elements Inside */}
        <div className={`${ 7 === hoverElementActive ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0" } transform transition-all duration-300 linear origin-top flex flex-col pl-3`}>
          {HoverElementsIn?.map((item, index) => {
            return (
              <div
                className="flex gap-2 items-center pb-1 pt-3 border-b-2 text-[#404B7C]"
                key={index}
              >
                <IoIosArrowForward size={24} />
                <span>{item?.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className="flex w-full max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]"
          onClick={() => openElement(8)}
        >
          <IoIosArrowForward
            size={24}
            className={
              id === hoverElementActive
                ? "rotate-[90deg] duration-200 ease-linear"
                : "duration-200 ease-linear"
            }
          />
          <span className="max-w-[280px] w-full">{t("hover.title8")}</span>
        </div>
        {/* Hover elements Inside */}
        <div className={`${ 8 === hoverElementActive ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0" } transform transition-all duration-300 linear origin-top flex flex-col pl-3`}>
          {HoverElementsIn?.map((item, index) => {
            return (
              <div
                className="flex gap-2 items-center pb-1 pt-3 border-b-2 text-[#404B7C]"
                key={index}
              >
                <IoIosArrowForward size={24} />
                <span>{item?.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HoverComponent;
