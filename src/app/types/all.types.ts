import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LangType  {
    value: string;
    title: string;
    icon: StaticImageData | StaticImport;
}

export interface NewsType {
    img: StaticImageData;
    link?: string
    date: string;
    desc: string
}

export interface PedagogueType {
    id?: string;
    img: StaticImageData;
    name: string;
    desc: string;
    faculty?: string
}

export interface ContactType {
    icon: ReactNode;
    title: string;
    value: string
}

export interface FakultetlarType {
    img: StaticImageData
}
export interface CounterType {
    title: string;
    count: number;
    start: number;
    increase: number;
    price?: string;
}


export interface BreadcrumbItem {
    label: string;
    href: string;
  }
export interface HoverItemType {
    id: number;
    value: string;
    status: string;
    href: string;
    target?: string
}

interface MediaType {
    icons: ReactNode;
    link: string
}
  
export interface TBodyTYpe {
    tb1: string;
    tb2: string;
    tb3: string;
    tb4?: MediaType[];
    tb5: string;
}

export interface CategoryTypes {
    id?: number | null;
    title_uz: string;
    title_ru: string;
    title_en: string;
    place: string;
    status?: boolean;
};
  