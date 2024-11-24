"use client"
import React from 'react'
import Contact from '@/app/components/home/Contact'
import News from '@/app/components/home/News'
import Events from '@/app/components/home/Events'
import SportNews from '@/app/components/home/SportNews'
const Yangiliklar = () => {
  return (
    <section className='px-3 overflow-hidden ' data-aos="fade-up">
      <SportNews/>
      <News/>
      <Events/>
      <Contact/>
    </section>
  )
}

export default Yangiliklar
