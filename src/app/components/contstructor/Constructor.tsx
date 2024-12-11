import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AboutFaculty, {
  NewsItem,
} from "../fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog } from "@/app/lib/actions";
import Image from "next/image";
import { RiCloseCircleLine } from "react-icons/ri";

const Constructor = ({
  page,
  setPopUp,
}: {
  page: string;
  setPopUp: Dispatch<SetStateAction<string>>;
}) => {
  const [blog, setBlog] = useState<NewsItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      const blog = await fetchBlog(page);
      setBlog(blog);
    };
    getData();
  }, [page]);
  return (
    <div className="flex justify-center w-full">
      <div className="w-full mx-auto mt-6 grid max-w-[1300px] lg:grid-cols-2 gap-4">
        {blog?.map((item, index) => (
          <div
            className={`${
              item?.kind === "STUDENTS"
                ? "lg:col-span-1"
                : item?.kind === "VIDEO"
                ? "lg:col-span-1"
                : item?.kind === "TEACHERS" && item?.news_category === "SCIENCE"
                ? "col-span-2"
                : item?.kind === "TEACHERS" && item?.news_category === "SPORT"
                ? "lg:col-span-1"
                : "lg:col-span-2"
            } py-2 md:py-[30px]`}
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
