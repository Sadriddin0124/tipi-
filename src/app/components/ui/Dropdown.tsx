import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { HoverItemType } from "@/app/types/all.types";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface DropDownProps {
  id: number | undefined;
  closeDropDown: (id: number | undefined) => void;
  item1: HoverItemType[] | undefined;
  item2: HoverItemType[] | undefined;
  title1: string | undefined;
  title2: string | undefined;
  setAppBar: Dispatch<SetStateAction<boolean>>
}

const Dropdown: React.FC<DropDownProps> = ({
  id,
  closeDropDown,
  title1,
  title2,
  item1,
  item2,
  setAppBar
}) => {
  const locale = usePathname()?.split("/")[1];

  return (
    <div className="flex flex-col absolute top-6 z-50 min-w-[300px] overflow-y-auto max-h-[380px] bg-white w-full shadow-md">
      {item1 && (
        <div className="flex flex-col bg-white">
          <div
            className="hover:bg-[#404B7C] hover:text-white text-[#000] flex items-center gap-1 px-3 py-2"
            onClick={() => closeDropDown(id)}
          >
            <IoIosArrowForward className="text-[16px]" />
            <span className="max-w-[250px] w-full relative flex justify-start group">
              {title1}
            </span>
          </div>
          {item1?.map((item, index) => {
            return (
              <Link
                href={item?.href ? item?.href : item?.teachers ? `/${locale}/fakultetlar/${item?.id}` : `/${locale}/about?id=${item?.id}`}
                key={index}
                className="hover:bg-[#404B7C] hover:text-white text-[#404B7C] flex items-center gap-1 px-5 py-2"
                onClick={() => {
                  closeDropDown(id)
                  setAppBar(false)
                }}
              >
                <IoIosArrowForward className="text-[16px]" />
                <span className="max-w-[250px] w-full text-[16px] relative flex justify-start group">
                  {locale === "uz"
                    ? item?.name_uz || item?.title_uz
                    : locale === "en"
                    ? item?.name_en || item?.title_en
                    : item?.name_ru || item?.title_ru}
                </span>
              </Link>
            );
          })}
        </div>
      )}
      {item2 && (
        <div className="flex flex-col bg-white">
          <div
            className="hover:bg-[#404B7C] hover:text-white text-[#000] flex items-center gap-1 px-3 py-2"
            onClick={() => closeDropDown(id)}
          >
            <IoIosArrowForward className="text-[16px]" />
            <span className="max-w-[250px] w-full relative flex justify-start group">
              {title2}
            </span>
          </div>
          {item2?.map((item, index) => {
            return (
              <Link
                href={
                  item?.href ? item?.href : `/${locale}/about?id=${item?.id}`
                }
                key={index}
                className="hover:bg-[#404B7C] hover:text-white text-[#404B7C] flex items-center gap-1 px-5 py-2"
                onClick={() => closeDropDown(id)}
              >
                <IoIosArrowForward className="text-[16px]" />
                <span className="max-w-[250px] w-full relative flex justify-start group">
                  {locale === "uz"
                    ? item?.name_uz || item?.title_uz
                    : locale === "en"
                    ? item?.name_en || item?.title_en
                    : item?.name_ru || item?.title_ru}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
