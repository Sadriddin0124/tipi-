import { useTranslations } from "next-intl";
import React from "react";
import BannerImage from "@/assets/20230624_143131_CQGQN6G.webp";
import Image from "next/image";

const Banner = () => {
  const t = useTranslations();
  return (
    <div className="relative h-[403px] w-full">
      <div className="h-full w-full bg-black/50">
        <Image
          src={BannerImage}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-black/50 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-center text-white">
          {t("directions.title")}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
