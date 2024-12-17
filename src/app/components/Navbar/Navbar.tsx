
"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavLinkType } from "../../types/navbar.types";
import Logo from "@/assets/logo_white.webp";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import {
  BreadcrumbItem,
  HoverItemType,
  LangType,
} from "../../types/all.types";
import HoverComponent from "../HoverComponent";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import Dropdown from "../ui/Dropdown";
import {
  fetchAboutTipi,
  fetchFacultiesMin,
} from "../../lib/actions";
import Breadcrumb from "../ui/Breadcrumb";
import "./Navbar.css"

const Navbar = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    // const handleSetCookie = () => {
    //   setCookie('NEXT_LOCALE', "uz", 1); // Set 'userLocale' cookie with 1-hour expiration
    // };
    // handleSetCookie()
    const handleScroll = () => {
      setScrollTop(window.scrollY); // or window.pageYOffset
    };
    if (scrollTop > 20) {
      setHoverStatus(0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop, pathname]);

  const [languages] = useState<LangType[]>([
    { value: "uz", title: "Uz", icon: UzFlag },
    { value: "en", title: "En", icon: EnFlag },
    { value: "ru", title: "Ru", icon: RuFlag },
  ]);
  const id = useSearchParams().get("id")
  const locale = pathname?.split("/")[1]
  const [breadCrumbDynamic, setBreadCrumbDynamic] = useState<HoverItemType[]>([]);
  useEffect(() => {
    const blogTitle = breadCrumbDynamic?.find(item=> item?.id === id as string)
    const Destinations = [
      { label: t("path.link1"), href: "ilmiy-yonalish" },
      { label: t("path.link2"), href: "fakultetlar" },
      { label: t("path.link3"), href: "institut-haqida" },
      { label: t("path.link4"), href: "yangiliklar" },
      { label: t("path.link5"), href: "iqtidorli-talabalar" },
      { label: t("path.link6"), href: "bolimlar" },
      { label: t("path.link7"), href: "1" },
      { label: t("path.link8"), href: "almashinuv-dasturi" },
      { label: locale === "uz" ? blogTitle?.title_uz : locale === "ru" ? blogTitle?.title_ru : blogTitle?.title_en as string, href: "about" },
      { label: t("crumb.item1"), href: "science" },
      { label: t("crumb.item2"), href: "news" },
      { label: t("crumb.item3"), href: "events" },
      { label: t("crumb.item4"), href: "campus" },
      { label: t("crumb.item5"), href: "reception" },
      { label: t("crumb.item6"), href: "contact" },
    ];
    const findBreadcrumbItems = () => {
      const activePath = pathname.split("/").filter(item => item !== "");
      const filteredPath: BreadcrumbItem[] = Destinations.filter(item =>
        activePath.includes(item.href)
      );
      setBreadcrumbItems(filteredPath);
    };
    const lang = languages?.find(item=> item?.value === locale)
    if (lang) {
      try {
        if (
          languages.some((lang) => lang.value === lang.value)
        ) {
          setActiveLang(lang);
        } else {
          setActiveLang(languages[1]);
        }
      } catch (error) {
        console.error("Error parsing language from localStorage", error);
        setActiveLang(languages[1]);
      }
    }
    findBreadcrumbItems();
  }, [pathname, languages, t, id, breadCrumbDynamic, locale]);
  const currentLanguage = pathname.split("/")[1];
  const filterLang =
    languages.find((item) => item.value === currentLanguage) || languages[0];
  const [activeLang, setActiveLang] = useState<LangType>(filterLang);
  const [hoverStatus, setHoverStatus] = useState<number | undefined>(0);
  const [langStatus, setLangStatus] = useState<boolean>(false);
  const [appBar, setAppBar] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isPending, startTransition] = useTransition();

  const InteractiveService: any = [
    {
      id: 1,
      name_uz: t("hover.title10"),
      name_ru: t("hover.title10"),
      name_en: t("hover.title10"),
      active: true,
      href: `/${activeLang?.value}/interaktiv-xizmatlar/iqtidorli-talabalar`,
    },
    {
      id: 8,
      name_uz: t("hover.title8"),
      name_ru: t("hover.title8"),
      name_en: t("hover.title8"),
      active: true,
      href: `https://www.online-library.uz/`,
      target: "blank",
    },
    {
      id: 9,
      name_uz: t("hover.title9"),
      name_ru: t("hover.title9"),
      name_en: t("hover.title9"),
      active: true,
      href: `https://tipi-journal.uz`,
      target: "blank",
    },
  ];
  const News: any = [
    {
      id: 1,
      name_uz: t('news.title2'),
      name_ru: t('news.title2'),
      name_en: t('news.title2'),
      active: true,
      href: `/${activeLang?.value}/yangiliklar/science`,
    },
    {
      id: 8,
      name_uz: t('news.title3'),
      name_ru: t('news.title3'),
      name_en: t('news.title3'),
      active: true,
      href: `/${activeLang?.value}/yangiliklar/news`,
    },
    {
      id: 9,
      name_uz: t('events.title'),
      name_ru: t('events.title'),
      name_en: t('events.title'),
      active: true,
      href: `/${activeLang?.value}/yangiliklar/events`,
    },
  ];
  
  const [aboutTipi, setAboutTipi] = useState<HoverItemType[]>([]);
  const [administration, setAdministration] = useState<HoverItemType[]>([]);
  const [sections, setSections] = useState<HoverItemType[]>([]);
  const [faculties, setFaculties] = useState([]);
  const navLink: NavLinkType[] = [
    {
      id: 1,
      label: t("nav.link3"),
      path: `/${activeLang?.value}/section?id=ABOUT_INSTITUTE`,
      hover: true,
      title1: {title: t("hover.about1"), href: `/${activeLang?.value}/section?id=ABOUT_INSTITUTE`},
      title2: {title: t("hover.about4"), href: `/${activeLang?.value}/section?id=ABOUT_INSTITUTE`},
      item1: aboutTipi,
      item2: administration,
    },
    {
      id: 2,
      label: t("nav.link5"),
      path: `/${activeLang?.value}/section?id=DEPARTMENT`,
      hover: true,
      title1: {title: t("nav.link5"), href: `/${activeLang?.value}/section?id=DEPARTMENT`},
      item1: sections,
    },
    {
      id: 3,
      label: t("nav.link2"),
      path: `/${activeLang?.value}/fakultetlar`,
      hover: true,
      title1: {title: t("nav.link2"), href: `/${activeLang?.value}/fakultetlar`},
      item1: faculties,
    },
    {
      id: 6,
      label: t("nav.link4"),
      path: `/${activeLang?.value}/yangiliklar`,
      hover: true,
      title1: {title: t("nav.link4"), href: `/${activeLang?.value}/section?id=NEWS`},
      item1: News
    },
    {
      id: 5,
      label: t("nav.link6"),
      path: `/${activeLang?.value}/section?id=SERVICE`,
      hover: true,
      title1: {title: t("nav.link6"), href: `/${activeLang?.value}/section?id=SERVICE`},
      item1: InteractiveService,
    },
    {
      id: 4,
      label: t("nav.link1"),
      path: `/${activeLang?.value}/reception?id=qabul`,
      hover: false,
    },
    {
      id: 8,
      label: t("information.th7"),
      path: `/${activeLang?.value}/contact?id=contact`,
      hover: false,
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const faculties = await fetchFacultiesMin();
      setFaculties(faculties);
      const about = await fetchAboutTipi();
      setBreadCrumbDynamic(about)
      const admin = (about as Array<HoverItemType>)?.filter(
        (item) => item?.page === "ADMINISTRATION"
      );
      const about_tipi = (about as Array<HoverItemType>)?.filter(
        (item) => item?.page === "ABOUT_INSTITUTE"
      );
      const department = (about as Array<HoverItemType>)?.filter(
        (item) => item?.page === "DEPARTMENT"
      );
      setAboutTipi(about_tipi);
      setSections(department);
      setAdministration(admin);
    };
    getData();
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      }
       else if(window.scrollY < 10) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const searchParams = useSearchParams()
  
  const SwitchLang = (value: string) => {
    const path = sessionStorage.getItem("path") || "";
    const params = new URLSearchParams(searchParams.toString());
    startTransition(() => {
      router.replace(`/${value}/${path}?${params.toString()}`);
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
    const path =
      pathname.split(`/${activeLang?.value}`).slice(1).join("") || "/";
    sessionStorage.setItem("path", path);
  };

  const handleNavigate = (path: string) => {
    sessionStorage.setItem("path", path);
  };
  
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
  const [dropDown, setDropDown] = useState<number | undefined>(0);
  const openDropDown = (id: number | undefined) => {
    setDropDown(dropDown === id ? 0 : id);
  };
  const closeDropDown = (id: number | undefined) => {
    setDropDown(dropDown === id ? 0 : id);
  };

  return (
    <header className="min-h-[70px] sm:min-h-[110px]">
      <nav className={`${isScrolled ? 'scrolled fixed w-full z-[200] shadow-md' : 'w-full z-[200] shadow-md'} ease-linear duration-200 flex justify-center flex-col items-center px-3 bg_main`}>
        <div className="py-[10px] w-full max-w-[1400px] flex items-center justify-between">
          <Link href="/" className="flex items-center max-w-[400px] gap-[20px]">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              priority
              className="w-[50px] sm:w-[90px] h-[50px] sm:h-[90px]"
            />
            <span className="hidden text-white sm:inline-block text-[18px] font-bold">
              {t("nav.logo")}
            </span>
          </Link>
          <div className="hidden xl:flex items-center gap-[22px]">
            <ul className="flex items-center gap-[22px]">
              {navLink.map((item) => (
                <li
                  key={item.id}
                  className="text-[20px] whitespace-nowrap text-white flex flex-col items-start"
                  onMouseLeave={() => HoverLeave()}
                  onMouseEnter={() => HoverEnter(item.id)}
                >
                  <div className="relative group flex justify-center">
                    {item.href ? (
                      <a target="blank" href={item.href}>
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => handleNavigate(item.path)}
                      >
                        {item.label}
                      </Link>
                    )}
                    <span
                      className={`${
                        item?.path === pathname
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      } absolute inline-block h-[2px] ease-linear duration-200 bg-[#fff] bottom-0`}
                    ></span>
                  </div>
                  {item.hover && (
                    <HoverComponent
                      id={item.id}
                      HoverComponentEnter={HoverComponentEnter}
                      HoverComponentLeave={HoverComponentLeave}
                      title1={item?.title1 as {title: string, href: string}}
                      title2={item?.title2 as {title: string, href: string}}
                      hoverStatus={hoverStatus}
                      item1={item?.item1}
                      item2={item?.item2}
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="relative min-w-[65px]">
              <button
                onClick={changeLangStatus}
                className="flex items-center gap-1 border border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]"
              >
                {activeLang?.title}
                <Image
                  src={activeLang.icon}
                  alt={activeLang.title}
                  className="w-[20px] h-[20px] rounded-full"
                />
              </button>
              <div
                className={`${
                  langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"
                } ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md absolute`}
              >
                {languages
                  .filter((item) => item.value !== activeLang?.value)
                  .map((item) => (
                    <button
                      onClick={() => changeLang(item)}
                      key={item.value}
                      className="hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]"
                    >
                      {item.title}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="w-[20px] h-[20px] rounded-full"
                      />
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <button
            className="block xl:hidden text-white text-[30px] p-2"
            onClick={() => setAppBar(!appBar)}
          >
            {appBar ? <RiCloseLargeFill /> : <HiMiniBars3BottomRight />}
          </button>
        </div>
        <div
          className={`${
            appBar ? "h-[450px] bg_main" : "h-0"
          } w-full overflow-hidden xl:hidden transition-all ease-linear duration-200`}
        >
          <ul className="flex flex-col items-center gap-[10px] mt-[25px]">
            {navLink.map((item) => (
              <li
                key={item.id}
                className="text-[18px] relative flex justify-center text-white group whitespace-nowrap"
                onMouseEnter={() => openDropDown(item?.id)}
                onMouseLeave={() => openDropDown(item?.id)}
              >
                {item.href && !item?.hover ? (
                  <Link target="blank" href={item.href}>
                    {item.label}
                  </Link>
                ) : item?.hover && !item?.href ? (
                  <button onClick={() => handleNavigate(item.path)}>
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item?.path}
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.label}
                  </Link>
                )}
                <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#fff] bottom-0"></span>
                {item?.hover && item?.id === dropDown && (
                  <Dropdown
                    id={item?.id}
                    closeDropDown={closeDropDown}
                    title1={item?.title1 as {title: string, href: string}}
                    title2={item?.title2 as {title: string, href: string}}
                    item1={item?.item1}
                    item2={item?.item2}
                    setAppBar={setAppBar}
                  />
                )}
              </li>
            ))}
            <div className="min-w-[65px] flex items-center flex-col justify-center relative mt-[20px]">
              <button
                onClick={changeLangStatus}
                className="flex items-center gap-1 border text-black  border-[#404B7C] rounded-md px-2 py-1 bg-white relative z-10 text-[20px]"
              >
                {activeLang?.title}
                <Image
                  src={activeLang.icon}
                  alt={activeLang.title}
                  className="w-[20px] h-[20px] rounded-full"
                />
              </button>
              <div
                className={`${
                  langStatus ? "top-[40px] z-[20] bg-white" : "top-0 hidden"
                } z-[60] ease-linear duration-200 flex flex-col justify-center border border-[#404B7C] p-1 rounded-md`}
              >
                {languages
                  .filter((item) => item.value !== activeLang?.value)
                  .map((item) => (
                    <button
                      onClick={() => changeLang(item)}
                      key={item.value}
                      className="hover:text-blue-600 transition-all py-1 px-1 flex items-center gap-1 text-[20px]"
                    >
                      {item.title}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="w-[20px] h-[20px] rounded-full"
                      />
                    </button>
                  ))}
              </div>
            </div>
          </ul>
          </div>
          {pathname.length > 3 ? <Breadcrumb items={breadcrumbItems} activeLang={activeLang}/> : ""}
      </nav>
    </header>
  );
};

export default Navbar;
