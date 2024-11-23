"use client";
import React, { useEffect, useState } from "react";
import EducatorImage1 from "@/assets/educator1.webp";
import EducatorImage2 from "@/assets/educator2.webp";
import EducatorImage3 from "@/assets/educator3.webp";
import EducatorImage4 from "@/assets/educator4.webp";
import EducatorImage5 from "@/assets/educator5.webp";
import EducatorImage6 from "@/assets/educator6.webp";
import EducatorImage7 from "@/assets/educator7.webp";
import EducatorImage8 from "@/assets/educator8.webp";
import EducatorImage9 from "@/assets/educator9.webp";
import EducatorImage10 from "@/assets/educator10.webp";
import EducatorImage11 from "@/assets/educator11.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { LangType, PedagogueType } from "@/app/types/all.types";
import Link from "next/link";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import { usePathname } from "next/navigation";
import { ITeacher } from "@/app/lib/types";
import { fetchTeachers } from "@/app/lib/fetchers";
const Pedagogue = ({ title }: { title: string }) => {
  const t = useTranslations();

  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const pathname = usePathname();

  const languages: LangType[] = [
    { value: "uz", title: "Uz", icon: UzFlag },
    { value: "en", title: "En", icon: EnFlag },
    { value: "ru", title: "Ru", icon: RuFlag },
  ];

  const currentLanguage = pathname.split("/")[1];
  const filterLang =
    languages.find((item) => item.value === currentLanguage) || languages[0];
  const [activeLang] = useState<LangType>(filterLang);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
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
  return (
    <section className="px-2" data-aos="fade-up">
      <div className="max-w-[1130px] mx-auto w-full">
        <h2 className="text-[32px] text-center mb-10 md:mb-12 md:text-[40px] font-[600]">
          {title}
        </h2>
        <Slider {...settings}>
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
                      href={`/${activeLang?.value}/pedagoglar/${teacher?.id}`}
                      className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                    >
                      {t("pedagogue.btn")}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="w-full flex justify-end mt-4">
          <Link
            href={`${locale}/pedagoglar`}
            className="text-[20px] pb-0 text-[#404B7C] relative group flex justify-center"
          >
            {t("news.more")}
            <span className="group-hover:w-full w-0 h-[2px] ease-linear duration-200 bg-[#404B7C] absolute bottom-[-2px]"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pedagogue;
