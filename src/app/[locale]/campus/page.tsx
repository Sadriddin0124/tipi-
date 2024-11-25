"use client";
import AboutFaculty, { NewsItem } from "@/app/components/fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CampusPage = () => {
  const [blog, setBlog] = useState<NewsItem[]>([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");

  useEffect(() => {
    const getData = async () => {
      const blog = await fetchBlog(`about-${id}`);
      setBlog(blog);

    };
    getData();
  }, [id]);
  
  return (
    <div>
      {/* {slider?.file && <ConstructorSlider data={slider} />} */}
      <div className="pb-[40px] md:pb-[80px]">
        {
          blog?.map((item,index)=> (
            <div className="py-[30px]" key={index}>
            <AboutFaculty item={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CampusPage;
