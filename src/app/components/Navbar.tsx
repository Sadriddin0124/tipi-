"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { NavLinkType } from "../types/navbar.types";
import Logo from "@/assets/logo.webp";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import { LangType } from "../types/all.types";
import { IoIosArrowForward } from "react-icons/io";
const Navbar = () => {
  const t = useTranslations(); // Use the translation hook here
  const navLink: NavLinkType[] = [
    { id: 1, label: t("nav.link1"), path: "/" },
    { id: 2, label: t("nav.link2"), path: "/" },
    { id: 3, label: t("nav.link3"), path: "/" },
    { id: 4, label: t("nav.link4"), path: "/" },
    { id: 5, label: t("nav.link5"), path: "/" },
    {
      id: 6,
      label: t("nav.link6"),
      path: "/",
      href: "https://www.online-library.uz/",
    },
    { id: 7, label: t("nav.link7"), path: "/" },
  ];

  //state for hover component

  const [hoverStatus, setHoverStatus] = useState<number | undefined>(0);

  //languages
  const languages: LangType[] = [
    { value: "uz", title: "Uz", icon: UzFlag },
    { value: "en", title: "En", icon: EnFlag },
    { value: "ru", title: "Ru", icon: RuFlag },
  ];
  //active language
  const [activeLang, setActiveLang] = useState<LangType>(languages[1]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const SwitchLang = (value: string) => {
    const lang = sessionStorage.getItem("lang");
    let path = pathname.split(`/${activeLang.value}`).slice(1).join("");
    if (lang) {
      path = lang;
    }
    startTransition(() => {
      router.replace(`/${value}${path}`);
    });
  };
  const changeLang = (item: LangType) => {
    setActiveLang(item);
    SwitchLang(item?.value);
    setLangStatus(!langStatus);
    sessionStorage.setItem("language", JSON.stringify(item));
  };
  const [langStatus, setLangStatus] = useState<boolean>(false);
  const changeLangStatus = () => {
    setLangStatus(!langStatus);
    const path = pathname.split(`/${activeLang?.value}`).slice(1).join("");
    sessionStorage.setItem("lang", path);
  };
  useEffect(() => {
    const language = sessionStorage.getItem("language");
    if (language) {
      setActiveLang(JSON.parse(language));
    } else {
      setActiveLang(languages[1]);
    }
  }, []);
  const HoverElements = [
    {
      id: 1,
      value: t("hover.title1"),
    },
    {
      id: 2,
      value: t("hover.title2"),
    },
    {
      id: 3,
      value: t("hover.title3"),
    },
    {
      id: 4,
      value: t("hover.title4"),
    },
    {
      id: 5,
      value: t("hover.title5"),
    },
    {
      id: 6,
      value: t("hover.title6"),
    },
  ];
  const HoverElementsIn = [
    {
      id: 1,
      value: t("hover.title_in1"),
    },
    {
      id: 2,
      value: t("hover.title_in2"),
    },
    {
      id: 3,
      value: t("hover.title_in3"),
    },
    {
      id: 4,
      value: t("hover.title_in4"),
    },
    {
      id: 5,
      value: t("hover.title_in5"),
    },
  ];
  const [hoverElementActive, setHoverElementActive] = useState(0);
  const openElement = (id: number) => {
    setHoverElementActive(hoverElementActive === id ? 0 : id)
  }
  return (
    <nav className="py-[25px] px-[60px] shadow-md flex items-center justify-between">
      <Link href={"/"} className="flex items-center max-w-[400px] gap-[20px]">
        <Image src={Logo} alt="Logo" width={100} height={100} />
        <span className="text-[18px] font-bold">{t("nav.logo")}</span>
      </Link>
      <div className="flex items-center gap-[15px]">
        <ul className="flex items-center gap-[15px]">
          {navLink?.map((item, index) => {
            return (
              <li key={index} className="text-[18px] whitespace-nowrap relative group flex flex-col items-center" onMouseEnter={() => setHoverStatus(item?.id)}>
                {item?.href ? (
                  <a target="blank" href={item?.href}>
                    {item?.label}
                  </a>
                ) : (
                  <Link href={item?.path}>{item?.label}</Link>
                )}
                <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0"></span>
                <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0"></span>
                {hoverStatus === item?.id && item?.id !== 6 && (
                  <div
                    onMouseLeave={() => setHoverStatus(0)}
                    className={`${
                     item?.id === 5 || item?.id === 7 ? "right-[-100px]" : item?.id === 4 || item?.id === 3 || item?.id === 2 ? "" : "left-[-100px] "
                    } p-10 min-w-[1040px] w-full min-h-[200px] gap-10 flex justify-between bg-white shadow-md border absolute z-50 top-8 rounded-[10px]`}
                  >
                      <div className="flex flex-col">
                        {/* Hover Elements */}
                        {HoverElements?.map((item, index) => {
                          return (
                            <div key={index} className="flex flex-col items-start w-full">
                              <div className="flex w-full max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]" onClick={() => openElement(item?.id)}>
                                <IoIosArrowForward size={24} className={item?.id === hoverElementActive  ? "rotate-[90deg] duration-200 ease-linear"  : "duration-200 ease-linear" } />
                                <span className="max-w-[280px] w-full">{item?.value}</span>
                              </div>
                              {/* Hover elements Inside */}
                              <div
                                className={`${
                                  item?.id === hoverElementActive
                                    ? "h-auto flex flex-col pl-3"
                                    : "h-0 overflow-hidden"
                                } duration-300 ease-linear`}
                              >
                                {HoverElementsIn?.map((item, index) => {
                                  return (
                                    <div
                                      className="flex gap-2 items-center pb-1 pt-3 border-b-2 text-[#404B7C]"
                                      key={index}
                                    >
                                      <IoIosArrowForward size={24} />
                                      <span>{item?.value}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                        <div className="flex flex-col">
                            <div className="flex w-full max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]" onClick={() => openElement(7)}>
                              <IoIosArrowForward size={24} className={item?.id === hoverElementActive  ? "rotate-[90deg] duration-200 ease-linear"  : "duration-200 ease-linear" } />
                              <span className="max-w-[280px] w-full">{t("hover.title7")}</span>
                            </div>
                            {/* Hover elements Inside */}
                            <div
                              className={`${
                                7 === hoverElementActive
                                  ? "h-auto flex flex-col pl-3"
                                  : "h-0 overflow-hidden"
                              } duration-300 ease-linear`}
                            >
                              {HoverElementsIn?.map((item, index) => {
                                return (
                                  <div
                                    className="flex gap-2 items-center pb-1 pt-3 border-b-2 text-[#404B7C]"
                                    key={index}
                                  >
                                      <IoIosArrowForward size={24} />
                                      <span>{item?.value}</span>
                                    </div>
                                  );
                                })}
                              </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex w-full max-w-[280px] whitespace-normal cursor-pointer gap-2 pb-1 pt-3 border-b-2 items-center text-[20px]" onClick={() => openElement(8)}>
                              <IoIosArrowForward size={24} className={item?.id === hoverElementActive  ? "rotate-[90deg] duration-200 ease-linear"  : "duration-200 ease-linear" } />
                              <span className="max-w-[280px] w-full">{t("hover.title8")}</span>
                            </div>
                            {/* Hover elements Inside */}
                            <div
                              className={`${
                                8 === hoverElementActive
                                  ? "h-auto flex flex-col pl-3"
                                  : "h-0 overflow-hidden"
                              } duration-300 ease-linear`}
                            >
                              {HoverElementsIn?.map((item, index) => {
                                return (
                                  <div
                                    className="flex gap-2 items-center pb-1 pt-3 border-b-2 text-[#404B7C]"
                                    key={index}
                                  >
                                      <IoIosArrowForward size={24} />
                                      <span>{item?.value}</span>
                                    </div>
                                  );
                                })}
                              </div>
                        </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="relative min-w-[65px]">
          <button
            onClick={changeLangStatus}
            className="flex items-center gap-1 border border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]"
          >
            {activeLang?.title}{" "}
            <Image
              src={activeLang?.icon}
              alt={activeLang?.title}
              className="w-[20px] h-[20px] rounded-full"
            />
          </button>
          <div
            className={`${
              langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"
            } ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md absolute`}
          >
            {languages
              ?.filter((item) => item?.value !== activeLang?.value)
              ?.map((item, index) => {
                return (
                  <button
                    onClick={() => changeLang(item)}
                    key={index}
                    className={`${
                      item?.value === "ru" ||
                      (item?.value === "en" && activeLang?.value === "ru")
                        ? "border-t-2 border-t-[#404B7C]"
                        : ""
                    } hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]`}
                  >
                    {item?.title}{" "}
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      className="w-[20px] h-[20px] rounded-full"
                    />
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
