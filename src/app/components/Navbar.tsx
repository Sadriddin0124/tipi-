
"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavLinkType } from "../types/navbar.types";
import Logo from "@/assets/logo.webp";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";
import {
  BreadcrumbItem,
  HoverItemType,
  LangType,
} from "../types/all.types";
// import { HoverItemType, LangType } from "../types/all.types";
import HoverComponent from "./HoverComponent";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import Dropdown from "./ui/Dropdown";
import {
  fetchAboutTipi,
  // fetchAdmin,
  fetchFaculties,
  // fetchSections,
} from "../lib/actions";
import Breadcrumb from "./ui/Breadcrumb";
// import { fetchAboutTipi, fetchFaculties } from "../lib/actions";

const Navbar = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
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
  }, [scrollTop]);

  const [languages] = useState<LangType[]>([
    { value: "uz", title: "Uz", icon: UzFlag },
    { value: "en", title: "En", icon: EnFlag },
    { value: "ru", title: "Ru", icon: RuFlag },
  ]);
  useEffect(() => {
    const Destinations = [
      { label: t("path.link1"), href: "ilmiy-yonalish" },
      { label: t("path.link2"), href: "fakultetlar" },
      { label: t("path.link3"), href: "institut-haqida" },
      { label: t("path.link4"), href: "yangiliklar" },
      { label: t("path.link5"), href: "iqtidorli-talabalar" },
      { label: t("path.link6"), href: "bolimlar" },
      { label: t("path.link7"), href: "1" },
      { label: t("path.link8"), href: "almashinuv-dasturi" },
      { label: "", href: "about" },
    ];
    const findBreadcrumbItems = () => {
      const activePath = pathname.split("/").filter(item => item !== "");
      const filteredPath: BreadcrumbItem[] = Destinations.filter(item =>
        activePath.includes(item.href)
      );
      setBreadcrumbItems(filteredPath);
    };
    const locale = pathname?.split("/")[1]
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
  }, [pathname, languages, t]);
  const currentLanguage = pathname.split("/")[1];
  const filterLang =
    languages.find((item) => item.value === currentLanguage) || languages[0];
  const [activeLang, setActiveLang] = useState<LangType>(filterLang);
  const [hoverStatus, setHoverStatus] = useState<number | undefined>(0);
  const [langStatus, setLangStatus] = useState<boolean>(false);
  const [appBar, setAppBar] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isPending, startTransition] = useTransition();

  // const ScientificDirection: HoverItemType[] = [
  //   {
  //     id: 1,
  //     value: t("hover.title1"),
  //     status: "big",
  //     href: `/${activeLang?.value}/bolimlar/ilmiy-bolim`,
  //   },
  //   {
  //     id: 2,
  //     value: t("hover.title2"),
  //     status: "small",
  //     href: `/${activeLang?.value}/bolimlar/ilmiy-bolim`,
  //   },
  //   {
  //     id: 3,
  //     value: t("hover.title3"),
  //     status: "small",
  //     href: `/${activeLang?.value}/bolimlar/manaviyat`,
  //   },
  //   {
  //     id: 4,
  //     value: t("hover.title4"),
  //     status: "small",
  //     href: `/${activeLang?.value}/bolimlar/reja`,
  //   },
  //   {
  //     id: 5,
  //     value: t("hover.title5"),
  //     status: "small",
  //     href: `/${activeLang?.value}/bolimlar/devonxona`,
  //   },
  //   // {
  //   //   id: 6,
  //   //   value: t("hover.title6"),
  //   //   status: "small",
  //   //   href: `/${activeLang?.value}`
  //   // },
  // ];
  // const Faculties: any = [
  //   {
  //     id: 1,
  //     name_uz: t("hover.faculty1"),
  //     name_ru: t("hover.faculty1"),
  //     name_en: t("hover.faculty1"),
  //     href: `/${activeLang?.value}/fakultetlar`,
  //   },
  //   {
  //     id: 2,
  //     name_uz: t("hover.faculty2"),
  //     name_ru: t("hover.faculty2"),
  //     name_en: t("hover.faculty2"),
  //     href: `/${activeLang?.value}`,
  //   },
  //   {
  //     id: 3,
  //     name_uz: t("hover.faculty3"),
  //     name_ru: t("hover.faculty3"),
  //     name_en: t("hover.faculty3"),
  //     href: `/${activeLang?.value}`,
  //   },
  //   {
  //     id: 4,
  //     name_uz: t("hover.faculty4"),
  //     name_ru: t("hover.faculty4"),
  //     name_en: t("hover.faculty4"),
  //     href: `/${activeLang?.value}`,
  //   },
  //   {
  //     id: 5,
  //     name_uz: t("hover.faculty5"),
  //     name_ru: t("hover.faculty5"),
  //     name_en: t("hover.faculty5"),
  //     href: `/${activeLang?.value}`,
  //   },
  //   {
  //     id: 6,
  //     name_uz: t("hover.faculty6"),
  //     name_ru: t("hover.faculty6"),
  //     name_en: t("hover.faculty6"),
  //     href: `/${activeLang?.value}`,
  //   },
  // ];
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
  // href: `/${activeLang?.value}/interaktiv-xizmatlar/iqtidorli-talabalar`
  const faculty = {
    title: "Fakultetlar",
    href: `/${activeLang?.value}/`,
  };
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
      title1: t("hover.about1"),
      title2: t("hover.about4"),
      item1: aboutTipi,
      item2: administration,
    },
    {
      id: 2,
      label: t("nav.link5"),
      path: `/${activeLang?.value}/section?id=DEPARTMENT`,
      hover: true,
      title1: "Bo`limlar",
      item1: sections,
    },
    {
      id: 3,
      label: t("nav.link2"),
      path: `/${activeLang?.value}/fakultetlar`,
      hover: true,
      title1: "Fakultetlar",
      item1: faculties,
    },
    {
      id: 6,
      label: t("nav.link4"),
      path: `/${activeLang?.value}/yangiliklar`,
      hover: false,
    },
    {
      id: 5,
      label: t("nav.link6"),
      path: `/${activeLang?.value}/interaktiv-xizmatlar`,
      hover: true,
      title1: t("nav.link6"),
      item1: InteractiveService,
    },
    {
      id: 4,
      label: t("nav.link1"),
      path: `/${activeLang?.value}/qabul`,
      hover: false,
    },
    {
      id: 8,
      label: t("information.th7"),
      path: `/${activeLang?.value}/contact?id=faq`,
      hover: false,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const faculties = await fetchFaculties();
      setFaculties(faculties);
      const about = await fetchAboutTipi();
      // const admin = await fetchAdmin()
      // setAdministration(admin)
      // const sections = await fetchSections()
      // setSections(sections)

      const admin = (about as Array<HoverItemType>)?.filter(
        (item) => item?.page === "ADMINISTRATION"
      );
      const about_tipi = (about as Array<HoverItemType>)?.filter(
        (item) => item?.page === "ABOUT_INSTITUTE"
      );
      const department = (about as Array<HoverItemType>)?.filter(
        (item) => item?.page === "DEPARTMENT"
      );
      console.log(admin);
      setAboutTipi(about_tipi);
      setSections(department);
      setAdministration(admin);
    };
    getData();
  }, []);
  const searchParams = useSearchParams()
  
  const SwitchLang = (value: string) => {
    const path = sessionStorage.getItem("path") || "";
    const id = searchParams.get("id") 

    startTransition(() => {
      router.replace(`/${value}/${path}?id=${id}`);
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
    <nav className="flex justify-center flex-col items-center px-3 bg-white">
      <div className="py-[10px] w-full max-w-[1400px] flex items-center justify-between">
        <Link href="/" className="flex items-center max-w-[400px] gap-[20px]">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-[50px] sm:w-[90px] h-[50px] sm:h-[90px]"
          />
          <span className="hidden sm:inline-block text-[18px] font-bold">
            {t("nav.logo")}
          </span>
        </Link>
        <div className="hidden xl:flex items-center gap-[22px]">
          <ul className="flex items-center gap-[22px]">
            {navLink.map((item) => (
              <li
                key={item.id}
                className="text-[20px] whitespace-nowrap flex flex-col items-center"
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
                    } absolute inline-block h-[2px] ease-linear duration-200 bg-[#404B7C] bottom-0`}
                  ></span>
                </div>
                {item.hover && (
                  <HoverComponent
                    id={item.id}
                    HoverComponentEnter={HoverComponentEnter}
                    HoverComponentLeave={HoverComponentLeave}
                    title1={item?.title1}
                    title2={item?.title2}
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
          className="block xl:hidden text-[30px] p-2"
          onClick={() => setAppBar(!appBar)}
        >
          {appBar ? <RiCloseLargeFill /> : <HiMiniBars3BottomRight />}
        </button>
      </div>
      <div
        className={`${
          appBar ? "h-[450px] bg-white" : "h-0"
        } w-full overflow-hidden xl:hidden transition-all ease-linear duration-200`}
      >
        <ul className="flex flex-col items-center gap-[10px] mt-[25px]">
          {navLink.map((item) => (
            <li
              key={item.id}
              className="text-[18px] relative flex justify-center group whitespace-nowrap"
              onMouseEnter={() => openDropDown(item?.id)}
              onMouseLeave={() => openDropDown(item?.id)}
            >
              {item.href && !item?.hover ? (
                <a target="blank" href={item.href}>
                  {item.label}
                </a>
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
              <span className="absolute inline-block w-0 h-[2px] group-hover:w-full ease-linear duration-200 bg-[#404B7C] bottom-0"></span>
              {item?.hover && item?.id === dropDown && (
                <Dropdown
                  id={item?.id}
                  closeDropDown={closeDropDown}
                  title1={item?.title1}
                  title2={item?.title2}
                  item1={item?.item1}
                  item2={item?.item2}
                />
              )}
            </li>
          ))}
          <div className="min-w-[65px] flex items-center flex-col justify-center relative mt-[20px]">
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
  );
};

export default Navbar;
