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
import HoverComponent from "./HoverComponent";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import Cookies from "js-cookie"
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
    let path = pathname.split(`/${cookieValue}`).slice(1).join("");
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
  const [cookieValue, setCookieValue] = useState<string | null>(null);
  useEffect(() => {
    const language = sessionStorage.getItem("language");
    if (language) {
      setActiveLang(JSON.parse(language));
    } else {
      setActiveLang(languages[1]);
    }
        const item = Cookies.get('NEXT_LOCALE');
        setCookieValue(item || 'No cookie found');
        console.log(item);
  }, [cookieValue]);
  const [appBar, setAppBar] = useState(false)
  return (
    <nav className="flex justify-center px-3 bg-white">
      <div className="py-[25px] w-full max-w-[1400px] flex items-center justify-between">
        <Link href={"/"} className="flex items-center max-w-[400px] gap-[20px]">
          <Image src={Logo} alt="Logo" width={100} height={100} className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px]"/>
          <span className="hidden sm:inline-block text-[18px] font-bold">{t("nav.logo")}</span>
        </Link>
        <div className="hidden xl:flex items-center gap-[15px]">
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
                    <HoverComponent id={item?.id} hoverStatus={hoverStatus} setHoverStatus={setHoverStatus}/>
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
        <button onClick={()=>setAppBar(true)} className="block xl:hidden"><HiMiniBars3BottomRight size={34} /></button>
      </div>
      <div className={`w-full h-screen bg-[#00000072] fixed ease-linear duration-300 ${appBar ? "z-50" : "hidden"}`}>
      </div>
      <div className={`${appBar ? "right-0" : "right-[-1700px]"} ease-linear flex justify-end duration-300 fixed z-[51] w-full min-h-[100vh] top-0`}>
        <div className="min-h-[100vh] w-full"  onClick={()=>setAppBar(false)}></div>
        <div className=" max-w-[300px] min-w-[250px] w-full min-h-[100vh] bg-white p-6 ">
          <div className="flex w-full justify-between mb-5">
            <button onClick={()=>setAppBar(false)} className="text-[#404B7C]"><RiCloseLargeFill size={30}/></button>
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
          <ul className="flex flex-col items-start gap-[15px]">
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
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
