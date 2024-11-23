import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { NewsType } from '@/app/types/all.types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Carousel = ({ data, category }: { data: NewsType[], category: string }) => {


  const locale = usePathname().split("/")[1]
  

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {data?.filter(item=> item?.category === category)?.map((item, index) => (
        item?.active &&
        <div className='px-[10px] py-[30px]' key={index}>
          <Link href={`${locale}/about?id=${item?.id}`} key={index} className='rounded-[10px] overflow-hidden shadow-lg flex flex-col'>
            <div className='bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center'>
              <Image src={item.image.file} alt={`Slide ${index + 1}`} className='w-full object-cover h-[180px]' width={500} height={400} />
            </div>
            <div className='pt-[26px] px-[18px] pb-[40px] text_main flex flex-col gap-4'>
              <span className='text-[20px] font-[600]'>{item?.created_at?.slice(0,10)}</span>
              <p className='text-[17px] min-h-[100px] font-[600] line-clamp-5 text-center leading-5'>{locale ==="ru" ? item?.name_ru : locale === "uz" ? item?.name_uz : item?.name_ru}</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
