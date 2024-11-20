"use client"
import React from 'react'
import Contact from '@/app/components/home/Contact'
import News from '@/app/components/home/News'
import Events from '@/app/components/home/Events'
const Yangiliklar = () => {
  return (
    <section className='px-3 overflow-hidden pb-6 pt-10 md:pt-[100px] md:pb-[80px]' data-aos="fade-up">
      <News/>
      <Events/>
      <Contact/>
    </section>
  )
}

export default Yangiliklar
