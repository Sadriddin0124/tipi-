import Campus from '@/app/components/Campus'
import Contact from '@/app/components/Contact'
import Events from '@/app/components/Events'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import News from '@/app/components/News'
import Pedagogue from '@/app/components/Pedagogue'
import Statistics from '@/app/components/Statistics'
import React, { useEffect, useState } from 'react'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <Hero/>
      <Statistics/>
      <Campus/>
      <News/>
      <Pedagogue/>
      <Events/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
