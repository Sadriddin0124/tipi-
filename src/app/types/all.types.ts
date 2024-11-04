import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LangType  {
    value: string;
    title: string;
    icon: StaticImageData;
}

export interface NewsType {
    img: StaticImageData;
    date: string;
    desc: string
}

export interface PedagogueType {
    img: StaticImageData;
    name: string;
    desc: string;
}

export interface ContactType {
    icon: ReactNode;
    title: string;
    value: string
}