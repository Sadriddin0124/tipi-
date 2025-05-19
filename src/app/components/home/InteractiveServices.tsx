"use client"
import {useTranslations} from 'next-intl';
import React from 'react'
import {AtSign, Book, BriefcaseBusiness, Building, Mail, User, Users} from "lucide-react";
import Link from "next/link";

const Statistics = () => {
    const t = useTranslations()
    const data = [
        {title: t("statistics.item1"), href: ""},
        {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
        {title: t("statistics.item2"), count: 400, start: 0, increase: 3, price: ""},
        {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
        {title: t("statistics.item3"), count: 5, start: 0, increase: 1, price: ""},
        {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
        {title: t("statistics.item4"), count: 14875, start: 0, increase: 65, price: ""}
    ]
    return (
        <section className='px-2 pb-6 pt-10 md:pt-[100px] md:pb-[80px]'>
            <div className='max-w-[1400px] mx-auto'>
                <div className='w-full flex justify-between items-center px-2'>
                    <h2 className='text-[24px] md:text-[32px] font-[600]'>{t('nav.link6')}</h2>
                </div>
                <div className="flex flex-wrap lg:[&>a]:w-1/5 [&>a]:w-5/12 text_main justify-center gap-3 py-6">
                    <Link href="https://tipi.uz/uz/about?id=a0dd67df-010c-4e54-a4f8-7c959bc65f81" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <Building size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.1")}</div>
                    </Link>
                    <Link href="https://hemis.uztipi.uz" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <User size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.2")}</div>
                    </Link>
                    <Link href="https://student.uztipi.uz" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <Users size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.3")}</div>
                    </Link>
                    <Link href="https://arm.tipi.uz/" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <Book size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.4")}</div>
                    </Link>
                    <Link href="https://pf.bimm.uz/" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <BriefcaseBusiness size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.5")}</div>
                    </Link>
                    <Link href="https://rm.tipi.uz/" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <Mail size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.6")}</div>
                    </Link>
                    <Link href="https://uzbek.tipi.uz/" className="flex items-center hover:bg-[#404b7c] hover:text-white rounded-xl flex-col gap-6 aspect-square justify-center border">
                        <AtSign size={35}/>
                        <div className="text-xl text-center font-semibold">{t("interactive.7")}</div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Statistics
