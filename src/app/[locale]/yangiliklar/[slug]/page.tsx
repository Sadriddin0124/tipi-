"use client";
import React, { useEffect, useState } from "react";
import News1 from "@/assets/news1.webp";
import News2 from "@/assets/news2.webp";
import News3 from "@/assets/news3.webp";
import News4 from "@/assets/news4.webp";
import News5 from "@/assets/news5.webp";
import News8 from "@/assets/news8.webp";
import News9 from "@/assets/news9.webp";
import News10 from "@/assets/news10.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Event1 from "@/assets/event1.webp";
import Event2 from "@/assets/event2.webp";
import Event3 from "@/assets/event3.webp";
import Event4 from "@/assets/event4.webp";
import Event5 from "@/assets/event5.webp";
import Event6 from "@/assets/event6.webp";
import { useParams, usePathname } from "next/navigation";
import { fetchNews } from "@/app/lib/fetchers";
import { NewsType } from "@/app/types/all.types";
const SingleNews = () => {
  const t = useTranslations();
  const params = useParams();
  const slug = params?.slug;
  const locale = usePathname().split("/")[1];

  const [newsData, setNewsData] = useState<NewsType[]>([]);
  useEffect(() => {
    if (slug === "news") {
      fetchNews("SCIENCE")
        .then((data) => {
          setNewsData(data);
          console.log(data);
        })
        .catch(() => {
          alert("Nimadur noto'g'ri ketdi.");
        });
    } else {
      fetchNews("EVENT")
        .then((data) => {
          setNewsData(data);
          console.log(data);
        })
        .catch(() => {
          alert("Nimadur noto'g'ri ketdi.");
        });
    }
  }, []);
  const category = slug === "news" ? "SCIENCE" : "EVENT"
  return (
    <section className="px-3 overflow-hidden pb-6 pt-10 md:pt-[100px] md:pb-[80px]">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-6 items-center">
        <h2 className="pl-[20px] text-[32px] self-start md:text-[40px] font-[600] mb-[20px]">
          {slug === "news"
            ? t("news.title")
            : slug === "events"
            ? t("events.title")
            : ""}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {newsData?.filter(item=> item?.category === category)?.map((item, index) => (
            <div className="" key={index}>
              <div
                key={index}
                className="rounded-[10px] overflow-hidden shadow-lg flex flex-col"
              >
                <div className="bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center">
                  <Image
                    src={item?.image?.file}
                    alt={`Slide ${index + 1}`}
                    className="w-full object-cover h-[180px]"
                    width={500}
                    height={400}
                  />
                </div>
                <div className="pt-[26px] px-[18px] pb-[40px] text_main flex flex-col gap-4 ease-linear duration-200 hover:text-white hover:bg-[#404B7C]">
                  <span className="text-[20px] font-[600]">
                    {item?.created_at?.slice(0, 10)}
                  </span>
                  <p className="text-[17px] min-h-[100px] font-[600] line-clamp-5 text-center leading-5">
                    {locale === "ru"
                      ? item?.name_ru
                      : locale === "uz"
                      ? item?.name_uz
                      : item?.name_ru}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
