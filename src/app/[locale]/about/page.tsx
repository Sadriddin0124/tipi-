"use client";
import ConstructorSlider from "@/app/components/contstructor/Slider";
import AboutFaculty, { NewsItem } from "@/app/components/fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog, fetchVideoSlider } from "@/app/lib/actions";
import { AboutSliderType } from "@/app/types/all.types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Constructor = () => {
  const [slider, setSlider] = useState<AboutSliderType | null>(null);
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");

  useEffect(() => {
    const getData = async () => {
      const slider = await fetchVideoSlider(id);
      setSlider(slider);
      const blog = await fetchBlog(`about-${id}`);
      setBlog(blog);

    };
    getData();
  }, [id]);
  
  return (
    <div className="px-3 flex justify-center">
      {slider?.file && <ConstructorSlider data={slider} />}
      <div className="pb-[40px] md:pb-[80px] mt-6 grid grid-cols-2 gap-3 max-w-[1300px] w-full">
        {
          blog?.map((item,index)=> (
            <div className={`${item?.kind === "STUDENTS" ? "col-span-1" : "col-span-2"} py-2 md:py-[30px]`} key={index}>
            <AboutFaculty item={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Constructor;
