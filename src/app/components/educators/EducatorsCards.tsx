
"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { KafedraTypes } from "@/app/types/all.types";
import { fetchEducators } from "@/app/lib/actions";
import SingleEducator from "@/app/[locale]/pedagoglar/[id]/page";
import { IoCloseCircle } from "react-icons/io5";

const EducatorsCards = ({ data }: { data: KafedraTypes[] }) => {
  const t = useTranslations();
  const locale = usePathname()?.split("/")[1] || "uz"; // Default to "uz"
  const [id, setId] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchEducators();
        console.log(res); // Validate API response
      } catch (error) {
        console.error("Failed to fetch educators:", error);
      }
    };
    getData();
  }, []);
  // const educator = data?.find(item=> item?.id === id)
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
  return (
    <section
      className="flex flex-col items-center px-4 gap-10 w-full"
      // data-aos="fade-up"
    >
      {id && <div className="fixed w-full z-[200] h-[100vh] top-0 left-0 bg-[#0000006b] flex justify-center items-center">
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#0000006b]" onClick={()=>setId("")}></div>
        <div className="pl-[20px] max-w-[1200px] w-full flex justify-center rounded-lg h-[600px] bg-white relative z-10">
        <button className="absolute right-5 top-[-40px] md:top-5 text-white md:text-[#404B7C] z-20 cursor-pointer" onClick={()=>setId("")}><IoCloseCircle size={30}/></button>
          <SingleEducator/>
        </div>
      </div>}
      <h2 className="text-[28px] font-[500] md:text-[32px] md:font-medium">
        {t("pedagogue.title")}
      </h2>
      <div className="max-w-[1300px] w-full flex items-center flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        {data?.map((item, index) => (
          <div key={index} className="max-w-[350px] w-full">
            <div className="shadow-md rounded-[10px] overflow-hidden">
              <Image
                src={item?.image?.file || "/placeholder-image.jpg"}
                alt={item?.name_uz || "Educator"}
                width={350}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-5 flex flex-col justify-between gap-[10px] sm:h-[240px]">
                <div className="flex flex-col gap-[10px]">
                  <h5 className="text-[20px] font-bold line-clamp-2">
                    {locale === "uz"
                      ? item?.name_uz
                      : locale === "en"
                      ? item?.name_en
                      : item?.name_ru}
                  </h5>
                  <p className="text-lg text_main line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      l(
                        locale,
                        item?.description_uz,
                        item?.description_ru,
                        item?.description_en
                      )?.replace(/\n/g, "<br>") || "",
                  }}
                />
                    {/* {locale === "uz"
                      ? item?.description_uz
                      : locale === "en"
                      ? item?.description_en
                      : item?.description_ru}
                  </p> */}
                </div>
                <Link
                  onClick={() => setId(item?.id)}
                  href={`/${locale}/pedagoglar?id=${item?.id}`}
                  className="self-end px-6 py-3 rounded-lg bg-[#404B7C] text-white hover:bg-white hover:text-[#404B7C] border-2 border-transparent hover:border-[#404B7C] transition ease-linear duration-200"
                >
                  {t("information.th9")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducatorsCards;
