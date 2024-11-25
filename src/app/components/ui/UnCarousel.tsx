import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { NewsType } from '@/app/types/all.types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const UnCarousel = ({ data, category }: { data: NewsType[], category: string }) => {
  const t = useTranslations()

  const locale = usePathname().split("/")[1]


  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-max items-center flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
        {data?.filter(item=> item?.category === category)?.map((item, index) => (
          item?.active &&
          <div className='px-[2px] py-[30px] w-full max-w-[350px]' key={index}>
            <Link  href={`/${locale}/news?id=${item?.id}`} key={index} className='rounded-[10px] overflow-hidden shadow-lg flex flex-col'>
              <div className='bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center'>
                <Image src={item.image.file} alt={`Slide ${index + 1}`} className='w-full object-cover h-[180px]' width={500} height={400} />
              </div>
              <div className='pt-[26px] px-[18px] pb-[20px] text_main flex flex-col gap-4'>
                <span className='text-[20px] font-[600]'>{item?.created_at?.slice(0,10)}</span>
                <p className='text-[17px] min-h-[70px] font-[600] line-clamp-4 text-center leading-5'>{locale ==="ru" ? item?.name_ru : locale === "uz" ? item?.name_uz : item?.name_ru}</p>
                <Link
                        href={`/${locale}/news?id=${item?.id}`}
                        className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                      >
                        {t("pedagogue.btn")}
                      </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnCarousel
