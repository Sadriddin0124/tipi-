import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
interface PropsHover {
    id: number | undefined;
    hoverStatus: number | undefined;
    setHoverStatus: Dispatch<SetStateAction<number | undefined>>;
}
const HoverComponent = ({id, hoverStatus, setHoverStatus}: PropsHover) => {
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
    <div
      onMouseLeave={() => setHoverStatus(0)}
      className={`${
        id === 5 || id === 7
          ? "right-[-100px]"
          : id === 4 || id === 3 || id === 2
          ? ""
          : "left-[-100px] "
      } p-10 min-w-[1040px] w-full min-h-[200px] gap-10 flex justify-between bg-white shadow-md border absolute z-50 top-8 rounded-[10px]`}
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
              <div
                className={`${
                  item?.id === hoverElementActive
                    ? "h-auto flex flex-col pl-3"
                    : "h-0 overflow-hidden"
                } duration-300 ease-linear`}
              >
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
        <div
          className={`${
            7 === hoverElementActive
              ? "h-auto flex flex-col pl-3"
              : "h-0 overflow-hidden"
          } duration-300 ease-linear`}
        >
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
        <div
          className={`${
            8 === hoverElementActive
              ? "h-auto flex flex-col pl-3"
              : "h-0 overflow-hidden"
          } duration-300 ease-linear`}
        >
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
  );
};

export default HoverComponent;
