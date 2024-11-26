"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { fetchNews } from "@/app/lib/fetchers";
import { NewsType } from "@/app/types/all.types";
import Link from "next/link";
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
  }, [slug]);
  const category = slug === "news" ? "SCIENCE" : "EVENT"
  return (
    <section className="px-3 overflow-hidden pb-6 pt-10 md:pt-[100px] md:pb-[80px]">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-6 items-center">
        <h2 className="pl-[20px] text-[32px] self-start md:text-[32px] font-[600] mb-[20px]">
          {slug === "news"
            ? t("news.title3")
            : slug === "science"
            ? t("news.title2")
            : slug === "events"
            ? t("events.title")
            : ""}
        </h2>
        <div className="grid grid-cols-4 gap-4 w-full">
          {newsData?.filter(item=> item?.category === category)?.map((item, index) => (
            item?.active &&
              <div
                key={index}
                className="rounded-[10px] w-full overflow-hidden shadow-lg flex flex-col"
              >
                <div className="bg-[#D9D9D9] w-full min-h-[180px] h-full flex justify-center items-center">
                  <Image
                    src={item?.image?.file}
                    alt={`Slide ${index + 1}`}
                    className=" object-cover w-full h-[180px]"
                    width={500}
                    height={400}
                  />
                </div>
                <div className='pt-[26px] px-[18px] pb-[20px] text_main flex flex-col gap-4'>
              <span className='text-[20px] font-[600]'>{item?.created_at?.slice(0,10)}</span>
              <p className='text-[17px] min-h-[70px] font-[600] line-clamp-4 text-center leading-5'>{locale ==="ru" ? item?.name_ru : locale === "uz" ? item?.name_uz : item?.name_ru}</p>
              <Link
                      href={`/${locale}/news?id=${item?.id}`}
                      className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                    >
                      {t("pedagogue.btn")}
                    </Link>
            </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
