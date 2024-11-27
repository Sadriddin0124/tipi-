import Campus from '@/app/components/home/Campus'
import Contact from '@/app/components/home/Contact'
import Events from '@/app/components/home/Events'
import Hero from '@/app/components/home/Hero'
import News from '@/app/components/home/News'
import Pedagogue from '@/app/components/home/Pedagogue'
import Statistics from '@/app/components/home/Statistics'
import { useTranslations } from 'next-intl'
import React from 'react'

const Home = () => {
  const t = useTranslations()
  return (
    <div>
      <Hero />
      <Statistics />
      <Campus />
      <News />
      <Pedagogue title={t("pedagogue.title_home")} />
      <Events />
      <Contact />
    </div>
  )
}

export default Home
