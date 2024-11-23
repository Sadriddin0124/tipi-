"use client";
import React from "react";
import FileLogo from "@/assets/file_logo.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export interface NewsItem {
  id: string;
  created_at: string; // ISO format timestamp
  updated_at: string; // ISO format timestamp
  title_uz: string;
  title_ru: string;
  title_en: string;
  kind: string; // Could be a union type if `kind` has specific values (e.g., "IMAGE")
  content_uz: string;
  content_ru: string;
  content_en: string;
  news_category: string; // Could also be a union type for categories (e.g., "SPORT")
  image: string; // Assuming this is an identifier for an image
  images: [
    {
      file: string;
    }
  ]; // Assuming this is an identifier for an image
}

const AboutFaculty = ({
  item,
}: {
  item: NewsItem;
}) => {

  const locale = usePathname().split("/")[1];
  console.log(locale);
  
  return (
    <section className={`flex justify-center px-3 `}>
      <div className="max-w-[1300px] w-full flex flex-col ">
        {item?.kind === "IMAGE" && <div className={`grid grid-cols-4 gap-3 md:gap-6`}>
          {item?.images.map(
            (item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[10px] max-h-[300px]  md:h-[400px] `}
                >
                  <Image
                    width={500}
                    height={400}
                    src={item?.file}
                    alt={"images"}
                    className="hover:scale-105 transition-all w-full h-full object-cover"
                  />
                </div>
              )
          )}
        </div>}
        {item?.kind === "TEXT" && <div className="w-full flex flex-col gap-10 ">
          {item?.title_uz && (
            <h2 className="text-[24px] md:text-[40px] mt-[29px] font-[600]">
              {locale === "uz" ? item?.title_uz : locale === "ru" ? item?.title_ru : item?.title_en}
            </h2>
          )}
          <p className="text-[16px] md:text-[22px]">
            {locale === "uz"
              ? item?.content_uz
              : locale === "ru"
              ? item?.content_ru
              : item?.content_en}
          </p>
        </div>}
        { item?.kind === "FILE" && <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 max-w-[1200px] w-full lg:grid-cols-3 gap-6 px-4">
            {item?.images?.map(
              (item, index) => (
                  <Link
                    href={item?.file}
                    target="_blank"
                    key={index}
                    className="flex gap-6 items-center max-w-[250px] relative"
                  >
                    <span
                      className={`${
                        item?.file?.endsWith(".docx")
                          ? "bg-blue-600"
                          : "bg-red-600"
                      } uppercase px-1 text-white rounded-sm text-[10px] absolute top-4 left-[-12px]`}
                    >
                      {item?.file?.endsWith(".pdf") ? "PDF" : "DOC"}
                    </span>
                    <Image
                      src={FileLogo}
                      alt={`File ${index + 1}`}
                      className="w-[60px] h-[80px]"
                    />
                    <span className="font-[500] text-[16px] max-w-[240px] line-clamp-1">
                      {item?.file?.split("/")[5]}
                    </span>
                  </Link>
                )
            )}
          </div>
        </div>}
        {item?.kind === "VIDEO" && <div className="flex flex-col items-center justify-center md:flex-row gap-5">
          {item?.images?.map(
            (item, index) => (
                <div className="max-w-[800px]" key={index}>
                  <video controls className="w-full h-auto">
                    <source src={item?.file} type="video/mp4" />
                  </video>
                </div>
              )
          )}
        </div>}
      </div>
    </section>
  );
};

export default AboutFaculty;
