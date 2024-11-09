import { IoIosArrowForward } from 'react-icons/io';
import { HoverItemType } from '../types/all.types';
import Link from 'next/link';

interface DropDownProps {
  id: number | undefined;
  closeDropDown: (id: number | undefined)=> void;
  item1: HoverItemType[] | undefined;
  item2: HoverItemType[] | undefined;
}

const Dropdown: React.FC<DropDownProps> = ({ id, closeDropDown, item1, item2 }) => {
  return (
    <div className="flex flex-col absolute top-6 z-50 min-w-[300px] w-full shadow-md">
      {item1 && <div className="flex flex-col bg-white">
        {item1?.map((item, index) => {
          return (
              <Link
              href={item?.href}
              key={index}
                className="hover:bg-[#404B7C] hover:text-white text-[#404B7C] flex items-center gap-1 px-3 py-2"
                onClick={() => closeDropDown(id)}
              >
                <IoIosArrowForward
                  className="text-[16px]"
                />
                <span className="max-w-[250px] w-full text-[16px] relative flex justify-start group">{item?.value}</span>
              </Link>
          );
        })}
      </div>}
      {item2 && <div className="flex flex-col bg-white">
        {item2?.map((item, index) => {
          return (
              <Link
              href={"/"}
              key={index}
                className="hover:bg-[#404B7C] hover:text-white text-[#404B7C] flex items-center gap-1 px-3 py-2"
                onClick={() => closeDropDown(id)}
              >
                <IoIosArrowForward
                  className="text-[16px]"
                />
                <span className="max-w-[250px] w-full relative flex justify-start group">{item?.value}</span>
              </Link>
          );
        })}
      </div>}
    </div>
  );
};

export default Dropdown;
