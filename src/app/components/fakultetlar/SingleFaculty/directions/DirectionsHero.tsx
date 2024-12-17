"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
// import HeroImg from "@/assets/hero.webp"
import HeroCarousel from "@/app/components/ui/HeroCarousel";
import { DirectionsType, fetchDirection, fetchHero } from "@/app/lib/fetchers";
import { usePathname, useSearchParams } from "next/navigation";
import { DataType } from "@/app/components/home/Hero";

const DirectionsHero = () => {
  const t = useTranslations();
  const id = useSearchParams()?.get("id");
  const [images, setImages] = useState<DataType[]>([]);
  const [title, setTitle] = useState<DirectionsType>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetchDirection(id as string);
      setTitle(res);
      const data = await fetchHero(id as string);
      setImages(data?.filter((item) => item?.page === id));
    };
    getData();
  }, [id]);
  const locale = usePathname()?.split("/")[1];
  const FixedItem = () => {
    return (
      <div className="md:absolute left-0 bottom-0  w-full h-full p-3 md:p-14 hidden md:flex items-end md:items-center justify-center md:justify-start">
        <h2 className="font-[500] text-[24px] bg-[#404b7cc7] px-6 py-4  md:text-[32px] min-w-[300px] text-black md:text-white">
          {locale === "uz"
            ? title?.title_uz
            : locale === "ru"
            ? title?.title_ru
            : title?.title_en}
        </h2>
      </div>
    );
  };
  return (
    <section>
      <HeroCarousel data={images} FixedItem={FixedItem} />
    </section>
  );
};

export default DirectionsHero;
