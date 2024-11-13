"use client";
import React, { useEffect, useState, useTransition, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { NavLinkType } from "../types/navbar.types";
import Logo from "@/assets/logo.webp";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import { BreadcrumbItem, HoverItemType, LangType } from "../types/all.types";
import HoverComponent from "./HoverComponent";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
// import Breadcrumb from "./ui/Breadcrumb";
import Dropdown from "./ui/Dropdown";

const Navbar = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY); // or window.pageYOffset
    };
    if (scrollTop > 20) {
      setHoverStatus(0)
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);
  
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
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  
  const ScientificDirection: HoverItemType[] = [
    {
      id: 1,
      value: t("hover.title1"),
      status: "big",
      href: `/${activeLang?.value}`
    },
    {
      id: 2,
      value: t("hover.title2"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 3,
      value: t("hover.title3"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 4,
      value: t("hover.title4"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 5,
      value: t("hover.title5"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 6,
      value: t("hover.title6"),
      status: "small",
      href: `/${activeLang?.value}`
    },
  ];
  const ScientificDirection2: HoverItemType[] = [
    {
      id: 7,
      value: t("hover.title7"),
      status: "small",
      href: `/${activeLang?.value}/almashinuv-dasturi`
    },
    {
      id: 9,
      value: t("hover.title9"),
      status: "small",
      href: `/${activeLang?.value}`
    },
  ];
  const Faculties: HoverItemType[] = [
    {
      id: 1,
      value: t("hover.faculty1"),
      status: "big",
      href: `/${activeLang?.value}/fakultetlar`
    },
    {
      id: 2,
      value: t("hover.faculty2"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 3,
      value: t("hover.faculty3"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 4,
      value: t("hover.faculty4"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 5,
      value: t("hover.faculty5"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 6,
      value: t("hover.faculty6"),
      status: "small",
      href: `/${activeLang?.value}`
    },
  ]
  const AboutInstitute: HoverItemType[] = [
    {
      id: 1,
      value: t("hover.about1"),
      status: "big",
      href: `/${activeLang?.value}`
    },
    {
      id: 2,
      value: t("hover.about2"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 3,
      value: t("hover.about3"),
      status: "small",
      href: `/${activeLang?.value}`
    },
  ]
  const AboutInstitute2: HoverItemType[] = [
    {
      id: 1,
      value: t("hover.about4"),
      status: "big",
      href: `/${activeLang?.value}`
    },
    {
      id: 2,
      value: t("hover.about2"),
      status: "small",
      href: `/${activeLang?.value}`
    },
    {
      id: 3,
      value: t("hover.about3"),
      status: "small",
      href: `/${activeLang?.value}`
    },
  ]
  const InteractiveService: HoverItemType[] = [
    {
      id: 1,
      value: t("hover.title10"),
      status: "big",
      href: `/${activeLang?.value}/interaktiv-xizmatlar/iqtidorli-talabalar`
    },
    {
      id: 8,
      value: t("hover.title8"),
      status: "small",
      href: `https://www.online-library.uz/`,
      target: "blank"
    },
  ]
  const navLink: NavLinkType[] = [
    { id: 1, label: t("nav.link3"), path: `/${activeLang?.value}/institut-haqida`, hover: true, item1: AboutInstitute, item2: AboutInstitute2 },
    { id: 2, label: t("nav.link5"), path: `/${activeLang?.value}/bolimlar`, hover: true, item1: ScientificDirection },
    { id: 3, label: t("nav.link2"), path: `/${activeLang?.value}/fakultetlar`, hover: true, item1: Faculties },
    { id: 4, label: t("nav.link1"), path: `/${activeLang?.value}/qabul`, hover: false },
    { id: 5, label: t("nav.link6"), path: `/${activeLang?.value}/interaktiv-xizmatlar`, hover: true, item1:  [...InteractiveService, ...ScientificDirection2]},
    { id: 6, label: t("nav.link4"), path: `/${activeLang?.value}/yangiliklar`, hover: false },
  ];

  const Destinations = [
    { label: t("path.link1"), href: "qabul" },
    { label: t("path.link2"), href: "fakultetlar" },
    { label: t("path.link3"), href: "institut-haqida" },
    { label: t("path.link4"), href: "yangiliklar" },
    { label: t("path.link5"), href: "iqtidorli-talabalar" },
    { label: t("path.link6"), href: "bolimlar" },
    { label: t("path.link7"), href: "1" },
    { label: t("path.link8"), href: "almashinuv-dasturi" },
    { label: t("path.link9"), href: "pedagoglar" },
    { label: t("path.link10"), href: "pedagog-1" },
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

  const handleNavigate = (path: string) => {
    sessionStorage.setItem("path", path);
    findBreadcrumbItems();
  };

  const findBreadcrumbItems = () => {
    const activePath = pathname.split("/").filter(item => item !== "");
    const filteredPath: BreadcrumbItem[] = Destinations.filter(item =>
      activePath.includes(item.href)
    );
    setBreadcrumbItems(filteredPath);
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
    findBreadcrumbItems();
  }, [pathname]);

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
  const [dropDown, setDropDown] = useState<number | undefined>(0)
  const openDropDown = (id: number | undefined) => {
    setDropDown(dropDown === id ? 0 : id)
  }
  const closeDropDown = (id: number | undefined) => {
    setDropDown(dropDown === id ? 0 : id)
  }
  
  return (
    <nav className="flex justify-center flex-col items-center px-3 bg-white">
      <div className="py-[10px] w-full max-w-[1400px] flex items-center justify-between">
        <Link href="/" className="flex items-center max-w-[400px] gap-[20px]">
          <Image src={Logo} alt="Logo" width={100} height={100} className="w-[50px] sm:w-[90px] h-[50px] sm:h-[90px]" />
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
                    <Link href={item.path} onClick={() => handleNavigate(item.path)}>{item.label}</Link>
                  )}
                  <span className={`${item?.path === pathname ? "w-full" : "w-0 group-hover:w-full"} absolute inline-block h-[2px] ease-linear duration-200 bg-[#404B7C] bottom-0`}></span>
                </div>
                {item.hover && (
                  <HoverComponent id={item.id} HoverComponentEnter={HoverComponentEnter} HoverComponentLeave={HoverComponentLeave} hoverStatus={hoverStatus} item1={item?.item1} item2={item?.item2}/>
                )}
              </li>
            ))}
          </ul>
          <div className="relative min-w-[65px]">
            <button onClick={changeLangStatus} className="flex items-center gap-1 border border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]">
              {activeLang?.title}
              <Image src={activeLang.icon} alt={activeLang.title} className="w-[20px] h-[20px] rounded-full" />
            </button>
            <div className={`${langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"} ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md absolute`}>
              {languages.filter(item => item.value !== activeLang?.value).map(item => (
                <button onClick={() => changeLang(item)} key={item.value} className="hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]">
                  {item.title}
                  <Image src={item.icon} alt={item.title} className="w-[20px] h-[20px] rounded-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <button className="block xl:hidden text-[30px] p-2" onClick={() => setAppBar(!appBar)}>{appBar ? <RiCloseLargeFill /> : <HiMiniBars3BottomRight />}</button>
      </div>
      <div className={`${appBar ? "h-[450px] bg-white" : "h-0"} w-full overflow-hidden xl:hidden transition-all ease-linear duration-200`}>
        <ul className="flex flex-col items-center gap-[10px] mt-[25px]">
          {navLink.map(item => (
            <li key={item.id} className="text-[18px] relative flex justify-center group whitespace-nowrap" onMouseEnter={()=>openDropDown(item?.id)} onMouseLeave={()=>openDropDown(item?.id)}>
              {item.href && !item?.hover ? (
                <a target="blank" href={item.href}>{item.label}</a>
              ) : item?.hover && !item?.href ? (
                <button onClick={() => handleNavigate(item.path)}>{item.label}</button>
              ) : (
                <Link href={item?.path} onClick={() => handleNavigate(item.path)}>{item.label}</Link>
              )}
              <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0"></span>
              {item?.hover && item?.id === dropDown && <Dropdown id={item?.id} closeDropDown={closeDropDown} item1={item?.item1} item2={item?.item2}/>}
            </li>
          ))}
          <div className="min-w-[65px] flex items-center flex-col justify-center relative mt-[20px]">
            <button onClick={changeLangStatus} className="flex items-center gap-1 border border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]">
              {activeLang?.title}
              <Image src={activeLang.icon} alt={activeLang.title} className="w-[20px] h-[20px] rounded-full" />
            </button>
            <div className={`${langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"} z-[60] ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md`}>
              {languages.filter(item => item.value !== activeLang?.value).map(item => (
                <button onClick={() => changeLang(item)} key={item.value} className="hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]">
                  {item.title}
                  <Image src={item.icon} alt={item.title} className="w-[20px] h-[20px] rounded-full" />
                </button>
              ))}
            </div>
          </div>
        </ul>
      </div>
      {/* {breadcrumbItems.length ? <Breadcrumb items={breadcrumbItems} activeLang={activeLang}/> : ""} */}
    </nav>
  );
};

export default Navbar;
