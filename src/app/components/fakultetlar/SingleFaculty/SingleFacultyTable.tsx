"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import IT1 from "@/assets/it1.webp";
import IT2 from "@/assets/it2.webp";
import IT3 from "@/assets/it3.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ITImage from "@/assets/it.webp";
import { usePathname } from "next/navigation";
import { fetchFaculty } from "@/app/lib/actions";
import FacultyKafedra from "./FacultyKafedra";
import Constructor from "../../contstructor/Constructor";
import "./SingleFaculty.css"
import { RiCloseCircleLine } from "react-icons/ri";
const Statistics = ({ id }: { id: string }) => {
  const t = useTranslations();
  const [activeStatistic, setActiveStatistic] = useState<number>(1);
  const [popUp, setPopUp] = useState<string>("")

  const data = [
    {
      id: 1,
      title: t("information.statistics1"),
      icon: IT1,
      line: false,
    },
    {
      id: 3,
      title: t("information.statistics2"),
      icon: IT2,
      line: true,
    },
    {
      id: 2,
      title: t("information.statistics2"),
      icon: IT2,
      line: false,
    },
    {
      id: 4,
      title: t("information.statistics2"),
      icon: IT2,
      line: true,
    },
    {
      id: 3,
      title: t("information.statistics3"),
      icon: IT3,
      line: false,
    },
  ];

  const changeStatistic = (id: number) => {
    setActiveStatistic(id);
  };

  const components = [
    { id: 1, component: <Faculties id={id} setPopUp={setPopUp}/> },
    { id: 2, component: <Kafedra id={id} setPopUp={setPopUp}/> },
    { id: 3, component: <OnlineReception /> },
  ];
  return (
    <section
      className="w-full flex flex-col items-center gap-3 md:gap-20 justify-center pt-[60px] lg:pt-[122px] pb-20 lg:pb-[100px] px-3"
    >
      {popUp && <div onClick={()=>setPopUp("")} className={`fixed w-full h-full bg-[#0000006c] top-0 left-0 flex justify-center items-center z-[220]`}>
        <div className=" h-[90vh] object-contain absolute">
            <RiCloseCircleLine  className="absolute right-1 sm:-right-12 -top-8 sm:-top-6 text-white text-[30px] cursor-pointer" onClick={()=>setPopUp("")}/>
            <Image src={popUp} alt="POp up" width={800} height={500} className="w-full h-full object-contain"/>
          </div>
        </div>}
      <div className="max-w-[1166px] w-full flex flex-row items-center md:border-0 border rounded-full justify-between md:justify-center lg:justify-between bg-slate-200 md:bg-transparent p-1 md:gap-3 lg:gap-8">
        {data?.map((item, index) => {
          return item?.line ? (
            <div
              className="hidden lg:block w-1 h-full bg_main min-h-[88px]"
              key={index}
            ></div>
          ) : (
            <button
              className={`${
                item?.id === activeStatistic
                  ? "bg_main"
                  : "hover:bg-[#404B7C] text_main md:text-white hover:text-white"
              } ease-linear duration-200 md:bg-[#404B7C] shadow-md shadow-gray-500 w-full md:w-auto whitespace-nowrap group px-4 md:px-12 py-3 md:py-6 text-white cursor-pointer text-[11px] sm:text-[16px] md:text-[20px] rounded-full md:rounded-[10px] lg:text-[24px] font-[600] justify-center flex gap-3 items-center`}
              key={index}
              onClick={() => changeStatistic(item?.id)}
            >
              <span className="relative flex justify-center">
                {item?.title}
                {item?.id === activeStatistic && (
                  <span className="hidden md:inline-block w-full h-[2px] bg-white absolute bottom-0 left-0"></span>
                )}
                <span className="hidden md:block h-[2px] bottom-0 bg-white ease-linear duration-200 w-0 group-hover:w-[100%] absolute"></span>
              </span>
              <Image
                src={item?.icon}
                alt={item?.title}
                className={`hidden md:block w-[28px] lg:w-[40px] h-[28px] lg:h-[40px] object-contain`}
                width={100}
                height={100}
              />
            </button>
          );
        })}
      </div>
      {components
        ?.filter((item) => item?.id === activeStatistic)
        ?.map((item, index) => (
          <div key={index} className="w-full flex justify-center">
            {item?.component}
          </div>
        ))}
    </section>
  );
};

export default Statistics;

