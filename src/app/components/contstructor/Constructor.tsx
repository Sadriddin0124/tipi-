import { useEffect, useState } from "react";
import AboutFaculty, { NewsItem } from "../fakultetlar/SingleFaculty/AboutFaculty";
import { fetchBlog } from "@/app/lib/actions";

const Constructor = ({ page }: { page: string }) => {
    const [blog, setBlog] = useState<NewsItem[]>([]);
  
    useEffect(() => {
      const getData = async () => {
        const blog = await fetchBlog(page);
        setBlog(blog);
      };
      getData();
    }, [page]);
    return (
      <div data-aos="fade-up" className="w-full mx-auto">
        {blog?.map((item, index) => (
          <div className="py-[60px]" key={index}>
            <AboutFaculty item={item}/>
          </div>
        ))}
      </div>
    );
  };

  export default Constructor