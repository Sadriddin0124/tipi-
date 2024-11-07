import { useTranslations } from 'next-intl'
import React from 'react'
import Statistics1 from "@/assets/statistics1.webp"
import Statistics2 from "@/assets/statistics2.webp"
import Statistics3 from "@/assets/statistics3.webp"
import Counter from '../ui/Counter'
const FakultetlarStatistics = () => {
  const t = useTranslations()
  const data = [
    {title: t("fakultetStatistics.item1"), count: 5, icon: Statistics1, start: 0, increase: 1, price: ""}, 
    {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
    {title: t("fakultetStatistics.item2"), count: 25, icon: Statistics2, start: 0, increase: 1, price: ""}, 
    {title: "", count: 0, icon: "", start: 0, increase: 0, price: ""},
    {title: t("fakultetStatistics.item4"), count: 1, icon: Statistics3, start: 1, increase: 0, price: t("fakultetStatistics.item3")},
]
  return (
    <Counter data={data}/>
  )
}

export default FakultetlarStatistics