const OnlineReception = () => {
  const t = useTranslations();
  const OnlineReceptionData = [
    {
      title: t("information.reception1"),
      img: ITImage,
      href: "/",
    },
    {
      title: t("information.reception2"),
      img: ITImage,
      href: "/",
    },
    {
      title: t("information.reception3"),
      img: ITImage,
      href: "/",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      className="max-w-[1240px] w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-[20px]"
    >
      {OnlineReceptionData?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full relative flex justify-center items-center rounded-[10px] overflow-hidden h-[160px]"
          >
            <Image
              src={item?.img}
              alt={item?.title}
              width={400}
              height={300}
              className="absolute w-full h-full left-0 top-0 z-[-1] object-cover"
            />
            <Link
              href={item?.href}
              className="text-white font-[500] text-[24px] sm:text-[30px] text-center"
            >
              {item?.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export interface DirectionsType {
  id: string; // UUID format
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  title_uz: string;
  title_ru: string;
  title_en: string;
  stage_uz: string;
  stage_ru: string;
  stage_en: string;
  duration_uz: string;
  duration_ru: string;
  duration_en: string;
  department_uz: string;
  department_ru: string;
  department_en: string;
  active: boolean; // Indicates if the record is active
  faculty: string;
}
const DirectionsTable = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const DirectionTHeads = [
    t("information.th1"),
    t("information.th2"),
    t("information.th3"),
    t("information.th4"),
    t("information.th9"),
  ];

  const [directions, setDirections] = useState<DirectionsType[]>([]);
  const id = pathname?.split("/")[3];
  console.log(id);
  const locale = pathname?.split("/")[1];
  useEffect(() => {
    const getData = async () => {
      const item = await fetchFaculty(id);
      setDirections(item?.directions);
    };
    getData();
  }, [id]);
  return (
    <div className="overflow-x-auto w-full mx-auto">
      <table className="w-full max-w-[1400px] mx-auto">
        <thead>
          <tr className="w-full whitespace-nowrap text-[16px] lg:text-[22px] py-5 border-b-[2px] border-b-[#404B7C]">
            {DirectionTHeads?.map((item, index) => (
              <td
                key={index}
                className={`${index === 4 ? "text-right" : index === 1 ? "pl-6" : ""} py-3 px-2 lg:px-0 lg:py-5 min-w-[100px]`}
              >
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {directions?.map((item, index) => (
            <tr
              className="text-[16px] whitespace-nowrap lg:text-[20px] py-2 lg:py-5 text_main border-b-[2px] border-b-[#404B7C]"
              key={index}
            >
              <td className="py-3 scrolling-container min-w-[200px] px-2 lg:px-0 lg:py-5 max-w-[250px] overflow-hidden">
                <span className="scrolling-text">{locale === "uz"
                  ? item?.title_uz
                  : locale === "ru"
                  ? item?.title_ru
                  : item?.title_en}</span>
              </td>
              <td className="py-3 pl-6 px-2 ml-4 lg:px-5  lg:py-5 ">
                {locale === "uz"
                  ? item?.stage_uz
                  : locale === "ru"
                  ? item?.stage_ru
                  : item?.stage_en}
              </td>
              <td className="py-3 px-2 lg:px-0 lg:py-5">
                {locale === "uz"
                  ? item?.duration_uz
                  : locale === "ru"
                  ? item?.duration_ru
                  : item?.duration_en}
              </td>
              <td className="py-3 px-2 lg:px-0 lg:py-5">
                {locale === "uz"
                  ? item?.department_uz
                  : locale === "ru"
                  ? item?.department_ru
                  : item?.department_en}
              </td>
              <td className='px-2 lg:px-0 text-right'>
                  <Link href={`/${locale}/fakultetlar/yonalishlar?id=${item?.id}`} className='bg-[#404B7C] text-white px-3 text-[14px] lg:text-[18px] py-2 rounded-md border-2 border-[#404B7C] hover:text-[#404B7C] hover:bg-white ease-linear duration-200'>{t("information.btn")}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const Faculties = ({ id, setPopUp }: { id: string, setPopUp: Dispatch<SetStateAction<string>> }) => {
  return (
    <div data-aos="fade-up" className="w-full mx-auto">
      <DirectionsTable />
      <Constructor setPopUp={setPopUp} page={`faculty-${id}-about`}/>
    </div>
  );
};

const Kafedra = ({ id, setPopUp }: { id: string, setPopUp: Dispatch<SetStateAction<string>> }) => {
    const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const item = await fetchFaculty(id);
      setTeachers(item.teachers);
    };
    getData();
  }, [id]);
  return (
    <div className="w-full">
      <Constructor setPopUp={setPopUp} page={`faculty-${id}-kafedra`}/>
      <FacultyKafedra data={teachers}/>
    </div>
  );
};
