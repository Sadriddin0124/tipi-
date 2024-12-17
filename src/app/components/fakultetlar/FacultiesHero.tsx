"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../ui/HeroCarousel";
import { fetchHero } from "@/app/lib/fetchers";
import { DataType } from "../home/Hero";

const FacultiesHero = () => {
  const t = useTranslations();
  const [images, setImages] = useState<DataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchHero("faculties");
      setImages(data?.filter((item) => item?.page === "faculties"));
    };
    getData();
  }, []);
  
  const FixedItem = () => {
    return (
      <div className="md:absolute left-0 bottom-0  w-full h-full p-3 md:p-14 hidden md:flex items-end md:items-center justify-center md:justify-start">
        <h2 className="font-[500] text-[24px] bg-[#404b7cc7] px-6 py-4  md:text-[32px] min-w-[300px] text-black md:text-white">
          {t("fakultetlarHero.title")}
        </h2>
      </div>
    );
  };
  return (
    <section>
      {images.length ? <HeroCarousel data={images} FixedItem={FixedItem} /> : ""}
    </section>
  );
};

export default FacultiesHero;
