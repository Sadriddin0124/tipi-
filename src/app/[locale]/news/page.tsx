"use client";
import AboutFaculty, { NewsItem } from "@/app/components/fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog } from "@/app/lib/actions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Constructor = () => {
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const [popUp, setPopUp] = useState<string>("")
  useEffect(() => {
    const getData = async () => {
      const blog = await fetchBlog(`about-${id}`);
      setBlog(blog);

    };
    getData();
  }, [id]);
  
  return (
    <div>
      {popUp && <div onClick={()=>setPopUp("")} className={`fixed w-full h-full bg-[#0000006c] top-0 left-0 flex justify-center items-center z-[220]`}>
        <div className=" h-[90vh] object-contain absolute">
            <RiCloseCircleLine  className="absolute right-1 sm:-right-12 -top-8 sm:-top-6 text-white text-[30px] cursor-pointer" onClick={()=>setPopUp("")}/>
            <Image src={popUp} alt="POp up" width={800} height={500} className="w-full h-full object-contain"/>
          </div>
        </div>}
      {/* {slider?.file && <ConstructorSlider data={slider} />} */}
      <div className="pb-[40px] md:pb-[80px]">
        {
          blog?.map((item,index)=> (
            <div className="py-[30px]" key={index}>
            <AboutFaculty item={item} setPopUp={setPopUp}/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Constructor;
