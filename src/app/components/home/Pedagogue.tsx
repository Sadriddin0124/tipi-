"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import { LangType } from "@/app/types/all.types";
import Link from "next/link";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import { usePathname } from "next/navigation";
import { ITeacher } from "@/app/lib/types";
import { fetchTeachers } from "@/app/lib/fetchers";
import SingleEducator from "@/app/[locale]/pedagoglar/[id]/page";
import { IoCloseCircle } from "react-icons/io5";
const Pedagogue = ({ title }: { title: string }) => {
  const t = useTranslations();

  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const pathname = usePathname();
  const [id, setId] = useState<string>("");

  const languages: LangType[] = [
    { value: "uz", title: "Uz", icon: UzFlag },
    { value: "en", title: "En", icon: EnFlag },
    { value: "ru", title: "Ru", icon: RuFlag },
  ];

  const currentLanguage = pathname.split("/")[1];
  const filterLang =
    languages.find((item) => item.value === currentLanguage) || languages[0];
  const [activeLang] = useState<LangType>(filterLang);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "linear",
    });

    fetchTeachers()
      .then((data) => {
        setTeachers(data);
      })
      .catch(() => {
        alert("Nimadur noto'g'ri ketdi.");
      });
  }, []);

  const locale = usePathname().split("/")[1];
  function scrollToBottom(id: string) {
    setId(id);
    setTimeout(() => {
      window.scrollTo({
        top: 2300, // Scroll to 1000px from the top
        behavior: "smooth", // Smooth scrolling
      });
    }, 1000);
  }
  return (
    <section className="px-2" id="pedagog">
      {id && (
        <div className="fixed w-full z-[200] h-[100vh] top-0 left-0 bg-[#0000006b] flex justify-center items-center">
          <div
            className="absolute w-full h-[100vh] top-0 left-0 bg-[#0000006b]"
            onClick={() => setId("")}
          ></div>
          <div className="pl-[20px] max-w-[1200px] w-full flex justify-center rounded-lg h-[600px] bg-white relative z-10">
            <button
              className="absolute right-5 top-[-40px] md:top-5 text-white md:text-[#404B7C] z-20 cursor-pointer"
              onClick={() => setId("")}
            >
              <IoCloseCircle size={30} />
            </button>
            <SingleEducator />
          </div>
        </div>
      )}
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="w-full flex justify-between items-center mt-4">
          <h2 className="text-[32px] mb-10 md:mb-12 md:text-[32px] font-[600]">
            {title}
          </h2>
          <Link
            href={`${locale}/pedagoglar`}
            className="text-[20px] pb-0 text-[#404B7C] relative group flex justify-center"
          >
            {t("news.more")}
            <span className="group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]"></span>
          </Link>
        </div>
        {teachers?.length > 4 ? (
          <div className="py-[40px]">
            <Swiper
            slidesPerView={1}
            spaceBetween={40}
            pagination={{
              clickable: true,
              enabled: false
            }}
            autoplay={{
              delay: 300,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {teachers?.map((teacher, index) => {
              return (
                <SwiperSlide key={index}>
                  <div key={index} className="px-3 py-3 flex justify-center">
                    <div className="shadow-md rounded-[10px] max-w-[400px] overflow-hidden">
                      <Image
                        src={teacher?.image.file}
                        alt={teacher?.name_uz}
                        width={350}
                        height={300}
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="p-5 flex flex-col items-start justify-between gap-[10px] min-h-[220px]">
                        <div>
                          <h5 className="text-[20px] font-[600] line-clamp-2">
                            {locale === "uz"
                              ? teacher?.name_uz
                              : locale === "en"
                              ? teacher?.name_en
                              : teacher?.name_ru}
                          </h5>
                          <p className="text_main text-[18px] font-[600] line-clamp-2">
                            {locale === "uz"
                              ? teacher?.description_uz
                              : locale === "en"
                              ? teacher?.description_en
                              : teacher?.description_ru}
                          </p>
                        </div>
                        <Link
                          onClick={() => scrollToBottom(teacher?.id)}
                          href={`/${activeLang?.value}?id=${teacher?.id}`}
                          className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                        >
                          {t("pedagogue.btn")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {teachers?.map((teacher, index) => {
              return (
                <div key={index} className="px-3 lg:px-5">
                  <div className="shadow-md rounded-[10px] overflow-hidden">
                    <Image
                      src={teacher?.image.file}
                      alt={teacher?.name_uz}
                      width={350}
                      height={300}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="p-5 flex flex-col items-start justify-between gap-[10px] min-h-[220px]">
                      <div>
                        <h5 className="text-[20px] font-[600]">
                          {locale === "uz"
                            ? teacher?.name_uz
                            : locale === "en"
                            ? teacher?.name_en
                            : teacher?.name_ru}
                        </h5>
                        <p className="text_main text-[18px] font-[600]">
                          {locale === "uz"
                            ? teacher?.description_uz
                            : locale === "en"
                            ? teacher?.description_en
                            : teacher?.description_ru}
                        </p>
                      </div>
                      <Link
                        onClick={() => scrollToBottom(teacher?.id)}
                        href={`/${activeLang?.value}?id=${teacher?.id}`}
                        className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                      >
                        {t("pedagogue.btn")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pedagogue;
