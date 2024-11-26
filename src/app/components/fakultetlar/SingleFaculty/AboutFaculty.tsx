"use client";
import React from "react";
import FileLogo from "@/assets/file_logo.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./SingleFaculty.css";
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
  position_uz: string;
  position_ru: string;
  position_en: string;
  news_category: string; // Could also be a union type for categories (e.g., "SPORT")
  image: string;
  images: [
    {
      file: string;
    }
  ]; // Assuming this is an identifier for an image
}

const AboutFaculty = ({ item }: { item: NewsItem }) => {
  function l(
    locale: string | null | undefined,
    uz: string | null | undefined,
    ru: string | null | undefined,
    en: string | null | undefined
  ) {
    if (locale == "uz") return uz;
    if (locale == "ru") return ru;
    if (locale == "en") return en;
  }
  const locale = usePathname().split("/")[1];

  return (
    <section className={`flex justify-center w-full`}>
      <div className="max-w-[1300px] w-full flex flex-col ">
        {item?.kind === "IMAGE" && (
          <div>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6`}>
              {item?.images.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[10px] max-h-[250px] sm:max-h-[200px] md:max-h-[300px]  lg:h-[400px] `}
                >
                  <Image
                    width={500}
                    height={400}
                    src={item?.file}
                    alt={"images"}
                    className="hover:scale-105 transition-all w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-[24px] md:text-[32px] font-[600] mt-2">
              {locale === "uz"
                ? item?.title_uz
                : locale === "ru"
                ? item?.title_ru
                : item?.title_en}
            </h2>
          </div>
        )}
        {item?.kind === "TEXT" && (
          <div className="w-full flex flex-col gap-4 ">
            <h2 className="text-[20px] md:text-[32px] font-[600]">
              {locale === "uz"
                ? item?.title_uz
                : locale === "ru"
                ? item?.title_ru
                : item?.title_en}
            </h2>
            <p
              className="text-[16px] md:text-[22px] text-justify"
              dangerouslySetInnerHTML={{
                __html:
                  l(
                    locale,
                    item?.content_uz,
                    item?.content_ru,
                    item?.content_en
                  )?.replace(/\n/g, "<br>") || "",
              }}
            />
          </div>
        )}
        {item?.kind === "FILE" && (
          <div className="flex justify-center flex-col">
            <h2 className="text-[24px] mb-2 md:text-[32px] font-[600]">
              {locale === "uz"
                ? item?.title_uz
                : locale === "ru"
                ? item?.title_ru
                : item?.title_en}
            </h2>
            <div className="grid sm:grid-cols-2 max-w-[1200px] w-full lg:grid-cols-3 gap-6 px-4">
              {item?.images?.map((item, index) => (
                <Link
                  href={item?.file}
                  target="_blank"
                  key={index}
                  className="flex gap-6 items-center max-w-[250px] relative"
                >
                  {/* <span
                    className={`${
                      item?.file?.endsWith(".docx")
                        ? "bg-blue-600"
                        : "bg-red-600"
                    } uppercase px-1 text-white rounded-sm text-[10px] absolute top-4 left-[-12px]`}
                  >
                    {item?.file?.endsWith(".pdf") ? "PDF" : "DOC"}
                  </span> */}
                  <Image
                    src={FileLogo}
                    alt={`File ${index + 1}`}
                    className="w-[60px] h-[80px]"
                  />
                  <span className="font-[500] text-[16px] max-w-[240px] overflow-hidden line-clamp-1">
                    {item?.file?.split("/")[5]}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
        {item?.kind === "VIDEO" && (
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-[24px] self-start mb-2 md:text-[32px] font-[600]">
              {locale === "uz"
                ? item?.title_uz
                : locale === "ru"
                ? item?.title_ru
                : item?.title_en}
            </h2>
            {item?.images?.map((item, index) => (
              <div className="max-w-[800px]" key={index}>
                <video controls className="w-full h-auto">
                  <source src={item?.file} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        )}
        {item?.kind === "TEACHERS" && (
          <div className="flex flex-col items-center w-full justify-center gap-5">
            {/* <h2 className="text-[24px] self-start mb-2 md:text-[32px] font-[600]">
              {locale === "uz"
                ? item?.title_uz
                : locale === "ru"
                ? item?.title_ru
                : item?.title_en}
            </h2> */}
            <div className="flex flex-col sm:flex-row max-w-[350px] overflow-hidden sm:max-w-[1300px] sm:gap-[10px] md:gap-[40px] w-full px-0 sm:px-3 lg:px-8 py-0 sm:py-2 lg:py-5 rounded-xl border-[2px] shadow-md sm:shadow-none sm:border-[#404B7C]">
              <div className="sm:max-w-[200px] md:max-w-[300px] max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[350px] lg:max-w-[350px]">
                <Image
                  src={item?.images[0]?.file}
                  alt={item?.title_uz}
                  width={500}
                  height={500}
                  className="sm:rounded-xl h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-0">
                <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-[500]">
                  {locale === "uz"
                    ? item?.position_uz
                    : locale === "ru"
                    ? item?.position_ru
                    : item?.position_en}
                </h3>
                <h3 className="text-[18px] md:text-[20px] lg:text-[26px] mt-2 md:mt-8 font-[700]">
                  {locale === "uz"
                    ? item?.title_uz
                    : locale === "ru"
                    ? item?.title_ru
                    : item?.title_en}
                </h3>
                <p
                  className="md:text-[18px] lg:text-[20px] mt-3 links"
                  dangerouslySetInnerHTML={{
                    __html: (locale === "uz"
                      ? item?.content_uz
                      : locale === "ru"
                      ? item?.content_ru
                      : item?.content_en
                    ).replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {item?.kind === "STUDENTS" && (
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col md:flex-row w-full items-start gap-[40px] border-2 border-black rounded-[10px] p-3">
              <div className="max-w-[200px] w-full h-[200px] rounded-[10px] overflow-hidden">
                <Image
                  src={item?.images[0]?.file}
                  alt={item?.title_uz}
                  width={500}
                  height={500}
                  className="rounded-xl h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 lg:gap-[25px] w-full">
                <div className="flex justify-between w-full">
                  <h3 className="text-[24px] lg:text-[30px] font-[500]">
                    {" "}
                    {locale === "uz"
                      ? item?.title_uz
                      : locale === "ru"
                      ? item?.title_ru
                      : item?.title_en}
                  </h3>
                </div>
                <div className="flex w-full flex-col min-h-[120px] items-start gap-2 justify-between">
                  <p
                    className="text-[20px] mt-3 links"
                    dangerouslySetInnerHTML={{
                      __html: (locale === "uz"
                        ? item?.content_uz
                        : locale === "ru"
                        ? item?.content_ru
                        : item?.content_en
                      ).replace(/\n/g, "<br>"),
                    }}
                  />
                  <span className=" self-end text-[14px] italic">
                    {item?.created_at?.slice(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutFaculty;
