"use client";
import ConstructorSlider from "@/app/components/contstructor/Slider";
import AboutFaculty, { NewsItem } from "@/app/components/fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog, fetchVideoSlider } from "@/app/lib/actions";
import { AboutSliderType } from "@/app/types/all.types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Constructor = () => {
  const [slider, setSlider] = useState<AboutSliderType | null>(null);
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const [popUp, setPopUp] = useState<string>("")
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
      {popUp && <div onClick={()=>setPopUp("")} className={`fixed w-full h-full bg-[#0000006c] top-0 left-0 flex justify-center items-center z-[220]`}>
        <div className=" h-[90vh] flex items-center absolute">
          <div className="relative">
            <RiCloseCircleLine  className="absolute right-[10px] top-3  text-red-500 text-[30px] cursor-pointer" onClick={()=>setPopUp("")}/>
            <Image src={popUp} alt="POp up" width={800} height={500} className="w-full h-full object-contain"/>
          </div>
          </div>
        </div>}
      {slider?.file && <ConstructorSlider data={slider} />}
      <div className="pb-[40px] md:pb-[80px] mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1300px] w-full">
        {
          blog?.map((item,index)=> (
            <div className={`${item?.kind === "STUDENTS" ? "lg:col-span-1" : "lg:col-span-2"} py-2 md:py-[30px]`} key={index}>
            <AboutFaculty item={item} setPopUp={setPopUp}/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Constructor;
