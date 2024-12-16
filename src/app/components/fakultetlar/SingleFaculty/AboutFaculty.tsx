"use client";
import React, { Dispatch, SetStateAction } from "react";
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

const AboutFaculty = ({
  item,
  setPopUp,
}: {
  item: NewsItem;
  setPopUp: Dispatch<SetStateAction<string>>;
}) => {
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
    <section className={`flex justify-center w-full `}>
      <div className="max-w-[1400px] w-full flex flex-col ">
        {item?.kind === "IMAGE" && (
          <div>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6`}>
              {item?.images.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[10px] max-h-[250px] sm:max-h-[200px] md:max-h-[300px]  lg:h-[400px] `}
                  onClick={() => setPopUp(item?.file)}
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
                  className="flex gap-6 items-center max-w-[450px] overflow-hidden relative"
                >
                  <Image
                    src={FileLogo}
                    alt={`File ${index + 1}`}
                    className="w-[60px] h-[80px]"
                  />
                  <p
                    className="font-[500] text-[16px] max-w-[440px] block overflow-hidden line-clamp-1"
                    title={decodeURIComponent(item?.file?.split("/")[5])}
                  >
                    {item?.file &&
                      decodeURIComponent(item.file.split("/")[5])
                        .split("_")
                        .join(" ")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        {item?.kind === "VIDEO" && (
          <div className="flex flex-col items-center justify-start gap-5">
            {/* {item?.images?.map((item, index) => ( */}
            {/* ))} */}
            <h2 className="text-[24px] self-start mb-2 md:text-[32px] font-[600]">
              {locale === "uz"
                ? item?.title_uz
                : locale === "ru"
                ? item?.title_ru
                : item?.title_en}
            </h2>
            <div className="max-w-[800px] bg-black w-full">
              <video
                controls
                className="w-full h-auto object-fit"
                style={{ aspectRatio: "16/9" }}
              >
                <source src={item?.images[0]?.file} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
        {item?.kind === "TEACHERS" &&
          (item?.news_category === "SCIENCE" ||
            item?.news_category === null ||
            item?.news_category === "") && (
            <div className="flex flex-col items-center w-full mx-auto max-w-[400px] md:max-w-[100%] relative h-full justify-center gap-5 md:p-5 lg:p-10 border rounded-[10px] md:border-[#404B7C] shadow-md">
              {/* <Image src={Logo} alt="Logo" width={150} height={150} className="w-[100px] h-[100px] absolute right-[15px] top-[15px]"/> */}
              <div className="w-full md:h-[350px] lg:h-[450px] flex flex-col md:flex-row justify-between gap-3 md:gap-8">
                <div
                  className="md:max-w-[350px] h-[350px] lg:h-[450px] lg:max-w-[450px] xl:max-w-[450px] w-full"
                  onClick={() => setPopUp(item?.images[0]?.file)}
                >
                  <Image
                    src={item?.images[0]?.file}
                    alt={item?.title_uz}
                    width={500}
                    height={500}
                    className="rounded-t-[10px] md:rounded-[10px] w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-0 sm:py-3 justify-center w-full flex flex-col lg:gap-[35px] max-w-[680px]">
                  <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-[500]">
                    {locale === "uz"
                      ? item?.position_uz
                      : locale === "ru"
                      ? item?.position_ru
                      : item?.position_en}
                  </h3>
                  <h3 className="text-[18px] md:text-[20px] lg:text-[26px] font-[400]">
                    {locale === "uz"
                      ? item?.title_uz
                      : locale === "ru"
                      ? item?.title_ru
                      : item?.title_en}
                  </h3>
                  <p
                    className="md:text-[18px] lg:text-[26px] links md:leading-[50px]"
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
        {item?.kind === "TEACHERS" && item?.news_category === "SPORT" && (
          <div className="flex flex-col items-center w-full h-full justify-center gap-5">
            <div className="flex flex-col min-h-[200px] md:h-[300px] md:flex-row max-w-[400px] overflow-hidden md:max-w-[1000px] sm:gap-[10px] md:gap-[25px] w-full rounded-xl border-[2px] shadow-md  sm:border">
              <div
                className="sm:max-w-[100%] md:max-w-[300px] max-h-[300px] sm:h-[350px] md:h-[300px] h-full lg:max-h-[450px] w-full lg:max-w-[300px]"
                onClick={() => setPopUp(item?.images[0]?.file)}
              >
                <Image
                  src={item?.images[0]?.file}
                  alt={item?.title_uz}
                  width={500}
                  height={500}
                  className="sm:rounded-l-xl h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-3 sm:py-3 flex flex-col lg:gap-2">
                <h3 className="text-[20px] md:text-[24px] lg:text-[20px] font-[500]">
                  {locale === "uz"
                    ? item?.position_uz
                    : locale === "ru"
                    ? item?.position_ru
                    : item?.position_en}
                </h3>
                <h3 className="text-[18px] md:text-[20px] lg:text-[20px] mt-2 md:mt-4 lg:mt-1 font-[700]">
                  {locale === "uz"
                    ? item?.title_uz
                    : locale === "ru"
                    ? item?.title_ru
                    : item?.title_en}
                </h3>
                <p
                  className="md:text-[18px] lg:text-[20px] mt-3 lg:mt-1 links"
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
            <div className="flex flex-col max-w-[400px] overflow-hidden sm:max-w-[100%] sm:h-[200px] sm:flex-row w-full shadow-sm items-start gap-2 sm:gap-[40px] border rounded-[10px]">
              <div
                className="sm:max-w-[200px] w-full h-full rounded-l-[10px] overflow-hidden"
                onClick={() => setPopUp(item?.images[0]?.file)}
              >
                <Image
                  src={item?.images[0]?.file}
                  alt={item?.title_uz}
                  width={500}
                  height={500}
                  className="h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 px-3 sm:px-0 py-2 lg:gap-[15px] w-full">
                <div className="flex justify-between w-full">
                  <h3 className="text-[24px] lg:text-[20px] xl:text-[26px] font-[500]">
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
                    className="text-[20px] links sm:line-clamp-2 overflow-hidden"
                    dangerouslySetInnerHTML={{
                      __html: (locale === "uz"
                        ? item?.content_uz
                        : locale === "ru"
                        ? item?.content_ru
                        : item?.content_en
                      ).replace(/\n/g, "<br>"),
                    }}
                  />
                  {/* <span className=" self-end text-[14px] italic">
                    {item?.created_at?.slice(0, 10)}
                  </span> */}
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
