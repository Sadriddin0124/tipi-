"use client";
import ConstructorSlider from "@/app/components/contstructor/Slider";
import AboutFaculty from "@/app/components/fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog, fetchVideoSlider } from "@/app/lib/actions";
import { AboutSliderType } from "@/app/types/all.types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Constructor = () => {
  const [slider, setSlider] = useState<AboutSliderType | null>(null);
  const [blog, setBlog] = useState([]);
  const searchparams = useSearchParams();
  const id = searchparams.get("id");

  useEffect(() => {
    const getData = async () => {
      const slider = await fetchVideoSlider(id);
      console.log(slider);

      setSlider(slider);
      const blog = await fetchBlog();
      setBlog(blog);

    };
    getData();
  }, [id]);
  return (
    <div>
      {slider?.file && <ConstructorSlider data={slider} />}
      <AboutFaculty title="sdfsfsdf" />
    </div>
  );
};

export default Constructor;
