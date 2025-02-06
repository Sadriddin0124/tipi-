"use client";
import ConstructorSlider from "@/app/components/contstructor/Slider";
import AboutFaculty, {
  NewsItem,
} from "@/app/components/fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog, fetchVideoSlider } from "@/app/lib/actions";
import { AboutSliderType } from "@/app/types/all.types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Constructor = () => {
  const [slider, setSlider] = useState<AboutSliderType | null>(null);
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const groups = searchparams.get("groups");
  const [popUp, setPopUp] = useState<string>("");
  const [activeTab, setActiveTab] = useState("1");
  const t = useTranslations();

  const items = [
    {
      id: "1",
      label: t("information.item1"),
    },
    {
      id: "2",
      label: t("information.item2"),
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const slider = await fetchVideoSlider(id);
      setSlider(slider);
      const blog = await fetchBlog(
        `about-${id}${activeTab === "2" && groups ? `-2` : ""}`
      );
      setBlog(blog);
    };
    getData();
  }, [id, activeTab, groups]);

  return (
    <div className=" flex flex-col items-center justify-center">
      {popUp && (
        <div
          onClick={() => setPopUp("")}
          className={`fixed w-full h-full bg-[#0000006c] top-0 left-0 flex justify-center items-center z-[220]`}
        >
          <div className=" h-[90vh] flex items-center absolute">
            <div className="relative">
              <RiCloseCircleLine
                className="absolute right-[10px] top-3  text-red-500 text-[30px] cursor-pointer"
                onClick={() => setPopUp("")}
              />
              <Image
                src={popUp}
                alt="POp up"
                width={800}
                height={500}
                className="w-full h-screen object-contain"
              />
            </div>
          </div>
        </div>
      )}
      {slider?.file && <ConstructorSlider data={slider} />}
      {groups && (
        <div className="pt-5 grid grid-cols-2 gap-2 max-w-[1400px] w-full px-3">
          {items?.map((item, index) => (
            <button
              onClick={() => setActiveTab(item?.id)}
              key={index}
              className="ease-linear group duration-200 bg-[#404B7C] shadow-md shadow-gray-500 w-full md:w-auto  group px-4 md:px-12 py-3 md:py-6 text-white cursor-pointer text-[11px] sm:text-[14px] xl:text-[20px] break-words rounded-full md:rounded-[10px] font-[600] justify-center flex gap-3 items-center"
            >
              <div className="relative flex items-center flex-col justify-center">
                {item?.label}
                <span
                  className={`${
                    item?.id === activeTab ? "w-full" : ""
                  } ease-linear duration-200 w-0 group-hover:w-full h-[1px] md:h-[3px] bottom-0 left-0 bg-white rounded-full`}
                ></span>
              </div>
            </button>
          ))}
        </div>
      )}
      <div className="pb-[40px] px-3 md:pb-[80px] mt-6 grid items-end grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1400px] w-full">
        {blog?.map((item, index) => (
          <div
            className={`${
              item?.kind == "VIDEO"
                ? "lg:col-span-1"
                : item?.kind === "STUDENTS"
                ? "lg:col-span-1"
                : item?.kind === "TEACHERS" && item?.news_category === "SCIENCE"
                ? "col-span-2"
                : item?.kind === "TEACHERS" && item?.news_category === "SPORT"
                ? "col-span-2 lg:col-span-1"
                : "col-span-2"
            } py-2 md:py-[30px] flex items-end`}
            key={index}
          >
            <AboutFaculty item={item} setPopUp={setPopUp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constructor;
