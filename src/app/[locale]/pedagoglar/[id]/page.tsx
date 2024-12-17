"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { KafedraTypes } from "@/app/types/all.types";
import FileLogo from "@/assets/file_logo.webp";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { fetchEducators } from "@/app/lib/actions";

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

const SingleEducator = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [teachers, setTeachers] = useState<KafedraTypes[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchEducators();
      setTeachers(res);
    };
    getData();
  }, []);

  const data = teachers?.find((item) => item?.id === id);
  
  // const educator = teachers?.find(item=> item?.id === id)

  const locale = usePathname().split("/")[1];
  const [active, setActive] = useState<boolean>(false)
  return (
    <section className="md:px-3 w-full flex h-[90vh] md:h-auto overflow-y-auto md:overflow-y-visible min-h-[600px] justify-center py-10 md:py-[70px]">
      <div className="max-w-[1320px] w-full">
        <div className="flex justify-center pr-3 flex-col md:flex-row gap-5 mb-2">
          <div className="max-w-[330px] w-full flex flex-col gap-3 justify-start items-center">
            <Image
              src={data?.image?.file as string}
              alt={data?.name_uz as string}
              width={400}
              height={700}
              className=" rounded-[10px] mb-[10px] h-[350px] lg:h-[415px] w-full object-cover"
            />
            <h4 className="text-[20px] lg:text-[24px] font-[500] text-center">
              {locale === "en"
                ? data?.name_en
                : locale === "uz"
                ? data?.name_uz
                : data?.description_ru}
            </h4>
          </div>
          <div className="flex flex-col items-start md:border md:h-full max-h-[550px] w-full md:overflow-y-auto md:border-[#404B7C] md:p-[30px] rounded-[10px] gap-1">
            <h3 className="text-[20px] font-[400]">
              {locale === "en"
                ? data?.name_en
                : locale === "uz"
                ? data?.name_uz
                : data?.name_ru}
            </h3>
            <div className="flex flex-col gap-2 mx-auto w-full max-w-[900px]">
              {/* {data?.map((item, index) => {
                return ( */}
              <div className="flex flex-col items-start ">
                {/* <span className="text-[20px] text-[#404B7C] font-[500]">
                     {locale === "en" ? data?.description_en : locale === "uz" ? data?.description_uz : data?.description_ru}
                    </span> */}
                <span
                  className="text-[20px] font-[500]"
                  dangerouslySetInnerHTML={{
                    __html:
                      l(
                        locale,
                        data?.description_uz,
                        data?.description_ru,
                        data?.description_en
                      )?.replace(/\n/g, "<br>") || "",
                  }}
                ></span>
              </div>
              {/* );
              })} */}
              <div>
                <h5 className="text-[20px]">Bog‘lanish uchun:</h5>
                <div className="flex ">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-10">
                    <div className="mt-2 flex flex-col gap-2 whitespace-nowrap">
                      {data?.contact2 && (
                        <Link
                          href={`tel:${data?.contact2}`}
                          className="text-[20px] block"
                        >
                          {data?.contact2}
                        </Link>
                      )}
                      {/* <Link href={""} className="text-[20px] block">
                      +998 99 876 6522
                    </Link> */}
                    </div>
                    <div className="grid lg:grid-cols-2 items-center text-[22px]">
                      {data?.telegram && (
                        <Link
                          href={data?.telegram}
                          className=" flex items-center gap-2 mr-10"
                        >
                          Telegram
                          <FaTelegram />
                        </Link>
                      )}
                      {data?.instagram && (
                        <Link
                          href={data?.instagram}
                          className="flex items-center gap-2 "
                        >
                          Instagram
                          <IoLogoInstagram size={30} />
                        </Link>
                      )}
                      {data?.facebook && (
                        <Link
                          href={data?.facebook}
                          className=" flex items-center gap-2 mr-10"
                        >
                          Facebook
                          <FaFacebook />
                        </Link>
                      )}
                      {data?.youtube && (
                        <Link
                          href={data?.youtube}
                          className="flex items-center gap-2 "
                        >
                          YouTube
                          <FaYoutube size={30} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 my-3">
                <button onClick={()=>setActive(!active)} className={`px-3 py-2 border-[#404b7c] hover:bg-[#404b7c] hover:text-white border ${!active ? "text-white bg-[#404b7c]" : ""}`}>{t("book")}</button>
                <button onClick={()=>setActive(!active)} className={`px-3 py-2 border-[#404b7c] hover:bg-[#404b7c] hover:text-white border ${active ? "text-white bg-[#404b7c]" : ""}`}>{t("cert")}</button>
              </div>
              {active && <div className="mt-1 gap-3 grid grid-cols-3 w-full">
                {data?.certificates?.map((item, index) => {
                  return (
                    <Link
                      href={item?.file}
                      target="_blank"
                      key={index}
                      className="flex gap-3 h-[200px] items-start overflow-hidden  w-full relative"
                    >
                      
                      <Image
                        src={["JPG", "PNG"].includes(
                          item?.file?.split(".").pop()?.toUpperCase() as string
                        ) ? item?.file : FileLogo}
                        alt={`File ${index + 1}`}
                        width={500}
                        height={400}
                        className="w-full object-contain h-full"
                      />
                      {/* <span className="font-[500] text-[16px] max-w-[500px] w-full line-clamp-1">
                      {decodeURIComponent(item?.file?.split("/")[5])}
                      </span> */}
                    </Link>
                  );
                })}
              </div>}
              {!active && <div className="flex flex-col items-start mt-1 gap-3 w-[80%]">
                {data?.files?.map((item, index) => {
                  return (
                    <Link
                      href={item?.file}
                      target="_blank"
                      key={index}
                      className="flex gap-3 items-center overflow-hidden  w-full relative"
                    >
                      {/* <span
                    className={`${
                      !item ? "bg-blue-600" : "bg-red-600"
                    } uppercase px-1 text-white rounded-sm text-[10px] absolute top-4 left-[0]`}
                  >
                    {"PDF"}
                  </span> */}
                      <Image
                        src={FileLogo}
                        alt={`File ${index + 1}`}
                        className="w-[25px] h-[30px]"
                      />
                      <span className="font-[500] text-[16px] max-w-[550px] w-full line-clamp-1">
                      {decodeURIComponent(item?.file?.split("/")[5]).split(/[-_]/)
                                .join(" ")}
                      </span>
                    </Link>
                  );
                })}
              </div>}
              <div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SingleEducator;
