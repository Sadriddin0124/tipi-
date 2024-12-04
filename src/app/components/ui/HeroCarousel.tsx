import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImage from "@/assets/hero.webp"
import HeroImgBlue from "@/assets/hero-blue.webp";
import { DataType } from "../home/Hero";

const HeroCarousel = ({
  data,
  FixedItem,
}: {
  data: DataType[];
  FixedItem: () => React.JSX.Element;
}) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
 
    const fileExtension = (url: string) => {
      return url?.split(".")?.pop()?.split("?")[0]?.toLowerCase();
    }
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div className="rounded-b-[20px] md:rounded-b-[40px] overflow-hidden max-h-[400px] slider-h">
        <Slider {...settings}>
            {data.map((item, index) => (
          <header key={index} className=" w-full relative">
            {fileExtension(item?.files[item?.files?.length - 1]?.file) === "mov" ? (
              <video
                autoPlay={true}
                loop 
                muted
                className="w-[100%] top-0 left-0 object-cover  slider-h max-h-[400px] md:max-h-[]"
              >
                <source src={item?.files[item?.files?.length - 1]?.file} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item?.files[item?.files?.length - 1]?.file|| HeroImage}
                alt="Hero Image"
                className="w-[100%] top-0 left-0 object-cover  slider-h max-h-[400px] md:max-h-[]"
                width={1400}
                height={600}
              />
            )}
          </header>
        ))}
        </Slider>
      </div>
      <div className="md:absolute top-[0] left-0 w-auto h-full bg-cover bg-center z-0">
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
