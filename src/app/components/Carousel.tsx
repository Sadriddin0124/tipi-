import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { NewsType } from '@/app/types/all.types';

const Carousel = ({data}: {data: NewsType[]}) => {
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
            {data.map((item, index) => (
                <div className='px-[10px] py-[30px]' key={index}>
                    <div key={index} className='rounded-[10px] overflow-hidden shadow-lg flex flex-col'>
                      <div className='bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center'>
                      { item?.link  ? (
                          <iframe
                            height={180}
                            src={item.link}
                            className='w-full'
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        ) : <Image src={item?.img} alt={`Slide ${index + 1}`} className='w-full object-cover h-[180px]' width={500} height={400}/>}
                        </div>
                        <div className='pt-[26px] px-[18px] pb-[40px] text_main flex flex-col gap-4 ease-linear duration-200 hover:text-white hover:bg-[#404B7C]'>
                            <span className='text-[20px] font-[600]'>{item?.date}</span>
                            <p className='text-[17px] min-h-[140px] font-[600] line-clamp-5 text-center leading-5'>{item?.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
  )
}

export default Carousel
