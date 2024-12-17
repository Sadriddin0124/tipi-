import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroImage from "@/assets/hero.webp";
import { DataType } from "../home/Hero";

const getFileExtension = (url: string): string | undefined => {
  return url?.split(".")?.pop()?.split("?")[0]?.toLowerCase();
};

const HeroCarousel = ({
  data,
  FixedItem,
}: {
  data: DataType[];
  FixedItem: () => React.JSX.Element;
}) => {
  const renderSlideContent = (fileUrl: string | undefined) => {
    const extension = getFileExtension(fileUrl as string);
    if (extension === "mov") {
      return (
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover slider-h max-h-[400px]"
          data-aos="zoom-up"
        >
          <source src={fileUrl} type="video/mp4" />
        </video>
      );
    }

    return (
      <Image
        src={fileUrl || HeroImage}
        alt="Hero Slide Image"
        className="w-full object-cover slider-h h-[400px] md:h-[800px] max-h-[400px]"
        width={1400}
        height={900}
        priority
        data-aos="zoom-up"
      />
    );
  };

  return (
    <div className="relative w-full h-auto overflow-hidden" data-aos="zoom-up">
      <div className="rounded-b-[20px] md:rounded-b-[40px] overflow-hidden slider-h max-h-[400px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop
          autoplay={{
            delay: 5000, // 5 seconds delay
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {data?.length === 0 && (
            <SwiperSlide>
              <Image
                className="opacity-0"
                priority
                src={HeroImage}
                alt="fd"
                width={345}
                height={345}
              />
            </SwiperSlide>
          )}
          {data?.length === 0 && (
            <SwiperSlide>
              <Image
                className="opacity-0"
                priority
                src={HeroImage}
                alt="fd"
                width={345}
                height={345}
              />
            </SwiperSlide>
          )}
          {data.length > 0 &&
            data.map((item, index) => (
              <SwiperSlide key={index}>
                <header className="w-full relative slider-h">
                  {renderSlideContent(
                    item?.files[item?.files?.length - 1]?.file
                  )}
                </header>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="md:absolute top-0 z-40 left-0 w-auto h-full hidden md:block bg-cover bg-center">
        <FixedItem />
        <div className="hidden absolute w-[150px] h-[140px] bottom-0 left-0 bg-white z-[-1]"></div>
      </div>
    </div>
  );
};

export default HeroCarousel;
