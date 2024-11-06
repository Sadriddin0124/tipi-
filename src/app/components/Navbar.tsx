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
// import Dropdown from "./Dropdown";

const Navbar = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const languages: LangType[] = [
    { value: "uz", title: "Uz", icon: UzFlag },
    { value: "en", title: "En", icon: EnFlag },
    { value: "ru", title: "Ru", icon: RuFlag },
  ];
  
  const currentLanguage = pathname.split("/")[1];
  const filterLang = languages.find(item => item.value === currentLanguage) || languages[0];
  const [activeLang, setActiveLang] = useState<LangType>(filterLang);
  const [hoverStatus, setHoverStatus] = useState<number | undefined>(0);
  const [langStatus, setLangStatus] = useState<boolean>(false);
  const [appBar, setAppBar] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isPending, startTransition] = useTransition();
  const navLink: NavLinkType[] = [
    { id: 1, label: t("nav.link1"), path: `/${activeLang?.value}/ilmiy-yonalish` },
    { id: 2, label: t("nav.link2"), path: `/${activeLang?.value}/fakultetlar` },
    { id: 3, label: t("nav.link3"), path: `/${activeLang?.value}/institut-haqida` },
    { id: 4, label: t("nav.link4"), path: `/${activeLang?.value}/yangiliklar` },
    { id: 5, label: t("nav.link5"), path: `/${activeLang?.value}/iqtidorli-talabalar` },
    { id: 6, label: t("nav.link6"), path: `/${activeLang?.value}/bolimlar` },
  ];


  const SwitchLang = (value: string) => {
    const path = sessionStorage.getItem("path") || "";
    startTransition(() => {
      router.replace(`/${value}/${path}`);
    });
  };

  const changeLang = (item: LangType) => {
    setActiveLang(item);
    SwitchLang(item.value);
    setLangStatus(!langStatus);
    localStorage.setItem("language", JSON.stringify(item));
  };

  const changeLangStatus = () => {
    setLangStatus(!langStatus);
    const path = pathname.split(`/${activeLang?.value}`).slice(1).join("") || "/";
    sessionStorage.setItem("path", path);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      try {
        const parsedLang = JSON.parse(storedLang);
        if (parsedLang && languages.some(lang => lang.value === parsedLang.value)) {
          setActiveLang(parsedLang);
        } else {
          setActiveLang(languages[1]);
        }
      } catch (error) {
        console.error("Error parsing language from localStorage", error);
        setActiveLang(languages[1]);
      }
    }
  }, []);

  const HoverEnter = (id: number | undefined) => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setHoverStatus(id);
  };

  const HoverLeave = () => {
    const newTimer = setTimeout(() => {
      setHoverStatus(0);
    }, 3000);
    setTimer(newTimer);
  };

  const HoverComponentEnter = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
  };

  const HoverComponentLeave = () => {
    setHoverStatus(0);
  };

  return (
    <nav className="flex justify-center px-3 bg-white">
      <div className="py-[25px] w-full max-w-[1400px] flex items-center justify-between">
        <Link href="/" className="flex items-center max-w-[400px] gap-[20px]">
          <Image src={Logo} alt="Logo" width={100} height={100} className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px]" />
          <span className="hidden sm:inline-block text-[18px] font-bold">{t("nav.logo")}</span>
        </Link>
        <div className="hidden xl:flex items-center gap-[15px]">
          <ul className="flex items-center gap-[15px]">
            {navLink.map(item => (
              <li key={item.id} className="text-[18px] whitespace-nowrap flex flex-col items-center" onMouseLeave={() => HoverLeave()} onMouseEnter={() => HoverEnter(item.id)}>
                <div className="relative group flex justify-center">
                  {item.href ? (
                    <a target="blank" href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.path}>{item.label}</Link>
                  )}
                  <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0"></span>
                </div>
                {item.id !== 6 && (
                  <HoverComponent id={item.id} HoverComponentEnter={HoverComponentEnter} HoverComponentLeave={HoverComponentLeave} hoverStatus={hoverStatus} />
                )}
              </li>
            ))}
          </ul>
          <div className="relative min-w-[65px]">
            <button onClick={changeLangStatus} className="flex items-center gap-1 border border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]">
              {activeLang?.title}
              <Image src={activeLang?.icon} alt={activeLang?.title} className="w-[20px] h-[20px] rounded-full" />
            </button>
            <div className={`${langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"} ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md absolute`}>
              {languages
                .filter(item => item.value !== activeLang?.value)
                .map(item => (
                  <button onClick={() => changeLang(item)} key={item.value} className="hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]">
                    {item.title}
                    <Image src={item.icon} alt={item.title} className="w-[20px] h-[20px] rounded-full" />
                  </button>
                ))}
            </div>
          </div>
        </div>
        <button onClick={() => setAppBar(true)} className="block xl:hidden">
          <HiMiniBars3BottomRight size={34} />
        </button>
      </div>
      <div className={`w-full h-screen bg-[#00000072] fixed ease-linear duration-300 ${appBar ? "z-50" : "hidden"}`}></div>
      <div className={`${appBar ? "left-0" : "left-[-1700px]"} ease-linear flex justify-start duration-300 fixed z-[51] w-full min-h-[100vh] top-0`}>
        <div className="max-w-[400px] min-w-[250px] w-full min-h-[100vh] bg-white p-6">
          <div className="flex w-full justify-between mb-5">
            <div className="relative min-w-[65px]">
              <button onClick={changeLangStatus} className="flex items-center gap-1 border border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]">
                {activeLang?.title}
                <Image src={activeLang?.icon} alt={activeLang?.title} className="w-[20px] h-[20px] rounded-full" />
              </button>
              <div className={`${langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"} ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md absolute`}>
                {languages
                  .filter(item => item.value !== activeLang?.value)
                  .map(item => (
                    <button onClick={() => changeLang(item)} key={item.value} className="hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]">
                      {item.title}
                      <Image src={item.icon} alt={item.title} className="w-[20px] h-[20px] rounded-full" />
                    </button>
                  ))}
              </div>
            </div>
            <button onClick={() => setAppBar(false)} className="text-[#404B7C]">
              <RiCloseLargeFill size={34} />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-[15px]">
            {navLink.map(item => (
              <li key={item.id} className="text-[18px] whitespace-nowrap">
                <div className="relative group flex justify-center">
                  {item.href ? (
                    <a target="blank" href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.path}>{item.label}</Link>
                  )}
                  <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
