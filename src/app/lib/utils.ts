import { LangType } from "../types/all.types";
import UzFlag from "@/assets/uz.webp";
import RuFlag from "@/assets/ru.webp";
import EnFlag from "@/assets/en.webp";

// lib/utils.ts
export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const activeLang = (storedLang: string | null) => {
    const languages: LangType[] = [
        { value: "uz", title: "Uz", icon: UzFlag },
        { value: "en", title: "En", icon: EnFlag },
        { value: "ru", title: "Ru", icon: RuFlag },
      ];
    if (storedLang) {
      try {
        const parsedLang = JSON.parse(storedLang);
        if (parsedLang && languages.some(lang => lang.value === parsedLang.value)) {
          return parsedLang
        } else {
          return languages[1]
        }
      } catch (error) {
        console.error("Error parsing language from localStorage", error);
        return languages[1]
      }
    }
}