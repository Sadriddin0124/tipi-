// components/Dropdown.tsx
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = () => {
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
    <div className="flex flex-col pl-3">
        {/* Hover Elements */}
        {HoverElements?.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex w-full justify-between hover:text-[#404B7C] max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[18px]"
                onClick={() => openElement(item?.id)}
              >
                <span className="max-w-[280px] w-full">{item?.value}</span>
                <IoIosArrowDown
                  size={20}
                  className={
                    item?.id === hoverElementActive
                      ? "rotate-[180deg] duration-200 ease-linear"
                      : "duration-200 ease-linear"
                  }
                />
              </div>
              {/* Hover elements Inside */}
              <div className={`${ item?.id === hoverElementActive ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0" } transform transition-all duration-300 linear origin-top flex flex-col pl-3`}>
                {HoverElementsIn?.map((item, index) => {
                  return (
                    <div
                      className="flex gap-2 items-center justify-between text-[16px] pb-1 pt-3 border-b-2 hover:text-[#404B7C]"
                      key={index}
                    >
                      <span>{item?.value}</span>
                      <IoIosArrowDown size={18} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default Dropdown;
