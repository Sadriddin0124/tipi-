"use client"
import { useTranslations } from 'next-intl';
import React from 'react'
import Counter from './ui/Counter';
const Statistics = () => {
    const t = useTranslations()
    const data = [
        {title: t("statistics.item1"), count: 11000, start: 0, increase: 50, price: ""}, 
        {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
        {title: t("statistics.item2"), count: 400, start: 0, increase: 3, price: ""}, 
        {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
        {title: t("statistics.item4"), count: 1, start: 1, increase: 0, price: t("statistics.item3")},
    ]
  return (
    <Counter data={data}/>
  )
}

export default Statistics
