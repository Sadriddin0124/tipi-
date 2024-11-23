import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { NewsType } from '@/app/types/all.types';
import { usePathname } from 'next/navigation';

const UnCarousel = ({ data, category }: { data: NewsType[], category: string }) => {


  const locale = usePathname().split("/")[1]


  return (
    <div className='w-full grid grid-cols-4 gap-2'>
      {data?.filter(item=> item?.category === category)?.map((item, index) => (
        item?.active &&
        <div className='px-[10px] py-[30px]' key={index}>
          <div key={index} className='rounded-[10px] overflow-hidden shadow-lg flex flex-col'>
            <div className='bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center'>
              <Image src={item.image.file} alt={`Slide ${index + 1}`} className='w-full object-cover h-[180px]' width={500} height={400} />
            </div>
            <div className='pt-[26px] px-[18px] pb-[40px] text_main flex flex-col gap-4 ease-linear duration-200 hover:text-white hover:bg-[#404B7C]'>
              <span className='text-[20px] font-[600]'>{item?.created_at?.slice(0,10)}</span>
              <p className='text-[17px] min-h-[100px] font-[600] line-clamp-5 text-center leading-5'>{locale ==="ru" ? item?.name_ru : locale === "uz" ? item?.name_uz : item?.name_ru}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UnCarousel
