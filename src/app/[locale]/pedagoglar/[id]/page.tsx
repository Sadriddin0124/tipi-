"use client"
import React from 'react'
import PedagogueImg1 from "@/assets/pedagogue1.webp"
import PedagogueImg2 from "@/assets/pedagogue2.webp"
import PedagogueImg3 from "@/assets/pedagogue3.webp"
import { useTranslations } from 'next-intl'
import { PedagogueType } from '@/app/types/all.types'
import { usePathname } from 'next/navigation'
const SingleEducator = () => {
    const t = useTranslations()
    const id = usePathname().split("/")[3]
    const data = [
        {
            id: "pedagog-1", 
            img: PedagogueImg1, 
            name: t("pedagogue.title1"), 
            desc: t("pedagogue.desc1"),
            about1: t("educator.about_v1"),
            about2: t("educator.about_v2"),
            about3: t("educator.about_v3"),
            profession: [
                t("educator.profession1"),
                t("educator.profession2"),
                t("educator.profession3"),
                t("educator.profession4"),
            ]
        },
        {id: "pedagog-2", img: PedagogueImg2, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
        {id: "pedagog-3", img: PedagogueImg3, name: t("pedagogue.title1"), desc: t("pedagogue.desc1")},
    ]
    const item = data?.find(item=> item?.id === id)
    console.log(item);
    
  return (
    <section>
      
    </section>
  )
}

export default SingleEducator
