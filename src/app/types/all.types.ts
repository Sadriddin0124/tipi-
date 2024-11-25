import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IFile } from "../lib/types";

export interface LangType {
    value: string;
    title: string;
    icon: StaticImageData | StaticImport;
}

export interface NewsType {
    id: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    image: IFile;
    created_at: string;
    category: string
    active: boolean
}

export interface PedagogueType {
    id?: string;
    img: StaticImageData;
    name: string;
    desc: string;
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
    value?: string;
    title_uz?: string
    title_ru?: string
    title_en?: string
    name_uz?: string
    name_ru?: string
    name_en?: string
    status?: string;
    active?: boolean;
    href: string;
    target?: string;
    page: string
    teachers: string
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

export interface LinkType {
    id?: number | null;
    name_uz?: string;
    name_ru?: string;
    name_en?: string;
    title_uz?: string;
    title_ru?: string;
    title_en?: string;
    created_at?: string;
    active: boolean;
    href?: string
    target?: string
    status?: string
    teachers: string

};

export interface StudentsType {
    active?: boolean
    created_at: string
    description_en: string
    description_ru: string
    description_uz: string
    facebook: string
    id: string
    image: { file: string }
    instagram: string
    name: string
    telegram: string
    updated_at: string
    youtube: string
}

export interface AboutSliderType {
    active: boolean;
    file: {
        file: string
    }
}


export interface KafedraTypes {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    description_uz: string
    description_ru: string
    description_en: string
    image: {file: string}
    contact2: string
    telegram: string
    instagram: string
    facebook: string
    youtube: string
    files: [{file: string}]
    certificates: [{file: string}]
}