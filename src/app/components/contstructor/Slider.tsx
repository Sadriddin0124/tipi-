"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
// import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AboutSliderType } from "@/app/types/all.types";





const ConstructorSlider = ({ data }: { data: AboutSliderType | null }) => {
  const t = useTranslations();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
      easing: "linear", // Animation easing
    });
  }, []);

  // console.log(`${BASE_URL}${data?.file?.file}`);

  return (
    <div className="pb-4 relative w-full">
      <header className=" w-full relative h-[377px] rounded-b-[20px] overflow-hidden">
        {data?.file?.file.split(".").pop() === "mov" ? (
          <video
            // controls
            autoPlay
            muted
            loop
            className="w-[100%] object-cover h-[300px] md:h-[377px]"
          >
            <source type="video/mp4" src={data?.file?.file} />
          </video>
        ) : (
          <Image
            src={data?.file?.file as string}
            alt="Hero Image"
            className="w-[100%] top-0 left-0 object-cover h-[300px] md:h-[377px]"
            width={1400}
            height={600}
            priority
          />
        )}
      </header>
    </div>
  );
};

export default ConstructorSlider;
