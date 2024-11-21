"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import FileLogo from "@/assets/file_logo.webp";
import Image from "next/image";
import FacultyMasonry from "./FacultyMasonry";
import Video from "@/assets/video.webp";
import ImgLogo from "@/assets/img_logo.webp";
import { useSearchParams } from "next/navigation";
import { fetchBlog } from "@/app/lib/actions";

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
}

const AboutFaculty = ({ title }: { title: string }) => {
  const t = useTranslations();

  const [blog, setBlog] = useState<NewsItem[]>([]);

  const searchparams = useSearchParams();

  const id = searchparams.get("id");

  useEffect(() => {
    const getData = async () => {
      const blog = await fetchBlog();
      setBlog(blog);
    };
    getData();
  }, [id]);

  const files = [
    {
      img: FileLogo,
      type: "doc",
      desc: t("aboutFaculty.fileDesc"),
    },
    {
      img: FileLogo,
      type: "pdf",
      desc: t("aboutFaculty.fileDesc"),
    },
    {
      img: FileLogo,
      type: "pdf",
      desc: t("aboutFaculty.fileDesc"),
    },
    {
      img: FileLogo,
      type: "doc",
      desc: t("aboutFaculty.fileDesc"),
    },
    {
      img: FileLogo,
      type: "pdf",
      desc: t("aboutFaculty.fileDesc"),
    },
    {
      img: FileLogo,
      type: "pdf",
      desc: t("aboutFaculty.fileDesc"),
    },
  ];
  const images = [
    {
      id: 1,
      src: ImgLogo,
      alt: "Photo 1",
    },
    {
      id: 2,
      src: ImgLogo,
      alt: "Photo 2",
    },
    {
      id: 3,
      src: ImgLogo,
      alt: "Photo 3",
    },
    {
      id: 4,
      src: ImgLogo,
      alt: "Photo 4",
    },
    {
      id: 5,
      src: ImgLogo,
      alt: "Photo 5",
    },
  ];

console.log(blog);



  return (
    <section className="flex justify-center px-3 py-4 md:py-[100px]">
      <div
        className="max-w-[1300px] w-full flex flex-col gap-4 md:gap-[96px]"
        data-aos="fade-up"
      >
        <div
          className={`grid grid-cols-4 gap-3 md:gap-6`}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-[10px] max-h-[300px] md:max-h-[400px] `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="hover:scale-105 transition-all w-full"
              />
            </div>
          ))}
        </div>
        <div
          className="w-full flex flex-col gap-10 mt-[29px]"
          data-aos="fade-up"
        >
          <h2 className="text-[24px] md:text-[40px] font-[600]">{title}</h2>
          <p className="text-[16px] md:text-[26px]">{t("aboutFaculty.desc")}</p>
        </div>
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          data-aos="fade-up"
        >
          {files?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-6 items-center max-w-[250px] relative"
              >
                <span
                  className={`${
                    item?.type === "doc" ? "bg-blue-600" : "bg-red-600"
                  } uppercase px-1 text-white rounded-sm text-[10px] absolute top-4 left-[-12px]`}
                >
                  {item?.type}
                </span>
                <Image
                  src={item?.img}
                  alt={`File ${index + 1}`}
                  className="w-[60px] h-[80px]"
                />
                <span className="font-[500] text-[16px]">{item?.desc}</span>
              </div>
            );
          })}
        </div>
        <div
          className="flex flex-col items-center justify-center md:flex-row gap-5"
          data-aos="fade-up"
        >
          <div className="max-w-[650px]">
            <Image
              src={Video}
              alt="Video 1"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            {/* <video controls className='w-full h-auto'>
              <source src='/bmw.mp4' type='video/mp4'/>
              </video> */}
          </div>
          <div className="max-w-[650px]">
            <Image
              src={Video}
              alt="Video 1"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            {/* <video controls className='w-full h-auto'>
              <source src='/bmw.mp4' type='video/mp4'/>
            </video> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFaculty;
