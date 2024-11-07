import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BreadcrumbItem, LangType } from '@/app/types/all.types';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  activeLang: LangType
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, activeLang }) => {
  const t = useTranslations()
  return (
    <nav className="flex space-x-1 text-sm font-medium self-start pb-5 max-w-[1400px] w-full mx-auto">
        <div className="flex items-center">
          <Link href="/" className='text-[18px]'>
            <span className="text-[#000000B2] hover:text-[#404B7C]">
              {t("path.mainPage")}
            </span>
          </Link>
            <span className="mx-1 text-[18px]">{'>'}</span>
        </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link href={`/${activeLang?.value}/${item.href}`} className='text-[18px]'>
            <span className="text-[#000000B2] hover:text-[#404B7C]">
              {item.label}
            </span>
          </Link>
          {index < items.length - 1 && (
            <span className="mx-1 text-[18px]">{'>'}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
