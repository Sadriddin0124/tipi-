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
      const blog = await fetchBlog();
      setBlog(blog);

    };
    getData();
  }, [id]);
  console.log(slider);
  
  return (
    <div>
      {slider?.file && <ConstructorSlider data={slider} />}
      <div className="pb-[100px]">
        {
          blog?.map((item,index)=> (
            <div className="py-[60px]" key={index}>
            <AboutFaculty item={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Constructor;
