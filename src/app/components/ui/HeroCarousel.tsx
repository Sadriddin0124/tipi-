import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImage from "@/assets/hero.webp";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { DataType } from "../home/Hero";

const HeroCarousel = ({
  data,
  FixedItem,
}: {
  data: DataType[];
  FixedItem: () => React.JSX.Element;
}) => {

  const fileExtension = (url: string) => {
    return url?.split(".")?.pop()?.split("?")[0]?.toLowerCase();
  };
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div className="rounded-b-[20px] md:rounded-b-[40px] overflow-hidden max-h-[400px] slider-h">
        <Swiper
           slidesPerView={1}
           spaceBetween={0}
           loop={true}
           autoplay={{
             delay: 5000, // Delay in ms between each slide (3 seconds)
             disableOnInteraction: false, // Continue autoplay after user interaction
           }}
           pagination={{
             clickable: true,
             enabled: false,
           }}
           modules={[Pagination, Navigation, Autoplay]}
           className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <header className=" w-full relative slider-h">
                {fileExtension(item?.files[item?.files?.length - 1]?.file) ===
                "mov" ? (
                  <video
                    autoPlay={true}
                    loop
                    muted
                    className="w-[100%] top-0 left-0 object-cover  slider-h max-h-[400px] md:max-h-[]"
                  >
                    <source
                      src={item?.files[item?.files?.length - 1]?.file}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    src={
                      item?.files[item?.files?.length - 1]?.file || HeroImage
                    } 
                    alt="Hero Image"
                    className="w-[100%] top-0 left-0 object-cover slider-h h-full max-h-[400px] md:max-h-[]"
                    width={1400}
                    height={600}
                  />
                )}
              </header>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:absolute top-[0] z-40 left-0 w-auto h-full hidden md:block bg-cover bg-center">
        {/* <Image
          src={HeroImgBlue}
          alt="Hero Image"
          className="hidden md:block w-[70%] md:w-full  h-full object-cover"
          width={1400}
          height={600}
        /> */}
        <FixedItem />
        <div className="hidden absolute w-[150px] h-[140px] bottom-0 left-0 bg-white z-[-1]"></div>
      </div>
    </div>
  );
};

export default HeroCarousel;
