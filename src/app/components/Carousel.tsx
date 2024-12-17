import React from "react";
import Image from "next/image";
import { NewsType } from "@/app/types/all.types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';
import { Pagination, Autoplay } from 'swiper/modules';
const Carousel = ({
  data,
  category,
}: {
  data: NewsType[];
  category: string;
}) => {
  const locale = usePathname().split("/")[1];

  const t = useTranslations();
  
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={40}
    pagination={{
      clickable: true,
      enabled: true
    }}
    autoplay={{
      delay: 3000, // Delay in ms between each slide (3 seconds)
      disableOnInteraction: false, // Continue autoplay after user interaction
    }}
    loop={true}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
  >
      {data
        ?.filter((item) => item?.category === category)
        ?.map(
          (item, index) =>
            item?.active && (
              <SwiperSlide key={index}>
                <div className="px-[6px] py-[30px] flex justify-center w-full">
                <div className="rounded-[10px] max-w-[300px] overflow-hidden w-full shadow-lg flex flex-col">
                  <div className="bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center">
                    <Image
                      src={item.image.file}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover h-[180px]"
                      priority
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="pt-[26px] px-[18px] pb-[20px] text_main flex flex-col gap-4">
                    <span className="text-[20px] font-[600]">
                      {item?.created_at?.slice(0, 10)}
                    </span>
                    <p className="text-[17px] max-h-[50px] min-h-[60px] font-[600] line-clamp-3 overflow-hidden text-center leading-5">
                      {locale === "ru"
                        ? item?.name_ru
                        : locale === "uz"
                        ? item?.name_uz
                        : item?.name_ru}
                    </p>
                    <Link
                      href={`/${locale}/news?id=${item?.id}`}
                      className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                    >
                      {t("pedagogue.btn")}
                    </Link>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            )
        )}
    </Swiper>
  );
};

export default Carousel;
