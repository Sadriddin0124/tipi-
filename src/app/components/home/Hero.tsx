"use client";
import React, { useEffect, useState } from "react";
import HeroImgBlur from "@/assets/hero1.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchHero } from "@/app/lib/fetchers";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroImage from "@/assets/hero.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export type DataType = {
  files: { file: string }[];
  page: string;
};
const Hero = () => {
  const t = useTranslations();
  const btn = t("hero.btn");
  const [images, setImages] = useState<DataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchHero("home");
      setImages(data?.filter((item) => item?.page === "home"));
    };
    getData();
  }, []);

  function getType(url: string) {
    const fileExtension = url?.split(".")?.pop()?.split("?")[0].toLowerCase();
    return fileExtension; // This will return "mov" for a .mov file
  }
  console.log(images);

  return (
    <div className="pb-4 relative">
      <div className="rounded-b-[20px] md:rounded-b-[40px] overflow-hidden md:h-[400px] lg:h-[577px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000, // Delay in ms between each slide (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{
            clickable: true,
            enabled: false
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {images?.length === 0 && (
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
          {images?.length === 0 && (
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
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
              <header className=" w-full relative" data-aos="zoom-up">
                {getType(item?.files[0]?.file) === "mov" ? (
                  <video
                    autoPlay={true}
                    loop
                    muted
                    className="w-[100%] top-0 left-0 object-cover h-[300px] md:h-[577px]"
                  >
                    <source src={item?.files[0]?.file} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item?.files[0]?.file}
                    alt="Hero Image"
                    className="w-[100%] top-0 left-0 object-cover h-[300px] md:h-[577px]"
                    width={1400}
                    height={600}
                  />
                )}
              </header>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-0 left-0 w-[50%] md:w-auto h-full bg-cover bg-center z-0">
        <Image
          src={HeroImgBlur}
          alt="Hero Image Blur"
          className="lg:w-auto hidden md:block h-[300px] md:h-[577px]"
          width={500}
          height={400}
        />
        <div className="hidden sm:flex justify-center gap-5 w-[100%] h-full items-center absolute z-10 top-0 left-0">
          <button className="btn_gradient text-[14px] md:text-[24px] rounded-[10px] gap-1 sm:gap-3 text-white">
            <span className="flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3">
              {btn}
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
      <div className="sm:hidden flex justify-center">
        <button className="btn_gradient mt-6 text-[14px] md:text-[24px] rounded-[10px] gap-1 sm:gap-3 text-white">
          <span className="flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3">
            {btn}
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
