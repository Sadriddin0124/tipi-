"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
// import HeroImg from "@/assets/hero.webp"
import HeroCarousel from "@/app/components/ui/HeroCarousel";
import { DirectionsType, fetchDirection } from "@/app/lib/fetchers";
import { usePathname, useSearchParams } from "next/navigation";

const DirectionsHero = () => {
  const t = useTranslations();
  const id = useSearchParams()?.get("id");
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<DirectionsType>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetchDirection(id as string);
      console.log(res);
      setTitle(res);
      setImage(`https://api.tipi.sectorsoft.uz${res?.image?.file}`);
    };
    getData();
  }, [id]);
  const locale = usePathname()?.split("/")[1];
  const FixedItem = () => {
    return (
      <div className="md:absolute left-0 bottom-0  w-full h-full p-3 md:p-14 hidden md:flex items-end md:items-center justify-center md:justify-start">
        <h2 className="font-[500] text-[24px] md:text-[26px] max-w-[300px] text-center text-black md:text-white">
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
      <HeroCarousel data={image} FixedItem={FixedItem} />
    </section>
  );
};

export default DirectionsHero;
