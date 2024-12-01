import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BreadcrumbItem, LangType } from '@/app/types/all.types';
import { IoIosArrowForward, } from 'react-icons/io';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  activeLang: LangType
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, activeLang }) => {
  const t = useTranslations()
  return (
    <nav className="flex space-x-1 text-sm md:mt-3 font-medium self-start pb-[10px] max-w-[1400px] w-full mx-auto">
        <div className="flex items-center">
          <Link href="/" className='text-[12px] md:text-[18px]'>
            <span className="text-[#fff] hover:text-gray-400">
              {t("path.mainPage")}
            </span>
          </Link>
            <span className="mx-1 text-[12px] md:text-[18px] text-white">{'>'}</span>
        </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center text-white">
          <Link href={`/${activeLang?.value}/${item.href}`} className='text-[12px] md:text-[18px]'>
            <span className="text-[#fff] hover:text-gray-400">
              {item.label}
            </span>
          </Link>
          {index < items.length - 1 && (
            <span className="mx-1 text-[12px] md:text-[18px] text-white"><IoIosArrowForward /></span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
